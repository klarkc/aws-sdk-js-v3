"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryModifyDBParameterGroupCommand = exports.serializeAws_queryModifyDBInstanceCommand = exports.serializeAws_queryModifyDBClusterSnapshotAttributeCommand = exports.serializeAws_queryModifyDBClusterParameterGroupCommand = exports.serializeAws_queryModifyDBClusterEndpointCommand = exports.serializeAws_queryModifyDBClusterCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryFailoverDBClusterCommand = exports.serializeAws_queryDescribeValidDBInstanceModificationsCommand = exports.serializeAws_queryDescribePendingMaintenanceActionsCommand = exports.serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = exports.serializeAws_queryDescribeEventSubscriptionsCommand = exports.serializeAws_queryDescribeEventsCommand = exports.serializeAws_queryDescribeEventCategoriesCommand = exports.serializeAws_queryDescribeEngineDefaultParametersCommand = exports.serializeAws_queryDescribeEngineDefaultClusterParametersCommand = exports.serializeAws_queryDescribeDBSubnetGroupsCommand = exports.serializeAws_queryDescribeDBParametersCommand = exports.serializeAws_queryDescribeDBParameterGroupsCommand = exports.serializeAws_queryDescribeDBInstancesCommand = exports.serializeAws_queryDescribeDBEngineVersionsCommand = exports.serializeAws_queryDescribeDBClusterSnapshotsCommand = exports.serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = exports.serializeAws_queryDescribeDBClustersCommand = exports.serializeAws_queryDescribeDBClusterParametersCommand = exports.serializeAws_queryDescribeDBClusterParameterGroupsCommand = exports.serializeAws_queryDescribeDBClusterEndpointsCommand = exports.serializeAws_queryDeleteEventSubscriptionCommand = exports.serializeAws_queryDeleteDBSubnetGroupCommand = exports.serializeAws_queryDeleteDBParameterGroupCommand = exports.serializeAws_queryDeleteDBInstanceCommand = exports.serializeAws_queryDeleteDBClusterSnapshotCommand = exports.serializeAws_queryDeleteDBClusterParameterGroupCommand = exports.serializeAws_queryDeleteDBClusterEndpointCommand = exports.serializeAws_queryDeleteDBClusterCommand = exports.serializeAws_queryCreateEventSubscriptionCommand = exports.serializeAws_queryCreateDBSubnetGroupCommand = exports.serializeAws_queryCreateDBParameterGroupCommand = exports.serializeAws_queryCreateDBInstanceCommand = exports.serializeAws_queryCreateDBClusterSnapshotCommand = exports.serializeAws_queryCreateDBClusterParameterGroupCommand = exports.serializeAws_queryCreateDBClusterEndpointCommand = exports.serializeAws_queryCreateDBClusterCommand = exports.serializeAws_queryCopyDBParameterGroupCommand = exports.serializeAws_queryCopyDBClusterSnapshotCommand = exports.serializeAws_queryCopyDBClusterParameterGroupCommand = exports.serializeAws_queryApplyPendingMaintenanceActionCommand = exports.serializeAws_queryAddTagsToResourceCommand = exports.serializeAws_queryAddSourceIdentifierToSubscriptionCommand = exports.serializeAws_queryAddRoleToDBClusterCommand = void 0;
exports.deserializeAws_queryDescribeEventCategoriesCommand = exports.deserializeAws_queryDescribeEngineDefaultParametersCommand = exports.deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = exports.deserializeAws_queryDescribeDBSubnetGroupsCommand = exports.deserializeAws_queryDescribeDBParametersCommand = exports.deserializeAws_queryDescribeDBParameterGroupsCommand = exports.deserializeAws_queryDescribeDBInstancesCommand = exports.deserializeAws_queryDescribeDBEngineVersionsCommand = exports.deserializeAws_queryDescribeDBClusterSnapshotsCommand = exports.deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = exports.deserializeAws_queryDescribeDBClustersCommand = exports.deserializeAws_queryDescribeDBClusterParametersCommand = exports.deserializeAws_queryDescribeDBClusterParameterGroupsCommand = exports.deserializeAws_queryDescribeDBClusterEndpointsCommand = exports.deserializeAws_queryDeleteEventSubscriptionCommand = exports.deserializeAws_queryDeleteDBSubnetGroupCommand = exports.deserializeAws_queryDeleteDBParameterGroupCommand = exports.deserializeAws_queryDeleteDBInstanceCommand = exports.deserializeAws_queryDeleteDBClusterSnapshotCommand = exports.deserializeAws_queryDeleteDBClusterParameterGroupCommand = exports.deserializeAws_queryDeleteDBClusterEndpointCommand = exports.deserializeAws_queryDeleteDBClusterCommand = exports.deserializeAws_queryCreateEventSubscriptionCommand = exports.deserializeAws_queryCreateDBSubnetGroupCommand = exports.deserializeAws_queryCreateDBParameterGroupCommand = exports.deserializeAws_queryCreateDBInstanceCommand = exports.deserializeAws_queryCreateDBClusterSnapshotCommand = exports.deserializeAws_queryCreateDBClusterParameterGroupCommand = exports.deserializeAws_queryCreateDBClusterEndpointCommand = exports.deserializeAws_queryCreateDBClusterCommand = exports.deserializeAws_queryCopyDBParameterGroupCommand = exports.deserializeAws_queryCopyDBClusterSnapshotCommand = exports.deserializeAws_queryCopyDBClusterParameterGroupCommand = exports.deserializeAws_queryApplyPendingMaintenanceActionCommand = exports.deserializeAws_queryAddTagsToResourceCommand = exports.deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = exports.deserializeAws_queryAddRoleToDBClusterCommand = exports.serializeAws_queryStopDBClusterCommand = exports.serializeAws_queryStartDBClusterCommand = exports.serializeAws_queryRestoreDBClusterToPointInTimeCommand = exports.serializeAws_queryRestoreDBClusterFromSnapshotCommand = exports.serializeAws_queryResetDBParameterGroupCommand = exports.serializeAws_queryResetDBClusterParameterGroupCommand = exports.serializeAws_queryRemoveTagsFromResourceCommand = exports.serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = exports.serializeAws_queryRemoveRoleFromDBClusterCommand = exports.serializeAws_queryRebootDBInstanceCommand = exports.serializeAws_queryPromoteReadReplicaDBClusterCommand = exports.serializeAws_queryModifyEventSubscriptionCommand = exports.serializeAws_queryModifyDBSubnetGroupCommand = void 0;
exports.deserializeAws_queryStopDBClusterCommand = exports.deserializeAws_queryStartDBClusterCommand = exports.deserializeAws_queryRestoreDBClusterToPointInTimeCommand = exports.deserializeAws_queryRestoreDBClusterFromSnapshotCommand = exports.deserializeAws_queryResetDBParameterGroupCommand = exports.deserializeAws_queryResetDBClusterParameterGroupCommand = exports.deserializeAws_queryRemoveTagsFromResourceCommand = exports.deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = exports.deserializeAws_queryRemoveRoleFromDBClusterCommand = exports.deserializeAws_queryRebootDBInstanceCommand = exports.deserializeAws_queryPromoteReadReplicaDBClusterCommand = exports.deserializeAws_queryModifyEventSubscriptionCommand = exports.deserializeAws_queryModifyDBSubnetGroupCommand = exports.deserializeAws_queryModifyDBParameterGroupCommand = exports.deserializeAws_queryModifyDBInstanceCommand = exports.deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = exports.deserializeAws_queryModifyDBClusterParameterGroupCommand = exports.deserializeAws_queryModifyDBClusterEndpointCommand = exports.deserializeAws_queryModifyDBClusterCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryFailoverDBClusterCommand = exports.deserializeAws_queryDescribeValidDBInstanceModificationsCommand = exports.deserializeAws_queryDescribePendingMaintenanceActionsCommand = exports.deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = exports.deserializeAws_queryDescribeEventSubscriptionsCommand = exports.deserializeAws_queryDescribeEventsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAddRoleToDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddRoleToDBClusterMessage(input, context),
        Action: "AddRoleToDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddRoleToDBClusterCommand = serializeAws_queryAddRoleToDBClusterCommand;
const serializeAws_queryAddSourceIdentifierToSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddSourceIdentifierToSubscriptionMessage(input, context),
        Action: "AddSourceIdentifierToSubscription",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddSourceIdentifierToSubscriptionCommand = serializeAws_queryAddSourceIdentifierToSubscriptionCommand;
const serializeAws_queryAddTagsToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddTagsToResourceMessage(input, context),
        Action: "AddTagsToResource",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddTagsToResourceCommand = serializeAws_queryAddTagsToResourceCommand;
const serializeAws_queryApplyPendingMaintenanceActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryApplyPendingMaintenanceActionMessage(input, context),
        Action: "ApplyPendingMaintenanceAction",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryApplyPendingMaintenanceActionCommand = serializeAws_queryApplyPendingMaintenanceActionCommand;
const serializeAws_queryCopyDBClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyDBClusterParameterGroupMessage(input, context),
        Action: "CopyDBClusterParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyDBClusterParameterGroupCommand = serializeAws_queryCopyDBClusterParameterGroupCommand;
const serializeAws_queryCopyDBClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyDBClusterSnapshotMessage(input, context),
        Action: "CopyDBClusterSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyDBClusterSnapshotCommand = serializeAws_queryCopyDBClusterSnapshotCommand;
