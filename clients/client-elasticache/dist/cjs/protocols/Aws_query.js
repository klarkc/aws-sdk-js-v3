"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryModifyCacheClusterCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryListAllowedNodeTypeModificationsCommand = exports.serializeAws_queryIncreaseReplicaCountCommand = exports.serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = exports.serializeAws_queryFailoverGlobalReplicationGroupCommand = exports.serializeAws_queryDisassociateGlobalReplicationGroupCommand = exports.serializeAws_queryDescribeUsersCommand = exports.serializeAws_queryDescribeUserGroupsCommand = exports.serializeAws_queryDescribeUpdateActionsCommand = exports.serializeAws_queryDescribeSnapshotsCommand = exports.serializeAws_queryDescribeServiceUpdatesCommand = exports.serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = exports.serializeAws_queryDescribeReservedCacheNodesCommand = exports.serializeAws_queryDescribeReplicationGroupsCommand = exports.serializeAws_queryDescribeGlobalReplicationGroupsCommand = exports.serializeAws_queryDescribeEventsCommand = exports.serializeAws_queryDescribeEngineDefaultParametersCommand = exports.serializeAws_queryDescribeCacheSubnetGroupsCommand = exports.serializeAws_queryDescribeCacheSecurityGroupsCommand = exports.serializeAws_queryDescribeCacheParametersCommand = exports.serializeAws_queryDescribeCacheParameterGroupsCommand = exports.serializeAws_queryDescribeCacheEngineVersionsCommand = exports.serializeAws_queryDescribeCacheClustersCommand = exports.serializeAws_queryDeleteUserGroupCommand = exports.serializeAws_queryDeleteUserCommand = exports.serializeAws_queryDeleteSnapshotCommand = exports.serializeAws_queryDeleteReplicationGroupCommand = exports.serializeAws_queryDeleteGlobalReplicationGroupCommand = exports.serializeAws_queryDeleteCacheSubnetGroupCommand = exports.serializeAws_queryDeleteCacheSecurityGroupCommand = exports.serializeAws_queryDeleteCacheParameterGroupCommand = exports.serializeAws_queryDeleteCacheClusterCommand = exports.serializeAws_queryDecreaseReplicaCountCommand = exports.serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = exports.serializeAws_queryCreateUserGroupCommand = exports.serializeAws_queryCreateUserCommand = exports.serializeAws_queryCreateSnapshotCommand = exports.serializeAws_queryCreateReplicationGroupCommand = exports.serializeAws_queryCreateGlobalReplicationGroupCommand = exports.serializeAws_queryCreateCacheSubnetGroupCommand = exports.serializeAws_queryCreateCacheSecurityGroupCommand = exports.serializeAws_queryCreateCacheParameterGroupCommand = exports.serializeAws_queryCreateCacheClusterCommand = exports.serializeAws_queryCopySnapshotCommand = exports.serializeAws_queryCompleteMigrationCommand = exports.serializeAws_queryBatchStopUpdateActionCommand = exports.serializeAws_queryBatchApplyUpdateActionCommand = exports.serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = exports.serializeAws_queryAddTagsToResourceCommand = void 0;
exports.deserializeAws_queryDescribeGlobalReplicationGroupsCommand = exports.deserializeAws_queryDescribeEventsCommand = exports.deserializeAws_queryDescribeEngineDefaultParametersCommand = exports.deserializeAws_queryDescribeCacheSubnetGroupsCommand = exports.deserializeAws_queryDescribeCacheSecurityGroupsCommand = exports.deserializeAws_queryDescribeCacheParametersCommand = exports.deserializeAws_queryDescribeCacheParameterGroupsCommand = exports.deserializeAws_queryDescribeCacheEngineVersionsCommand = exports.deserializeAws_queryDescribeCacheClustersCommand = exports.deserializeAws_queryDeleteUserGroupCommand = exports.deserializeAws_queryDeleteUserCommand = exports.deserializeAws_queryDeleteSnapshotCommand = exports.deserializeAws_queryDeleteReplicationGroupCommand = exports.deserializeAws_queryDeleteGlobalReplicationGroupCommand = exports.deserializeAws_queryDeleteCacheSubnetGroupCommand = exports.deserializeAws_queryDeleteCacheSecurityGroupCommand = exports.deserializeAws_queryDeleteCacheParameterGroupCommand = exports.deserializeAws_queryDeleteCacheClusterCommand = exports.deserializeAws_queryDecreaseReplicaCountCommand = exports.deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = exports.deserializeAws_queryCreateUserGroupCommand = exports.deserializeAws_queryCreateUserCommand = exports.deserializeAws_queryCreateSnapshotCommand = exports.deserializeAws_queryCreateReplicationGroupCommand = exports.deserializeAws_queryCreateGlobalReplicationGroupCommand = exports.deserializeAws_queryCreateCacheSubnetGroupCommand = exports.deserializeAws_queryCreateCacheSecurityGroupCommand = exports.deserializeAws_queryCreateCacheParameterGroupCommand = exports.deserializeAws_queryCreateCacheClusterCommand = exports.deserializeAws_queryCopySnapshotCommand = exports.deserializeAws_queryCompleteMigrationCommand = exports.deserializeAws_queryBatchStopUpdateActionCommand = exports.deserializeAws_queryBatchApplyUpdateActionCommand = exports.deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = exports.deserializeAws_queryAddTagsToResourceCommand = exports.serializeAws_queryTestFailoverCommand = exports.serializeAws_queryStartMigrationCommand = exports.serializeAws_queryRevokeCacheSecurityGroupIngressCommand = exports.serializeAws_queryResetCacheParameterGroupCommand = exports.serializeAws_queryRemoveTagsFromResourceCommand = exports.serializeAws_queryRebootCacheClusterCommand = exports.serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = exports.serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = exports.serializeAws_queryModifyUserGroupCommand = exports.serializeAws_queryModifyUserCommand = exports.serializeAws_queryModifyReplicationGroupShardConfigurationCommand = exports.serializeAws_queryModifyReplicationGroupCommand = exports.serializeAws_queryModifyGlobalReplicationGroupCommand = exports.serializeAws_queryModifyCacheSubnetGroupCommand = exports.serializeAws_queryModifyCacheParameterGroupCommand = void 0;
exports.deserializeAws_queryTestFailoverCommand = exports.deserializeAws_queryStartMigrationCommand = exports.deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = exports.deserializeAws_queryResetCacheParameterGroupCommand = exports.deserializeAws_queryRemoveTagsFromResourceCommand = exports.deserializeAws_queryRebootCacheClusterCommand = exports.deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = exports.deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = exports.deserializeAws_queryModifyUserGroupCommand = exports.deserializeAws_queryModifyUserCommand = exports.deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = exports.deserializeAws_queryModifyReplicationGroupCommand = exports.deserializeAws_queryModifyGlobalReplicationGroupCommand = exports.deserializeAws_queryModifyCacheSubnetGroupCommand = exports.deserializeAws_queryModifyCacheParameterGroupCommand = exports.deserializeAws_queryModifyCacheClusterCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryListAllowedNodeTypeModificationsCommand = exports.deserializeAws_queryIncreaseReplicaCountCommand = exports.deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = exports.deserializeAws_queryFailoverGlobalReplicationGroupCommand = exports.deserializeAws_queryDisassociateGlobalReplicationGroupCommand = exports.deserializeAws_queryDescribeUsersCommand = exports.deserializeAws_queryDescribeUserGroupsCommand = exports.deserializeAws_queryDescribeUpdateActionsCommand = exports.deserializeAws_queryDescribeSnapshotsCommand = exports.deserializeAws_queryDescribeServiceUpdatesCommand = exports.deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = exports.deserializeAws_queryDescribeReservedCacheNodesCommand = exports.deserializeAws_queryDescribeReplicationGroupsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddTagsToResourceMessage(input, context),
        Action: "AddTagsToResource",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddTagsToResourceCommand = serializeAws_queryAddTagsToResourceCommand;
const serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage(input, context),
        Action: "AuthorizeCacheSecurityGroupIngress",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand;
const serializeAws_queryBatchApplyUpdateActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBatchApplyUpdateActionMessage(input, context),
        Action: "BatchApplyUpdateAction",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchApplyUpdateActionCommand = serializeAws_queryBatchApplyUpdateActionCommand;
const serializeAws_queryBatchStopUpdateActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBatchStopUpdateActionMessage(input, context),
        Action: "BatchStopUpdateAction",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchStopUpdateActionCommand = serializeAws_queryBatchStopUpdateActionCommand;
const serializeAws_queryCompleteMigrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCompleteMigrationMessage(input, context),
        Action: "CompleteMigration",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCompleteMigrationCommand = serializeAws_queryCompleteMigrationCommand;
const serializeAws_queryCopySnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopySnapshotMessage(input, context),
        Action: "CopySnapshot",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopySnapshotCommand = serializeAws_queryCopySnapshotCommand;
const serializeAws_queryCreateCacheClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCacheClusterMessage(input, context),
        Action: "CreateCacheCluster",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCacheClusterCommand = serializeAws_queryCreateCacheClusterCommand;
const serializeAws_queryCreateCacheParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCacheParameterGroupMessage(input, context),
        Action: "CreateCacheParameterGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCacheParameterGroupCommand = serializeAws_queryCreateCacheParameterGroupCommand;
const serializeAws_queryCreateCacheSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCacheSecurityGroupMessage(input, context),
        Action: "CreateCacheSecurityGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCacheSecurityGroupCommand = serializeAws_queryCreateCacheSecurityGroupCommand;
const serializeAws_queryCreateCacheSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCacheSubnetGroupMessage(input, context),
        Action: "CreateCacheSubnetGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCacheSubnetGroupCommand = serializeAws_queryCreateCacheSubnetGroupCommand;
const serializeAws_queryCreateGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateGlobalReplicationGroupMessage(input, context),
        Action: "CreateGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateGlobalReplicationGroupCommand = serializeAws_queryCreateGlobalReplicationGroupCommand;
const serializeAws_queryCreateReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateReplicationGroupMessage(input, context),
        Action: "CreateReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateReplicationGroupCommand = serializeAws_queryCreateReplicationGroupCommand;
const serializeAws_queryCreateSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateSnapshotMessage(input, context),
        Action: "CreateSnapshot",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateSnapshotCommand = serializeAws_queryCreateSnapshotCommand;
const serializeAws_queryCreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateUserMessage(input, context),
        Action: "CreateUser",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateUserCommand = serializeAws_queryCreateUserCommand;
const serializeAws_queryCreateUserGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateUserGroupMessage(input, context),
        Action: "CreateUserGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateUserGroupCommand = serializeAws_queryCreateUserGroupCommand;
const serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
        Action: "DecreaseNodeGroupsInGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand;
const serializeAws_queryDecreaseReplicaCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDecreaseReplicaCountMessage(input, context),
        Action: "DecreaseReplicaCount",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDecreaseReplicaCountCommand = serializeAws_queryDecreaseReplicaCountCommand;
const serializeAws_queryDeleteCacheClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCacheClusterMessage(input, context),
        Action: "DeleteCacheCluster",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCacheClusterCommand = serializeAws_queryDeleteCacheClusterCommand;
const serializeAws_queryDeleteCacheParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCacheParameterGroupMessage(input, context),
        Action: "DeleteCacheParameterGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCacheParameterGroupCommand = serializeAws_queryDeleteCacheParameterGroupCommand;
const serializeAws_queryDeleteCacheSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCacheSecurityGroupMessage(input, context),
        Action: "DeleteCacheSecurityGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCacheSecurityGroupCommand = serializeAws_queryDeleteCacheSecurityGroupCommand;
const serializeAws_queryDeleteCacheSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCacheSubnetGroupMessage(input, context),
        Action: "DeleteCacheSubnetGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCacheSubnetGroupCommand = serializeAws_queryDeleteCacheSubnetGroupCommand;
