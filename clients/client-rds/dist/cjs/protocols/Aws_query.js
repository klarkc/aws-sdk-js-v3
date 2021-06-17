"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryDescribeCustomAvailabilityZonesCommand = exports.serializeAws_queryDescribeCertificatesCommand = exports.serializeAws_queryDescribeAccountAttributesCommand = exports.serializeAws_queryDeregisterDBProxyTargetsCommand = exports.serializeAws_queryDeleteOptionGroupCommand = exports.serializeAws_queryDeleteInstallationMediaCommand = exports.serializeAws_queryDeleteGlobalClusterCommand = exports.serializeAws_queryDeleteEventSubscriptionCommand = exports.serializeAws_queryDeleteDBSubnetGroupCommand = exports.serializeAws_queryDeleteDBSnapshotCommand = exports.serializeAws_queryDeleteDBSecurityGroupCommand = exports.serializeAws_queryDeleteDBProxyEndpointCommand = exports.serializeAws_queryDeleteDBProxyCommand = exports.serializeAws_queryDeleteDBParameterGroupCommand = exports.serializeAws_queryDeleteDBInstanceAutomatedBackupCommand = exports.serializeAws_queryDeleteDBInstanceCommand = exports.serializeAws_queryDeleteDBClusterSnapshotCommand = exports.serializeAws_queryDeleteDBClusterParameterGroupCommand = exports.serializeAws_queryDeleteDBClusterEndpointCommand = exports.serializeAws_queryDeleteDBClusterCommand = exports.serializeAws_queryDeleteCustomAvailabilityZoneCommand = exports.serializeAws_queryCreateOptionGroupCommand = exports.serializeAws_queryCreateGlobalClusterCommand = exports.serializeAws_queryCreateEventSubscriptionCommand = exports.serializeAws_queryCreateDBSubnetGroupCommand = exports.serializeAws_queryCreateDBSnapshotCommand = exports.serializeAws_queryCreateDBSecurityGroupCommand = exports.serializeAws_queryCreateDBProxyEndpointCommand = exports.serializeAws_queryCreateDBProxyCommand = exports.serializeAws_queryCreateDBParameterGroupCommand = exports.serializeAws_queryCreateDBInstanceReadReplicaCommand = exports.serializeAws_queryCreateDBInstanceCommand = exports.serializeAws_queryCreateDBClusterSnapshotCommand = exports.serializeAws_queryCreateDBClusterParameterGroupCommand = exports.serializeAws_queryCreateDBClusterEndpointCommand = exports.serializeAws_queryCreateDBClusterCommand = exports.serializeAws_queryCreateCustomAvailabilityZoneCommand = exports.serializeAws_queryCopyOptionGroupCommand = exports.serializeAws_queryCopyDBSnapshotCommand = exports.serializeAws_queryCopyDBParameterGroupCommand = exports.serializeAws_queryCopyDBClusterSnapshotCommand = exports.serializeAws_queryCopyDBClusterParameterGroupCommand = exports.serializeAws_queryCancelExportTaskCommand = exports.serializeAws_queryBacktrackDBClusterCommand = exports.serializeAws_queryAuthorizeDBSecurityGroupIngressCommand = exports.serializeAws_queryApplyPendingMaintenanceActionCommand = exports.serializeAws_queryAddTagsToResourceCommand = exports.serializeAws_queryAddSourceIdentifierToSubscriptionCommand = exports.serializeAws_queryAddRoleToDBInstanceCommand = exports.serializeAws_queryAddRoleToDBClusterCommand = void 0;
exports.serializeAws_queryModifyDBParameterGroupCommand = exports.serializeAws_queryModifyDBInstanceCommand = exports.serializeAws_queryModifyDBClusterSnapshotAttributeCommand = exports.serializeAws_queryModifyDBClusterParameterGroupCommand = exports.serializeAws_queryModifyDBClusterEndpointCommand = exports.serializeAws_queryModifyDBClusterCommand = exports.serializeAws_queryModifyCurrentDBClusterCapacityCommand = exports.serializeAws_queryModifyCertificatesCommand = exports.serializeAws_queryListTagsForResourceCommand = exports.serializeAws_queryImportInstallationMediaCommand = exports.serializeAws_queryFailoverGlobalClusterCommand = exports.serializeAws_queryFailoverDBClusterCommand = exports.serializeAws_queryDownloadDBLogFilePortionCommand = exports.serializeAws_queryDescribeValidDBInstanceModificationsCommand = exports.serializeAws_queryDescribeSourceRegionsCommand = exports.serializeAws_queryDescribeReservedDBInstancesOfferingsCommand = exports.serializeAws_queryDescribeReservedDBInstancesCommand = exports.serializeAws_queryDescribePendingMaintenanceActionsCommand = exports.serializeAws_queryDescribeOrderableDBInstanceOptionsCommand = exports.serializeAws_queryDescribeOptionGroupsCommand = exports.serializeAws_queryDescribeOptionGroupOptionsCommand = exports.serializeAws_queryDescribeInstallationMediaCommand = exports.serializeAws_queryDescribeGlobalClustersCommand = exports.serializeAws_queryDescribeExportTasksCommand = exports.serializeAws_queryDescribeEventSubscriptionsCommand = exports.serializeAws_queryDescribeEventsCommand = exports.serializeAws_queryDescribeEventCategoriesCommand = exports.serializeAws_queryDescribeEngineDefaultParametersCommand = exports.serializeAws_queryDescribeEngineDefaultClusterParametersCommand = exports.serializeAws_queryDescribeDBSubnetGroupsCommand = exports.serializeAws_queryDescribeDBSnapshotsCommand = exports.serializeAws_queryDescribeDBSnapshotAttributesCommand = exports.serializeAws_queryDescribeDBSecurityGroupsCommand = exports.serializeAws_queryDescribeDBProxyTargetsCommand = exports.serializeAws_queryDescribeDBProxyTargetGroupsCommand = exports.serializeAws_queryDescribeDBProxyEndpointsCommand = exports.serializeAws_queryDescribeDBProxiesCommand = exports.serializeAws_queryDescribeDBParametersCommand = exports.serializeAws_queryDescribeDBParameterGroupsCommand = exports.serializeAws_queryDescribeDBLogFilesCommand = exports.serializeAws_queryDescribeDBInstancesCommand = exports.serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = exports.serializeAws_queryDescribeDBEngineVersionsCommand = exports.serializeAws_queryDescribeDBClusterSnapshotsCommand = exports.serializeAws_queryDescribeDBClusterSnapshotAttributesCommand = exports.serializeAws_queryDescribeDBClustersCommand = exports.serializeAws_queryDescribeDBClusterParametersCommand = exports.serializeAws_queryDescribeDBClusterParameterGroupsCommand = exports.serializeAws_queryDescribeDBClusterEndpointsCommand = exports.serializeAws_queryDescribeDBClusterBacktracksCommand = void 0;
exports.deserializeAws_queryCopyOptionGroupCommand = exports.deserializeAws_queryCopyDBSnapshotCommand = exports.deserializeAws_queryCopyDBParameterGroupCommand = exports.deserializeAws_queryCopyDBClusterSnapshotCommand = exports.deserializeAws_queryCopyDBClusterParameterGroupCommand = exports.deserializeAws_queryCancelExportTaskCommand = exports.deserializeAws_queryBacktrackDBClusterCommand = exports.deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand = exports.deserializeAws_queryApplyPendingMaintenanceActionCommand = exports.deserializeAws_queryAddTagsToResourceCommand = exports.deserializeAws_queryAddSourceIdentifierToSubscriptionCommand = exports.deserializeAws_queryAddRoleToDBInstanceCommand = exports.deserializeAws_queryAddRoleToDBClusterCommand = exports.serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = exports.serializeAws_queryStopDBInstanceCommand = exports.serializeAws_queryStopDBClusterCommand = exports.serializeAws_queryStopActivityStreamCommand = exports.serializeAws_queryStartExportTaskCommand = exports.serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = exports.serializeAws_queryStartDBInstanceCommand = exports.serializeAws_queryStartDBClusterCommand = exports.serializeAws_queryStartActivityStreamCommand = exports.serializeAws_queryRevokeDBSecurityGroupIngressCommand = exports.serializeAws_queryRestoreDBInstanceToPointInTimeCommand = exports.serializeAws_queryRestoreDBInstanceFromS3Command = exports.serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = exports.serializeAws_queryRestoreDBClusterToPointInTimeCommand = exports.serializeAws_queryRestoreDBClusterFromSnapshotCommand = exports.serializeAws_queryRestoreDBClusterFromS3Command = exports.serializeAws_queryResetDBParameterGroupCommand = exports.serializeAws_queryResetDBClusterParameterGroupCommand = exports.serializeAws_queryRemoveTagsFromResourceCommand = exports.serializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = exports.serializeAws_queryRemoveRoleFromDBInstanceCommand = exports.serializeAws_queryRemoveRoleFromDBClusterCommand = exports.serializeAws_queryRemoveFromGlobalClusterCommand = exports.serializeAws_queryRegisterDBProxyTargetsCommand = exports.serializeAws_queryRebootDBInstanceCommand = exports.serializeAws_queryPurchaseReservedDBInstancesOfferingCommand = exports.serializeAws_queryPromoteReadReplicaDBClusterCommand = exports.serializeAws_queryPromoteReadReplicaCommand = exports.serializeAws_queryModifyOptionGroupCommand = exports.serializeAws_queryModifyGlobalClusterCommand = exports.serializeAws_queryModifyEventSubscriptionCommand = exports.serializeAws_queryModifyDBSubnetGroupCommand = exports.serializeAws_queryModifyDBSnapshotAttributeCommand = exports.serializeAws_queryModifyDBSnapshotCommand = exports.serializeAws_queryModifyDBProxyTargetGroupCommand = exports.serializeAws_queryModifyDBProxyEndpointCommand = exports.serializeAws_queryModifyDBProxyCommand = void 0;
exports.deserializeAws_queryDescribeDBParametersCommand = exports.deserializeAws_queryDescribeDBParameterGroupsCommand = exports.deserializeAws_queryDescribeDBLogFilesCommand = exports.deserializeAws_queryDescribeDBInstancesCommand = exports.deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = exports.deserializeAws_queryDescribeDBEngineVersionsCommand = exports.deserializeAws_queryDescribeDBClusterSnapshotsCommand = exports.deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand = exports.deserializeAws_queryDescribeDBClustersCommand = exports.deserializeAws_queryDescribeDBClusterParametersCommand = exports.deserializeAws_queryDescribeDBClusterParameterGroupsCommand = exports.deserializeAws_queryDescribeDBClusterEndpointsCommand = exports.deserializeAws_queryDescribeDBClusterBacktracksCommand = exports.deserializeAws_queryDescribeCustomAvailabilityZonesCommand = exports.deserializeAws_queryDescribeCertificatesCommand = exports.deserializeAws_queryDescribeAccountAttributesCommand = exports.deserializeAws_queryDeregisterDBProxyTargetsCommand = exports.deserializeAws_queryDeleteOptionGroupCommand = exports.deserializeAws_queryDeleteInstallationMediaCommand = exports.deserializeAws_queryDeleteGlobalClusterCommand = exports.deserializeAws_queryDeleteEventSubscriptionCommand = exports.deserializeAws_queryDeleteDBSubnetGroupCommand = exports.deserializeAws_queryDeleteDBSnapshotCommand = exports.deserializeAws_queryDeleteDBSecurityGroupCommand = exports.deserializeAws_queryDeleteDBProxyEndpointCommand = exports.deserializeAws_queryDeleteDBProxyCommand = exports.deserializeAws_queryDeleteDBParameterGroupCommand = exports.deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand = exports.deserializeAws_queryDeleteDBInstanceCommand = exports.deserializeAws_queryDeleteDBClusterSnapshotCommand = exports.deserializeAws_queryDeleteDBClusterParameterGroupCommand = exports.deserializeAws_queryDeleteDBClusterEndpointCommand = exports.deserializeAws_queryDeleteDBClusterCommand = exports.deserializeAws_queryDeleteCustomAvailabilityZoneCommand = exports.deserializeAws_queryCreateOptionGroupCommand = exports.deserializeAws_queryCreateGlobalClusterCommand = exports.deserializeAws_queryCreateEventSubscriptionCommand = exports.deserializeAws_queryCreateDBSubnetGroupCommand = exports.deserializeAws_queryCreateDBSnapshotCommand = exports.deserializeAws_queryCreateDBSecurityGroupCommand = exports.deserializeAws_queryCreateDBProxyEndpointCommand = exports.deserializeAws_queryCreateDBProxyCommand = exports.deserializeAws_queryCreateDBParameterGroupCommand = exports.deserializeAws_queryCreateDBInstanceReadReplicaCommand = exports.deserializeAws_queryCreateDBInstanceCommand = exports.deserializeAws_queryCreateDBClusterSnapshotCommand = exports.deserializeAws_queryCreateDBClusterParameterGroupCommand = exports.deserializeAws_queryCreateDBClusterEndpointCommand = exports.deserializeAws_queryCreateDBClusterCommand = exports.deserializeAws_queryCreateCustomAvailabilityZoneCommand = void 0;
exports.deserializeAws_queryRebootDBInstanceCommand = exports.deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand = exports.deserializeAws_queryPromoteReadReplicaDBClusterCommand = exports.deserializeAws_queryPromoteReadReplicaCommand = exports.deserializeAws_queryModifyOptionGroupCommand = exports.deserializeAws_queryModifyGlobalClusterCommand = exports.deserializeAws_queryModifyEventSubscriptionCommand = exports.deserializeAws_queryModifyDBSubnetGroupCommand = exports.deserializeAws_queryModifyDBSnapshotAttributeCommand = exports.deserializeAws_queryModifyDBSnapshotCommand = exports.deserializeAws_queryModifyDBProxyTargetGroupCommand = exports.deserializeAws_queryModifyDBProxyEndpointCommand = exports.deserializeAws_queryModifyDBProxyCommand = exports.deserializeAws_queryModifyDBParameterGroupCommand = exports.deserializeAws_queryModifyDBInstanceCommand = exports.deserializeAws_queryModifyDBClusterSnapshotAttributeCommand = exports.deserializeAws_queryModifyDBClusterParameterGroupCommand = exports.deserializeAws_queryModifyDBClusterEndpointCommand = exports.deserializeAws_queryModifyDBClusterCommand = exports.deserializeAws_queryModifyCurrentDBClusterCapacityCommand = exports.deserializeAws_queryModifyCertificatesCommand = exports.deserializeAws_queryListTagsForResourceCommand = exports.deserializeAws_queryImportInstallationMediaCommand = exports.deserializeAws_queryFailoverGlobalClusterCommand = exports.deserializeAws_queryFailoverDBClusterCommand = exports.deserializeAws_queryDownloadDBLogFilePortionCommand = exports.deserializeAws_queryDescribeValidDBInstanceModificationsCommand = exports.deserializeAws_queryDescribeSourceRegionsCommand = exports.deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand = exports.deserializeAws_queryDescribeReservedDBInstancesCommand = exports.deserializeAws_queryDescribePendingMaintenanceActionsCommand = exports.deserializeAws_queryDescribeOrderableDBInstanceOptionsCommand = exports.deserializeAws_queryDescribeOptionGroupsCommand = exports.deserializeAws_queryDescribeOptionGroupOptionsCommand = exports.deserializeAws_queryDescribeInstallationMediaCommand = exports.deserializeAws_queryDescribeGlobalClustersCommand = exports.deserializeAws_queryDescribeExportTasksCommand = exports.deserializeAws_queryDescribeEventSubscriptionsCommand = exports.deserializeAws_queryDescribeEventsCommand = exports.deserializeAws_queryDescribeEventCategoriesCommand = exports.deserializeAws_queryDescribeEngineDefaultParametersCommand = exports.deserializeAws_queryDescribeEngineDefaultClusterParametersCommand = exports.deserializeAws_queryDescribeDBSubnetGroupsCommand = exports.deserializeAws_queryDescribeDBSnapshotsCommand = exports.deserializeAws_queryDescribeDBSnapshotAttributesCommand = exports.deserializeAws_queryDescribeDBSecurityGroupsCommand = exports.deserializeAws_queryDescribeDBProxyTargetsCommand = exports.deserializeAws_queryDescribeDBProxyTargetGroupsCommand = exports.deserializeAws_queryDescribeDBProxyEndpointsCommand = exports.deserializeAws_queryDescribeDBProxiesCommand = void 0;
exports.deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = exports.deserializeAws_queryStopDBInstanceCommand = exports.deserializeAws_queryStopDBClusterCommand = exports.deserializeAws_queryStopActivityStreamCommand = exports.deserializeAws_queryStartExportTaskCommand = exports.deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = exports.deserializeAws_queryStartDBInstanceCommand = exports.deserializeAws_queryStartDBClusterCommand = exports.deserializeAws_queryStartActivityStreamCommand = exports.deserializeAws_queryRevokeDBSecurityGroupIngressCommand = exports.deserializeAws_queryRestoreDBInstanceToPointInTimeCommand = exports.deserializeAws_queryRestoreDBInstanceFromS3Command = exports.deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = exports.deserializeAws_queryRestoreDBClusterToPointInTimeCommand = exports.deserializeAws_queryRestoreDBClusterFromSnapshotCommand = exports.deserializeAws_queryRestoreDBClusterFromS3Command = exports.deserializeAws_queryResetDBParameterGroupCommand = exports.deserializeAws_queryResetDBClusterParameterGroupCommand = exports.deserializeAws_queryRemoveTagsFromResourceCommand = exports.deserializeAws_queryRemoveSourceIdentifierFromSubscriptionCommand = exports.deserializeAws_queryRemoveRoleFromDBInstanceCommand = exports.deserializeAws_queryRemoveRoleFromDBClusterCommand = exports.deserializeAws_queryRemoveFromGlobalClusterCommand = exports.deserializeAws_queryRegisterDBProxyTargetsCommand = void 0;
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
const serializeAws_queryAddRoleToDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAddRoleToDBInstanceMessage(input, context),
        Action: "AddRoleToDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddRoleToDBInstanceCommand = serializeAws_queryAddRoleToDBInstanceCommand;
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
const serializeAws_queryAuthorizeDBSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAuthorizeDBSecurityGroupIngressMessage(input, context),
        Action: "AuthorizeDBSecurityGroupIngress",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAuthorizeDBSecurityGroupIngressCommand = serializeAws_queryAuthorizeDBSecurityGroupIngressCommand;
const serializeAws_queryBacktrackDBClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBacktrackDBClusterMessage(input, context),
        Action: "BacktrackDBCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBacktrackDBClusterCommand = serializeAws_queryBacktrackDBClusterCommand;
const serializeAws_queryCancelExportTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCancelExportTaskMessage(input, context),
        Action: "CancelExportTask",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCancelExportTaskCommand = serializeAws_queryCancelExportTaskCommand;
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
const serializeAws_queryCopyDBSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyDBSnapshotMessage(input, context),
        Action: "CopyDBSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyDBSnapshotCommand = serializeAws_queryCopyDBSnapshotCommand;
const serializeAws_queryCopyOptionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyOptionGroupMessage(input, context),
        Action: "CopyOptionGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyOptionGroupCommand = serializeAws_queryCopyOptionGroupCommand;
const serializeAws_queryCreateCustomAvailabilityZoneCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateCustomAvailabilityZoneMessage(input, context),
        Action: "CreateCustomAvailabilityZone",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateCustomAvailabilityZoneCommand = serializeAws_queryCreateCustomAvailabilityZoneCommand;
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
const serializeAws_queryCreateDBInstanceReadReplicaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBInstanceReadReplicaMessage(input, context),
        Action: "CreateDBInstanceReadReplica",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBInstanceReadReplicaCommand = serializeAws_queryCreateDBInstanceReadReplicaCommand;
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
const serializeAws_queryCreateDBProxyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBProxyRequest(input, context),
        Action: "CreateDBProxy",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBProxyCommand = serializeAws_queryCreateDBProxyCommand;
const serializeAws_queryCreateDBProxyEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBProxyEndpointRequest(input, context),
        Action: "CreateDBProxyEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBProxyEndpointCommand = serializeAws_queryCreateDBProxyEndpointCommand;
const serializeAws_queryCreateDBSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBSecurityGroupMessage(input, context),
        Action: "CreateDBSecurityGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBSecurityGroupCommand = serializeAws_queryCreateDBSecurityGroupCommand;
const serializeAws_queryCreateDBSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateDBSnapshotMessage(input, context),
        Action: "CreateDBSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateDBSnapshotCommand = serializeAws_queryCreateDBSnapshotCommand;
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
const serializeAws_queryCreateGlobalClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateGlobalClusterMessage(input, context),
        Action: "CreateGlobalCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateGlobalClusterCommand = serializeAws_queryCreateGlobalClusterCommand;
const serializeAws_queryCreateOptionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateOptionGroupMessage(input, context),
        Action: "CreateOptionGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateOptionGroupCommand = serializeAws_queryCreateOptionGroupCommand;
const serializeAws_queryDeleteCustomAvailabilityZoneCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteCustomAvailabilityZoneMessage(input, context),
        Action: "DeleteCustomAvailabilityZone",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteCustomAvailabilityZoneCommand = serializeAws_queryDeleteCustomAvailabilityZoneCommand;
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
const serializeAws_queryDeleteDBInstanceAutomatedBackupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBInstanceAutomatedBackupMessage(input, context),
        Action: "DeleteDBInstanceAutomatedBackup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBInstanceAutomatedBackupCommand = serializeAws_queryDeleteDBInstanceAutomatedBackupCommand;
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
const serializeAws_queryDeleteDBProxyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBProxyRequest(input, context),
        Action: "DeleteDBProxy",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBProxyCommand = serializeAws_queryDeleteDBProxyCommand;
const serializeAws_queryDeleteDBProxyEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBProxyEndpointRequest(input, context),
        Action: "DeleteDBProxyEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBProxyEndpointCommand = serializeAws_queryDeleteDBProxyEndpointCommand;
const serializeAws_queryDeleteDBSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBSecurityGroupMessage(input, context),
        Action: "DeleteDBSecurityGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBSecurityGroupCommand = serializeAws_queryDeleteDBSecurityGroupCommand;
const serializeAws_queryDeleteDBSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteDBSnapshotMessage(input, context),
        Action: "DeleteDBSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteDBSnapshotCommand = serializeAws_queryDeleteDBSnapshotCommand;
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
const serializeAws_queryDeleteGlobalClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteGlobalClusterMessage(input, context),
        Action: "DeleteGlobalCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteGlobalClusterCommand = serializeAws_queryDeleteGlobalClusterCommand;
const serializeAws_queryDeleteInstallationMediaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteInstallationMediaMessage(input, context),
        Action: "DeleteInstallationMedia",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteInstallationMediaCommand = serializeAws_queryDeleteInstallationMediaCommand;
const serializeAws_queryDeleteOptionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteOptionGroupMessage(input, context),
        Action: "DeleteOptionGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteOptionGroupCommand = serializeAws_queryDeleteOptionGroupCommand;
const serializeAws_queryDeregisterDBProxyTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeregisterDBProxyTargetsRequest(input, context),
        Action: "DeregisterDBProxyTargets",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeregisterDBProxyTargetsCommand = serializeAws_queryDeregisterDBProxyTargetsCommand;
const serializeAws_queryDescribeAccountAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAccountAttributesMessage(input, context),
        Action: "DescribeAccountAttributes",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
const serializeAws_queryDescribeCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCertificatesMessage(input, context),
        Action: "DescribeCertificates",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCertificatesCommand = serializeAws_queryDescribeCertificatesCommand;
const serializeAws_queryDescribeCustomAvailabilityZonesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeCustomAvailabilityZonesMessage(input, context),
        Action: "DescribeCustomAvailabilityZones",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeCustomAvailabilityZonesCommand = serializeAws_queryDescribeCustomAvailabilityZonesCommand;
const serializeAws_queryDescribeDBClusterBacktracksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBClusterBacktracksMessage(input, context),
        Action: "DescribeDBClusterBacktracks",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBClusterBacktracksCommand = serializeAws_queryDescribeDBClusterBacktracksCommand;
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
const serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage(input, context),
        Action: "DescribeDBInstanceAutomatedBackups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand;
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
const serializeAws_queryDescribeDBLogFilesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBLogFilesMessage(input, context),
        Action: "DescribeDBLogFiles",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBLogFilesCommand = serializeAws_queryDescribeDBLogFilesCommand;
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
const serializeAws_queryDescribeDBProxiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBProxiesRequest(input, context),
        Action: "DescribeDBProxies",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBProxiesCommand = serializeAws_queryDescribeDBProxiesCommand;
const serializeAws_queryDescribeDBProxyEndpointsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBProxyEndpointsRequest(input, context),
        Action: "DescribeDBProxyEndpoints",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBProxyEndpointsCommand = serializeAws_queryDescribeDBProxyEndpointsCommand;
const serializeAws_queryDescribeDBProxyTargetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBProxyTargetGroupsRequest(input, context),
        Action: "DescribeDBProxyTargetGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBProxyTargetGroupsCommand = serializeAws_queryDescribeDBProxyTargetGroupsCommand;
const serializeAws_queryDescribeDBProxyTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBProxyTargetsRequest(input, context),
        Action: "DescribeDBProxyTargets",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBProxyTargetsCommand = serializeAws_queryDescribeDBProxyTargetsCommand;
const serializeAws_queryDescribeDBSecurityGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBSecurityGroupsMessage(input, context),
        Action: "DescribeDBSecurityGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBSecurityGroupsCommand = serializeAws_queryDescribeDBSecurityGroupsCommand;
const serializeAws_queryDescribeDBSnapshotAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBSnapshotAttributesMessage(input, context),
        Action: "DescribeDBSnapshotAttributes",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBSnapshotAttributesCommand = serializeAws_queryDescribeDBSnapshotAttributesCommand;
const serializeAws_queryDescribeDBSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDBSnapshotsMessage(input, context),
        Action: "DescribeDBSnapshots",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDBSnapshotsCommand = serializeAws_queryDescribeDBSnapshotsCommand;
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
const serializeAws_queryDescribeExportTasksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeExportTasksMessage(input, context),
        Action: "DescribeExportTasks",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeExportTasksCommand = serializeAws_queryDescribeExportTasksCommand;
const serializeAws_queryDescribeGlobalClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeGlobalClustersMessage(input, context),
        Action: "DescribeGlobalClusters",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeGlobalClustersCommand = serializeAws_queryDescribeGlobalClustersCommand;
const serializeAws_queryDescribeInstallationMediaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeInstallationMediaMessage(input, context),
        Action: "DescribeInstallationMedia",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeInstallationMediaCommand = serializeAws_queryDescribeInstallationMediaCommand;
const serializeAws_queryDescribeOptionGroupOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeOptionGroupOptionsMessage(input, context),
        Action: "DescribeOptionGroupOptions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeOptionGroupOptionsCommand = serializeAws_queryDescribeOptionGroupOptionsCommand;
const serializeAws_queryDescribeOptionGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeOptionGroupsMessage(input, context),
        Action: "DescribeOptionGroups",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeOptionGroupsCommand = serializeAws_queryDescribeOptionGroupsCommand;
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
const serializeAws_queryDescribeReservedDBInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedDBInstancesMessage(input, context),
        Action: "DescribeReservedDBInstances",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedDBInstancesCommand = serializeAws_queryDescribeReservedDBInstancesCommand;
const serializeAws_queryDescribeReservedDBInstancesOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedDBInstancesOfferingsMessage(input, context),
        Action: "DescribeReservedDBInstancesOfferings",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedDBInstancesOfferingsCommand = serializeAws_queryDescribeReservedDBInstancesOfferingsCommand;
const serializeAws_queryDescribeSourceRegionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSourceRegionsMessage(input, context),
        Action: "DescribeSourceRegions",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSourceRegionsCommand = serializeAws_queryDescribeSourceRegionsCommand;
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
const serializeAws_queryDownloadDBLogFilePortionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDownloadDBLogFilePortionMessage(input, context),
        Action: "DownloadDBLogFilePortion",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDownloadDBLogFilePortionCommand = serializeAws_queryDownloadDBLogFilePortionCommand;
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
const serializeAws_queryFailoverGlobalClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryFailoverGlobalClusterMessage(input, context),
        Action: "FailoverGlobalCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryFailoverGlobalClusterCommand = serializeAws_queryFailoverGlobalClusterCommand;
const serializeAws_queryImportInstallationMediaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryImportInstallationMediaMessage(input, context),
        Action: "ImportInstallationMedia",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryImportInstallationMediaCommand = serializeAws_queryImportInstallationMediaCommand;
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
const serializeAws_queryModifyCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyCertificatesMessage(input, context),
        Action: "ModifyCertificates",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyCertificatesCommand = serializeAws_queryModifyCertificatesCommand;
const serializeAws_queryModifyCurrentDBClusterCapacityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyCurrentDBClusterCapacityMessage(input, context),
        Action: "ModifyCurrentDBClusterCapacity",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyCurrentDBClusterCapacityCommand = serializeAws_queryModifyCurrentDBClusterCapacityCommand;
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
const serializeAws_queryModifyDBProxyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBProxyRequest(input, context),
        Action: "ModifyDBProxy",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBProxyCommand = serializeAws_queryModifyDBProxyCommand;
const serializeAws_queryModifyDBProxyEndpointCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBProxyEndpointRequest(input, context),
        Action: "ModifyDBProxyEndpoint",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBProxyEndpointCommand = serializeAws_queryModifyDBProxyEndpointCommand;
const serializeAws_queryModifyDBProxyTargetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBProxyTargetGroupRequest(input, context),
        Action: "ModifyDBProxyTargetGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBProxyTargetGroupCommand = serializeAws_queryModifyDBProxyTargetGroupCommand;
const serializeAws_queryModifyDBSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBSnapshotMessage(input, context),
        Action: "ModifyDBSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBSnapshotCommand = serializeAws_queryModifyDBSnapshotCommand;
const serializeAws_queryModifyDBSnapshotAttributeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyDBSnapshotAttributeMessage(input, context),
        Action: "ModifyDBSnapshotAttribute",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyDBSnapshotAttributeCommand = serializeAws_queryModifyDBSnapshotAttributeCommand;
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
const serializeAws_queryModifyGlobalClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyGlobalClusterMessage(input, context),
        Action: "ModifyGlobalCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyGlobalClusterCommand = serializeAws_queryModifyGlobalClusterCommand;
const serializeAws_queryModifyOptionGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyOptionGroupMessage(input, context),
        Action: "ModifyOptionGroup",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyOptionGroupCommand = serializeAws_queryModifyOptionGroupCommand;
const serializeAws_queryPromoteReadReplicaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPromoteReadReplicaMessage(input, context),
        Action: "PromoteReadReplica",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPromoteReadReplicaCommand = serializeAws_queryPromoteReadReplicaCommand;
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
const serializeAws_queryPurchaseReservedDBInstancesOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPurchaseReservedDBInstancesOfferingMessage(input, context),
        Action: "PurchaseReservedDBInstancesOffering",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPurchaseReservedDBInstancesOfferingCommand = serializeAws_queryPurchaseReservedDBInstancesOfferingCommand;
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
const serializeAws_queryRegisterDBProxyTargetsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRegisterDBProxyTargetsRequest(input, context),
        Action: "RegisterDBProxyTargets",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRegisterDBProxyTargetsCommand = serializeAws_queryRegisterDBProxyTargetsCommand;
const serializeAws_queryRemoveFromGlobalClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveFromGlobalClusterMessage(input, context),
        Action: "RemoveFromGlobalCluster",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveFromGlobalClusterCommand = serializeAws_queryRemoveFromGlobalClusterCommand;
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
const serializeAws_queryRemoveRoleFromDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRemoveRoleFromDBInstanceMessage(input, context),
        Action: "RemoveRoleFromDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRemoveRoleFromDBInstanceCommand = serializeAws_queryRemoveRoleFromDBInstanceCommand;
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
const serializeAws_queryRestoreDBClusterFromS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBClusterFromS3Message(input, context),
        Action: "RestoreDBClusterFromS3",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBClusterFromS3Command = serializeAws_queryRestoreDBClusterFromS3Command;
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
const serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage(input, context),
        Action: "RestoreDBInstanceFromDBSnapshot",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand;
const serializeAws_queryRestoreDBInstanceFromS3Command = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBInstanceFromS3Message(input, context),
        Action: "RestoreDBInstanceFromS3",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBInstanceFromS3Command = serializeAws_queryRestoreDBInstanceFromS3Command;
const serializeAws_queryRestoreDBInstanceToPointInTimeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreDBInstanceToPointInTimeMessage(input, context),
        Action: "RestoreDBInstanceToPointInTime",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreDBInstanceToPointInTimeCommand = serializeAws_queryRestoreDBInstanceToPointInTimeCommand;
const serializeAws_queryRevokeDBSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRevokeDBSecurityGroupIngressMessage(input, context),
        Action: "RevokeDBSecurityGroupIngress",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRevokeDBSecurityGroupIngressCommand = serializeAws_queryRevokeDBSecurityGroupIngressCommand;
const serializeAws_queryStartActivityStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartActivityStreamRequest(input, context),
        Action: "StartActivityStream",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartActivityStreamCommand = serializeAws_queryStartActivityStreamCommand;
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
const serializeAws_queryStartDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartDBInstanceMessage(input, context),
        Action: "StartDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartDBInstanceCommand = serializeAws_queryStartDBInstanceCommand;
const serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage(input, context),
        Action: "StartDBInstanceAutomatedBackupsReplication",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand;
const serializeAws_queryStartExportTaskCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStartExportTaskMessage(input, context),
        Action: "StartExportTask",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStartExportTaskCommand = serializeAws_queryStartExportTaskCommand;
const serializeAws_queryStopActivityStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStopActivityStreamRequest(input, context),
        Action: "StopActivityStream",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopActivityStreamCommand = serializeAws_queryStopActivityStreamCommand;
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
const serializeAws_queryStopDBInstanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStopDBInstanceMessage(input, context),
        Action: "StopDBInstance",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopDBInstanceCommand = serializeAws_queryStopDBInstanceCommand;
const serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage(input, context),
        Action: "StopDBInstanceAutomatedBackupsReplication",
        Version: "2014-10-31",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand;
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleAlreadyExistsFault":
        case "com.amazonaws.rds#DBClusterRoleAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterRoleQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