const serializeAws_queryCopyDBParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyDBParameterGroupMessage(input, context),
        Action: "CopyDBParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyDBParameterGroupCommand = serializeAws_queryCopyDBParameterGroupCommand;
const serializeAws_queryCreateDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBClusterMessage(input, context),
        Action: "CreateDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBClusterCommand = serializeAws_queryCreateDBClusterCommand;
const serializeAws_queryCreateDBClusterEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBClusterEndpointMessage(input, context),
        Action: "CreateDBClusterEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBClusterEndpointCommand = serializeAws_queryCreateDBClusterEndpointCommand;
const serializeAws_queryCreateDBClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBClusterParameterGroupMessage(input, context),
        Action: "CreateDBClusterParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBClusterParameterGroupCommand = serializeAws_queryCreateDBClusterParameterGroupCommand;
const serializeAws_queryCreateDBClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBClusterSnapshotMessage(input, context),
        Action: "CreateDBClusterSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBClusterSnapshotCommand = serializeAws_queryCreateDBClusterSnapshotCommand;
const serializeAws_queryCreateDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBInstanceMessage(input, context),
        Action: "CreateDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBInstanceCommand = serializeAws_queryCreateDBInstanceCommand;
const serializeAws_queryCreateDBParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBParameterGroupMessage(input, context),
        Action: "CreateDBParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBParameterGroupCommand = serializeAws_queryCreateDBParameterGroupCommand;
const serializeAws_queryCreateDBSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBSubnetGroupMessage(input, context),
        Action: "CreateDBSubnetGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBSubnetGroupCommand = serializeAws_queryCreateDBSubnetGroupCommand;
const serializeAws_queryCreateEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateEventSubscriptionMessage(input, context),
        Action: "CreateEventSubscription",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateEventSubscriptionCommand = serializeAws_queryCreateEventSubscriptionCommand;
const serializeAws_queryDeleteDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBClusterMessage(input, context),
        Action: "DeleteDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBClusterCommand = serializeAws_queryDeleteDBClusterCommand;
const serializeAws_queryDeleteDBClusterEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBClusterEndpointMessage(input, context),
        Action: "DeleteDBClusterEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBClusterEndpointCommand = serializeAws_queryDeleteDBClusterEndpointCommand;
const serializeAws_queryDeleteDBClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBClusterParameterGroupMessage(input, context),
        Action: "DeleteDBClusterParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBClusterParameterGroupCommand = serializeAws_queryDeleteDBClusterParameterGroupCommand;
const serializeAws_queryDeleteDBClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBClusterSnapshotMessage(input, context),
        Action: "DeleteDBClusterSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBClusterSnapshotCommand = serializeAws_queryDeleteDBClusterSnapshotCommand;
const serializeAws_queryDeleteDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBInstanceMessage(input, context),
        Action: "DeleteDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBInstanceCommand = serializeAws_queryDeleteDBInstanceCommand;
const serializeAws_queryDeleteDBParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBParameterGroupMessage(input, context),
        Action: "DeleteDBParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBParameterGroupCommand = serializeAws_queryDeleteDBParameterGroupCommand;
const serializeAws_queryDeleteDBSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBSubnetGroupMessage(input, context),
        Action: "DeleteDBSubnetGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBSubnetGroupCommand = serializeAws_queryDeleteDBSubnetGroupCommand;
const serializeAws_queryDeleteEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteEventSubscriptionMessage(input, context),
        Action: "DeleteEventSubscription",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteEventSubscriptionCommand = serializeAws_queryDeleteEventSubscriptionCommand;
const serializeAws_queryDescribeDBClusterEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterEndpointsMessage(input, context),
        Action: "DescribeDBClusterEndpoints",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterEndpointsCommand = serializeAws_queryDescribeDBClusterEndpointsCommand;
const serializeAws_queryDescribeDBClusterParameterGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterParameterGroupsMessage(input, context),
        Action: "DescribeDBClusterParameterGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterParameterGroupsCommand = serializeAws_queryDescribeDBClusterParameterGroupsCommand;
const serializeAws_queryDescribeDBClusterParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterParametersMessage(input, context),
        Action: "DescribeDBClusterParameters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterParametersCommand = serializeAws_queryDescribeDBClusterParametersCommand;
const serializeAws_queryDescribeDBClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClustersMessage(input, context),
        Action: "DescribeDBClusters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClustersCommand = serializeAws_queryDescribeDBClustersCommand;
const serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterSnapshotAttributesMessage(input, context),
        Action: "DescribeDBClusterSnapshotAttributes",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = serializeAws_queryDescribeDBClusterSnapshotAttributesCommand;
const serializeAws_queryDescribeDBClusterSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterSnapshotsMessage(input, context),
        Action: "DescribeDBClusterSnapshots",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterSnapshotsCommand = serializeAws_queryDescribeDBClusterSnapshotsCommand;
const serializeAws_queryDescribeDBEngineVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBEngineVersionsMessage(input, context),
        Action: "DescribeDBEngineVersions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBEngineVersionsCommand = serializeAws_queryDescribeDBEngineVersionsCommand;
const serializeAws_queryDescribeDBInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBInstancesMessage(input, context),
        Action: "DescribeDBInstances",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBInstancesCommand = serializeAws_queryDescribeDBInstancesCommand;
const serializeAws_queryDescribeDBParameterGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBParameterGroupsMessage(input, context),
        Action: "DescribeDBParameterGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBParameterGroupsCommand = serializeAws_queryDescribeDBParameterGroupsCommand;
const serializeAws_queryDescribeDBParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBParametersMessage(input, context),
        Action: "DescribeDBParameters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBParametersCommand = serializeAws_queryDescribeDBParametersCommand;
const serializeAws_queryDescribeDBSubnetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBSubnetGroupsMessage(input, context),
        Action: "DescribeDBSubnetGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBSubnetGroupsCommand = serializeAws_queryDescribeDBSubnetGroupsCommand;
const serializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEngineDefaultClusterParametersMessage(input, context),
        Action: "DescribeEngineDefaultClusterParameters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEngineDefaultClusterParametersCommand = serializeAws_queryDescribeEngineDefaultClusterParametersCommand;
const serializeAws_queryDescribeEngineDefaultParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEngineDefaultParametersMessage(input, context),
        Action: "DescribeEngineDefaultParameters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEngineDefaultParametersCommand = serializeAws_queryDescribeEngineDefaultParametersCommand;
const serializeAws_queryDescribeEventCategoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventCategoriesMessage(input, context),
        Action: "DescribeEventCategories",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventCategoriesCommand = serializeAws_queryDescribeEventCategoriesCommand;
const serializeAws_queryDescribeEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventsMessage(input, context),
        Action: "DescribeEvents",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventsCommand = serializeAws_queryDescribeEventsCommand;
const serializeAws_queryDescribeEventSubscriptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventSubscriptionsMessage(input, context),
        Action: "DescribeEventSubscriptions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventSubscriptionsCommand = serializeAws_queryDescribeEventSubscriptionsCommand;
const serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeOrderableDBInstanceOptionsMessage(input, context),
        Action: "DescribeOrderableDBInstanceOptions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = serializeAws_queryDescribeOrderableDBInstanceOptionsCommand;
const serializeAws_queryDescribePendingMaintenanceActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribePendingMaintenanceActionsMessage(input, context),
        Action: "DescribePendingMaintenanceActions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribePendingMaintenanceActionsCommand = serializeAws_queryDescribePendingMaintenanceActionsCommand;
const serializeAws_queryDescribeValidDBInstanceModificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeValidDBInstanceModificationsMessage(input, context),
        Action: "DescribeValidDBInstanceModifications",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeValidDBInstanceModificationsCommand = serializeAws_queryDescribeValidDBInstanceModificationsCommand;
const serializeAws_queryFailoverDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryFailoverDBClusterMessage(input, context),
        Action: "FailoverDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryFailoverDBClusterCommand = serializeAws_queryFailoverDBClusterCommand;
const serializeAws_queryListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryListTagsForResourceMessage(input, context),
        Action: "ListTagsForResource",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryListTagsForResourceCommand = serializeAws_queryListTagsForResourceCommand;
const serializeAws_queryModifyDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBClusterMessage(input, context),
        Action: "ModifyDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBClusterCommand = serializeAws_queryModifyDBClusterCommand;
const serializeAws_queryModifyDBClusterEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBClusterEndpointMessage(input, context),
        Action: "ModifyDBClusterEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBClusterEndpointCommand = serializeAws_queryModifyDBClusterEndpointCommand;
const serializeAws_queryModifyDBClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBClusterParameterGroupMessage(input, context),
        Action: "ModifyDBClusterParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBClusterParameterGroupCommand = serializeAws_queryModifyDBClusterParameterGroupCommand;
const serializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBClusterSnapshotAttributeMessage(input, context),
        Action: "ModifyDBClusterSnapshotAttribute",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBClusterSnapshotAttributeCommand = serializeAws_queryModifyDBClusterSnapshotAttributeCommand;
const serializeAws_queryModifyDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBInstanceMessage(input, context),
        Action: "ModifyDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBInstanceCommand = serializeAws_queryModifyDBInstanceCommand;
