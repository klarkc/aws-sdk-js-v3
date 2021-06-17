import { __assign, __awaiter, __generator, __read, __values } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, getArrayIfSingleItem as __getArrayIfSingleItem, getValueFromTextNode as __getValueFromTextNode, } from "@aws-sdk/smithy-client";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";
export var serializeAws_queryAddTagsToResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAddTagsToResourceMessage(input, context)), { Action: "AddTagsToResource", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage(input, context)), { Action: "AuthorizeCacheSecurityGroupIngress", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryBatchApplyUpdateActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryBatchApplyUpdateActionMessage(input, context)), { Action: "BatchApplyUpdateAction", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryBatchStopUpdateActionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryBatchStopUpdateActionMessage(input, context)), { Action: "BatchStopUpdateAction", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCompleteMigrationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCompleteMigrationMessage(input, context)), { Action: "CompleteMigration", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCopySnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCopySnapshotMessage(input, context)), { Action: "CopySnapshot", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateCacheClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateCacheClusterMessage(input, context)), { Action: "CreateCacheCluster", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateCacheParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateCacheParameterGroupMessage(input, context)), { Action: "CreateCacheParameterGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateCacheSecurityGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateCacheSecurityGroupMessage(input, context)), { Action: "CreateCacheSecurityGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateCacheSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateCacheSubnetGroupMessage(input, context)), { Action: "CreateCacheSubnetGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateGlobalReplicationGroupMessage(input, context)), { Action: "CreateGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateReplicationGroupMessage(input, context)), { Action: "CreateReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateSnapshotMessage(input, context)), { Action: "CreateSnapshot", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateUserMessage(input, context)), { Action: "CreateUser", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryCreateUserGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryCreateUserGroupMessage(input, context)), { Action: "CreateUserGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage(input, context)), { Action: "DecreaseNodeGroupsInGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDecreaseReplicaCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDecreaseReplicaCountMessage(input, context)), { Action: "DecreaseReplicaCount", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteCacheClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteCacheClusterMessage(input, context)), { Action: "DeleteCacheCluster", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteCacheParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteCacheParameterGroupMessage(input, context)), { Action: "DeleteCacheParameterGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteCacheSecurityGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteCacheSecurityGroupMessage(input, context)), { Action: "DeleteCacheSecurityGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteCacheSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteCacheSubnetGroupMessage(input, context)), { Action: "DeleteCacheSubnetGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteGlobalReplicationGroupMessage(input, context)), { Action: "DeleteGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteReplicationGroupMessage(input, context)), { Action: "DeleteReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteSnapshotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteSnapshotMessage(input, context)), { Action: "DeleteSnapshot", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUserMessage(input, context)), { Action: "DeleteUser", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDeleteUserGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDeleteUserGroupMessage(input, context)), { Action: "DeleteUserGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheClustersMessage(input, context)), { Action: "DescribeCacheClusters", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheEngineVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheEngineVersionsMessage(input, context)), { Action: "DescribeCacheEngineVersions", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheParameterGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheParameterGroupsMessage(input, context)), { Action: "DescribeCacheParameterGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheParametersMessage(input, context)), { Action: "DescribeCacheParameters", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheSecurityGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheSecurityGroupsMessage(input, context)), { Action: "DescribeCacheSecurityGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeCacheSubnetGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeCacheSubnetGroupsMessage(input, context)), { Action: "DescribeCacheSubnetGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEngineDefaultParametersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEngineDefaultParametersMessage(input, context)), { Action: "DescribeEngineDefaultParameters", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeEventsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeEventsMessage(input, context)), { Action: "DescribeEvents", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeGlobalReplicationGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeGlobalReplicationGroupsMessage(input, context)), { Action: "DescribeGlobalReplicationGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReplicationGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReplicationGroupsMessage(input, context)), { Action: "DescribeReplicationGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReservedCacheNodesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReservedCacheNodesMessage(input, context)), { Action: "DescribeReservedCacheNodes", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeReservedCacheNodesOfferingsMessage(input, context)), { Action: "DescribeReservedCacheNodesOfferings", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeServiceUpdatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeServiceUpdatesMessage(input, context)), { Action: "DescribeServiceUpdates", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeSnapshotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeSnapshotsMessage(input, context)), { Action: "DescribeSnapshots", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeUpdateActionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeUpdateActionsMessage(input, context)), { Action: "DescribeUpdateActions", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeUserGroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeUserGroupsMessage(input, context)), { Action: "DescribeUserGroups", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDescribeUsersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDescribeUsersMessage(input, context)), { Action: "DescribeUsers", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryDisassociateGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryDisassociateGlobalReplicationGroupMessage(input, context)), { Action: "DisassociateGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryFailoverGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryFailoverGlobalReplicationGroupMessage(input, context)), { Action: "FailoverGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage(input, context)), { Action: "IncreaseNodeGroupsInGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryIncreaseReplicaCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryIncreaseReplicaCountMessage(input, context)), { Action: "IncreaseReplicaCount", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListAllowedNodeTypeModificationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListAllowedNodeTypeModificationsMessage(input, context)), { Action: "ListAllowedNodeTypeModifications", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryListTagsForResourceMessage(input, context)), { Action: "ListTagsForResource", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyCacheClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyCacheClusterMessage(input, context)), { Action: "ModifyCacheCluster", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyCacheParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyCacheParameterGroupMessage(input, context)), { Action: "ModifyCacheParameterGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyCacheSubnetGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyCacheSubnetGroupMessage(input, context)), { Action: "ModifyCacheSubnetGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyGlobalReplicationGroupMessage(input, context)), { Action: "ModifyGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyReplicationGroupMessage(input, context)), { Action: "ModifyReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyReplicationGroupShardConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyReplicationGroupShardConfigurationMessage(input, context)), { Action: "ModifyReplicationGroupShardConfiguration", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyUserCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyUserMessage(input, context)), { Action: "ModifyUser", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryModifyUserGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryModifyUserGroupMessage(input, context)), { Action: "ModifyUserGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryPurchaseReservedCacheNodesOfferingMessage(input, context)), { Action: "PurchaseReservedCacheNodesOffering", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage(input, context)), { Action: "RebalanceSlotsInGlobalReplicationGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRebootCacheClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRebootCacheClusterMessage(input, context)), { Action: "RebootCacheCluster", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRemoveTagsFromResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRemoveTagsFromResourceMessage(input, context)), { Action: "RemoveTagsFromResource", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryResetCacheParameterGroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryResetCacheParameterGroupMessage(input, context)), { Action: "ResetCacheParameterGroup", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryRevokeCacheSecurityGroupIngressCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryRevokeCacheSecurityGroupIngressMessage(input, context)), { Action: "RevokeCacheSecurityGroupIngress", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryStartMigrationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryStartMigrationMessage(input, context)), { Action: "StartMigration", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_queryTestFailoverCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-www-form-urlencoded",
        };
        body = buildFormUrlencodedString(__assign(__assign({}, serializeAws_queryTestFailoverMessage(input, context)), { Action: "TestFailover", Version: "2015-02-02" }));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_queryAddTagsToResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAddTagsToResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTagListMessage(data.AddTagsToResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAddTagsToResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "InvalidARNFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidARNFault": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 20];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 22];
                    case "UserNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult(data.AuthorizeCacheSecurityGroupIngressResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#AuthorizationAlreadyExistsFault": return [3 /*break*/, 2];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryBatchApplyUpdateActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryBatchApplyUpdateActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchApplyUpdateActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryBatchApplyUpdateActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceUpdateNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryBatchStopUpdateActionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryBatchStopUpdateActionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchStopUpdateActionResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryBatchStopUpdateActionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceUpdateNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCompleteMigrationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCompleteMigrationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCompleteMigrationResponse(data.CompleteMigrationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCompleteMigrationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 2];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 4];
                    case "ReplicationGroupNotUnderMigrationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReplicationGroupNotUnderMigrationFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCopySnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCopySnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCopySnapshotResult(data.CopySnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCopySnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidSnapshotStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidSnapshotStateFault": return [3 /*break*/, 6];
                    case "SnapshotAlreadyExistsFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault": return [3 /*break*/, 8];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 10];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault": return [3 /*break*/, 12];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateCacheClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateCacheClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateCacheClusterResult(data.CreateCacheClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateCacheClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, parsedBody, message;
    var _s;
    return __generator(this, function (_t) {
        switch (_t.label) {
            case 0:
                _a = [__assign({}, output)];
                _s = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_s.body = _t.sent(), _s)]));
                errorCode = "UnknownError";
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CacheClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterAlreadyExistsFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 10];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 12];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 14];
                    case "InvalidParameterValueException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 16];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 18];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 20];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault": return [3 /*break*/, 22];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 24];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 26];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 28];
                }
                return [3 /*break*/, 30];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_t.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 31];
            case 30:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _t.label = 31;
            case 31:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryCreateCacheParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateCacheParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateCacheParameterGroupResult(data.CreateCacheParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateCacheParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidCacheParameterGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateCacheSecurityGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateCacheSecurityGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateCacheSecurityGroupResult(data.CreateCacheSecurityGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateCacheSecurityGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSecurityGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSecurityGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "CacheSecurityGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSecurityGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateCacheSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateCacheSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateCacheSubnetGroupResult(data.CreateCacheSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateCacheSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSubnetGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "CacheSubnetGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSubnetGroupQuotaExceededFault": return [3 /*break*/, 4];
                    case "CacheSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault": return [3 /*break*/, 6];
                    case "InvalidSubnet": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidSubnet": return [3 /*break*/, 8];
                    case "SubnetNotAllowedFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#SubnetNotAllowedFault": return [3 /*break*/, 10];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateGlobalReplicationGroupResult(data.CreateGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupAlreadyExistsFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateReplicationGroupResult(data.CreateReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 10];
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 12];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 14];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 16];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 18];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 20];
                    case "InvalidParameterValueException": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 22];
                    case "InvalidUserGroupStateFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#InvalidUserGroupStateFault": return [3 /*break*/, 24];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 26];
                    case "NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 28];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 30];
                    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault": return [3 /*break*/, 30];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 32];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 32];
                    case "ReplicationGroupAlreadyExistsFault": return [3 /*break*/, 34];
                    case "com.amazonaws.elasticache#ReplicationGroupAlreadyExistsFault": return [3 /*break*/, 34];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 36];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 36];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 38];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 38];
                }
                return [3 /*break*/, 40];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_y.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 41];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCreateSnapshotResult(data.CreateSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 10];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 12];
                    case "SnapshotAlreadyExistsFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault": return [3 /*break*/, 14];
                    case "SnapshotFeatureNotSupportedFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault": return [3 /*break*/, 16];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault": return [3 /*break*/, 18];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUser(data.CreateUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DuplicateUserNameFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#DuplicateUserNameFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 8];
                    case "UserAlreadyExistsFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#UserAlreadyExistsFault": return [3 /*break*/, 10];
                    case "UserQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#UserQuotaExceededFault": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUserAlreadyExistsFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUserQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryCreateUserGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryCreateUserGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUserGroup(data.CreateUserGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryCreateUserGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DefaultUserRequired": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#DefaultUserRequired": return [3 /*break*/, 2];
                    case "DuplicateUserNameFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#DuplicateUserNameFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 8];
                    case "UserGroupAlreadyExistsFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#UserGroupAlreadyExistsFault": return [3 /*break*/, 10];
                    case "UserGroupQuotaExceededFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#UserGroupQuotaExceededFault": return [3 /*break*/, 12];
                    case "UserNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupAlreadyExistsFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult(data.DecreaseNodeGroupsInGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDecreaseReplicaCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDecreaseReplicaCountCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDecreaseReplicaCountResult(data.DecreaseReplicaCountResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDecreaseReplicaCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 2];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 4];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 14];
                    case "NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 16];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 18];
                    case "NoOperationFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#NoOperationFault": return [3 /*break*/, 20];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 22];
                    case "ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryNoOperationFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryDeleteCacheClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteCacheClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteCacheClusterResult(data.DeleteCacheClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteCacheClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "SnapshotAlreadyExistsFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault": return [3 /*break*/, 10];
                    case "SnapshotFeatureNotSupportedFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault": return [3 /*break*/, 12];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteCacheParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteCacheParameterGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteCacheParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteCacheSecurityGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteCacheSecurityGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteCacheSecurityGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteCacheSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteCacheSubnetGroupCommandError(output, context)];
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
var deserializeAws_queryDeleteCacheSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSubnetGroupInUse": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSubnetGroupInUse": return [3 /*break*/, 2];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupInUseResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteGlobalReplicationGroupResult(data.DeleteGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteReplicationGroupResult(data.DeleteReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "SnapshotAlreadyExistsFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault": return [3 /*break*/, 10];
                    case "SnapshotFeatureNotSupportedFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault": return [3 /*break*/, 12];
                    case "SnapshotQuotaExceededFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#SnapshotQuotaExceededFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteSnapshotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteSnapshotCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDeleteSnapshotResult(data.DeleteSnapshotResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteSnapshotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidSnapshotStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidSnapshotStateFault": return [3 /*break*/, 6];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUser(data.DeleteUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DefaultUserAssociatedToUserGroupFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#DefaultUserAssociatedToUserGroupFault": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidUserStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidUserStateFault": return [3 /*break*/, 6];
                    case "UserNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDeleteUserGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDeleteUserGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUserGroup(data.DeleteUserGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDeleteUserGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "InvalidUserGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidUserGroupStateFault": return [3 /*break*/, 4];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeCacheClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheClustersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheClusterMessage(data.DescribeCacheClustersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeCacheEngineVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheEngineVersionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheEngineVersionMessage(data.DescribeCacheEngineVersionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheEngineVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
export var deserializeAws_queryDescribeCacheParameterGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheParameterGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheParameterGroupsMessage(data.DescribeCacheParameterGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheParameterGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeCacheParametersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheParametersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheParameterGroupDetails(data.DescribeCacheParametersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheParametersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeCacheSecurityGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheSecurityGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheSecurityGroupMessage(data.DescribeCacheSecurityGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheSecurityGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeCacheSubnetGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeCacheSubnetGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheSubnetGroupMessage(data.DescribeCacheSubnetGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeCacheSubnetGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeGlobalReplicationGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeGlobalReplicationGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeGlobalReplicationGroupsResult(data.DescribeGlobalReplicationGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeGlobalReplicationGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeReplicationGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReplicationGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReplicationGroupMessage(data.DescribeReplicationGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReplicationGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeReservedCacheNodesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReservedCacheNodesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReservedCacheNodeMessage(data.DescribeReservedCacheNodesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReservedCacheNodesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ReservedCacheNodeNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryReservedCacheNodesOfferingMessage(data.DescribeReservedCacheNodesOfferingsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ReservedCacheNodesOfferingNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeServiceUpdatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeServiceUpdatesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeServiceUpdatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ServiceUpdateNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeSnapshotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeSnapshotsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeSnapshotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeUpdateActionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeUpdateActionsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUpdateActionsMessage(data.DescribeUpdateActionsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeUpdateActionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeUserGroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeUserGroupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeUserGroupsResult(data.DescribeUserGroupsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeUserGroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDescribeUsersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDescribeUsersCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDescribeUsersResult(data.DescribeUsersResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDescribeUsersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "UserNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryDisassociateGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryDisassociateGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryDisassociateGlobalReplicationGroupResult(data.DisassociateGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryDisassociateGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryFailoverGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryFailoverGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryFailoverGlobalReplicationGroupResult(data.FailoverGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryFailoverGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult(data.IncreaseNodeGroupsInGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryIncreaseReplicaCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryIncreaseReplicaCountCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryIncreaseReplicaCountResult(data.IncreaseReplicaCountResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryIncreaseReplicaCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault": return [3 /*break*/, 2];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 4];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 6];
                    case "InvalidKMSKeyFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidKMSKeyFault": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidParameterValueException": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 12];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 14];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 16];
                    case "NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 18];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 20];
                    case "NoOperationFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#NoOperationFault": return [3 /*break*/, 22];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryNoOperationFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryListAllowedNodeTypeModificationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryListAllowedNodeTypeModificationsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryAllowedNodeTypeModificationsMessage(data.ListAllowedNodeTypeModificationsResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryListAllowedNodeTypeModificationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "InvalidARNFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidARNFault": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 20];
                    case "UserNotFoundFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyCacheClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyCacheClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyCacheClusterResult(data.ModifyCacheClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyCacheClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 8];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 12];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 14];
                    case "InvalidParameterValueException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 16];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 18];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault": return [3 /*break*/, 20];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyCacheParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyCacheParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ModifyCacheParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyCacheParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyCacheSubnetGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyCacheSubnetGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyCacheSubnetGroupResult(data.ModifyCacheSubnetGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyCacheSubnetGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 2];
                    case "CacheSubnetQuotaExceededFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault": return [3 /*break*/, 4];
                    case "InvalidSubnet": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidSubnet": return [3 /*break*/, 6];
                    case "SubnetInUse": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#SubnetInUse": return [3 /*break*/, 8];
                    case "SubnetNotAllowedFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#SubnetNotAllowedFault": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetInUseResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyGlobalReplicationGroupResult(data.ModifyGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyReplicationGroupResult(data.ModifyReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 8];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 10];
                    case "InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 12];
                    case "InvalidKMSKeyFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidKMSKeyFault": return [3 /*break*/, 14];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 16];
                    case "InvalidParameterValueException": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 18];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 20];
                    case "InvalidUserGroupStateFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#InvalidUserGroupStateFault": return [3 /*break*/, 22];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 24];
                    case "NodeQuotaForClusterExceededFault": return [3 /*break*/, 26];
                    case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault": return [3 /*break*/, 26];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 28];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 28];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 30];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 30];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 32];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 32];
                }
                return [3 /*break*/, 34];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_v.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 35];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryModifyReplicationGroupShardConfigurationResult(data.ModifyReplicationGroupShardConfigurationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InsufficientCacheClusterCapacityFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault": return [3 /*break*/, 2];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidKMSKeyFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidKMSKeyFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "InvalidVPCNetworkStateFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault": return [3 /*break*/, 14];
                    case "NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault": return [3 /*break*/, 16];
                    case "NodeQuotaForCustomerExceededFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault": return [3 /*break*/, 18];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyUserCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyUserCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUser(data.ModifyUserResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyUserCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "InvalidUserStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidUserStateFault": return [3 /*break*/, 6];
                    case "UserNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryModifyUserGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryModifyUserGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryUserGroup(data.ModifyUserGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryModifyUserGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "DefaultUserRequired": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#DefaultUserRequired": return [3 /*break*/, 2];
                    case "DuplicateUserNameFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#DuplicateUserNameFault": return [3 /*break*/, 4];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidUserGroupStateFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidUserGroupStateFault": return [3 /*break*/, 10];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 12];
                    case "UserNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryPurchaseReservedCacheNodesOfferingResult(data.PurchaseReservedCacheNodesOfferingResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ReservedCacheNodeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReservedCacheNodeAlreadyExistsFault": return [3 /*break*/, 6];
                    case "ReservedCacheNodeQuotaExceededFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#ReservedCacheNodeQuotaExceededFault": return [3 /*break*/, 8];
                    case "ReservedCacheNodesOfferingNotFoundFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault": return [3 /*break*/, 10];
                    case "TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)];
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
export var deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult(data.RebalanceSlotsInGlobalReplicationGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidParameterValueException": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryRebootCacheClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRebootCacheClusterCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRebootCacheClusterResult(data.RebootCacheClusterResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRebootCacheClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
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
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRemoveTagsFromResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTagListMessage(data.RemoveTagsFromResourceResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRemoveTagsFromResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                errorCode = loadQueryErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheClusterNotFoundFault": return [3 /*break*/, 2];
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 4];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 6];
                    case "CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault": return [3 /*break*/, 8];
                    case "InvalidARNFault": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidARNFault": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 14];
                    case "ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault": return [3 /*break*/, 16];
                    case "SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#SnapshotNotFoundFault": return [3 /*break*/, 18];
                    case "TagNotFoundFault": return [3 /*break*/, 20];
                    case "com.amazonaws.elasticache#TagNotFoundFault": return [3 /*break*/, 20];
                    case "UserGroupNotFoundFault": return [3 /*break*/, 22];
                    case "com.amazonaws.elasticache#UserGroupNotFoundFault": return [3 /*break*/, 22];
                    case "UserNotFoundFault": return [3 /*break*/, 24];
                    case "com.amazonaws.elasticache#UserNotFoundFault": return [3 /*break*/, 24];
                }
                return [3 /*break*/, 26];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_queryTagNotFoundFaultResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_r.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 27];
            case 26:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
                response = __assign(__assign({}, parsedBody.Error), { name: "" + errorCode, message: parsedBody.Error.message || parsedBody.Error.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _r.label = 27;
            case 27:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_queryResetCacheParameterGroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryResetCacheParameterGroupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ResetCacheParameterGroupResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryResetCacheParameterGroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault": return [3 /*break*/, 2];
                    case "InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault": return [3 /*break*/, 4];
                    case "InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryRevokeCacheSecurityGroupIngressResult(data.RevokeCacheSecurityGroupIngressResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#AuthorizationNotFoundFault": return [3 /*break*/, 2];
                    case "CacheSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault": return [3 /*break*/, 4];
                    case "InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_queryStartMigrationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryStartMigrationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryStartMigrationResponse(data.StartMigrationResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryStartMigrationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 4];
                    case "ReplicationGroupAlreadyUnderMigrationFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault": return [3 /*break*/, 6];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
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
export var deserializeAws_queryTestFailoverCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_queryTestFailoverCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_queryTestFailoverResult(data.TestFailoverResult, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_queryTestFailoverCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "APICallRateForCustomerExceededFault": return [3 /*break*/, 2];
                    case "com.amazonaws.elasticache#APICallRateForCustomerExceededFault": return [3 /*break*/, 2];
                    case "InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "com.amazonaws.elasticache#InvalidCacheClusterStateFault": return [3 /*break*/, 4];
                    case "InvalidKMSKeyFault": return [3 /*break*/, 6];
                    case "com.amazonaws.elasticache#InvalidKMSKeyFault": return [3 /*break*/, 6];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "com.amazonaws.elasticache#InvalidParameterCombinationException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.elasticache#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault": return [3 /*break*/, 12];
                    case "NodeGroupNotFoundFault": return [3 /*break*/, 14];
                    case "com.amazonaws.elasticache#NodeGroupNotFoundFault": return [3 /*break*/, 14];
                    case "ReplicationGroupNotFoundFault": return [3 /*break*/, 16];
                    case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault": return [3 /*break*/, 16];
                    case "TestFailoverNotAvailableFault": return [3 /*break*/, 18];
                    case "com.amazonaws.elasticache#TestFailoverNotAvailableFault": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_queryAPICallRateForCustomerExceededFaultResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_queryNodeGroupNotFoundFaultResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_queryTestFailoverNotAvailableFaultResponse(parsedOutput, context)];
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
var deserializeAws_queryAPICallRateForCustomerExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryAPICallRateForCustomerExceededFault(body.Error, context);
        contents = __assign({ name: "APICallRateForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryCacheClusterAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheClusterAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "CacheClusterAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheClusterNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheClusterNotFoundFault(body.Error, context);
        contents = __assign({ name: "CacheClusterNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheParameterGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "CacheParameterGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheParameterGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheParameterGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "CacheParameterGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheParameterGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "CacheParameterGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSecurityGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "CacheSecurityGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSecurityGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "CacheSecurityGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSecurityGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "CacheSecurityGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSubnetGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "CacheSubnetGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSubnetGroupInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSubnetGroupInUse(body.Error, context);
        contents = __assign({ name: "CacheSubnetGroupInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSubnetGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "CacheSubnetGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSubnetGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "CacheSubnetGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryCacheSubnetQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryCacheSubnetQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "CacheSubnetQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryClusterQuotaForCustomerExceededFault(body.Error, context);
        contents = __assign({ name: "ClusterQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDefaultUserAssociatedToUserGroupFault(body.Error, context);
        contents = __assign({ name: "DefaultUserAssociatedToUserGroupFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDefaultUserRequiredResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDefaultUserRequired(body.Error, context);
        contents = __assign({ name: "DefaultUserRequired", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryDuplicateUserNameFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryDuplicateUserNameFault(body.Error, context);
        contents = __assign({ name: "DuplicateUserNameFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "GlobalReplicationGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryGlobalReplicationGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "GlobalReplicationGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInsufficientCacheClusterCapacityFault(body.Error, context);
        contents = __assign({ name: "InsufficientCacheClusterCapacityFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidARNFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidARNFault(body.Error, context);
        contents = __assign({ name: "InvalidARNFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidCacheClusterStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidCacheClusterStateFault(body.Error, context);
        contents = __assign({ name: "InvalidCacheClusterStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidCacheParameterGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidCacheParameterGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidCacheSecurityGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidCacheSecurityGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidGlobalReplicationGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidGlobalReplicationGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidKMSKeyFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidKMSKeyFault(body.Error, context);
        contents = __assign({ name: "InvalidKMSKeyFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidParameterCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
        contents = __assign({ name: "InvalidParameterCombinationException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
        contents = __assign({ name: "InvalidParameterValueException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidReplicationGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidReplicationGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidReplicationGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidSnapshotStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidSnapshotStateFault(body.Error, context);
        contents = __assign({ name: "InvalidSnapshotStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryInvalidUserGroupStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidUserGroupStateFault(body.Error, context);
        contents = __assign({ name: "InvalidUserGroupStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryInvalidUserStateFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryInvalidUserStateFault(body.Error, context);
        contents = __assign({ name: "InvalidUserStateFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_queryNodeGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNodeGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "NodeGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "NodeGroupsPerReplicationGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNodeQuotaForClusterExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNodeQuotaForClusterExceededFault(body.Error, context);
        contents = __assign({ name: "NodeQuotaForClusterExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNodeQuotaForCustomerExceededFault(body.Error, context);
        contents = __assign({ name: "NodeQuotaForCustomerExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryNoOperationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryNoOperationFault(body.Error, context);
        contents = __assign({ name: "NoOperationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReplicationGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ReplicationGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault(body.Error, context);
        contents = __assign({ name: "ReplicationGroupAlreadyUnderMigrationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReplicationGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReplicationGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "ReplicationGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReplicationGroupNotUnderMigrationFault(body.Error, context);
        contents = __assign({ name: "ReplicationGroupNotUnderMigrationFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedCacheNodeAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "ReservedCacheNodeAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedCacheNodeNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedCacheNodeNotFoundFault(body.Error, context);
        contents = __assign({ name: "ReservedCacheNodeNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedCacheNodeQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "ReservedCacheNodeQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryReservedCacheNodesOfferingNotFoundFault(body.Error, context);
        contents = __assign({ name: "ReservedCacheNodesOfferingNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryServiceLinkedRoleNotFoundFault(body.Error, context);
        contents = __assign({ name: "ServiceLinkedRoleNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryServiceUpdateNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryServiceUpdateNotFoundFault(body.Error, context);
        contents = __assign({ name: "ServiceUpdateNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "SnapshotAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotFeatureNotSupportedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotFeatureNotSupportedFault(body.Error, context);
        contents = __assign({ name: "SnapshotFeatureNotSupportedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySnapshotNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySnapshotNotFoundFault(body.Error, context);
        contents = __assign({ name: "SnapshotNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
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
var deserializeAws_querySubnetInUseResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubnetInUse(body.Error, context);
        contents = __assign({ name: "SubnetInUse", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_querySubnetNotAllowedFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_querySubnetNotAllowedFault(body.Error, context);
        contents = __assign({ name: "SubnetNotAllowedFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTagNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTagNotFoundFault(body.Error, context);
        contents = __assign({ name: "TagNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTagQuotaPerResourceExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTagQuotaPerResourceExceeded(body.Error, context);
        contents = __assign({ name: "TagQuotaPerResourceExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryTestFailoverNotAvailableFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryTestFailoverNotAvailableFault(body.Error, context);
        contents = __assign({ name: "TestFailoverNotAvailableFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "UserAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserGroupAlreadyExistsFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserGroupAlreadyExistsFault(body.Error, context);
        contents = __assign({ name: "UserGroupAlreadyExistsFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserGroupNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserGroupNotFoundFault(body.Error, context);
        contents = __assign({ name: "UserGroupNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserGroupQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserGroupQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "UserGroupQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserNotFoundFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserNotFoundFault(body.Error, context);
        contents = __assign({ name: "UserNotFoundFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_queryUserQuotaExceededFaultResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_queryUserQuotaExceededFault(body.Error, context);
        contents = __assign({ name: "UserQuotaExceededFault", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
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
var serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage = function (input, context) {
    var entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
var serializeAws_queryAvailabilityZonesList = function (input, context) {
    var e_1, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_1 = __values(input), input_1_1 = input_1.next(); !input_1_1.done; input_1_1 = input_1.next()) {
            var entry = input_1_1.value;
            if (entry === null) {
                continue;
            }
            entries["AvailabilityZone." + counter] = entry;
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
var serializeAws_queryBatchApplyUpdateActionMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        var memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicationGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        var memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheClusterIds." + key;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
var serializeAws_queryBatchStopUpdateActionMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        var memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicationGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        var memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheClusterIds." + key;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
var serializeAws_queryCacheClusterIdList = function (input, context) {
    var e_2, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_2 = __values(input), input_2_1 = input_2.next(); !input_2_1.done; input_2_1 = input_2.next()) {
            var entry = input_2_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryCacheNodeIdsList = function (input, context) {
    var e_3, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_3 = __values(input), input_3_1 = input_3.next(); !input_3_1.done; input_3_1 = input_3.next()) {
            var entry = input_3_1.value;
            if (entry === null) {
                continue;
            }
            entries["CacheNodeId." + counter] = entry;
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
var serializeAws_queryCacheSecurityGroupNameList = function (input, context) {
    var e_4, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_4 = __values(input), input_4_1 = input_4.next(); !input_4_1.done; input_4_1 = input_4.next()) {
            var entry = input_4_1.value;
            if (entry === null) {
                continue;
            }
            entries["CacheSecurityGroupName." + counter] = entry;
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
var serializeAws_queryCloudWatchLogsDestinationDetails = function (input, context) {
    var entries = {};
    if (input.LogGroup !== undefined && input.LogGroup !== null) {
        entries["LogGroup"] = input.LogGroup;
    }
    return entries;
};
var serializeAws_queryCompleteMigrationMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
var serializeAws_queryConfigureShard = function (input, context) {
    var entries = {};
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.PreferredAvailabilityZones !== undefined && input.PreferredAvailabilityZones !== null) {
        var memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredAvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.PreferredOutpostArns !== undefined && input.PreferredOutpostArns !== null) {
        var memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredOutpostArns." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCopySnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SourceSnapshotName !== undefined && input.SourceSnapshotName !== null) {
        entries["SourceSnapshotName"] = input.SourceSnapshotName;
    }
    if (input.TargetSnapshotName !== undefined && input.TargetSnapshotName !== null) {
        entries["TargetSnapshotName"] = input.TargetSnapshotName;
    }
    if (input.TargetBucket !== undefined && input.TargetBucket !== null) {
        entries["TargetBucket"] = input.TargetBucket;
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
var serializeAws_queryCreateCacheClusterMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.AZMode !== undefined && input.AZMode !== null) {
        entries["AZMode"] = input.AZMode;
    }
    if (input.PreferredAvailabilityZone !== undefined && input.PreferredAvailabilityZone !== null) {
        entries["PreferredAvailabilityZone"] = input.PreferredAvailabilityZone;
    }
    if (input.PreferredAvailabilityZones !== undefined && input.PreferredAvailabilityZones !== null) {
        var memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredAvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.NumCacheNodes !== undefined && input.NumCacheNodes !== null) {
        entries["NumCacheNodes"] = input.NumCacheNodes;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined && input.CacheSecurityGroupNames !== null) {
        var memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheSecurityGroupNames." + key;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        var memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroupIds." + key;
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
    if (input.SnapshotArns !== undefined && input.SnapshotArns !== null) {
        var memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SnapshotArns." + key;
            entries[loc] = value;
        });
    }
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.NotificationTopicArn !== undefined && input.NotificationTopicArn !== null) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.SnapshotRetentionLimit !== undefined && input.SnapshotRetentionLimit !== null) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined && input.SnapshotWindow !== null) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.AuthToken !== undefined && input.AuthToken !== null) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.OutpostMode !== undefined && input.OutpostMode !== null) {
        entries["OutpostMode"] = input.OutpostMode;
    }
    if (input.PreferredOutpostArn !== undefined && input.PreferredOutpostArn !== null) {
        entries["PreferredOutpostArn"] = input.PreferredOutpostArn;
    }
    if (input.PreferredOutpostArns !== undefined && input.PreferredOutpostArns !== null) {
        var memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredOutpostArns." + key;
            entries[loc] = value;
        });
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        var memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LogDeliveryConfigurations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateCacheParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheParameterGroupFamily !== undefined && input.CacheParameterGroupFamily !== null) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
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
var serializeAws_queryCreateCacheSecurityGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
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
var serializeAws_queryCreateCacheSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSubnetGroupDescription !== undefined && input.CacheSubnetGroupDescription !== null) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
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
var serializeAws_queryCreateGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupIdSuffix !== undefined && input.GlobalReplicationGroupIdSuffix !== null) {
        entries["GlobalReplicationGroupIdSuffix"] = input.GlobalReplicationGroupIdSuffix;
    }
    if (input.GlobalReplicationGroupDescription !== undefined && input.GlobalReplicationGroupDescription !== null) {
        entries["GlobalReplicationGroupDescription"] = input.GlobalReplicationGroupDescription;
    }
    if (input.PrimaryReplicationGroupId !== undefined && input.PrimaryReplicationGroupId !== null) {
        entries["PrimaryReplicationGroupId"] = input.PrimaryReplicationGroupId;
    }
    return entries;
};
var serializeAws_queryCreateReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReplicationGroupDescription !== undefined && input.ReplicationGroupDescription !== null) {
        entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
    }
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.PrimaryClusterId !== undefined && input.PrimaryClusterId !== null) {
        entries["PrimaryClusterId"] = input.PrimaryClusterId;
    }
    if (input.AutomaticFailoverEnabled !== undefined && input.AutomaticFailoverEnabled !== null) {
        entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
    }
    if (input.MultiAZEnabled !== undefined && input.MultiAZEnabled !== null) {
        entries["MultiAZEnabled"] = input.MultiAZEnabled;
    }
    if (input.NumCacheClusters !== undefined && input.NumCacheClusters !== null) {
        entries["NumCacheClusters"] = input.NumCacheClusters;
    }
    if (input.PreferredCacheClusterAZs !== undefined && input.PreferredCacheClusterAZs !== null) {
        var memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredCacheClusterAZs, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredCacheClusterAZs." + key;
            entries[loc] = value;
        });
    }
    if (input.NumNodeGroups !== undefined && input.NumNodeGroups !== null) {
        entries["NumNodeGroups"] = input.NumNodeGroups;
    }
    if (input.ReplicasPerNodeGroup !== undefined && input.ReplicasPerNodeGroup !== null) {
        entries["ReplicasPerNodeGroup"] = input.ReplicasPerNodeGroup;
    }
    if (input.NodeGroupConfiguration !== undefined && input.NodeGroupConfiguration !== null) {
        var memberEntries = serializeAws_queryNodeGroupConfigurationList(input.NodeGroupConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "NodeGroupConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSecurityGroupNames !== undefined && input.CacheSecurityGroupNames !== null) {
        var memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheSecurityGroupNames." + key;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        var memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroupIds." + key;
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
    if (input.SnapshotArns !== undefined && input.SnapshotArns !== null) {
        var memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SnapshotArns." + key;
            entries[loc] = value;
        });
    }
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.NotificationTopicArn !== undefined && input.NotificationTopicArn !== null) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.SnapshotRetentionLimit !== undefined && input.SnapshotRetentionLimit !== null) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined && input.SnapshotWindow !== null) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.AuthToken !== undefined && input.AuthToken !== null) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.TransitEncryptionEnabled !== undefined && input.TransitEncryptionEnabled !== null) {
        entries["TransitEncryptionEnabled"] = input.TransitEncryptionEnabled;
    }
    if (input.AtRestEncryptionEnabled !== undefined && input.AtRestEncryptionEnabled !== null) {
        entries["AtRestEncryptionEnabled"] = input.AtRestEncryptionEnabled;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.UserGroupIds !== undefined && input.UserGroupIds !== null) {
        var memberEntries = serializeAws_queryUserGroupIdListInput(input.UserGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        var memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LogDeliveryConfigurations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryCreateSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
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
var serializeAws_queryCreateUserGroupMessage = function (input, context) {
    var entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.UserIds !== undefined && input.UserIds !== null) {
        var memberEntries = serializeAws_queryUserIdListInput(input.UserIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserIds." + key;
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
var serializeAws_queryCreateUserMessage = function (input, context) {
    var entries = {};
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.Passwords !== undefined && input.Passwords !== null) {
        var memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Passwords." + key;
            entries[loc] = value;
        });
    }
    if (input.AccessString !== undefined && input.AccessString !== null) {
        entries["AccessString"] = input.AccessString;
    }
    if (input.NoPasswordRequired !== undefined && input.NoPasswordRequired !== null) {
        entries["NoPasswordRequired"] = input.NoPasswordRequired;
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
var serializeAws_queryCustomerNodeEndpoint = function (input, context) {
    var entries = {};
    if (input.Address !== undefined && input.Address !== null) {
        entries["Address"] = input.Address;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    return entries;
};
var serializeAws_queryCustomerNodeEndpointList = function (input, context) {
    var e_5, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_5 = __values(input), input_5_1 = input_5.next(); !input_5_1.done; input_5_1 = input_5.next()) {
            var entry = input_5_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryCustomerNodeEndpoint(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
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
var serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.NodeGroupCount !== undefined && input.NodeGroupCount !== null) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.GlobalNodeGroupsToRemove !== undefined && input.GlobalNodeGroupsToRemove !== null) {
        var memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "GlobalNodeGroupsToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.GlobalNodeGroupsToRetain !== undefined && input.GlobalNodeGroupsToRetain !== null) {
        var memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRetain, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "GlobalNodeGroupsToRetain." + key;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
var serializeAws_queryDecreaseReplicaCountMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined && input.ReplicaConfiguration !== null) {
        var memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicaConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.ReplicasToRemove !== undefined && input.ReplicasToRemove !== null) {
        var memberEntries = serializeAws_queryRemoveReplicasList(input.ReplicasToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicasToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
var serializeAws_queryDeleteCacheClusterMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.FinalSnapshotIdentifier !== undefined && input.FinalSnapshotIdentifier !== null) {
        entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteCacheParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteCacheSecurityGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteCacheSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    return entries;
};
var serializeAws_queryDeleteGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.RetainPrimaryReplicationGroup !== undefined && input.RetainPrimaryReplicationGroup !== null) {
        entries["RetainPrimaryReplicationGroup"] = input.RetainPrimaryReplicationGroup;
    }
    return entries;
};
var serializeAws_queryDeleteReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.RetainPrimaryCluster !== undefined && input.RetainPrimaryCluster !== null) {
        entries["RetainPrimaryCluster"] = input.RetainPrimaryCluster;
    }
    if (input.FinalSnapshotIdentifier !== undefined && input.FinalSnapshotIdentifier !== null) {
        entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
    }
    return entries;
};
var serializeAws_queryDeleteSnapshotMessage = function (input, context) {
    var entries = {};
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    return entries;
};
var serializeAws_queryDeleteUserGroupMessage = function (input, context) {
    var entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    return entries;
};
var serializeAws_queryDeleteUserMessage = function (input, context) {
    var entries = {};
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
    }
    return entries;
};
var serializeAws_queryDescribeCacheClustersMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.ShowCacheNodeInfo !== undefined && input.ShowCacheNodeInfo !== null) {
        entries["ShowCacheNodeInfo"] = input.ShowCacheNodeInfo;
    }
    if (input.ShowCacheClustersNotInReplicationGroups !== undefined &&
        input.ShowCacheClustersNotInReplicationGroups !== null) {
        entries["ShowCacheClustersNotInReplicationGroups"] = input.ShowCacheClustersNotInReplicationGroups;
    }
    return entries;
};
var serializeAws_queryDescribeCacheEngineVersionsMessage = function (input, context) {
    var entries = {};
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.CacheParameterGroupFamily !== undefined && input.CacheParameterGroupFamily !== null) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
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
    return entries;
};
var serializeAws_queryDescribeCacheParameterGroupsMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeCacheParametersMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
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
var serializeAws_queryDescribeCacheSecurityGroupsMessage = function (input, context) {
    var entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeCacheSubnetGroupsMessage = function (input, context) {
    var entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
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
    if (input.CacheParameterGroupFamily !== undefined && input.CacheParameterGroupFamily !== null) {
        entries["CacheParameterGroupFamily"] = input.CacheParameterGroupFamily;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
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
var serializeAws_queryDescribeGlobalReplicationGroupsMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.ShowMemberInfo !== undefined && input.ShowMemberInfo !== null) {
        entries["ShowMemberInfo"] = input.ShowMemberInfo;
    }
    return entries;
};
var serializeAws_queryDescribeReplicationGroupsMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeReservedCacheNodesMessage = function (input, context) {
    var entries = {};
    if (input.ReservedCacheNodeId !== undefined && input.ReservedCacheNodeId !== null) {
        entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
    }
    if (input.ReservedCacheNodesOfferingId !== undefined && input.ReservedCacheNodesOfferingId !== null) {
        entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Duration !== undefined && input.Duration !== null) {
        entries["Duration"] = input.Duration;
    }
    if (input.ProductDescription !== undefined && input.ProductDescription !== null) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.OfferingType !== undefined && input.OfferingType !== null) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeReservedCacheNodesOfferingsMessage = function (input, context) {
    var entries = {};
    if (input.ReservedCacheNodesOfferingId !== undefined && input.ReservedCacheNodesOfferingId !== null) {
        entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.Duration !== undefined && input.Duration !== null) {
        entries["Duration"] = input.Duration;
    }
    if (input.ProductDescription !== undefined && input.ProductDescription !== null) {
        entries["ProductDescription"] = input.ProductDescription;
    }
    if (input.OfferingType !== undefined && input.OfferingType !== null) {
        entries["OfferingType"] = input.OfferingType;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeServiceUpdatesMessage = function (input, context) {
    var entries = {};
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ServiceUpdateStatus !== undefined && input.ServiceUpdateStatus !== null) {
        var memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ServiceUpdateStatus." + key;
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
var serializeAws_queryDescribeSnapshotsMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    if (input.SnapshotSource !== undefined && input.SnapshotSource !== null) {
        entries["SnapshotSource"] = input.SnapshotSource;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.ShowNodeGroupConfig !== undefined && input.ShowNodeGroupConfig !== null) {
        entries["ShowNodeGroupConfig"] = input.ShowNodeGroupConfig;
    }
    return entries;
};
var serializeAws_queryDescribeUpdateActionsMessage = function (input, context) {
    var entries = {};
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        var memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicationGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        var memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheClusterIds." + key;
            entries[loc] = value;
        });
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.ServiceUpdateStatus !== undefined && input.ServiceUpdateStatus !== null) {
        var memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ServiceUpdateStatus." + key;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateTimeRange !== undefined && input.ServiceUpdateTimeRange !== null) {
        var memberEntries = serializeAws_queryTimeRangeFilter(input.ServiceUpdateTimeRange, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ServiceUpdateTimeRange." + key;
            entries[loc] = value;
        });
    }
    if (input.UpdateActionStatus !== undefined && input.UpdateActionStatus !== null) {
        var memberEntries = serializeAws_queryUpdateActionStatusList(input.UpdateActionStatus, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UpdateActionStatus." + key;
            entries[loc] = value;
        });
    }
    if (input.ShowNodeLevelUpdateStatus !== undefined && input.ShowNodeLevelUpdateStatus !== null) {
        entries["ShowNodeLevelUpdateStatus"] = input.ShowNodeLevelUpdateStatus;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeUserGroupsMessage = function (input, context) {
    var entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    return entries;
};
var serializeAws_queryDescribeUsersMessage = function (input, context) {
    var entries = {};
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
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
var serializeAws_queryDestinationDetails = function (input, context) {
    var entries = {};
    if (input.CloudWatchLogsDetails !== undefined && input.CloudWatchLogsDetails !== null) {
        var memberEntries = serializeAws_queryCloudWatchLogsDestinationDetails(input.CloudWatchLogsDetails, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CloudWatchLogsDetails." + key;
            entries[loc] = value;
        });
    }
    if (input.KinesisFirehoseDetails !== undefined && input.KinesisFirehoseDetails !== null) {
        var memberEntries = serializeAws_queryKinesisFirehoseDestinationDetails(input.KinesisFirehoseDetails, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "KinesisFirehoseDetails." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryDisassociateGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReplicationGroupRegion !== undefined && input.ReplicationGroupRegion !== null) {
        entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
    }
    return entries;
};
var serializeAws_queryFailoverGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.PrimaryRegion !== undefined && input.PrimaryRegion !== null) {
        entries["PrimaryRegion"] = input.PrimaryRegion;
    }
    if (input.PrimaryReplicationGroupId !== undefined && input.PrimaryReplicationGroupId !== null) {
        entries["PrimaryReplicationGroupId"] = input.PrimaryReplicationGroupId;
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
    var e_6, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_6 = __values(input), input_6_1 = input_6.next(); !input_6_1.done; input_6_1 = input_6.next()) {
            var entry = input_6_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryFilter(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["member." + counter + "." + key] = value;
            });
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
var serializeAws_queryFilterValueList = function (input, context) {
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
var serializeAws_queryGlobalNodeGroupIdList = function (input, context) {
    var e_8, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_8 = __values(input), input_8_1 = input_8.next(); !input_8_1.done; input_8_1 = input_8.next()) {
            var entry = input_8_1.value;
            if (entry === null) {
                continue;
            }
            entries["GlobalNodeGroupId." + counter] = entry;
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
var serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.NodeGroupCount !== undefined && input.NodeGroupCount !== null) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.RegionalConfigurations !== undefined && input.RegionalConfigurations !== null) {
        var memberEntries = serializeAws_queryRegionalConfigurationList(input.RegionalConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "RegionalConfigurations." + key;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
var serializeAws_queryIncreaseReplicaCountMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined && input.ReplicaConfiguration !== null) {
        var memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicaConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
var serializeAws_queryKeyList = function (input, context) {
    var e_9, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_9 = __values(input), input_9_1 = input_9.next(); !input_9_1.done; input_9_1 = input_9.next()) {
            var entry = input_9_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryKinesisFirehoseDestinationDetails = function (input, context) {
    var entries = {};
    if (input.DeliveryStream !== undefined && input.DeliveryStream !== null) {
        entries["DeliveryStream"] = input.DeliveryStream;
    }
    return entries;
};
var serializeAws_queryListAllowedNodeTypeModificationsMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
var serializeAws_queryListTagsForResourceMessage = function (input, context) {
    var entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    return entries;
};
var serializeAws_queryLogDeliveryConfigurationRequest = function (input, context) {
    var entries = {};
    if (input.LogType !== undefined && input.LogType !== null) {
        entries["LogType"] = input.LogType;
    }
    if (input.DestinationType !== undefined && input.DestinationType !== null) {
        entries["DestinationType"] = input.DestinationType;
    }
    if (input.DestinationDetails !== undefined && input.DestinationDetails !== null) {
        var memberEntries = serializeAws_queryDestinationDetails(input.DestinationDetails, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "DestinationDetails." + key;
            entries[loc] = value;
        });
    }
    if (input.LogFormat !== undefined && input.LogFormat !== null) {
        entries["LogFormat"] = input.LogFormat;
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
var serializeAws_queryLogDeliveryConfigurationRequestList = function (input, context) {
    var e_10, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_10 = __values(input), input_10_1 = input_10.next(); !input_10_1.done; input_10_1 = input_10.next()) {
            var entry = input_10_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryLogDeliveryConfigurationRequest(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["LogDeliveryConfigurationRequest." + counter + "." + key] = value;
            });
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
var serializeAws_queryModifyCacheClusterMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.NumCacheNodes !== undefined && input.NumCacheNodes !== null) {
        entries["NumCacheNodes"] = input.NumCacheNodes;
    }
    if (input.CacheNodeIdsToRemove !== undefined && input.CacheNodeIdsToRemove !== null) {
        var memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheNodeIdsToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.AZMode !== undefined && input.AZMode !== null) {
        entries["AZMode"] = input.AZMode;
    }
    if (input.NewAvailabilityZones !== undefined && input.NewAvailabilityZones !== null) {
        var memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.NewAvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "NewAvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.CacheSecurityGroupNames !== undefined && input.CacheSecurityGroupNames !== null) {
        var memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheSecurityGroupNames." + key;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        var memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.NotificationTopicArn !== undefined && input.NotificationTopicArn !== null) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.NotificationTopicStatus !== undefined && input.NotificationTopicStatus !== null) {
        entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.SnapshotRetentionLimit !== undefined && input.SnapshotRetentionLimit !== null) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined && input.SnapshotWindow !== null) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.AuthToken !== undefined && input.AuthToken !== null) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AuthTokenUpdateStrategy !== undefined && input.AuthTokenUpdateStrategy !== null) {
        entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        var memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LogDeliveryConfigurations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyCacheParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ParameterNameValues !== undefined && input.ParameterNameValues !== null) {
        var memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ParameterNameValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyCacheSubnetGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSubnetGroupDescription !== undefined && input.CacheSubnetGroupDescription !== null) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
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
var serializeAws_queryModifyGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.GlobalReplicationGroupDescription !== undefined && input.GlobalReplicationGroupDescription !== null) {
        entries["GlobalReplicationGroupDescription"] = input.GlobalReplicationGroupDescription;
    }
    if (input.AutomaticFailoverEnabled !== undefined && input.AutomaticFailoverEnabled !== null) {
        entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
    }
    return entries;
};
var serializeAws_queryModifyReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReplicationGroupDescription !== undefined && input.ReplicationGroupDescription !== null) {
        entries["ReplicationGroupDescription"] = input.ReplicationGroupDescription;
    }
    if (input.PrimaryClusterId !== undefined && input.PrimaryClusterId !== null) {
        entries["PrimaryClusterId"] = input.PrimaryClusterId;
    }
    if (input.SnapshottingClusterId !== undefined && input.SnapshottingClusterId !== null) {
        entries["SnapshottingClusterId"] = input.SnapshottingClusterId;
    }
    if (input.AutomaticFailoverEnabled !== undefined && input.AutomaticFailoverEnabled !== null) {
        entries["AutomaticFailoverEnabled"] = input.AutomaticFailoverEnabled;
    }
    if (input.MultiAZEnabled !== undefined && input.MultiAZEnabled !== null) {
        entries["MultiAZEnabled"] = input.MultiAZEnabled;
    }
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.CacheSecurityGroupNames !== undefined && input.CacheSecurityGroupNames !== null) {
        var memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheSecurityGroupNames." + key;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        var memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "SecurityGroupIds." + key;
            entries[loc] = value;
        });
    }
    if (input.PreferredMaintenanceWindow !== undefined && input.PreferredMaintenanceWindow !== null) {
        entries["PreferredMaintenanceWindow"] = input.PreferredMaintenanceWindow;
    }
    if (input.NotificationTopicArn !== undefined && input.NotificationTopicArn !== null) {
        entries["NotificationTopicArn"] = input.NotificationTopicArn;
    }
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.NotificationTopicStatus !== undefined && input.NotificationTopicStatus !== null) {
        entries["NotificationTopicStatus"] = input.NotificationTopicStatus;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.SnapshotRetentionLimit !== undefined && input.SnapshotRetentionLimit !== null) {
        entries["SnapshotRetentionLimit"] = input.SnapshotRetentionLimit;
    }
    if (input.SnapshotWindow !== undefined && input.SnapshotWindow !== null) {
        entries["SnapshotWindow"] = input.SnapshotWindow;
    }
    if (input.CacheNodeType !== undefined && input.CacheNodeType !== null) {
        entries["CacheNodeType"] = input.CacheNodeType;
    }
    if (input.AuthToken !== undefined && input.AuthToken !== null) {
        entries["AuthToken"] = input.AuthToken;
    }
    if (input.AuthTokenUpdateStrategy !== undefined && input.AuthTokenUpdateStrategy !== null) {
        entries["AuthTokenUpdateStrategy"] = input.AuthTokenUpdateStrategy;
    }
    if (input.UserGroupIdsToAdd !== undefined && input.UserGroupIdsToAdd !== null) {
        var memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToAdd, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserGroupIdsToAdd." + key;
            entries[loc] = value;
        });
    }
    if (input.UserGroupIdsToRemove !== undefined && input.UserGroupIdsToRemove !== null) {
        var memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserGroupIdsToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.RemoveUserGroups !== undefined && input.RemoveUserGroups !== null) {
        entries["RemoveUserGroups"] = input.RemoveUserGroups;
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        var memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "LogDeliveryConfigurations." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyReplicationGroupShardConfigurationMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NodeGroupCount !== undefined && input.NodeGroupCount !== null) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    if (input.ReshardingConfiguration !== undefined && input.ReshardingConfiguration !== null) {
        var memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReshardingConfiguration." + key;
            entries[loc] = value;
        });
    }
    if (input.NodeGroupsToRemove !== undefined && input.NodeGroupsToRemove !== null) {
        var memberEntries = serializeAws_queryNodeGroupsToRemoveList(input.NodeGroupsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "NodeGroupsToRemove." + key;
            entries[loc] = value;
        });
    }
    if (input.NodeGroupsToRetain !== undefined && input.NodeGroupsToRetain !== null) {
        var memberEntries = serializeAws_queryNodeGroupsToRetainList(input.NodeGroupsToRetain, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "NodeGroupsToRetain." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyUserGroupMessage = function (input, context) {
    var entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    if (input.UserIdsToAdd !== undefined && input.UserIdsToAdd !== null) {
        var memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToAdd, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserIdsToAdd." + key;
            entries[loc] = value;
        });
    }
    if (input.UserIdsToRemove !== undefined && input.UserIdsToRemove !== null) {
        var memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToRemove, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "UserIdsToRemove." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryModifyUserMessage = function (input, context) {
    var entries = {};
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
    }
    if (input.AccessString !== undefined && input.AccessString !== null) {
        entries["AccessString"] = input.AccessString;
    }
    if (input.AppendAccessString !== undefined && input.AppendAccessString !== null) {
        entries["AppendAccessString"] = input.AppendAccessString;
    }
    if (input.Passwords !== undefined && input.Passwords !== null) {
        var memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "Passwords." + key;
            entries[loc] = value;
        });
    }
    if (input.NoPasswordRequired !== undefined && input.NoPasswordRequired !== null) {
        entries["NoPasswordRequired"] = input.NoPasswordRequired;
    }
    return entries;
};
var serializeAws_queryNodeGroupConfiguration = function (input, context) {
    var entries = {};
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.Slots !== undefined && input.Slots !== null) {
        entries["Slots"] = input.Slots;
    }
    if (input.ReplicaCount !== undefined && input.ReplicaCount !== null) {
        entries["ReplicaCount"] = input.ReplicaCount;
    }
    if (input.PrimaryAvailabilityZone !== undefined && input.PrimaryAvailabilityZone !== null) {
        entries["PrimaryAvailabilityZone"] = input.PrimaryAvailabilityZone;
    }
    if (input.ReplicaAvailabilityZones !== undefined && input.ReplicaAvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZonesList(input.ReplicaAvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicaAvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    if (input.PrimaryOutpostArn !== undefined && input.PrimaryOutpostArn !== null) {
        entries["PrimaryOutpostArn"] = input.PrimaryOutpostArn;
    }
    if (input.ReplicaOutpostArns !== undefined && input.ReplicaOutpostArns !== null) {
        var memberEntries = serializeAws_queryOutpostArnsList(input.ReplicaOutpostArns, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReplicaOutpostArns." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryNodeGroupConfigurationList = function (input, context) {
    var e_11, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_11 = __values(input), input_11_1 = input_11.next(); !input_11_1.done; input_11_1 = input_11.next()) {
            var entry = input_11_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryNodeGroupConfiguration(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["NodeGroupConfiguration." + counter + "." + key] = value;
            });
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
var serializeAws_queryNodeGroupsToRemoveList = function (input, context) {
    var e_12, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_12 = __values(input), input_12_1 = input_12.next(); !input_12_1.done; input_12_1 = input_12.next()) {
            var entry = input_12_1.value;
            if (entry === null) {
                continue;
            }
            entries["NodeGroupToRemove." + counter] = entry;
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
var serializeAws_queryNodeGroupsToRetainList = function (input, context) {
    var e_13, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_13 = __values(input), input_13_1 = input_13.next(); !input_13_1.done; input_13_1 = input_13.next()) {
            var entry = input_13_1.value;
            if (entry === null) {
                continue;
            }
            entries["NodeGroupToRetain." + counter] = entry;
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
var serializeAws_queryOutpostArnsList = function (input, context) {
    var e_14, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_14 = __values(input), input_14_1 = input_14.next(); !input_14_1.done; input_14_1 = input_14.next()) {
            var entry = input_14_1.value;
            if (entry === null) {
                continue;
            }
            entries["OutpostArn." + counter] = entry;
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
var serializeAws_queryParameterNameValue = function (input, context) {
    var entries = {};
    if (input.ParameterName !== undefined && input.ParameterName !== null) {
        entries["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    return entries;
};
var serializeAws_queryParameterNameValueList = function (input, context) {
    var e_15, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_15 = __values(input), input_15_1 = input_15.next(); !input_15_1.done; input_15_1 = input_15.next()) {
            var entry = input_15_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryParameterNameValue(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["ParameterNameValue." + counter + "." + key] = value;
            });
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
var serializeAws_queryPasswordListInput = function (input, context) {
    var e_16, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_16 = __values(input), input_16_1 = input_16.next(); !input_16_1.done; input_16_1 = input_16.next()) {
            var entry = input_16_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryPreferredAvailabilityZoneList = function (input, context) {
    var e_17, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_17 = __values(input), input_17_1 = input_17.next(); !input_17_1.done; input_17_1 = input_17.next()) {
            var entry = input_17_1.value;
            if (entry === null) {
                continue;
            }
            entries["PreferredAvailabilityZone." + counter] = entry;
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
var serializeAws_queryPreferredOutpostArnList = function (input, context) {
    var e_18, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_18 = __values(input), input_18_1 = input_18.next(); !input_18_1.done; input_18_1 = input_18.next()) {
            var entry = input_18_1.value;
            if (entry === null) {
                continue;
            }
            entries["PreferredOutpostArn." + counter] = entry;
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
var serializeAws_queryPurchaseReservedCacheNodesOfferingMessage = function (input, context) {
    var entries = {};
    if (input.ReservedCacheNodesOfferingId !== undefined && input.ReservedCacheNodesOfferingId !== null) {
        entries["ReservedCacheNodesOfferingId"] = input.ReservedCacheNodesOfferingId;
    }
    if (input.ReservedCacheNodeId !== undefined && input.ReservedCacheNodeId !== null) {
        entries["ReservedCacheNodeId"] = input.ReservedCacheNodeId;
    }
    if (input.CacheNodeCount !== undefined && input.CacheNodeCount !== null) {
        entries["CacheNodeCount"] = input.CacheNodeCount;
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
var serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage = function (input, context) {
    var entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
var serializeAws_queryRebootCacheClusterMessage = function (input, context) {
    var entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.CacheNodeIdsToReboot !== undefined && input.CacheNodeIdsToReboot !== null) {
        var memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToReboot, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CacheNodeIdsToReboot." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRegionalConfiguration = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReplicationGroupRegion !== undefined && input.ReplicationGroupRegion !== null) {
        entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
    }
    if (input.ReshardingConfiguration !== undefined && input.ReshardingConfiguration !== null) {
        var memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ReshardingConfiguration." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryRegionalConfigurationList = function (input, context) {
    var e_19, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_19 = __values(input), input_19_1 = input_19.next(); !input_19_1.done; input_19_1 = input_19.next()) {
            var entry = input_19_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryRegionalConfiguration(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["RegionalConfiguration." + counter + "." + key] = value;
            });
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
var serializeAws_queryRemoveReplicasList = function (input, context) {
    var e_20, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_20 = __values(input), input_20_1 = input_20.next(); !input_20_1.done; input_20_1 = input_20.next()) {
            var entry = input_20_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
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
var serializeAws_queryReplicaConfigurationList = function (input, context) {
    var e_21, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_21 = __values(input), input_21_1 = input_21.next(); !input_21_1.done; input_21_1 = input_21.next()) {
            var entry = input_21_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryConfigureShard(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["ConfigureShard." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_21_1) { e_21 = { error: e_21_1 }; }
    finally {
        try {
            if (input_21_1 && !input_21_1.done && (_a = input_21.return)) _a.call(input_21);
        }
        finally { if (e_21) throw e_21.error; }
    }
    return entries;
};
var serializeAws_queryReplicationGroupIdList = function (input, context) {
    var e_22, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_22 = __values(input), input_22_1 = input_22.next(); !input_22_1.done; input_22_1 = input_22.next()) {
            var entry = input_22_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_22_1) { e_22 = { error: e_22_1 }; }
    finally {
        try {
            if (input_22_1 && !input_22_1.done && (_a = input_22.return)) _a.call(input_22);
        }
        finally { if (e_22) throw e_22.error; }
    }
    return entries;
};
var serializeAws_queryResetCacheParameterGroupMessage = function (input, context) {
    var entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ResetAllParameters !== undefined && input.ResetAllParameters !== null) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    if (input.ParameterNameValues !== undefined && input.ParameterNameValues !== null) {
        var memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "ParameterNameValues." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryReshardingConfiguration = function (input, context) {
    var entries = {};
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.PreferredAvailabilityZones !== undefined && input.PreferredAvailabilityZones !== null) {
        var memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "PreferredAvailabilityZones." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_queryReshardingConfigurationList = function (input, context) {
    var e_23, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_23 = __values(input), input_23_1 = input_23.next(); !input_23_1.done; input_23_1 = input_23.next()) {
            var entry = input_23_1.value;
            if (entry === null) {
                continue;
            }
            var memberEntries = serializeAws_queryReshardingConfiguration(entry, context);
            Object.entries(memberEntries).forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                entries["ReshardingConfiguration." + counter + "." + key] = value;
            });
            counter++;
        }
    }
    catch (e_23_1) { e_23 = { error: e_23_1 }; }
    finally {
        try {
            if (input_23_1 && !input_23_1.done && (_a = input_23.return)) _a.call(input_23);
        }
        finally { if (e_23) throw e_23.error; }
    }
    return entries;
};
var serializeAws_queryRevokeCacheSecurityGroupIngressMessage = function (input, context) {
    var entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
var serializeAws_querySecurityGroupIdsList = function (input, context) {
    var e_24, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_24 = __values(input), input_24_1 = input_24.next(); !input_24_1.done; input_24_1 = input_24.next()) {
            var entry = input_24_1.value;
            if (entry === null) {
                continue;
            }
            entries["SecurityGroupId." + counter] = entry;
            counter++;
        }
    }
    catch (e_24_1) { e_24 = { error: e_24_1 }; }
    finally {
        try {
            if (input_24_1 && !input_24_1.done && (_a = input_24.return)) _a.call(input_24);
        }
        finally { if (e_24) throw e_24.error; }
    }
    return entries;
};
var serializeAws_queryServiceUpdateStatusList = function (input, context) {
    var e_25, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_25 = __values(input), input_25_1 = input_25.next(); !input_25_1.done; input_25_1 = input_25.next()) {
            var entry = input_25_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_25_1) { e_25 = { error: e_25_1 }; }
    finally {
        try {
            if (input_25_1 && !input_25_1.done && (_a = input_25.return)) _a.call(input_25);
        }
        finally { if (e_25) throw e_25.error; }
    }
    return entries;
};
var serializeAws_querySnapshotArnsList = function (input, context) {
    var e_26, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_26 = __values(input), input_26_1 = input_26.next(); !input_26_1.done; input_26_1 = input_26.next()) {
            var entry = input_26_1.value;
            if (entry === null) {
                continue;
            }
            entries["SnapshotArn." + counter] = entry;
            counter++;
        }
    }
    catch (e_26_1) { e_26 = { error: e_26_1 }; }
    finally {
        try {
            if (input_26_1 && !input_26_1.done && (_a = input_26.return)) _a.call(input_26);
        }
        finally { if (e_26) throw e_26.error; }
    }
    return entries;
};
var serializeAws_queryStartMigrationMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.CustomerNodeEndpointList !== undefined && input.CustomerNodeEndpointList !== null) {
        var memberEntries = serializeAws_queryCustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
        Object.entries(memberEntries).forEach(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            var loc = "CustomerNodeEndpointList." + key;
            entries[loc] = value;
        });
    }
    return entries;
};
var serializeAws_querySubnetIdentifierList = function (input, context) {
    var e_27, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_27 = __values(input), input_27_1 = input_27.next(); !input_27_1.done; input_27_1 = input_27.next()) {
            var entry = input_27_1.value;
            if (entry === null) {
                continue;
            }
            entries["SubnetIdentifier." + counter] = entry;
            counter++;
        }
    }
    catch (e_27_1) { e_27 = { error: e_27_1 }; }
    finally {
        try {
            if (input_27_1 && !input_27_1.done && (_a = input_27.return)) _a.call(input_27);
        }
        finally { if (e_27) throw e_27.error; }
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
    var e_28, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_28 = __values(input), input_28_1 = input_28.next(); !input_28_1.done; input_28_1 = input_28.next()) {
            var entry = input_28_1.value;
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
    catch (e_28_1) { e_28 = { error: e_28_1 }; }
    finally {
        try {
            if (input_28_1 && !input_28_1.done && (_a = input_28.return)) _a.call(input_28);
        }
        finally { if (e_28) throw e_28.error; }
    }
    return entries;
};
var serializeAws_queryTestFailoverMessage = function (input, context) {
    var entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    return entries;
};
var serializeAws_queryTimeRangeFilter = function (input, context) {
    var entries = {};
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
var serializeAws_queryUpdateActionStatusList = function (input, context) {
    var e_29, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_29 = __values(input), input_29_1 = input_29.next(); !input_29_1.done; input_29_1 = input_29.next()) {
            var entry = input_29_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_29_1) { e_29 = { error: e_29_1 }; }
    finally {
        try {
            if (input_29_1 && !input_29_1.done && (_a = input_29.return)) _a.call(input_29);
        }
        finally { if (e_29) throw e_29.error; }
    }
    return entries;
};
var serializeAws_queryUserGroupIdList = function (input, context) {
    var e_30, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_30 = __values(input), input_30_1 = input_30.next(); !input_30_1.done; input_30_1 = input_30.next()) {
            var entry = input_30_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_30_1) { e_30 = { error: e_30_1 }; }
    finally {
        try {
            if (input_30_1 && !input_30_1.done && (_a = input_30.return)) _a.call(input_30);
        }
        finally { if (e_30) throw e_30.error; }
    }
    return entries;
};
var serializeAws_queryUserGroupIdListInput = function (input, context) {
    var e_31, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_31 = __values(input), input_31_1 = input_31.next(); !input_31_1.done; input_31_1 = input_31.next()) {
            var entry = input_31_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_31_1) { e_31 = { error: e_31_1 }; }
    finally {
        try {
            if (input_31_1 && !input_31_1.done && (_a = input_31.return)) _a.call(input_31);
        }
        finally { if (e_31) throw e_31.error; }
    }
    return entries;
};
var serializeAws_queryUserIdListInput = function (input, context) {
    var e_32, _a;
    var entries = {};
    var counter = 1;
    try {
        for (var input_32 = __values(input), input_32_1 = input_32.next(); !input_32_1.done; input_32_1 = input_32.next()) {
            var entry = input_32_1.value;
            if (entry === null) {
                continue;
            }
            entries["member." + counter] = entry;
            counter++;
        }
    }
    catch (e_32_1) { e_32 = { error: e_32_1 }; }
    finally {
        try {
            if (input_32_1 && !input_32_1.done && (_a = input_32.return)) _a.call(input_32);
        }
        finally { if (e_32) throw e_32.error; }
    }
    return entries;
};
var deserializeAws_queryAllowedNodeTypeModificationsMessage = function (output, context) {
    var contents = {
        ScaleUpModifications: undefined,
        ScaleDownModifications: undefined,
    };
    if (output.ScaleUpModifications === "") {
        contents.ScaleUpModifications = [];
    }
    if (output["ScaleUpModifications"] !== undefined && output["ScaleUpModifications"]["member"] !== undefined) {
        contents.ScaleUpModifications = deserializeAws_queryNodeTypeList(__getArrayIfSingleItem(output["ScaleUpModifications"]["member"]), context);
    }
    if (output.ScaleDownModifications === "") {
        contents.ScaleDownModifications = [];
    }
    if (output["ScaleDownModifications"] !== undefined && output["ScaleDownModifications"]["member"] !== undefined) {
        contents.ScaleDownModifications = deserializeAws_queryNodeTypeList(__getArrayIfSingleItem(output["ScaleDownModifications"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryAPICallRateForCustomerExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryAuthentication = function (output, context) {
    var contents = {
        Type: undefined,
        PasswordCount: undefined,
    };
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["PasswordCount"] !== undefined) {
        contents.PasswordCount = parseInt(output["PasswordCount"]);
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
var deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult = function (output, context) {
    var contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
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
var deserializeAws_queryAvailabilityZonesList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCacheCluster = function (output, context) {
    var contents = {
        CacheClusterId: undefined,
        ConfigurationEndpoint: undefined,
        ClientDownloadLandingPage: undefined,
        CacheNodeType: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        CacheClusterStatus: undefined,
        NumCacheNodes: undefined,
        PreferredAvailabilityZone: undefined,
        PreferredOutpostArn: undefined,
        CacheClusterCreateTime: undefined,
        PreferredMaintenanceWindow: undefined,
        PendingModifiedValues: undefined,
        NotificationConfiguration: undefined,
        CacheSecurityGroups: undefined,
        CacheParameterGroup: undefined,
        CacheSubnetGroupName: undefined,
        CacheNodes: undefined,
        AutoMinorVersionUpgrade: undefined,
        SecurityGroups: undefined,
        ReplicationGroupId: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotWindow: undefined,
        AuthTokenEnabled: undefined,
        AuthTokenLastModifiedDate: undefined,
        TransitEncryptionEnabled: undefined,
        AtRestEncryptionEnabled: undefined,
        ARN: undefined,
        ReplicationGroupLogDeliveryEnabled: undefined,
        LogDeliveryConfigurations: undefined,
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ConfigurationEndpoint"] !== undefined) {
        contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
    }
    if (output["ClientDownloadLandingPage"] !== undefined) {
        contents.ClientDownloadLandingPage = output["ClientDownloadLandingPage"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["CacheClusterStatus"] !== undefined) {
        contents.CacheClusterStatus = output["CacheClusterStatus"];
    }
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["PreferredOutpostArn"] !== undefined) {
        contents.PreferredOutpostArn = output["PreferredOutpostArn"];
    }
    if (output["CacheClusterCreateTime"] !== undefined) {
        contents.CacheClusterCreateTime = new Date(output["CacheClusterCreateTime"]);
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output["NotificationConfiguration"] !== undefined) {
        contents.NotificationConfiguration = deserializeAws_queryNotificationConfiguration(output["NotificationConfiguration"], context);
    }
    if (output.CacheSecurityGroups === "") {
        contents.CacheSecurityGroups = [];
    }
    if (output["CacheSecurityGroups"] !== undefined &&
        output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroupMembershipList(__getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]), context);
    }
    if (output["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroupStatus(output["CacheParameterGroup"], context);
    }
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
    }
    if (output.CacheNodes === "") {
        contents.CacheNodes = [];
    }
    if (output["CacheNodes"] !== undefined && output["CacheNodes"]["CacheNode"] !== undefined) {
        contents.CacheNodes = deserializeAws_queryCacheNodeList(__getArrayIfSingleItem(output["CacheNodes"]["CacheNode"]), context);
    }
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade = output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroupMembershipList(__getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["AuthTokenEnabled"] !== undefined) {
        contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
    }
    if (output["AuthTokenLastModifiedDate"] !== undefined) {
        contents.AuthTokenLastModifiedDate = new Date(output["AuthTokenLastModifiedDate"]);
    }
    if (output["TransitEncryptionEnabled"] !== undefined) {
        contents.TransitEncryptionEnabled = output["TransitEncryptionEnabled"] == "true";
    }
    if (output["AtRestEncryptionEnabled"] !== undefined) {
        contents.AtRestEncryptionEnabled = output["AtRestEncryptionEnabled"] == "true";
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output["ReplicationGroupLogDeliveryEnabled"] !== undefined) {
        contents.ReplicationGroupLogDeliveryEnabled = output["ReplicationGroupLogDeliveryEnabled"] == "true";
    }
    if (output.LogDeliveryConfigurations === "") {
        contents.LogDeliveryConfigurations = [];
    }
    if (output["LogDeliveryConfigurations"] !== undefined &&
        output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined) {
        contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(__getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheClusterAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheClusterList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheCluster(entry, context);
    });
};
var deserializeAws_queryCacheClusterMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        CacheClusters: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CacheClusters === "") {
        contents.CacheClusters = [];
    }
    if (output["CacheClusters"] !== undefined && output["CacheClusters"]["CacheCluster"] !== undefined) {
        contents.CacheClusters = deserializeAws_queryCacheClusterList(__getArrayIfSingleItem(output["CacheClusters"]["CacheCluster"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheClusterNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheEngineVersion = function (output, context) {
    var contents = {
        Engine: undefined,
        EngineVersion: undefined,
        CacheParameterGroupFamily: undefined,
        CacheEngineDescription: undefined,
        CacheEngineVersionDescription: undefined,
    };
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
    }
    if (output["CacheEngineDescription"] !== undefined) {
        contents.CacheEngineDescription = output["CacheEngineDescription"];
    }
    if (output["CacheEngineVersionDescription"] !== undefined) {
        contents.CacheEngineVersionDescription = output["CacheEngineVersionDescription"];
    }
    return contents;
};
var deserializeAws_queryCacheEngineVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheEngineVersion(entry, context);
    });
};
var deserializeAws_queryCacheEngineVersionMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        CacheEngineVersions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CacheEngineVersions === "") {
        contents.CacheEngineVersions = [];
    }
    if (output["CacheEngineVersions"] !== undefined &&
        output["CacheEngineVersions"]["CacheEngineVersion"] !== undefined) {
        contents.CacheEngineVersions = deserializeAws_queryCacheEngineVersionList(__getArrayIfSingleItem(output["CacheEngineVersions"]["CacheEngineVersion"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheNode = function (output, context) {
    var contents = {
        CacheNodeId: undefined,
        CacheNodeStatus: undefined,
        CacheNodeCreateTime: undefined,
        Endpoint: undefined,
        ParameterGroupStatus: undefined,
        SourceCacheNodeId: undefined,
        CustomerAvailabilityZone: undefined,
        CustomerOutpostArn: undefined,
    };
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["CacheNodeStatus"] !== undefined) {
        contents.CacheNodeStatus = output["CacheNodeStatus"];
    }
    if (output["CacheNodeCreateTime"] !== undefined) {
        contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = deserializeAws_queryEndpoint(output["Endpoint"], context);
    }
    if (output["ParameterGroupStatus"] !== undefined) {
        contents.ParameterGroupStatus = output["ParameterGroupStatus"];
    }
    if (output["SourceCacheNodeId"] !== undefined) {
        contents.SourceCacheNodeId = output["SourceCacheNodeId"];
    }
    if (output["CustomerAvailabilityZone"] !== undefined) {
        contents.CustomerAvailabilityZone = output["CustomerAvailabilityZone"];
    }
    if (output["CustomerOutpostArn"] !== undefined) {
        contents.CustomerOutpostArn = output["CustomerOutpostArn"];
    }
    return contents;
};
var deserializeAws_queryCacheNodeIdsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryCacheNodeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNode(entry, context);
    });
};
var deserializeAws_queryCacheNodeTypeSpecificParameter = function (output, context) {
    var contents = {
        ParameterName: undefined,
        Description: undefined,
        Source: undefined,
        DataType: undefined,
        AllowedValues: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
        CacheNodeTypeSpecificValues: undefined,
        ChangeType: undefined,
    };
    if (output["ParameterName"] !== undefined) {
        contents.ParameterName = output["ParameterName"];
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
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    if (output.CacheNodeTypeSpecificValues === "") {
        contents.CacheNodeTypeSpecificValues = [];
    }
    if (output["CacheNodeTypeSpecificValues"] !== undefined &&
        output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"] !== undefined) {
        contents.CacheNodeTypeSpecificValues = deserializeAws_queryCacheNodeTypeSpecificValueList(__getArrayIfSingleItem(output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]), context);
    }
    if (output["ChangeType"] !== undefined) {
        contents.ChangeType = output["ChangeType"];
    }
    return contents;
};
var deserializeAws_queryCacheNodeTypeSpecificParametersList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeTypeSpecificParameter(entry, context);
    });
};
var deserializeAws_queryCacheNodeTypeSpecificValue = function (output, context) {
    var contents = {
        CacheNodeType: undefined,
        Value: undefined,
    };
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
var deserializeAws_queryCacheNodeTypeSpecificValueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeTypeSpecificValue(entry, context);
    });
};
var deserializeAws_queryCacheNodeUpdateStatus = function (output, context) {
    var contents = {
        CacheNodeId: undefined,
        NodeUpdateStatus: undefined,
        NodeDeletionDate: undefined,
        NodeUpdateStartDate: undefined,
        NodeUpdateEndDate: undefined,
        NodeUpdateInitiatedBy: undefined,
        NodeUpdateInitiatedDate: undefined,
        NodeUpdateStatusModifiedDate: undefined,
    };
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["NodeUpdateStatus"] !== undefined) {
        contents.NodeUpdateStatus = output["NodeUpdateStatus"];
    }
    if (output["NodeDeletionDate"] !== undefined) {
        contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
    }
    if (output["NodeUpdateStartDate"] !== undefined) {
        contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
    }
    if (output["NodeUpdateEndDate"] !== undefined) {
        contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
    }
    if (output["NodeUpdateInitiatedBy"] !== undefined) {
        contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
    }
    if (output["NodeUpdateInitiatedDate"] !== undefined) {
        contents.NodeUpdateInitiatedDate = new Date(output["NodeUpdateInitiatedDate"]);
    }
    if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
        contents.NodeUpdateStatusModifiedDate = new Date(output["NodeUpdateStatusModifiedDate"]);
    }
    return contents;
};
var deserializeAws_queryCacheNodeUpdateStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeUpdateStatus(entry, context);
    });
};
var deserializeAws_queryCacheParameterGroup = function (output, context) {
    var contents = {
        CacheParameterGroupName: undefined,
        CacheParameterGroupFamily: undefined,
        Description: undefined,
        IsGlobal: undefined,
        ARN: undefined,
    };
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["IsGlobal"] !== undefined) {
        contents.IsGlobal = output["IsGlobal"] == "true";
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupDetails = function (output, context) {
    var contents = {
        Marker: undefined,
        Parameters: undefined,
        CacheNodeTypeSpecificParameters: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
        contents.Parameters = deserializeAws_queryParametersList(__getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(__getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheParameterGroup(entry, context);
    });
};
var deserializeAws_queryCacheParameterGroupNameMessage = function (output, context) {
    var contents = {
        CacheParameterGroupName: undefined,
    };
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        CacheParameterGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CacheParameterGroups === "") {
        contents.CacheParameterGroups = [];
    }
    if (output["CacheParameterGroups"] !== undefined &&
        output["CacheParameterGroups"]["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroups = deserializeAws_queryCacheParameterGroupList(__getArrayIfSingleItem(output["CacheParameterGroups"]["CacheParameterGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheParameterGroupStatus = function (output, context) {
    var contents = {
        CacheParameterGroupName: undefined,
        ParameterApplyStatus: undefined,
        CacheNodeIdsToReboot: undefined,
    };
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["ParameterApplyStatus"] !== undefined) {
        contents.ParameterApplyStatus = output["ParameterApplyStatus"];
    }
    if (output.CacheNodeIdsToReboot === "") {
        contents.CacheNodeIdsToReboot = [];
    }
    if (output["CacheNodeIdsToReboot"] !== undefined && output["CacheNodeIdsToReboot"]["CacheNodeId"] !== undefined) {
        contents.CacheNodeIdsToReboot = deserializeAws_queryCacheNodeIdsList(__getArrayIfSingleItem(output["CacheNodeIdsToReboot"]["CacheNodeId"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroup = function (output, context) {
    var contents = {
        OwnerId: undefined,
        CacheSecurityGroupName: undefined,
        Description: undefined,
        EC2SecurityGroups: undefined,
        ARN: undefined,
    };
    if (output["OwnerId"] !== undefined) {
        contents.OwnerId = output["OwnerId"];
    }
    if (output["CacheSecurityGroupName"] !== undefined) {
        contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
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
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroupMembership = function (output, context) {
    var contents = {
        CacheSecurityGroupName: undefined,
        Status: undefined,
    };
    if (output["CacheSecurityGroupName"] !== undefined) {
        contents.CacheSecurityGroupName = output["CacheSecurityGroupName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSecurityGroupMembership(entry, context);
    });
};
var deserializeAws_queryCacheSecurityGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        CacheSecurityGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CacheSecurityGroups === "") {
        contents.CacheSecurityGroups = [];
    }
    if (output["CacheSecurityGroups"] !== undefined &&
        output["CacheSecurityGroups"]["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroups(__getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSecurityGroup(entry, context);
    });
};
var deserializeAws_queryCacheSubnetGroup = function (output, context) {
    var contents = {
        CacheSubnetGroupName: undefined,
        CacheSubnetGroupDescription: undefined,
        VpcId: undefined,
        Subnets: undefined,
        ARN: undefined,
    };
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
    }
    if (output["CacheSubnetGroupDescription"] !== undefined) {
        contents.CacheSubnetGroupDescription = output["CacheSubnetGroupDescription"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.Subnets === "") {
        contents.Subnets = [];
    }
    if (output["Subnets"] !== undefined && output["Subnets"]["Subnet"] !== undefined) {
        contents.Subnets = deserializeAws_querySubnetList(__getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroupInUse = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        CacheSubnetGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CacheSubnetGroups === "") {
        contents.CacheSubnetGroups = [];
    }
    if (output["CacheSubnetGroups"] !== undefined && output["CacheSubnetGroups"]["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroups = deserializeAws_queryCacheSubnetGroups(__getArrayIfSingleItem(output["CacheSubnetGroups"]["CacheSubnetGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCacheSubnetGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSubnetGroup(entry, context);
    });
};
var deserializeAws_queryCacheSubnetQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCloudWatchLogsDestinationDetails = function (output, context) {
    var contents = {
        LogGroup: undefined,
    };
    if (output["LogGroup"] !== undefined) {
        contents.LogGroup = output["LogGroup"];
    }
    return contents;
};
var deserializeAws_queryClusterIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryClusterQuotaForCustomerExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryCompleteMigrationResponse = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCopySnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryCreateCacheClusterResult = function (output, context) {
    var contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
var deserializeAws_queryCreateCacheParameterGroupResult = function (output, context) {
    var contents = {
        CacheParameterGroup: undefined,
    };
    if (output["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroup(output["CacheParameterGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateCacheSecurityGroupResult = function (output, context) {
    var contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateCacheSubnetGroupResult = function (output, context) {
    var contents = {
        CacheSubnetGroup: undefined,
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateReplicationGroupResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryCreateSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
var deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryDecreaseReplicaCountResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryDefaultUserAssociatedToUserGroupFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDefaultUserRequired = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryDeleteCacheClusterResult = function (output, context) {
    var contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteReplicationGroupResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryDeleteSnapshotResult = function (output, context) {
    var contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
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
var deserializeAws_queryDescribeGlobalReplicationGroupsResult = function (output, context) {
    var contents = {
        Marker: undefined,
        GlobalReplicationGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.GlobalReplicationGroups === "") {
        contents.GlobalReplicationGroups = [];
    }
    if (output["GlobalReplicationGroups"] !== undefined &&
        output["GlobalReplicationGroups"]["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroups = deserializeAws_queryGlobalReplicationGroupList(__getArrayIfSingleItem(output["GlobalReplicationGroups"]["GlobalReplicationGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryDescribeSnapshotsListMessage = function (output, context) {
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
var deserializeAws_queryDescribeUserGroupsResult = function (output, context) {
    var contents = {
        UserGroups: undefined,
        Marker: undefined,
    };
    if (output.UserGroups === "") {
        contents.UserGroups = [];
    }
    if (output["UserGroups"] !== undefined && output["UserGroups"]["member"] !== undefined) {
        contents.UserGroups = deserializeAws_queryUserGroupList(__getArrayIfSingleItem(output["UserGroups"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryDescribeUsersResult = function (output, context) {
    var contents = {
        Users: undefined,
        Marker: undefined,
    };
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
        contents.Users = deserializeAws_queryUserList(__getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
var deserializeAws_queryDestinationDetails = function (output, context) {
    var contents = {
        CloudWatchLogsDetails: undefined,
        KinesisFirehoseDetails: undefined,
    };
    if (output["CloudWatchLogsDetails"] !== undefined) {
        contents.CloudWatchLogsDetails = deserializeAws_queryCloudWatchLogsDestinationDetails(output["CloudWatchLogsDetails"], context);
    }
    if (output["KinesisFirehoseDetails"] !== undefined) {
        contents.KinesisFirehoseDetails = deserializeAws_queryKinesisFirehoseDestinationDetails(output["KinesisFirehoseDetails"], context);
    }
    return contents;
};
var deserializeAws_queryDisassociateGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryDuplicateUserNameFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryEC2SecurityGroup = function (output, context) {
    var contents = {
        Status: undefined,
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupOwnerId: undefined,
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
var deserializeAws_queryEndpoint = function (output, context) {
    var contents = {
        Address: undefined,
        Port: undefined,
    };
    if (output["Address"] !== undefined) {
        contents.Address = output["Address"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    return contents;
};
var deserializeAws_queryEngineDefaults = function (output, context) {
    var contents = {
        CacheParameterGroupFamily: undefined,
        Marker: undefined,
        Parameters: undefined,
        CacheNodeTypeSpecificParameters: undefined,
    };
    if (output["CacheParameterGroupFamily"] !== undefined) {
        contents.CacheParameterGroupFamily = output["CacheParameterGroupFamily"];
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
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(__getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]), context);
    }
    return contents;
};
var deserializeAws_queryEvent = function (output, context) {
    var contents = {
        SourceIdentifier: undefined,
        SourceType: undefined,
        Message: undefined,
        Date: undefined,
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
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
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
var deserializeAws_queryFailoverGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryGlobalNodeGroup = function (output, context) {
    var contents = {
        GlobalNodeGroupId: undefined,
        Slots: undefined,
    };
    if (output["GlobalNodeGroupId"] !== undefined) {
        contents.GlobalNodeGroupId = output["GlobalNodeGroupId"];
    }
    if (output["Slots"] !== undefined) {
        contents.Slots = output["Slots"];
    }
    return contents;
};
var deserializeAws_queryGlobalNodeGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalNodeGroup(entry, context);
    });
};
var deserializeAws_queryGlobalReplicationGroup = function (output, context) {
    var contents = {
        GlobalReplicationGroupId: undefined,
        GlobalReplicationGroupDescription: undefined,
        Status: undefined,
        CacheNodeType: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        Members: undefined,
        ClusterEnabled: undefined,
        GlobalNodeGroups: undefined,
        AuthTokenEnabled: undefined,
        TransitEncryptionEnabled: undefined,
        AtRestEncryptionEnabled: undefined,
        ARN: undefined,
    };
    if (output["GlobalReplicationGroupId"] !== undefined) {
        contents.GlobalReplicationGroupId = output["GlobalReplicationGroupId"];
    }
    if (output["GlobalReplicationGroupDescription"] !== undefined) {
        contents.GlobalReplicationGroupDescription = output["GlobalReplicationGroupDescription"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output.Members === "") {
        contents.Members = [];
    }
    if (output["Members"] !== undefined && output["Members"]["GlobalReplicationGroupMember"] !== undefined) {
        contents.Members = deserializeAws_queryGlobalReplicationGroupMemberList(__getArrayIfSingleItem(output["Members"]["GlobalReplicationGroupMember"]), context);
    }
    if (output["ClusterEnabled"] !== undefined) {
        contents.ClusterEnabled = output["ClusterEnabled"] == "true";
    }
    if (output.GlobalNodeGroups === "") {
        contents.GlobalNodeGroups = [];
    }
    if (output["GlobalNodeGroups"] !== undefined && output["GlobalNodeGroups"]["GlobalNodeGroup"] !== undefined) {
        contents.GlobalNodeGroups = deserializeAws_queryGlobalNodeGroupList(__getArrayIfSingleItem(output["GlobalNodeGroups"]["GlobalNodeGroup"]), context);
    }
    if (output["AuthTokenEnabled"] !== undefined) {
        contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
    }
    if (output["TransitEncryptionEnabled"] !== undefined) {
        contents.TransitEncryptionEnabled = output["TransitEncryptionEnabled"] == "true";
    }
    if (output["AtRestEncryptionEnabled"] !== undefined) {
        contents.AtRestEncryptionEnabled = output["AtRestEncryptionEnabled"] == "true";
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryGlobalReplicationGroupInfo = function (output, context) {
    var contents = {
        GlobalReplicationGroupId: undefined,
        GlobalReplicationGroupMemberRole: undefined,
    };
    if (output["GlobalReplicationGroupId"] !== undefined) {
        contents.GlobalReplicationGroupId = output["GlobalReplicationGroupId"];
    }
    if (output["GlobalReplicationGroupMemberRole"] !== undefined) {
        contents.GlobalReplicationGroupMemberRole = output["GlobalReplicationGroupMemberRole"];
    }
    return contents;
};
var deserializeAws_queryGlobalReplicationGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalReplicationGroup(entry, context);
    });
};
var deserializeAws_queryGlobalReplicationGroupMember = function (output, context) {
    var contents = {
        ReplicationGroupId: undefined,
        ReplicationGroupRegion: undefined,
        Role: undefined,
        AutomaticFailover: undefined,
        Status: undefined,
    };
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["ReplicationGroupRegion"] !== undefined) {
        contents.ReplicationGroupRegion = output["ReplicationGroupRegion"];
    }
    if (output["Role"] !== undefined) {
        contents.Role = output["Role"];
    }
    if (output["AutomaticFailover"] !== undefined) {
        contents.AutomaticFailover = output["AutomaticFailover"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_queryGlobalReplicationGroupMemberList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalReplicationGroupMember(entry, context);
    });
};
var deserializeAws_queryGlobalReplicationGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryIncreaseReplicaCountResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryInsufficientCacheClusterCapacityFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidARNFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidCacheClusterStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidCacheParameterGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidCacheSecurityGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidGlobalReplicationGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidKMSKeyFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidParameterCombinationException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidParameterValueException = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidReplicationGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidSnapshotStateFault = function (output, context) {
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
var deserializeAws_queryInvalidUserGroupStateFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryInvalidUserStateFault = function (output, context) {
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
var deserializeAws_queryKinesisFirehoseDestinationDetails = function (output, context) {
    var contents = {
        DeliveryStream: undefined,
    };
    if (output["DeliveryStream"] !== undefined) {
        contents.DeliveryStream = output["DeliveryStream"];
    }
    return contents;
};
var deserializeAws_queryLogDeliveryConfiguration = function (output, context) {
    var contents = {
        LogType: undefined,
        DestinationType: undefined,
        DestinationDetails: undefined,
        LogFormat: undefined,
        Status: undefined,
        Message: undefined,
    };
    if (output["LogType"] !== undefined) {
        contents.LogType = output["LogType"];
    }
    if (output["DestinationType"] !== undefined) {
        contents.DestinationType = output["DestinationType"];
    }
    if (output["DestinationDetails"] !== undefined) {
        contents.DestinationDetails = deserializeAws_queryDestinationDetails(output["DestinationDetails"], context);
    }
    if (output["LogFormat"] !== undefined) {
        contents.LogFormat = output["LogFormat"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
var deserializeAws_queryLogDeliveryConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLogDeliveryConfiguration(entry, context);
    });
};
var deserializeAws_queryModifyCacheClusterResult = function (output, context) {
    var contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
var deserializeAws_queryModifyCacheSubnetGroupResult = function (output, context) {
    var contents = {
        CacheSubnetGroup: undefined,
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
var deserializeAws_queryModifyGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryModifyReplicationGroupResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryModifyReplicationGroupShardConfigurationResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryNodeGroup = function (output, context) {
    var contents = {
        NodeGroupId: undefined,
        Status: undefined,
        PrimaryEndpoint: undefined,
        ReaderEndpoint: undefined,
        Slots: undefined,
        NodeGroupMembers: undefined,
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["PrimaryEndpoint"] !== undefined) {
        contents.PrimaryEndpoint = deserializeAws_queryEndpoint(output["PrimaryEndpoint"], context);
    }
    if (output["ReaderEndpoint"] !== undefined) {
        contents.ReaderEndpoint = deserializeAws_queryEndpoint(output["ReaderEndpoint"], context);
    }
    if (output["Slots"] !== undefined) {
        contents.Slots = output["Slots"];
    }
    if (output.NodeGroupMembers === "") {
        contents.NodeGroupMembers = [];
    }
    if (output["NodeGroupMembers"] !== undefined && output["NodeGroupMembers"]["NodeGroupMember"] !== undefined) {
        contents.NodeGroupMembers = deserializeAws_queryNodeGroupMemberList(__getArrayIfSingleItem(output["NodeGroupMembers"]["NodeGroupMember"]), context);
    }
    return contents;
};
var deserializeAws_queryNodeGroupConfiguration = function (output, context) {
    var contents = {
        NodeGroupId: undefined,
        Slots: undefined,
        ReplicaCount: undefined,
        PrimaryAvailabilityZone: undefined,
        ReplicaAvailabilityZones: undefined,
        PrimaryOutpostArn: undefined,
        ReplicaOutpostArns: undefined,
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output["Slots"] !== undefined) {
        contents.Slots = output["Slots"];
    }
    if (output["ReplicaCount"] !== undefined) {
        contents.ReplicaCount = parseInt(output["ReplicaCount"]);
    }
    if (output["PrimaryAvailabilityZone"] !== undefined) {
        contents.PrimaryAvailabilityZone = output["PrimaryAvailabilityZone"];
    }
    if (output.ReplicaAvailabilityZones === "") {
        contents.ReplicaAvailabilityZones = [];
    }
    if (output["ReplicaAvailabilityZones"] !== undefined &&
        output["ReplicaAvailabilityZones"]["AvailabilityZone"] !== undefined) {
        contents.ReplicaAvailabilityZones = deserializeAws_queryAvailabilityZonesList(__getArrayIfSingleItem(output["ReplicaAvailabilityZones"]["AvailabilityZone"]), context);
    }
    if (output["PrimaryOutpostArn"] !== undefined) {
        contents.PrimaryOutpostArn = output["PrimaryOutpostArn"];
    }
    if (output.ReplicaOutpostArns === "") {
        contents.ReplicaOutpostArns = [];
    }
    if (output["ReplicaOutpostArns"] !== undefined && output["ReplicaOutpostArns"]["OutpostArn"] !== undefined) {
        contents.ReplicaOutpostArns = deserializeAws_queryOutpostArnsList(__getArrayIfSingleItem(output["ReplicaOutpostArns"]["OutpostArn"]), context);
    }
    return contents;
};
var deserializeAws_queryNodeGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroup(entry, context);
    });
};
var deserializeAws_queryNodeGroupMember = function (output, context) {
    var contents = {
        CacheClusterId: undefined,
        CacheNodeId: undefined,
        ReadEndpoint: undefined,
        PreferredAvailabilityZone: undefined,
        PreferredOutpostArn: undefined,
        CurrentRole: undefined,
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["ReadEndpoint"] !== undefined) {
        contents.ReadEndpoint = deserializeAws_queryEndpoint(output["ReadEndpoint"], context);
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["PreferredOutpostArn"] !== undefined) {
        contents.PreferredOutpostArn = output["PreferredOutpostArn"];
    }
    if (output["CurrentRole"] !== undefined) {
        contents.CurrentRole = output["CurrentRole"];
    }
    return contents;
};
var deserializeAws_queryNodeGroupMemberList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupMember(entry, context);
    });
};
var deserializeAws_queryNodeGroupMemberUpdateStatus = function (output, context) {
    var contents = {
        CacheClusterId: undefined,
        CacheNodeId: undefined,
        NodeUpdateStatus: undefined,
        NodeDeletionDate: undefined,
        NodeUpdateStartDate: undefined,
        NodeUpdateEndDate: undefined,
        NodeUpdateInitiatedBy: undefined,
        NodeUpdateInitiatedDate: undefined,
        NodeUpdateStatusModifiedDate: undefined,
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["NodeUpdateStatus"] !== undefined) {
        contents.NodeUpdateStatus = output["NodeUpdateStatus"];
    }
    if (output["NodeDeletionDate"] !== undefined) {
        contents.NodeDeletionDate = new Date(output["NodeDeletionDate"]);
    }
    if (output["NodeUpdateStartDate"] !== undefined) {
        contents.NodeUpdateStartDate = new Date(output["NodeUpdateStartDate"]);
    }
    if (output["NodeUpdateEndDate"] !== undefined) {
        contents.NodeUpdateEndDate = new Date(output["NodeUpdateEndDate"]);
    }
    if (output["NodeUpdateInitiatedBy"] !== undefined) {
        contents.NodeUpdateInitiatedBy = output["NodeUpdateInitiatedBy"];
    }
    if (output["NodeUpdateInitiatedDate"] !== undefined) {
        contents.NodeUpdateInitiatedDate = new Date(output["NodeUpdateInitiatedDate"]);
    }
    if (output["NodeUpdateStatusModifiedDate"] !== undefined) {
        contents.NodeUpdateStatusModifiedDate = new Date(output["NodeUpdateStatusModifiedDate"]);
    }
    return contents;
};
var deserializeAws_queryNodeGroupMemberUpdateStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupMemberUpdateStatus(entry, context);
    });
};
var deserializeAws_queryNodeGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNodeGroupUpdateStatus = function (output, context) {
    var contents = {
        NodeGroupId: undefined,
        NodeGroupMemberUpdateStatus: undefined,
    };
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output.NodeGroupMemberUpdateStatus === "") {
        contents.NodeGroupMemberUpdateStatus = [];
    }
    if (output["NodeGroupMemberUpdateStatus"] !== undefined &&
        output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"] !== undefined) {
        contents.NodeGroupMemberUpdateStatus = deserializeAws_queryNodeGroupMemberUpdateStatusList(__getArrayIfSingleItem(output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]), context);
    }
    return contents;
};
var deserializeAws_queryNodeGroupUpdateStatusList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupUpdateStatus(entry, context);
    });
};
var deserializeAws_queryNodeQuotaForClusterExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNodeQuotaForCustomerExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNodeSnapshot = function (output, context) {
    var contents = {
        CacheClusterId: undefined,
        NodeGroupId: undefined,
        CacheNodeId: undefined,
        NodeGroupConfiguration: undefined,
        CacheSize: undefined,
        CacheNodeCreateTime: undefined,
        SnapshotCreateTime: undefined,
    };
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["NodeGroupId"] !== undefined) {
        contents.NodeGroupId = output["NodeGroupId"];
    }
    if (output["CacheNodeId"] !== undefined) {
        contents.CacheNodeId = output["CacheNodeId"];
    }
    if (output["NodeGroupConfiguration"] !== undefined) {
        contents.NodeGroupConfiguration = deserializeAws_queryNodeGroupConfiguration(output["NodeGroupConfiguration"], context);
    }
    if (output["CacheSize"] !== undefined) {
        contents.CacheSize = output["CacheSize"];
    }
    if (output["CacheNodeCreateTime"] !== undefined) {
        contents.CacheNodeCreateTime = new Date(output["CacheNodeCreateTime"]);
    }
    if (output["SnapshotCreateTime"] !== undefined) {
        contents.SnapshotCreateTime = new Date(output["SnapshotCreateTime"]);
    }
    return contents;
};
var deserializeAws_queryNodeSnapshotList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeSnapshot(entry, context);
    });
};
var deserializeAws_queryNodeTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryNoOperationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryNotificationConfiguration = function (output, context) {
    var contents = {
        TopicArn: undefined,
        TopicStatus: undefined,
    };
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["TopicStatus"] !== undefined) {
        contents.TopicStatus = output["TopicStatus"];
    }
    return contents;
};
var deserializeAws_queryOutpostArnsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryParameter = function (output, context) {
    var contents = {
        ParameterName: undefined,
        ParameterValue: undefined,
        Description: undefined,
        Source: undefined,
        DataType: undefined,
        AllowedValues: undefined,
        IsModifiable: undefined,
        MinimumEngineVersion: undefined,
        ChangeType: undefined,
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
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    if (output["ChangeType"] !== undefined) {
        contents.ChangeType = output["ChangeType"];
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
var deserializeAws_queryPendingLogDeliveryConfiguration = function (output, context) {
    var contents = {
        LogType: undefined,
        DestinationType: undefined,
        DestinationDetails: undefined,
        LogFormat: undefined,
    };
    if (output["LogType"] !== undefined) {
        contents.LogType = output["LogType"];
    }
    if (output["DestinationType"] !== undefined) {
        contents.DestinationType = output["DestinationType"];
    }
    if (output["DestinationDetails"] !== undefined) {
        contents.DestinationDetails = deserializeAws_queryDestinationDetails(output["DestinationDetails"], context);
    }
    if (output["LogFormat"] !== undefined) {
        contents.LogFormat = output["LogFormat"];
    }
    return contents;
};
var deserializeAws_queryPendingLogDeliveryConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPendingLogDeliveryConfiguration(entry, context);
    });
};
var deserializeAws_queryPendingModifiedValues = function (output, context) {
    var contents = {
        NumCacheNodes: undefined,
        CacheNodeIdsToRemove: undefined,
        EngineVersion: undefined,
        CacheNodeType: undefined,
        AuthTokenStatus: undefined,
        LogDeliveryConfigurations: undefined,
    };
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    if (output.CacheNodeIdsToRemove === "") {
        contents.CacheNodeIdsToRemove = [];
    }
    if (output["CacheNodeIdsToRemove"] !== undefined && output["CacheNodeIdsToRemove"]["CacheNodeId"] !== undefined) {
        contents.CacheNodeIdsToRemove = deserializeAws_queryCacheNodeIdsList(__getArrayIfSingleItem(output["CacheNodeIdsToRemove"]["CacheNodeId"]), context);
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["AuthTokenStatus"] !== undefined) {
        contents.AuthTokenStatus = output["AuthTokenStatus"];
    }
    if (output.LogDeliveryConfigurations === "") {
        contents.LogDeliveryConfigurations = [];
    }
    if (output["LogDeliveryConfigurations"] !== undefined &&
        output["LogDeliveryConfigurations"]["member"] !== undefined) {
        contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(__getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryProcessedUpdateAction = function (output, context) {
    var contents = {
        ReplicationGroupId: undefined,
        CacheClusterId: undefined,
        ServiceUpdateName: undefined,
        UpdateActionStatus: undefined,
    };
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["UpdateActionStatus"] !== undefined) {
        contents.UpdateActionStatus = output["UpdateActionStatus"];
    }
    return contents;
};
var deserializeAws_queryProcessedUpdateActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryProcessedUpdateAction(entry, context);
    });
};
var deserializeAws_queryPurchaseReservedCacheNodesOfferingResult = function (output, context) {
    var contents = {
        ReservedCacheNode: undefined,
    };
    if (output["ReservedCacheNode"] !== undefined) {
        contents.ReservedCacheNode = deserializeAws_queryReservedCacheNode(output["ReservedCacheNode"], context);
    }
    return contents;
};
var deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult = function (output, context) {
    var contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryRebootCacheClusterResult = function (output, context) {
    var contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
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
var deserializeAws_queryReplicationGroup = function (output, context) {
    var contents = {
        ReplicationGroupId: undefined,
        Description: undefined,
        GlobalReplicationGroupInfo: undefined,
        Status: undefined,
        PendingModifiedValues: undefined,
        MemberClusters: undefined,
        NodeGroups: undefined,
        SnapshottingClusterId: undefined,
        AutomaticFailover: undefined,
        MultiAZ: undefined,
        ConfigurationEndpoint: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotWindow: undefined,
        ClusterEnabled: undefined,
        CacheNodeType: undefined,
        AuthTokenEnabled: undefined,
        AuthTokenLastModifiedDate: undefined,
        TransitEncryptionEnabled: undefined,
        AtRestEncryptionEnabled: undefined,
        MemberClustersOutpostArns: undefined,
        KmsKeyId: undefined,
        ARN: undefined,
        UserGroupIds: undefined,
        LogDeliveryConfigurations: undefined,
    };
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["GlobalReplicationGroupInfo"] !== undefined) {
        contents.GlobalReplicationGroupInfo = deserializeAws_queryGlobalReplicationGroupInfo(output["GlobalReplicationGroupInfo"], context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryReplicationGroupPendingModifiedValues(output["PendingModifiedValues"], context);
    }
    if (output.MemberClusters === "") {
        contents.MemberClusters = [];
    }
    if (output["MemberClusters"] !== undefined && output["MemberClusters"]["ClusterId"] !== undefined) {
        contents.MemberClusters = deserializeAws_queryClusterIdList(__getArrayIfSingleItem(output["MemberClusters"]["ClusterId"]), context);
    }
    if (output.NodeGroups === "") {
        contents.NodeGroups = [];
    }
    if (output["NodeGroups"] !== undefined && output["NodeGroups"]["NodeGroup"] !== undefined) {
        contents.NodeGroups = deserializeAws_queryNodeGroupList(__getArrayIfSingleItem(output["NodeGroups"]["NodeGroup"]), context);
    }
    if (output["SnapshottingClusterId"] !== undefined) {
        contents.SnapshottingClusterId = output["SnapshottingClusterId"];
    }
    if (output["AutomaticFailover"] !== undefined) {
        contents.AutomaticFailover = output["AutomaticFailover"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"];
    }
    if (output["ConfigurationEndpoint"] !== undefined) {
        contents.ConfigurationEndpoint = deserializeAws_queryEndpoint(output["ConfigurationEndpoint"], context);
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["ClusterEnabled"] !== undefined) {
        contents.ClusterEnabled = output["ClusterEnabled"] == "true";
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["AuthTokenEnabled"] !== undefined) {
        contents.AuthTokenEnabled = output["AuthTokenEnabled"] == "true";
    }
    if (output["AuthTokenLastModifiedDate"] !== undefined) {
        contents.AuthTokenLastModifiedDate = new Date(output["AuthTokenLastModifiedDate"]);
    }
    if (output["TransitEncryptionEnabled"] !== undefined) {
        contents.TransitEncryptionEnabled = output["TransitEncryptionEnabled"] == "true";
    }
    if (output["AtRestEncryptionEnabled"] !== undefined) {
        contents.AtRestEncryptionEnabled = output["AtRestEncryptionEnabled"] == "true";
    }
    if (output.MemberClustersOutpostArns === "") {
        contents.MemberClustersOutpostArns = [];
    }
    if (output["MemberClustersOutpostArns"] !== undefined &&
        output["MemberClustersOutpostArns"]["ReplicationGroupOutpostArn"] !== undefined) {
        contents.MemberClustersOutpostArns = deserializeAws_queryReplicationGroupOutpostArnList(__getArrayIfSingleItem(output["MemberClustersOutpostArns"]["ReplicationGroupOutpostArn"]), context);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    if (output.UserGroupIds === "") {
        contents.UserGroupIds = [];
    }
    if (output["UserGroupIds"] !== undefined && output["UserGroupIds"]["member"] !== undefined) {
        contents.UserGroupIds = deserializeAws_queryUserGroupIdList(__getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
    }
    if (output.LogDeliveryConfigurations === "") {
        contents.LogDeliveryConfigurations = [];
    }
    if (output["LogDeliveryConfigurations"] !== undefined &&
        output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined) {
        contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(__getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]), context);
    }
    return contents;
};
var deserializeAws_queryReplicationGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReplicationGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReplicationGroup(entry, context);
    });
};
var deserializeAws_queryReplicationGroupMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReplicationGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReplicationGroups === "") {
        contents.ReplicationGroups = [];
    }
    if (output["ReplicationGroups"] !== undefined && output["ReplicationGroups"]["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroups = deserializeAws_queryReplicationGroupList(__getArrayIfSingleItem(output["ReplicationGroups"]["ReplicationGroup"]), context);
    }
    return contents;
};
var deserializeAws_queryReplicationGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReplicationGroupNotUnderMigrationFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReplicationGroupOutpostArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryReplicationGroupPendingModifiedValues = function (output, context) {
    var contents = {
        PrimaryClusterId: undefined,
        AutomaticFailoverStatus: undefined,
        Resharding: undefined,
        AuthTokenStatus: undefined,
        UserGroups: undefined,
        LogDeliveryConfigurations: undefined,
    };
    if (output["PrimaryClusterId"] !== undefined) {
        contents.PrimaryClusterId = output["PrimaryClusterId"];
    }
    if (output["AutomaticFailoverStatus"] !== undefined) {
        contents.AutomaticFailoverStatus = output["AutomaticFailoverStatus"];
    }
    if (output["Resharding"] !== undefined) {
        contents.Resharding = deserializeAws_queryReshardingStatus(output["Resharding"], context);
    }
    if (output["AuthTokenStatus"] !== undefined) {
        contents.AuthTokenStatus = output["AuthTokenStatus"];
    }
    if (output["UserGroups"] !== undefined) {
        contents.UserGroups = deserializeAws_queryUserGroupsUpdateStatus(output["UserGroups"], context);
    }
    if (output.LogDeliveryConfigurations === "") {
        contents.LogDeliveryConfigurations = [];
    }
    if (output["LogDeliveryConfigurations"] !== undefined &&
        output["LogDeliveryConfigurations"]["member"] !== undefined) {
        contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(__getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryReservedCacheNode = function (output, context) {
    var contents = {
        ReservedCacheNodeId: undefined,
        ReservedCacheNodesOfferingId: undefined,
        CacheNodeType: undefined,
        StartTime: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        CacheNodeCount: undefined,
        ProductDescription: undefined,
        OfferingType: undefined,
        State: undefined,
        RecurringCharges: undefined,
        ReservationARN: undefined,
    };
    if (output["ReservedCacheNodeId"] !== undefined) {
        contents.ReservedCacheNodeId = output["ReservedCacheNodeId"];
    }
    if (output["ReservedCacheNodesOfferingId"] !== undefined) {
        contents.ReservedCacheNodesOfferingId = output["ReservedCacheNodesOfferingId"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
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
    if (output["CacheNodeCount"] !== undefined) {
        contents.CacheNodeCount = parseInt(output["CacheNodeCount"]);
    }
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(__getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservationARN"] !== undefined) {
        contents.ReservationARN = output["ReservationARN"];
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodeAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedCacheNode(entry, context);
    });
};
var deserializeAws_queryReservedCacheNodeMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReservedCacheNodes: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedCacheNodes === "") {
        contents.ReservedCacheNodes = [];
    }
    if (output["ReservedCacheNodes"] !== undefined && output["ReservedCacheNodes"]["ReservedCacheNode"] !== undefined) {
        contents.ReservedCacheNodes = deserializeAws_queryReservedCacheNodeList(__getArrayIfSingleItem(output["ReservedCacheNodes"]["ReservedCacheNode"]), context);
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodeNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodeQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodesOffering = function (output, context) {
    var contents = {
        ReservedCacheNodesOfferingId: undefined,
        CacheNodeType: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        ProductDescription: undefined,
        OfferingType: undefined,
        RecurringCharges: undefined,
    };
    if (output["ReservedCacheNodesOfferingId"] !== undefined) {
        contents.ReservedCacheNodesOfferingId = output["ReservedCacheNodesOfferingId"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
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
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
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
    return contents;
};
var deserializeAws_queryReservedCacheNodesOfferingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedCacheNodesOffering(entry, context);
    });
};
var deserializeAws_queryReservedCacheNodesOfferingMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ReservedCacheNodesOfferings: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedCacheNodesOfferings === "") {
        contents.ReservedCacheNodesOfferings = [];
    }
    if (output["ReservedCacheNodesOfferings"] !== undefined &&
        output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"] !== undefined) {
        contents.ReservedCacheNodesOfferings = deserializeAws_queryReservedCacheNodesOfferingList(__getArrayIfSingleItem(output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]), context);
    }
    return contents;
};
var deserializeAws_queryReservedCacheNodesOfferingNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryReshardingStatus = function (output, context) {
    var contents = {
        SlotMigration: undefined,
    };
    if (output["SlotMigration"] !== undefined) {
        contents.SlotMigration = deserializeAws_querySlotMigration(output["SlotMigration"], context);
    }
    return contents;
};
var deserializeAws_queryRevokeCacheSecurityGroupIngressResult = function (output, context) {
    var contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
var deserializeAws_querySecurityGroupMembership = function (output, context) {
    var contents = {
        SecurityGroupId: undefined,
        Status: undefined,
    };
    if (output["SecurityGroupId"] !== undefined) {
        contents.SecurityGroupId = output["SecurityGroupId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
var deserializeAws_querySecurityGroupMembershipList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySecurityGroupMembership(entry, context);
    });
};
var deserializeAws_queryServiceLinkedRoleNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryServiceUpdate = function (output, context) {
    var contents = {
        ServiceUpdateName: undefined,
        ServiceUpdateReleaseDate: undefined,
        ServiceUpdateEndDate: undefined,
        ServiceUpdateSeverity: undefined,
        ServiceUpdateRecommendedApplyByDate: undefined,
        ServiceUpdateStatus: undefined,
        ServiceUpdateDescription: undefined,
        ServiceUpdateType: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        AutoUpdateAfterRecommendedApplyByDate: undefined,
        EstimatedUpdateTime: undefined,
    };
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["ServiceUpdateReleaseDate"] !== undefined) {
        contents.ServiceUpdateReleaseDate = new Date(output["ServiceUpdateReleaseDate"]);
    }
    if (output["ServiceUpdateEndDate"] !== undefined) {
        contents.ServiceUpdateEndDate = new Date(output["ServiceUpdateEndDate"]);
    }
    if (output["ServiceUpdateSeverity"] !== undefined) {
        contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
    }
    if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
        contents.ServiceUpdateRecommendedApplyByDate = new Date(output["ServiceUpdateRecommendedApplyByDate"]);
    }
    if (output["ServiceUpdateStatus"] !== undefined) {
        contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
    }
    if (output["ServiceUpdateDescription"] !== undefined) {
        contents.ServiceUpdateDescription = output["ServiceUpdateDescription"];
    }
    if (output["ServiceUpdateType"] !== undefined) {
        contents.ServiceUpdateType = output["ServiceUpdateType"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["AutoUpdateAfterRecommendedApplyByDate"] !== undefined) {
        contents.AutoUpdateAfterRecommendedApplyByDate = output["AutoUpdateAfterRecommendedApplyByDate"] == "true";
    }
    if (output["EstimatedUpdateTime"] !== undefined) {
        contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
    }
    return contents;
};
var deserializeAws_queryServiceUpdateList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceUpdate(entry, context);
    });
};
var deserializeAws_queryServiceUpdateNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryServiceUpdatesMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        ServiceUpdates: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ServiceUpdates === "") {
        contents.ServiceUpdates = [];
    }
    if (output["ServiceUpdates"] !== undefined && output["ServiceUpdates"]["ServiceUpdate"] !== undefined) {
        contents.ServiceUpdates = deserializeAws_queryServiceUpdateList(__getArrayIfSingleItem(output["ServiceUpdates"]["ServiceUpdate"]), context);
    }
    return contents;
};
var deserializeAws_querySlotMigration = function (output, context) {
    var contents = {
        ProgressPercentage: undefined,
    };
    if (output["ProgressPercentage"] !== undefined) {
        contents.ProgressPercentage = parseFloat(output["ProgressPercentage"]);
    }
    return contents;
};
var deserializeAws_querySnapshot = function (output, context) {
    var contents = {
        SnapshotName: undefined,
        ReplicationGroupId: undefined,
        ReplicationGroupDescription: undefined,
        CacheClusterId: undefined,
        SnapshotStatus: undefined,
        SnapshotSource: undefined,
        CacheNodeType: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        NumCacheNodes: undefined,
        PreferredAvailabilityZone: undefined,
        PreferredOutpostArn: undefined,
        CacheClusterCreateTime: undefined,
        PreferredMaintenanceWindow: undefined,
        TopicArn: undefined,
        Port: undefined,
        CacheParameterGroupName: undefined,
        CacheSubnetGroupName: undefined,
        VpcId: undefined,
        AutoMinorVersionUpgrade: undefined,
        SnapshotRetentionLimit: undefined,
        SnapshotWindow: undefined,
        NumNodeGroups: undefined,
        AutomaticFailover: undefined,
        NodeSnapshots: undefined,
        KmsKeyId: undefined,
        ARN: undefined,
    };
    if (output["SnapshotName"] !== undefined) {
        contents.SnapshotName = output["SnapshotName"];
    }
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["ReplicationGroupDescription"] !== undefined) {
        contents.ReplicationGroupDescription = output["ReplicationGroupDescription"];
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["SnapshotStatus"] !== undefined) {
        contents.SnapshotStatus = output["SnapshotStatus"];
    }
    if (output["SnapshotSource"] !== undefined) {
        contents.SnapshotSource = output["SnapshotSource"];
    }
    if (output["CacheNodeType"] !== undefined) {
        contents.CacheNodeType = output["CacheNodeType"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["NumCacheNodes"] !== undefined) {
        contents.NumCacheNodes = parseInt(output["NumCacheNodes"]);
    }
    if (output["PreferredAvailabilityZone"] !== undefined) {
        contents.PreferredAvailabilityZone = output["PreferredAvailabilityZone"];
    }
    if (output["PreferredOutpostArn"] !== undefined) {
        contents.PreferredOutpostArn = output["PreferredOutpostArn"];
    }
    if (output["CacheClusterCreateTime"] !== undefined) {
        contents.CacheClusterCreateTime = new Date(output["CacheClusterCreateTime"]);
    }
    if (output["PreferredMaintenanceWindow"] !== undefined) {
        contents.PreferredMaintenanceWindow = output["PreferredMaintenanceWindow"];
    }
    if (output["TopicArn"] !== undefined) {
        contents.TopicArn = output["TopicArn"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    if (output["CacheSubnetGroupName"] !== undefined) {
        contents.CacheSubnetGroupName = output["CacheSubnetGroupName"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade = output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output["SnapshotRetentionLimit"] !== undefined) {
        contents.SnapshotRetentionLimit = parseInt(output["SnapshotRetentionLimit"]);
    }
    if (output["SnapshotWindow"] !== undefined) {
        contents.SnapshotWindow = output["SnapshotWindow"];
    }
    if (output["NumNodeGroups"] !== undefined) {
        contents.NumNodeGroups = parseInt(output["NumNodeGroups"]);
    }
    if (output["AutomaticFailover"] !== undefined) {
        contents.AutomaticFailover = output["AutomaticFailover"];
    }
    if (output.NodeSnapshots === "") {
        contents.NodeSnapshots = [];
    }
    if (output["NodeSnapshots"] !== undefined && output["NodeSnapshots"]["NodeSnapshot"] !== undefined) {
        contents.NodeSnapshots = deserializeAws_queryNodeSnapshotList(__getArrayIfSingleItem(output["NodeSnapshots"]["NodeSnapshot"]), context);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_querySnapshotAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySnapshotFeatureNotSupportedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
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
var deserializeAws_querySnapshotNotFoundFault = function (output, context) {
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
var deserializeAws_queryStartMigrationResponse = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_querySubnet = function (output, context) {
    var contents = {
        SubnetIdentifier: undefined,
        SubnetAvailabilityZone: undefined,
        SubnetOutpost: undefined,
    };
    if (output["SubnetIdentifier"] !== undefined) {
        contents.SubnetIdentifier = output["SubnetIdentifier"];
    }
    if (output["SubnetAvailabilityZone"] !== undefined) {
        contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
    }
    if (output["SubnetOutpost"] !== undefined) {
        contents.SubnetOutpost = deserializeAws_querySubnetOutpost(output["SubnetOutpost"], context);
    }
    return contents;
};
var deserializeAws_querySubnetInUse = function (output, context) {
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
var deserializeAws_querySubnetNotAllowedFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_querySubnetOutpost = function (output, context) {
    var contents = {
        SubnetOutpostArn: undefined,
    };
    if (output["SubnetOutpostArn"] !== undefined) {
        contents.SubnetOutpostArn = output["SubnetOutpostArn"];
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
var deserializeAws_queryTagNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTagQuotaPerResourceExceeded = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTestFailoverNotAvailableFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryTestFailoverResult = function (output, context) {
    var contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
var deserializeAws_queryUGReplicationGroupIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryUnprocessedUpdateAction = function (output, context) {
    var contents = {
        ReplicationGroupId: undefined,
        CacheClusterId: undefined,
        ServiceUpdateName: undefined,
        ErrorType: undefined,
        ErrorMessage: undefined,
    };
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["ErrorType"] !== undefined) {
        contents.ErrorType = output["ErrorType"];
    }
    if (output["ErrorMessage"] !== undefined) {
        contents.ErrorMessage = output["ErrorMessage"];
    }
    return contents;
};
var deserializeAws_queryUnprocessedUpdateActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUnprocessedUpdateAction(entry, context);
    });
};
var deserializeAws_queryUpdateAction = function (output, context) {
    var contents = {
        ReplicationGroupId: undefined,
        CacheClusterId: undefined,
        ServiceUpdateName: undefined,
        ServiceUpdateReleaseDate: undefined,
        ServiceUpdateSeverity: undefined,
        ServiceUpdateStatus: undefined,
        ServiceUpdateRecommendedApplyByDate: undefined,
        ServiceUpdateType: undefined,
        UpdateActionAvailableDate: undefined,
        UpdateActionStatus: undefined,
        NodesUpdated: undefined,
        UpdateActionStatusModifiedDate: undefined,
        SlaMet: undefined,
        NodeGroupUpdateStatus: undefined,
        CacheNodeUpdateStatus: undefined,
        EstimatedUpdateTime: undefined,
        Engine: undefined,
    };
    if (output["ReplicationGroupId"] !== undefined) {
        contents.ReplicationGroupId = output["ReplicationGroupId"];
    }
    if (output["CacheClusterId"] !== undefined) {
        contents.CacheClusterId = output["CacheClusterId"];
    }
    if (output["ServiceUpdateName"] !== undefined) {
        contents.ServiceUpdateName = output["ServiceUpdateName"];
    }
    if (output["ServiceUpdateReleaseDate"] !== undefined) {
        contents.ServiceUpdateReleaseDate = new Date(output["ServiceUpdateReleaseDate"]);
    }
    if (output["ServiceUpdateSeverity"] !== undefined) {
        contents.ServiceUpdateSeverity = output["ServiceUpdateSeverity"];
    }
    if (output["ServiceUpdateStatus"] !== undefined) {
        contents.ServiceUpdateStatus = output["ServiceUpdateStatus"];
    }
    if (output["ServiceUpdateRecommendedApplyByDate"] !== undefined) {
        contents.ServiceUpdateRecommendedApplyByDate = new Date(output["ServiceUpdateRecommendedApplyByDate"]);
    }
    if (output["ServiceUpdateType"] !== undefined) {
        contents.ServiceUpdateType = output["ServiceUpdateType"];
    }
    if (output["UpdateActionAvailableDate"] !== undefined) {
        contents.UpdateActionAvailableDate = new Date(output["UpdateActionAvailableDate"]);
    }
    if (output["UpdateActionStatus"] !== undefined) {
        contents.UpdateActionStatus = output["UpdateActionStatus"];
    }
    if (output["NodesUpdated"] !== undefined) {
        contents.NodesUpdated = output["NodesUpdated"];
    }
    if (output["UpdateActionStatusModifiedDate"] !== undefined) {
        contents.UpdateActionStatusModifiedDate = new Date(output["UpdateActionStatusModifiedDate"]);
    }
    if (output["SlaMet"] !== undefined) {
        contents.SlaMet = output["SlaMet"];
    }
    if (output.NodeGroupUpdateStatus === "") {
        contents.NodeGroupUpdateStatus = [];
    }
    if (output["NodeGroupUpdateStatus"] !== undefined &&
        output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"] !== undefined) {
        contents.NodeGroupUpdateStatus = deserializeAws_queryNodeGroupUpdateStatusList(__getArrayIfSingleItem(output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]), context);
    }
    if (output.CacheNodeUpdateStatus === "") {
        contents.CacheNodeUpdateStatus = [];
    }
    if (output["CacheNodeUpdateStatus"] !== undefined &&
        output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] !== undefined) {
        contents.CacheNodeUpdateStatus = deserializeAws_queryCacheNodeUpdateStatusList(__getArrayIfSingleItem(output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]), context);
    }
    if (output["EstimatedUpdateTime"] !== undefined) {
        contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    return contents;
};
var deserializeAws_queryUpdateActionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpdateAction(entry, context);
    });
};
var deserializeAws_queryUpdateActionResultsMessage = function (output, context) {
    var contents = {
        ProcessedUpdateActions: undefined,
        UnprocessedUpdateActions: undefined,
    };
    if (output.ProcessedUpdateActions === "") {
        contents.ProcessedUpdateActions = [];
    }
    if (output["ProcessedUpdateActions"] !== undefined &&
        output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined) {
        contents.ProcessedUpdateActions = deserializeAws_queryProcessedUpdateActionList(__getArrayIfSingleItem(output["ProcessedUpdateActions"]["ProcessedUpdateAction"]), context);
    }
    if (output.UnprocessedUpdateActions === "") {
        contents.UnprocessedUpdateActions = [];
    }
    if (output["UnprocessedUpdateActions"] !== undefined &&
        output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] !== undefined) {
        contents.UnprocessedUpdateActions = deserializeAws_queryUnprocessedUpdateActionList(__getArrayIfSingleItem(output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]), context);
    }
    return contents;
};
var deserializeAws_queryUpdateActionsMessage = function (output, context) {
    var contents = {
        Marker: undefined,
        UpdateActions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.UpdateActions === "") {
        contents.UpdateActions = [];
    }
    if (output["UpdateActions"] !== undefined && output["UpdateActions"]["UpdateAction"] !== undefined) {
        contents.UpdateActions = deserializeAws_queryUpdateActionList(__getArrayIfSingleItem(output["UpdateActions"]["UpdateAction"]), context);
    }
    return contents;
};
var deserializeAws_queryUser = function (output, context) {
    var contents = {
        UserId: undefined,
        UserName: undefined,
        Status: undefined,
        Engine: undefined,
        AccessString: undefined,
        UserGroupIds: undefined,
        Authentication: undefined,
        ARN: undefined,
    };
    if (output["UserId"] !== undefined) {
        contents.UserId = output["UserId"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["AccessString"] !== undefined) {
        contents.AccessString = output["AccessString"];
    }
    if (output.UserGroupIds === "") {
        contents.UserGroupIds = [];
    }
    if (output["UserGroupIds"] !== undefined && output["UserGroupIds"]["member"] !== undefined) {
        contents.UserGroupIds = deserializeAws_queryUserGroupIdList(__getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
    }
    if (output["Authentication"] !== undefined) {
        contents.Authentication = deserializeAws_queryAuthentication(output["Authentication"], context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryUserAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUserGroup = function (output, context) {
    var contents = {
        UserGroupId: undefined,
        Status: undefined,
        Engine: undefined,
        UserIds: undefined,
        PendingChanges: undefined,
        ReplicationGroups: undefined,
        ARN: undefined,
    };
    if (output["UserGroupId"] !== undefined) {
        contents.UserGroupId = output["UserGroupId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output.UserIds === "") {
        contents.UserIds = [];
    }
    if (output["UserIds"] !== undefined && output["UserIds"]["member"] !== undefined) {
        contents.UserIds = deserializeAws_queryUserIdList(__getArrayIfSingleItem(output["UserIds"]["member"]), context);
    }
    if (output["PendingChanges"] !== undefined) {
        contents.PendingChanges = deserializeAws_queryUserGroupPendingChanges(output["PendingChanges"], context);
    }
    if (output.ReplicationGroups === "") {
        contents.ReplicationGroups = [];
    }
    if (output["ReplicationGroups"] !== undefined && output["ReplicationGroups"]["member"] !== undefined) {
        contents.ReplicationGroups = deserializeAws_queryUGReplicationGroupIdList(__getArrayIfSingleItem(output["ReplicationGroups"]["member"]), context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
var deserializeAws_queryUserGroupAlreadyExistsFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUserGroupIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryUserGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUserGroup(entry, context);
    });
};
var deserializeAws_queryUserGroupNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUserGroupPendingChanges = function (output, context) {
    var contents = {
        UserIdsToRemove: undefined,
        UserIdsToAdd: undefined,
    };
    if (output.UserIdsToRemove === "") {
        contents.UserIdsToRemove = [];
    }
    if (output["UserIdsToRemove"] !== undefined && output["UserIdsToRemove"]["member"] !== undefined) {
        contents.UserIdsToRemove = deserializeAws_queryUserIdList(__getArrayIfSingleItem(output["UserIdsToRemove"]["member"]), context);
    }
    if (output.UserIdsToAdd === "") {
        contents.UserIdsToAdd = [];
    }
    if (output["UserIdsToAdd"] !== undefined && output["UserIdsToAdd"]["member"] !== undefined) {
        contents.UserIdsToAdd = deserializeAws_queryUserIdList(__getArrayIfSingleItem(output["UserIdsToAdd"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryUserGroupQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUserGroupsUpdateStatus = function (output, context) {
    var contents = {
        UserGroupIdsToAdd: undefined,
        UserGroupIdsToRemove: undefined,
    };
    if (output.UserGroupIdsToAdd === "") {
        contents.UserGroupIdsToAdd = [];
    }
    if (output["UserGroupIdsToAdd"] !== undefined && output["UserGroupIdsToAdd"]["member"] !== undefined) {
        contents.UserGroupIdsToAdd = deserializeAws_queryUserGroupIdList(__getArrayIfSingleItem(output["UserGroupIdsToAdd"]["member"]), context);
    }
    if (output.UserGroupIdsToRemove === "") {
        contents.UserGroupIdsToRemove = [];
    }
    if (output["UserGroupIdsToRemove"] !== undefined && output["UserGroupIdsToRemove"]["member"] !== undefined) {
        contents.UserGroupIdsToRemove = deserializeAws_queryUserGroupIdList(__getArrayIfSingleItem(output["UserGroupIdsToRemove"]["member"]), context);
    }
    return contents;
};
var deserializeAws_queryUserIdList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_queryUserList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUser(entry, context);
    });
};
var deserializeAws_queryUserNotFoundFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
var deserializeAws_queryUserQuotaExceededFault = function (output, context) {
    var contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
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