const serializeAws_queryDeleteGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteGlobalReplicationGroupMessage(input, context),
        Action: "DeleteGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteGlobalReplicationGroupCommand = serializeAws_queryDeleteGlobalReplicationGroupCommand;
const serializeAws_queryDeleteReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteReplicationGroupMessage(input, context),
        Action: "DeleteReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteReplicationGroupCommand = serializeAws_queryDeleteReplicationGroupCommand;
const serializeAws_queryDeleteSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSnapshotMessage(input, context),
        Action: "DeleteSnapshot",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSnapshotCommand = serializeAws_queryDeleteSnapshotCommand;
const serializeAws_queryDeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUserMessage(input, context),
        Action: "DeleteUser",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUserCommand = serializeAws_queryDeleteUserCommand;
const serializeAws_queryDeleteUserGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUserGroupMessage(input, context),
        Action: "DeleteUserGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUserGroupCommand = serializeAws_queryDeleteUserGroupCommand;
const serializeAws_queryDescribeCacheClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheClustersMessage(input, context),
        Action: "DescribeCacheClusters",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheClustersCommand = serializeAws_queryDescribeCacheClustersCommand;
const serializeAws_queryDescribeCacheEngineVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheEngineVersionsMessage(input, context),
        Action: "DescribeCacheEngineVersions",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheEngineVersionsCommand = serializeAws_queryDescribeCacheEngineVersionsCommand;
const serializeAws_queryDescribeCacheParameterGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheParameterGroupsMessage(input, context),
        Action: "DescribeCacheParameterGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheParameterGroupsCommand = serializeAws_queryDescribeCacheParameterGroupsCommand;
const serializeAws_queryDescribeCacheParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheParametersMessage(input, context),
        Action: "DescribeCacheParameters",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheParametersCommand = serializeAws_queryDescribeCacheParametersCommand;
const serializeAws_queryDescribeCacheSecurityGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheSecurityGroupsMessage(input, context),
        Action: "DescribeCacheSecurityGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheSecurityGroupsCommand = serializeAws_queryDescribeCacheSecurityGroupsCommand;
const serializeAws_queryDescribeCacheSubnetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCacheSubnetGroupsMessage(input, context),
        Action: "DescribeCacheSubnetGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCacheSubnetGroupsCommand = serializeAws_queryDescribeCacheSubnetGroupsCommand;
const serializeAws_queryDescribeEngineDefaultParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEngineDefaultParametersMessage(input, context),
        Action: "DescribeEngineDefaultParameters",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEngineDefaultParametersCommand = serializeAws_queryDescribeEngineDefaultParametersCommand;
const serializeAws_queryDescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventsMessage(input, context),
        Action: "DescribeEvents",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
const serializeAws_queryDescribeGlobalReplicationGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeGlobalReplicationGroupsMessage(input, context),
        Action: "DescribeGlobalReplicationGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeGlobalReplicationGroupsCommand = serializeAws_queryDescribeGlobalReplicationGroupsCommand;
const serializeAws_queryDescribeReplicationGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReplicationGroupsMessage(input, context),
        Action: "DescribeReplicationGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReplicationGroupsCommand = serializeAws_queryDescribeReplicationGroupsCommand;
const serializeAws_queryDescribeReservedCacheNodesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedCacheNodesMessage(input, context),
        Action: "DescribeReservedCacheNodes",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedCacheNodesCommand = serializeAws_queryDescribeReservedCacheNodesCommand;
const serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedCacheNodesOfferingsMessage(input, context),
        Action: "DescribeReservedCacheNodesOfferings",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedCacheNodesOfferingsCommand = serializeAws_queryDescribeReservedCacheNodesOfferingsCommand;
const serializeAws_queryDescribeServiceUpdatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeServiceUpdatesMessage(input, context),
        Action: "DescribeServiceUpdates",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeServiceUpdatesCommand = serializeAws_queryDescribeServiceUpdatesCommand;
const serializeAws_queryDescribeSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSnapshotsMessage(input, context),
        Action: "DescribeSnapshots",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSnapshotsCommand = serializeAws_queryDescribeSnapshotsCommand;
const serializeAws_queryDescribeUpdateActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeUpdateActionsMessage(input, context),
        Action: "DescribeUpdateActions",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeUpdateActionsCommand = serializeAws_queryDescribeUpdateActionsCommand;
const serializeAws_queryDescribeUserGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeUserGroupsMessage(input, context),
        Action: "DescribeUserGroups",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeUserGroupsCommand = serializeAws_queryDescribeUserGroupsCommand;
const serializeAws_queryDescribeUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeUsersMessage(input, context),
        Action: "DescribeUsers",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeUsersCommand = serializeAws_queryDescribeUsersCommand;
const serializeAws_queryDisassociateGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisassociateGlobalReplicationGroupMessage(input, context),
        Action: "DisassociateGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisassociateGlobalReplicationGroupCommand = serializeAws_queryDisassociateGlobalReplicationGroupCommand;
const serializeAws_queryFailoverGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryFailoverGlobalReplicationGroupMessage(input, context),
        Action: "FailoverGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryFailoverGlobalReplicationGroupCommand = serializeAws_queryFailoverGlobalReplicationGroupCommand;
const serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage(input, context),
        Action: "IncreaseNodeGroupsInGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand;
const serializeAws_queryIncreaseReplicaCountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryIncreaseReplicaCountMessage(input, context),
        Action: "IncreaseReplicaCount",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryIncreaseReplicaCountCommand = serializeAws_queryIncreaseReplicaCountCommand;
const serializeAws_queryListAllowedNodeTypeModificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListAllowedNodeTypeModificationsMessage(input, context),
        Action: "ListAllowedNodeTypeModifications",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListAllowedNodeTypeModificationsCommand = serializeAws_queryListAllowedNodeTypeModificationsCommand;
const serializeAws_queryListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTagsForResourceMessage(input, context),
        Action: "ListTagsForResource",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
const serializeAws_queryModifyCacheClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyCacheClusterMessage(input, context),
        Action: "ModifyCacheCluster",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyCacheClusterCommand = serializeAws_queryModifyCacheClusterCommand;
const serializeAws_queryModifyCacheParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyCacheParameterGroupMessage(input, context),
        Action: "ModifyCacheParameterGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyCacheParameterGroupCommand = serializeAws_queryModifyCacheParameterGroupCommand;
const serializeAws_queryModifyCacheSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyCacheSubnetGroupMessage(input, context),
        Action: "ModifyCacheSubnetGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyCacheSubnetGroupCommand = serializeAws_queryModifyCacheSubnetGroupCommand;
const serializeAws_queryModifyGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyGlobalReplicationGroupMessage(input, context),
        Action: "ModifyGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyGlobalReplicationGroupCommand = serializeAws_queryModifyGlobalReplicationGroupCommand;
const serializeAws_queryModifyReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyReplicationGroupMessage(input, context),
        Action: "ModifyReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyReplicationGroupCommand = serializeAws_queryModifyReplicationGroupCommand;
const serializeAws_queryModifyReplicationGroupShardConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyReplicationGroupShardConfigurationMessage(input, context),
        Action: "ModifyReplicationGroupShardConfiguration",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyReplicationGroupShardConfigurationCommand = serializeAws_queryModifyReplicationGroupShardConfigurationCommand;
const serializeAws_queryModifyUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyUserMessage(input, context),
        Action: "ModifyUser",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyUserCommand = serializeAws_queryModifyUserCommand;
const serializeAws_queryModifyUserGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyUserGroupMessage(input, context),
        Action: "ModifyUserGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyUserGroupCommand = serializeAws_queryModifyUserGroupCommand;
const serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPurchaseReservedCacheNodesOfferingMessage(input, context),
        Action: "PurchaseReservedCacheNodesOffering",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPurchaseReservedCacheNodesOfferingCommand = serializeAws_queryPurchaseReservedCacheNodesOfferingCommand;
const serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage(input, context),
        Action: "RebalanceSlotsInGlobalReplicationGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = serializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand;
const serializeAws_queryRebootCacheClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRebootCacheClusterMessage(input, context),
        Action: "RebootCacheCluster",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRebootCacheClusterCommand = serializeAws_queryRebootCacheClusterCommand;
const serializeAws_queryRemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveTagsFromResourceMessage(input, context),
        Action: "RemoveTagsFromResource",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveTagsFromResourceCommand = serializeAws_queryRemoveTagsFromResourceCommand;
const serializeAws_queryResetCacheParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResetCacheParameterGroupMessage(input, context),
        Action: "ResetCacheParameterGroup",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResetCacheParameterGroupCommand = serializeAws_queryResetCacheParameterGroupCommand;
const serializeAws_queryRevokeCacheSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRevokeCacheSecurityGroupIngressMessage(input, context),
        Action: "RevokeCacheSecurityGroupIngress",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRevokeCacheSecurityGroupIngressCommand = serializeAws_queryRevokeCacheSecurityGroupIngressCommand;
const serializeAws_queryStartMigrationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartMigrationMessage(input, context),
        Action: "StartMigration",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartMigrationCommand = serializeAws_queryStartMigrationCommand;
const serializeAws_queryTestFailoverCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryTestFailoverMessage(input, context),
        Action: "TestFailover",
        Version: "2015-02-02",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryTestFailoverCommand = serializeAws_queryTestFailoverCommand;