const serializeAws_queryModifyDBParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBParameterGroupMessage(input, context),
        Action: "ModifyDBParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBParameterGroupCommand = serializeAws_queryModifyDBParameterGroupCommand;
const serializeAws_queryModifyDBSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBSubnetGroupMessage(input, context),
        Action: "ModifyDBSubnetGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBSubnetGroupCommand = serializeAws_queryModifyDBSubnetGroupCommand;
const serializeAws_queryModifyEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyEventSubscriptionMessage(input, context),
        Action: "ModifyEventSubscription",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyEventSubscriptionCommand = serializeAws_queryModifyEventSubscriptionCommand;
const serializeAws_queryPromoteReadReplicaDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPromoteReadReplicaDBClusterMessage(input, context),
        Action: "PromoteReadReplicaDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPromoteReadReplicaDBClusterCommand = serializeAws_queryPromoteReadReplicaDBClusterCommand;
const serializeAws_queryRebootDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRebootDBInstanceMessage(input, context),
        Action: "RebootDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRebootDBInstanceCommand = serializeAws_queryRebootDBInstanceCommand;
const serializeAws_queryRemoveRoleFromDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveRoleFromDBClusterMessage(input, context),
        Action: "RemoveRoleFromDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveRoleFromDBClusterCommand = serializeAws_queryRemoveRoleFromDBClusterCommand;
const serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage(input, context),
        Action: "RemoveSourceIdentifierFromSubscription",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand;
const serializeAws_queryRemoveTagsFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveTagsFromResourceMessage(input, context),
        Action: "RemoveTagsFromResource",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveTagsFromResourceCommand = serializeAws_queryRemoveTagsFromResourceCommand;
const serializeAws_queryResetDBClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResetDBClusterParameterGroupMessage(input, context),
        Action: "ResetDBClusterParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResetDBClusterParameterGroupCommand = serializeAws_queryResetDBClusterParameterGroupCommand;
const serializeAws_queryResetDBParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResetDBParameterGroupMessage(input, context),
        Action: "ResetDBParameterGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResetDBParameterGroupCommand = serializeAws_queryResetDBParameterGroupCommand;
const serializeAws_queryRestoreDBClusterFromSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBClusterFromSnapshotMessage(input, context),
        Action: "RestoreDBClusterFromSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBClusterFromSnapshotCommand = serializeAws_queryRestoreDBClusterFromSnapshotCommand;
const serializeAws_queryRestoreDBClusterToPointInTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBClusterToPointInTimeMessage(input, context),
        Action: "RestoreDBClusterToPointInTime",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBClusterToPointInTimeCommand = serializeAws_queryRestoreDBClusterToPointInTimeCommand;
const serializeAws_queryStartDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartDBClusterMessage(input, context),
        Action: "StartDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartDBClusterCommand = serializeAws_queryStartDBClusterCommand;
const serializeAws_queryStopDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStopDBClusterMessage(input, context),
        Action: "StopDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopDBClusterCommand = serializeAws_queryStopDBClusterCommand;
const deserializeAws_queryAddRoleToDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddRoleToDBClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddRoleToDBClusterCommand = deserializeAws_queryAddRoleToDBClusterCommand;
const deserializeAws_queryAddRoleToDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterRoleAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleQuotaExceededFault":
        case "com.amazonaws.neptune#DBClusterRoleQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAddSourceIdentifierToSubscriptionResult(data.AddSourceIdentifierToSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = deserializeAws_queryAddSourceIdentifierToSubscriptionCommand;
const deserializeAws_queryAddSourceIdentifierToSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SourceNotFoundFault":
        case "com.amazonaws.neptune#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAddTagsToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddTagsToResourceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryApplyPendingMaintenanceActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryApplyPendingMaintenanceActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryApplyPendingMaintenanceActionResult(data.ApplyPendingMaintenanceActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryApplyPendingMaintenanceActionCommand = deserializeAws_queryApplyPendingMaintenanceActionCommand;