const deserializeAws_queryAddRoleToDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddRoleToDBInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddRoleToDBInstanceCommand = deserializeAws_queryAddRoleToDBInstanceCommand;
const deserializeAws_queryAddRoleToDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceRoleAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceRoleAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceRoleQuotaExceededFault":
        case "com.amazonaws.rds#DBInstanceRoleQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
        case "com.amazonaws.rds#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.rds#ResourceNotFoundFault":
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
const deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeDBSecurityGroupIngressResult(data.AuthorizeDBSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand = deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand;
const deserializeAws_queryAuthorizeDBSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "com.amazonaws.rds#AuthorizationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationQuotaExceededFault":
        case "com.amazonaws.rds#AuthorizationQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryBacktrackDBClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBacktrackDBClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterBacktrack(data.BacktrackDBClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBacktrackDBClusterCommand = deserializeAws_queryBacktrackDBClusterCommand;
const deserializeAws_queryBacktrackDBClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
const deserializeAws_queryCancelExportTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCancelExportTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryExportTask(data.CancelExportTaskResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCancelExportTaskCommand = deserializeAws_queryCancelExportTaskCommand;
const deserializeAws_queryCancelExportTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportTaskNotFoundFault":
        case "com.amazonaws.rds#ExportTaskNotFoundFault":
            response = {
                ...(await deserializeAws_queryExportTaskNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExportTaskStateFault":
        case "com.amazonaws.rds#InvalidExportTaskStateFault":
            response = {
                ...(await deserializeAws_queryInvalidExportTaskStateFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
        case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
        case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
const deserializeAws_queryCopyDBSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyDBSnapshotResult(data.CopyDBSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyDBSnapshotCommand = deserializeAws_queryCopyDBSnapshotCommand;
const deserializeAws_queryCopyDBSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
const deserializeAws_queryCopyOptionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyOptionGroupResult(data.CopyOptionGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyOptionGroupCommand = deserializeAws_queryCopyOptionGroupCommand;
const deserializeAws_queryCopyOptionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupAlreadyExistsFault":
        case "com.amazonaws.rds#OptionGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupQuotaExceededFault":
        case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateCustomAvailabilityZoneCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateCustomAvailabilityZoneCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateCustomAvailabilityZoneResult(data.CreateCustomAvailabilityZoneResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateCustomAvailabilityZoneCommand = deserializeAws_queryCreateCustomAvailabilityZoneCommand;
const deserializeAws_queryCreateCustomAvailabilityZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneAlreadyExistsFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CustomAvailabilityZoneQuotaExceededFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalClusterStateFault":
        case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
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
    contents = deserializeAws_queryDBClusterEndpoint(data.CreateDBClusterEndpointResult, context);
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
        case "com.amazonaws.rds#DBClusterEndpointAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterEndpointQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterEndpointQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
        case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupPolicyNotFoundFault":
        case "com.amazonaws.rds#BackupPolicyNotFoundFault":
            response = {
                ...(await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.rds#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
const deserializeAws_queryCreateDBInstanceReadReplicaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBInstanceReadReplicaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBInstanceReadReplicaResult(data.CreateDBInstanceReadReplicaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBInstanceReadReplicaCommand = deserializeAws_queryCreateDBInstanceReadReplicaCommand;
const deserializeAws_queryCreateDBInstanceReadReplicaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotAllowedFault":
        case "com.amazonaws.rds#DBSubnetGroupNotAllowedFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.rds#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupFault":
        case "com.amazonaws.rds#InvalidDBSubnetGroupFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
        case "com.amazonaws.rds#DBParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBParameterGroupQuotaExceededFault":
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
const deserializeAws_queryCreateDBProxyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBProxyResponse(data.CreateDBProxyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBProxyCommand = deserializeAws_queryCreateDBProxyCommand;
const deserializeAws_queryCreateDBProxyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyAlreadyExistsFault":
        case "com.amazonaws.rds#DBProxyAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyQuotaExceededFault":
        case "com.amazonaws.rds#DBProxyQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBProxyQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
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
const deserializeAws_queryCreateDBProxyEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBProxyEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBProxyEndpointResponse(data.CreateDBProxyEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBProxyEndpointCommand = deserializeAws_queryCreateDBProxyEndpointCommand;
const deserializeAws_queryCreateDBProxyEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyEndpointAlreadyExistsFault":
        case "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyEndpointQuotaExceededFault":
        case "com.amazonaws.rds#DBProxyEndpointQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
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
const deserializeAws_queryCreateDBSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSecurityGroupResult(data.CreateDBSecurityGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBSecurityGroupCommand = deserializeAws_queryCreateDBSecurityGroupCommand;
const deserializeAws_queryCreateDBSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupAlreadyExistsFault":
        case "com.amazonaws.rds#DBSecurityGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotSupportedFault":
        case "com.amazonaws.rds#DBSecurityGroupNotSupportedFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBSecurityGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateDBSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateDBSnapshotResult(data.CreateDBSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateDBSnapshotCommand = deserializeAws_queryCreateDBSnapshotCommand;
const deserializeAws_queryCreateDBSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
        case "com.amazonaws.rds#DBSubnetGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupQuotaExceededFault":
        case "com.amazonaws.rds#DBSubnetGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetQuotaExceededFault":
        case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
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
        case "com.amazonaws.rds#EventSubscriptionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.rds#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.rds#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.rds#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceNotFoundFault":
        case "com.amazonaws.rds#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionAlreadyExistFault":
        case "com.amazonaws.rds#SubscriptionAlreadyExistFault":
            response = {
                ...(await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
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
const deserializeAws_queryCreateGlobalClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateGlobalClusterResult(data.CreateGlobalClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateGlobalClusterCommand = deserializeAws_queryCreateGlobalClusterCommand;
const deserializeAws_queryCreateGlobalClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalClusterAlreadyExistsFault":
        case "com.amazonaws.rds#GlobalClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalClusterQuotaExceededFault":
        case "com.amazonaws.rds#GlobalClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
const deserializeAws_queryCreateOptionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateOptionGroupResult(data.CreateOptionGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateOptionGroupCommand = deserializeAws_queryCreateOptionGroupCommand;
const deserializeAws_queryCreateOptionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupAlreadyExistsFault":
        case "com.amazonaws.rds#OptionGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryOptionGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupQuotaExceededFault":
        case "com.amazonaws.rds#OptionGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryOptionGroupQuotaExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteCustomAvailabilityZoneCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteCustomAvailabilityZoneCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteCustomAvailabilityZoneResult(data.DeleteCustomAvailabilityZoneResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteCustomAvailabilityZoneCommand = deserializeAws_queryDeleteCustomAvailabilityZoneCommand;
const deserializeAws_queryDeleteCustomAvailabilityZoneCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
    contents = deserializeAws_queryDBClusterEndpoint(data.DeleteDBClusterEndpointResult, context);
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
        case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
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
        case "DBInstanceAutomatedBackupQuotaExceededFault":
        case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
const deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBInstanceAutomatedBackupResult(data.DeleteDBInstanceAutomatedBackupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand = deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand;
const deserializeAws_queryDeleteDBInstanceAutomatedBackupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceAutomatedBackupStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceAutomatedBackupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
const deserializeAws_queryDeleteDBProxyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBProxyResponse(data.DeleteDBProxyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBProxyCommand = deserializeAws_queryDeleteDBProxyCommand;
const deserializeAws_queryDeleteDBProxyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBProxyEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBProxyEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBProxyEndpointResponse(data.DeleteDBProxyEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBProxyEndpointCommand = deserializeAws_queryDeleteDBProxyEndpointCommand;
const deserializeAws_queryDeleteDBProxyEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyEndpointNotFoundFault":
        case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyEndpointStateFault":
        case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBSecurityGroupCommand = deserializeAws_queryDeleteDBSecurityGroupCommand;
const deserializeAws_queryDeleteDBSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteDBSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteDBSnapshotResult(data.DeleteDBSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteDBSnapshotCommand = deserializeAws_queryDeleteDBSnapshotCommand;
const deserializeAws_queryDeleteDBSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetStateFault":
        case "com.amazonaws.rds#InvalidDBSubnetStateFault":
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
        case "com.amazonaws.rds#InvalidEventSubscriptionStateFault":
            response = {
                ...(await deserializeAws_queryInvalidEventSubscriptionStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
const deserializeAws_queryDeleteGlobalClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteGlobalClusterResult(data.DeleteGlobalClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteGlobalClusterCommand = deserializeAws_queryDeleteGlobalClusterCommand;
const deserializeAws_queryDeleteGlobalClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalClusterStateFault":
        case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteInstallationMediaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMedia(data.DeleteInstallationMediaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteInstallationMediaCommand = deserializeAws_queryDeleteInstallationMediaCommand;
const deserializeAws_queryDeleteInstallationMediaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstallationMediaNotFoundFault":
        case "com.amazonaws.rds#InstallationMediaNotFoundFault":
            response = {
                ...(await deserializeAws_queryInstallationMediaNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteOptionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteOptionGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteOptionGroupCommand = deserializeAws_queryDeleteOptionGroupCommand;
const deserializeAws_queryDeleteOptionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOptionGroupStateFault":
        case "com.amazonaws.rds#InvalidOptionGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeregisterDBProxyTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeregisterDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeregisterDBProxyTargetsResponse(data.DeregisterDBProxyTargetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeregisterDBProxyTargetsCommand = deserializeAws_queryDeregisterDBProxyTargetsCommand;
const deserializeAws_queryDeregisterDBProxyTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeAccountAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeAccountAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAccountAttributesMessage(data.DescribeAccountAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeAccountAttributesCommand = deserializeAws_queryDescribeAccountAttributesCommand;
const deserializeAws_queryDescribeAccountAttributesCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCertificateMessage(data.DescribeCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCertificatesCommand = deserializeAws_queryDescribeCertificatesCommand;
const deserializeAws_queryDescribeCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundFault":
        case "com.amazonaws.rds#CertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeCustomAvailabilityZonesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeCustomAvailabilityZonesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCustomAvailabilityZoneMessage(data.DescribeCustomAvailabilityZonesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeCustomAvailabilityZonesCommand = deserializeAws_queryDescribeCustomAvailabilityZonesCommand;
const deserializeAws_queryDescribeCustomAvailabilityZonesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBClusterBacktracksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBClusterBacktracksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterBacktrackMessage(data.DescribeDBClusterBacktracksResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBClusterBacktracksCommand = deserializeAws_queryDescribeDBClusterBacktracksCommand;
const deserializeAws_queryDescribeDBClusterBacktracksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterBacktrackNotFoundFault":
        case "com.amazonaws.rds#DBClusterBacktrackNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
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
const deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBInstanceAutomatedBackupMessage(data.DescribeDBInstanceAutomatedBackupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand = deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand;
const deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
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
const deserializeAws_queryDescribeDBLogFilesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBLogFilesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBLogFilesResponse(data.DescribeDBLogFilesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBLogFilesCommand = deserializeAws_queryDescribeDBLogFilesCommand;
const deserializeAws_queryDescribeDBLogFilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
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
const deserializeAws_queryDescribeDBProxiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBProxiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxiesResponse(data.DescribeDBProxiesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBProxiesCommand = deserializeAws_queryDescribeDBProxiesCommand;
const deserializeAws_queryDescribeDBProxiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBProxyEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBProxyEndpointsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxyEndpointsResponse(data.DescribeDBProxyEndpointsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBProxyEndpointsCommand = deserializeAws_queryDescribeDBProxyEndpointsCommand;
const deserializeAws_queryDescribeDBProxyEndpointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyEndpointNotFoundFault":
        case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBProxyTargetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBProxyTargetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxyTargetGroupsResponse(data.DescribeDBProxyTargetGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBProxyTargetGroupsCommand = deserializeAws_queryDescribeDBProxyTargetGroupsCommand;
const deserializeAws_queryDescribeDBProxyTargetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBProxyTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBProxyTargetsResponse(data.DescribeDBProxyTargetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBProxyTargetsCommand = deserializeAws_queryDescribeDBProxyTargetsCommand;
const deserializeAws_queryDescribeDBProxyTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSecurityGroupMessage(data.DescribeDBSecurityGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBSecurityGroupsCommand = deserializeAws_queryDescribeDBSecurityGroupsCommand;
const deserializeAws_queryDescribeDBSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeDBSnapshotAttributesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBSnapshotAttributesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDBSnapshotAttributesResult(data.DescribeDBSnapshotAttributesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBSnapshotAttributesCommand = deserializeAws_queryDescribeDBSnapshotAttributesCommand;
const deserializeAws_queryDescribeDBSnapshotAttributesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
const deserializeAws_queryDescribeDBSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDBSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBSnapshotMessage(data.DescribeDBSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDBSnapshotsCommand = deserializeAws_queryDescribeDBSnapshotsCommand;
const deserializeAws_queryDescribeDBSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
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
        case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
const deserializeAws_queryDescribeExportTasksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeExportTasksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryExportTasksMessage(data.DescribeExportTasksResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeExportTasksCommand = deserializeAws_queryDescribeExportTasksCommand;
const deserializeAws_queryDescribeExportTasksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExportTaskNotFoundFault":
        case "com.amazonaws.rds#ExportTaskNotFoundFault":
            response = {
                ...(await deserializeAws_queryExportTaskNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeGlobalClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeGlobalClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGlobalClustersMessage(data.DescribeGlobalClustersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeGlobalClustersCommand = deserializeAws_queryDescribeGlobalClustersCommand;
const deserializeAws_queryDescribeGlobalClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeInstallationMediaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMediaMessage(data.DescribeInstallationMediaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeInstallationMediaCommand = deserializeAws_queryDescribeInstallationMediaCommand;
const deserializeAws_queryDescribeInstallationMediaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InstallationMediaNotFoundFault":
        case "com.amazonaws.rds#InstallationMediaNotFoundFault":
            response = {
                ...(await deserializeAws_queryInstallationMediaNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeOptionGroupOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeOptionGroupOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptionGroupOptionsMessage(data.DescribeOptionGroupOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeOptionGroupOptionsCommand = deserializeAws_queryDescribeOptionGroupOptionsCommand;
const deserializeAws_queryDescribeOptionGroupOptionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeOptionGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeOptionGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOptionGroups(data.DescribeOptionGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeOptionGroupsCommand = deserializeAws_queryDescribeOptionGroupsCommand;
const deserializeAws_queryDescribeOptionGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#ResourceNotFoundFault":
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
const deserializeAws_queryDescribeReservedDBInstancesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedDBInstancesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedDBInstanceMessage(data.DescribeReservedDBInstancesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedDBInstancesCommand = deserializeAws_queryDescribeReservedDBInstancesCommand;
const deserializeAws_queryDescribeReservedDBInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstanceNotFoundFault":
        case "com.amazonaws.rds#ReservedDBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedDBInstanceNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedDBInstancesOfferingMessage(data.DescribeReservedDBInstancesOfferingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand = deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand;
const deserializeAws_queryDescribeReservedDBInstancesOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstancesOfferingNotFoundFault":
        case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeSourceRegionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSourceRegionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySourceRegionMessage(data.DescribeSourceRegionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSourceRegionsCommand = deserializeAws_queryDescribeSourceRegionsCommand;
const deserializeAws_queryDescribeSourceRegionsCommandError = async (output, context) => {
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
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryDownloadDBLogFilePortionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDownloadDBLogFilePortionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDownloadDBLogFilePortionDetails(data.DownloadDBLogFilePortionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDownloadDBLogFilePortionCommand = deserializeAws_queryDownloadDBLogFilePortionCommand;
const deserializeAws_queryDownloadDBLogFilePortionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBLogFileNotFoundFault":
        case "com.amazonaws.rds#DBLogFileNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBLogFileNotFoundFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryFailoverGlobalClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryFailoverGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryFailoverGlobalClusterResult(data.FailoverGlobalClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryFailoverGlobalClusterCommand = deserializeAws_queryFailoverGlobalClusterCommand;
const deserializeAws_queryFailoverGlobalClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalClusterStateFault":
        case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryImportInstallationMediaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryImportInstallationMediaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryInstallationMedia(data.ImportInstallationMediaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryImportInstallationMediaCommand = deserializeAws_queryImportInstallationMediaCommand;
const deserializeAws_queryImportInstallationMediaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomAvailabilityZoneNotFoundFault":
        case "com.amazonaws.rds#CustomAvailabilityZoneNotFoundFault":
            response = {
                ...(await deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstallationMediaAlreadyExistsFault":
        case "com.amazonaws.rds#InstallationMediaAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryInstallationMediaAlreadyExistsFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
const deserializeAws_queryModifyCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyCertificatesResult(data.ModifyCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyCertificatesCommand = deserializeAws_queryModifyCertificatesCommand;
const deserializeAws_queryModifyCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CertificateNotFoundFault":
        case "com.amazonaws.rds#CertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyCurrentDBClusterCapacityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyCurrentDBClusterCapacityCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDBClusterCapacityInfo(data.ModifyCurrentDBClusterCapacityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyCurrentDBClusterCapacityCommand = deserializeAws_queryModifyCurrentDBClusterCapacityCommand;
const deserializeAws_queryModifyCurrentDBClusterCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterCapacityFault":
        case "com.amazonaws.rds#InvalidDBClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
        case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
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
    contents = deserializeAws_queryDBClusterEndpoint(data.ModifyDBClusterEndpointResult, context);
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
        case "com.amazonaws.rds#DBClusterEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterEndpointStateFault":
        case "com.amazonaws.rds#InvalidDBClusterEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SharedSnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupPolicyNotFoundFault":
        case "com.amazonaws.rds#BackupPolicyNotFoundFault":
            response = {
                ...(await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CertificateNotFoundFault":
        case "com.amazonaws.rds#CertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBUpgradeDependencyFailureFault":
        case "com.amazonaws.rds#DBUpgradeDependencyFailureFault":
            response = {
                ...(await deserializeAws_queryDBUpgradeDependencyFailureFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
const deserializeAws_queryModifyDBProxyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBProxyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBProxyResponse(data.ModifyDBProxyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBProxyCommand = deserializeAws_queryModifyDBProxyCommand;
const deserializeAws_queryModifyDBProxyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyAlreadyExistsFault":
        case "com.amazonaws.rds#DBProxyAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBProxyAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBProxyEndpointCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBProxyEndpointCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBProxyEndpointResponse(data.ModifyDBProxyEndpointResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBProxyEndpointCommand = deserializeAws_queryModifyDBProxyEndpointCommand;
const deserializeAws_queryModifyDBProxyEndpointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyEndpointAlreadyExistsFault":
        case "com.amazonaws.rds#DBProxyEndpointAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyEndpointNotFoundFault":
        case "com.amazonaws.rds#DBProxyEndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyEndpointStateFault":
        case "com.amazonaws.rds#InvalidDBProxyEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBProxyTargetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBProxyTargetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBProxyTargetGroupResponse(data.ModifyDBProxyTargetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBProxyTargetGroupCommand = deserializeAws_queryModifyDBProxyTargetGroupCommand;
const deserializeAws_queryModifyDBProxyTargetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyDBSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSnapshotResult(data.ModifyDBSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBSnapshotCommand = deserializeAws_queryModifyDBSnapshotCommand;
const deserializeAws_queryModifyDBSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
const deserializeAws_queryModifyDBSnapshotAttributeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyDBSnapshotAttributeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyDBSnapshotAttributeResult(data.ModifyDBSnapshotAttributeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyDBSnapshotAttributeCommand = deserializeAws_queryModifyDBSnapshotAttributeCommand;
const deserializeAws_queryModifyDBSnapshotAttributeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SharedSnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SharedSnapshotQuotaExceededFault":
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
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetQuotaExceededFault":
        case "com.amazonaws.rds#DBSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetAlreadyInUse":
        case "com.amazonaws.rds#SubnetAlreadyInUse":
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
        case "com.amazonaws.rds#EventSubscriptionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.rds#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.rds#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.rds#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.rds#SubscriptionCategoryNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
const deserializeAws_queryModifyGlobalClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyGlobalClusterResult(data.ModifyGlobalClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyGlobalClusterCommand = deserializeAws_queryModifyGlobalClusterCommand;
const deserializeAws_queryModifyGlobalClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalClusterStateFault":
        case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyOptionGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyOptionGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyOptionGroupResult(data.ModifyOptionGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyOptionGroupCommand = deserializeAws_queryModifyOptionGroupCommand;
const deserializeAws_queryModifyOptionGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidOptionGroupStateFault":
        case "com.amazonaws.rds#InvalidOptionGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidOptionGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPromoteReadReplicaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPromoteReadReplicaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPromoteReadReplicaResult(data.PromoteReadReplicaResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPromoteReadReplicaCommand = deserializeAws_queryPromoteReadReplicaCommand;
const deserializeAws_queryPromoteReadReplicaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
const deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedDBInstancesOfferingResult(data.PurchaseReservedDBInstancesOfferingResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand = deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand;
const deserializeAws_queryPurchaseReservedDBInstancesOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedDBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#ReservedDBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedDBInstanceQuotaExceededFault":
        case "com.amazonaws.rds#ReservedDBInstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedDBInstancesOfferingNotFoundFault":
        case "com.amazonaws.rds#ReservedDBInstancesOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryRegisterDBProxyTargetsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRegisterDBProxyTargetsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRegisterDBProxyTargetsResponse(data.RegisterDBProxyTargetsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRegisterDBProxyTargetsCommand = deserializeAws_queryRegisterDBProxyTargetsCommand;
const deserializeAws_queryRegisterDBProxyTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetAlreadyRegisteredFault":
        case "com.amazonaws.rds#DBProxyTargetAlreadyRegisteredFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientAvailableIPsInSubnetFault":
        case "com.amazonaws.rds#InsufficientAvailableIPsInSubnetFault":
            response = {
                ...(await deserializeAws_queryInsufficientAvailableIPsInSubnetFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBProxyStateFault":
        case "com.amazonaws.rds#InvalidDBProxyStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBProxyStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRemoveFromGlobalClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveFromGlobalClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRemoveFromGlobalClusterResult(data.RemoveFromGlobalClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveFromGlobalClusterCommand = deserializeAws_queryRemoveFromGlobalClusterCommand;
const deserializeAws_queryRemoveFromGlobalClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GlobalClusterNotFoundFault":
        case "com.amazonaws.rds#GlobalClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryGlobalClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidGlobalClusterStateFault":
        case "com.amazonaws.rds#InvalidGlobalClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidGlobalClusterStateFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterRoleNotFoundFault":
        case "com.amazonaws.rds#DBClusterRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
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
const deserializeAws_queryRemoveRoleFromDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRemoveRoleFromDBInstanceCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRemoveRoleFromDBInstanceCommand = deserializeAws_queryRemoveRoleFromDBInstanceCommand;
const deserializeAws_queryRemoveRoleFromDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceRoleNotFoundFault":
        case "com.amazonaws.rds#DBInstanceRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
        case "com.amazonaws.rds#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.rds#SubscriptionNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyNotFoundFault":
        case "com.amazonaws.rds#DBProxyNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBProxyTargetGroupNotFoundFault":
        case "com.amazonaws.rds#DBProxyTargetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBParameterGroupStateFault":
        case "com.amazonaws.rds#InvalidDBParameterGroupStateFault":
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
const deserializeAws_queryRestoreDBClusterFromS3Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBClusterFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBClusterFromS3Result(data.RestoreDBClusterFromS3Result, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBClusterFromS3Command = deserializeAws_queryRestoreDBClusterFromS3Command;
const deserializeAws_queryRestoreDBClusterFromS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterAlreadyExistsFault":
        case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSubnetGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketFault":
        case "com.amazonaws.rds#InvalidS3BucketFault":
            response = {
                ...(await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
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
        case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.rds#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
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
        case "com.amazonaws.rds#DBClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterQuotaExceededFault":
        case "com.amazonaws.rds#DBClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientDBClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientStorageClusterCapacityFault":
        case "com.amazonaws.rds#InsufficientStorageClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientStorageClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.rds#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
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
const deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult(data.RestoreDBInstanceFromDBSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand = deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand;
const deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupPolicyNotFoundFault":
        case "com.amazonaws.rds#BackupPolicyNotFoundFault":
            response = {
                ...(await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.rds#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSnapshotStateFault":
        case "com.amazonaws.rds#InvalidDBSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.rds#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
const deserializeAws_queryRestoreDBInstanceFromS3Command = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBInstanceFromS3CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceFromS3Result(data.RestoreDBInstanceFromS3Result, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBInstanceFromS3Command = deserializeAws_queryRestoreDBInstanceFromS3Command;
const deserializeAws_queryRestoreDBInstanceFromS3CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupPolicyNotFoundFault":
        case "com.amazonaws.rds#BackupPolicyNotFoundFault":
            response = {
                ...(await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.rds#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketFault":
        case "com.amazonaws.rds#InvalidS3BucketFault":
            response = {
                ...(await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
const deserializeAws_queryRestoreDBInstanceToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreDBInstanceToPointInTimeResult(data.RestoreDBInstanceToPointInTimeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreDBInstanceToPointInTimeCommand = deserializeAws_queryRestoreDBInstanceToPointInTimeCommand;
const deserializeAws_queryRestoreDBInstanceToPointInTimeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BackupPolicyNotFoundFault":
        case "com.amazonaws.rds#BackupPolicyNotFoundFault":
            response = {
                ...(await deserializeAws_queryBackupPolicyNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAlreadyExistsFault":
        case "com.amazonaws.rds#DBInstanceAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceAutomatedBackupNotFoundFault":
        case "com.amazonaws.rds#DBInstanceAutomatedBackupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBParameterGroupNotFoundFault":
        case "com.amazonaws.rds#DBParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotFoundFault":
        case "com.amazonaws.rds#DomainNotFoundFault":
            response = {
                ...(await deserializeAws_queryDomainNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InstanceQuotaExceededFault":
        case "com.amazonaws.rds#InstanceQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInstanceQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.rds#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OptionGroupNotFoundFault":
        case "com.amazonaws.rds#OptionGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryOptionGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PointInTimeRestoreNotEnabledFault":
        case "com.amazonaws.rds#PointInTimeRestoreNotEnabledFault":
            response = {
                ...(await deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProvisionedIopsNotAvailableInAZFault":
        case "com.amazonaws.rds#ProvisionedIopsNotAvailableInAZFault":
            response = {
                ...(await deserializeAws_queryProvisionedIopsNotAvailableInAZFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageQuotaExceededFault":
        case "com.amazonaws.rds#StorageQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryStorageQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
const deserializeAws_queryRevokeDBSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRevokeDBSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeDBSecurityGroupIngressResult(data.RevokeDBSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRevokeDBSecurityGroupIngressCommand = deserializeAws_queryRevokeDBSecurityGroupIngressCommand;
const deserializeAws_queryRevokeDBSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSecurityGroupNotFoundFault":
        case "com.amazonaws.rds#DBSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBSecurityGroupStateFault":
        case "com.amazonaws.rds#InvalidDBSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStartActivityStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartActivityStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartActivityStreamResponse(data.StartActivityStreamResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartActivityStreamCommand = deserializeAws_queryStartActivityStreamCommand;
const deserializeAws_queryStartActivityStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.rds#ResourceNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryStartDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartDBInstanceResult(data.StartDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartDBInstanceCommand = deserializeAws_queryStartDBInstanceCommand;
const deserializeAws_queryStartDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.rds#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupDoesNotCoverEnoughAZs":
        case "com.amazonaws.rds#DBSubnetGroupDoesNotCoverEnoughAZs":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupDoesNotCoverEnoughAZsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSubnetGroupNotFoundFault":
        case "com.amazonaws.rds#DBSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientDBInstanceCapacityFault":
        case "com.amazonaws.rds#InsufficientDBInstanceCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientDBInstanceCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.rds#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.rds#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult(data.StartDBInstanceAutomatedBackupsReplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand = deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand;
const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceAutomatedBackupQuotaExceededFault":
        case "com.amazonaws.rds#DBInstanceAutomatedBackupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageTypeNotSupportedFault":
        case "com.amazonaws.rds#StorageTypeNotSupportedFault":
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
const deserializeAws_queryStartExportTaskCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStartExportTaskCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryExportTask(data.StartExportTaskResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStartExportTaskCommand = deserializeAws_queryStartExportTaskCommand;
const deserializeAws_queryStartExportTaskCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotNotFoundFault":
        case "com.amazonaws.rds#DBSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ExportTaskAlreadyExistsFault":
        case "com.amazonaws.rds#ExportTaskAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryExportTaskAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IamRoleMissingPermissionsFault":
        case "com.amazonaws.rds#IamRoleMissingPermissionsFault":
            response = {
                ...(await deserializeAws_queryIamRoleMissingPermissionsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IamRoleNotFoundFault":
        case "com.amazonaws.rds#IamRoleNotFoundFault":
            response = {
                ...(await deserializeAws_queryIamRoleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExportOnlyFault":
        case "com.amazonaws.rds#InvalidExportOnlyFault":
            response = {
                ...(await deserializeAws_queryInvalidExportOnlyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidExportSourceStateFault":
        case "com.amazonaws.rds#InvalidExportSourceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidExportSourceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketFault":
        case "com.amazonaws.rds#InvalidS3BucketFault":
            response = {
                ...(await deserializeAws_queryInvalidS3BucketFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "KMSKeyNotAccessibleFault":
        case "com.amazonaws.rds#KMSKeyNotAccessibleFault":
            response = {
                ...(await deserializeAws_queryKMSKeyNotAccessibleFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryStopActivityStreamCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStopActivityStreamCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopActivityStreamResponse(data.StopActivityStreamResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStopActivityStreamCommand = deserializeAws_queryStopActivityStreamCommand;
const deserializeAws_queryStopActivityStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBClusterNotFoundFault":
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.rds#ResourceNotFoundFault":
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
        case "com.amazonaws.rds#DBClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryStopDBInstanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStopDBInstanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopDBInstanceResult(data.StopDBInstanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStopDBInstanceCommand = deserializeAws_queryStopDBInstanceCommand;
const deserializeAws_queryStopDBInstanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DBSnapshotAlreadyExistsFault":
        case "com.amazonaws.rds#DBSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryDBSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBClusterStateFault":
        case "com.amazonaws.rds#InvalidDBClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
            response = {
                ...(await deserializeAws_queryInvalidDBInstanceStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotQuotaExceededFault":
        case "com.amazonaws.rds#SnapshotQuotaExceededFault":
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
const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult(data.StopDBInstanceAutomatedBackupsReplicationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand = deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand;
const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DBInstanceNotFoundFault":
        case "com.amazonaws.rds#DBInstanceNotFoundFault":
            response = {
                ...(await deserializeAws_queryDBInstanceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidDBInstanceStateFault":
        case "com.amazonaws.rds#InvalidDBInstanceStateFault":
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
const deserializeAws_queryAuthorizationQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAuthorizationQuotaExceededFault(body.Error, context);
    const contents = {
        name: "AuthorizationQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryBackupPolicyNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBackupPolicyNotFoundFault(body.Error, context);
    const contents = {
        name: "BackupPolicyNotFoundFault",
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
const deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "CustomAvailabilityZoneAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneNotFoundFault(body.Error, context);
    const contents = {
        name: "CustomAvailabilityZoneNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCustomAvailabilityZoneQuotaExceededFault(body.Error, context);
    const contents = {
        name: "CustomAvailabilityZoneQuotaExceededFault",
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
const deserializeAws_queryDBClusterBacktrackNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBClusterBacktrackNotFoundFault(body.Error, context);
    const contents = {
        name: "DBClusterBacktrackNotFoundFault",
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
const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBInstanceAutomatedBackupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBInstanceAutomatedBackupQuotaExceededFault",
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
const deserializeAws_queryDBInstanceRoleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBInstanceRoleAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBInstanceRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleNotFoundFault(body.Error, context);
    const contents = {
        name: "DBInstanceRoleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBInstanceRoleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBInstanceRoleQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBInstanceRoleQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBLogFileNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBLogFileNotFoundFault(body.Error, context);
    const contents = {
        name: "DBLogFileNotFoundFault",
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
const deserializeAws_queryDBProxyAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBProxyAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyEndpointAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyEndpointAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBProxyEndpointAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyEndpointNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyEndpointNotFoundFault(body.Error, context);
    const contents = {
        name: "DBProxyEndpointNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyEndpointQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyEndpointQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBProxyEndpointQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyNotFoundFault(body.Error, context);
    const contents = {
        name: "DBProxyNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBProxyQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyTargetAlreadyRegisteredFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetAlreadyRegisteredFault(body.Error, context);
    const contents = {
        name: "DBProxyTargetAlreadyRegisteredFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyTargetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "DBProxyTargetGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBProxyTargetNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBProxyTargetNotFoundFault(body.Error, context);
    const contents = {
        name: "DBProxyTargetNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "DBSecurityGroupAlreadyExistsFault",
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
const deserializeAws_queryDBSecurityGroupNotSupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupNotSupportedFault(body.Error, context);
    const contents = {
        name: "DBSecurityGroupNotSupportedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDBSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "DBSecurityGroupQuotaExceededFault",
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
const deserializeAws_queryDBSubnetGroupNotAllowedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDBSubnetGroupNotAllowedFault(body.Error, context);
    const contents = {
        name: "DBSubnetGroupNotAllowedFault",
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
const deserializeAws_queryExportTaskAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExportTaskAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ExportTaskAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryExportTaskNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryExportTaskNotFoundFault(body.Error, context);
    const contents = {
        name: "ExportTaskNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryGlobalClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "GlobalClusterAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryGlobalClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterNotFoundFault(body.Error, context);
    const contents = {
        name: "GlobalClusterNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryGlobalClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryGlobalClusterQuotaExceededFault(body.Error, context);
    const contents = {
        name: "GlobalClusterQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryIamRoleMissingPermissionsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIamRoleMissingPermissionsFault(body.Error, context);
    const contents = {
        name: "IamRoleMissingPermissionsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryIamRoleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIamRoleNotFoundFault(body.Error, context);
    const contents = {
        name: "IamRoleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInstallationMediaAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstallationMediaAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "InstallationMediaAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInstallationMediaNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInstallationMediaNotFoundFault(body.Error, context);
    const contents = {
        name: "InstallationMediaNotFoundFault",
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
const deserializeAws_queryInsufficientAvailableIPsInSubnetFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientAvailableIPsInSubnetFault(body.Error, context);
    const contents = {
        name: "InsufficientAvailableIPsInSubnetFault",
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
const deserializeAws_queryInvalidDBClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBClusterCapacityFault(body.Error, context);
    const contents = {
        name: "InvalidDBClusterCapacityFault",
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
const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBInstanceAutomatedBackupStateFault",
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
const deserializeAws_queryInvalidDBProxyEndpointStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBProxyEndpointStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBProxyEndpointStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidDBProxyStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBProxyStateFault(body.Error, context);
    const contents = {
        name: "InvalidDBProxyStateFault",
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
const deserializeAws_queryInvalidDBSubnetGroupFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidDBSubnetGroupFault(body.Error, context);
    const contents = {
        name: "InvalidDBSubnetGroupFault",
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
const deserializeAws_queryInvalidExportOnlyFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidExportOnlyFault(body.Error, context);
    const contents = {
        name: "InvalidExportOnlyFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidExportSourceStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidExportSourceStateFault(body.Error, context);
    const contents = {
        name: "InvalidExportSourceStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidExportTaskStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidExportTaskStateFault(body.Error, context);
    const contents = {
        name: "InvalidExportTaskStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidGlobalClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidGlobalClusterStateFault(body.Error, context);
    const contents = {
        name: "InvalidGlobalClusterStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidOptionGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidOptionGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidOptionGroupStateFault",
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
const deserializeAws_queryInvalidS3BucketFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3BucketFault(body.Error, context);
    const contents = {
        name: "InvalidS3BucketFault",
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
const deserializeAws_queryOptionGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "OptionGroupAlreadyExistsFault",
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
const deserializeAws_queryOptionGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryOptionGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "OptionGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPointInTimeRestoreNotEnabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPointInTimeRestoreNotEnabledFault(body.Error, context);
    const contents = {
        name: "PointInTimeRestoreNotEnabledFault",
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
const deserializeAws_queryReservedDBInstanceAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ReservedDBInstanceAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedDBInstanceNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedDBInstanceNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedDBInstanceQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstanceQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ReservedDBInstanceQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedDBInstancesOfferingNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedDBInstancesOfferingNotFoundFault",
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
const serializeAws_queryAddRoleToDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
const serializeAws_queryAuthorizeDBSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined && input.DBSecurityGroupName !== null) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    if (input.CIDRIP !== undefined && input.CIDRIP !== null) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupId !== undefined && input.EC2SecurityGroupId !== null) {
        entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
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
const serializeAws_queryBacktrackDBClusterMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.BacktrackTo !== undefined && input.BacktrackTo !== null) {
        entries["BacktrackTo"] = input.BacktrackTo.toISOString().split(".")[0] + "Z";
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    if (input.UseEarliestTimeOnPointInTimeUnavailable !== undefined &&
        input.UseEarliestTimeOnPointInTimeUnavailable !== null) {
        entries["UseEarliestTimeOnPointInTimeUnavailable"] = input.UseEarliestTimeOnPointInTimeUnavailable;
    }
    return entries;
};
const serializeAws_queryCancelExportTaskMessage = (input, context) => {
    const entries = {};
    if (input.ExportTaskIdentifier !== undefined && input.ExportTaskIdentifier !== null) {
        entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
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
const serializeAws_queryConnectionPoolConfiguration = (input, context) => {
    const entries = {};
    if (input.MaxConnectionsPercent !== undefined && input.MaxConnectionsPercent !== null) {
        entries["MaxConnectionsPercent"] = input.MaxConnectionsPercent;
    }
    if (input.MaxIdleConnectionsPercent !== undefined && input.MaxIdleConnectionsPercent !== null) {
        entries["MaxIdleConnectionsPercent"] = input.MaxIdleConnectionsPercent;
    }
    if (input.ConnectionBorrowTimeout !== undefined && input.ConnectionBorrowTimeout !== null) {
        entries["ConnectionBorrowTimeout"] = input.ConnectionBorrowTimeout;
    }
    if (input.SessionPinningFilters !== undefined && input.SessionPinningFilters !== null) {
        const memberEntries = serializeAws_queryStringList(input.SessionPinningFilters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SessionPinningFilters.${key}`;
            entries[loc] = value;
        });
    }
    if (input.InitQuery !== undefined && input.InitQuery !== null) {
        entries["InitQuery"] = input.InitQuery;
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
const serializeAws_queryCopyDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBSnapshotIdentifier !== undefined && input.SourceDBSnapshotIdentifier !== null) {
        entries["SourceDBSnapshotIdentifier"] = input.SourceDBSnapshotIdentifier;
    }
    if (input.TargetDBSnapshotIdentifier !== undefined && input.TargetDBSnapshotIdentifier !== null) {
        entries["TargetDBSnapshotIdentifier"] = input.TargetDBSnapshotIdentifier;
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
    if (input.CopyTags !== undefined && input.CopyTags !== null) {
        entries["CopyTags"] = input.CopyTags;
    }
    if (input.PreSignedUrl !== undefined && input.PreSignedUrl !== null) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.TargetCustomAvailabilityZone !== undefined && input.TargetCustomAvailabilityZone !== null) {
        entries["TargetCustomAvailabilityZone"] = input.TargetCustomAvailabilityZone;
    }
    return entries;
};
const serializeAws_queryCopyOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.SourceOptionGroupIdentifier !== undefined && input.SourceOptionGroupIdentifier !== null) {
        entries["SourceOptionGroupIdentifier"] = input.SourceOptionGroupIdentifier;
    }
    if (input.TargetOptionGroupIdentifier !== undefined && input.TargetOptionGroupIdentifier !== null) {
        entries["TargetOptionGroupIdentifier"] = input.TargetOptionGroupIdentifier;
    }
    if (input.TargetOptionGroupDescription !== undefined && input.TargetOptionGroupDescription !== null) {
        entries["TargetOptionGroupDescription"] = input.TargetOptionGroupDescription;
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
const serializeAws_queryCreateCustomAvailabilityZoneMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneName !== undefined && input.CustomAvailabilityZoneName !== null) {
        entries["CustomAvailabilityZoneName"] = input.CustomAvailabilityZoneName;
    }
    if (input.ExistingVpnId !== undefined && input.ExistingVpnId !== null) {
        entries["ExistingVpnId"] = input.ExistingVpnId;
    }
    if (input.NewVpnTunnelName !== undefined && input.NewVpnTunnelName !== null) {
        entries["NewVpnTunnelName"] = input.NewVpnTunnelName;
    }
    if (input.VpnTunnelOriginatorIP !== undefined && input.VpnTunnelOriginatorIP !== null) {
        entries["VpnTunnelOriginatorIP"] = input.VpnTunnelOriginatorIP;
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
    if (input.BacktrackWindow !== undefined && input.BacktrackWindow !== null) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EngineMode !== undefined && input.EngineMode !== null) {
        entries["EngineMode"] = input.EngineMode;
    }
    if (input.ScalingConfiguration !== undefined && input.ScalingConfiguration !== null) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScalingConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.EnableHttpEndpoint !== undefined && input.EnableHttpEndpoint !== null) {
        entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.EnableGlobalWriteForwarding !== undefined && input.EnableGlobalWriteForwarding !== null) {
        entries["EnableGlobalWriteForwarding"] = input.EnableGlobalWriteForwarding;
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
    if (input.NcharCharacterSetName !== undefined && input.NcharCharacterSetName !== null) {
        entries["NcharCharacterSetName"] = input.NcharCharacterSetName;
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
    if (input.PerformanceInsightsRetentionPeriod !== undefined && input.PerformanceInsightsRetentionPeriod !== null) {
        entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.MaxAllocatedStorage !== undefined && input.MaxAllocatedStorage !== null) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    if (input.EnableCustomerOwnedIp !== undefined && input.EnableCustomerOwnedIp !== null) {
        entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
    }
    return entries;
};
const serializeAws_queryCreateDBInstanceReadReplicaMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.SourceDBInstanceIdentifier !== undefined && input.SourceDBInstanceIdentifier !== null) {
        entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.Iops !== undefined && input.Iops !== null) {
        entries["Iops"] = input.Iops;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
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
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.StorageType !== undefined && input.StorageType !== null) {
        entries["StorageType"] = input.StorageType;
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
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.PreSignedUrl !== undefined && input.PreSignedUrl !== null) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
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
    if (input.PerformanceInsightsRetentionPeriod !== undefined && input.PerformanceInsightsRetentionPeriod !== null) {
        entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined && input.UseDefaultProcessorFeatures !== null) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.ReplicaMode !== undefined && input.ReplicaMode !== null) {
        entries["ReplicaMode"] = input.ReplicaMode;
    }
    if (input.MaxAllocatedStorage !== undefined && input.MaxAllocatedStorage !== null) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
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
const serializeAws_queryCreateDBProxyEndpointRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.DBProxyEndpointName !== undefined && input.DBProxyEndpointName !== null) {
        entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
    }
    if (input.VpcSubnetIds !== undefined && input.VpcSubnetIds !== null) {
        const memberEntries = serializeAws_queryStringList(input.VpcSubnetIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSubnetIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TargetRole !== undefined && input.TargetRole !== null) {
        entries["TargetRole"] = input.TargetRole;
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
const serializeAws_queryCreateDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.EngineFamily !== undefined && input.EngineFamily !== null) {
        entries["EngineFamily"] = input.EngineFamily;
    }
    if (input.Auth !== undefined && input.Auth !== null) {
        const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Auth.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.VpcSubnetIds !== undefined && input.VpcSubnetIds !== null) {
        const memberEntries = serializeAws_queryStringList(input.VpcSubnetIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSubnetIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RequireTLS !== undefined && input.RequireTLS !== null) {
        entries["RequireTLS"] = input.RequireTLS;
    }
    if (input.IdleClientTimeout !== undefined && input.IdleClientTimeout !== null) {
        entries["IdleClientTimeout"] = input.IdleClientTimeout;
    }
    if (input.DebugLogging !== undefined && input.DebugLogging !== null) {
        entries["DebugLogging"] = input.DebugLogging;
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
const serializeAws_queryCreateDBSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined && input.DBSecurityGroupName !== null) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    if (input.DBSecurityGroupDescription !== undefined && input.DBSecurityGroupDescription !== null) {
        entries["DBSecurityGroupDescription"] = input.DBSecurityGroupDescription;
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
const serializeAws_queryCreateDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
const serializeAws_queryCreateGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.SourceDBClusterIdentifier !== undefined && input.SourceDBClusterIdentifier !== null) {
        entries["SourceDBClusterIdentifier"] = input.SourceDBClusterIdentifier;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.DatabaseName !== undefined && input.DatabaseName !== null) {
        entries["DatabaseName"] = input.DatabaseName;
    }
    if (input.StorageEncrypted !== undefined && input.StorageEncrypted !== null) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    return entries;
};
const serializeAws_queryCreateOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.EngineName !== undefined && input.EngineName !== null) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.MajorEngineVersion !== undefined && input.MajorEngineVersion !== null) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
    }
    if (input.OptionGroupDescription !== undefined && input.OptionGroupDescription !== null) {
        entries["OptionGroupDescription"] = input.OptionGroupDescription;
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
const serializeAws_queryDeleteCustomAvailabilityZoneMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined && input.CustomAvailabilityZoneId !== null) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
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
const serializeAws_queryDeleteDBInstanceAutomatedBackupMessage = (input, context) => {
    const entries = {};
    if (input.DbiResourceId !== undefined && input.DbiResourceId !== null) {
        entries["DbiResourceId"] = input.DbiResourceId;
    }
    if (input.DBInstanceAutomatedBackupsArn !== undefined && input.DBInstanceAutomatedBackupsArn !== null) {
        entries["DBInstanceAutomatedBackupsArn"] = input.DBInstanceAutomatedBackupsArn;
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
    if (input.DeleteAutomatedBackups !== undefined && input.DeleteAutomatedBackups !== null) {
        entries["DeleteAutomatedBackups"] = input.DeleteAutomatedBackups;
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
const serializeAws_queryDeleteDBProxyEndpointRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyEndpointName !== undefined && input.DBProxyEndpointName !== null) {
        entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
    }
    return entries;
};
const serializeAws_queryDeleteDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    return entries;
};
const serializeAws_queryDeleteDBSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined && input.DBSecurityGroupName !== null) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryDeleteGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.InstallationMediaId !== undefined && input.InstallationMediaId !== null) {
        entries["InstallationMediaId"] = input.InstallationMediaId;
    }
    return entries;
};
const serializeAws_queryDeleteOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    return entries;
};
const serializeAws_queryDeregisterDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined && input.TargetGroupName !== null) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    if (input.DBInstanceIdentifiers !== undefined && input.DBInstanceIdentifiers !== null) {
        const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBInstanceIdentifiers.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DBClusterIdentifiers !== undefined && input.DBClusterIdentifiers !== null) {
        const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBClusterIdentifiers.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeAccountAttributesMessage = (input, context) => {
    const entries = {};
    return entries;
};
const serializeAws_queryDescribeCertificatesMessage = (input, context) => {
    const entries = {};
    if (input.CertificateIdentifier !== undefined && input.CertificateIdentifier !== null) {
        entries["CertificateIdentifier"] = input.CertificateIdentifier;
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
const serializeAws_queryDescribeCustomAvailabilityZonesMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined && input.CustomAvailabilityZoneId !== null) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
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
const serializeAws_queryDescribeDBClusterBacktracksMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.BacktrackIdentifier !== undefined && input.BacktrackIdentifier !== null) {
        entries["BacktrackIdentifier"] = input.BacktrackIdentifier;
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
    if (input.IncludeShared !== undefined && input.IncludeShared !== null) {
        entries["IncludeShared"] = input.IncludeShared;
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
    if (input.IncludeAll !== undefined && input.IncludeAll !== null) {
        entries["IncludeAll"] = input.IncludeAll;
    }
    return entries;
};
const serializeAws_queryDescribeDBInstanceAutomatedBackupsMessage = (input, context) => {
    const entries = {};
    if (input.DbiResourceId !== undefined && input.DbiResourceId !== null) {
        entries["DbiResourceId"] = input.DbiResourceId;
    }
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
    if (input.DBInstanceAutomatedBackupsArn !== undefined && input.DBInstanceAutomatedBackupsArn !== null) {
        entries["DBInstanceAutomatedBackupsArn"] = input.DBInstanceAutomatedBackupsArn;
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
const serializeAws_queryDescribeDBLogFilesMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.FilenameContains !== undefined && input.FilenameContains !== null) {
        entries["FilenameContains"] = input.FilenameContains;
    }
    if (input.FileLastWritten !== undefined && input.FileLastWritten !== null) {
        entries["FileLastWritten"] = input.FileLastWritten;
    }
    if (input.FileSize !== undefined && input.FileSize !== null) {
        entries["FileSize"] = input.FileSize;
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
const serializeAws_queryDescribeDBProxiesRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
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
const serializeAws_queryDescribeDBProxyEndpointsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.DBProxyEndpointName !== undefined && input.DBProxyEndpointName !== null) {
        entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
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
const serializeAws_queryDescribeDBProxyTargetGroupsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined && input.TargetGroupName !== null) {
        entries["TargetGroupName"] = input.TargetGroupName;
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
const serializeAws_queryDescribeDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined && input.TargetGroupName !== null) {
        entries["TargetGroupName"] = input.TargetGroupName;
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
const serializeAws_queryDescribeDBSecurityGroupsMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined && input.DBSecurityGroupName !== null) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
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
const serializeAws_queryDescribeDBSnapshotAttributesMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeDBSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
    if (input.DbiResourceId !== undefined && input.DbiResourceId !== null) {
        entries["DbiResourceId"] = input.DbiResourceId;
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
const serializeAws_queryDescribeExportTasksMessage = (input, context) => {
    const entries = {};
    if (input.ExportTaskIdentifier !== undefined && input.ExportTaskIdentifier !== null) {
        entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
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
const serializeAws_queryDescribeGlobalClustersMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
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
const serializeAws_queryDescribeInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.InstallationMediaId !== undefined && input.InstallationMediaId !== null) {
        entries["InstallationMediaId"] = input.InstallationMediaId;
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
const serializeAws_queryDescribeOptionGroupOptionsMessage = (input, context) => {
    const entries = {};
    if (input.EngineName !== undefined && input.EngineName !== null) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.MajorEngineVersion !== undefined && input.MajorEngineVersion !== null) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
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
const serializeAws_queryDescribeOptionGroupsMessage = (input, context) => {
    const entries = {};
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
    if (input.EngineName !== undefined && input.EngineName !== null) {
        entries["EngineName"] = input.EngineName;
    }
    if (input.MajorEngineVersion !== undefined && input.MajorEngineVersion !== null) {
        entries["MajorEngineVersion"] = input.MajorEngineVersion;
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
    if (input.AvailabilityZoneGroup !== undefined && input.AvailabilityZoneGroup !== null) {
        entries["AvailabilityZoneGroup"] = input.AvailabilityZoneGroup;
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
const serializeAws_queryDescribeReservedDBInstancesMessage = (input, context) => {
    const entries = {};
    if (input.ReservedDBInstanceId !== undefined && input.ReservedDBInstanceId !== null) {
        entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
    }
    if (input.ReservedDBInstancesOfferingId !== undefined && input.ReservedDBInstancesOfferingId !== null) {
        entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
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
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.LeaseId !== undefined && input.LeaseId !== null) {
        entries["LeaseId"] = input.LeaseId;
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
const serializeAws_queryDescribeReservedDBInstancesOfferingsMessage = (input, context) => {
    const entries = {};
    if (input.ReservedDBInstancesOfferingId !== undefined && input.ReservedDBInstancesOfferingId !== null) {
        entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
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
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
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
const serializeAws_queryDescribeSourceRegionsMessage = (input, context) => {
    const entries = {};
    if (input.RegionName !== undefined && input.RegionName !== null) {
        entries["RegionName"] = input.RegionName;
    }
    if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
        entries["MaxRecords"] = input.MaxRecords;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
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
const serializeAws_queryDescribeValidDBInstanceModificationsMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryDownloadDBLogFilePortionMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.LogFileName !== undefined && input.LogFileName !== null) {
        entries["LogFileName"] = input.LogFileName;
    }
    if (input.Marker !== undefined && input.Marker !== null) {
        entries["Marker"] = input.Marker;
    }
    if (input.NumberOfLines !== undefined && input.NumberOfLines !== null) {
        entries["NumberOfLines"] = input.NumberOfLines;
    }
    return entries;
};
const serializeAws_queryEngineModeList = (input, context) => {
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
const serializeAws_queryFailoverGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.TargetDbClusterIdentifier !== undefined && input.TargetDbClusterIdentifier !== null) {
        entries["TargetDbClusterIdentifier"] = input.TargetDbClusterIdentifier;
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
const serializeAws_queryImportInstallationMediaMessage = (input, context) => {
    const entries = {};
    if (input.CustomAvailabilityZoneId !== undefined && input.CustomAvailabilityZoneId !== null) {
        entries["CustomAvailabilityZoneId"] = input.CustomAvailabilityZoneId;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.EngineInstallationMediaPath !== undefined && input.EngineInstallationMediaPath !== null) {
        entries["EngineInstallationMediaPath"] = input.EngineInstallationMediaPath;
    }
    if (input.OSInstallationMediaPath !== undefined && input.OSInstallationMediaPath !== null) {
        entries["OSInstallationMediaPath"] = input.OSInstallationMediaPath;
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
const serializeAws_queryModifyCertificatesMessage = (input, context) => {
    const entries = {};
    if (input.CertificateIdentifier !== undefined && input.CertificateIdentifier !== null) {
        entries["CertificateIdentifier"] = input.CertificateIdentifier;
    }
    if (input.RemoveCustomerOverride !== undefined && input.RemoveCustomerOverride !== null) {
        entries["RemoveCustomerOverride"] = input.RemoveCustomerOverride;
    }
    return entries;
};
const serializeAws_queryModifyCurrentDBClusterCapacityMessage = (input, context) => {
    const entries = {};
    if (input.DBClusterIdentifier !== undefined && input.DBClusterIdentifier !== null) {
        entries["DBClusterIdentifier"] = input.DBClusterIdentifier;
    }
    if (input.Capacity !== undefined && input.Capacity !== null) {
        entries["Capacity"] = input.Capacity;
    }
    if (input.SecondsBeforeTimeout !== undefined && input.SecondsBeforeTimeout !== null) {
        entries["SecondsBeforeTimeout"] = input.SecondsBeforeTimeout;
    }
    if (input.TimeoutAction !== undefined && input.TimeoutAction !== null) {
        entries["TimeoutAction"] = input.TimeoutAction;
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
    if (input.BacktrackWindow !== undefined && input.BacktrackWindow !== null) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
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
    if (input.AllowMajorVersionUpgrade !== undefined && input.AllowMajorVersionUpgrade !== null) {
        entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    if (input.DBInstanceParameterGroupName !== undefined && input.DBInstanceParameterGroupName !== null) {
        entries["DBInstanceParameterGroupName"] = input.DBInstanceParameterGroupName;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    if (input.ScalingConfiguration !== undefined && input.ScalingConfiguration !== null) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScalingConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableHttpEndpoint !== undefined && input.EnableHttpEndpoint !== null) {
        entries["EnableHttpEndpoint"] = input.EnableHttpEndpoint;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.EnableGlobalWriteForwarding !== undefined && input.EnableGlobalWriteForwarding !== null) {
        entries["EnableGlobalWriteForwarding"] = input.EnableGlobalWriteForwarding;
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
    if (input.PerformanceInsightsRetentionPeriod !== undefined && input.PerformanceInsightsRetentionPeriod !== null) {
        entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
    }
    if (input.CloudwatchLogsExportConfiguration !== undefined && input.CloudwatchLogsExportConfiguration !== null) {
        const memberEntries = serializeAws_queryCloudwatchLogsExportConfiguration(input.CloudwatchLogsExportConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `CloudwatchLogsExportConfiguration.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined && input.UseDefaultProcessorFeatures !== null) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.MaxAllocatedStorage !== undefined && input.MaxAllocatedStorage !== null) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    if (input.CertificateRotationRestart !== undefined && input.CertificateRotationRestart !== null) {
        entries["CertificateRotationRestart"] = input.CertificateRotationRestart;
    }
    if (input.ReplicaMode !== undefined && input.ReplicaMode !== null) {
        entries["ReplicaMode"] = input.ReplicaMode;
    }
    if (input.EnableCustomerOwnedIp !== undefined && input.EnableCustomerOwnedIp !== null) {
        entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
    }
    if (input.AwsBackupRecoveryPointArn !== undefined && input.AwsBackupRecoveryPointArn !== null) {
        entries["AwsBackupRecoveryPointArn"] = input.AwsBackupRecoveryPointArn;
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
const serializeAws_queryModifyDBProxyEndpointRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyEndpointName !== undefined && input.DBProxyEndpointName !== null) {
        entries["DBProxyEndpointName"] = input.DBProxyEndpointName;
    }
    if (input.NewDBProxyEndpointName !== undefined && input.NewDBProxyEndpointName !== null) {
        entries["NewDBProxyEndpointName"] = input.NewDBProxyEndpointName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryStringList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBProxyRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.NewDBProxyName !== undefined && input.NewDBProxyName !== null) {
        entries["NewDBProxyName"] = input.NewDBProxyName;
    }
    if (input.Auth !== undefined && input.Auth !== null) {
        const memberEntries = serializeAws_queryUserAuthConfigList(input.Auth, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Auth.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RequireTLS !== undefined && input.RequireTLS !== null) {
        entries["RequireTLS"] = input.RequireTLS;
    }
    if (input.IdleClientTimeout !== undefined && input.IdleClientTimeout !== null) {
        entries["IdleClientTimeout"] = input.IdleClientTimeout;
    }
    if (input.DebugLogging !== undefined && input.DebugLogging !== null) {
        entries["DebugLogging"] = input.DebugLogging;
    }
    if (input.RoleArn !== undefined && input.RoleArn !== null) {
        entries["RoleArn"] = input.RoleArn;
    }
    if (input.SecurityGroups !== undefined && input.SecurityGroups !== null) {
        const memberEntries = serializeAws_queryStringList(input.SecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SecurityGroups.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyDBProxyTargetGroupRequest = (input, context) => {
    const entries = {};
    if (input.TargetGroupName !== undefined && input.TargetGroupName !== null) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.ConnectionPoolConfig !== undefined && input.ConnectionPoolConfig !== null) {
        const memberEntries = serializeAws_queryConnectionPoolConfiguration(input.ConnectionPoolConfig, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ConnectionPoolConfig.${key}`;
            entries[loc] = value;
        });
    }
    if (input.NewName !== undefined && input.NewName !== null) {
        entries["NewName"] = input.NewName;
    }
    return entries;
};
const serializeAws_queryModifyDBSnapshotAttributeMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryModifyDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
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
const serializeAws_queryModifyGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.NewGlobalClusterIdentifier !== undefined && input.NewGlobalClusterIdentifier !== null) {
        entries["NewGlobalClusterIdentifier"] = input.NewGlobalClusterIdentifier;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EngineVersion !== undefined && input.EngineVersion !== null) {
        entries["EngineVersion"] = input.EngineVersion;
    }
    if (input.AllowMajorVersionUpgrade !== undefined && input.AllowMajorVersionUpgrade !== null) {
        entries["AllowMajorVersionUpgrade"] = input.AllowMajorVersionUpgrade;
    }
    return entries;
};
const serializeAws_queryModifyOptionGroupMessage = (input, context) => {
    const entries = {};
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.OptionsToInclude !== undefined && input.OptionsToInclude !== null) {
        const memberEntries = serializeAws_queryOptionConfigurationList(input.OptionsToInclude, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionsToInclude.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OptionsToRemove !== undefined && input.OptionsToRemove !== null) {
        const memberEntries = serializeAws_queryOptionNamesList(input.OptionsToRemove, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionsToRemove.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
    }
    return entries;
};
const serializeAws_queryOptionConfiguration = (input, context) => {
    const entries = {};
    if (input.OptionName !== undefined && input.OptionName !== null) {
        entries["OptionName"] = input.OptionName;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.OptionVersion !== undefined && input.OptionVersion !== null) {
        entries["OptionVersion"] = input.OptionVersion;
    }
    if (input.DBSecurityGroupMemberships !== undefined && input.DBSecurityGroupMemberships !== null) {
        const memberEntries = serializeAws_queryDBSecurityGroupNameList(input.DBSecurityGroupMemberships, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBSecurityGroupMemberships.${key}`;
            entries[loc] = value;
        });
    }
    if (input.VpcSecurityGroupMemberships !== undefined && input.VpcSecurityGroupMemberships !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupMemberships, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupMemberships.${key}`;
            entries[loc] = value;
        });
    }
    if (input.OptionSettings !== undefined && input.OptionSettings !== null) {
        const memberEntries = serializeAws_queryOptionSettingsList(input.OptionSettings, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `OptionSettings.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryOptionConfigurationList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryOptionConfiguration(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`OptionConfiguration.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryOptionNamesList = (input, context) => {
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
const serializeAws_queryOptionSetting = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    if (input.DefaultValue !== undefined && input.DefaultValue !== null) {
        entries["DefaultValue"] = input.DefaultValue;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
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
    if (input.IsCollection !== undefined && input.IsCollection !== null) {
        entries["IsCollection"] = input.IsCollection;
    }
    return entries;
};
const serializeAws_queryOptionSettingsList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryOptionSetting(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`OptionSetting.${counter}.${key}`] = value;
        });
        counter++;
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
    if (input.SupportedEngineModes !== undefined && input.SupportedEngineModes !== null) {
        const memberEntries = serializeAws_queryEngineModeList(input.SupportedEngineModes, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SupportedEngineModes.${key}`;
            entries[loc] = value;
        });
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
const serializeAws_queryProcessorFeature = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Value !== undefined && input.Value !== null) {
        entries["Value"] = input.Value;
    }
    return entries;
};
const serializeAws_queryProcessorFeatureList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryProcessorFeature(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`ProcessorFeature.${counter}.${key}`] = value;
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
const serializeAws_queryPromoteReadReplicaMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.PreferredBackupWindow !== undefined && input.PreferredBackupWindow !== null) {
        entries["PreferredBackupWindow"] = input.PreferredBackupWindow;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedDBInstancesOfferingMessage = (input, context) => {
    const entries = {};
    if (input.ReservedDBInstancesOfferingId !== undefined && input.ReservedDBInstancesOfferingId !== null) {
        entries["ReservedDBInstancesOfferingId"] = input.ReservedDBInstancesOfferingId;
    }
    if (input.ReservedDBInstanceId !== undefined && input.ReservedDBInstanceId !== null) {
        entries["ReservedDBInstanceId"] = input.ReservedDBInstanceId;
    }
    if (input.DBInstanceCount !== undefined && input.DBInstanceCount !== null) {
        entries["DBInstanceCount"] = input.DBInstanceCount;
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
const serializeAws_queryRegisterDBProxyTargetsRequest = (input, context) => {
    const entries = {};
    if (input.DBProxyName !== undefined && input.DBProxyName !== null) {
        entries["DBProxyName"] = input.DBProxyName;
    }
    if (input.TargetGroupName !== undefined && input.TargetGroupName !== null) {
        entries["TargetGroupName"] = input.TargetGroupName;
    }
    if (input.DBInstanceIdentifiers !== undefined && input.DBInstanceIdentifiers !== null) {
        const memberEntries = serializeAws_queryStringList(input.DBInstanceIdentifiers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBInstanceIdentifiers.${key}`;
            entries[loc] = value;
        });
    }
    if (input.DBClusterIdentifiers !== undefined && input.DBClusterIdentifiers !== null) {
        const memberEntries = serializeAws_queryStringList(input.DBClusterIdentifiers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DBClusterIdentifiers.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryRemoveFromGlobalClusterMessage = (input, context) => {
    const entries = {};
    if (input.GlobalClusterIdentifier !== undefined && input.GlobalClusterIdentifier !== null) {
        entries["GlobalClusterIdentifier"] = input.GlobalClusterIdentifier;
    }
    if (input.DbClusterIdentifier !== undefined && input.DbClusterIdentifier !== null) {
        entries["DbClusterIdentifier"] = input.DbClusterIdentifier;
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
const serializeAws_queryRemoveRoleFromDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
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
const serializeAws_queryRestoreDBClusterFromS3Message = (input, context) => {
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
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.SourceEngine !== undefined && input.SourceEngine !== null) {
        entries["SourceEngine"] = input.SourceEngine;
    }
    if (input.SourceEngineVersion !== undefined && input.SourceEngineVersion !== null) {
        entries["SourceEngineVersion"] = input.SourceEngineVersion;
    }
    if (input.S3BucketName !== undefined && input.S3BucketName !== null) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3Prefix !== undefined && input.S3Prefix !== null) {
        entries["S3Prefix"] = input.S3Prefix;
    }
    if (input.S3IngestionRoleArn !== undefined && input.S3IngestionRoleArn !== null) {
        entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
    }
    if (input.BacktrackWindow !== undefined && input.BacktrackWindow !== null) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
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
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
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
    if (input.BacktrackWindow !== undefined && input.BacktrackWindow !== null) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EngineMode !== undefined && input.EngineMode !== null) {
        entries["EngineMode"] = input.EngineMode;
    }
    if (input.ScalingConfiguration !== undefined && input.ScalingConfiguration !== null) {
        const memberEntries = serializeAws_queryScalingConfiguration(input.ScalingConfiguration, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScalingConfiguration.${key}`;
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
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
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
    if (input.BacktrackWindow !== undefined && input.BacktrackWindow !== null) {
        entries["BacktrackWindow"] = input.BacktrackWindow;
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
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
    }
    return entries;
};
const serializeAws_queryRestoreDBInstanceFromDBSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.LicenseModel !== undefined && input.LicenseModel !== null) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.DBName !== undefined && input.DBName !== null) {
        entries["DBName"] = input.DBName;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.Iops !== undefined && input.Iops !== null) {
        entries["Iops"] = input.Iops;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
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
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
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
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined && input.UseDefaultProcessorFeatures !== null) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
    }
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.EnableCustomerOwnedIp !== undefined && input.EnableCustomerOwnedIp !== null) {
        entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
    }
    return entries;
};
const serializeAws_queryRestoreDBInstanceFromS3Message = (input, context) => {
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
    if (input.StorageType !== undefined && input.StorageType !== null) {
        entries["StorageType"] = input.StorageType;
    }
    if (input.StorageEncrypted !== undefined && input.StorageEncrypted !== null) {
        entries["StorageEncrypted"] = input.StorageEncrypted;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
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
    if (input.EnableIAMDatabaseAuthentication !== undefined && input.EnableIAMDatabaseAuthentication !== null) {
        entries["EnableIAMDatabaseAuthentication"] = input.EnableIAMDatabaseAuthentication;
    }
    if (input.SourceEngine !== undefined && input.SourceEngine !== null) {
        entries["SourceEngine"] = input.SourceEngine;
    }
    if (input.SourceEngineVersion !== undefined && input.SourceEngineVersion !== null) {
        entries["SourceEngineVersion"] = input.SourceEngineVersion;
    }
    if (input.S3BucketName !== undefined && input.S3BucketName !== null) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.S3Prefix !== undefined && input.S3Prefix !== null) {
        entries["S3Prefix"] = input.S3Prefix;
    }
    if (input.S3IngestionRoleArn !== undefined && input.S3IngestionRoleArn !== null) {
        entries["S3IngestionRoleArn"] = input.S3IngestionRoleArn;
    }
    if (input.EnablePerformanceInsights !== undefined && input.EnablePerformanceInsights !== null) {
        entries["EnablePerformanceInsights"] = input.EnablePerformanceInsights;
    }
    if (input.PerformanceInsightsKMSKeyId !== undefined && input.PerformanceInsightsKMSKeyId !== null) {
        entries["PerformanceInsightsKMSKeyId"] = input.PerformanceInsightsKMSKeyId;
    }
    if (input.PerformanceInsightsRetentionPeriod !== undefined && input.PerformanceInsightsRetentionPeriod !== null) {
        entries["PerformanceInsightsRetentionPeriod"] = input.PerformanceInsightsRetentionPeriod;
    }
    if (input.EnableCloudwatchLogsExports !== undefined && input.EnableCloudwatchLogsExports !== null) {
        const memberEntries = serializeAws_queryLogTypeList(input.EnableCloudwatchLogsExports, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EnableCloudwatchLogsExports.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined && input.UseDefaultProcessorFeatures !== null) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.MaxAllocatedStorage !== undefined && input.MaxAllocatedStorage !== null) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    return entries;
};
const serializeAws_queryRestoreDBInstanceToPointInTimeMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBInstanceIdentifier !== undefined && input.SourceDBInstanceIdentifier !== null) {
        entries["SourceDBInstanceIdentifier"] = input.SourceDBInstanceIdentifier;
    }
    if (input.TargetDBInstanceIdentifier !== undefined && input.TargetDBInstanceIdentifier !== null) {
        entries["TargetDBInstanceIdentifier"] = input.TargetDBInstanceIdentifier;
    }
    if (input.RestoreTime !== undefined && input.RestoreTime !== null) {
        entries["RestoreTime"] = input.RestoreTime.toISOString().split(".")[0] + "Z";
    }
    if (input.UseLatestRestorableTime !== undefined && input.UseLatestRestorableTime !== null) {
        entries["UseLatestRestorableTime"] = input.UseLatestRestorableTime;
    }
    if (input.DBInstanceClass !== undefined && input.DBInstanceClass !== null) {
        entries["DBInstanceClass"] = input.DBInstanceClass;
    }
    if (input.Port !== undefined && input.Port !== null) {
        entries["Port"] = input.Port;
    }
    if (input.AvailabilityZone !== undefined && input.AvailabilityZone !== null) {
        entries["AvailabilityZone"] = input.AvailabilityZone;
    }
    if (input.DBSubnetGroupName !== undefined && input.DBSubnetGroupName !== null) {
        entries["DBSubnetGroupName"] = input.DBSubnetGroupName;
    }
    if (input.MultiAZ !== undefined && input.MultiAZ !== null) {
        entries["MultiAZ"] = input.MultiAZ;
    }
    if (input.PubliclyAccessible !== undefined && input.PubliclyAccessible !== null) {
        entries["PubliclyAccessible"] = input.PubliclyAccessible;
    }
    if (input.AutoMinorVersionUpgrade !== undefined && input.AutoMinorVersionUpgrade !== null) {
        entries["AutoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
    }
    if (input.LicenseModel !== undefined && input.LicenseModel !== null) {
        entries["LicenseModel"] = input.LicenseModel;
    }
    if (input.DBName !== undefined && input.DBName !== null) {
        entries["DBName"] = input.DBName;
    }
    if (input.Engine !== undefined && input.Engine !== null) {
        entries["Engine"] = input.Engine;
    }
    if (input.Iops !== undefined && input.Iops !== null) {
        entries["Iops"] = input.Iops;
    }
    if (input.OptionGroupName !== undefined && input.OptionGroupName !== null) {
        entries["OptionGroupName"] = input.OptionGroupName;
    }
    if (input.CopyTagsToSnapshot !== undefined && input.CopyTagsToSnapshot !== null) {
        entries["CopyTagsToSnapshot"] = input.CopyTagsToSnapshot;
    }
    if (input.Tags !== undefined && input.Tags !== null) {
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
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
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Domain !== undefined && input.Domain !== null) {
        entries["Domain"] = input.Domain;
    }
    if (input.DomainIAMRoleName !== undefined && input.DomainIAMRoleName !== null) {
        entries["DomainIAMRoleName"] = input.DomainIAMRoleName;
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
    if (input.ProcessorFeatures !== undefined && input.ProcessorFeatures !== null) {
        const memberEntries = serializeAws_queryProcessorFeatureList(input.ProcessorFeatures, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProcessorFeatures.${key}`;
            entries[loc] = value;
        });
    }
    if (input.UseDefaultProcessorFeatures !== undefined && input.UseDefaultProcessorFeatures !== null) {
        entries["UseDefaultProcessorFeatures"] = input.UseDefaultProcessorFeatures;
    }
    if (input.DBParameterGroupName !== undefined && input.DBParameterGroupName !== null) {
        entries["DBParameterGroupName"] = input.DBParameterGroupName;
    }
    if (input.DeletionProtection !== undefined && input.DeletionProtection !== null) {
        entries["DeletionProtection"] = input.DeletionProtection;
    }
    if (input.SourceDbiResourceId !== undefined && input.SourceDbiResourceId !== null) {
        entries["SourceDbiResourceId"] = input.SourceDbiResourceId;
    }
    if (input.MaxAllocatedStorage !== undefined && input.MaxAllocatedStorage !== null) {
        entries["MaxAllocatedStorage"] = input.MaxAllocatedStorage;
    }
    if (input.SourceDBInstanceAutomatedBackupsArn !== undefined && input.SourceDBInstanceAutomatedBackupsArn !== null) {
        entries["SourceDBInstanceAutomatedBackupsArn"] = input.SourceDBInstanceAutomatedBackupsArn;
    }
    if (input.EnableCustomerOwnedIp !== undefined && input.EnableCustomerOwnedIp !== null) {
        entries["EnableCustomerOwnedIp"] = input.EnableCustomerOwnedIp;
    }
    return entries;
};
const serializeAws_queryRevokeDBSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
    if (input.DBSecurityGroupName !== undefined && input.DBSecurityGroupName !== null) {
        entries["DBSecurityGroupName"] = input.DBSecurityGroupName;
    }
    if (input.CIDRIP !== undefined && input.CIDRIP !== null) {
        entries["CIDRIP"] = input.CIDRIP;
    }
    if (input.EC2SecurityGroupName !== undefined && input.EC2SecurityGroupName !== null) {
        entries["EC2SecurityGroupName"] = input.EC2SecurityGroupName;
    }
    if (input.EC2SecurityGroupId !== undefined && input.EC2SecurityGroupId !== null) {
        entries["EC2SecurityGroupId"] = input.EC2SecurityGroupId;
    }
    if (input.EC2SecurityGroupOwnerId !== undefined && input.EC2SecurityGroupOwnerId !== null) {
        entries["EC2SecurityGroupOwnerId"] = input.EC2SecurityGroupOwnerId;
    }
    return entries;
};
const serializeAws_queryScalingConfiguration = (input, context) => {
    const entries = {};
    if (input.MinCapacity !== undefined && input.MinCapacity !== null) {
        entries["MinCapacity"] = input.MinCapacity;
    }
    if (input.MaxCapacity !== undefined && input.MaxCapacity !== null) {
        entries["MaxCapacity"] = input.MaxCapacity;
    }
    if (input.AutoPause !== undefined && input.AutoPause !== null) {
        entries["AutoPause"] = input.AutoPause;
    }
    if (input.SecondsUntilAutoPause !== undefined && input.SecondsUntilAutoPause !== null) {
        entries["SecondsUntilAutoPause"] = input.SecondsUntilAutoPause;
    }
    if (input.TimeoutAction !== undefined && input.TimeoutAction !== null) {
        entries["TimeoutAction"] = input.TimeoutAction;
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
const serializeAws_queryStartActivityStreamRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.Mode !== undefined && input.Mode !== null) {
        entries["Mode"] = input.Mode;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
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
const serializeAws_queryStartDBInstanceAutomatedBackupsReplicationMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBInstanceArn !== undefined && input.SourceDBInstanceArn !== null) {
        entries["SourceDBInstanceArn"] = input.SourceDBInstanceArn;
    }
    if (input.BackupRetentionPeriod !== undefined && input.BackupRetentionPeriod !== null) {
        entries["BackupRetentionPeriod"] = input.BackupRetentionPeriod;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.PreSignedUrl !== undefined && input.PreSignedUrl !== null) {
        entries["PreSignedUrl"] = input.PreSignedUrl;
    }
    return entries;
};
const serializeAws_queryStartDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    return entries;
};
const serializeAws_queryStartExportTaskMessage = (input, context) => {
    const entries = {};
    if (input.ExportTaskIdentifier !== undefined && input.ExportTaskIdentifier !== null) {
        entries["ExportTaskIdentifier"] = input.ExportTaskIdentifier;
    }
    if (input.SourceArn !== undefined && input.SourceArn !== null) {
        entries["SourceArn"] = input.SourceArn;
    }
    if (input.S3BucketName !== undefined && input.S3BucketName !== null) {
        entries["S3BucketName"] = input.S3BucketName;
    }
    if (input.IamRoleArn !== undefined && input.IamRoleArn !== null) {
        entries["IamRoleArn"] = input.IamRoleArn;
    }
    if (input.KmsKeyId !== undefined && input.KmsKeyId !== null) {
        entries["KmsKeyId"] = input.KmsKeyId;
    }
    if (input.S3Prefix !== undefined && input.S3Prefix !== null) {
        entries["S3Prefix"] = input.S3Prefix;
    }
    if (input.ExportOnly !== undefined && input.ExportOnly !== null) {
        const memberEntries = serializeAws_queryStringList(input.ExportOnly, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ExportOnly.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryStopActivityStreamRequest = (input, context) => {
    const entries = {};
    if (input.ResourceArn !== undefined && input.ResourceArn !== null) {
        entries["ResourceArn"] = input.ResourceArn;
    }
    if (input.ApplyImmediately !== undefined && input.ApplyImmediately !== null) {
        entries["ApplyImmediately"] = input.ApplyImmediately;
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
const serializeAws_queryStopDBInstanceAutomatedBackupsReplicationMessage = (input, context) => {
    const entries = {};
    if (input.SourceDBInstanceArn !== undefined && input.SourceDBInstanceArn !== null) {
        entries["SourceDBInstanceArn"] = input.SourceDBInstanceArn;
    }
    return entries;
};
const serializeAws_queryStopDBInstanceMessage = (input, context) => {
    const entries = {};
    if (input.DBInstanceIdentifier !== undefined && input.DBInstanceIdentifier !== null) {
        entries["DBInstanceIdentifier"] = input.DBInstanceIdentifier;
    }
    if (input.DBSnapshotIdentifier !== undefined && input.DBSnapshotIdentifier !== null) {
        entries["DBSnapshotIdentifier"] = input.DBSnapshotIdentifier;
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
const serializeAws_queryUserAuthConfig = (input, context) => {
    const entries = {};
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
    }
    if (input.UserName !== undefined && input.UserName !== null) {
        entries["UserName"] = input.UserName;
    }
    if (input.AuthScheme !== undefined && input.AuthScheme !== null) {
        entries["AuthScheme"] = input.AuthScheme;
    }
    if (input.SecretArn !== undefined && input.SecretArn !== null) {
        entries["SecretArn"] = input.SecretArn;
    }
    if (input.IAMAuth !== undefined && input.IAMAuth !== null) {
        entries["IAMAuth"] = input.IAMAuth;
    }
    return entries;
};
const serializeAws_queryUserAuthConfigList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryUserAuthConfig(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
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
const deserializeAws_queryAccountAttributesMessage = (output, context) => {
    let contents = {
        AccountQuotas: undefined,
    };
    if (output.AccountQuotas === "") {
        contents.AccountQuotas = [];
    }
    if (output["AccountQuotas"] !== undefined && output["AccountQuotas"]["AccountQuota"] !== undefined) {
        contents.AccountQuotas = deserializeAws_queryAccountQuotaList(smithy_client_1.getArrayIfSingleItem(output["AccountQuotas"]["AccountQuota"]), context);
    }
    return contents;
};
const deserializeAws_queryAccountQuota = (output, context) => {
    let contents = {
        AccountQuotaName: undefined,
        Used: undefined,
        Max: undefined,
    };
    if (output["AccountQuotaName"] !== undefined) {
        contents.AccountQuotaName = output["AccountQuotaName"];
    }
    if (output["Used"] !== undefined) {
        contents.Used = parseInt(output["Used"]);
    }
    if (output["Max"] !== undefined) {
        contents.Max = parseInt(output["Max"]);
    }
    return contents;
};
const deserializeAws_queryAccountQuotaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccountQuota(entry, context);
    });
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
const deserializeAws_queryAuthorizationQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizeDBSecurityGroupIngressResult = (output, context) => {
    let contents = {
        DBSecurityGroup: undefined,
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
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
const deserializeAws_queryAvailableProcessorFeature = (output, context) => {
    let contents = {
        Name: undefined,
        DefaultValue: undefined,
        AllowedValues: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    return contents;
};
const deserializeAws_queryAvailableProcessorFeatureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAvailableProcessorFeature(entry, context);
    });
};
const deserializeAws_queryBackupPolicyNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCertificate = (output, context) => {
    let contents = {
        CertificateIdentifier: undefined,
        CertificateType: undefined,
        Thumbprint: undefined,
        ValidFrom: undefined,
        ValidTill: undefined,
        CertificateArn: undefined,
        CustomerOverride: undefined,
        CustomerOverrideValidTill: undefined,
    };
    if (output["CertificateIdentifier"] !== undefined) {
        contents.CertificateIdentifier = output["CertificateIdentifier"];
    }
    if (output["CertificateType"] !== undefined) {
        contents.CertificateType = output["CertificateType"];
    }
    if (output["Thumbprint"] !== undefined) {
        contents.Thumbprint = output["Thumbprint"];
    }
    if (output["ValidFrom"] !== undefined) {
        contents.ValidFrom = new Date(output["ValidFrom"]);
    }
    if (output["ValidTill"] !== undefined) {
        contents.ValidTill = new Date(output["ValidTill"]);
    }
    if (output["CertificateArn"] !== undefined) {
        contents.CertificateArn = output["CertificateArn"];
    }
    if (output["CustomerOverride"] !== undefined) {
        contents.CustomerOverride = output["CustomerOverride"] == "true";
    }
    if (output["CustomerOverrideValidTill"] !== undefined) {
        contents.CustomerOverrideValidTill = new Date(output["CustomerOverrideValidTill"]);
    }
    return contents;
};
const deserializeAws_queryCertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCertificate(entry, context);
    });
};
const deserializeAws_queryCertificateMessage = (output, context) => {
    let contents = {
        Certificates: undefined,
        Marker: undefined,
    };
    if (output.Certificates === "") {
        contents.Certificates = [];
    }
    if (output["Certificates"] !== undefined && output["Certificates"]["Certificate"] !== undefined) {
        contents.Certificates = deserializeAws_queryCertificateList(smithy_client_1.getArrayIfSingleItem(output["Certificates"]["Certificate"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
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
const deserializeAws_queryClusterPendingModifiedValues = (output, context) => {
    let contents = {
        PendingCloudwatchLogsExports: undefined,
        DBClusterIdentifier: undefined,
        MasterUserPassword: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        EngineVersion: undefined,
    };
    if (output["PendingCloudwatchLogsExports"] !== undefined) {
        contents.PendingCloudwatchLogsExports = deserializeAws_queryPendingCloudwatchLogsExports(output["PendingCloudwatchLogsExports"], context);
    }
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["MasterUserPassword"] !== undefined) {
        contents.MasterUserPassword = output["MasterUserPassword"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    return contents;
};
const deserializeAws_queryConnectionPoolConfigurationInfo = (output, context) => {
    let contents = {
        MaxConnectionsPercent: undefined,
        MaxIdleConnectionsPercent: undefined,
        ConnectionBorrowTimeout: undefined,
        SessionPinningFilters: undefined,
        InitQuery: undefined,
    };
    if (output["MaxConnectionsPercent"] !== undefined) {
        contents.MaxConnectionsPercent = parseInt(output["MaxConnectionsPercent"]);
    }
    if (output["MaxIdleConnectionsPercent"] !== undefined) {
        contents.MaxIdleConnectionsPercent = parseInt(output["MaxIdleConnectionsPercent"]);
    }
    if (output["ConnectionBorrowTimeout"] !== undefined) {
        contents.ConnectionBorrowTimeout = parseInt(output["ConnectionBorrowTimeout"]);
    }
    if (output.SessionPinningFilters === "") {
        contents.SessionPinningFilters = [];
    }
    if (output["SessionPinningFilters"] !== undefined && output["SessionPinningFilters"]["member"] !== undefined) {
        contents.SessionPinningFilters = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["SessionPinningFilters"]["member"]), context);
    }
    if (output["InitQuery"] !== undefined) {
        contents.InitQuery = output["InitQuery"];
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
const deserializeAws_queryCopyDBSnapshotResult = (output, context) => {
    let contents = {
        DBSnapshot: undefined,
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCopyOptionGroupResult = (output, context) => {
    let contents = {
        OptionGroup: undefined,
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateCustomAvailabilityZoneResult = (output, context) => {
    let contents = {
        CustomAvailabilityZone: undefined,
    };
    if (output["CustomAvailabilityZone"] !== undefined) {
        contents.CustomAvailabilityZone = deserializeAws_queryCustomAvailabilityZone(output["CustomAvailabilityZone"], context);
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
const deserializeAws_queryCreateDBInstanceReadReplicaResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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
const deserializeAws_queryCreateDBProxyEndpointResponse = (output, context) => {
    let contents = {
        DBProxyEndpoint: undefined,
    };
    if (output["DBProxyEndpoint"] !== undefined) {
        contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBProxyResponse = (output, context) => {
    let contents = {
        DBProxy: undefined,
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSecurityGroupResult = (output, context) => {
    let contents = {
        DBSecurityGroup: undefined,
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateDBSnapshotResult = (output, context) => {
    let contents = {
        DBSnapshot: undefined,
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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
const deserializeAws_queryCreateGlobalClusterResult = (output, context) => {
    let contents = {
        GlobalCluster: undefined,
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateOptionGroupResult = (output, context) => {
    let contents = {
        OptionGroup: undefined,
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZone = (output, context) => {
    let contents = {
        CustomAvailabilityZoneId: undefined,
        CustomAvailabilityZoneName: undefined,
        CustomAvailabilityZoneStatus: undefined,
        VpnDetails: undefined,
    };
    if (output["CustomAvailabilityZoneId"] !== undefined) {
        contents.CustomAvailabilityZoneId = output["CustomAvailabilityZoneId"];
    }
    if (output["CustomAvailabilityZoneName"] !== undefined) {
        contents.CustomAvailabilityZoneName = output["CustomAvailabilityZoneName"];
    }
    if (output["CustomAvailabilityZoneStatus"] !== undefined) {
        contents.CustomAvailabilityZoneStatus = output["CustomAvailabilityZoneStatus"];
    }
    if (output["VpnDetails"] !== undefined) {
        contents.VpnDetails = deserializeAws_queryVpnDetails(output["VpnDetails"], context);
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCustomAvailabilityZone(entry, context);
    });
};
const deserializeAws_queryCustomAvailabilityZoneMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        CustomAvailabilityZones: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.CustomAvailabilityZones === "") {
        contents.CustomAvailabilityZones = [];
    }
    if (output["CustomAvailabilityZones"] !== undefined &&
        output["CustomAvailabilityZones"]["CustomAvailabilityZone"] !== undefined) {
        contents.CustomAvailabilityZones = deserializeAws_queryCustomAvailabilityZoneList(smithy_client_1.getArrayIfSingleItem(output["CustomAvailabilityZones"]["CustomAvailabilityZone"]), context);
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCustomAvailabilityZoneQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
        CustomEndpoints: undefined,
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
        EarliestBacktrackTime: undefined,
        BacktrackWindow: undefined,
        BacktrackConsumedChangeRecords: undefined,
        EnabledCloudwatchLogsExports: undefined,
        Capacity: undefined,
        EngineMode: undefined,
        ScalingConfigurationInfo: undefined,
        DeletionProtection: undefined,
        HttpEndpointEnabled: undefined,
        ActivityStreamMode: undefined,
        ActivityStreamStatus: undefined,
        ActivityStreamKmsKeyId: undefined,
        ActivityStreamKinesisStreamName: undefined,
        CopyTagsToSnapshot: undefined,
        CrossAccountClone: undefined,
        DomainMemberships: undefined,
        TagList: undefined,
        GlobalWriteForwardingStatus: undefined,
        GlobalWriteForwardingRequested: undefined,
        PendingModifiedValues: undefined,
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
    if (output.CustomEndpoints === "") {
        contents.CustomEndpoints = [];
    }
    if (output["CustomEndpoints"] !== undefined && output["CustomEndpoints"]["member"] !== undefined) {
        contents.CustomEndpoints = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["CustomEndpoints"]["member"]), context);
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
    if (output["EarliestBacktrackTime"] !== undefined) {
        contents.EarliestBacktrackTime = new Date(output["EarliestBacktrackTime"]);
    }
    if (output["BacktrackWindow"] !== undefined) {
        contents.BacktrackWindow = parseInt(output["BacktrackWindow"]);
    }
    if (output["BacktrackConsumedChangeRecords"] !== undefined) {
        contents.BacktrackConsumedChangeRecords = parseInt(output["BacktrackConsumedChangeRecords"]);
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
    }
    if (output["Capacity"] !== undefined) {
        contents.Capacity = parseInt(output["Capacity"]);
    }
    if (output["EngineMode"] !== undefined) {
        contents.EngineMode = output["EngineMode"];
    }
    if (output["ScalingConfigurationInfo"] !== undefined) {
        contents.ScalingConfigurationInfo = deserializeAws_queryScalingConfigurationInfo(output["ScalingConfigurationInfo"], context);
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output["HttpEndpointEnabled"] !== undefined) {
        contents.HttpEndpointEnabled = output["HttpEndpointEnabled"] == "true";
    }
    if (output["ActivityStreamMode"] !== undefined) {
        contents.ActivityStreamMode = output["ActivityStreamMode"];
    }
    if (output["ActivityStreamStatus"] !== undefined) {
        contents.ActivityStreamStatus = output["ActivityStreamStatus"];
    }
    if (output["ActivityStreamKmsKeyId"] !== undefined) {
        contents.ActivityStreamKmsKeyId = output["ActivityStreamKmsKeyId"];
    }
    if (output["ActivityStreamKinesisStreamName"] !== undefined) {
        contents.ActivityStreamKinesisStreamName = output["ActivityStreamKinesisStreamName"];
    }
    if (output["CopyTagsToSnapshot"] !== undefined) {
        contents.CopyTagsToSnapshot = output["CopyTagsToSnapshot"] == "true";
    }
    if (output["CrossAccountClone"] !== undefined) {
        contents.CrossAccountClone = output["CrossAccountClone"] == "true";
    }
    if (output.DomainMemberships === "") {
        contents.DomainMemberships = [];
    }
    if (output["DomainMemberships"] !== undefined && output["DomainMemberships"]["DomainMembership"] !== undefined) {
        contents.DomainMemberships = deserializeAws_queryDomainMembershipList(smithy_client_1.getArrayIfSingleItem(output["DomainMemberships"]["DomainMembership"]), context);
    }
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["TagList"]["Tag"]), context);
    }
    if (output["GlobalWriteForwardingStatus"] !== undefined) {
        contents.GlobalWriteForwardingStatus = output["GlobalWriteForwardingStatus"];
    }
    if (output["GlobalWriteForwardingRequested"] !== undefined) {
        contents.GlobalWriteForwardingRequested = output["GlobalWriteForwardingRequested"] == "true";
    }
    if (output["PendingModifiedValues"] !== undefined) {
        contents.PendingModifiedValues = deserializeAws_queryClusterPendingModifiedValues(output["PendingModifiedValues"], context);
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
const deserializeAws_queryDBClusterBacktrack = (output, context) => {
    let contents = {
        DBClusterIdentifier: undefined,
        BacktrackIdentifier: undefined,
        BacktrackTo: undefined,
        BacktrackedFrom: undefined,
        BacktrackRequestCreationTime: undefined,
        Status: undefined,
    };
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["BacktrackIdentifier"] !== undefined) {
        contents.BacktrackIdentifier = output["BacktrackIdentifier"];
    }
    if (output["BacktrackTo"] !== undefined) {
        contents.BacktrackTo = new Date(output["BacktrackTo"]);
    }
    if (output["BacktrackedFrom"] !== undefined) {
        contents.BacktrackedFrom = new Date(output["BacktrackedFrom"]);
    }
    if (output["BacktrackRequestCreationTime"] !== undefined) {
        contents.BacktrackRequestCreationTime = new Date(output["BacktrackRequestCreationTime"]);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBClusterBacktrackList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBClusterBacktrack(entry, context);
    });
};
const deserializeAws_queryDBClusterBacktrackMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        DBClusterBacktracks: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBClusterBacktracks === "") {
        contents.DBClusterBacktracks = [];
    }
    if (output["DBClusterBacktracks"] !== undefined &&
        output["DBClusterBacktracks"]["DBClusterBacktrack"] !== undefined) {
        contents.DBClusterBacktracks = deserializeAws_queryDBClusterBacktrackList(smithy_client_1.getArrayIfSingleItem(output["DBClusterBacktracks"]["DBClusterBacktrack"]), context);
    }
    return contents;
};
const deserializeAws_queryDBClusterBacktrackNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBClusterCapacityInfo = (output, context) => {
    let contents = {
        DBClusterIdentifier: undefined,
        PendingCapacity: undefined,
        CurrentCapacity: undefined,
        SecondsBeforeTimeout: undefined,
        TimeoutAction: undefined,
    };
    if (output["DBClusterIdentifier"] !== undefined) {
        contents.DBClusterIdentifier = output["DBClusterIdentifier"];
    }
    if (output["PendingCapacity"] !== undefined) {
        contents.PendingCapacity = parseInt(output["PendingCapacity"]);
    }
    if (output["CurrentCapacity"] !== undefined) {
        contents.CurrentCapacity = parseInt(output["CurrentCapacity"]);
    }
    if (output["SecondsBeforeTimeout"] !== undefined) {
        contents.SecondsBeforeTimeout = parseInt(output["SecondsBeforeTimeout"]);
    }
    if (output["TimeoutAction"] !== undefined) {
        contents.TimeoutAction = output["TimeoutAction"];
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
        EngineMode: undefined,
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
        TagList: undefined,
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
    if (output["EngineMode"] !== undefined) {
        contents.EngineMode = output["EngineMode"];
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
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["TagList"]["Tag"]), context);
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
        SupportedNcharCharacterSets: undefined,
        ValidUpgradeTarget: undefined,
        SupportedTimezones: undefined,
        ExportableLogTypes: undefined,
        SupportsLogExportsToCloudwatchLogs: undefined,
        SupportsReadReplica: undefined,
        SupportedEngineModes: undefined,
        SupportedFeatureNames: undefined,
        Status: undefined,
        SupportsParallelQuery: undefined,
        SupportsGlobalDatabases: undefined,
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
    if (output.SupportedNcharCharacterSets === "") {
        contents.SupportedNcharCharacterSets = [];
    }
    if (output["SupportedNcharCharacterSets"] !== undefined &&
        output["SupportedNcharCharacterSets"]["CharacterSet"] !== undefined) {
        contents.SupportedNcharCharacterSets = deserializeAws_querySupportedCharacterSetsList(smithy_client_1.getArrayIfSingleItem(output["SupportedNcharCharacterSets"]["CharacterSet"]), context);
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
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(smithy_client_1.getArrayIfSingleItem(output["SupportedEngineModes"]["member"]), context);
    }
    if (output.SupportedFeatureNames === "") {
        contents.SupportedFeatureNames = [];
    }
    if (output["SupportedFeatureNames"] !== undefined && output["SupportedFeatureNames"]["member"] !== undefined) {
        contents.SupportedFeatureNames = deserializeAws_queryFeatureNameList(smithy_client_1.getArrayIfSingleItem(output["SupportedFeatureNames"]["member"]), context);
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SupportsParallelQuery"] !== undefined) {
        contents.SupportsParallelQuery = output["SupportsParallelQuery"] == "true";
    }
    if (output["SupportsGlobalDatabases"] !== undefined) {
        contents.SupportsGlobalDatabases = output["SupportsGlobalDatabases"] == "true";
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
        ReplicaMode: undefined,
        LicenseModel: undefined,
        Iops: undefined,
        OptionGroupMemberships: undefined,
        CharacterSetName: undefined,
        NcharCharacterSetName: undefined,
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
        PerformanceInsightsRetentionPeriod: undefined,
        EnabledCloudwatchLogsExports: undefined,
        ProcessorFeatures: undefined,
        DeletionProtection: undefined,
        AssociatedRoles: undefined,
        ListenerEndpoint: undefined,
        MaxAllocatedStorage: undefined,
        TagList: undefined,
        DBInstanceAutomatedBackupsReplications: undefined,
        CustomerOwnedIpEnabled: undefined,
        AwsBackupRecoveryPointArn: undefined,
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
    if (output["ReplicaMode"] !== undefined) {
        contents.ReplicaMode = output["ReplicaMode"];
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
    if (output["NcharCharacterSetName"] !== undefined) {
        contents.NcharCharacterSetName = output["NcharCharacterSetName"];
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
    if (output["PerformanceInsightsRetentionPeriod"] !== undefined) {
        contents.PerformanceInsightsRetentionPeriod = parseInt(output["PerformanceInsightsRetentionPeriod"]);
    }
    if (output.EnabledCloudwatchLogsExports === "") {
        contents.EnabledCloudwatchLogsExports = [];
    }
    if (output["EnabledCloudwatchLogsExports"] !== undefined &&
        output["EnabledCloudwatchLogsExports"]["member"] !== undefined) {
        contents.EnabledCloudwatchLogsExports = deserializeAws_queryLogTypeList(smithy_client_1.getArrayIfSingleItem(output["EnabledCloudwatchLogsExports"]["member"]), context);
    }
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined && output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(smithy_client_1.getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]), context);
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output.AssociatedRoles === "") {
        contents.AssociatedRoles = [];
    }
    if (output["AssociatedRoles"] !== undefined && output["AssociatedRoles"]["DBInstanceRole"] !== undefined) {
        contents.AssociatedRoles = deserializeAws_queryDBInstanceRoles(smithy_client_1.getArrayIfSingleItem(output["AssociatedRoles"]["DBInstanceRole"]), context);
    }
    if (output["ListenerEndpoint"] !== undefined) {
        contents.ListenerEndpoint = deserializeAws_queryEndpoint(output["ListenerEndpoint"], context);
    }
    if (output["MaxAllocatedStorage"] !== undefined) {
        contents.MaxAllocatedStorage = parseInt(output["MaxAllocatedStorage"]);
    }
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["TagList"]["Tag"]), context);
    }
    if (output.DBInstanceAutomatedBackupsReplications === "") {
        contents.DBInstanceAutomatedBackupsReplications = [];
    }
    if (output["DBInstanceAutomatedBackupsReplications"] !== undefined &&
        output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"] !== undefined) {
        contents.DBInstanceAutomatedBackupsReplications = deserializeAws_queryDBInstanceAutomatedBackupsReplicationList(smithy_client_1.getArrayIfSingleItem(output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"]), context);
    }
    if (output["CustomerOwnedIpEnabled"] !== undefined) {
        contents.CustomerOwnedIpEnabled = output["CustomerOwnedIpEnabled"] == "true";
    }
    if (output["AwsBackupRecoveryPointArn"] !== undefined) {
        contents.AwsBackupRecoveryPointArn = output["AwsBackupRecoveryPointArn"];
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
const deserializeAws_queryDBInstanceAutomatedBackup = (output, context) => {
    let contents = {
        DBInstanceArn: undefined,
        DbiResourceId: undefined,
        Region: undefined,
        DBInstanceIdentifier: undefined,
        RestoreWindow: undefined,
        AllocatedStorage: undefined,
        Status: undefined,
        Port: undefined,
        AvailabilityZone: undefined,
        VpcId: undefined,
        InstanceCreateTime: undefined,
        MasterUsername: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        Iops: undefined,
        OptionGroupName: undefined,
        TdeCredentialArn: undefined,
        Encrypted: undefined,
        StorageType: undefined,
        KmsKeyId: undefined,
        Timezone: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        BackupRetentionPeriod: undefined,
        DBInstanceAutomatedBackupsArn: undefined,
        DBInstanceAutomatedBackupsReplications: undefined,
    };
    if (output["DBInstanceArn"] !== undefined) {
        contents.DBInstanceArn = output["DBInstanceArn"];
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output["Region"] !== undefined) {
        contents.Region = output["Region"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
    }
    if (output["RestoreWindow"] !== undefined) {
        contents.RestoreWindow = deserializeAws_queryRestoreWindow(output["RestoreWindow"], context);
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
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
    }
    if (output["MasterUsername"] !== undefined) {
        contents.MasterUsername = output["MasterUsername"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
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
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output["BackupRetentionPeriod"] !== undefined) {
        contents.BackupRetentionPeriod = parseInt(output["BackupRetentionPeriod"]);
    }
    if (output["DBInstanceAutomatedBackupsArn"] !== undefined) {
        contents.DBInstanceAutomatedBackupsArn = output["DBInstanceAutomatedBackupsArn"];
    }
    if (output.DBInstanceAutomatedBackupsReplications === "") {
        contents.DBInstanceAutomatedBackupsReplications = [];
    }
    if (output["DBInstanceAutomatedBackupsReplications"] !== undefined &&
        output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"] !== undefined) {
        contents.DBInstanceAutomatedBackupsReplications = deserializeAws_queryDBInstanceAutomatedBackupsReplicationList(smithy_client_1.getArrayIfSingleItem(output["DBInstanceAutomatedBackupsReplications"]["DBInstanceAutomatedBackupsReplication"]), context);
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstanceAutomatedBackup(entry, context);
    });
};
const deserializeAws_queryDBInstanceAutomatedBackupMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        DBInstanceAutomatedBackups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBInstanceAutomatedBackups === "") {
        contents.DBInstanceAutomatedBackups = [];
    }
    if (output["DBInstanceAutomatedBackups"] !== undefined &&
        output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"] !== undefined) {
        contents.DBInstanceAutomatedBackups = deserializeAws_queryDBInstanceAutomatedBackupList(smithy_client_1.getArrayIfSingleItem(output["DBInstanceAutomatedBackups"]["DBInstanceAutomatedBackup"]), context);
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupsReplication = (output, context) => {
    let contents = {
        DBInstanceAutomatedBackupsArn: undefined,
    };
    if (output["DBInstanceAutomatedBackupsArn"] !== undefined) {
        contents.DBInstanceAutomatedBackupsArn = output["DBInstanceAutomatedBackupsArn"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceAutomatedBackupsReplicationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstanceAutomatedBackupsReplication(entry, context);
    });
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
const deserializeAws_queryDBInstanceRole = (output, context) => {
    let contents = {
        RoleArn: undefined,
        FeatureName: undefined,
        Status: undefined,
    };
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["FeatureName"] !== undefined) {
        contents.FeatureName = output["FeatureName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoleAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoleNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoleQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBInstanceRoles = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBInstanceRole(entry, context);
    });
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
const deserializeAws_queryDBLogFileNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
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
const deserializeAws_queryDBProxy = (output, context) => {
    let contents = {
        DBProxyName: undefined,
        DBProxyArn: undefined,
        Status: undefined,
        EngineFamily: undefined,
        VpcId: undefined,
        VpcSecurityGroupIds: undefined,
        VpcSubnetIds: undefined,
        Auth: undefined,
        RoleArn: undefined,
        Endpoint: undefined,
        RequireTLS: undefined,
        IdleClientTimeout: undefined,
        DebugLogging: undefined,
        CreatedDate: undefined,
        UpdatedDate: undefined,
    };
    if (output["DBProxyName"] !== undefined) {
        contents.DBProxyName = output["DBProxyName"];
    }
    if (output["DBProxyArn"] !== undefined) {
        contents.DBProxyArn = output["DBProxyArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EngineFamily"] !== undefined) {
        contents.EngineFamily = output["EngineFamily"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.VpcSecurityGroupIds === "") {
        contents.VpcSecurityGroupIds = [];
    }
    if (output["VpcSecurityGroupIds"] !== undefined && output["VpcSecurityGroupIds"]["member"] !== undefined) {
        contents.VpcSecurityGroupIds = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]), context);
    }
    if (output.VpcSubnetIds === "") {
        contents.VpcSubnetIds = [];
    }
    if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
        contents.VpcSubnetIds = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["VpcSubnetIds"]["member"]), context);
    }
    if (output.Auth === "") {
        contents.Auth = [];
    }
    if (output["Auth"] !== undefined && output["Auth"]["member"] !== undefined) {
        contents.Auth = deserializeAws_queryUserAuthConfigInfoList(smithy_client_1.getArrayIfSingleItem(output["Auth"]["member"]), context);
    }
    if (output["RoleArn"] !== undefined) {
        contents.RoleArn = output["RoleArn"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["RequireTLS"] !== undefined) {
        contents.RequireTLS = output["RequireTLS"] == "true";
    }
    if (output["IdleClientTimeout"] !== undefined) {
        contents.IdleClientTimeout = parseInt(output["IdleClientTimeout"]);
    }
    if (output["DebugLogging"] !== undefined) {
        contents.DebugLogging = output["DebugLogging"] == "true";
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["UpdatedDate"] !== undefined) {
        contents.UpdatedDate = new Date(output["UpdatedDate"]);
    }
    return contents;
};
const deserializeAws_queryDBProxyAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyEndpoint = (output, context) => {
    let contents = {
        DBProxyEndpointName: undefined,
        DBProxyEndpointArn: undefined,
        DBProxyName: undefined,
        Status: undefined,
        VpcId: undefined,
        VpcSecurityGroupIds: undefined,
        VpcSubnetIds: undefined,
        Endpoint: undefined,
        CreatedDate: undefined,
        TargetRole: undefined,
        IsDefault: undefined,
    };
    if (output["DBProxyEndpointName"] !== undefined) {
        contents.DBProxyEndpointName = output["DBProxyEndpointName"];
    }
    if (output["DBProxyEndpointArn"] !== undefined) {
        contents.DBProxyEndpointArn = output["DBProxyEndpointArn"];
    }
    if (output["DBProxyName"] !== undefined) {
        contents.DBProxyName = output["DBProxyName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.VpcSecurityGroupIds === "") {
        contents.VpcSecurityGroupIds = [];
    }
    if (output["VpcSecurityGroupIds"] !== undefined && output["VpcSecurityGroupIds"]["member"] !== undefined) {
        contents.VpcSecurityGroupIds = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroupIds"]["member"]), context);
    }
    if (output.VpcSubnetIds === "") {
        contents.VpcSubnetIds = [];
    }
    if (output["VpcSubnetIds"] !== undefined && output["VpcSubnetIds"]["member"] !== undefined) {
        contents.VpcSubnetIds = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["VpcSubnetIds"]["member"]), context);
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["TargetRole"] !== undefined) {
        contents.TargetRole = output["TargetRole"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
const deserializeAws_queryDBProxyEndpointAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyEndpointList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBProxyEndpoint(entry, context);
    });
};
const deserializeAws_queryDBProxyEndpointNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyEndpointQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBProxy(entry, context);
    });
};
const deserializeAws_queryDBProxyNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTarget = (output, context) => {
    let contents = {
        TargetArn: undefined,
        Endpoint: undefined,
        TrackedClusterId: undefined,
        RdsResourceId: undefined,
        Port: undefined,
        Type: undefined,
        Role: undefined,
        TargetHealth: undefined,
    };
    if (output["TargetArn"] !== undefined) {
        contents.TargetArn = output["TargetArn"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["TrackedClusterId"] !== undefined) {
        contents.TrackedClusterId = output["TrackedClusterId"];
    }
    if (output["RdsResourceId"] !== undefined) {
        contents.RdsResourceId = output["RdsResourceId"];
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["Type"] !== undefined) {
        contents.Type = output["Type"];
    }
    if (output["Role"] !== undefined) {
        contents.Role = output["Role"];
    }
    if (output["TargetHealth"] !== undefined) {
        contents.TargetHealth = deserializeAws_queryTargetHealth(output["TargetHealth"], context);
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetAlreadyRegisteredFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetGroup = (output, context) => {
    let contents = {
        DBProxyName: undefined,
        TargetGroupName: undefined,
        TargetGroupArn: undefined,
        IsDefault: undefined,
        Status: undefined,
        ConnectionPoolConfig: undefined,
        CreatedDate: undefined,
        UpdatedDate: undefined,
    };
    if (output["DBProxyName"] !== undefined) {
        contents.DBProxyName = output["DBProxyName"];
    }
    if (output["TargetGroupName"] !== undefined) {
        contents.TargetGroupName = output["TargetGroupName"];
    }
    if (output["TargetGroupArn"] !== undefined) {
        contents.TargetGroupArn = output["TargetGroupArn"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["ConnectionPoolConfig"] !== undefined) {
        contents.ConnectionPoolConfig = deserializeAws_queryConnectionPoolConfigurationInfo(output["ConnectionPoolConfig"], context);
    }
    if (output["CreatedDate"] !== undefined) {
        contents.CreatedDate = new Date(output["CreatedDate"]);
    }
    if (output["UpdatedDate"] !== undefined) {
        contents.UpdatedDate = new Date(output["UpdatedDate"]);
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBProxyTargetNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroup = (output, context) => {
    let contents = {
        OwnerId: undefined,
        DBSecurityGroupName: undefined,
        DBSecurityGroupDescription: undefined,
        VpcId: undefined,
        EC2SecurityGroups: undefined,
        IPRanges: undefined,
        DBSecurityGroupArn: undefined,
    };
    if (output["OwnerId"] !== undefined) {
        contents.OwnerId = output["OwnerId"];
    }
    if (output["DBSecurityGroupName"] !== undefined) {
        contents.DBSecurityGroupName = output["DBSecurityGroupName"];
    }
    if (output["DBSecurityGroupDescription"] !== undefined) {
        contents.DBSecurityGroupDescription = output["DBSecurityGroupDescription"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output.EC2SecurityGroups === "") {
        contents.EC2SecurityGroups = [];
    }
    if (output["EC2SecurityGroups"] !== undefined && output["EC2SecurityGroups"]["EC2SecurityGroup"] !== undefined) {
        contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(smithy_client_1.getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]), context);
    }
    if (output.IPRanges === "") {
        contents.IPRanges = [];
    }
    if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
        contents.IPRanges = deserializeAws_queryIPRangeList(smithy_client_1.getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
    }
    if (output["DBSecurityGroupArn"] !== undefined) {
        contents.DBSecurityGroupArn = output["DBSecurityGroupArn"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
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
const deserializeAws_queryDBSecurityGroupMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        DBSecurityGroups: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBSecurityGroups === "") {
        contents.DBSecurityGroups = [];
    }
    if (output["DBSecurityGroups"] !== undefined && output["DBSecurityGroups"]["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroups = deserializeAws_queryDBSecurityGroups(smithy_client_1.getArrayIfSingleItem(output["DBSecurityGroups"]["DBSecurityGroup"]), context);
    }
    return contents;
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
const deserializeAws_queryDBSecurityGroupNotSupportedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDBSecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSecurityGroup(entry, context);
    });
};
const deserializeAws_queryDBSnapshot = (output, context) => {
    let contents = {
        DBSnapshotIdentifier: undefined,
        DBInstanceIdentifier: undefined,
        SnapshotCreateTime: undefined,
        Engine: undefined,
        AllocatedStorage: undefined,
        Status: undefined,
        Port: undefined,
        AvailabilityZone: undefined,
        VpcId: undefined,
        InstanceCreateTime: undefined,
        MasterUsername: undefined,
        EngineVersion: undefined,
        LicenseModel: undefined,
        SnapshotType: undefined,
        Iops: undefined,
        OptionGroupName: undefined,
        PercentProgress: undefined,
        SourceRegion: undefined,
        SourceDBSnapshotIdentifier: undefined,
        StorageType: undefined,
        TdeCredentialArn: undefined,
        Encrypted: undefined,
        KmsKeyId: undefined,
        DBSnapshotArn: undefined,
        Timezone: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
        ProcessorFeatures: undefined,
        DbiResourceId: undefined,
        TagList: undefined,
    };
    if (output["DBSnapshotIdentifier"] !== undefined) {
        contents.DBSnapshotIdentifier = output["DBSnapshotIdentifier"];
    }
    if (output["DBInstanceIdentifier"] !== undefined) {
        contents.DBInstanceIdentifier = output["DBInstanceIdentifier"];
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
    if (output["AvailabilityZone"] !== undefined) {
        contents.AvailabilityZone = output["AvailabilityZone"];
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["InstanceCreateTime"] !== undefined) {
        contents.InstanceCreateTime = new Date(output["InstanceCreateTime"]);
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
    if (output["Iops"] !== undefined) {
        contents.Iops = parseInt(output["Iops"]);
    }
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = parseInt(output["PercentProgress"]);
    }
    if (output["SourceRegion"] !== undefined) {
        contents.SourceRegion = output["SourceRegion"];
    }
    if (output["SourceDBSnapshotIdentifier"] !== undefined) {
        contents.SourceDBSnapshotIdentifier = output["SourceDBSnapshotIdentifier"];
    }
    if (output["StorageType"] !== undefined) {
        contents.StorageType = output["StorageType"];
    }
    if (output["TdeCredentialArn"] !== undefined) {
        contents.TdeCredentialArn = output["TdeCredentialArn"];
    }
    if (output["Encrypted"] !== undefined) {
        contents.Encrypted = output["Encrypted"] == "true";
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["DBSnapshotArn"] !== undefined) {
        contents.DBSnapshotArn = output["DBSnapshotArn"];
    }
    if (output["Timezone"] !== undefined) {
        contents.Timezone = output["Timezone"];
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined && output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(smithy_client_1.getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]), context);
    }
    if (output["DbiResourceId"] !== undefined) {
        contents.DbiResourceId = output["DbiResourceId"];
    }
    if (output.TagList === "") {
        contents.TagList = [];
    }
    if (output["TagList"] !== undefined && output["TagList"]["Tag"] !== undefined) {
        contents.TagList = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["TagList"]["Tag"]), context);
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
const deserializeAws_queryDBSnapshotAttribute = (output, context) => {
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
const deserializeAws_queryDBSnapshotAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSnapshotAttribute(entry, context);
    });
};
const deserializeAws_queryDBSnapshotAttributesResult = (output, context) => {
    let contents = {
        DBSnapshotIdentifier: undefined,
        DBSnapshotAttributes: undefined,
    };
    if (output["DBSnapshotIdentifier"] !== undefined) {
        contents.DBSnapshotIdentifier = output["DBSnapshotIdentifier"];
    }
    if (output.DBSnapshotAttributes === "") {
        contents.DBSnapshotAttributes = [];
    }
    if (output["DBSnapshotAttributes"] !== undefined &&
        output["DBSnapshotAttributes"]["DBSnapshotAttribute"] !== undefined) {
        contents.DBSnapshotAttributes = deserializeAws_queryDBSnapshotAttributeList(smithy_client_1.getArrayIfSingleItem(output["DBSnapshotAttributes"]["DBSnapshotAttribute"]), context);
    }
    return contents;
};
const deserializeAws_queryDBSnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBSnapshot(entry, context);
    });
};
const deserializeAws_queryDBSnapshotMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        DBSnapshots: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.DBSnapshots === "") {
        contents.DBSnapshots = [];
    }
    if (output["DBSnapshots"] !== undefined && output["DBSnapshots"]["DBSnapshot"] !== undefined) {
        contents.DBSnapshots = deserializeAws_queryDBSnapshotList(smithy_client_1.getArrayIfSingleItem(output["DBSnapshots"]["DBSnapshot"]), context);
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
const deserializeAws_queryDBSubnetGroupNotAllowedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryDeleteCustomAvailabilityZoneResult = (output, context) => {
    let contents = {
        CustomAvailabilityZone: undefined,
    };
    if (output["CustomAvailabilityZone"] !== undefined) {
        contents.CustomAvailabilityZone = deserializeAws_queryCustomAvailabilityZone(output["CustomAvailabilityZone"], context);
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
const deserializeAws_queryDeleteDBInstanceAutomatedBackupResult = (output, context) => {
    let contents = {
        DBInstanceAutomatedBackup: undefined,
    };
    if (output["DBInstanceAutomatedBackup"] !== undefined) {
        contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
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
const deserializeAws_queryDeleteDBProxyEndpointResponse = (output, context) => {
    let contents = {
        DBProxyEndpoint: undefined,
    };
    if (output["DBProxyEndpoint"] !== undefined) {
        contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBProxyResponse = (output, context) => {
    let contents = {
        DBProxy: undefined,
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteDBSnapshotResult = (output, context) => {
    let contents = {
        DBSnapshot: undefined,
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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
const deserializeAws_queryDeleteGlobalClusterResult = (output, context) => {
    let contents = {
        GlobalCluster: undefined,
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeregisterDBProxyTargetsResponse = (output, context) => {
    let contents = {};
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
const deserializeAws_queryDescribeDBLogFilesDetails = (output, context) => {
    let contents = {
        LogFileName: undefined,
        LastWritten: undefined,
        Size: undefined,
    };
    if (output["LogFileName"] !== undefined) {
        contents.LogFileName = output["LogFileName"];
    }
    if (output["LastWritten"] !== undefined) {
        contents.LastWritten = parseInt(output["LastWritten"]);
    }
    if (output["Size"] !== undefined) {
        contents.Size = parseInt(output["Size"]);
    }
    return contents;
};
const deserializeAws_queryDescribeDBLogFilesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDescribeDBLogFilesDetails(entry, context);
    });
};
const deserializeAws_queryDescribeDBLogFilesResponse = (output, context) => {
    let contents = {
        DescribeDBLogFiles: undefined,
        Marker: undefined,
    };
    if (output.DescribeDBLogFiles === "") {
        contents.DescribeDBLogFiles = [];
    }
    if (output["DescribeDBLogFiles"] !== undefined &&
        output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"] !== undefined) {
        contents.DescribeDBLogFiles = deserializeAws_queryDescribeDBLogFilesList(smithy_client_1.getArrayIfSingleItem(output["DescribeDBLogFiles"]["DescribeDBLogFilesDetails"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxiesResponse = (output, context) => {
    let contents = {
        DBProxies: undefined,
        Marker: undefined,
    };
    if (output.DBProxies === "") {
        contents.DBProxies = [];
    }
    if (output["DBProxies"] !== undefined && output["DBProxies"]["member"] !== undefined) {
        contents.DBProxies = deserializeAws_queryDBProxyList(smithy_client_1.getArrayIfSingleItem(output["DBProxies"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxyEndpointsResponse = (output, context) => {
    let contents = {
        DBProxyEndpoints: undefined,
        Marker: undefined,
    };
    if (output.DBProxyEndpoints === "") {
        contents.DBProxyEndpoints = [];
    }
    if (output["DBProxyEndpoints"] !== undefined && output["DBProxyEndpoints"]["member"] !== undefined) {
        contents.DBProxyEndpoints = deserializeAws_queryDBProxyEndpointList(smithy_client_1.getArrayIfSingleItem(output["DBProxyEndpoints"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxyTargetGroupsResponse = (output, context) => {
    let contents = {
        TargetGroups: undefined,
        Marker: undefined,
    };
    if (output.TargetGroups === "") {
        contents.TargetGroups = [];
    }
    if (output["TargetGroups"] !== undefined && output["TargetGroups"]["member"] !== undefined) {
        contents.TargetGroups = deserializeAws_queryTargetGroupList(smithy_client_1.getArrayIfSingleItem(output["TargetGroups"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBProxyTargetsResponse = (output, context) => {
    let contents = {
        Targets: undefined,
        Marker: undefined,
    };
    if (output.Targets === "") {
        contents.Targets = [];
    }
    if (output["Targets"] !== undefined && output["Targets"]["member"] !== undefined) {
        contents.Targets = deserializeAws_queryTargetList(smithy_client_1.getArrayIfSingleItem(output["Targets"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDescribeDBSnapshotAttributesResult = (output, context) => {
    let contents = {
        DBSnapshotAttributesResult: undefined,
    };
    if (output["DBSnapshotAttributesResult"] !== undefined) {
        contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
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
const deserializeAws_queryDownloadDBLogFilePortionDetails = (output, context) => {
    let contents = {
        LogFileData: undefined,
        Marker: undefined,
        AdditionalDataPending: undefined,
    };
    if (output["LogFileData"] !== undefined) {
        contents.LogFileData = output["LogFileData"];
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output["AdditionalDataPending"] !== undefined) {
        contents.AdditionalDataPending = output["AdditionalDataPending"] == "true";
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
        Status: undefined,
        EC2SecurityGroupName: undefined,
        EC2SecurityGroupId: undefined,
        EC2SecurityGroupOwnerId: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["EC2SecurityGroupName"] !== undefined) {
        contents.EC2SecurityGroupName = output["EC2SecurityGroupName"];
    }
    if (output["EC2SecurityGroupId"] !== undefined) {
        contents.EC2SecurityGroupId = output["EC2SecurityGroupId"];
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
const deserializeAws_queryEngineModeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_queryExportTask = (output, context) => {
    let contents = {
        ExportTaskIdentifier: undefined,
        SourceArn: undefined,
        ExportOnly: undefined,
        SnapshotTime: undefined,
        TaskStartTime: undefined,
        TaskEndTime: undefined,
        S3Bucket: undefined,
        S3Prefix: undefined,
        IamRoleArn: undefined,
        KmsKeyId: undefined,
        Status: undefined,
        PercentProgress: undefined,
        TotalExtractedDataInGB: undefined,
        FailureCause: undefined,
        WarningMessage: undefined,
    };
    if (output["ExportTaskIdentifier"] !== undefined) {
        contents.ExportTaskIdentifier = output["ExportTaskIdentifier"];
    }
    if (output["SourceArn"] !== undefined) {
        contents.SourceArn = output["SourceArn"];
    }
    if (output.ExportOnly === "") {
        contents.ExportOnly = [];
    }
    if (output["ExportOnly"] !== undefined && output["ExportOnly"]["member"] !== undefined) {
        contents.ExportOnly = deserializeAws_queryStringList(smithy_client_1.getArrayIfSingleItem(output["ExportOnly"]["member"]), context);
    }
    if (output["SnapshotTime"] !== undefined) {
        contents.SnapshotTime = new Date(output["SnapshotTime"]);
    }
    if (output["TaskStartTime"] !== undefined) {
        contents.TaskStartTime = new Date(output["TaskStartTime"]);
    }
    if (output["TaskEndTime"] !== undefined) {
        contents.TaskEndTime = new Date(output["TaskEndTime"]);
    }
    if (output["S3Bucket"] !== undefined) {
        contents.S3Bucket = output["S3Bucket"];
    }
    if (output["S3Prefix"] !== undefined) {
        contents.S3Prefix = output["S3Prefix"];
    }
    if (output["IamRoleArn"] !== undefined) {
        contents.IamRoleArn = output["IamRoleArn"];
    }
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["PercentProgress"] !== undefined) {
        contents.PercentProgress = parseInt(output["PercentProgress"]);
    }
    if (output["TotalExtractedDataInGB"] !== undefined) {
        contents.TotalExtractedDataInGB = parseInt(output["TotalExtractedDataInGB"]);
    }
    if (output["FailureCause"] !== undefined) {
        contents.FailureCause = output["FailureCause"];
    }
    if (output["WarningMessage"] !== undefined) {
        contents.WarningMessage = output["WarningMessage"];
    }
    return contents;
};
const deserializeAws_queryExportTaskAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryExportTaskNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryExportTasksList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryExportTask(entry, context);
    });
};
const deserializeAws_queryExportTasksMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        ExportTasks: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ExportTasks === "") {
        contents.ExportTasks = [];
    }
    if (output["ExportTasks"] !== undefined && output["ExportTasks"]["ExportTask"] !== undefined) {
        contents.ExportTasks = deserializeAws_queryExportTasksList(smithy_client_1.getArrayIfSingleItem(output["ExportTasks"]["ExportTask"]), context);
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
const deserializeAws_queryFailoverGlobalClusterResult = (output, context) => {
    let contents = {
        GlobalCluster: undefined,
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryFailoverState = (output, context) => {
    let contents = {
        Status: undefined,
        FromDbClusterArn: undefined,
        ToDbClusterArn: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FromDbClusterArn"] !== undefined) {
        contents.FromDbClusterArn = output["FromDbClusterArn"];
    }
    if (output["ToDbClusterArn"] !== undefined) {
        contents.ToDbClusterArn = output["ToDbClusterArn"];
    }
    return contents;
};
const deserializeAws_queryFeatureNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryGlobalCluster = (output, context) => {
    let contents = {
        GlobalClusterIdentifier: undefined,
        GlobalClusterResourceId: undefined,
        GlobalClusterArn: undefined,
        Status: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        DatabaseName: undefined,
        StorageEncrypted: undefined,
        DeletionProtection: undefined,
        GlobalClusterMembers: undefined,
        FailoverState: undefined,
    };
    if (output["GlobalClusterIdentifier"] !== undefined) {
        contents.GlobalClusterIdentifier = output["GlobalClusterIdentifier"];
    }
    if (output["GlobalClusterResourceId"] !== undefined) {
        contents.GlobalClusterResourceId = output["GlobalClusterResourceId"];
    }
    if (output["GlobalClusterArn"] !== undefined) {
        contents.GlobalClusterArn = output["GlobalClusterArn"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["DatabaseName"] !== undefined) {
        contents.DatabaseName = output["DatabaseName"];
    }
    if (output["StorageEncrypted"] !== undefined) {
        contents.StorageEncrypted = output["StorageEncrypted"] == "true";
    }
    if (output["DeletionProtection"] !== undefined) {
        contents.DeletionProtection = output["DeletionProtection"] == "true";
    }
    if (output.GlobalClusterMembers === "") {
        contents.GlobalClusterMembers = [];
    }
    if (output["GlobalClusterMembers"] !== undefined &&
        output["GlobalClusterMembers"]["GlobalClusterMember"] !== undefined) {
        contents.GlobalClusterMembers = deserializeAws_queryGlobalClusterMemberList(smithy_client_1.getArrayIfSingleItem(output["GlobalClusterMembers"]["GlobalClusterMember"]), context);
    }
    if (output["FailoverState"] !== undefined) {
        contents.FailoverState = deserializeAws_queryFailoverState(output["FailoverState"], context);
    }
    return contents;
};
const deserializeAws_queryGlobalClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalCluster(entry, context);
    });
};
const deserializeAws_queryGlobalClusterMember = (output, context) => {
    let contents = {
        DBClusterArn: undefined,
        Readers: undefined,
        IsWriter: undefined,
        GlobalWriteForwardingStatus: undefined,
    };
    if (output["DBClusterArn"] !== undefined) {
        contents.DBClusterArn = output["DBClusterArn"];
    }
    if (output.Readers === "") {
        contents.Readers = [];
    }
    if (output["Readers"] !== undefined && output["Readers"]["member"] !== undefined) {
        contents.Readers = deserializeAws_queryReadersArnList(smithy_client_1.getArrayIfSingleItem(output["Readers"]["member"]), context);
    }
    if (output["IsWriter"] !== undefined) {
        contents.IsWriter = output["IsWriter"] == "true";
    }
    if (output["GlobalWriteForwardingStatus"] !== undefined) {
        contents.GlobalWriteForwardingStatus = output["GlobalWriteForwardingStatus"];
    }
    return contents;
};
const deserializeAws_queryGlobalClusterMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryGlobalClusterMember(entry, context);
    });
};
const deserializeAws_queryGlobalClusterNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalClusterQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryGlobalClustersMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        GlobalClusters: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.GlobalClusters === "") {
        contents.GlobalClusters = [];
    }
    if (output["GlobalClusters"] !== undefined && output["GlobalClusters"]["GlobalClusterMember"] !== undefined) {
        contents.GlobalClusters = deserializeAws_queryGlobalClusterList(smithy_client_1.getArrayIfSingleItem(output["GlobalClusters"]["GlobalClusterMember"]), context);
    }
    return contents;
};
const deserializeAws_queryIamRoleMissingPermissionsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryIamRoleNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMedia = (output, context) => {
    let contents = {
        InstallationMediaId: undefined,
        CustomAvailabilityZoneId: undefined,
        Engine: undefined,
        EngineVersion: undefined,
        EngineInstallationMediaPath: undefined,
        OSInstallationMediaPath: undefined,
        Status: undefined,
        FailureCause: undefined,
    };
    if (output["InstallationMediaId"] !== undefined) {
        contents.InstallationMediaId = output["InstallationMediaId"];
    }
    if (output["CustomAvailabilityZoneId"] !== undefined) {
        contents.CustomAvailabilityZoneId = output["CustomAvailabilityZoneId"];
    }
    if (output["Engine"] !== undefined) {
        contents.Engine = output["Engine"];
    }
    if (output["EngineVersion"] !== undefined) {
        contents.EngineVersion = output["EngineVersion"];
    }
    if (output["EngineInstallationMediaPath"] !== undefined) {
        contents.EngineInstallationMediaPath = output["EngineInstallationMediaPath"];
    }
    if (output["OSInstallationMediaPath"] !== undefined) {
        contents.OSInstallationMediaPath = output["OSInstallationMediaPath"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["FailureCause"] !== undefined) {
        contents.FailureCause = deserializeAws_queryInstallationMediaFailureCause(output["FailureCause"], context);
    }
    return contents;
};
const deserializeAws_queryInstallationMediaAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaFailureCause = (output, context) => {
    let contents = {
        Message: undefined,
    };
    if (output["Message"] !== undefined) {
        contents.Message = output["Message"];
    }
    return contents;
};
const deserializeAws_queryInstallationMediaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryInstallationMedia(entry, context);
    });
};
const deserializeAws_queryInstallationMediaMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        InstallationMedia: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.InstallationMedia === "") {
        contents.InstallationMedia = [];
    }
    if (output["InstallationMedia"] !== undefined && output["InstallationMedia"]["InstallationMedia"] !== undefined) {
        contents.InstallationMedia = deserializeAws_queryInstallationMediaList(smithy_client_1.getArrayIfSingleItem(output["InstallationMedia"]["InstallationMedia"]), context);
    }
    return contents;
};
const deserializeAws_queryInstallationMediaNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryInsufficientAvailableIPsInSubnetFault = (output, context) => {
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
const deserializeAws_queryInvalidDBClusterCapacityFault = (output, context) => {
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
const deserializeAws_queryInvalidDBInstanceAutomatedBackupStateFault = (output, context) => {
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
const deserializeAws_queryInvalidDBProxyEndpointStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidDBProxyStateFault = (output, context) => {
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
const deserializeAws_queryInvalidDBSubnetGroupFault = (output, context) => {
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
const deserializeAws_queryInvalidExportOnlyFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidExportSourceStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidExportTaskStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidGlobalClusterStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidOptionGroupStateFault = (output, context) => {
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
const deserializeAws_queryInvalidS3BucketFault = (output, context) => {
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
const deserializeAws_queryIPRange = (output, context) => {
    let contents = {
        Status: undefined,
        CIDRIP: undefined,
    };
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["CIDRIP"] !== undefined) {
        contents.CIDRIP = output["CIDRIP"];
    }
    return contents;
};
const deserializeAws_queryIPRangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryIPRange(entry, context);
    });
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
const deserializeAws_queryMinimumEngineVersionPerAllowedValue = (output, context) => {
    let contents = {
        AllowedValue: undefined,
        MinimumEngineVersion: undefined,
    };
    if (output["AllowedValue"] !== undefined) {
        contents.AllowedValue = output["AllowedValue"];
    }
    if (output["MinimumEngineVersion"] !== undefined) {
        contents.MinimumEngineVersion = output["MinimumEngineVersion"];
    }
    return contents;
};
const deserializeAws_queryMinimumEngineVersionPerAllowedValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMinimumEngineVersionPerAllowedValue(entry, context);
    });
};
const deserializeAws_queryModifyCertificatesResult = (output, context) => {
    let contents = {
        Certificate: undefined,
    };
    if (output["Certificate"] !== undefined) {
        contents.Certificate = deserializeAws_queryCertificate(output["Certificate"], context);
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
const deserializeAws_queryModifyDBProxyEndpointResponse = (output, context) => {
    let contents = {
        DBProxyEndpoint: undefined,
    };
    if (output["DBProxyEndpoint"] !== undefined) {
        contents.DBProxyEndpoint = deserializeAws_queryDBProxyEndpoint(output["DBProxyEndpoint"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBProxyResponse = (output, context) => {
    let contents = {
        DBProxy: undefined,
    };
    if (output["DBProxy"] !== undefined) {
        contents.DBProxy = deserializeAws_queryDBProxy(output["DBProxy"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBProxyTargetGroupResponse = (output, context) => {
    let contents = {
        DBProxyTargetGroup: undefined,
    };
    if (output["DBProxyTargetGroup"] !== undefined) {
        contents.DBProxyTargetGroup = deserializeAws_queryDBProxyTargetGroup(output["DBProxyTargetGroup"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSnapshotAttributeResult = (output, context) => {
    let contents = {
        DBSnapshotAttributesResult: undefined,
    };
    if (output["DBSnapshotAttributesResult"] !== undefined) {
        contents.DBSnapshotAttributesResult = deserializeAws_queryDBSnapshotAttributesResult(output["DBSnapshotAttributesResult"], context);
    }
    return contents;
};
const deserializeAws_queryModifyDBSnapshotResult = (output, context) => {
    let contents = {
        DBSnapshot: undefined,
    };
    if (output["DBSnapshot"] !== undefined) {
        contents.DBSnapshot = deserializeAws_queryDBSnapshot(output["DBSnapshot"], context);
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
const deserializeAws_queryModifyGlobalClusterResult = (output, context) => {
    let contents = {
        GlobalCluster: undefined,
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyOptionGroupResult = (output, context) => {
    let contents = {
        OptionGroup: undefined,
    };
    if (output["OptionGroup"] !== undefined) {
        contents.OptionGroup = deserializeAws_queryOptionGroup(output["OptionGroup"], context);
    }
    return contents;
};
const deserializeAws_queryOption = (output, context) => {
    let contents = {
        OptionName: undefined,
        OptionDescription: undefined,
        Persistent: undefined,
        Permanent: undefined,
        Port: undefined,
        OptionVersion: undefined,
        OptionSettings: undefined,
        DBSecurityGroupMemberships: undefined,
        VpcSecurityGroupMemberships: undefined,
    };
    if (output["OptionName"] !== undefined) {
        contents.OptionName = output["OptionName"];
    }
    if (output["OptionDescription"] !== undefined) {
        contents.OptionDescription = output["OptionDescription"];
    }
    if (output["Persistent"] !== undefined) {
        contents.Persistent = output["Persistent"] == "true";
    }
    if (output["Permanent"] !== undefined) {
        contents.Permanent = output["Permanent"] == "true";
    }
    if (output["Port"] !== undefined) {
        contents.Port = parseInt(output["Port"]);
    }
    if (output["OptionVersion"] !== undefined) {
        contents.OptionVersion = output["OptionVersion"];
    }
    if (output.OptionSettings === "") {
        contents.OptionSettings = [];
    }
    if (output["OptionSettings"] !== undefined && output["OptionSettings"]["OptionSetting"] !== undefined) {
        contents.OptionSettings = deserializeAws_queryOptionSettingConfigurationList(smithy_client_1.getArrayIfSingleItem(output["OptionSettings"]["OptionSetting"]), context);
    }
    if (output.DBSecurityGroupMemberships === "") {
        contents.DBSecurityGroupMemberships = [];
    }
    if (output["DBSecurityGroupMemberships"] !== undefined &&
        output["DBSecurityGroupMemberships"]["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroupMemberships = deserializeAws_queryDBSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["DBSecurityGroupMemberships"]["DBSecurityGroup"]), context);
    }
    if (output.VpcSecurityGroupMemberships === "") {
        contents.VpcSecurityGroupMemberships = [];
    }
    if (output["VpcSecurityGroupMemberships"] !== undefined &&
        output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"] !== undefined) {
        contents.VpcSecurityGroupMemberships = deserializeAws_queryVpcSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroupMemberships"]["VpcSecurityGroupMembership"]), context);
    }
    return contents;
};
const deserializeAws_queryOptionGroup = (output, context) => {
    let contents = {
        OptionGroupName: undefined,
        OptionGroupDescription: undefined,
        EngineName: undefined,
        MajorEngineVersion: undefined,
        Options: undefined,
        AllowsVpcAndNonVpcInstanceMemberships: undefined,
        VpcId: undefined,
        OptionGroupArn: undefined,
    };
    if (output["OptionGroupName"] !== undefined) {
        contents.OptionGroupName = output["OptionGroupName"];
    }
    if (output["OptionGroupDescription"] !== undefined) {
        contents.OptionGroupDescription = output["OptionGroupDescription"];
    }
    if (output["EngineName"] !== undefined) {
        contents.EngineName = output["EngineName"];
    }
    if (output["MajorEngineVersion"] !== undefined) {
        contents.MajorEngineVersion = output["MajorEngineVersion"];
    }
    if (output.Options === "") {
        contents.Options = [];
    }
    if (output["Options"] !== undefined && output["Options"]["Option"] !== undefined) {
        contents.Options = deserializeAws_queryOptionsList(smithy_client_1.getArrayIfSingleItem(output["Options"]["Option"]), context);
    }
    if (output["AllowsVpcAndNonVpcInstanceMemberships"] !== undefined) {
        contents.AllowsVpcAndNonVpcInstanceMemberships = output["AllowsVpcAndNonVpcInstanceMemberships"] == "true";
    }
    if (output["VpcId"] !== undefined) {
        contents.VpcId = output["VpcId"];
    }
    if (output["OptionGroupArn"] !== undefined) {
        contents.OptionGroupArn = output["OptionGroupArn"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryOptionGroupOption = (output, context) => {
    let contents = {
        Name: undefined,
        Description: undefined,
        EngineName: undefined,
        MajorEngineVersion: undefined,
        MinimumRequiredMinorEngineVersion: undefined,
        PortRequired: undefined,
        DefaultPort: undefined,
        OptionsDependedOn: undefined,
        OptionsConflictsWith: undefined,
        Persistent: undefined,
        Permanent: undefined,
        RequiresAutoMinorEngineVersionUpgrade: undefined,
        VpcOnly: undefined,
        SupportsOptionVersionDowngrade: undefined,
        OptionGroupOptionSettings: undefined,
        OptionGroupOptionVersions: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["EngineName"] !== undefined) {
        contents.EngineName = output["EngineName"];
    }
    if (output["MajorEngineVersion"] !== undefined) {
        contents.MajorEngineVersion = output["MajorEngineVersion"];
    }
    if (output["MinimumRequiredMinorEngineVersion"] !== undefined) {
        contents.MinimumRequiredMinorEngineVersion = output["MinimumRequiredMinorEngineVersion"];
    }
    if (output["PortRequired"] !== undefined) {
        contents.PortRequired = output["PortRequired"] == "true";
    }
    if (output["DefaultPort"] !== undefined) {
        contents.DefaultPort = parseInt(output["DefaultPort"]);
    }
    if (output.OptionsDependedOn === "") {
        contents.OptionsDependedOn = [];
    }
    if (output["OptionsDependedOn"] !== undefined && output["OptionsDependedOn"]["OptionName"] !== undefined) {
        contents.OptionsDependedOn = deserializeAws_queryOptionsDependedOn(smithy_client_1.getArrayIfSingleItem(output["OptionsDependedOn"]["OptionName"]), context);
    }
    if (output.OptionsConflictsWith === "") {
        contents.OptionsConflictsWith = [];
    }
    if (output["OptionsConflictsWith"] !== undefined &&
        output["OptionsConflictsWith"]["OptionConflictName"] !== undefined) {
        contents.OptionsConflictsWith = deserializeAws_queryOptionsConflictsWith(smithy_client_1.getArrayIfSingleItem(output["OptionsConflictsWith"]["OptionConflictName"]), context);
    }
    if (output["Persistent"] !== undefined) {
        contents.Persistent = output["Persistent"] == "true";
    }
    if (output["Permanent"] !== undefined) {
        contents.Permanent = output["Permanent"] == "true";
    }
    if (output["RequiresAutoMinorEngineVersionUpgrade"] !== undefined) {
        contents.RequiresAutoMinorEngineVersionUpgrade = output["RequiresAutoMinorEngineVersionUpgrade"] == "true";
    }
    if (output["VpcOnly"] !== undefined) {
        contents.VpcOnly = output["VpcOnly"] == "true";
    }
    if (output["SupportsOptionVersionDowngrade"] !== undefined) {
        contents.SupportsOptionVersionDowngrade = output["SupportsOptionVersionDowngrade"] == "true";
    }
    if (output.OptionGroupOptionSettings === "") {
        contents.OptionGroupOptionSettings = [];
    }
    if (output["OptionGroupOptionSettings"] !== undefined &&
        output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"] !== undefined) {
        contents.OptionGroupOptionSettings = deserializeAws_queryOptionGroupOptionSettingsList(smithy_client_1.getArrayIfSingleItem(output["OptionGroupOptionSettings"]["OptionGroupOptionSetting"]), context);
    }
    if (output.OptionGroupOptionVersions === "") {
        contents.OptionGroupOptionVersions = [];
    }
    if (output["OptionGroupOptionVersions"] !== undefined &&
        output["OptionGroupOptionVersions"]["OptionVersion"] !== undefined) {
        contents.OptionGroupOptionVersions = deserializeAws_queryOptionGroupOptionVersionsList(smithy_client_1.getArrayIfSingleItem(output["OptionGroupOptionVersions"]["OptionVersion"]), context);
    }
    return contents;
};
const deserializeAws_queryOptionGroupOptionSetting = (output, context) => {
    let contents = {
        SettingName: undefined,
        SettingDescription: undefined,
        DefaultValue: undefined,
        ApplyType: undefined,
        AllowedValues: undefined,
        IsModifiable: undefined,
        IsRequired: undefined,
        MinimumEngineVersionPerAllowedValue: undefined,
    };
    if (output["SettingName"] !== undefined) {
        contents.SettingName = output["SettingName"];
    }
    if (output["SettingDescription"] !== undefined) {
        contents.SettingDescription = output["SettingDescription"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["ApplyType"] !== undefined) {
        contents.ApplyType = output["ApplyType"];
    }
    if (output["AllowedValues"] !== undefined) {
        contents.AllowedValues = output["AllowedValues"];
    }
    if (output["IsModifiable"] !== undefined) {
        contents.IsModifiable = output["IsModifiable"] == "true";
    }
    if (output["IsRequired"] !== undefined) {
        contents.IsRequired = output["IsRequired"] == "true";
    }
    if (output.MinimumEngineVersionPerAllowedValue === "") {
        contents.MinimumEngineVersionPerAllowedValue = [];
    }
    if (output["MinimumEngineVersionPerAllowedValue"] !== undefined &&
        output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"] !== undefined) {
        contents.MinimumEngineVersionPerAllowedValue = deserializeAws_queryMinimumEngineVersionPerAllowedValueList(smithy_client_1.getArrayIfSingleItem(output["MinimumEngineVersionPerAllowedValue"]["MinimumEngineVersionPerAllowedValue"]), context);
    }
    return contents;
};
const deserializeAws_queryOptionGroupOptionSettingsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionGroupOptionSetting(entry, context);
    });
};
const deserializeAws_queryOptionGroupOptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionGroupOption(entry, context);
    });
};
const deserializeAws_queryOptionGroupOptionsMessage = (output, context) => {
    let contents = {
        OptionGroupOptions: undefined,
        Marker: undefined,
    };
    if (output.OptionGroupOptions === "") {
        contents.OptionGroupOptions = [];
    }
    if (output["OptionGroupOptions"] !== undefined && output["OptionGroupOptions"]["OptionGroupOption"] !== undefined) {
        contents.OptionGroupOptions = deserializeAws_queryOptionGroupOptionsList(smithy_client_1.getArrayIfSingleItem(output["OptionGroupOptions"]["OptionGroupOption"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupOptionVersionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionVersion(entry, context);
    });
};
const deserializeAws_queryOptionGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOptionGroups = (output, context) => {
    let contents = {
        OptionGroupsList: undefined,
        Marker: undefined,
    };
    if (output.OptionGroupsList === "") {
        contents.OptionGroupsList = [];
    }
    if (output["OptionGroupsList"] !== undefined && output["OptionGroupsList"]["OptionGroup"] !== undefined) {
        contents.OptionGroupsList = deserializeAws_queryOptionGroupsList(smithy_client_1.getArrayIfSingleItem(output["OptionGroupsList"]["OptionGroup"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryOptionGroupsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionGroup(entry, context);
    });
};
const deserializeAws_queryOptionsConflictsWith = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryOptionsDependedOn = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryOptionSetting = (output, context) => {
    let contents = {
        Name: undefined,
        Value: undefined,
        DefaultValue: undefined,
        Description: undefined,
        ApplyType: undefined,
        DataType: undefined,
        AllowedValues: undefined,
        IsModifiable: undefined,
        IsCollection: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    if (output["DefaultValue"] !== undefined) {
        contents.DefaultValue = output["DefaultValue"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
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
    if (output["IsCollection"] !== undefined) {
        contents.IsCollection = output["IsCollection"] == "true";
    }
    return contents;
};
const deserializeAws_queryOptionSettingConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOptionSetting(entry, context);
    });
};
const deserializeAws_queryOptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOption(entry, context);
    });
};
const deserializeAws_queryOptionVersion = (output, context) => {
    let contents = {
        Version: undefined,
        IsDefault: undefined,
    };
    if (output["Version"] !== undefined) {
        contents.Version = output["Version"];
    }
    if (output["IsDefault"] !== undefined) {
        contents.IsDefault = output["IsDefault"] == "true";
    }
    return contents;
};
const deserializeAws_queryOrderableDBInstanceOption = (output, context) => {
    let contents = {
        Engine: undefined,
        EngineVersion: undefined,
        DBInstanceClass: undefined,
        LicenseModel: undefined,
        AvailabilityZoneGroup: undefined,
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
        AvailableProcessorFeatures: undefined,
        SupportedEngineModes: undefined,
        SupportsStorageAutoscaling: undefined,
        SupportsKerberosAuthentication: undefined,
        OutpostCapable: undefined,
        SupportsGlobalDatabases: undefined,
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
    if (output["AvailabilityZoneGroup"] !== undefined) {
        contents.AvailabilityZoneGroup = output["AvailabilityZoneGroup"];
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
    if (output.AvailableProcessorFeatures === "") {
        contents.AvailableProcessorFeatures = [];
    }
    if (output["AvailableProcessorFeatures"] !== undefined &&
        output["AvailableProcessorFeatures"]["AvailableProcessorFeature"] !== undefined) {
        contents.AvailableProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(smithy_client_1.getArrayIfSingleItem(output["AvailableProcessorFeatures"]["AvailableProcessorFeature"]), context);
    }
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(smithy_client_1.getArrayIfSingleItem(output["SupportedEngineModes"]["member"]), context);
    }
    if (output["SupportsStorageAutoscaling"] !== undefined) {
        contents.SupportsStorageAutoscaling = output["SupportsStorageAutoscaling"] == "true";
    }
    if (output["SupportsKerberosAuthentication"] !== undefined) {
        contents.SupportsKerberosAuthentication = output["SupportsKerberosAuthentication"] == "true";
    }
    if (output["OutpostCapable"] !== undefined) {
        contents.OutpostCapable = output["OutpostCapable"] == "true";
    }
    if (output["SupportsGlobalDatabases"] !== undefined) {
        contents.SupportsGlobalDatabases = output["SupportsGlobalDatabases"] == "true";
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
const deserializeAws_queryOutpost = (output, context) => {
    let contents = {
        Arn: undefined,
    };
    if (output["Arn"] !== undefined) {
        contents.Arn = output["Arn"];
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
        SupportedEngineModes: undefined,
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
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(smithy_client_1.getArrayIfSingleItem(output["SupportedEngineModes"]["member"]), context);
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
        ProcessorFeatures: undefined,
        IAMDatabaseAuthenticationEnabled: undefined,
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
    if (output.ProcessorFeatures === "") {
        contents.ProcessorFeatures = [];
    }
    if (output["ProcessorFeatures"] !== undefined && output["ProcessorFeatures"]["ProcessorFeature"] !== undefined) {
        contents.ProcessorFeatures = deserializeAws_queryProcessorFeatureList(smithy_client_1.getArrayIfSingleItem(output["ProcessorFeatures"]["ProcessorFeature"]), context);
    }
    if (output["IAMDatabaseAuthenticationEnabled"] !== undefined) {
        contents.IAMDatabaseAuthenticationEnabled = output["IAMDatabaseAuthenticationEnabled"] == "true";
    }
    return contents;
};
const deserializeAws_queryPointInTimeRestoreNotEnabledFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryProcessorFeature = (output, context) => {
    let contents = {
        Name: undefined,
        Value: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    if (output["Value"] !== undefined) {
        contents.Value = output["Value"];
    }
    return contents;
};
const deserializeAws_queryProcessorFeatureList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryProcessorFeature(entry, context);
    });
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
const deserializeAws_queryPromoteReadReplicaResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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
const deserializeAws_queryPurchaseReservedDBInstancesOfferingResult = (output, context) => {
    let contents = {
        ReservedDBInstance: undefined,
    };
    if (output["ReservedDBInstance"] !== undefined) {
        contents.ReservedDBInstance = deserializeAws_queryReservedDBInstance(output["ReservedDBInstance"], context);
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
const deserializeAws_queryReadersArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
const deserializeAws_queryRegisterDBProxyTargetsResponse = (output, context) => {
    let contents = {
        DBProxyTargets: undefined,
    };
    if (output.DBProxyTargets === "") {
        contents.DBProxyTargets = [];
    }
    if (output["DBProxyTargets"] !== undefined && output["DBProxyTargets"]["member"] !== undefined) {
        contents.DBProxyTargets = deserializeAws_queryTargetList(smithy_client_1.getArrayIfSingleItem(output["DBProxyTargets"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryRemoveFromGlobalClusterResult = (output, context) => {
    let contents = {
        GlobalCluster: undefined,
    };
    if (output["GlobalCluster"] !== undefined) {
        contents.GlobalCluster = deserializeAws_queryGlobalCluster(output["GlobalCluster"], context);
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
const deserializeAws_queryReservedDBInstance = (output, context) => {
    let contents = {
        ReservedDBInstanceId: undefined,
        ReservedDBInstancesOfferingId: undefined,
        DBInstanceClass: undefined,
        StartTime: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        CurrencyCode: undefined,
        DBInstanceCount: undefined,
        ProductDescription: undefined,
        OfferingType: undefined,
        MultiAZ: undefined,
        State: undefined,
        RecurringCharges: undefined,
        ReservedDBInstanceArn: undefined,
        LeaseId: undefined,
    };
    if (output["ReservedDBInstanceId"] !== undefined) {
        contents.ReservedDBInstanceId = output["ReservedDBInstanceId"];
    }
    if (output["ReservedDBInstancesOfferingId"] !== undefined) {
        contents.ReservedDBInstancesOfferingId = output["ReservedDBInstancesOfferingId"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
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
    if (output["DBInstanceCount"] !== undefined) {
        contents.DBInstanceCount = parseInt(output["DBInstanceCount"]);
    }
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
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
    if (output["ReservedDBInstanceArn"] !== undefined) {
        contents.ReservedDBInstanceArn = output["ReservedDBInstanceArn"];
    }
    if (output["LeaseId"] !== undefined) {
        contents.LeaseId = output["LeaseId"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedDBInstance(entry, context);
    });
};
const deserializeAws_queryReservedDBInstanceMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        ReservedDBInstances: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedDBInstances === "") {
        contents.ReservedDBInstances = [];
    }
    if (output["ReservedDBInstances"] !== undefined &&
        output["ReservedDBInstances"]["ReservedDBInstance"] !== undefined) {
        contents.ReservedDBInstances = deserializeAws_queryReservedDBInstanceList(smithy_client_1.getArrayIfSingleItem(output["ReservedDBInstances"]["ReservedDBInstance"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstanceQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOffering = (output, context) => {
    let contents = {
        ReservedDBInstancesOfferingId: undefined,
        DBInstanceClass: undefined,
        Duration: undefined,
        FixedPrice: undefined,
        UsagePrice: undefined,
        CurrencyCode: undefined,
        ProductDescription: undefined,
        OfferingType: undefined,
        MultiAZ: undefined,
        RecurringCharges: undefined,
    };
    if (output["ReservedDBInstancesOfferingId"] !== undefined) {
        contents.ReservedDBInstancesOfferingId = output["ReservedDBInstancesOfferingId"];
    }
    if (output["DBInstanceClass"] !== undefined) {
        contents.DBInstanceClass = output["DBInstanceClass"];
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
    if (output["ProductDescription"] !== undefined) {
        contents.ProductDescription = output["ProductDescription"];
    }
    if (output["OfferingType"] !== undefined) {
        contents.OfferingType = output["OfferingType"];
    }
    if (output["MultiAZ"] !== undefined) {
        contents.MultiAZ = output["MultiAZ"] == "true";
    }
    if (output.RecurringCharges === "") {
        contents.RecurringCharges = [];
    }
    if (output["RecurringCharges"] !== undefined && output["RecurringCharges"]["RecurringCharge"] !== undefined) {
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(smithy_client_1.getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedDBInstancesOffering(entry, context);
    });
};
const deserializeAws_queryReservedDBInstancesOfferingMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        ReservedDBInstancesOfferings: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.ReservedDBInstancesOfferings === "") {
        contents.ReservedDBInstancesOfferings = [];
    }
    if (output["ReservedDBInstancesOfferings"] !== undefined &&
        output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"] !== undefined) {
        contents.ReservedDBInstancesOfferings = deserializeAws_queryReservedDBInstancesOfferingList(smithy_client_1.getArrayIfSingleItem(output["ReservedDBInstancesOfferings"]["ReservedDBInstancesOffering"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedDBInstancesOfferingNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryRestoreDBClusterFromS3Result = (output, context) => {
    let contents = {
        DBCluster: undefined,
    };
    if (output["DBCluster"] !== undefined) {
        contents.DBCluster = deserializeAws_queryDBCluster(output["DBCluster"], context);
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
const deserializeAws_queryRestoreDBInstanceFromDBSnapshotResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBInstanceFromS3Result = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreDBInstanceToPointInTimeResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreWindow = (output, context) => {
    let contents = {
        EarliestTime: undefined,
        LatestTime: undefined,
    };
    if (output["EarliestTime"] !== undefined) {
        contents.EarliestTime = new Date(output["EarliestTime"]);
    }
    if (output["LatestTime"] !== undefined) {
        contents.LatestTime = new Date(output["LatestTime"]);
    }
    return contents;
};
const deserializeAws_queryRevokeDBSecurityGroupIngressResult = (output, context) => {
    let contents = {
        DBSecurityGroup: undefined,
    };
    if (output["DBSecurityGroup"] !== undefined) {
        contents.DBSecurityGroup = deserializeAws_queryDBSecurityGroup(output["DBSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryScalingConfigurationInfo = (output, context) => {
    let contents = {
        MinCapacity: undefined,
        MaxCapacity: undefined,
        AutoPause: undefined,
        SecondsUntilAutoPause: undefined,
        TimeoutAction: undefined,
    };
    if (output["MinCapacity"] !== undefined) {
        contents.MinCapacity = parseInt(output["MinCapacity"]);
    }
    if (output["MaxCapacity"] !== undefined) {
        contents.MaxCapacity = parseInt(output["MaxCapacity"]);
    }
    if (output["AutoPause"] !== undefined) {
        contents.AutoPause = output["AutoPause"] == "true";
    }
    if (output["SecondsUntilAutoPause"] !== undefined) {
        contents.SecondsUntilAutoPause = parseInt(output["SecondsUntilAutoPause"]);
    }
    if (output["TimeoutAction"] !== undefined) {
        contents.TimeoutAction = output["TimeoutAction"];
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
const deserializeAws_querySourceRegion = (output, context) => {
    let contents = {
        RegionName: undefined,
        Endpoint: undefined,
        Status: undefined,
        SupportsDBInstanceAutomatedBackupsReplication: undefined,
    };
    if (output["RegionName"] !== undefined) {
        contents.RegionName = output["RegionName"];
    }
    if (output["Endpoint"] !== undefined) {
        contents.Endpoint = output["Endpoint"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["SupportsDBInstanceAutomatedBackupsReplication"] !== undefined) {
        contents.SupportsDBInstanceAutomatedBackupsReplication =
            output["SupportsDBInstanceAutomatedBackupsReplication"] == "true";
    }
    return contents;
};
const deserializeAws_querySourceRegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySourceRegion(entry, context);
    });
};
const deserializeAws_querySourceRegionMessage = (output, context) => {
    let contents = {
        Marker: undefined,
        SourceRegions: undefined,
    };
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    if (output.SourceRegions === "") {
        contents.SourceRegions = [];
    }
    if (output["SourceRegions"] !== undefined && output["SourceRegions"]["SourceRegion"] !== undefined) {
        contents.SourceRegions = deserializeAws_querySourceRegionList(smithy_client_1.getArrayIfSingleItem(output["SourceRegions"]["SourceRegion"]), context);
    }
    return contents;
};
const deserializeAws_queryStartActivityStreamResponse = (output, context) => {
    let contents = {
        KmsKeyId: undefined,
        KinesisStreamName: undefined,
        Status: undefined,
        Mode: undefined,
        ApplyImmediately: undefined,
    };
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["KinesisStreamName"] !== undefined) {
        contents.KinesisStreamName = output["KinesisStreamName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
    }
    if (output["Mode"] !== undefined) {
        contents.Mode = output["Mode"];
    }
    if (output["ApplyImmediately"] !== undefined) {
        contents.ApplyImmediately = output["ApplyImmediately"] == "true";
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
const deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationResult = (output, context) => {
    let contents = {
        DBInstanceAutomatedBackup: undefined,
    };
    if (output["DBInstanceAutomatedBackup"] !== undefined) {
        contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
    }
    return contents;
};
const deserializeAws_queryStartDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
    }
    return contents;
};
const deserializeAws_queryStopActivityStreamResponse = (output, context) => {
    let contents = {
        KmsKeyId: undefined,
        KinesisStreamName: undefined,
        Status: undefined,
    };
    if (output["KmsKeyId"] !== undefined) {
        contents.KmsKeyId = output["KmsKeyId"];
    }
    if (output["KinesisStreamName"] !== undefined) {
        contents.KinesisStreamName = output["KinesisStreamName"];
    }
    if (output["Status"] !== undefined) {
        contents.Status = output["Status"];
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
const deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationResult = (output, context) => {
    let contents = {
        DBInstanceAutomatedBackup: undefined,
    };
    if (output["DBInstanceAutomatedBackup"] !== undefined) {
        contents.DBInstanceAutomatedBackup = deserializeAws_queryDBInstanceAutomatedBackup(output["DBInstanceAutomatedBackup"], context);
    }
    return contents;
};
const deserializeAws_queryStopDBInstanceResult = (output, context) => {
    let contents = {
        DBInstance: undefined,
    };
    if (output["DBInstance"] !== undefined) {
        contents.DBInstance = deserializeAws_queryDBInstance(output["DBInstance"], context);
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
        SubnetOutpost: undefined,
        SubnetStatus: undefined,
    };
    if (output["SubnetIdentifier"] !== undefined) {
        contents.SubnetIdentifier = output["SubnetIdentifier"];
    }
    if (output["SubnetAvailabilityZone"] !== undefined) {
        contents.SubnetAvailabilityZone = deserializeAws_queryAvailabilityZone(output["SubnetAvailabilityZone"], context);
    }
    if (output["SubnetOutpost"] !== undefined) {
        contents.SubnetOutpost = deserializeAws_queryOutpost(output["SubnetOutpost"], context);
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
const deserializeAws_queryTargetGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBProxyTargetGroup(entry, context);
    });
};
const deserializeAws_queryTargetHealth = (output, context) => {
    let contents = {
        State: undefined,
        Reason: undefined,
        Description: undefined,
    };
    if (output["State"] !== undefined) {
        contents.State = output["State"];
    }
    if (output["Reason"] !== undefined) {
        contents.Reason = output["Reason"];
    }
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    return contents;
};
const deserializeAws_queryTargetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDBProxyTarget(entry, context);
    });
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
        SupportedEngineModes: undefined,
        SupportsParallelQuery: undefined,
        SupportsGlobalDatabases: undefined,
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
    if (output.SupportedEngineModes === "") {
        contents.SupportedEngineModes = [];
    }
    if (output["SupportedEngineModes"] !== undefined && output["SupportedEngineModes"]["member"] !== undefined) {
        contents.SupportedEngineModes = deserializeAws_queryEngineModeList(smithy_client_1.getArrayIfSingleItem(output["SupportedEngineModes"]["member"]), context);
    }
    if (output["SupportsParallelQuery"] !== undefined) {
        contents.SupportsParallelQuery = output["SupportsParallelQuery"] == "true";
    }
    if (output["SupportsGlobalDatabases"] !== undefined) {
        contents.SupportsGlobalDatabases = output["SupportsGlobalDatabases"] == "true";
    }
    return contents;
};
const deserializeAws_queryUserAuthConfigInfo = (output, context) => {
    let contents = {
        Description: undefined,
        UserName: undefined,
        AuthScheme: undefined,
        SecretArn: undefined,
        IAMAuth: undefined,
    };
    if (output["Description"] !== undefined) {
        contents.Description = output["Description"];
    }
    if (output["UserName"] !== undefined) {
        contents.UserName = output["UserName"];
    }
    if (output["AuthScheme"] !== undefined) {
        contents.AuthScheme = output["AuthScheme"];
    }
    if (output["SecretArn"] !== undefined) {
        contents.SecretArn = output["SecretArn"];
    }
    if (output["IAMAuth"] !== undefined) {
        contents.IAMAuth = output["IAMAuth"];
    }
    return contents;
};
const deserializeAws_queryUserAuthConfigInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUserAuthConfigInfo(entry, context);
    });
};
const deserializeAws_queryValidDBInstanceModificationsMessage = (output, context) => {
    let contents = {
        Storage: undefined,
        ValidProcessorFeatures: undefined,
    };
    if (output.Storage === "") {
        contents.Storage = [];
    }
    if (output["Storage"] !== undefined && output["Storage"]["ValidStorageOptions"] !== undefined) {
        contents.Storage = deserializeAws_queryValidStorageOptionsList(smithy_client_1.getArrayIfSingleItem(output["Storage"]["ValidStorageOptions"]), context);
    }
    if (output.ValidProcessorFeatures === "") {
        contents.ValidProcessorFeatures = [];
    }
    if (output["ValidProcessorFeatures"] !== undefined &&
        output["ValidProcessorFeatures"]["AvailableProcessorFeature"] !== undefined) {
        contents.ValidProcessorFeatures = deserializeAws_queryAvailableProcessorFeatureList(smithy_client_1.getArrayIfSingleItem(output["ValidProcessorFeatures"]["AvailableProcessorFeature"]), context);
    }
    return contents;
};
const deserializeAws_queryValidStorageOptions = (output, context) => {
    let contents = {
        StorageType: undefined,
        StorageSize: undefined,
        ProvisionedIops: undefined,
        IopsToStorageRatio: undefined,
        SupportsStorageAutoscaling: undefined,
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
    if (output["SupportsStorageAutoscaling"] !== undefined) {
        contents.SupportsStorageAutoscaling = output["SupportsStorageAutoscaling"] == "true";
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
const deserializeAws_queryVpnDetails = (output, context) => {
    let contents = {
        VpnId: undefined,
        VpnTunnelOriginatorIP: undefined,
        VpnGatewayIp: undefined,
        VpnPSK: undefined,
        VpnName: undefined,
        VpnState: undefined,
    };
    if (output["VpnId"] !== undefined) {
        contents.VpnId = output["VpnId"];
    }
    if (output["VpnTunnelOriginatorIP"] !== undefined) {
        contents.VpnTunnelOriginatorIP = output["VpnTunnelOriginatorIP"];
    }
    if (output["VpnGatewayIp"] !== undefined) {
        contents.VpnGatewayIp = output["VpnGatewayIp"];
    }
    if (output["VpnPSK"] !== undefined) {
        contents.VpnPSK = output["VpnPSK"];
    }
    if (output["VpnName"] !== undefined) {
        contents.VpnName = output["VpnName"];
    }
    if (output["VpnState"] !== undefined) {
        contents.VpnState = output["VpnState"];
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