const deserializeAws_queryAddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddTagsToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagListMessage(data.AddTagsToResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddTagsToResourceCommand = deserializeAws_queryAddTagsToResourceCommand;
const deserializeAws_queryAddTagsToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.elasticache#InvalidARNFault":
            response = {
                ...(await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult(data.AuthorizeCacheSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand = deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand;
const deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "com.amazonaws.elasticache#AuthorizationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryBatchApplyUpdateActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBatchApplyUpdateActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchApplyUpdateActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBatchApplyUpdateActionCommand = deserializeAws_queryBatchApplyUpdateActionCommand;
const deserializeAws_queryBatchApplyUpdateActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUpdateNotFoundFault":
        case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
            response = {
                ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryBatchStopUpdateActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBatchStopUpdateActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionResultsMessage(data.BatchStopUpdateActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBatchStopUpdateActionCommand = deserializeAws_queryBatchStopUpdateActionCommand;
const deserializeAws_queryBatchStopUpdateActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUpdateNotFoundFault":
        case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
            response = {
                ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCompleteMigrationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCompleteMigrationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCompleteMigrationResponse(data.CompleteMigrationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCompleteMigrationCommand = deserializeAws_queryCompleteMigrationCommand;
const deserializeAws_queryCompleteMigrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotUnderMigrationFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotUnderMigrationFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCopySnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopySnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopySnapshotResult(data.CopySnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopySnapshotCommand = deserializeAws_queryCopySnapshotCommand;
const deserializeAws_queryCopySnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnapshotStateFault":
        case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotAlreadyExistsFault":
        case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateCacheClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheClusterResult(data.CreateCacheClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCacheClusterCommand = deserializeAws_queryCreateCacheClusterCommand;
const deserializeAws_queryCreateCacheClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterAlreadyExistsFault":
        case "com.amazonaws.elasticache#CacheClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryCacheClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateCacheParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheParameterGroupResult(data.CreateCacheParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCacheParameterGroupCommand = deserializeAws_queryCreateCacheParameterGroupCommand;
const deserializeAws_queryCreateCacheParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#CacheParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#CacheParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateCacheSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCacheSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheSecurityGroupResult(data.CreateCacheSecurityGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCacheSecurityGroupCommand = deserializeAws_queryCreateCacheSecurityGroupCommand;
const deserializeAws_queryCreateCacheSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSecurityGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateCacheSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCacheSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCacheSubnetGroupResult(data.CreateCacheSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCacheSubnetGroupCommand = deserializeAws_queryCreateCacheSubnetGroupCommand;
const deserializeAws_queryCreateCacheSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetQuotaExceededFault":
        case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.elasticache#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotAllowedFault":
        case "com.amazonaws.elasticache#SubnetNotAllowedFault":
            response = {
                ...(await deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateGlobalReplicationGroupResult(data.CreateGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateGlobalReplicationGroupCommand = deserializeAws_queryCreateGlobalReplicationGroupCommand;
const deserializeAws_queryCreateGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateReplicationGroupResult(data.CreateReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateReplicationGroupCommand = deserializeAws_queryCreateReplicationGroupCommand;
const deserializeAws_queryCreateReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserGroupStateFault":
        case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#ReplicationGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSnapshotResult(data.CreateSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateSnapshotCommand = deserializeAws_queryCreateSnapshotCommand;
const deserializeAws_queryCreateSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotAlreadyExistsFault":
        case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
            response = {
                ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUser(data.CreateUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateUserCommand = deserializeAws_queryCreateUserCommand;
const deserializeAws_queryCreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DuplicateUserNameFault":
        case "com.amazonaws.elasticache#DuplicateUserNameFault":
            response = {
                ...(await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserAlreadyExistsFault":
        case "com.amazonaws.elasticache#UserAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryUserAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserQuotaExceededFault":
        case "com.amazonaws.elasticache#UserQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryUserQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryCreateUserGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateUserGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUserGroup(data.CreateUserGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateUserGroupCommand = deserializeAws_queryCreateUserGroupCommand;
const deserializeAws_queryCreateUserGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DefaultUserRequired":
        case "com.amazonaws.elasticache#DefaultUserRequired":
            response = {
                ...(await deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateUserNameFault":
        case "com.amazonaws.elasticache#DuplicateUserNameFault":
            response = {
                ...(await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupAlreadyExistsFault":
        case "com.amazonaws.elasticache#UserGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryUserGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#UserGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryUserGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult(data.DecreaseNodeGroupsInGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand = deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommand;
const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDecreaseReplicaCountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDecreaseReplicaCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDecreaseReplicaCountResult(data.DecreaseReplicaCountResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDecreaseReplicaCountCommand = deserializeAws_queryDecreaseReplicaCountCommand;
const deserializeAws_queryDecreaseReplicaCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoOperationFault":
        case "com.amazonaws.elasticache#NoOperationFault":
            response = {
                ...(await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLinkedRoleNotFoundFault":
        case "com.amazonaws.elasticache#ServiceLinkedRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteCacheClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteCacheClusterResult(data.DeleteCacheClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCacheClusterCommand = deserializeAws_queryDeleteCacheClusterCommand;
const deserializeAws_queryDeleteCacheClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotAlreadyExistsFault":
        case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
            response = {
                ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteCacheParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCacheParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCacheParameterGroupCommand = deserializeAws_queryDeleteCacheParameterGroupCommand;
const deserializeAws_queryDeleteCacheParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteCacheSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCacheSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCacheSecurityGroupCommand = deserializeAws_queryDeleteCacheSecurityGroupCommand;
const deserializeAws_queryDeleteCacheSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteCacheSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCacheSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCacheSubnetGroupCommand = deserializeAws_queryDeleteCacheSubnetGroupCommand;
const deserializeAws_queryDeleteCacheSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupInUse":
        case "com.amazonaws.elasticache#CacheSubnetGroupInUse":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteGlobalReplicationGroupResult(data.DeleteGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteGlobalReplicationGroupCommand = deserializeAws_queryDeleteGlobalReplicationGroupCommand;
const deserializeAws_queryDeleteGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteReplicationGroupResult(data.DeleteReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteReplicationGroupCommand = deserializeAws_queryDeleteReplicationGroupCommand;
const deserializeAws_queryDeleteReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotAlreadyExistsFault":
        case "com.amazonaws.elasticache#SnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotFeatureNotSupportedFault":
        case "com.amazonaws.elasticache#SnapshotFeatureNotSupportedFault":
            response = {
                ...(await deserializeAws_querySnapshotFeatureNotSupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.elasticache#SnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteSnapshotResult(data.DeleteSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSnapshotCommand = deserializeAws_queryDeleteSnapshotCommand;
const deserializeAws_queryDeleteSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSnapshotStateFault":
        case "com.amazonaws.elasticache#InvalidSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUser(data.DeleteUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUserCommand = deserializeAws_queryDeleteUserCommand;
const deserializeAws_queryDeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DefaultUserAssociatedToUserGroupFault":
        case "com.amazonaws.elasticache#DefaultUserAssociatedToUserGroupFault":
            response = {
                ...(await deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserStateFault":
        case "com.amazonaws.elasticache#InvalidUserStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDeleteUserGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUserGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUserGroup(data.DeleteUserGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUserGroupCommand = deserializeAws_queryDeleteUserGroupCommand;
const deserializeAws_queryDeleteUserGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserGroupStateFault":
        case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheClusterMessage(data.DescribeCacheClustersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheClustersCommand = deserializeAws_queryDescribeCacheClustersCommand;
const deserializeAws_queryDescribeCacheClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheEngineVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheEngineVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheEngineVersionMessage(data.DescribeCacheEngineVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheEngineVersionsCommand = deserializeAws_queryDescribeCacheEngineVersionsCommand;
const deserializeAws_queryDescribeCacheEngineVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheParameterGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupsMessage(data.DescribeCacheParameterGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheParameterGroupsCommand = deserializeAws_queryDescribeCacheParameterGroupsCommand;
const deserializeAws_queryDescribeCacheParameterGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupDetails(data.DescribeCacheParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheParametersCommand = deserializeAws_queryDescribeCacheParametersCommand;
const deserializeAws_queryDescribeCacheParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheSecurityGroupMessage(data.DescribeCacheSecurityGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheSecurityGroupsCommand = deserializeAws_queryDescribeCacheSecurityGroupsCommand;
const deserializeAws_queryDescribeCacheSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeCacheSubnetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCacheSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheSubnetGroupMessage(data.DescribeCacheSubnetGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCacheSubnetGroupsCommand = deserializeAws_queryDescribeCacheSubnetGroupsCommand;
const deserializeAws_queryDescribeCacheSubnetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeEngineDefaultParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEngineDefaultParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEngineDefaultParametersResult(data.DescribeEngineDefaultParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEngineDefaultParametersCommand = deserializeAws_queryDescribeEngineDefaultParametersCommand;
const deserializeAws_queryDescribeEngineDefaultParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeEventsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEventsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventsMessage(data.DescribeEventsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEventsCommand = deserializeAws_queryDescribeEventsCommand;
const deserializeAws_queryDescribeEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeGlobalReplicationGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeGlobalReplicationGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeGlobalReplicationGroupsResult(data.DescribeGlobalReplicationGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeGlobalReplicationGroupsCommand = deserializeAws_queryDescribeGlobalReplicationGroupsCommand;
const deserializeAws_queryDescribeGlobalReplicationGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeReplicationGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReplicationGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReplicationGroupMessage(data.DescribeReplicationGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReplicationGroupsCommand = deserializeAws_queryDescribeReplicationGroupsCommand;
const deserializeAws_queryDescribeReplicationGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeReservedCacheNodesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedCacheNodesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedCacheNodeMessage(data.DescribeReservedCacheNodesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedCacheNodesCommand = deserializeAws_queryDescribeReservedCacheNodesCommand;
const deserializeAws_queryDescribeReservedCacheNodesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedCacheNodesOfferingMessage(data.DescribeReservedCacheNodesOfferingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand = deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand;
const deserializeAws_queryDescribeReservedCacheNodesOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodesOfferingNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeServiceUpdatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeServiceUpdatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryServiceUpdatesMessage(data.DescribeServiceUpdatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeServiceUpdatesCommand = deserializeAws_queryDescribeServiceUpdatesCommand;
const deserializeAws_queryDescribeServiceUpdatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUpdateNotFoundFault":
        case "com.amazonaws.elasticache#ServiceUpdateNotFoundFault":
            response = {
                ...(await deserializeAws_queryServiceUpdateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSnapshotsListMessage(data.DescribeSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSnapshotsCommand = deserializeAws_queryDescribeSnapshotsCommand;
const deserializeAws_queryDescribeSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeUpdateActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeUpdateActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUpdateActionsMessage(data.DescribeUpdateActionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeUpdateActionsCommand = deserializeAws_queryDescribeUpdateActionsCommand;
const deserializeAws_queryDescribeUpdateActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeUserGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeUserGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeUserGroupsResult(data.DescribeUserGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeUserGroupsCommand = deserializeAws_queryDescribeUserGroupsCommand;
const deserializeAws_queryDescribeUserGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDescribeUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeUsersResult(data.DescribeUsersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeUsersCommand = deserializeAws_queryDescribeUsersCommand;
const deserializeAws_queryDescribeUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryDisassociateGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisassociateGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDisassociateGlobalReplicationGroupResult(data.DisassociateGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisassociateGlobalReplicationGroupCommand = deserializeAws_queryDisassociateGlobalReplicationGroupCommand;
const deserializeAws_queryDisassociateGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryFailoverGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryFailoverGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryFailoverGlobalReplicationGroupResult(data.FailoverGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryFailoverGlobalReplicationGroupCommand = deserializeAws_queryFailoverGlobalReplicationGroupCommand;
const deserializeAws_queryFailoverGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult(data.IncreaseNodeGroupsInGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand = deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommand;
const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryIncreaseReplicaCountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryIncreaseReplicaCountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryIncreaseReplicaCountResult(data.IncreaseReplicaCountResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryIncreaseReplicaCountCommand = deserializeAws_queryIncreaseReplicaCountCommand;
const deserializeAws_queryIncreaseReplicaCountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#ClusterQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSKeyFault":
        case "com.amazonaws.elasticache#InvalidKMSKeyFault":
            response = {
                ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoOperationFault":
        case "com.amazonaws.elasticache#NoOperationFault":
            response = {
                ...(await deserializeAws_queryNoOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListAllowedNodeTypeModificationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListAllowedNodeTypeModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAllowedNodeTypeModificationsMessage(data.ListAllowedNodeTypeModificationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListAllowedNodeTypeModificationsCommand = deserializeAws_queryListAllowedNodeTypeModificationsCommand;
const deserializeAws_queryListAllowedNodeTypeModificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagListMessage(data.ListTagsForResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryListTagsForResourceCommand = deserializeAws_queryListTagsForResourceCommand;
const deserializeAws_queryListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.elasticache#InvalidARNFault":
            response = {
                ...(await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyCacheClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCacheClusterResult(data.ModifyCacheClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyCacheClusterCommand = deserializeAws_queryModifyCacheClusterCommand;
const deserializeAws_queryModifyCacheClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyCacheParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ModifyCacheParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyCacheParameterGroupCommand = deserializeAws_queryModifyCacheParameterGroupCommand;
const deserializeAws_queryModifyCacheParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyCacheSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyCacheSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCacheSubnetGroupResult(data.ModifyCacheSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyCacheSubnetGroupCommand = deserializeAws_queryModifyCacheSubnetGroupCommand;
const deserializeAws_queryModifyCacheSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetQuotaExceededFault":
        case "com.amazonaws.elasticache#CacheSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.elasticache#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetInUse":
        case "com.amazonaws.elasticache#SubnetInUse":
            response = {
                ...(await deserializeAws_querySubnetInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotAllowedFault":
        case "com.amazonaws.elasticache#SubnetNotAllowedFault":
            response = {
                ...(await deserializeAws_querySubnetNotAllowedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyGlobalReplicationGroupResult(data.ModifyGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyGlobalReplicationGroupCommand = deserializeAws_queryModifyGlobalReplicationGroupCommand;
const deserializeAws_queryModifyGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyReplicationGroupResult(data.ModifyReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyReplicationGroupCommand = deserializeAws_queryModifyReplicationGroupCommand;
const deserializeAws_queryModifyReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSKeyFault":
        case "com.amazonaws.elasticache#InvalidKMSKeyFault":
            response = {
                ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserGroupStateFault":
        case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForClusterExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForClusterExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForClusterExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyReplicationGroupShardConfigurationResult(data.ModifyReplicationGroupShardConfigurationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyReplicationGroupShardConfigurationCommand = deserializeAws_queryModifyReplicationGroupShardConfigurationCommand;
const deserializeAws_queryModifyReplicationGroupShardConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCacheClusterCapacityFault":
        case "com.amazonaws.elasticache#InsufficientCacheClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSKeyFault":
        case "com.amazonaws.elasticache#InvalidKMSKeyFault":
            response = {
                ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.elasticache#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeGroupsPerReplicationGroupQuotaExceededFault":
        case "com.amazonaws.elasticache#NodeGroupsPerReplicationGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeQuotaForCustomerExceededFault":
        case "com.amazonaws.elasticache#NodeQuotaForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUser(data.ModifyUserResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyUserCommand = deserializeAws_queryModifyUserCommand;
const deserializeAws_queryModifyUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserStateFault":
        case "com.amazonaws.elasticache#InvalidUserStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryModifyUserGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyUserGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUserGroup(data.ModifyUserGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyUserGroupCommand = deserializeAws_queryModifyUserGroupCommand;
const deserializeAws_queryModifyUserGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DefaultUserRequired":
        case "com.amazonaws.elasticache#DefaultUserRequired":
            response = {
                ...(await deserializeAws_queryDefaultUserRequiredResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateUserNameFault":
        case "com.amazonaws.elasticache#DuplicateUserNameFault":
            response = {
                ...(await deserializeAws_queryDuplicateUserNameFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUserGroupStateFault":
        case "com.amazonaws.elasticache#InvalidUserGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidUserGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedCacheNodesOfferingResult(data.PurchaseReservedCacheNodesOfferingResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand = deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand;
const deserializeAws_queryPurchaseReservedCacheNodesOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeAlreadyExistsFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeQuotaExceededFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodesOfferingNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodesOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagQuotaPerResourceExceeded":
        case "com.amazonaws.elasticache#TagQuotaPerResourceExceeded":
            response = {
                ...(await deserializeAws_queryTagQuotaPerResourceExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult(data.RebalanceSlotsInGlobalReplicationGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand = deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommand;
const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#GlobalReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRebootCacheClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRebootCacheClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootCacheClusterResult(data.RebootCacheClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRebootCacheClusterCommand = deserializeAws_queryRebootCacheClusterCommand;
const deserializeAws_queryRebootCacheClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRemoveTagsFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveTagsFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTagListMessage(data.RemoveTagsFromResourceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveTagsFromResourceCommand = deserializeAws_queryRemoveTagsFromResourceCommand;
const deserializeAws_queryRemoveTagsFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheClusterNotFoundFault":
        case "com.amazonaws.elasticache#CacheClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSubnetGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidARNFault":
        case "com.amazonaws.elasticache#InvalidARNFault":
            response = {
                ...(await deserializeAws_queryInvalidARNFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedCacheNodeNotFoundFault":
        case "com.amazonaws.elasticache#ReservedCacheNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedCacheNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotNotFoundFault":
        case "com.amazonaws.elasticache#SnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagNotFoundFault":
        case "com.amazonaws.elasticache#TagNotFoundFault":
            response = {
                ...(await deserializeAws_queryTagNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserGroupNotFoundFault":
        case "com.amazonaws.elasticache#UserGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UserNotFoundFault":
        case "com.amazonaws.elasticache#UserNotFoundFault":
            response = {
                ...(await deserializeAws_queryUserNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryResetCacheParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResetCacheParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCacheParameterGroupNameMessage(data.ResetCacheParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResetCacheParameterGroupCommand = deserializeAws_queryResetCacheParameterGroupCommand;
const deserializeAws_queryResetCacheParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CacheParameterGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheParameterGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidGlobalReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeCacheSecurityGroupIngressResult(data.RevokeCacheSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRevokeCacheSecurityGroupIngressCommand = deserializeAws_queryRevokeCacheSecurityGroupIngressCommand;
const deserializeAws_queryRevokeCacheSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.elasticache#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CacheSecurityGroupNotFoundFault":
        case "com.amazonaws.elasticache#CacheSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheSecurityGroupStateFault":
        case "com.amazonaws.elasticache#InvalidCacheSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryStartMigrationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartMigrationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartMigrationResponse(data.StartMigrationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartMigrationCommand = deserializeAws_queryStartMigrationCommand;
const deserializeAws_queryStartMigrationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupAlreadyUnderMigrationFault":
        case "com.amazonaws.elasticache#ReplicationGroupAlreadyUnderMigrationFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryTestFailoverCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryTestFailoverCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTestFailoverResult(data.TestFailoverResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryTestFailoverCommand = deserializeAws_queryTestFailoverCommand;
const deserializeAws_queryTestFailoverCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "APICallRateForCustomerExceededFault":
        case "com.amazonaws.elasticache#APICallRateForCustomerExceededFault":
            response = {
                ...(await deserializeAws_queryAPICallRateForCustomerExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCacheClusterStateFault":
        case "com.amazonaws.elasticache#InvalidCacheClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidCacheClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidKMSKeyFault":
        case "com.amazonaws.elasticache#InvalidKMSKeyFault":
            response = {
                ...(await deserializeAws_queryInvalidKMSKeyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.elasticache#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.elasticache#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReplicationGroupStateFault":
        case "com.amazonaws.elasticache#InvalidReplicationGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReplicationGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NodeGroupNotFoundFault":
        case "com.amazonaws.elasticache#NodeGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryNodeGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReplicationGroupNotFoundFault":
        case "com.amazonaws.elasticache#ReplicationGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryReplicationGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TestFailoverNotAvailableFault":
        case "com.amazonaws.elasticache#TestFailoverNotAvailableFault":
            response = {
                ...(await deserializeAws_queryTestFailoverNotAvailableFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
            response = {
                ...parsedBody.Error,
                name: `${errorCode}`,
                message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_queryAPICallRateForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAPICallRateForCustomerExceededFault(body.Error, context);
    const contents = {
        name: "APICallRateForCustomerExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryAuthorizationAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "AuthorizationAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryAuthorizationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationNotFoundFault(body.Error, context);
    const contents = {
        name: "AuthorizationNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheClusterAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "CacheClusterAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheClusterNotFoundFault(body.Error, context);
    const contents = {
        name: "CacheClusterNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "CacheParameterGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "CacheParameterGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheParameterGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "CacheParameterGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "CacheSecurityGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "CacheSecurityGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "CacheSecurityGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "CacheSubnetGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSubnetGroupInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupInUse(body.Error, context);
    const contents = {
        name: "CacheSubnetGroupInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "CacheSubnetGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "CacheSubnetGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCacheSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCacheSubnetQuotaExceededFault(body.Error, context);
    const contents = {
        name: "CacheSubnetQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterQuotaForCustomerExceededFault(body.Error, context);
    const contents = {
        name: "ClusterQuotaForCustomerExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDefaultUserAssociatedToUserGroupFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDefaultUserAssociatedToUserGroupFault(body.Error, context);
    const contents = {
        name: "DefaultUserAssociatedToUserGroupFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDefaultUserRequiredResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDefaultUserRequired(body.Error, context);
    const contents = {
        name: "DefaultUserRequired",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDuplicateUserNameFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDuplicateUserNameFault(body.Error, context);
    const contents = {
        name: "DuplicateUserNameFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryGlobalReplicationGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "GlobalReplicationGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryGlobalReplicationGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalReplicationGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "GlobalReplicationGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientCacheClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientCacheClusterCapacityFault(body.Error, context);
    const contents = {
        name: "InsufficientCacheClusterCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidARNFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidARNFault(body.Error, context);
    const contents = {
        name: "InvalidARNFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidCacheClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheClusterStateFault(body.Error, context);
    const contents = {
        name: "InvalidCacheClusterStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidCacheParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheParameterGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidCacheParameterGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidCacheSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidCacheSecurityGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidCacheSecurityGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidGlobalReplicationGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidGlobalReplicationGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidGlobalReplicationGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidKMSKeyFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidKMSKeyFault(body.Error, context);
    const contents = {
        name: "InvalidKMSKeyFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
    const contents = {
        name: "InvalidParameterCombinationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidParameterValueException(body.Error, context);
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidReplicationGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidReplicationGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidReplicationGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnapshotStateFault(body.Error, context);
    const contents = {
        name: "InvalidSnapshotStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSubnetResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubnet(body.Error, context);
    const contents = {
        name: "InvalidSubnet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidUserGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidUserGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidUserGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidUserStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidUserStateFault(body.Error, context);
    const contents = {
        name: "InvalidUserStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidVPCNetworkStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidVPCNetworkStateFault(body.Error, context);
    const contents = {
        name: "InvalidVPCNetworkStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNodeGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "NodeGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "NodeGroupsPerReplicationGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNodeQuotaForClusterExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeQuotaForClusterExceededFault(body.Error, context);
    const contents = {
        name: "NodeQuotaForClusterExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNodeQuotaForCustomerExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNodeQuotaForCustomerExceededFault(body.Error, context);
    const contents = {
        name: "NodeQuotaForCustomerExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNoOperationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNoOperationFault(body.Error, context);
    const contents = {
        name: "NoOperationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ReplicationGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault(body.Error, context);
    const contents = {
        name: "ReplicationGroupAlreadyUnderMigrationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReplicationGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "ReplicationGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReplicationGroupNotUnderMigrationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReplicationGroupNotUnderMigrationFault(body.Error, context);
    const contents = {
        name: "ReplicationGroupNotUnderMigrationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedCacheNodeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ReservedCacheNodeAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedCacheNodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedCacheNodeNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedCacheNodeQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodeQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ReservedCacheNodeQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedCacheNodesOfferingNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedCacheNodesOfferingNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryServiceLinkedRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceLinkedRoleNotFoundFault(body.Error, context);
    const contents = {
        name: "ServiceLinkedRoleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryServiceUpdateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryServiceUpdateNotFoundFault(body.Error, context);
    const contents = {
        name: "ServiceUpdateNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "SnapshotAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotFeatureNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotFeatureNotSupportedFault(body.Error, context);
    const contents = {
        name: "SnapshotFeatureNotSupportedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotNotFoundFault(body.Error, context);
    const contents = {
        name: "SnapshotNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotQuotaExceededFault(body.Error, context);
    const contents = {
        name: "SnapshotQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubnetInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetInUse(body.Error, context);
    const contents = {
        name: "SubnetInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubnetNotAllowedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetNotAllowedFault(body.Error, context);
    const contents = {
        name: "SubnetNotAllowedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTagNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagNotFoundFault(body.Error, context);
    const contents = {
        name: "TagNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTagQuotaPerResourceExceededResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagQuotaPerResourceExceeded(body.Error, context);
    const contents = {
        name: "TagQuotaPerResourceExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTestFailoverNotAvailableFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTestFailoverNotAvailableFault(body.Error, context);
    const contents = {
        name: "TestFailoverNotAvailableFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "UserAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "UserGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "UserGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "UserGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserNotFoundFault(body.Error, context);
    const contents = {
        name: "UserNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUserQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUserQuotaExceededFault(body.Error, context);
    const contents = {
        name: "UserQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAddTagsToResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAuthorizeCacheSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryAvailabilityZonesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`AvailabilityZone.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryBatchApplyUpdateActionMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
const serializeAws_queryBatchStopUpdateActionMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    return entries;
};
const serializeAws_queryCacheClusterIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCacheNodeIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`CacheNodeId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCacheSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`CacheSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCloudWatchLogsDestinationDetails = (input, context) => {
    const entries = {};
    if (input.LogGroup !== undefined && input.LogGroup !== null) {
        entries["LogGroup"] = input.LogGroup;
    }
    return entries;
};
const serializeAws_queryCompleteMigrationMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
const serializeAws_queryConfigureShard = (input, context) => {
    const entries = {};
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.PreferredAvailabilityZones !== undefined && input.PreferredAvailabilityZones !== null) {
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredAvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PreferredOutpostArns !== undefined && input.PreferredOutpostArns !== null) {
        const memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredOutpostArns.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCopySnapshotMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateCacheClusterMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredAvailabilityZones.${key}`;
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
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SnapshotArns !== undefined && input.SnapshotArns !== null) {
        const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SnapshotArns.${key}`;
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
        const memberEntries = serializeAws_queryPreferredOutpostArnList(input.PreferredOutpostArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredOutpostArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LogDeliveryConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateCacheParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateCacheSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSubnetGroupDescription !== undefined && input.CacheSubnetGroupDescription !== null) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
    }
    if (input.SubnetIds !== undefined && input.SubnetIds !== null) {
        const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SubnetIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateReplicationGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredCacheClusterAZs, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredCacheClusterAZs.${key}`;
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
        const memberEntries = serializeAws_queryNodeGroupConfigurationList(input.NodeGroupConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `NodeGroupConfiguration.${key}`;
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
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SnapshotArns !== undefined && input.SnapshotArns !== null) {
        const memberEntries = serializeAws_querySnapshotArnsList(input.SnapshotArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SnapshotArns.${key}`;
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
        const memberEntries = serializeAws_queryUserGroupIdListInput(input.UserGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LogDeliveryConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateSnapshotMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateUserGroupMessage = (input, context) => {
    const entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.UserIds !== undefined && input.UserIds !== null) {
        const memberEntries = serializeAws_queryUserIdListInput(input.UserIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateUserMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Passwords.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCustomerNodeEndpoint = (input, context) => {
    const entries = {};
    if (input.Address !== undefined && input.Address !== null) {
        entries["Address"] = input.Address;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    return entries;
};
const serializeAws_queryCustomerNodeEndpointList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryCustomerNodeEndpoint(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.NodeGroupCount !== undefined && input.NodeGroupCount !== null) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.GlobalNodeGroupsToRemove !== undefined && input.GlobalNodeGroupsToRemove !== null) {
        const memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `GlobalNodeGroupsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.GlobalNodeGroupsToRetain !== undefined && input.GlobalNodeGroupsToRetain !== null) {
        const memberEntries = serializeAws_queryGlobalNodeGroupIdList(input.GlobalNodeGroupsToRetain, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `GlobalNodeGroupsToRetain.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryDecreaseReplicaCountMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined && input.ReplicaConfiguration !== null) {
        const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicaConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ReplicasToRemove !== undefined && input.ReplicasToRemove !== null) {
        const memberEntries = serializeAws_queryRemoveReplicasList(input.ReplicasToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicasToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryDeleteCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.FinalSnapshotIdentifier !== undefined && input.FinalSnapshotIdentifier !== null) {
        entries["FinalSnapshotIdentifier"] = input.FinalSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteCacheSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSecurityGroupName !== undefined && input.CacheSecurityGroupName !== null) {
        entries["CacheSecurityGroupName"] = input.CacheSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.RetainPrimaryReplicationGroup !== undefined && input.RetainPrimaryReplicationGroup !== null) {
        entries["RetainPrimaryReplicationGroup"] = input.RetainPrimaryReplicationGroup;
    }
    return entries;
};
const serializeAws_queryDeleteReplicationGroupMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDeleteSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotName !== undefined && input.SnapshotName !== null) {
        entries["SnapshotName"] = input.SnapshotName;
    }
    return entries;
};
const serializeAws_queryDeleteUserGroupMessage = (input, context) => {
    const entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    return entries;
};
const serializeAws_queryDeleteUserMessage = (input, context) => {
    const entries = {};
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
    }
    return entries;
};
const serializeAws_queryDescribeCacheClustersMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCacheEngineVersionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCacheParameterGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCacheParametersMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCacheSecurityGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeCacheSubnetGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeEngineDefaultParametersMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeEventsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeGlobalReplicationGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeReplicationGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeReservedCacheNodesMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeReservedCacheNodesOfferingsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeServiceUpdatesMessage = (input, context) => {
    const entries = {};
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ServiceUpdateStatus !== undefined && input.ServiceUpdateStatus !== null) {
        const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ServiceUpdateStatus.${key}`;
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
const serializeAws_queryDescribeSnapshotsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeUpdateActionsMessage = (input, context) => {
    const entries = {};
    if (input.ServiceUpdateName !== undefined && input.ServiceUpdateName !== null) {
        entries["ServiceUpdateName"] = input.ServiceUpdateName;
    }
    if (input.ReplicationGroupIds !== undefined && input.ReplicationGroupIds !== null) {
        const memberEntries = serializeAws_queryReplicationGroupIdList(input.ReplicationGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicationGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CacheClusterIds !== undefined && input.CacheClusterIds !== null) {
        const memberEntries = serializeAws_queryCacheClusterIdList(input.CacheClusterIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheClusterIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.ServiceUpdateStatus !== undefined && input.ServiceUpdateStatus !== null) {
        const memberEntries = serializeAws_queryServiceUpdateStatusList(input.ServiceUpdateStatus, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ServiceUpdateStatus.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ServiceUpdateTimeRange !== undefined && input.ServiceUpdateTimeRange !== null) {
        const memberEntries = serializeAws_queryTimeRangeFilter(input.ServiceUpdateTimeRange, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ServiceUpdateTimeRange.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UpdateActionStatus !== undefined && input.UpdateActionStatus !== null) {
        const memberEntries = serializeAws_queryUpdateActionStatusList(input.UpdateActionStatus, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UpdateActionStatus.${key}`;
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
const serializeAws_queryDescribeUserGroupsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeUsersMessage = (input, context) => {
    const entries = {};
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.UserId !== undefined && input.UserId !== null) {
        entries["UserId"] = input.UserId;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
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
const serializeAws_queryDestinationDetails = (input, context) => {
    const entries = {};
    if (input.CloudWatchLogsDetails !== undefined && input.CloudWatchLogsDetails !== null) {
        const memberEntries = serializeAws_queryCloudWatchLogsDestinationDetails(input.CloudWatchLogsDetails, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudWatchLogsDetails.${key}`;
            entries[loc] = value;
        });
    }
    if (input.KinesisFirehoseDetails !== undefined && input.KinesisFirehoseDetails !== null) {
        const memberEntries = serializeAws_queryKinesisFirehoseDestinationDetails(input.KinesisFirehoseDetails, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `KinesisFirehoseDetails.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDisassociateGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryFailoverGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryFilterValueList(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryFilterValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryGlobalNodeGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`GlobalNodeGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.NodeGroupCount !== undefined && input.NodeGroupCount !== null) {
        entries["NodeGroupCount"] = input.NodeGroupCount;
    }
    if (input.RegionalConfigurations !== undefined && input.RegionalConfigurations !== null) {
        const memberEntries = serializeAws_queryRegionalConfigurationList(input.RegionalConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RegionalConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryIncreaseReplicaCountMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NewReplicaCount !== undefined && input.NewReplicaCount !== null) {
        entries["NewReplicaCount"] = input.NewReplicaCount;
    }
    if (input.ReplicaConfiguration !== undefined && input.ReplicaConfiguration !== null) {
        const memberEntries = serializeAws_queryReplicaConfigurationList(input.ReplicaConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicaConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryKinesisFirehoseDestinationDetails = (input, context) => {
    const entries = {};
    if (input.DeliveryStream !== undefined && input.DeliveryStream !== null) {
        entries["DeliveryStream"] = input.DeliveryStream;
    }
    return entries;
};
const serializeAws_queryListAllowedNodeTypeModificationsMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    return entries;
};
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    return entries;
};
const serializeAws_queryLogDeliveryConfigurationRequest = (input, context) => {
    const entries = {};
    if (input.LogType !== undefined && input.LogType !== null) {
        entries["LogType"] = input.LogType;
    }
    if (input.DestinationType !== undefined && input.DestinationType !== null) {
        entries["DestinationType"] = input.DestinationType;
    }
    if (input.DestinationDetails !== undefined && input.DestinationDetails !== null) {
        const memberEntries = serializeAws_queryDestinationDetails(input.DestinationDetails, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DestinationDetails.${key}`;
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
const serializeAws_queryLogDeliveryConfigurationRequestList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryLogDeliveryConfigurationRequest(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`LogDeliveryConfigurationRequest.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryModifyCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.NumCacheNodes !== undefined && input.NumCacheNodes !== null) {
        entries["NumCacheNodes"] = input.NumCacheNodes;
    }
    if (input.CacheNodeIdsToRemove !== undefined && input.CacheNodeIdsToRemove !== null) {
        const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheNodeIdsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.AZMode !== undefined && input.AZMode !== null) {
        entries["AZMode"] = input.AZMode;
    }
    if (input.NewAvailabilityZones !== undefined && input.NewAvailabilityZones !== null) {
        const memberEntries = serializeAws_queryPreferredAvailabilityZoneList(input.NewAvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `NewAvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    if (input.CacheSecurityGroupNames !== undefined && input.CacheSecurityGroupNames !== null) {
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LogDeliveryConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ParameterNameValues !== undefined && input.ParameterNameValues !== null) {
        const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ParameterNameValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyCacheSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheSubnetGroupName !== undefined && input.CacheSubnetGroupName !== null) {
        entries["CacheSubnetGroupName"] = input.CacheSubnetGroupName;
    }
    if (input.CacheSubnetGroupDescription !== undefined && input.CacheSubnetGroupDescription !== null) {
        entries["CacheSubnetGroupDescription"] = input.CacheSubnetGroupDescription;
    }
    if (input.SubnetIds !== undefined && input.SubnetIds !== null) {
        const memberEntries = serializeAws_querySubnetIdentifierList(input.SubnetIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SubnetIds.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryModifyReplicationGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryCacheSecurityGroupNameList(input.CacheSecurityGroupNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheSecurityGroupNames.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SecurityGroupIds !== undefined && input.SecurityGroupIds !== null) {
        const memberEntries = serializeAws_querySecurityGroupIdsList(input.SecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToAdd, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserGroupIdsToAdd.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UserGroupIdsToRemove !== undefined && input.UserGroupIdsToRemove !== null) {
        const memberEntries = serializeAws_queryUserGroupIdList(input.UserGroupIdsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserGroupIdsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RemoveUserGroups !== undefined && input.RemoveUserGroups !== null) {
        entries["RemoveUserGroups"] = input.RemoveUserGroups;
    }
    if (input.LogDeliveryConfigurations !== undefined && input.LogDeliveryConfigurations !== null) {
        const memberEntries = serializeAws_queryLogDeliveryConfigurationRequestList(input.LogDeliveryConfigurations, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `LogDeliveryConfigurations.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyReplicationGroupShardConfigurationMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReshardingConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NodeGroupsToRemove !== undefined && input.NodeGroupsToRemove !== null) {
        const memberEntries = serializeAws_queryNodeGroupsToRemoveList(input.NodeGroupsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `NodeGroupsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NodeGroupsToRetain !== undefined && input.NodeGroupsToRetain !== null) {
        const memberEntries = serializeAws_queryNodeGroupsToRetainList(input.NodeGroupsToRetain, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `NodeGroupsToRetain.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyUserGroupMessage = (input, context) => {
    const entries = {};
    if (input.UserGroupId !== undefined && input.UserGroupId !== null) {
        entries["UserGroupId"] = input.UserGroupId;
    }
    if (input.UserIdsToAdd !== undefined && input.UserIdsToAdd !== null) {
        const memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToAdd, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserIdsToAdd.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UserIdsToRemove !== undefined && input.UserIdsToRemove !== null) {
        const memberEntries = serializeAws_queryUserIdListInput(input.UserIdsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `UserIdsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyUserMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryPasswordListInput(input.Passwords, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Passwords.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NoPasswordRequired !== undefined && input.NoPasswordRequired !== null) {
        entries["NoPasswordRequired"] = input.NoPasswordRequired;
    }
    return entries;
};
const serializeAws_queryNodeGroupConfiguration = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.ReplicaAvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicaAvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PrimaryOutpostArn !== undefined && input.PrimaryOutpostArn !== null) {
        entries["PrimaryOutpostArn"] = input.PrimaryOutpostArn;
    }
    if (input.ReplicaOutpostArns !== undefined && input.ReplicaOutpostArns !== null) {
        const memberEntries = serializeAws_queryOutpostArnsList(input.ReplicaOutpostArns, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReplicaOutpostArns.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryNodeGroupConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryNodeGroupConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`NodeGroupConfiguration.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryNodeGroupsToRemoveList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`NodeGroupToRemove.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryNodeGroupsToRetainList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`NodeGroupToRetain.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryOutpostArnsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`OutpostArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryParameterNameValue = (input, context) => {
    const entries = {};
    if (input.ParameterName !== undefined && input.ParameterName !== null) {
        entries["ParameterName"] = input.ParameterName;
    }
    if (input.ParameterValue !== undefined && input.ParameterValue !== null) {
        entries["ParameterValue"] = input.ParameterValue;
    }
    return entries;
};
const serializeAws_queryParameterNameValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryParameterNameValue(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`ParameterNameValue.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPasswordListInput = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPreferredAvailabilityZoneList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`PreferredAvailabilityZone.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPreferredOutpostArnList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`PreferredOutpostArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedCacheNodesOfferingMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRebalanceSlotsInGlobalReplicationGroupMessage = (input, context) => {
    const entries = {};
    if (input.GlobalReplicationGroupId !== undefined && input.GlobalReplicationGroupId !== null) {
        entries["GlobalReplicationGroupId"] = input.GlobalReplicationGroupId;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryRebootCacheClusterMessage = (input, context) => {
    const entries = {};
    if (input.CacheClusterId !== undefined && input.CacheClusterId !== null) {
        entries["CacheClusterId"] = input.CacheClusterId;
    }
    if (input.CacheNodeIdsToReboot !== undefined && input.CacheNodeIdsToReboot !== null) {
        const memberEntries = serializeAws_queryCacheNodeIdsList(input.CacheNodeIdsToReboot, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CacheNodeIdsToReboot.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRegionalConfiguration = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.ReplicationGroupRegion !== undefined && input.ReplicationGroupRegion !== null) {
        entries["ReplicationGroupRegion"] = input.ReplicationGroupRegion;
    }
    if (input.ReshardingConfiguration !== undefined && input.ReshardingConfiguration !== null) {
        const memberEntries = serializeAws_queryReshardingConfigurationList(input.ReshardingConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ReshardingConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRegionalConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryRegionalConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`RegionalConfiguration.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRemoveReplicasList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryRemoveTagsFromResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryReplicaConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryConfigureShard(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`ConfigureShard.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryReplicationGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryResetCacheParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.CacheParameterGroupName !== undefined && input.CacheParameterGroupName !== null) {
        entries["CacheParameterGroupName"] = input.CacheParameterGroupName;
    }
    if (input.ResetAllParameters !== undefined && input.ResetAllParameters !== null) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    if (input.ParameterNameValues !== undefined && input.ParameterNameValues !== null) {
        const memberEntries = serializeAws_queryParameterNameValueList(input.ParameterNameValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ParameterNameValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryReshardingConfiguration = (input, context) => {
    const entries = {};
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    if (input.PreferredAvailabilityZones !== undefined && input.PreferredAvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZonesList(input.PreferredAvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PreferredAvailabilityZones.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryReshardingConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryReshardingConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`ReshardingConfiguration.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryRevokeCacheSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
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
const serializeAws_querySecurityGroupIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`SecurityGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryServiceUpdateStatusList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySnapshotArnsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`SnapshotArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStartMigrationMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.CustomerNodeEndpointList !== undefined && input.CustomerNodeEndpointList !== null) {
        const memberEntries = serializeAws_queryCustomerNodeEndpointList(input.CustomerNodeEndpointList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CustomerNodeEndpointList.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_querySubnetIdentifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`SubnetIdentifier.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryTag = (input, context) => {
    const entries = {};
    if (input.Key !== undefined && input.Key !== null) {
        entries["Key"] = input.Key;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryTagList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryTag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`Tag.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryTestFailoverMessage = (input, context) => {
    const entries = {};
    if (input.ReplicationGroupId !== undefined && input.ReplicationGroupId !== null) {
        entries["ReplicationGroupId"] = input.ReplicationGroupId;
    }
    if (input.NodeGroupId !== undefined && input.NodeGroupId !== null) {
        entries["NodeGroupId"] = input.NodeGroupId;
    }
    return entries;
};
const serializeAws_queryTimeRangeFilter = (input, context) => {
    const entries = {};
    if (input.StartTime !== undefined && input.StartTime !== null) {
        entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
    }
    if (input.EndTime !== undefined && input.EndTime !== null) {
        entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
    }
    return entries;
};
const serializeAws_queryUpdateActionStatusList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUserGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUserGroupIdListInput = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUserIdListInput = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryAllowedNodeTypeModificationsMessage = (output, context) => {
    let contents = {
        ScaleUpModifications: undefined,
        ScaleDownModifications: undefined,
    };
    if (output.ScaleUpModifications === "") {
        contents.ScaleUpModifications = [];
    }
    if (output["ScaleUpModifications"] !== undefined && output["ScaleUpModifications"]["member"] !== undefined) {
        contents.ScaleUpModifications = deserializeAws_queryNodeTypeList(smithy_client_1.getArrayIfSingleItem(output["ScaleUpModifications"]["member"]), context);
    }
    if (output.ScaleDownModifications === "") {
        contents.ScaleDownModifications = [];
    }
    if (output["ScaleDownModifications"] !== undefined && output["ScaleDownModifications"]["member"] !== undefined) {
        contents.ScaleDownModifications = deserializeAws_queryNodeTypeList(smithy_client_1.getArrayIfSingleItem(output["ScaleDownModifications"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryAPICallRateForCustomerExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthentication = (output, context) => {
    let contents = {
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
const deserializeAws_queryAuthorizationAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizationNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizeCacheSecurityGroupIngressResult = (output, context) => {
    let contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZonesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCacheCluster = (output, context) => {
    let contents = {
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
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]), context);
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
        contents.CacheNodes = deserializeAws_queryCacheNodeList(smithy_client_1.getArrayIfSingleItem(output["CacheNodes"]["CacheNode"]), context);
    }
    if (output["AutoMinorVersionUpgrade"] !== undefined) {
        contents.AutoMinorVersionUpgrade = output["AutoMinorVersionUpgrade"] == "true";
    }
    if (output.SecurityGroups === "") {
        contents.SecurityGroups = [];
    }
    if (output["SecurityGroups"] !== undefined && output["SecurityGroups"]["member"] !== undefined) {
        contents.SecurityGroups = deserializeAws_querySecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["SecurityGroups"]["member"]), context);
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
        contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(smithy_client_1.getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheCluster(entry, context);
    });
};
const deserializeAws_queryCacheClusterMessage = (output, context) => {
    let contents = {
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
        contents.CacheClusters = deserializeAws_queryCacheClusterList(smithy_client_1.getArrayIfSingleItem(output["CacheClusters"]["CacheCluster"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheClusterNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheEngineVersion = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheEngineVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheEngineVersion(entry, context);
    });
};
const deserializeAws_queryCacheEngineVersionMessage = (output, context) => {
    let contents = {
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
        contents.CacheEngineVersions = deserializeAws_queryCacheEngineVersionList(smithy_client_1.getArrayIfSingleItem(output["CacheEngineVersions"]["CacheEngineVersion"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheNode = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheNodeIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCacheNodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNode(entry, context);
    });
};
const deserializeAws_queryCacheNodeTypeSpecificParameter = (output, context) => {
    let contents = {
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
        contents.CacheNodeTypeSpecificValues = deserializeAws_queryCacheNodeTypeSpecificValueList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeTypeSpecificValues"]["CacheNodeTypeSpecificValue"]), context);
    }
    if (output["ChangeType"] !== undefined) {
        contents.ChangeType = output["ChangeType"];
    }
    return contents;
};
const deserializeAws_queryCacheNodeTypeSpecificParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeTypeSpecificParameter(entry, context);
    });
};
const deserializeAws_queryCacheNodeTypeSpecificValue = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheNodeTypeSpecificValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeTypeSpecificValue(entry, context);
    });
};
const deserializeAws_queryCacheNodeUpdateStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheNodeUpdateStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheNodeUpdateStatus(entry, context);
    });
};
const deserializeAws_queryCacheParameterGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupDetails = (output, context) => {
    let contents = {
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
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheParameterGroup(entry, context);
    });
};
const deserializeAws_queryCacheParameterGroupNameMessage = (output, context) => {
    let contents = {
        CacheParameterGroupName: undefined,
    };
    if (output["CacheParameterGroupName"] !== undefined) {
        contents.CacheParameterGroupName = output["CacheParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupsMessage = (output, context) => {
    let contents = {
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
        contents.CacheParameterGroups = deserializeAws_queryCacheParameterGroupList(smithy_client_1.getArrayIfSingleItem(output["CacheParameterGroups"]["CacheParameterGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheParameterGroupStatus = (output, context) => {
    let contents = {
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
        contents.CacheNodeIdsToReboot = deserializeAws_queryCacheNodeIdsList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeIdsToReboot"]["CacheNodeId"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroup = (output, context) => {
    let contents = {
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
        contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(smithy_client_1.getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]), context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryCacheSecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSecurityGroupMembership(entry, context);
    });
};
const deserializeAws_queryCacheSecurityGroupMessage = (output, context) => {
    let contents = {
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
        contents.CacheSecurityGroups = deserializeAws_queryCacheSecurityGroups(smithy_client_1.getArrayIfSingleItem(output["CacheSecurityGroups"]["CacheSecurityGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSecurityGroup(entry, context);
    });
};
const deserializeAws_queryCacheSubnetGroup = (output, context) => {
    let contents = {
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
        contents.Subnets = deserializeAws_querySubnetList(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupInUse = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupMessage = (output, context) => {
    let contents = {
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
        contents.CacheSubnetGroups = deserializeAws_queryCacheSubnetGroups(smithy_client_1.getArrayIfSingleItem(output["CacheSubnetGroups"]["CacheSubnetGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCacheSubnetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCacheSubnetGroup(entry, context);
    });
};
const deserializeAws_queryCacheSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCloudWatchLogsDestinationDetails = (output, context) => {
    let contents = {
        LogGroup: undefined,
    };
    if (output["LogGroup"] !== undefined) {
        contents.LogGroup = output["LogGroup"];
    }
    return contents;
};
const deserializeAws_queryClusterIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryClusterQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCompleteMigrationResponse = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCopySnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheClusterResult = (output, context) => {
    let contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheParameterGroupResult = (output, context) => {
    let contents = {
        CacheParameterGroup: undefined,
    };
    if (output["CacheParameterGroup"] !== undefined) {
        contents.CacheParameterGroup = deserializeAws_queryCacheParameterGroup(output["CacheParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheSecurityGroupResult = (output, context) => {
    let contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCacheSubnetGroupResult = (output, context) => {
    let contents = {
        CacheSubnetGroup: undefined,
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateReplicationGroupResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDecreaseNodeGroupsInGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDecreaseReplicaCountResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDefaultUserAssociatedToUserGroupFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDefaultUserRequired = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteCacheClusterResult = (output, context) => {
    let contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteReplicationGroupResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEngineDefaultParametersResult = (output, context) => {
    let contents = {
        EngineDefaults: undefined,
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeGlobalReplicationGroupsResult = (output, context) => {
    let contents = {
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
        contents.GlobalReplicationGroups = deserializeAws_queryGlobalReplicationGroupList(smithy_client_1.getArrayIfSingleItem(output["GlobalReplicationGroups"]["GlobalReplicationGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeSnapshotsListMessage = (output, context) => {
    let contents = {
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
        contents.Snapshots = deserializeAws_querySnapshotList(smithy_client_1.getArrayIfSingleItem(output["Snapshots"]["Snapshot"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeUserGroupsResult = (output, context) => {
    let contents = {
        UserGroups: undefined,
        Marker: undefined,
    };
    if (output.UserGroups === "") {
        contents.UserGroups = [];
    }
    if (output["UserGroups"] !== undefined && output["UserGroups"]["member"] !== undefined) {
        contents.UserGroups = deserializeAws_queryUserGroupList(smithy_client_1.getArrayIfSingleItem(output["UserGroups"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeUsersResult = (output, context) => {
    let contents = {
        Users: undefined,
        Marker: undefined,
    };
    if (output.Users === "") {
        contents.Users = [];
    }
    if (output["Users"] !== undefined && output["Users"]["member"] !== undefined) {
        contents.Users = deserializeAws_queryUserList(smithy_client_1.getArrayIfSingleItem(output["Users"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDestinationDetails = (output, context) => {
    let contents = {
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
const deserializeAws_queryDisassociateGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryDuplicateUserNameFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryEC2SecurityGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEC2SecurityGroup(entry, context);
    });
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
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
const deserializeAws_queryEngineDefaults = (output, context) => {
    let contents = {
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
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output.CacheNodeTypeSpecificParameters === "") {
        contents.CacheNodeTypeSpecificParameters = [];
    }
    if (output["CacheNodeTypeSpecificParameters"] !== undefined &&
        output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"] !== undefined) {
        contents.CacheNodeTypeSpecificParameters = deserializeAws_queryCacheNodeTypeSpecificParametersList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeTypeSpecificParameters"]["CacheNodeTypeSpecificParameter"]), context);
    }
    return contents;
};
const deserializeAws_queryEvent = (output, context) => {
    let contents = {
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
const deserializeAws_queryEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEvent(entry, context);
    });
};
const deserializeAws_queryEventsMessage = (output, context) => {
    let contents = {
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
        contents.Events = deserializeAws_queryEventList(smithy_client_1.getArrayIfSingleItem(output["Events"]["Event"]), context);
    }
    return contents;
};
const deserializeAws_queryFailoverGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryGlobalNodeGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryGlobalNodeGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalNodeGroup(entry, context);
    });
};
const deserializeAws_queryGlobalReplicationGroup = (output, context) => {
    let contents = {
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
        contents.Members = deserializeAws_queryGlobalReplicationGroupMemberList(smithy_client_1.getArrayIfSingleItem(output["Members"]["GlobalReplicationGroupMember"]), context);
    }
    if (output["ClusterEnabled"] !== undefined) {
        contents.ClusterEnabled = output["ClusterEnabled"] == "true";
    }
    if (output.GlobalNodeGroups === "") {
        contents.GlobalNodeGroups = [];
    }
    if (output["GlobalNodeGroups"] !== undefined && output["GlobalNodeGroups"]["GlobalNodeGroup"] !== undefined) {
        contents.GlobalNodeGroups = deserializeAws_queryGlobalNodeGroupList(smithy_client_1.getArrayIfSingleItem(output["GlobalNodeGroups"]["GlobalNodeGroup"]), context);
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
const deserializeAws_queryGlobalReplicationGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalReplicationGroupInfo = (output, context) => {
    let contents = {
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
const deserializeAws_queryGlobalReplicationGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalReplicationGroup(entry, context);
    });
};
const deserializeAws_queryGlobalReplicationGroupMember = (output, context) => {
    let contents = {
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
const deserializeAws_queryGlobalReplicationGroupMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalReplicationGroupMember(entry, context);
    });
};
const deserializeAws_queryGlobalReplicationGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryIncreaseNodeGroupsInGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryIncreaseReplicaCountResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryInsufficientCacheClusterCapacityFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidARNFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheClusterStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheParameterGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidCacheSecurityGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidGlobalReplicationGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidKMSKeyFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterCombinationException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidParameterValueException = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidReplicationGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnapshotStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSubnet = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidUserGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidUserStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidVPCNetworkStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKinesisFirehoseDestinationDetails = (output, context) => {
    let contents = {
        DeliveryStream: undefined,
    };
    if (output["DeliveryStream"] !== undefined) {
        contents.DeliveryStream = output["DeliveryStream"];
    }
    return contents;
};
const deserializeAws_queryLogDeliveryConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_queryLogDeliveryConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryLogDeliveryConfiguration(entry, context);
    });
};
const deserializeAws_queryModifyCacheClusterResult = (output, context) => {
    let contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyCacheSubnetGroupResult = (output, context) => {
    let contents = {
        CacheSubnetGroup: undefined,
    };
    if (output["CacheSubnetGroup"] !== undefined) {
        contents.CacheSubnetGroup = deserializeAws_queryCacheSubnetGroup(output["CacheSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyReplicationGroupResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyReplicationGroupShardConfigurationResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryNodeGroup = (output, context) => {
    let contents = {
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
        contents.NodeGroupMembers = deserializeAws_queryNodeGroupMemberList(smithy_client_1.getArrayIfSingleItem(output["NodeGroupMembers"]["NodeGroupMember"]), context);
    }
    return contents;
};
const deserializeAws_queryNodeGroupConfiguration = (output, context) => {
    let contents = {
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
        contents.ReplicaAvailabilityZones = deserializeAws_queryAvailabilityZonesList(smithy_client_1.getArrayIfSingleItem(output["ReplicaAvailabilityZones"]["AvailabilityZone"]), context);
    }
    if (output["PrimaryOutpostArn"] !== undefined) {
        contents.PrimaryOutpostArn = output["PrimaryOutpostArn"];
    }
    if (output.ReplicaOutpostArns === "") {
        contents.ReplicaOutpostArns = [];
    }
    if (output["ReplicaOutpostArns"] !== undefined && output["ReplicaOutpostArns"]["OutpostArn"] !== undefined) {
        contents.ReplicaOutpostArns = deserializeAws_queryOutpostArnsList(smithy_client_1.getArrayIfSingleItem(output["ReplicaOutpostArns"]["OutpostArn"]), context);
    }
    return contents;
};
const deserializeAws_queryNodeGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroup(entry, context);
    });
};
const deserializeAws_queryNodeGroupMember = (output, context) => {
    let contents = {
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
const deserializeAws_queryNodeGroupMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupMember(entry, context);
    });
};
const deserializeAws_queryNodeGroupMemberUpdateStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryNodeGroupMemberUpdateStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupMemberUpdateStatus(entry, context);
    });
};
const deserializeAws_queryNodeGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupsPerReplicationGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeGroupUpdateStatus = (output, context) => {
    let contents = {
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
        contents.NodeGroupMemberUpdateStatus = deserializeAws_queryNodeGroupMemberUpdateStatusList(smithy_client_1.getArrayIfSingleItem(output["NodeGroupMemberUpdateStatus"]["NodeGroupMemberUpdateStatus"]), context);
    }
    return contents;
};
const deserializeAws_queryNodeGroupUpdateStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeGroupUpdateStatus(entry, context);
    });
};
const deserializeAws_queryNodeQuotaForClusterExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeQuotaForCustomerExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNodeSnapshot = (output, context) => {
    let contents = {
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
const deserializeAws_queryNodeSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeSnapshot(entry, context);
    });
};
const deserializeAws_queryNodeTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryNoOperationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNotificationConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_queryOutpostArnsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
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
const deserializeAws_queryParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryParameter(entry, context);
    });
};
const deserializeAws_queryPendingLogDeliveryConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_queryPendingLogDeliveryConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPendingLogDeliveryConfiguration(entry, context);
    });
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
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
        contents.CacheNodeIdsToRemove = deserializeAws_queryCacheNodeIdsList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeIdsToRemove"]["CacheNodeId"]), context);
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
        contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(smithy_client_1.getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryProcessedUpdateAction = (output, context) => {
    let contents = {
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
const deserializeAws_queryProcessedUpdateActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryProcessedUpdateAction(entry, context);
    });
};
const deserializeAws_queryPurchaseReservedCacheNodesOfferingResult = (output, context) => {
    let contents = {
        ReservedCacheNode: undefined,
    };
    if (output["ReservedCacheNode"] !== undefined) {
        contents.ReservedCacheNode = deserializeAws_queryReservedCacheNode(output["ReservedCacheNode"], context);
    }
    return contents;
};
const deserializeAws_queryRebalanceSlotsInGlobalReplicationGroupResult = (output, context) => {
    let contents = {
        GlobalReplicationGroup: undefined,
    };
    if (output["GlobalReplicationGroup"] !== undefined) {
        contents.GlobalReplicationGroup = deserializeAws_queryGlobalReplicationGroup(output["GlobalReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryRebootCacheClusterResult = (output, context) => {
    let contents = {
        CacheCluster: undefined,
    };
    if (output["CacheCluster"] !== undefined) {
        contents.CacheCluster = deserializeAws_queryCacheCluster(output["CacheCluster"], context);
    }
    return contents;
};
const deserializeAws_queryRecurringCharge = (output, context) => {
    let contents = {
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
const deserializeAws_queryRecurringChargeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRecurringCharge(entry, context);
    });
};
const deserializeAws_queryReplicationGroup = (output, context) => {
    let contents = {
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
        contents.MemberClusters = deserializeAws_queryClusterIdList(smithy_client_1.getArrayIfSingleItem(output["MemberClusters"]["ClusterId"]), context);
    }
    if (output.NodeGroups === "") {
        contents.NodeGroups = [];
    }
    if (output["NodeGroups"] !== undefined && output["NodeGroups"]["NodeGroup"] !== undefined) {
        contents.NodeGroups = deserializeAws_queryNodeGroupList(smithy_client_1.getArrayIfSingleItem(output["NodeGroups"]["NodeGroup"]), context);
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
        contents.MemberClustersOutpostArns = deserializeAws_queryReplicationGroupOutpostArnList(smithy_client_1.getArrayIfSingleItem(output["MemberClustersOutpostArns"]["ReplicationGroupOutpostArn"]), context);
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
        contents.UserGroupIds = deserializeAws_queryUserGroupIdList(smithy_client_1.getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
    }
    if (output.LogDeliveryConfigurations === "") {
        contents.LogDeliveryConfigurations = [];
    }
    if (output["LogDeliveryConfigurations"] !== undefined &&
        output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"] !== undefined) {
        contents.LogDeliveryConfigurations = deserializeAws_queryLogDeliveryConfigurationList(smithy_client_1.getArrayIfSingleItem(output["LogDeliveryConfigurations"]["LogDeliveryConfiguration"]), context);
    }
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupAlreadyUnderMigrationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReplicationGroup(entry, context);
    });
};
const deserializeAws_queryReplicationGroupMessage = (output, context) => {
    let contents = {
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
        contents.ReplicationGroups = deserializeAws_queryReplicationGroupList(smithy_client_1.getArrayIfSingleItem(output["ReplicationGroups"]["ReplicationGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryReplicationGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupNotUnderMigrationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReplicationGroupOutpostArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryReplicationGroupPendingModifiedValues = (output, context) => {
    let contents = {
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
        contents.LogDeliveryConfigurations = deserializeAws_queryPendingLogDeliveryConfigurationList(smithy_client_1.getArrayIfSingleItem(output["LogDeliveryConfigurations"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNode = (output, context) => {
    let contents = {
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
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(smithy_client_1.getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservationARN"] !== undefined) {
        contents.ReservationARN = output["ReservationARN"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedCacheNode(entry, context);
    });
};
const deserializeAws_queryReservedCacheNodeMessage = (output, context) => {
    let contents = {
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
        contents.ReservedCacheNodes = deserializeAws_queryReservedCacheNodeList(smithy_client_1.getArrayIfSingleItem(output["ReservedCacheNodes"]["ReservedCacheNode"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodeQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOffering = (output, context) => {
    let contents = {
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
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(smithy_client_1.getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedCacheNodesOffering(entry, context);
    });
};
const deserializeAws_queryReservedCacheNodesOfferingMessage = (output, context) => {
    let contents = {
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
        contents.ReservedCacheNodesOfferings = deserializeAws_queryReservedCacheNodesOfferingList(smithy_client_1.getArrayIfSingleItem(output["ReservedCacheNodesOfferings"]["ReservedCacheNodesOffering"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedCacheNodesOfferingNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReshardingStatus = (output, context) => {
    let contents = {
        SlotMigration: undefined,
    };
    if (output["SlotMigration"] !== undefined) {
        contents.SlotMigration = deserializeAws_querySlotMigration(output["SlotMigration"], context);
    }
    return contents;
};
const deserializeAws_queryRevokeCacheSecurityGroupIngressResult = (output, context) => {
    let contents = {
        CacheSecurityGroup: undefined,
    };
    if (output["CacheSecurityGroup"] !== undefined) {
        contents.CacheSecurityGroup = deserializeAws_queryCacheSecurityGroup(output["CacheSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_querySecurityGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_querySecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySecurityGroupMembership(entry, context);
    });
};
const deserializeAws_queryServiceLinkedRoleNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceUpdate = (output, context) => {
    let contents = {
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
const deserializeAws_queryServiceUpdateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryServiceUpdate(entry, context);
    });
};
const deserializeAws_queryServiceUpdateNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryServiceUpdatesMessage = (output, context) => {
    let contents = {
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
        contents.ServiceUpdates = deserializeAws_queryServiceUpdateList(smithy_client_1.getArrayIfSingleItem(output["ServiceUpdates"]["ServiceUpdate"]), context);
    }
    return contents;
};
const deserializeAws_querySlotMigration = (output, context) => {
    let contents = {
        ProgressPercentage: undefined,
    };
    if (output["ProgressPercentage"] !== undefined) {
        contents.ProgressPercentage = parseFloat(output["ProgressPercentage"]);
    }
    return contents;
};
const deserializeAws_querySnapshot = (output, context) => {
    let contents = {
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
        contents.NodeSnapshots = deserializeAws_queryNodeSnapshotList(smithy_client_1.getArrayIfSingleItem(output["NodeSnapshots"]["NodeSnapshot"]), context);
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_querySnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotFeatureNotSupportedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshot(entry, context);
    });
};
const deserializeAws_querySnapshotNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStartMigrationResponse = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_querySubnet = (output, context) => {
    let contents = {
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
const deserializeAws_querySubnetInUse = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubnetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySubnet(entry, context);
    });
};
const deserializeAws_querySubnetNotAllowedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubnetOutpost = (output, context) => {
    let contents = {
        SubnetOutpostArn: undefined,
    };
    if (output["SubnetOutpostArn"] !== undefined) {
        contents.SubnetOutpostArn = output["SubnetOutpostArn"];
    }
    return contents;
};
const deserializeAws_queryTag = (output, context) => {
    let contents = {
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
const deserializeAws_queryTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTag(entry, context);
    });
};
const deserializeAws_queryTagListMessage = (output, context) => {
    let contents = {
        TagList: undefined,
    };
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["TagList"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryTagNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTagQuotaPerResourceExceeded = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTestFailoverNotAvailableFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTestFailoverResult = (output, context) => {
    let contents = {
        ReplicationGroup: undefined,
    };
    if (output["ReplicationGroup"] !== undefined) {
        contents.ReplicationGroup = deserializeAws_queryReplicationGroup(output["ReplicationGroup"], context);
    }
    return contents;
};
const deserializeAws_queryUGReplicationGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryUnprocessedUpdateAction = (output, context) => {
    let contents = {
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
const deserializeAws_queryUnprocessedUpdateActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUnprocessedUpdateAction(entry, context);
    });
};
const deserializeAws_queryUpdateAction = (output, context) => {
    let contents = {
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
        contents.NodeGroupUpdateStatus = deserializeAws_queryNodeGroupUpdateStatusList(smithy_client_1.getArrayIfSingleItem(output["NodeGroupUpdateStatus"]["NodeGroupUpdateStatus"]), context);
    }
    if (output.CacheNodeUpdateStatus === "") {
        contents.CacheNodeUpdateStatus = [];
    }
    if (output["CacheNodeUpdateStatus"] !== undefined &&
        output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"] !== undefined) {
        contents.CacheNodeUpdateStatus = deserializeAws_queryCacheNodeUpdateStatusList(smithy_client_1.getArrayIfSingleItem(output["CacheNodeUpdateStatus"]["CacheNodeUpdateStatus"]), context);
    }
    if (output["EstimatedUpdateTime"] !== undefined) {
        contents.EstimatedUpdateTime = output["EstimatedUpdateTime"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    return contents;
};
const deserializeAws_queryUpdateActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpdateAction(entry, context);
    });
};
const deserializeAws_queryUpdateActionResultsMessage = (output, context) => {
    let contents = {
        ProcessedUpdateActions: undefined,
        UnprocessedUpdateActions: undefined,
    };
    if (output.ProcessedUpdateActions === "") {
        contents.ProcessedUpdateActions = [];
    }
    if (output["ProcessedUpdateActions"] !== undefined &&
        output["ProcessedUpdateActions"]["ProcessedUpdateAction"] !== undefined) {
        contents.ProcessedUpdateActions = deserializeAws_queryProcessedUpdateActionList(smithy_client_1.getArrayIfSingleItem(output["ProcessedUpdateActions"]["ProcessedUpdateAction"]), context);
    }
    if (output.UnprocessedUpdateActions === "") {
        contents.UnprocessedUpdateActions = [];
    }
    if (output["UnprocessedUpdateActions"] !== undefined &&
        output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"] !== undefined) {
        contents.UnprocessedUpdateActions = deserializeAws_queryUnprocessedUpdateActionList(smithy_client_1.getArrayIfSingleItem(output["UnprocessedUpdateActions"]["UnprocessedUpdateAction"]), context);
    }
    return contents;
};
const deserializeAws_queryUpdateActionsMessage = (output, context) => {
    let contents = {
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
        contents.UpdateActions = deserializeAws_queryUpdateActionList(smithy_client_1.getArrayIfSingleItem(output["UpdateActions"]["UpdateAction"]), context);
    }
    return contents;
};
const deserializeAws_queryUser = (output, context) => {
    let contents = {
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
        contents.UserGroupIds = deserializeAws_queryUserGroupIdList(smithy_client_1.getArrayIfSingleItem(output["UserGroupIds"]["member"]), context);
    }
    if (output["Authentication"] !== undefined) {
        contents.Authentication = deserializeAws_queryAuthentication(output["Authentication"], context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryUserAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUserGroup = (output, context) => {
    let contents = {
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
        contents.UserIds = deserializeAws_queryUserIdList(smithy_client_1.getArrayIfSingleItem(output["UserIds"]["member"]), context);
    }
    if (output["PendingChanges"] !== undefined) {
        contents.PendingChanges = deserializeAws_queryUserGroupPendingChanges(output["PendingChanges"], context);
    }
    if (output.ReplicationGroups === "") {
        contents.ReplicationGroups = [];
    }
    if (output["ReplicationGroups"] !== undefined && output["ReplicationGroups"]["member"] !== undefined) {
        contents.ReplicationGroups = deserializeAws_queryUGReplicationGroupIdList(smithy_client_1.getArrayIfSingleItem(output["ReplicationGroups"]["member"]), context);
    }
    if (output["ARN"] !== undefined) {
        contents.ARN = output["ARN"];
    }
    return contents;
};
const deserializeAws_queryUserGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUserGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryUserGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUserGroup(entry, context);
    });
};
const deserializeAws_queryUserGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUserGroupPendingChanges = (output, context) => {
    let contents = {
        UserIdsToRemove: undefined,
        UserIdsToAdd: undefined,
    };
    if (output.UserIdsToRemove === "") {
        contents.UserIdsToRemove = [];
    }
    if (output["UserIdsToRemove"] !== undefined && output["UserIdsToRemove"]["member"] !== undefined) {
        contents.UserIdsToRemove = deserializeAws_queryUserIdList(smithy_client_1.getArrayIfSingleItem(output["UserIdsToRemove"]["member"]), context);
    }
    if (output.UserIdsToAdd === "") {
        contents.UserIdsToAdd = [];
    }
    if (output["UserIdsToAdd"] !== undefined && output["UserIdsToAdd"]["member"] !== undefined) {
        contents.UserIdsToAdd = deserializeAws_queryUserIdList(smithy_client_1.getArrayIfSingleItem(output["UserIdsToAdd"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryUserGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUserGroupsUpdateStatus = (output, context) => {
    let contents = {
        UserGroupIdsToAdd: undefined,
        UserGroupIdsToRemove: undefined,
    };
    if (output.UserGroupIdsToAdd === "") {
        contents.UserGroupIdsToAdd = [];
    }
    if (output["UserGroupIdsToAdd"] !== undefined && output["UserGroupIdsToAdd"]["member"] !== undefined) {
        contents.UserGroupIdsToAdd = deserializeAws_queryUserGroupIdList(smithy_client_1.getArrayIfSingleItem(output["UserGroupIdsToAdd"]["member"]), context);
    }
    if (output.UserGroupIdsToRemove === "") {
        contents.UserGroupIdsToRemove = [];
    }
    if (output["UserGroupIdsToRemove"] !== undefined && output["UserGroupIdsToRemove"]["member"] !== undefined) {
        contents.UserGroupIdsToRemove = deserializeAws_queryUserGroupIdList(smithy_client_1.getArrayIfSingleItem(output["UserGroupIdsToRemove"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryUserIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryUserList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUser(entry, context);
    });
};
const deserializeAws_queryUserNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUserQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
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
        const parsedObj = fast_xml_parser_1.parse(encoded, {
            attributeNamePrefix: "",
            ignoreAttributes: false,
            parseNodeValue: false,
            trimValues: false,
            tagValueProcessor: (val, tagName) => (val.trim() === "" ? "" : entities_1.decodeHTML(val)),
        });
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return smithy_client_1.getValueFromTextNode(parsedObjToReturn);
    }
    return {};
});
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => smithy_client_1.extendedEncodeURIComponent(key) + "=" + smithy_client_1.extendedEncodeURIComponent(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
    return "";
};
//# sourceMappingURL=Aws_query.js.map