const deserializeAws_queryApplyPendingMaintenanceActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.neptune#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCopyDBClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBClusterParameterGroupResult(data.CopyDBClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyDBClusterParameterGroupCommand = deserializeAws_queryCopyDBClusterParameterGroupCommand;
const deserializeAws_queryCopyDBClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCopyDBClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBClusterSnapshotResult(data.CopyDBClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyDBClusterSnapshotCommand = deserializeAws_queryCopyDBClusterSnapshotCommand;
const deserializeAws_queryCopyDBClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
const deserializeAws_queryCopyDBParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBParameterGroupResult(data.CopyDBParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyDBParameterGroupCommand = deserializeAws_queryCopyDBParameterGroupCommand;
const deserializeAws_queryCopyDBParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterResult(data.CreateDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBClusterCommand = deserializeAws_queryCreateDBClusterCommand;
const deserializeAws_queryCreateDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBClusterEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterEndpointOutput(data.CreateDBClusterEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBClusterEndpointCommand = deserializeAws_queryCreateDBClusterEndpointCommand;
const deserializeAws_queryCreateDBClusterEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterEndpointAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterEndpointQuotaExceededFault":
        case "com.amazonaws.neptune#DBClusterEndpointQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterParameterGroupResult(data.CreateDBClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBClusterParameterGroupCommand = deserializeAws_queryCreateDBClusterParameterGroupCommand;
const deserializeAws_queryCreateDBClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBClusterSnapshotResult(data.CreateDBClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBClusterSnapshotCommand = deserializeAws_queryCreateDBClusterSnapshotCommand;
const deserializeAws_queryCreateDBClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
const deserializeAws_queryCreateDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBInstanceResult(data.CreateDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBInstanceCommand = deserializeAws_queryCreateDBInstanceCommand;
const deserializeAws_queryCreateDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.neptune#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.neptune#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.neptune#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.neptune#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
            response = {
                ...(await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBParameterGroupResult(data.CreateDBParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBParameterGroupCommand = deserializeAws_queryCreateDBParameterGroupCommand;
const deserializeAws_queryCreateDBParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupAlreadyExistsFault":
        case "com.amazonaws.neptune#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.neptune#DBParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSubnetGroupResult(data.CreateDBSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBSubnetGroupCommand = deserializeAws_queryCreateDBSubnetGroupCommand;
const deserializeAws_queryCreateDBSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupAlreadyExistsFault":
        case "com.amazonaws.neptune#DBSubnetGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupQuotaExceededFault":
        case "com.amazonaws.neptune#DBSubnetGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetQuotaExceededFault":
        case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateEventSubscriptionResult(data.CreateEventSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateEventSubscriptionCommand = deserializeAws_queryCreateEventSubscriptionCommand;
const deserializeAws_queryCreateEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EventSubscriptionQuotaExceededFault":
        case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.neptune#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.neptune#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceNotFoundFault":
        case "com.amazonaws.neptune#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionAlreadyExistFault":
        case "com.amazonaws.neptune#SubscriptionAlreadyExistFault":
            response = {
                ...(await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBClusterResult(data.DeleteDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBClusterCommand = deserializeAws_queryDeleteDBClusterCommand;
const deserializeAws_queryDeleteDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
const deserializeAws_queryDeleteDBClusterEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBClusterEndpointOutput(data.DeleteDBClusterEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBClusterEndpointCommand = deserializeAws_queryDeleteDBClusterEndpointCommand;
const deserializeAws_queryDeleteDBClusterEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointNotFoundFault":
        case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBClusterParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBClusterParameterGroupCommand = deserializeAws_queryDeleteDBClusterParameterGroupCommand;
const deserializeAws_queryDeleteDBClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBClusterSnapshotResult(data.DeleteDBClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBClusterSnapshotCommand = deserializeAws_queryDeleteDBClusterSnapshotCommand;
const deserializeAws_queryDeleteDBClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBInstanceResult(data.DeleteDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBInstanceCommand = deserializeAws_queryDeleteDBInstanceCommand;
const deserializeAws_queryDeleteDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "com.amazonaws.neptune#DBSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.neptune#SnapshotQuotaExceededFault":
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
const deserializeAws_queryDeleteDBParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBParameterGroupCommand = deserializeAws_queryDeleteDBParameterGroupCommand;
const deserializeAws_queryDeleteDBParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBSubnetGroupCommand = deserializeAws_queryDeleteDBSubnetGroupCommand;
const deserializeAws_queryDeleteDBSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetStateFault":
        case "com.amazonaws.neptune#InvalidDBSubnetStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteEventSubscriptionResult(data.DeleteEventSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteEventSubscriptionCommand = deserializeAws_queryDeleteEventSubscriptionCommand;
const deserializeAws_queryDeleteEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidEventSubscriptionStateFault":
        case "com.amazonaws.neptune#InvalidEventSubscriptionStateFault":
            response = {
                ...(await deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterEndpointMessage(data.DescribeDBClusterEndpointsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterEndpointsCommand = deserializeAws_queryDescribeDBClusterEndpointsCommand;
const deserializeAws_queryDescribeDBClusterEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterParameterGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupsMessage(data.DescribeDBClusterParameterGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterParameterGroupsCommand = deserializeAws_queryDescribeDBClusterParameterGroupsCommand;
const deserializeAws_queryDescribeDBClusterParameterGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupDetails(data.DescribeDBClusterParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterParametersCommand = deserializeAws_queryDescribeDBClusterParametersCommand;
const deserializeAws_queryDescribeDBClusterParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterMessage(data.DescribeDBClustersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClustersCommand = deserializeAws_queryDescribeDBClustersCommand;
const deserializeAws_queryDescribeDBClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBClusterSnapshotAttributesResult(data.DescribeDBClusterSnapshotAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand;
const deserializeAws_queryDescribeDBClusterSnapshotAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterSnapshotMessage(data.DescribeDBClusterSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterSnapshotsCommand = deserializeAws_queryDescribeDBClusterSnapshotsCommand;
const deserializeAws_queryDescribeDBClusterSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBEngineVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBEngineVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBEngineVersionMessage(data.DescribeDBEngineVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBEngineVersionsCommand = deserializeAws_queryDescribeDBEngineVersionsCommand;
const deserializeAws_queryDescribeDBEngineVersionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeDBInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBInstanceMessage(data.DescribeDBInstancesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBInstancesCommand = deserializeAws_queryDescribeDBInstancesCommand;
const deserializeAws_queryDescribeDBInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBParameterGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupsMessage(data.DescribeDBParameterGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBParameterGroupsCommand = deserializeAws_queryDescribeDBParameterGroupsCommand;
const deserializeAws_queryDescribeDBParameterGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupDetails(data.DescribeDBParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBParametersCommand = deserializeAws_queryDescribeDBParametersCommand;
const deserializeAws_queryDescribeDBParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBSubnetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSubnetGroupMessage(data.DescribeDBSubnetGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBSubnetGroupsCommand = deserializeAws_queryDescribeDBSubnetGroupsCommand;
const deserializeAws_queryDescribeDBSubnetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeEngineDefaultClusterParametersResult(data.DescribeEngineDefaultClusterParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = deserializeAws_queryDescribeEngineDefaultClusterParametersCommand;
const deserializeAws_queryDescribeEngineDefaultClusterParametersCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeEventCategoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEventCategoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventCategoriesMessage(data.DescribeEventCategoriesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEventCategoriesCommand = deserializeAws_queryDescribeEventCategoriesCommand;
const deserializeAws_queryDescribeEventCategoriesCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeEventSubscriptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEventSubscriptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEventSubscriptionsMessage(data.DescribeEventSubscriptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEventSubscriptionsCommand = deserializeAws_queryDescribeEventSubscriptionsCommand;
const deserializeAws_queryDescribeEventSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOrderableDBInstanceOptionsMessage(data.DescribeOrderableDBInstanceOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand;
const deserializeAws_queryDescribeOrderableDBInstanceOptionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribePendingMaintenanceActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribePendingMaintenanceActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPendingMaintenanceActionsMessage(data.DescribePendingMaintenanceActionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribePendingMaintenanceActionsCommand = deserializeAws_queryDescribePendingMaintenanceActionsCommand;
const deserializeAws_queryDescribePendingMaintenanceActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundFault":
        case "com.amazonaws.neptune#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeValidDBInstanceModificationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeValidDBInstanceModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeValidDBInstanceModificationsResult(data.DescribeValidDBInstanceModificationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeValidDBInstanceModificationsCommand = deserializeAws_queryDescribeValidDBInstanceModificationsCommand;
const deserializeAws_queryDescribeValidDBInstanceModificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryFailoverDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryFailoverDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryFailoverDBClusterResult(data.FailoverDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryFailoverDBClusterCommand = deserializeAws_queryFailoverDBClusterCommand;
const deserializeAws_queryFailoverDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBClusterResult(data.ModifyDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBClusterCommand = deserializeAws_queryModifyDBClusterCommand;
const deserializeAws_queryModifyDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBClusterEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBClusterEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBClusterEndpointOutput(data.ModifyDBClusterEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBClusterEndpointCommand = deserializeAws_queryModifyDBClusterEndpointCommand;
const deserializeAws_queryModifyDBClusterEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterEndpointNotFoundFault":
        case "com.amazonaws.neptune#DBClusterEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ModifyDBClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBClusterParameterGroupCommand = deserializeAws_queryModifyDBClusterParameterGroupCommand;
const deserializeAws_queryModifyDBClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBClusterSnapshotAttributeResult(data.ModifyDBClusterSnapshotAttributeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = deserializeAws_queryModifyDBClusterSnapshotAttributeCommand;
const deserializeAws_queryModifyDBClusterSnapshotAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SharedSnapshotQuotaExceededFault":
        case "com.amazonaws.neptune#SharedSnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySharedSnapshotQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBInstanceResult(data.ModifyDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBInstanceCommand = deserializeAws_queryModifyDBInstanceCommand;
const deserializeAws_queryModifyDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.neptune#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundFault":
        case "com.amazonaws.neptune#CertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.neptune#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBUpgradeDependencyFailureFault":
        case "com.amazonaws.neptune#DBUpgradeDependencyFailureFault":
            response = {
                ...(await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.neptune#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.neptune#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.neptune#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.neptune#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.neptune#StorageTypeNotSupportedFault":
            response = {
                ...(await deserializeAws_queryStorageTypeNotSupportedFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupNameMessage(data.ModifyDBParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBParameterGroupCommand = deserializeAws_queryModifyDBParameterGroupCommand;
const deserializeAws_queryModifyDBParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSubnetGroupResult(data.ModifyDBSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBSubnetGroupCommand = deserializeAws_queryModifyDBSubnetGroupCommand;
const deserializeAws_queryModifyDBSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.neptune#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetQuotaExceededFault":
        case "com.amazonaws.neptune#DBSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetAlreadyInUse":
        case "com.amazonaws.neptune#SubnetAlreadyInUse":
            response = {
                ...(await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyEventSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyEventSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyEventSubscriptionResult(data.ModifyEventSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyEventSubscriptionCommand = deserializeAws_queryModifyEventSubscriptionCommand;
const deserializeAws_queryModifyEventSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EventSubscriptionQuotaExceededFault":
        case "com.amazonaws.neptune#EventSubscriptionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.neptune#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.neptune#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.neptune#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionCategoryNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPromoteReadReplicaDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPromoteReadReplicaDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPromoteReadReplicaDBClusterResult(data.PromoteReadReplicaDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPromoteReadReplicaDBClusterCommand = deserializeAws_queryPromoteReadReplicaDBClusterCommand;
const deserializeAws_queryPromoteReadReplicaDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRebootDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRebootDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootDBInstanceResult(data.RebootDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRebootDBInstanceCommand = deserializeAws_queryRebootDBInstanceCommand;
const deserializeAws_queryRebootDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRemoveRoleFromDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveRoleFromDBClusterCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveRoleFromDBClusterCommand = deserializeAws_queryRemoveRoleFromDBClusterCommand;
const deserializeAws_queryRemoveRoleFromDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleNotFoundFault":
        case "com.amazonaws.neptune#DBClusterRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult(data.RemoveSourceIdentifierFromSubscriptionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand;
const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "SourceNotFoundFault":
        case "com.amazonaws.neptune#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.neptune#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.neptune#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResetDBClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResetDBClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterParameterGroupNameMessage(data.ResetDBClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResetDBClusterParameterGroupCommand = deserializeAws_queryResetDBClusterParameterGroupCommand;
const deserializeAws_queryResetDBClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResetDBParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResetDBParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBParameterGroupNameMessage(data.ResetDBParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResetDBParameterGroupCommand = deserializeAws_queryResetDBParameterGroupCommand;
const deserializeAws_queryResetDBParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.neptune#InvalidDBParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRestoreDBClusterFromSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBClusterFromSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterFromSnapshotResult(data.RestoreDBClusterFromSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBClusterFromSnapshotCommand = deserializeAws_queryRestoreDBClusterFromSnapshotCommand;
const deserializeAws_queryRestoreDBClusterFromSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBClusterCapacityFault":
        case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.neptune#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.neptune#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRestoreDBClusterToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBClusterToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterToPointInTimeResult(data.RestoreDBClusterToPointInTimeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBClusterToPointInTimeCommand = deserializeAws_queryRestoreDBClusterToPointInTimeCommand;
const deserializeAws_queryRestoreDBClusterToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "com.amazonaws.neptune#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.neptune#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.neptune#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.neptune#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.neptune#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBClusterCapacityFault":
        case "com.amazonaws.neptune#InsufficientDBClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.neptune#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.neptune#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.neptune#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.neptune#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.neptune#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.neptune#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.neptune#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.neptune#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStartDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartDBClusterResult(data.StartDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartDBClusterCommand = deserializeAws_queryStartDBClusterCommand;
const deserializeAws_queryStartDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStopDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStopDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopDBClusterResult(data.StopDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStopDBClusterCommand = deserializeAws_queryStopDBClusterCommand;
const deserializeAws_queryStopDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.neptune#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.neptune#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.neptune#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCertificateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCertificateNotFoundFault(body.Error, context);
    const contents = {
        name: "CertificateNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBClusterAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBClusterEndpointAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterEndpointNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterEndpointNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterEndpointQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBClusterEndpointQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterParameterGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterParameterGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBClusterQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBClusterRoleAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterRoleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterRoleQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBClusterRoleQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterSnapshotAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBClusterSnapshotAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterSnapshotNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterSnapshotNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBInstanceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBInstanceAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBInstanceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceNotFoundFault(body.Error, context);
    const contents = {
        name: "DBInstanceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBParameterGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBParameterGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBParameterGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBParameterGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBSecurityGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSnapshotAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBSnapshotAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSnapshotNotFoundFault(body.Error, context);
    const contents = {
        name: "DBSnapshotNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBSubnetGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs(body.Error, context);
    const contents = {
        name: "DBSubnetGroupDoesNotCoverEnoughAZs",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBSubnetGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBSubnetGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBSubnetQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBUpgradeDependencyFailureFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBUpgradeDependencyFailureFault(body.Error, context);
    const contents = {
        name: "DBUpgradeDependencyFailureFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDomainNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDomainNotFoundFault(body.Error, context);
    const contents = {
        name: "DomainNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEventSubscriptionQuotaExceededFault(body.Error, context);
    const contents = {
        name: "EventSubscriptionQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInstanceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstanceQuotaExceededFault(body.Error, context);
    const contents = {
        name: "InstanceQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientDBClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientDBClusterCapacityFault(body.Error, context);
    const contents = {
        name: "InsufficientDBClusterCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientDBInstanceCapacityFault(body.Error, context);
    const contents = {
        name: "InsufficientDBInstanceCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientStorageClusterCapacityFault(body.Error, context);
    const contents = {
        name: "InsufficientStorageClusterCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterEndpointStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBClusterEndpointStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterSnapshotStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBClusterSnapshotStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBClusterStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBInstanceStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBInstanceStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBInstanceStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBParameterGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBParameterGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSecurityGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBSecurityGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSnapshotStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBSnapshotStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBSubnetGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBSubnetStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBSubnetStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidEventSubscriptionStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidEventSubscriptionStateFault(body.Error, context);
    const contents = {
        name: "InvalidEventSubscriptionStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidRestoreFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRestoreFault(body.Error, context);
    const contents = {
        name: "InvalidRestoreFault",
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
const deserializeAws_queryKMSKeyNotAccessibleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryKMSKeyNotAccessibleFault(body.Error, context);
    const contents = {
        name: "KMSKeyNotAccessibleFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryOptionGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "OptionGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryProvisionedIopsNotAvailableInAZFault(body.Error, context);
    const contents = {
        name: "ProvisionedIopsNotAvailableInAZFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResourceNotFoundFault(body.Error, context);
    const contents = {
        name: "ResourceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySharedSnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySharedSnapshotQuotaExceededFault(body.Error, context);
    const contents = {
        name: "SharedSnapshotQuotaExceededFault",
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
const deserializeAws_querySNSInvalidTopicFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSInvalidTopicFault(body.Error, context);
    const contents = {
        name: "SNSInvalidTopicFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySNSNoAuthorizationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSNoAuthorizationFault(body.Error, context);
    const contents = {
        name: "SNSNoAuthorizationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySNSTopicArnNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySNSTopicArnNotFoundFault(body.Error, context);
    const contents = {
        name: "SNSTopicArnNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySourceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySourceNotFoundFault(body.Error, context);
    const contents = {
        name: "SourceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryStorageQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStorageQuotaExceededFault(body.Error, context);
    const contents = {
        name: "StorageQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryStorageTypeNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryStorageTypeNotSupportedFault(body.Error, context);
    const contents = {
        name: "StorageTypeNotSupportedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubnetAlreadyInUseResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubnetAlreadyInUse(body.Error, context);
    const contents = {
        name: "SubnetAlreadyInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubscriptionAlreadyExistFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionAlreadyExistFault(body.Error, context);
    const contents = {
        name: "SubscriptionAlreadyExistFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubscriptionCategoryNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionCategoryNotFoundFault(body.Error, context);
    const contents = {
        name: "SubscriptionCategoryNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySubscriptionNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionNotFoundFault(body.Error, context);
    const contents = {
        name: "SubscriptionNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAddRoleToDBClusterMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryAddSourceIdentifierToSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SourceIdentifier !== undefined && input.SourceIdentifier !== null) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
    }
    return entries;
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
const serializeAws_queryApplyPendingMaintenanceActionMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryAttributeValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`AttributeValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAvailabilityZones = (input, context) => {
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
const serializeAws_queryCloudwatchLogsExportConfiguration = (input, context) => {
    const entries = {};
    if (input.EnableLogTypes !== undefined && input.EnableLogTypes !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableLogTypes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableLogTypes.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DisableLogTypes !== undefined && input.DisableLogTypes !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.DisableLogTypes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DisableLogTypes.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCopyDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCopyDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCopyDBParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateDBClusterEndpointMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StaticMembers.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExcludedMembers !== undefined && input.ExcludedMembers !== null) {
        const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExcludedMembers.${key}`;
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
const serializeAws_queryCreateDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AvailabilityZones.${key}`;
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
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
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
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
const serializeAws_queryCreateDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
const serializeAws_queryCreateDBInstanceMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBSecurityGroups.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
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
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
const serializeAws_queryCreateDBParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DBSubnetGroupDescription !== undefined && input.DBSubnetGroupDescription !== null) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
const serializeAws_queryCreateEventSubscriptionMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventCategories.${key}`;
            entries[loc] = value;
        });
    }
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
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
const serializeAws_queryDBSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`DBSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterEndpointMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDeleteDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteDBInstanceMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDeleteDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteEventSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    return entries;
};
const serializeAws_queryDescribeDBClusterEndpointsMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
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
const serializeAws_queryDescribeDBClusterParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
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
const serializeAws_queryDescribeDBClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
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
const serializeAws_queryDescribeDBClustersMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
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
const serializeAws_queryDescribeDBClusterSnapshotAttributesMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeDBClusterSnapshotsMessage = (input, context) => {
    const entries = {};
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
    if (input.IncludeShared !== undefined && input.IncludeShared !== null) {
        entries["IncludeShared"] = input.IncludeShared;
    }
    if (input.IncludePublic !== undefined && input.IncludePublic !== null) {
        entries["IncludePublic"] = input.IncludePublic;
    }
    return entries;
};
const serializeAws_queryDescribeDBEngineVersionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeDBInstancesMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
const serializeAws_queryDescribeDBParameterGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
const serializeAws_queryDescribeDBParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.Source !== undefined && input.Source !== null) {
        entries["Source"] = input.Source;
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
const serializeAws_queryDescribeDBSubnetGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
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
const serializeAws_queryDescribeEngineDefaultClusterParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
const serializeAws_queryDescribeEngineDefaultParametersMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupFamily !== undefined && input.DBParameterGroupFamily !== null) {
        entries["DBParameterGroupFamily"] = input.DBParameterGroupFamily;
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
const serializeAws_queryDescribeEventCategoriesMessage = (input, context) => {
    const entries = {};
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
            entries[loc] = value;
        });
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
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventCategories.${key}`;
            entries[loc] = value;
        });
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
const serializeAws_queryDescribeEventSubscriptionsMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
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
const serializeAws_queryDescribeOrderableDBInstanceOptionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribePendingMaintenanceActionsMessage = (input, context) => {
    const entries = {};
    if (input.ResourceIdentifier !== undefined && input.ResourceIdentifier !== null) {
        entries["ResourceIdentifier"] = input.ResourceIdentifier;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
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
const serializeAws_queryDescribeValidDBInstanceModificationsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryEventCategoriesList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`EventCategory.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryFailoverDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.TargetDBInstanceIdentifier !== undefined && input.TargetDBInstanceIdentifier !== null) {
        entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
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
            entries[`Filter.${counter}.${key}`] = value;
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
        entries[`Value.${counter}`] = entry;
        counter++;
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
const serializeAws_queryListTagsForResourceMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.Filters !== undefined && input.Filters !== null) {
        const memberEntries = serializeAws_queryFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryLogTypeList = (input, context) => {
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
const serializeAws_queryModifyDBClusterEndpointMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterEndpointIdentifier !== undefined && input.DBClusterEndpointIdentifier !== null) {
        entries["DBClusterEndpointIdentifier"] = input.DBClusterEndpointIdentifier;
    }
    if (input.EndpointType !== undefined && input.EndpointType !== null) {
        entries["EndpointType"] = input.EndpointType;
    }
    if (input.StaticMembers !== undefined && input.StaticMembers !== null) {
        const memberEntries = serializeAws_queryStringList(input.StaticMembers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `StaticMembers.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ExcludedMembers !== undefined && input.ExcludedMembers !== null) {
        const memberEntries = serializeAws_queryStringList(input.ExcludedMembers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExcludedMembers.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBClusterMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudwatchLogsExportConfiguration.${key}`;
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
const serializeAws_queryModifyDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Parameters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBClusterSnapshotAttributeMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterSnapshotIdentifier !== undefined && input.DBClusterSnapshotIdentifier !== null) {
        entries["DBClusterSnapshotIdentifier"] = input.DBClusterSnapshotIdentifier;
    }
    if (input.AttributeName !== undefined && input.AttributeName !== null) {
        entries["AttributeName"] = input.AttributeName;
    }
    if (input.ValuesToAdd !== undefined && input.ValuesToAdd !== null) {
        const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToAdd, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ValuesToAdd.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ValuesToRemove !== undefined && input.ValuesToRemove !== null) {
        const memberEntries = serializeAws_queryAttributeValueList(input.ValuesToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ValuesToRemove.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBInstanceMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBSecurityGroups.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
        const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudwatchLogsExportConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    return entries;
};
const serializeAws_queryModifyDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Parameters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.DBSubnetGroupDescription !== undefined && input.DBSubnetGroupDescription !== null) {
        entries["DBSubnetGroupDescription"] = input.DBSubnetGroupDescription;
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
const serializeAws_queryModifyEventSubscriptionMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventCategories.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Enabled !== undefined && input.Enabled !== null) {
        entries["Enabled"] = input.Enabled;
    }
    return entries;
};
const serializeAws_queryParameter = (input, context) => {
    const entries = {};
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
const serializeAws_queryParametersList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryParameter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`Parameter.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryPromoteReadReplicaDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryRebootDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.ForceFailover !== undefined && input.ForceFailover !== null) {
        entries["ForceFailover"] = input.ForceFailover;
    }
    return entries;
};
const serializeAws_queryRemoveRoleFromDBClusterMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryRemoveSourceIdentifierFromSubscriptionMessage = (input, context) => {
    const entries = {};
    if (input.SubscriptionName !== undefined && input.SubscriptionName !== null) {
        entries["SubscriptionName"] = input.SubscriptionName;
    }
    if (input.SourceIdentifier !== undefined && input.SourceIdentifier !== null) {
        entries["SourceIdentifier"] = input.SourceIdentifier;
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
const serializeAws_queryResetDBClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterParameterGroupName !== undefined && input.DBClusterParameterGroupName !== null) {
        entries["DBClusterParameterGroupName"] = input.DBClusterParameterGroupName;
    }
    if (input.ResetAllParameters !== undefined && input.ResetAllParameters !== null) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Parameters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryResetDBParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.ResetAllParameters !== undefined && input.ResetAllParameters !== null) {
        entries["ResetAllParameters"] = input.ResetAllParameters;
    }
    if (input.Parameters !== undefined && input.Parameters !== null) {
        const memberEntries = serializeAws_queryParametersList(input.Parameters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Parameters.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRestoreDBClusterFromSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.AvailabilityZones !== undefined && input.AvailabilityZones !== null) {
        const memberEntries = serializeAws_queryAvailabilityZones(input.AvailabilityZones, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AvailabilityZones.${key}`;
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
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
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
const serializeAws_queryRestoreDBClusterToPointInTimeMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
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
const serializeAws_querySourceIdsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`SourceId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryStartDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryStopDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryStringList = (input, context) => {
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
const serializeAws_queryVpcSecurityGroupIdList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`VpcSecurityGroupId.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const deserializeAws_queryAddSourceIdentifierToSubscriptionResult = (output, context) => {
    let contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryApplyPendingMaintenanceActionResult = (output, context) => {
    let contents = {
        ResourcePendingMaintenanceActions: undefined,
    };
    if (output["ResourcePendingMaintenanceActions"] !== undefined) {
        contents.ResourcePendingMaintenanceActions = deserializeAws_queryResourcePendingMaintenanceActions(output["ResourcePendingMaintenanceActions"], context);
    }
    return contents;
};
const deserializeAws_queryAttributeValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_queryAvailabilityZoneList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAvailabilityZone(entry, context);
    });
};
const deserializeAws_queryAvailabilityZones = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryCertificateNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCharacterSet = (output, context) => {
    let contents = {
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
const deserializeAws_queryCopyDBClusterParameterGroupResult = (output, context) => {
    let contents = {
        DBClusterParameterGroup: undefined,
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCopyDBClusterSnapshotResult = (output, context) => {
    let contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCopyDBParameterGroupResult = (output, context) => {
    let contents = {
        DBParameterGroup: undefined,
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterEndpointOutput = (output, context) => {
    let contents = {
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
        contents.StaticMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterParameterGroupResult = (output, context) => {
    let contents = {
        DBClusterParameterGroup: undefined,
    };
    if (output["DBClusterParameterGroup"] !== undefined) {
        contents.DBClusterParameterGroup = deserializeAws_queryDBClusterParameterGroup(output["DBClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBClusterSnapshotResult = (output, context) => {
    let contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBParameterGroupResult = (output, context) => {
    let contents = {
        DBParameterGroup: undefined,
    };
    if (output["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroup = deserializeAws_queryDBParameterGroup(output["DBParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSubnetGroupResult = (output, context) => {
    let contents = {
        DBSubnetGroup: undefined,
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateEventSubscriptionResult = (output, context) => {
    let contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryDBCluster = (output, context) => {
    let contents = {
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
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
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
        contents.DBClusterOptionGroupMemberships = deserializeAws_queryDBClusterOptionGroupMemberships(smithy_client_1.getArrayIfSingleItem(output["DBClusterOptionGroupMemberships"]["DBClusterOptionGroup"]), context);
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
        contents.ReadReplicaIdentifiers = deserializeAws_queryReadReplicaIdentifierList(smithy_client_1.getArrayIfSingleItem(output["ReadReplicaIdentifiers"]["ReadReplicaIdentifier"]), context);
    }
    if (output.DBClusterMembers === "") {
        contents.DBClusterMembers = [];
    }
    if (output["DBClusterMembers"] !== undefined && output["DBClusterMembers"]["DBClusterMember"] !== undefined) {
        contents.DBClusterMembers = deserializeAws_queryDBClusterMemberList(smithy_client_1.getArrayIfSingleItem(output["DBClusterMembers"]["DBClusterMember"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]), context);
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
        contents.AssociatedRoles = deserializeAws_queryDBClusterRoles(smithy_client_1.getArrayIfSingleItem(output["AssociatedRoles"]["DBClusterRole"]), context);
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
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
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
const deserializeAws_queryDBClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpoint = (output, context) => {
    let contents = {
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
        contents.StaticMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterEndpoint(entry, context);
    });
};
const deserializeAws_queryDBClusterEndpointMessage = (output, context) => {
    let contents = {
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
        contents.DBClusterEndpoints = deserializeAws_queryDBClusterEndpointList(smithy_client_1.getArrayIfSingleItem(output["DBClusterEndpoints"]["DBClusterEndpointList"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterEndpointQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBCluster(entry, context);
    });
};
const deserializeAws_queryDBClusterMember = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBClusterMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterMember(entry, context);
    });
};
const deserializeAws_queryDBClusterMessage = (output, context) => {
    let contents = {
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
        contents.DBClusters = deserializeAws_queryDBClusterList(smithy_client_1.getArrayIfSingleItem(output["DBClusters"]["DBCluster"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterOptionGroupMemberships = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterOptionGroupStatus(entry, context);
    });
};
const deserializeAws_queryDBClusterOptionGroupStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBClusterParameterGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBClusterParameterGroupDetails = (output, context) => {
    let contents = {
        Parameters: undefined,
        Marker: undefined,
    };
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterParameterGroup(entry, context);
    });
};
const deserializeAws_queryDBClusterParameterGroupNameMessage = (output, context) => {
    let contents = {
        DBClusterParameterGroupName: undefined,
    };
    if (output["DBClusterParameterGroupName"] !== undefined) {
        contents.DBClusterParameterGroupName = output["DBClusterParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterParameterGroupsMessage = (output, context) => {
    let contents = {
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
        contents.DBClusterParameterGroups = deserializeAws_queryDBClusterParameterGroupList(smithy_client_1.getArrayIfSingleItem(output["DBClusterParameterGroups"]["DBClusterParameterGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRole = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBClusterRoleAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoleNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoleQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterRoles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterRole(entry, context);
    });
};
const deserializeAws_queryDBClusterSnapshot = (output, context) => {
    let contents = {
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
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZones(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
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
const deserializeAws_queryDBClusterSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAttribute = (output, context) => {
    let contents = {
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
        contents.AttributeValues = deserializeAws_queryAttributeValueList(smithy_client_1.getArrayIfSingleItem(output["AttributeValues"]["AttributeValue"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterSnapshotAttribute(entry, context);
    });
};
const deserializeAws_queryDBClusterSnapshotAttributesResult = (output, context) => {
    let contents = {
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
        contents.DBClusterSnapshotAttributes = deserializeAws_queryDBClusterSnapshotAttributeList(smithy_client_1.getArrayIfSingleItem(output["DBClusterSnapshotAttributes"]["DBClusterSnapshotAttribute"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterSnapshot(entry, context);
    });
};
const deserializeAws_queryDBClusterSnapshotMessage = (output, context) => {
    let contents = {
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
        contents.DBClusterSnapshots = deserializeAws_queryDBClusterSnapshotList(smithy_client_1.getArrayIfSingleItem(output["DBClusterSnapshots"]["DBClusterSnapshot"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterSnapshotNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBEngineVersion = (output, context) => {
    let contents = {
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
        contents.SupportedCharacterSets = deserializeAws_querySupportedCharacterSetsList(smithy_client_1.getArrayIfSingleItem(output["SupportedCharacterSets"]["CharacterSet"]), context);
    }
    if (output.ValidUpgradeTarget === "") {
        contents.ValidUpgradeTarget = [];
    }
    if (output["ValidUpgradeTarget"] !== undefined && output["ValidUpgradeTarget"]["UpgradeTarget"] !== undefined) {
        contents.ValidUpgradeTarget = deserializeAws_queryValidUpgradeTargetList(smithy_client_1.getArrayIfSingleItem(output["ValidUpgradeTarget"]["UpgradeTarget"]), context);
    }
    if (output.SupportedTimezones === "") {
        contents.SupportedTimezones = [];
    }
    if (output["SupportedTimezones"] !== undefined && output["SupportedTimezones"]["Timezone"] !== undefined) {
        contents.SupportedTimezones = deserializeAws_querySupportedTimezonesList(smithy_client_1.getArrayIfSingleItem(output["SupportedTimezones"]["Timezone"]), context);
    }
    if (output.ExportableLogTypes === "") {
        contents.ExportableLogTypes = [];
    }
    if (output["ExportableLogTypes"] !== undefined && output["ExportableLogTypes"]["member"] !== undefined) {
        contents.ExportableLogTypes = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["ExportableLogTypes"]["member"]), context);
    }
    if (output["SupportsLogExportsToCloudwatchLogs"] !== undefined) {
        contents.SupportsLogExportsToCloudwatchLogs = output["SupportsLogExportsToCloudwatchLogs"] == "true";
    }
    if (output["SupportsReadReplica"] !== undefined) {
        contents.SupportsReadReplica = output["SupportsReadReplica"] == "true";
    }
    return contents;
};
const deserializeAws_queryDBEngineVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBEngineVersion(entry, context);
    });
};
const deserializeAws_queryDBEngineVersionMessage = (output, context) => {
    let contents = {
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
        contents.DBEngineVersions = deserializeAws_queryDBEngineVersionList(smithy_client_1.getArrayIfSingleItem(output["DBEngineVersions"]["DBEngineVersion"]), context);
    }
    return contents;
};
const deserializeAws_queryDBInstance = (output, context) => {
    let contents = {
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
        contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined &&
        output["VpcSecurityGroups"]["VpcSecurityGroupMembership"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroupMembership"]), context);
    }
    if (output.DBParameterGroups === "") {
        contents.DBParameterGroups = [];
    }
    if (output["DBParameterGroups"] !== undefined && output["DBParameterGroups"]["DBParameterGroup"] !== undefined) {
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupStatusList(smithy_client_1.getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]), context);
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
        contents.ReadReplicaDBInstanceIdentifiers = deserializeAws_queryReadReplicaDBInstanceIdentifierList(smithy_client_1.getArrayIfSingleItem(output["ReadReplicaDBInstanceIdentifiers"]["ReadReplicaDBInstanceIdentifier"]), context);
    }
    if (output.ReadReplicaDBClusterIdentifiers === "") {
        contents.ReadReplicaDBClusterIdentifiers = [];
    }
    if (output["ReadReplicaDBClusterIdentifiers"] !== undefined &&
        output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"] !== undefined) {
        contents.ReadReplicaDBClusterIdentifiers = deserializeAws_queryReadReplicaDBClusterIdentifierList(smithy_client_1.getArrayIfSingleItem(output["ReadReplicaDBClusterIdentifiers"]["ReadReplicaDBClusterIdentifier"]), context);
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
        contents.OptionGroupMemberships = deserializeAws_queryOptionGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["OptionGroupMemberships"]["OptionGroupMembership"]), context);
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
        contents.StatusInfos = deserializeAws_queryDBInstanceStatusInfoList(smithy_client_1.getArrayIfSingleItem(output["StatusInfos"]["DBInstanceStatusInfo"]), context);
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
        contents.DomainMemberships = deserializeAws_queryDomainMembershipList(smithy_client_1.getArrayIfSingleItem(output["DomainMemberships"]["DomainMembership"]), context);
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
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    return contents;
};
const deserializeAws_queryDBInstanceAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstance(entry, context);
    });
};
const deserializeAws_queryDBInstanceMessage = (output, context) => {
    let contents = {
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
        contents.DBInstances = deserializeAws_queryDBInstanceList(smithy_client_1.getArrayIfSingleItem(output["DBInstances"]["DBInstance"]), context);
    }
    return contents;
};
const deserializeAws_queryDBInstanceNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceStatusInfo = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBInstanceStatusInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstanceStatusInfo(entry, context);
    });
};
const deserializeAws_queryDBParameterGroup = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupDetails = (output, context) => {
    let contents = {
        Parameters: undefined,
        Marker: undefined,
    };
    if (output.Parameters === "") {
        contents.Parameters = [];
    }
    if (output["Parameters"] !== undefined && output["Parameters"]["Parameter"] !== undefined) {
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBParameterGroup(entry, context);
    });
};
const deserializeAws_queryDBParameterGroupNameMessage = (output, context) => {
    let contents = {
        DBParameterGroupName: undefined,
    };
    if (output["DBParameterGroupName"] !== undefined) {
        contents.DBParameterGroupName = output["DBParameterGroupName"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupsMessage = (output, context) => {
    let contents = {
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
        contents.DBParameterGroups = deserializeAws_queryDBParameterGroupList(smithy_client_1.getArrayIfSingleItem(output["DBParameterGroups"]["DBParameterGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryDBParameterGroupStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBParameterGroupStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBParameterGroupStatus(entry, context);
    });
};
const deserializeAws_queryDBSecurityGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryDBSecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSecurityGroupMembership(entry, context);
    });
};
const deserializeAws_queryDBSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSnapshotNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroup = (output, context) => {
    let contents = {
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
        contents.Subnets = deserializeAws_querySubnetList(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
    }
    if (output["DBSubnetGroupArn"] !== undefined) {
        contents.DBSubnetGroupArn = output["DBSubnetGroupArn"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZs = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupMessage = (output, context) => {
    let contents = {
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
        contents.DBSubnetGroups = deserializeAws_queryDBSubnetGroups(smithy_client_1.getArrayIfSingleItem(output["DBSubnetGroups"]["DBSubnetGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSubnetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSubnetGroup(entry, context);
    });
};
const deserializeAws_queryDBSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBUpgradeDependencyFailureFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDeleteDBClusterEndpointOutput = (output, context) => {
    let contents = {
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
        contents.StaticMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
const deserializeAws_queryDeleteDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBClusterSnapshotResult = (output, context) => {
    let contents = {
        DBClusterSnapshot: undefined,
    };
    if (output["DBClusterSnapshot"] !== undefined) {
        contents.DBClusterSnapshot = deserializeAws_queryDBClusterSnapshot(output["DBClusterSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteEventSubscriptionResult = (output, context) => {
    let contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeDBClusterSnapshotAttributesResult = (output, context) => {
    let contents = {
        DBClusterSnapshotAttributesResult: undefined,
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryDescribeEngineDefaultClusterParametersResult = (output, context) => {
    let contents = {
        EngineDefaults: undefined,
    };
    if (output["EngineDefaults"] !== undefined) {
        contents.EngineDefaults = deserializeAws_queryEngineDefaults(output["EngineDefaults"], context);
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
const deserializeAws_queryDescribeValidDBInstanceModificationsResult = (output, context) => {
    let contents = {
        ValidDBInstanceModificationsMessage: undefined,
    };
    if (output["ValidDBInstanceModificationsMessage"] !== undefined) {
        contents.ValidDBInstanceModificationsMessage = deserializeAws_queryValidDBInstanceModificationsMessage(output["ValidDBInstanceModificationsMessage"], context);
    }
    return contents;
};
const deserializeAws_queryDomainMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryDomainMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDomainMembership(entry, context);
    });
};
const deserializeAws_queryDomainNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDoubleRange = (output, context) => {
    let contents = {
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
const deserializeAws_queryDoubleRangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDoubleRange(entry, context);
    });
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
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
const deserializeAws_queryEngineDefaults = (output, context) => {
    let contents = {
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
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    return contents;
};
const deserializeAws_queryEvent = (output, context) => {
    let contents = {
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
        contents.EventCategories = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
    }
    if (output["Date"] !== undefined) {
        contents.Date = new Date(output["Date"]);
    }
    if (output["SourceArn"] !== undefined) {
        contents.SourceArn = output["SourceArn"];
    }
    return contents;
};
const deserializeAws_queryEventCategoriesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryEventCategoriesMap = (output, context) => {
    let contents = {
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
        contents.EventCategories = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
    }
    return contents;
};
const deserializeAws_queryEventCategoriesMapList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventCategoriesMap(entry, context);
    });
};
const deserializeAws_queryEventCategoriesMessage = (output, context) => {
    let contents = {
        EventCategoriesMapList: undefined,
    };
    if (output.EventCategoriesMapList === "") {
        contents.EventCategoriesMapList = [];
    }
    if (output["EventCategoriesMapList"] !== undefined &&
        output["EventCategoriesMapList"]["EventCategoriesMap"] !== undefined) {
        contents.EventCategoriesMapList = deserializeAws_queryEventCategoriesMapList(smithy_client_1.getArrayIfSingleItem(output["EventCategoriesMapList"]["EventCategoriesMap"]), context);
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
const deserializeAws_queryEventSubscription = (output, context) => {
    let contents = {
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
        contents.SourceIdsList = deserializeAws_querySourceIdsList(smithy_client_1.getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]), context);
    }
    if (output.EventCategoriesList === "") {
        contents.EventCategoriesList = [];
    }
    if (output["EventCategoriesList"] !== undefined && output["EventCategoriesList"]["EventCategory"] !== undefined) {
        contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategoriesList"]["EventCategory"]), context);
    }
    if (output["Enabled"] !== undefined) {
        contents.Enabled = output["Enabled"] == "true";
    }
    if (output["EventSubscriptionArn"] !== undefined) {
        contents.EventSubscriptionArn = output["EventSubscriptionArn"];
    }
    return contents;
};
const deserializeAws_queryEventSubscriptionQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEventSubscriptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventSubscription(entry, context);
    });
};
const deserializeAws_queryEventSubscriptionsMessage = (output, context) => {
    let contents = {
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
        contents.EventSubscriptionsList = deserializeAws_queryEventSubscriptionsList(smithy_client_1.getArrayIfSingleItem(output["EventSubscriptionsList"]["EventSubscription"]), context);
    }
    return contents;
};
const deserializeAws_queryFailoverDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryInstanceQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientDBClusterCapacityFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientDBInstanceCapacityFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientStorageClusterCapacityFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterEndpointStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterSnapshotStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBClusterStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBInstanceStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBParameterGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSecurityGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSnapshotStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSubnetGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBSubnetStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidEventSubscriptionStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidRestoreFault = (output, context) => {
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
const deserializeAws_queryInvalidVPCNetworkStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryKMSKeyNotAccessibleFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLogTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryModifyDBClusterEndpointOutput = (output, context) => {
    let contents = {
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
        contents.StaticMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["StaticMembers"]["member"]), context);
    }
    if (output.ExcludedMembers === "") {
        contents.ExcludedMembers = [];
    }
    if (output["ExcludedMembers"] !== undefined && output["ExcludedMembers"]["member"] !== undefined) {
        contents.ExcludedMembers = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["ExcludedMembers"]["member"]), context);
    }
    if (output["DBClusterEndpointArn"] !== undefined) {
        contents.DBClusterEndpointArn = output["DBClusterEndpointArn"];
    }
    return contents;
};
const deserializeAws_queryModifyDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBClusterSnapshotAttributeResult = (output, context) => {
    let contents = {
        DBClusterSnapshotAttributesResult: undefined,
    };
    if (output["DBClusterSnapshotAttributesResult"] !== undefined) {
        contents.DBClusterSnapshotAttributesResult = deserializeAws_queryDBClusterSnapshotAttributesResult(output["DBClusterSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSubnetGroupResult = (output, context) => {
    let contents = {
        DBSubnetGroup: undefined,
    };
    if (output["DBSubnetGroup"] !== undefined) {
        contents.DBSubnetGroup = deserializeAws_queryDBSubnetGroup(output["DBSubnetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyEventSubscriptionResult = (output, context) => {
    let contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryOptionGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryOptionGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionGroupMembership(entry, context);
    });
};
const deserializeAws_queryOptionGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOption = (output, context) => {
    let contents = {
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
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
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
const deserializeAws_queryOrderableDBInstanceOptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOrderableDBInstanceOption(entry, context);
    });
};
const deserializeAws_queryOrderableDBInstanceOptionsMessage = (output, context) => {
    let contents = {
        OrderableDBInstanceOptions: undefined,
        Marker: undefined,
    };
    if (output.OrderableDBInstanceOptions === "") {
        contents.OrderableDBInstanceOptions = [];
    }
    if (output["OrderableDBInstanceOptions"] !== undefined &&
        output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"] !== undefined) {
        contents.OrderableDBInstanceOptions = deserializeAws_queryOrderableDBInstanceOptionsList(smithy_client_1.getArrayIfSingleItem(output["OrderableDBInstanceOptions"]["OrderableDBInstanceOption"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryParameter = (output, context) => {
    let contents = {
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
const deserializeAws_queryPendingCloudwatchLogsExports = (output, context) => {
    let contents = {
        LogTypesToEnable: undefined,
        LogTypesToDisable: undefined,
    };
    if (output.LogTypesToEnable === "") {
        contents.LogTypesToEnable = [];
    }
    if (output["LogTypesToEnable"] !== undefined && output["LogTypesToEnable"]["member"] !== undefined) {
        contents.LogTypesToEnable = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["LogTypesToEnable"]["member"]), context);
    }
    if (output.LogTypesToDisable === "") {
        contents.LogTypesToDisable = [];
    }
    if (output["LogTypesToDisable"] !== undefined && output["LogTypesToDisable"]["member"] !== undefined) {
        contents.LogTypesToDisable = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["LogTypesToDisable"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryPendingMaintenanceAction = (output, context) => {
    let contents = {
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
const deserializeAws_queryPendingMaintenanceActionDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPendingMaintenanceAction(entry, context);
    });
};
const deserializeAws_queryPendingMaintenanceActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryResourcePendingMaintenanceActions(entry, context);
    });
};
const deserializeAws_queryPendingMaintenanceActionsMessage = (output, context) => {
    let contents = {
        PendingMaintenanceActions: undefined,
        Marker: undefined,
    };
    if (output.PendingMaintenanceActions === "") {
        contents.PendingMaintenanceActions = [];
    }
    if (output["PendingMaintenanceActions"] !== undefined &&
        output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"] !== undefined) {
        contents.PendingMaintenanceActions = deserializeAws_queryPendingMaintenanceActions(smithy_client_1.getArrayIfSingleItem(output["PendingMaintenanceActions"]["ResourcePendingMaintenanceActions"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
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
const deserializeAws_queryPromoteReadReplicaDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryProvisionedIopsNotAvailableInAZFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRange = (output, context) => {
    let contents = {
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
const deserializeAws_queryRangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRange(entry, context);
    });
};
const deserializeAws_queryReadReplicaDBClusterIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryReadReplicaDBInstanceIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryReadReplicaIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryRebootDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRemoveSourceIdentifierFromSubscriptionResult = (output, context) => {
    let contents = {
        EventSubscription: undefined,
    };
    if (output["EventSubscription"] !== undefined) {
        contents.EventSubscription = deserializeAws_queryEventSubscription(output["EventSubscription"], context);
    }
    return contents;
};
const deserializeAws_queryResourceNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResourcePendingMaintenanceActions = (output, context) => {
    let contents = {
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
        contents.PendingMaintenanceActionDetails = deserializeAws_queryPendingMaintenanceActionDetails(smithy_client_1.getArrayIfSingleItem(output["PendingMaintenanceActionDetails"]["PendingMaintenanceAction"]), context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBClusterFromSnapshotResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBClusterToPointInTimeResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_querySharedSnapshotQuotaExceededFault = (output, context) => {
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
const deserializeAws_querySNSInvalidTopicFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySNSNoAuthorizationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySNSTopicArnNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySourceIdsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySourceNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStartDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryStopDBClusterResult = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
    }
    return contents;
};
const deserializeAws_queryStorageQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStorageTypeNotSupportedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryStringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_querySubnet = (output, context) => {
    let contents = {
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
const deserializeAws_querySubnetAlreadyInUse = (output, context) => {
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
const deserializeAws_querySubscriptionAlreadyExistFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionCategoryNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySubscriptionNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySupportedCharacterSetsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCharacterSet(entry, context);
    });
};
const deserializeAws_querySupportedTimezonesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTimezone(entry, context);
    });
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
const deserializeAws_queryTimezone = (output, context) => {
    let contents = {
        TimezoneName: undefined,
    };
    if (output["TimezoneName"] !== undefined) {
        contents.TimezoneName = output["TimezoneName"];
    }
    return contents;
};
const deserializeAws_queryUpgradeTarget = (output, context) => {
    let contents = {
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
const deserializeAws_queryValidDBInstanceModificationsMessage = (output, context) => {
    let contents = {
        Storage: undefined,
    };
    if (output.Storage === "") {
        contents.Storage = [];
    }
    if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
        contents.Storage = deserializeAws_queryValidStorageOptionsList(smithy_client_1.getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]), context);
    }
    return contents;
};
const deserializeAws_queryValidStorageOptions = (output, context) => {
    let contents = {
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
        contents.StorageSize = deserializeAws_queryRangeList(smithy_client_1.getArrayIfSingleItem(output["StorageSize"]["Range"]), context);
    }
    if (output.ProvisionedIops === "") {
        contents.ProvisionedIops = [];
    }
    if (output["ProvisionedIops"] !== undefined && output["ProvisionedIops"]["Range"] !== undefined) {
        contents.ProvisionedIops = deserializeAws_queryRangeList(smithy_client_1.getArrayIfSingleItem(output["ProvisionedIops"]["Range"]), context);
    }
    if (output.IopsToStorageRatio === "") {
        contents.IopsToStorageRatio = [];
    }
    if (output["IopsToStorageRatio"] !== undefined && output["IopsToStorageRatio"]["DoubleRange"] !== undefined) {
        contents.IopsToStorageRatio = deserializeAws_queryDoubleRangeList(smithy_client_1.getArrayIfSingleItem(output["IopsToStorageRatio"]["DoubleRange"]), context);
    }
    return contents;
};
const deserializeAws_queryValidStorageOptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryValidStorageOptions(entry, context);
    });
};
const deserializeAws_queryValidUpgradeTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpgradeTarget(entry, context);
    });
};
const deserializeAws_queryVpcSecurityGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryVpcSecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVpcSecurityGroupMembership(entry, context);
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