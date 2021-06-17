"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_queryDescribeEndpointAccessCommand = exports.serializeAws_queryDescribeDefaultClusterParametersCommand = exports.serializeAws_queryDescribeClusterVersionsCommand = exports.serializeAws_queryDescribeClusterTracksCommand = exports.serializeAws_queryDescribeClusterSubnetGroupsCommand = exports.serializeAws_queryDescribeClusterSnapshotsCommand = exports.serializeAws_queryDescribeClusterSecurityGroupsCommand = exports.serializeAws_queryDescribeClustersCommand = exports.serializeAws_queryDescribeClusterParametersCommand = exports.serializeAws_queryDescribeClusterParameterGroupsCommand = exports.serializeAws_queryDescribeClusterDbRevisionsCommand = exports.serializeAws_queryDescribeAccountAttributesCommand = exports.serializeAws_queryDeleteUsageLimitCommand = exports.serializeAws_queryDeleteTagsCommand = exports.serializeAws_queryDeleteSnapshotScheduleCommand = exports.serializeAws_queryDeleteSnapshotCopyGrantCommand = exports.serializeAws_queryDeleteScheduledActionCommand = exports.serializeAws_queryDeletePartnerCommand = exports.serializeAws_queryDeleteHsmConfigurationCommand = exports.serializeAws_queryDeleteHsmClientCertificateCommand = exports.serializeAws_queryDeleteEventSubscriptionCommand = exports.serializeAws_queryDeleteEndpointAccessCommand = exports.serializeAws_queryDeleteClusterSubnetGroupCommand = exports.serializeAws_queryDeleteClusterSnapshotCommand = exports.serializeAws_queryDeleteClusterSecurityGroupCommand = exports.serializeAws_queryDeleteClusterParameterGroupCommand = exports.serializeAws_queryDeleteClusterCommand = exports.serializeAws_queryCreateUsageLimitCommand = exports.serializeAws_queryCreateTagsCommand = exports.serializeAws_queryCreateSnapshotScheduleCommand = exports.serializeAws_queryCreateSnapshotCopyGrantCommand = exports.serializeAws_queryCreateScheduledActionCommand = exports.serializeAws_queryCreateHsmConfigurationCommand = exports.serializeAws_queryCreateHsmClientCertificateCommand = exports.serializeAws_queryCreateEventSubscriptionCommand = exports.serializeAws_queryCreateEndpointAccessCommand = exports.serializeAws_queryCreateClusterSubnetGroupCommand = exports.serializeAws_queryCreateClusterSnapshotCommand = exports.serializeAws_queryCreateClusterSecurityGroupCommand = exports.serializeAws_queryCreateClusterParameterGroupCommand = exports.serializeAws_queryCreateClusterCommand = exports.serializeAws_queryCopyClusterSnapshotCommand = exports.serializeAws_queryCancelResizeCommand = exports.serializeAws_queryBatchModifyClusterSnapshotsCommand = exports.serializeAws_queryBatchDeleteClusterSnapshotsCommand = exports.serializeAws_queryAuthorizeSnapshotAccessCommand = exports.serializeAws_queryAuthorizeEndpointAccessCommand = exports.serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = exports.serializeAws_queryAddPartnerCommand = exports.serializeAws_queryAcceptReservedNodeExchangeCommand = void 0;
exports.serializeAws_queryRevokeClusterSecurityGroupIngressCommand = exports.serializeAws_queryResumeClusterCommand = exports.serializeAws_queryRestoreTableFromClusterSnapshotCommand = exports.serializeAws_queryRestoreFromClusterSnapshotCommand = exports.serializeAws_queryResizeClusterCommand = exports.serializeAws_queryResetClusterParameterGroupCommand = exports.serializeAws_queryRebootClusterCommand = exports.serializeAws_queryPurchaseReservedNodeOfferingCommand = exports.serializeAws_queryPauseClusterCommand = exports.serializeAws_queryModifyUsageLimitCommand = exports.serializeAws_queryModifySnapshotScheduleCommand = exports.serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = exports.serializeAws_queryModifyScheduledActionCommand = exports.serializeAws_queryModifyEventSubscriptionCommand = exports.serializeAws_queryModifyEndpointAccessCommand = exports.serializeAws_queryModifyClusterSubnetGroupCommand = exports.serializeAws_queryModifyClusterSnapshotScheduleCommand = exports.serializeAws_queryModifyClusterSnapshotCommand = exports.serializeAws_queryModifyClusterParameterGroupCommand = exports.serializeAws_queryModifyClusterMaintenanceCommand = exports.serializeAws_queryModifyClusterIamRolesCommand = exports.serializeAws_queryModifyClusterDbRevisionCommand = exports.serializeAws_queryModifyClusterCommand = exports.serializeAws_queryModifyAquaConfigurationCommand = exports.serializeAws_queryGetReservedNodeExchangeOfferingsCommand = exports.serializeAws_queryGetClusterCredentialsCommand = exports.serializeAws_queryEnableSnapshotCopyCommand = exports.serializeAws_queryEnableLoggingCommand = exports.serializeAws_queryDisableSnapshotCopyCommand = exports.serializeAws_queryDisableLoggingCommand = exports.serializeAws_queryDescribeUsageLimitsCommand = exports.serializeAws_queryDescribeTagsCommand = exports.serializeAws_queryDescribeTableRestoreStatusCommand = exports.serializeAws_queryDescribeStorageCommand = exports.serializeAws_queryDescribeSnapshotSchedulesCommand = exports.serializeAws_queryDescribeSnapshotCopyGrantsCommand = exports.serializeAws_queryDescribeScheduledActionsCommand = exports.serializeAws_queryDescribeResizeCommand = exports.serializeAws_queryDescribeReservedNodesCommand = exports.serializeAws_queryDescribeReservedNodeOfferingsCommand = exports.serializeAws_queryDescribePartnersCommand = exports.serializeAws_queryDescribeOrderableClusterOptionsCommand = exports.serializeAws_queryDescribeNodeConfigurationOptionsCommand = exports.serializeAws_queryDescribeLoggingStatusCommand = exports.serializeAws_queryDescribeHsmConfigurationsCommand = exports.serializeAws_queryDescribeHsmClientCertificatesCommand = exports.serializeAws_queryDescribeEventSubscriptionsCommand = exports.serializeAws_queryDescribeEventsCommand = exports.serializeAws_queryDescribeEventCategoriesCommand = exports.serializeAws_queryDescribeEndpointAuthorizationCommand = void 0;
exports.deserializeAws_queryDescribeClusterSubnetGroupsCommand = exports.deserializeAws_queryDescribeClusterSnapshotsCommand = exports.deserializeAws_queryDescribeClusterSecurityGroupsCommand = exports.deserializeAws_queryDescribeClustersCommand = exports.deserializeAws_queryDescribeClusterParametersCommand = exports.deserializeAws_queryDescribeClusterParameterGroupsCommand = exports.deserializeAws_queryDescribeClusterDbRevisionsCommand = exports.deserializeAws_queryDescribeAccountAttributesCommand = exports.deserializeAws_queryDeleteUsageLimitCommand = exports.deserializeAws_queryDeleteTagsCommand = exports.deserializeAws_queryDeleteSnapshotScheduleCommand = exports.deserializeAws_queryDeleteSnapshotCopyGrantCommand = exports.deserializeAws_queryDeleteScheduledActionCommand = exports.deserializeAws_queryDeletePartnerCommand = exports.deserializeAws_queryDeleteHsmConfigurationCommand = exports.deserializeAws_queryDeleteHsmClientCertificateCommand = exports.deserializeAws_queryDeleteEventSubscriptionCommand = exports.deserializeAws_queryDeleteEndpointAccessCommand = exports.deserializeAws_queryDeleteClusterSubnetGroupCommand = exports.deserializeAws_queryDeleteClusterSnapshotCommand = exports.deserializeAws_queryDeleteClusterSecurityGroupCommand = exports.deserializeAws_queryDeleteClusterParameterGroupCommand = exports.deserializeAws_queryDeleteClusterCommand = exports.deserializeAws_queryCreateUsageLimitCommand = exports.deserializeAws_queryCreateTagsCommand = exports.deserializeAws_queryCreateSnapshotScheduleCommand = exports.deserializeAws_queryCreateSnapshotCopyGrantCommand = exports.deserializeAws_queryCreateScheduledActionCommand = exports.deserializeAws_queryCreateHsmConfigurationCommand = exports.deserializeAws_queryCreateHsmClientCertificateCommand = exports.deserializeAws_queryCreateEventSubscriptionCommand = exports.deserializeAws_queryCreateEndpointAccessCommand = exports.deserializeAws_queryCreateClusterSubnetGroupCommand = exports.deserializeAws_queryCreateClusterSnapshotCommand = exports.deserializeAws_queryCreateClusterSecurityGroupCommand = exports.deserializeAws_queryCreateClusterParameterGroupCommand = exports.deserializeAws_queryCreateClusterCommand = exports.deserializeAws_queryCopyClusterSnapshotCommand = exports.deserializeAws_queryCancelResizeCommand = exports.deserializeAws_queryBatchModifyClusterSnapshotsCommand = exports.deserializeAws_queryBatchDeleteClusterSnapshotsCommand = exports.deserializeAws_queryAuthorizeSnapshotAccessCommand = exports.deserializeAws_queryAuthorizeEndpointAccessCommand = exports.deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = exports.deserializeAws_queryAddPartnerCommand = exports.deserializeAws_queryAcceptReservedNodeExchangeCommand = exports.serializeAws_queryUpdatePartnerStatusCommand = exports.serializeAws_queryRotateEncryptionKeyCommand = exports.serializeAws_queryRevokeSnapshotAccessCommand = exports.serializeAws_queryRevokeEndpointAccessCommand = void 0;
exports.deserializeAws_queryResizeClusterCommand = exports.deserializeAws_queryResetClusterParameterGroupCommand = exports.deserializeAws_queryRebootClusterCommand = exports.deserializeAws_queryPurchaseReservedNodeOfferingCommand = exports.deserializeAws_queryPauseClusterCommand = exports.deserializeAws_queryModifyUsageLimitCommand = exports.deserializeAws_queryModifySnapshotScheduleCommand = exports.deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = exports.deserializeAws_queryModifyScheduledActionCommand = exports.deserializeAws_queryModifyEventSubscriptionCommand = exports.deserializeAws_queryModifyEndpointAccessCommand = exports.deserializeAws_queryModifyClusterSubnetGroupCommand = exports.deserializeAws_queryModifyClusterSnapshotScheduleCommand = exports.deserializeAws_queryModifyClusterSnapshotCommand = exports.deserializeAws_queryModifyClusterParameterGroupCommand = exports.deserializeAws_queryModifyClusterMaintenanceCommand = exports.deserializeAws_queryModifyClusterIamRolesCommand = exports.deserializeAws_queryModifyClusterDbRevisionCommand = exports.deserializeAws_queryModifyClusterCommand = exports.deserializeAws_queryModifyAquaConfigurationCommand = exports.deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = exports.deserializeAws_queryGetClusterCredentialsCommand = exports.deserializeAws_queryEnableSnapshotCopyCommand = exports.deserializeAws_queryEnableLoggingCommand = exports.deserializeAws_queryDisableSnapshotCopyCommand = exports.deserializeAws_queryDisableLoggingCommand = exports.deserializeAws_queryDescribeUsageLimitsCommand = exports.deserializeAws_queryDescribeTagsCommand = exports.deserializeAws_queryDescribeTableRestoreStatusCommand = exports.deserializeAws_queryDescribeStorageCommand = exports.deserializeAws_queryDescribeSnapshotSchedulesCommand = exports.deserializeAws_queryDescribeSnapshotCopyGrantsCommand = exports.deserializeAws_queryDescribeScheduledActionsCommand = exports.deserializeAws_queryDescribeResizeCommand = exports.deserializeAws_queryDescribeReservedNodesCommand = exports.deserializeAws_queryDescribeReservedNodeOfferingsCommand = exports.deserializeAws_queryDescribePartnersCommand = exports.deserializeAws_queryDescribeOrderableClusterOptionsCommand = exports.deserializeAws_queryDescribeNodeConfigurationOptionsCommand = exports.deserializeAws_queryDescribeLoggingStatusCommand = exports.deserializeAws_queryDescribeHsmConfigurationsCommand = exports.deserializeAws_queryDescribeHsmClientCertificatesCommand = exports.deserializeAws_queryDescribeEventSubscriptionsCommand = exports.deserializeAws_queryDescribeEventsCommand = exports.deserializeAws_queryDescribeEventCategoriesCommand = exports.deserializeAws_queryDescribeEndpointAuthorizationCommand = exports.deserializeAws_queryDescribeEndpointAccessCommand = exports.deserializeAws_queryDescribeDefaultClusterParametersCommand = exports.deserializeAws_queryDescribeClusterVersionsCommand = exports.deserializeAws_queryDescribeClusterTracksCommand = void 0;
exports.deserializeAws_queryUpdatePartnerStatusCommand = exports.deserializeAws_queryRotateEncryptionKeyCommand = exports.deserializeAws_queryRevokeSnapshotAccessCommand = exports.deserializeAws_queryRevokeEndpointAccessCommand = exports.deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = exports.deserializeAws_queryResumeClusterCommand = exports.deserializeAws_queryRestoreTableFromClusterSnapshotCommand = exports.deserializeAws_queryRestoreFromClusterSnapshotCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const entities_1 = require("entities");
const fast_xml_parser_1 = require("fast-xml-parser");
const serializeAws_queryAcceptReservedNodeExchangeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAcceptReservedNodeExchangeInputMessage(input, context),
        Action: "AcceptReservedNodeExchange",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAcceptReservedNodeExchangeCommand = serializeAws_queryAcceptReservedNodeExchangeCommand;
const serializeAws_queryAddPartnerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPartnerIntegrationInputMessage(input, context),
        Action: "AddPartner",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAddPartnerCommand = serializeAws_queryAddPartnerCommand;
const serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage(input, context),
        Action: "AuthorizeClusterSecurityGroupIngress",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand;
const serializeAws_queryAuthorizeEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAuthorizeEndpointAccessMessage(input, context),
        Action: "AuthorizeEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAuthorizeEndpointAccessCommand = serializeAws_queryAuthorizeEndpointAccessCommand;
const serializeAws_queryAuthorizeSnapshotAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryAuthorizeSnapshotAccessMessage(input, context),
        Action: "AuthorizeSnapshotAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryAuthorizeSnapshotAccessCommand = serializeAws_queryAuthorizeSnapshotAccessCommand;
const serializeAws_queryBatchDeleteClusterSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBatchDeleteClusterSnapshotsRequest(input, context),
        Action: "BatchDeleteClusterSnapshots",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchDeleteClusterSnapshotsCommand = serializeAws_queryBatchDeleteClusterSnapshotsCommand;
const serializeAws_queryBatchModifyClusterSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryBatchModifyClusterSnapshotsMessage(input, context),
        Action: "BatchModifyClusterSnapshots",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryBatchModifyClusterSnapshotsCommand = serializeAws_queryBatchModifyClusterSnapshotsCommand;
const serializeAws_queryCancelResizeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCancelResizeMessage(input, context),
        Action: "CancelResize",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCancelResizeCommand = serializeAws_queryCancelResizeCommand;
const serializeAws_queryCopyClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCopyClusterSnapshotMessage(input, context),
        Action: "CopyClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCopyClusterSnapshotCommand = serializeAws_queryCopyClusterSnapshotCommand;
const serializeAws_queryCreateClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateClusterMessage(input, context),
        Action: "CreateCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateClusterCommand = serializeAws_queryCreateClusterCommand;
const serializeAws_queryCreateClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateClusterParameterGroupMessage(input, context),
        Action: "CreateClusterParameterGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateClusterParameterGroupCommand = serializeAws_queryCreateClusterParameterGroupCommand;
const serializeAws_queryCreateClusterSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateClusterSecurityGroupMessage(input, context),
        Action: "CreateClusterSecurityGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateClusterSecurityGroupCommand = serializeAws_queryCreateClusterSecurityGroupCommand;
const serializeAws_queryCreateClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateClusterSnapshotMessage(input, context),
        Action: "CreateClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateClusterSnapshotCommand = serializeAws_queryCreateClusterSnapshotCommand;
const serializeAws_queryCreateClusterSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateClusterSubnetGroupMessage(input, context),
        Action: "CreateClusterSubnetGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateClusterSubnetGroupCommand = serializeAws_queryCreateClusterSubnetGroupCommand;
const serializeAws_queryCreateEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateEndpointAccessMessage(input, context),
        Action: "CreateEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateEndpointAccessCommand = serializeAws_queryCreateEndpointAccessCommand;
const serializeAws_queryCreateEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateEventSubscriptionMessage(input, context),
        Action: "CreateEventSubscription",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateEventSubscriptionCommand = serializeAws_queryCreateEventSubscriptionCommand;
const serializeAws_queryCreateHsmClientCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateHsmClientCertificateMessage(input, context),
        Action: "CreateHsmClientCertificate",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateHsmClientCertificateCommand = serializeAws_queryCreateHsmClientCertificateCommand;
const serializeAws_queryCreateHsmConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateHsmConfigurationMessage(input, context),
        Action: "CreateHsmConfiguration",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateHsmConfigurationCommand = serializeAws_queryCreateHsmConfigurationCommand;
const serializeAws_queryCreateScheduledActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateScheduledActionMessage(input, context),
        Action: "CreateScheduledAction",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateScheduledActionCommand = serializeAws_queryCreateScheduledActionCommand;
const serializeAws_queryCreateSnapshotCopyGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateSnapshotCopyGrantMessage(input, context),
        Action: "CreateSnapshotCopyGrant",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateSnapshotCopyGrantCommand = serializeAws_queryCreateSnapshotCopyGrantCommand;
const serializeAws_queryCreateSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateSnapshotScheduleMessage(input, context),
        Action: "CreateSnapshotSchedule",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateSnapshotScheduleCommand = serializeAws_queryCreateSnapshotScheduleCommand;
const serializeAws_queryCreateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateTagsMessage(input, context),
        Action: "CreateTags",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateTagsCommand = serializeAws_queryCreateTagsCommand;
const serializeAws_queryCreateUsageLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryCreateUsageLimitMessage(input, context),
        Action: "CreateUsageLimit",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryCreateUsageLimitCommand = serializeAws_queryCreateUsageLimitCommand;
const serializeAws_queryDeleteClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteClusterMessage(input, context),
        Action: "DeleteCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteClusterCommand = serializeAws_queryDeleteClusterCommand;
const serializeAws_queryDeleteClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteClusterParameterGroupMessage(input, context),
        Action: "DeleteClusterParameterGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteClusterParameterGroupCommand = serializeAws_queryDeleteClusterParameterGroupCommand;
const serializeAws_queryDeleteClusterSecurityGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteClusterSecurityGroupMessage(input, context),
        Action: "DeleteClusterSecurityGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteClusterSecurityGroupCommand = serializeAws_queryDeleteClusterSecurityGroupCommand;
const serializeAws_queryDeleteClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteClusterSnapshotMessage(input, context),
        Action: "DeleteClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteClusterSnapshotCommand = serializeAws_queryDeleteClusterSnapshotCommand;
const serializeAws_queryDeleteClusterSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteClusterSubnetGroupMessage(input, context),
        Action: "DeleteClusterSubnetGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteClusterSubnetGroupCommand = serializeAws_queryDeleteClusterSubnetGroupCommand;
const serializeAws_queryDeleteEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteEndpointAccessMessage(input, context),
        Action: "DeleteEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteEndpointAccessCommand = serializeAws_queryDeleteEndpointAccessCommand;
const serializeAws_queryDeleteEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteEventSubscriptionMessage(input, context),
        Action: "DeleteEventSubscription",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteEventSubscriptionCommand = serializeAws_queryDeleteEventSubscriptionCommand;
const serializeAws_queryDeleteHsmClientCertificateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteHsmClientCertificateMessage(input, context),
        Action: "DeleteHsmClientCertificate",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteHsmClientCertificateCommand = serializeAws_queryDeleteHsmClientCertificateCommand;
const serializeAws_queryDeleteHsmConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteHsmConfigurationMessage(input, context),
        Action: "DeleteHsmConfiguration",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteHsmConfigurationCommand = serializeAws_queryDeleteHsmConfigurationCommand;
const serializeAws_queryDeletePartnerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPartnerIntegrationInputMessage(input, context),
        Action: "DeletePartner",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeletePartnerCommand = serializeAws_queryDeletePartnerCommand;
const serializeAws_queryDeleteScheduledActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteScheduledActionMessage(input, context),
        Action: "DeleteScheduledAction",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteScheduledActionCommand = serializeAws_queryDeleteScheduledActionCommand;
const serializeAws_queryDeleteSnapshotCopyGrantCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSnapshotCopyGrantMessage(input, context),
        Action: "DeleteSnapshotCopyGrant",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSnapshotCopyGrantCommand = serializeAws_queryDeleteSnapshotCopyGrantCommand;
const serializeAws_queryDeleteSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteSnapshotScheduleMessage(input, context),
        Action: "DeleteSnapshotSchedule",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteSnapshotScheduleCommand = serializeAws_queryDeleteSnapshotScheduleCommand;
const serializeAws_queryDeleteTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteTagsMessage(input, context),
        Action: "DeleteTags",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteTagsCommand = serializeAws_queryDeleteTagsCommand;
const serializeAws_queryDeleteUsageLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDeleteUsageLimitMessage(input, context),
        Action: "DeleteUsageLimit",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDeleteUsageLimitCommand = serializeAws_queryDeleteUsageLimitCommand;
const serializeAws_queryDescribeAccountAttributesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeAccountAttributesMessage(input, context),
        Action: "DescribeAccountAttributes",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeAccountAttributesCommand = serializeAws_queryDescribeAccountAttributesCommand;
const serializeAws_queryDescribeClusterDbRevisionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterDbRevisionsMessage(input, context),
        Action: "DescribeClusterDbRevisions",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterDbRevisionsCommand = serializeAws_queryDescribeClusterDbRevisionsCommand;
const serializeAws_queryDescribeClusterParameterGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterParameterGroupsMessage(input, context),
        Action: "DescribeClusterParameterGroups",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterParameterGroupsCommand = serializeAws_queryDescribeClusterParameterGroupsCommand;
const serializeAws_queryDescribeClusterParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterParametersMessage(input, context),
        Action: "DescribeClusterParameters",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterParametersCommand = serializeAws_queryDescribeClusterParametersCommand;
const serializeAws_queryDescribeClustersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClustersMessage(input, context),
        Action: "DescribeClusters",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClustersCommand = serializeAws_queryDescribeClustersCommand;
const serializeAws_queryDescribeClusterSecurityGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterSecurityGroupsMessage(input, context),
        Action: "DescribeClusterSecurityGroups",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterSecurityGroupsCommand = serializeAws_queryDescribeClusterSecurityGroupsCommand;
const serializeAws_queryDescribeClusterSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterSnapshotsMessage(input, context),
        Action: "DescribeClusterSnapshots",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterSnapshotsCommand = serializeAws_queryDescribeClusterSnapshotsCommand;
const serializeAws_queryDescribeClusterSubnetGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterSubnetGroupsMessage(input, context),
        Action: "DescribeClusterSubnetGroups",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterSubnetGroupsCommand = serializeAws_queryDescribeClusterSubnetGroupsCommand;
const serializeAws_queryDescribeClusterTracksCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterTracksMessage(input, context),
        Action: "DescribeClusterTracks",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterTracksCommand = serializeAws_queryDescribeClusterTracksCommand;
const serializeAws_queryDescribeClusterVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeClusterVersionsMessage(input, context),
        Action: "DescribeClusterVersions",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeClusterVersionsCommand = serializeAws_queryDescribeClusterVersionsCommand;
const serializeAws_queryDescribeDefaultClusterParametersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeDefaultClusterParametersMessage(input, context),
        Action: "DescribeDefaultClusterParameters",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeDefaultClusterParametersCommand = serializeAws_queryDescribeDefaultClusterParametersCommand;
const serializeAws_queryDescribeEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEndpointAccessMessage(input, context),
        Action: "DescribeEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEndpointAccessCommand = serializeAws_queryDescribeEndpointAccessCommand;
const serializeAws_queryDescribeEndpointAuthorizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEndpointAuthorizationMessage(input, context),
        Action: "DescribeEndpointAuthorization",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEndpointAuthorizationCommand = serializeAws_queryDescribeEndpointAuthorizationCommand;
const serializeAws_queryDescribeEventCategoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeEventCategoriesMessage(input, context),
        Action: "DescribeEventCategories",
        Version: "2012-12-01",
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
        Version: "2012-12-01",
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
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeEventSubscriptionsCommand = serializeAws_queryDescribeEventSubscriptionsCommand;
const serializeAws_queryDescribeHsmClientCertificatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeHsmClientCertificatesMessage(input, context),
        Action: "DescribeHsmClientCertificates",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeHsmClientCertificatesCommand = serializeAws_queryDescribeHsmClientCertificatesCommand;
const serializeAws_queryDescribeHsmConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeHsmConfigurationsMessage(input, context),
        Action: "DescribeHsmConfigurations",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeHsmConfigurationsCommand = serializeAws_queryDescribeHsmConfigurationsCommand;
const serializeAws_queryDescribeLoggingStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeLoggingStatusMessage(input, context),
        Action: "DescribeLoggingStatus",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeLoggingStatusCommand = serializeAws_queryDescribeLoggingStatusCommand;
const serializeAws_queryDescribeNodeConfigurationOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeNodeConfigurationOptionsMessage(input, context),
        Action: "DescribeNodeConfigurationOptions",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeNodeConfigurationOptionsCommand = serializeAws_queryDescribeNodeConfigurationOptionsCommand;
const serializeAws_queryDescribeOrderableClusterOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeOrderableClusterOptionsMessage(input, context),
        Action: "DescribeOrderableClusterOptions",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeOrderableClusterOptionsCommand = serializeAws_queryDescribeOrderableClusterOptionsCommand;
const serializeAws_queryDescribePartnersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribePartnersInputMessage(input, context),
        Action: "DescribePartners",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribePartnersCommand = serializeAws_queryDescribePartnersCommand;
const serializeAws_queryDescribeReservedNodeOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedNodeOfferingsMessage(input, context),
        Action: "DescribeReservedNodeOfferings",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedNodeOfferingsCommand = serializeAws_queryDescribeReservedNodeOfferingsCommand;
const serializeAws_queryDescribeReservedNodesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeReservedNodesMessage(input, context),
        Action: "DescribeReservedNodes",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeReservedNodesCommand = serializeAws_queryDescribeReservedNodesCommand;
const serializeAws_queryDescribeResizeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeResizeMessage(input, context),
        Action: "DescribeResize",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeResizeCommand = serializeAws_queryDescribeResizeCommand;
const serializeAws_queryDescribeScheduledActionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeScheduledActionsMessage(input, context),
        Action: "DescribeScheduledActions",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeScheduledActionsCommand = serializeAws_queryDescribeScheduledActionsCommand;
const serializeAws_queryDescribeSnapshotCopyGrantsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSnapshotCopyGrantsMessage(input, context),
        Action: "DescribeSnapshotCopyGrants",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSnapshotCopyGrantsCommand = serializeAws_queryDescribeSnapshotCopyGrantsCommand;
const serializeAws_queryDescribeSnapshotSchedulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeSnapshotSchedulesMessage(input, context),
        Action: "DescribeSnapshotSchedules",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeSnapshotSchedulesCommand = serializeAws_queryDescribeSnapshotSchedulesCommand;
const serializeAws_queryDescribeStorageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    const body = buildFormUrlencodedString({
        Action: "DescribeStorage",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeStorageCommand = serializeAws_queryDescribeStorageCommand;
const serializeAws_queryDescribeTableRestoreStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTableRestoreStatusMessage(input, context),
        Action: "DescribeTableRestoreStatus",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTableRestoreStatusCommand = serializeAws_queryDescribeTableRestoreStatusCommand;
const serializeAws_queryDescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeTagsMessage(input, context),
        Action: "DescribeTags",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeTagsCommand = serializeAws_queryDescribeTagsCommand;
const serializeAws_queryDescribeUsageLimitsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDescribeUsageLimitsMessage(input, context),
        Action: "DescribeUsageLimits",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDescribeUsageLimitsCommand = serializeAws_queryDescribeUsageLimitsCommand;
const serializeAws_queryDisableLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisableLoggingMessage(input, context),
        Action: "DisableLogging",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableLoggingCommand = serializeAws_queryDisableLoggingCommand;
const serializeAws_queryDisableSnapshotCopyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryDisableSnapshotCopyMessage(input, context),
        Action: "DisableSnapshotCopy",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryDisableSnapshotCopyCommand = serializeAws_queryDisableSnapshotCopyCommand;
const serializeAws_queryEnableLoggingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryEnableLoggingMessage(input, context),
        Action: "EnableLogging",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableLoggingCommand = serializeAws_queryEnableLoggingCommand;
const serializeAws_queryEnableSnapshotCopyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryEnableSnapshotCopyMessage(input, context),
        Action: "EnableSnapshotCopy",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryEnableSnapshotCopyCommand = serializeAws_queryEnableSnapshotCopyCommand;
const serializeAws_queryGetClusterCredentialsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetClusterCredentialsMessage(input, context),
        Action: "GetClusterCredentials",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetClusterCredentialsCommand = serializeAws_queryGetClusterCredentialsCommand;
const serializeAws_queryGetReservedNodeExchangeOfferingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage(input, context),
        Action: "GetReservedNodeExchangeOfferings",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryGetReservedNodeExchangeOfferingsCommand = serializeAws_queryGetReservedNodeExchangeOfferingsCommand;
const serializeAws_queryModifyAquaConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyAquaInputMessage(input, context),
        Action: "ModifyAquaConfiguration",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyAquaConfigurationCommand = serializeAws_queryModifyAquaConfigurationCommand;
const serializeAws_queryModifyClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterMessage(input, context),
        Action: "ModifyCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterCommand = serializeAws_queryModifyClusterCommand;
const serializeAws_queryModifyClusterDbRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterDbRevisionMessage(input, context),
        Action: "ModifyClusterDbRevision",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterDbRevisionCommand = serializeAws_queryModifyClusterDbRevisionCommand;
const serializeAws_queryModifyClusterIamRolesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterIamRolesMessage(input, context),
        Action: "ModifyClusterIamRoles",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterIamRolesCommand = serializeAws_queryModifyClusterIamRolesCommand;
const serializeAws_queryModifyClusterMaintenanceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterMaintenanceMessage(input, context),
        Action: "ModifyClusterMaintenance",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterMaintenanceCommand = serializeAws_queryModifyClusterMaintenanceCommand;
const serializeAws_queryModifyClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterParameterGroupMessage(input, context),
        Action: "ModifyClusterParameterGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterParameterGroupCommand = serializeAws_queryModifyClusterParameterGroupCommand;
const serializeAws_queryModifyClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterSnapshotMessage(input, context),
        Action: "ModifyClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterSnapshotCommand = serializeAws_queryModifyClusterSnapshotCommand;
const serializeAws_queryModifyClusterSnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterSnapshotScheduleMessage(input, context),
        Action: "ModifyClusterSnapshotSchedule",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterSnapshotScheduleCommand = serializeAws_queryModifyClusterSnapshotScheduleCommand;
const serializeAws_queryModifyClusterSubnetGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyClusterSubnetGroupMessage(input, context),
        Action: "ModifyClusterSubnetGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyClusterSubnetGroupCommand = serializeAws_queryModifyClusterSubnetGroupCommand;
const serializeAws_queryModifyEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyEndpointAccessMessage(input, context),
        Action: "ModifyEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyEndpointAccessCommand = serializeAws_queryModifyEndpointAccessCommand;
const serializeAws_queryModifyEventSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyEventSubscriptionMessage(input, context),
        Action: "ModifyEventSubscription",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyEventSubscriptionCommand = serializeAws_queryModifyEventSubscriptionCommand;
const serializeAws_queryModifyScheduledActionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyScheduledActionMessage(input, context),
        Action: "ModifyScheduledAction",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyScheduledActionCommand = serializeAws_queryModifyScheduledActionCommand;
const serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifySnapshotCopyRetentionPeriodMessage(input, context),
        Action: "ModifySnapshotCopyRetentionPeriod",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifySnapshotCopyRetentionPeriodCommand = serializeAws_queryModifySnapshotCopyRetentionPeriodCommand;
const serializeAws_queryModifySnapshotScheduleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifySnapshotScheduleMessage(input, context),
        Action: "ModifySnapshotSchedule",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifySnapshotScheduleCommand = serializeAws_queryModifySnapshotScheduleCommand;
const serializeAws_queryModifyUsageLimitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryModifyUsageLimitMessage(input, context),
        Action: "ModifyUsageLimit",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryModifyUsageLimitCommand = serializeAws_queryModifyUsageLimitCommand;
const serializeAws_queryPauseClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPauseClusterMessage(input, context),
        Action: "PauseCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPauseClusterCommand = serializeAws_queryPauseClusterCommand;
const serializeAws_queryPurchaseReservedNodeOfferingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryPurchaseReservedNodeOfferingMessage(input, context),
        Action: "PurchaseReservedNodeOffering",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryPurchaseReservedNodeOfferingCommand = serializeAws_queryPurchaseReservedNodeOfferingCommand;
const serializeAws_queryRebootClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRebootClusterMessage(input, context),
        Action: "RebootCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRebootClusterCommand = serializeAws_queryRebootClusterCommand;
const serializeAws_queryResetClusterParameterGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResetClusterParameterGroupMessage(input, context),
        Action: "ResetClusterParameterGroup",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResetClusterParameterGroupCommand = serializeAws_queryResetClusterParameterGroupCommand;
const serializeAws_queryResizeClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResizeClusterMessage(input, context),
        Action: "ResizeCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResizeClusterCommand = serializeAws_queryResizeClusterCommand;
const serializeAws_queryRestoreFromClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreFromClusterSnapshotMessage(input, context),
        Action: "RestoreFromClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreFromClusterSnapshotCommand = serializeAws_queryRestoreFromClusterSnapshotCommand;
const serializeAws_queryRestoreTableFromClusterSnapshotCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRestoreTableFromClusterSnapshotMessage(input, context),
        Action: "RestoreTableFromClusterSnapshot",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRestoreTableFromClusterSnapshotCommand = serializeAws_queryRestoreTableFromClusterSnapshotCommand;
const serializeAws_queryResumeClusterCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryResumeClusterMessage(input, context),
        Action: "ResumeCluster",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryResumeClusterCommand = serializeAws_queryResumeClusterCommand;
const serializeAws_queryRevokeClusterSecurityGroupIngressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRevokeClusterSecurityGroupIngressMessage(input, context),
        Action: "RevokeClusterSecurityGroupIngress",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRevokeClusterSecurityGroupIngressCommand = serializeAws_queryRevokeClusterSecurityGroupIngressCommand;
const serializeAws_queryRevokeEndpointAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRevokeEndpointAccessMessage(input, context),
        Action: "RevokeEndpointAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRevokeEndpointAccessCommand = serializeAws_queryRevokeEndpointAccessCommand;
const serializeAws_queryRevokeSnapshotAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRevokeSnapshotAccessMessage(input, context),
        Action: "RevokeSnapshotAccess",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRevokeSnapshotAccessCommand = serializeAws_queryRevokeSnapshotAccessCommand;
const serializeAws_queryRotateEncryptionKeyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryRotateEncryptionKeyMessage(input, context),
        Action: "RotateEncryptionKey",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryRotateEncryptionKeyCommand = serializeAws_queryRotateEncryptionKeyCommand;
const serializeAws_queryUpdatePartnerStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-www-form-urlencoded",
    };
    let body;
    body = buildFormUrlencodedString({
        ...serializeAws_queryUpdatePartnerStatusInputMessage(input, context),
        Action: "UpdatePartnerStatus",
        Version: "2012-12-01",
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_queryUpdatePartnerStatusCommand = serializeAws_queryUpdatePartnerStatusCommand;
const deserializeAws_queryAcceptReservedNodeExchangeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAcceptReservedNodeExchangeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAcceptReservedNodeExchangeOutputMessage(data.AcceptReservedNodeExchangeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAcceptReservedNodeExchangeCommand = deserializeAws_queryAcceptReservedNodeExchangeCommand;
const deserializeAws_queryAcceptReservedNodeExchangeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "com.amazonaws.redshift#DependentServiceUnavailableFault":
            response = {
                ...(await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReservedNodeStateFault":
        case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeAlreadyExistsFault":
        case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeAlreadyMigratedFault":
        case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
            response = {
                ...(await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAddPartnerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAddPartnerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.AddPartnerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAddPartnerCommand = deserializeAws_queryAddPartnerCommand;
const deserializeAws_queryAddPartnerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PartnerNotFoundFault":
        case "com.amazonaws.redshift#PartnerNotFoundFault":
            response = {
                ...(await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedPartnerIntegrationFault":
        case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
            response = {
                ...(await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult(data.AuthorizeClusterSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand = deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand;
const deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationQuotaExceededFault":
        case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAuthorizeEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAuthorizeEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAuthorization(data.AuthorizeEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAuthorizeEndpointAccessCommand = deserializeAws_queryAuthorizeEndpointAccessCommand;
const deserializeAws_queryAuthorizeEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointAuthorizationAlreadyExistsFault":
        case "com.amazonaws.redshift#EndpointAuthorizationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointAuthorizationsPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#EndpointAuthorizationsPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAuthorizationStateFault":
        case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
            response = {
                ...(await deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAuthorizeSnapshotAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryAuthorizeSnapshotAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryAuthorizeSnapshotAccessResult(data.AuthorizeSnapshotAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryAuthorizeSnapshotAccessCommand = deserializeAws_queryAuthorizeSnapshotAccessCommand;
const deserializeAws_queryAuthorizeSnapshotAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationAlreadyExistsFault":
        case "com.amazonaws.redshift#AuthorizationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryAuthorizationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationQuotaExceededFault":
        case "com.amazonaws.redshift#AuthorizationQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryAuthorizationQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryBatchDeleteClusterSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBatchDeleteClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchDeleteClusterSnapshotsResult(data.BatchDeleteClusterSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBatchDeleteClusterSnapshotsCommand = deserializeAws_queryBatchDeleteClusterSnapshotsCommand;
const deserializeAws_queryBatchDeleteClusterSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchDeleteRequestSizeExceededFault":
        case "com.amazonaws.redshift#BatchDeleteRequestSizeExceededFault":
            response = {
                ...(await deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryBatchModifyClusterSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryBatchModifyClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage(data.BatchModifyClusterSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryBatchModifyClusterSnapshotsCommand = deserializeAws_queryBatchModifyClusterSnapshotsCommand;
const deserializeAws_queryBatchModifyClusterSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BatchModifyClusterSnapshotsLimitExceededFault":
        case "com.amazonaws.redshift#BatchModifyClusterSnapshotsLimitExceededFault":
            response = {
                ...(await deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCancelResizeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCancelResizeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeProgressMessage(data.CancelResizeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCancelResizeCommand = deserializeAws_queryCancelResizeCommand;
const deserializeAws_queryCancelResizeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResizeNotFoundFault":
        case "com.amazonaws.redshift#ResizeNotFoundFault":
            response = {
                ...(await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCopyClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCopyClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCopyClusterSnapshotResult(data.CopyClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCopyClusterSnapshotCommand = deserializeAws_queryCopyClusterSnapshotCommand;
const deserializeAws_queryCopyClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterResult(data.CreateClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateClusterCommand = deserializeAws_queryCreateClusterCommand;
const deserializeAws_queryCreateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmClientCertificateNotFoundFault":
        case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmConfigurationNotFoundFault":
        case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterTrackFault":
        case "com.amazonaws.redshift#InvalidClusterTrackFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidElasticIpFault":
        case "com.amazonaws.redshift#InvalidElasticIpFault":
            response = {
                ...(await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.redshift#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleNotFoundFault":
        case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterParameterGroupResult(data.CreateClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateClusterParameterGroupCommand = deserializeAws_queryCreateClusterParameterGroupCommand;
const deserializeAws_queryCreateClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterParameterGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterParameterGroupQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterParameterGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateClusterSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateClusterSecurityGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSecurityGroupResult(data.CreateClusterSecurityGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateClusterSecurityGroupCommand = deserializeAws_queryCreateClusterSecurityGroupCommand;
const deserializeAws_queryCreateClusterSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSnapshotResult(data.CreateClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateClusterSnapshotCommand = deserializeAws_queryCreateClusterSnapshotCommand;
const deserializeAws_queryCreateClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateClusterSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateClusterSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateClusterSubnetGroupResult(data.CreateClusterSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateClusterSubnetGroupCommand = deserializeAws_queryCreateClusterSubnetGroupCommand;
const deserializeAws_queryCreateClusterSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetGroupQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.redshift#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAccess(data.CreateEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateEndpointAccessCommand = deserializeAws_queryCreateEndpointAccessCommand;
const deserializeAws_queryCreateEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToClusterDeniedFault":
        case "com.amazonaws.redshift#AccessToClusterDeniedFault":
            response = {
                ...(await deserializeAws_queryAccessToClusterDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointAlreadyExistsFault":
        case "com.amazonaws.redshift#EndpointAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryEndpointAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointsPerAuthorizationLimitExceededFault":
        case "com.amazonaws.redshift#EndpointsPerAuthorizationLimitExceededFault":
            response = {
                ...(await deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointsPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#EndpointsPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
        case "com.amazonaws.redshift#EventSubscriptionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryEventSubscriptionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.redshift#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.redshift#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceNotFoundFault":
        case "com.amazonaws.redshift#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionAlreadyExistFault":
        case "com.amazonaws.redshift#SubscriptionAlreadyExistFault":
            response = {
                ...(await deserializeAws_querySubscriptionAlreadyExistFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionEventIdNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionSeverityNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateHsmClientCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateHsmClientCertificateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateHsmClientCertificateResult(data.CreateHsmClientCertificateResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateHsmClientCertificateCommand = deserializeAws_queryCreateHsmClientCertificateCommand;
const deserializeAws_queryCreateHsmClientCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateAlreadyExistsFault":
        case "com.amazonaws.redshift#HsmClientCertificateAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmClientCertificateQuotaExceededFault":
        case "com.amazonaws.redshift#HsmClientCertificateQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateHsmConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateHsmConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateHsmConfigurationResult(data.CreateHsmConfigurationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateHsmConfigurationCommand = deserializeAws_queryCreateHsmConfigurationCommand;
const deserializeAws_queryCreateHsmConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationAlreadyExistsFault":
        case "com.amazonaws.redshift#HsmConfigurationAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmConfigurationQuotaExceededFault":
        case "com.amazonaws.redshift#HsmConfigurationQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateScheduledActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledAction(data.CreateScheduledActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateScheduledActionCommand = deserializeAws_queryCreateScheduledActionCommand;
const deserializeAws_queryCreateScheduledActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduledActionFault":
        case "com.amazonaws.redshift#InvalidScheduledActionFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidScheduleFault":
        case "com.amazonaws.redshift#InvalidScheduleFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduledActionAlreadyExistsFault":
        case "com.amazonaws.redshift#ScheduledActionAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryScheduledActionAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduledActionQuotaExceededFault":
        case "com.amazonaws.redshift#ScheduledActionQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryScheduledActionQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduledActionTypeUnsupportedFault":
        case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
            response = {
                ...(await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateSnapshotCopyGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateSnapshotCopyGrantCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCreateSnapshotCopyGrantResult(data.CreateSnapshotCopyGrantResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateSnapshotCopyGrantCommand = deserializeAws_queryCreateSnapshotCopyGrantCommand;
const deserializeAws_queryCreateSnapshotCopyGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyGrantAlreadyExistsFault":
        case "com.amazonaws.redshift#SnapshotCopyGrantAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyGrantQuotaExceededFault":
        case "com.amazonaws.redshift#SnapshotCopyGrantQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateSnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotSchedule(data.CreateSnapshotScheduleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateSnapshotScheduleCommand = deserializeAws_queryCreateSnapshotScheduleCommand;
const deserializeAws_queryCreateSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "com.amazonaws.redshift#InvalidScheduleFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduleDefinitionTypeUnsupportedFault":
        case "com.amazonaws.redshift#ScheduleDefinitionTypeUnsupportedFault":
            response = {
                ...(await deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleAlreadyExistsFault":
        case "com.amazonaws.redshift#SnapshotScheduleAlreadyExistsFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleQuotaExceededFault":
        case "com.amazonaws.redshift#SnapshotScheduleQuotaExceededFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateTagsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateTagsCommand = deserializeAws_queryCreateTagsCommand;
const deserializeAws_queryCreateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.redshift#ResourceNotFoundFault":
            response = {
                ...(await deserializeAws_queryResourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryCreateUsageLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryCreateUsageLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUsageLimit(data.CreateUsageLimitResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryCreateUsageLimitCommand = deserializeAws_queryCreateUsageLimitCommand;
const deserializeAws_queryCreateUsageLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidUsageLimitFault":
        case "com.amazonaws.redshift#InvalidUsageLimitFault":
            response = {
                ...(await deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsageLimitAlreadyExistsFault":
        case "com.amazonaws.redshift#UsageLimitAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryUsageLimitAlreadyExistsFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteClusterResult(data.DeleteClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteClusterCommand = deserializeAws_queryDeleteClusterCommand;
const deserializeAws_queryDeleteClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterSnapshotAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSnapshotQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteClusterParameterGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteClusterParameterGroupCommand = deserializeAws_queryDeleteClusterParameterGroupCommand;
const deserializeAws_queryDeleteClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteClusterSecurityGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteClusterSecurityGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteClusterSecurityGroupCommand = deserializeAws_queryDeleteClusterSecurityGroupCommand;
const deserializeAws_queryDeleteClusterSecurityGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDeleteClusterSnapshotResult(data.DeleteClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteClusterSnapshotCommand = deserializeAws_queryDeleteClusterSnapshotCommand;
const deserializeAws_queryDeleteClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteClusterSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteClusterSubnetGroupCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteClusterSubnetGroupCommand = deserializeAws_queryDeleteClusterSubnetGroupCommand;
const deserializeAws_queryDeleteClusterSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSubnetStateFault":
        case "com.amazonaws.redshift#InvalidClusterSubnetStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSubnetStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAccess(data.DeleteEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteEndpointAccessCommand = deserializeAws_queryDeleteEndpointAccessCommand;
const deserializeAws_queryDeleteEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointNotFoundFault":
        case "com.amazonaws.redshift#EndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointStateFault":
        case "com.amazonaws.redshift#InvalidEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "InvalidSubscriptionStateFault":
        case "com.amazonaws.redshift#InvalidSubscriptionStateFault":
            response = {
                ...(await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionNotFoundFault":
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
const deserializeAws_queryDeleteHsmClientCertificateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteHsmClientCertificateCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteHsmClientCertificateCommand = deserializeAws_queryDeleteHsmClientCertificateCommand;
const deserializeAws_queryDeleteHsmClientCertificateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateNotFoundFault":
        case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHsmClientCertificateStateFault":
        case "com.amazonaws.redshift#InvalidHsmClientCertificateStateFault":
            response = {
                ...(await deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteHsmConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteHsmConfigurationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteHsmConfigurationCommand = deserializeAws_queryDeleteHsmConfigurationCommand;
const deserializeAws_queryDeleteHsmConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationNotFoundFault":
        case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHsmConfigurationStateFault":
        case "com.amazonaws.redshift#InvalidHsmConfigurationStateFault":
            response = {
                ...(await deserializeAws_queryInvalidHsmConfigurationStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeletePartnerCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeletePartnerCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.DeletePartnerResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeletePartnerCommand = deserializeAws_queryDeletePartnerCommand;
const deserializeAws_queryDeletePartnerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PartnerNotFoundFault":
        case "com.amazonaws.redshift#PartnerNotFoundFault":
            response = {
                ...(await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedPartnerIntegrationFault":
        case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
            response = {
                ...(await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteScheduledActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteScheduledActionCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteScheduledActionCommand = deserializeAws_queryDeleteScheduledActionCommand;
const deserializeAws_queryDeleteScheduledActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ScheduledActionNotFoundFault":
        case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
            response = {
                ...(await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteSnapshotCopyGrantCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSnapshotCopyGrantCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSnapshotCopyGrantCommand = deserializeAws_queryDeleteSnapshotCopyGrantCommand;
const deserializeAws_queryDeleteSnapshotCopyGrantCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidSnapshotCopyGrantStateFault":
        case "com.amazonaws.redshift#InvalidSnapshotCopyGrantStateFault":
            response = {
                ...(await deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteSnapshotScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteSnapshotScheduleCommand = deserializeAws_queryDeleteSnapshotScheduleCommand;
const deserializeAws_queryDeleteSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClusterSnapshotScheduleStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleNotFoundFault":
        case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDeleteTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteTagsCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteTagsCommand = deserializeAws_queryDeleteTagsCommand;
const deserializeAws_queryDeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.redshift#ResourceNotFoundFault":
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
const deserializeAws_queryDeleteUsageLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDeleteUsageLimitCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDeleteUsageLimitCommand = deserializeAws_queryDeleteUsageLimitCommand;
const deserializeAws_queryDeleteUsageLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsageLimitNotFoundFault":
        case "com.amazonaws.redshift#UsageLimitNotFoundFault":
            response = {
                ...(await deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context)),
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
    contents = deserializeAws_queryAccountAttributeList(data.DescribeAccountAttributesResult, context);
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
const deserializeAws_queryDescribeClusterDbRevisionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterDbRevisionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterDbRevisionsMessage(data.DescribeClusterDbRevisionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterDbRevisionsCommand = deserializeAws_queryDescribeClusterDbRevisionsCommand;
const deserializeAws_queryDescribeClusterDbRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterParameterGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterParameterGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupsMessage(data.DescribeClusterParameterGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterParameterGroupsCommand = deserializeAws_queryDescribeClusterParameterGroupsCommand;
const deserializeAws_queryDescribeClusterParameterGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupDetails(data.DescribeClusterParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterParametersCommand = deserializeAws_queryDescribeClusterParametersCommand;
const deserializeAws_queryDescribeClusterParametersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClustersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClustersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClustersMessage(data.DescribeClustersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClustersCommand = deserializeAws_queryDescribeClustersCommand;
const deserializeAws_queryDescribeClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterSecurityGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterSecurityGroupMessage(data.DescribeClusterSecurityGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterSecurityGroupsCommand = deserializeAws_queryDescribeClusterSecurityGroupsCommand;
const deserializeAws_queryDescribeClusterSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotMessage(data.DescribeClusterSnapshotsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterSnapshotsCommand = deserializeAws_queryDescribeClusterSnapshotsCommand;
const deserializeAws_queryDescribeClusterSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterSubnetGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterSubnetGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterSubnetGroupMessage(data.DescribeClusterSubnetGroupsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterSubnetGroupsCommand = deserializeAws_queryDescribeClusterSubnetGroupsCommand;
const deserializeAws_queryDescribeClusterSubnetGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterTracksCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterTracksCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTrackListMessage(data.DescribeClusterTracksResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterTracksCommand = deserializeAws_queryDescribeClusterTracksCommand;
const deserializeAws_queryDescribeClusterTracksCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClusterTrackFault":
        case "com.amazonaws.redshift#InvalidClusterTrackFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeClusterVersionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeClusterVersionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterVersionsMessage(data.DescribeClusterVersionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeClusterVersionsCommand = deserializeAws_queryDescribeClusterVersionsCommand;
const deserializeAws_queryDescribeClusterVersionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeDefaultClusterParametersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeDefaultClusterParametersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeDefaultClusterParametersResult(data.DescribeDefaultClusterParametersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeDefaultClusterParametersCommand = deserializeAws_queryDescribeDefaultClusterParametersCommand;
const deserializeAws_queryDescribeDefaultClusterParametersCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAccessList(data.DescribeEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEndpointAccessCommand = deserializeAws_queryDescribeEndpointAccessCommand;
const deserializeAws_queryDescribeEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointNotFoundFault":
        case "com.amazonaws.redshift#EndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeEndpointAuthorizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeEndpointAuthorizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAuthorizationList(data.DescribeEndpointAuthorizationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeEndpointAuthorizationCommand = deserializeAws_queryDescribeEndpointAuthorizationCommand;
const deserializeAws_queryDescribeEndpointAuthorizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionNotFoundFault":
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
const deserializeAws_queryDescribeHsmClientCertificatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeHsmClientCertificatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryHsmClientCertificateMessage(data.DescribeHsmClientCertificatesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeHsmClientCertificatesCommand = deserializeAws_queryDescribeHsmClientCertificatesCommand;
const deserializeAws_queryDescribeHsmClientCertificatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmClientCertificateNotFoundFault":
        case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeHsmConfigurationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeHsmConfigurationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryHsmConfigurationMessage(data.DescribeHsmConfigurationsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeHsmConfigurationsCommand = deserializeAws_queryDescribeHsmConfigurationsCommand;
const deserializeAws_queryDescribeHsmConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "HsmConfigurationNotFoundFault":
        case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeLoggingStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeLoggingStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.DescribeLoggingStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeLoggingStatusCommand = deserializeAws_queryDescribeLoggingStatusCommand;
const deserializeAws_queryDescribeLoggingStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeNodeConfigurationOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeNodeConfigurationOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryNodeConfigurationOptionsMessage(data.DescribeNodeConfigurationOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeNodeConfigurationOptionsCommand = deserializeAws_queryDescribeNodeConfigurationOptionsCommand;
const deserializeAws_queryDescribeNodeConfigurationOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
            response = {
                ...(await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeOrderableClusterOptionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeOrderableClusterOptionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryOrderableClusterOptionsMessage(data.DescribeOrderableClusterOptionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeOrderableClusterOptionsCommand = deserializeAws_queryDescribeOrderableClusterOptionsCommand;
const deserializeAws_queryDescribeOrderableClusterOptionsCommandError = async (output, context) => {
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
const deserializeAws_queryDescribePartnersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribePartnersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribePartnersOutputMessage(data.DescribePartnersResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribePartnersCommand = deserializeAws_queryDescribePartnersCommand;
const deserializeAws_queryDescribePartnersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedPartnerIntegrationFault":
        case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
            response = {
                ...(await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeReservedNodeOfferingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedNodeOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedNodeOfferingsMessage(data.DescribeReservedNodeOfferingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedNodeOfferingsCommand = deserializeAws_queryDescribeReservedNodeOfferingsCommand;
const deserializeAws_queryDescribeReservedNodeOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "com.amazonaws.redshift#DependentServiceUnavailableFault":
            response = {
                ...(await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeReservedNodesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeReservedNodesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryReservedNodesMessage(data.DescribeReservedNodesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeReservedNodesCommand = deserializeAws_queryDescribeReservedNodesCommand;
const deserializeAws_queryDescribeReservedNodesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "com.amazonaws.redshift#DependentServiceUnavailableFault":
            response = {
                ...(await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeResizeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeResizeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeProgressMessage(data.DescribeResizeResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeResizeCommand = deserializeAws_queryDescribeResizeCommand;
const deserializeAws_queryDescribeResizeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResizeNotFoundFault":
        case "com.amazonaws.redshift#ResizeNotFoundFault":
            response = {
                ...(await deserializeAws_queryResizeNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeScheduledActionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeScheduledActionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledActionsMessage(data.DescribeScheduledActionsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeScheduledActionsCommand = deserializeAws_queryDescribeScheduledActionsCommand;
const deserializeAws_queryDescribeScheduledActionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ScheduledActionNotFoundFault":
        case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
            response = {
                ...(await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeSnapshotCopyGrantsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSnapshotCopyGrantsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotCopyGrantMessage(data.DescribeSnapshotCopyGrantsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSnapshotCopyGrantsCommand = deserializeAws_queryDescribeSnapshotCopyGrantsCommand;
const deserializeAws_queryDescribeSnapshotCopyGrantsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeSnapshotSchedulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeSnapshotSchedulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDescribeSnapshotSchedulesOutputMessage(data.DescribeSnapshotSchedulesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeSnapshotSchedulesCommand = deserializeAws_queryDescribeSnapshotSchedulesCommand;
const deserializeAws_queryDescribeSnapshotSchedulesCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeStorageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeStorageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryCustomerStorageMessage(data.DescribeStorageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeStorageCommand = deserializeAws_queryDescribeStorageCommand;
const deserializeAws_queryDescribeStorageCommandError = async (output, context) => {
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
const deserializeAws_queryDescribeTableRestoreStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTableRestoreStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTableRestoreStatusMessage(data.DescribeTableRestoreStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTableRestoreStatusCommand = deserializeAws_queryDescribeTableRestoreStatusCommand;
const deserializeAws_queryDescribeTableRestoreStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableRestoreNotFoundFault":
        case "com.amazonaws.redshift#TableRestoreNotFoundFault":
            response = {
                ...(await deserializeAws_queryTableRestoreNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDescribeTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryTaggedResourceListMessage(data.DescribeTagsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeTagsCommand = deserializeAws_queryDescribeTagsCommand;
const deserializeAws_queryDescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundFault":
        case "com.amazonaws.redshift#ResourceNotFoundFault":
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
const deserializeAws_queryDescribeUsageLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDescribeUsageLimitsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUsageLimitList(data.DescribeUsageLimitsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDescribeUsageLimitsCommand = deserializeAws_queryDescribeUsageLimitsCommand;
const deserializeAws_queryDescribeUsageLimitsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDisableLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisableLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.DisableLoggingResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisableLoggingCommand = deserializeAws_queryDisableLoggingCommand;
const deserializeAws_queryDisableLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryDisableSnapshotCopyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryDisableSnapshotCopyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryDisableSnapshotCopyResult(data.DisableSnapshotCopyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryDisableSnapshotCopyCommand = deserializeAws_queryDisableSnapshotCopyCommand;
const deserializeAws_queryDisableSnapshotCopyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyAlreadyDisabledFault":
        case "com.amazonaws.redshift#SnapshotCopyAlreadyDisabledFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryEnableLoggingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableLoggingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryLoggingStatus(data.EnableLoggingResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableLoggingCommand = deserializeAws_queryEnableLoggingCommand;
const deserializeAws_queryEnableLoggingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BucketNotFoundFault":
        case "com.amazonaws.redshift#BucketNotFoundFault":
            response = {
                ...(await deserializeAws_queryBucketNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientS3BucketPolicyFault":
        case "com.amazonaws.redshift#InsufficientS3BucketPolicyFault":
            response = {
                ...(await deserializeAws_queryInsufficientS3BucketPolicyFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3BucketNameFault":
        case "com.amazonaws.redshift#InvalidS3BucketNameFault":
            response = {
                ...(await deserializeAws_queryInvalidS3BucketNameFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidS3KeyPrefixFault":
        case "com.amazonaws.redshift#InvalidS3KeyPrefixFault":
            response = {
                ...(await deserializeAws_queryInvalidS3KeyPrefixFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryEnableSnapshotCopyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryEnableSnapshotCopyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEnableSnapshotCopyResult(data.EnableSnapshotCopyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryEnableSnapshotCopyCommand = deserializeAws_queryEnableSnapshotCopyCommand;
const deserializeAws_queryEnableSnapshotCopyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CopyToRegionDisabledFault":
        case "com.amazonaws.redshift#CopyToRegionDisabledFault":
            response = {
                ...(await deserializeAws_queryCopyToRegionDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncompatibleOrderableOptions":
        case "com.amazonaws.redshift#IncompatibleOrderableOptions":
            response = {
                ...(await deserializeAws_queryIncompatibleOrderableOptionsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyAlreadyEnabledFault":
        case "com.amazonaws.redshift#SnapshotCopyAlreadyEnabledFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyGrantNotFoundFault":
        case "com.amazonaws.redshift#SnapshotCopyGrantNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownSnapshotCopyRegionFault":
        case "com.amazonaws.redshift#UnknownSnapshotCopyRegionFault":
            response = {
                ...(await deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryGetClusterCredentialsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetClusterCredentialsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterCredentials(data.GetClusterCredentialsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetClusterCredentialsCommand = deserializeAws_queryGetClusterCredentialsCommand;
const deserializeAws_queryGetClusterCredentialsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage(data.GetReservedNodeExchangeOfferingsResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryGetReservedNodeExchangeOfferingsCommand = deserializeAws_queryGetReservedNodeExchangeOfferingsCommand;
const deserializeAws_queryGetReservedNodeExchangeOfferingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependentServiceUnavailableFault":
        case "com.amazonaws.redshift#DependentServiceUnavailableFault":
            response = {
                ...(await deserializeAws_queryDependentServiceUnavailableFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidReservedNodeStateFault":
        case "com.amazonaws.redshift#InvalidReservedNodeStateFault":
            response = {
                ...(await deserializeAws_queryInvalidReservedNodeStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeAlreadyMigratedFault":
        case "com.amazonaws.redshift#ReservedNodeAlreadyMigratedFault":
            response = {
                ...(await deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyAquaConfigurationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyAquaConfigurationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyAquaOutputMessage(data.ModifyAquaConfigurationResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyAquaConfigurationCommand = deserializeAws_queryModifyAquaConfigurationCommand;
const deserializeAws_queryModifyAquaConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterResult(data.ModifyClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterCommand = deserializeAws_queryModifyClusterCommand;
const deserializeAws_queryModifyClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmClientCertificateNotFoundFault":
        case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmConfigurationNotFoundFault":
        case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterTrackFault":
        case "com.amazonaws.redshift#InvalidClusterTrackFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidElasticIpFault":
        case "com.amazonaws.redshift#InvalidElasticIpFault":
            response = {
                ...(await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TableLimitExceededFault":
        case "com.amazonaws.redshift#TableLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTableLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOptionFault":
        case "com.amazonaws.redshift#UnsupportedOptionFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterDbRevisionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterDbRevisionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterDbRevisionResult(data.ModifyClusterDbRevisionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterDbRevisionCommand = deserializeAws_queryModifyClusterDbRevisionCommand;
const deserializeAws_queryModifyClusterDbRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterOnLatestRevisionFault":
        case "com.amazonaws.redshift#ClusterOnLatestRevisionFault":
            response = {
                ...(await deserializeAws_queryClusterOnLatestRevisionFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterIamRolesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterIamRolesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterIamRolesResult(data.ModifyClusterIamRolesResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterIamRolesCommand = deserializeAws_queryModifyClusterIamRolesCommand;
const deserializeAws_queryModifyClusterIamRolesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterMaintenanceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterMaintenanceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterMaintenanceResult(data.ModifyClusterMaintenanceResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterMaintenanceCommand = deserializeAws_queryModifyClusterMaintenanceCommand;
const deserializeAws_queryModifyClusterMaintenanceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ModifyClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterParameterGroupCommand = deserializeAws_queryModifyClusterParameterGroupCommand;
const deserializeAws_queryModifyClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterSnapshotResult(data.ModifyClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterSnapshotCommand = deserializeAws_queryModifyClusterSnapshotCommand;
const deserializeAws_queryModifyClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterSnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterSnapshotScheduleCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterSnapshotScheduleCommand = deserializeAws_queryModifyClusterSnapshotScheduleCommand;
const deserializeAws_queryModifyClusterSnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotScheduleStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotScheduleStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleNotFoundFault":
        case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyClusterSubnetGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyClusterSubnetGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifyClusterSubnetGroupResult(data.ModifyClusterSubnetGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyClusterSubnetGroupCommand = deserializeAws_queryModifyClusterSubnetGroupCommand;
const deserializeAws_queryModifyClusterSubnetGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterSubnetQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.redshift#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetAlreadyInUse":
        case "com.amazonaws.redshift#SubnetAlreadyInUse":
            response = {
                ...(await deserializeAws_querySubnetAlreadyInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAccess(data.ModifyEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyEndpointAccessCommand = deserializeAws_queryModifyEndpointAccessCommand;
const deserializeAws_queryModifyEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointNotFoundFault":
        case "com.amazonaws.redshift#EndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointStateFault":
        case "com.amazonaws.redshift#InvalidEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
        case "InvalidSubscriptionStateFault":
        case "com.amazonaws.redshift#InvalidSubscriptionStateFault":
            response = {
                ...(await deserializeAws_queryInvalidSubscriptionStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSInvalidTopicFault":
        case "com.amazonaws.redshift#SNSInvalidTopicFault":
            response = {
                ...(await deserializeAws_querySNSInvalidTopicFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSNoAuthorizationFault":
        case "com.amazonaws.redshift#SNSNoAuthorizationFault":
            response = {
                ...(await deserializeAws_querySNSNoAuthorizationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SNSTopicArnNotFoundFault":
        case "com.amazonaws.redshift#SNSTopicArnNotFoundFault":
            response = {
                ...(await deserializeAws_querySNSTopicArnNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceNotFoundFault":
        case "com.amazonaws.redshift#SourceNotFoundFault":
            response = {
                ...(await deserializeAws_querySourceNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionCategoryNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionCategoryNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionCategoryNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionEventIdNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionEventIdNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionEventIdNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubscriptionSeverityNotFoundFault":
        case "com.amazonaws.redshift#SubscriptionSeverityNotFoundFault":
            response = {
                ...(await deserializeAws_querySubscriptionSeverityNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyScheduledActionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyScheduledActionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryScheduledAction(data.ModifyScheduledActionResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyScheduledActionCommand = deserializeAws_queryModifyScheduledActionCommand;
const deserializeAws_queryModifyScheduledActionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduledActionFault":
        case "com.amazonaws.redshift#InvalidScheduledActionFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduledActionFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidScheduleFault":
        case "com.amazonaws.redshift#InvalidScheduleFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduledActionNotFoundFault":
        case "com.amazonaws.redshift#ScheduledActionNotFoundFault":
            response = {
                ...(await deserializeAws_queryScheduledActionNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ScheduledActionTypeUnsupportedFault":
        case "com.amazonaws.redshift#ScheduledActionTypeUnsupportedFault":
            response = {
                ...(await deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryModifySnapshotCopyRetentionPeriodResult(data.ModifySnapshotCopyRetentionPeriodResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand = deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand;
const deserializeAws_queryModifySnapshotCopyRetentionPeriodCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRetentionPeriodFault":
        case "com.amazonaws.redshift#InvalidRetentionPeriodFault":
            response = {
                ...(await deserializeAws_queryInvalidRetentionPeriodFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotCopyDisabledFault":
        case "com.amazonaws.redshift#SnapshotCopyDisabledFault":
            response = {
                ...(await deserializeAws_querySnapshotCopyDisabledFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryModifySnapshotScheduleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifySnapshotScheduleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_querySnapshotSchedule(data.ModifySnapshotScheduleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifySnapshotScheduleCommand = deserializeAws_queryModifySnapshotScheduleCommand;
const deserializeAws_queryModifySnapshotScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidScheduleFault":
        case "com.amazonaws.redshift#InvalidScheduleFault":
            response = {
                ...(await deserializeAws_queryInvalidScheduleFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleNotFoundFault":
        case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleUpdateInProgressFault":
        case "com.amazonaws.redshift#SnapshotScheduleUpdateInProgressFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryModifyUsageLimitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryModifyUsageLimitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryUsageLimit(data.ModifyUsageLimitResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryModifyUsageLimitCommand = deserializeAws_queryModifyUsageLimitCommand;
const deserializeAws_queryModifyUsageLimitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidUsageLimitFault":
        case "com.amazonaws.redshift#InvalidUsageLimitFault":
            response = {
                ...(await deserializeAws_queryInvalidUsageLimitFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UsageLimitNotFoundFault":
        case "com.amazonaws.redshift#UsageLimitNotFoundFault":
            response = {
                ...(await deserializeAws_queryUsageLimitNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPauseClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPauseClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPauseClusterResult(data.PauseClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPauseClusterCommand = deserializeAws_queryPauseClusterCommand;
const deserializeAws_queryPauseClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryPurchaseReservedNodeOfferingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryPurchaseReservedNodeOfferingCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPurchaseReservedNodeOfferingResult(data.PurchaseReservedNodeOfferingResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryPurchaseReservedNodeOfferingCommand = deserializeAws_queryPurchaseReservedNodeOfferingCommand;
const deserializeAws_queryPurchaseReservedNodeOfferingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ReservedNodeAlreadyExistsFault":
        case "com.amazonaws.redshift#ReservedNodeAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryReservedNodeAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeOfferingNotFoundFault":
        case "com.amazonaws.redshift#ReservedNodeOfferingNotFoundFault":
            response = {
                ...(await deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNodeQuotaExceededFault":
        case "com.amazonaws.redshift#ReservedNodeQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryReservedNodeQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRebootClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRebootClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRebootClusterResult(data.RebootClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRebootClusterCommand = deserializeAws_queryRebootClusterCommand;
const deserializeAws_queryRebootClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResetClusterParameterGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResetClusterParameterGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryClusterParameterGroupNameMessage(data.ResetClusterParameterGroupResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResetClusterParameterGroupCommand = deserializeAws_queryResetClusterParameterGroupCommand;
const deserializeAws_queryResetClusterParameterGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterParameterGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterParameterGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResizeClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResizeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResizeClusterResult(data.ResizeClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResizeClusterCommand = deserializeAws_queryResizeClusterCommand;
const deserializeAws_queryResizeClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOptionFault":
        case "com.amazonaws.redshift#UnsupportedOptionFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOptionFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRestoreFromClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreFromClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreFromClusterSnapshotResult(data.RestoreFromClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreFromClusterSnapshotCommand = deserializeAws_queryRestoreFromClusterSnapshotCommand;
const deserializeAws_queryRestoreFromClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
            response = {
                ...(await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterAlreadyExistsFault":
        case "com.amazonaws.redshift#ClusterAlreadyExistsFault":
            response = {
                ...(await deserializeAws_queryClusterAlreadyExistsFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterParameterGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterParameterGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterParameterGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterQuotaExceededFault":
        case "com.amazonaws.redshift#ClusterQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryClusterQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSubnetGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSubnetGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmClientCertificateNotFoundFault":
        case "com.amazonaws.redshift#HsmClientCertificateNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmClientCertificateNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HsmConfigurationNotFoundFault":
        case "com.amazonaws.redshift#HsmConfigurationNotFoundFault":
            response = {
                ...(await deserializeAws_queryHsmConfigurationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSubnetGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSubnetGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterTrackFault":
        case "com.amazonaws.redshift#InvalidClusterTrackFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterTrackFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidElasticIpFault":
        case "com.amazonaws.redshift#InvalidElasticIpFault":
            response = {
                ...(await deserializeAws_queryInvalidElasticIpFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRestoreFault":
        case "com.amazonaws.redshift#InvalidRestoreFault":
            response = {
                ...(await deserializeAws_queryInvalidRestoreFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidSubnet":
        case "com.amazonaws.redshift#InvalidSubnet":
            response = {
                ...(await deserializeAws_queryInvalidSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTagFault":
        case "com.amazonaws.redshift#InvalidTagFault":
            response = {
                ...(await deserializeAws_queryInvalidTagFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVPCNetworkStateFault":
        case "com.amazonaws.redshift#InvalidVPCNetworkStateFault":
            response = {
                ...(await deserializeAws_queryInvalidVPCNetworkStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededFault":
        case "com.amazonaws.redshift#LimitExceededFault":
            response = {
                ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesPerClusterLimitExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesPerClusterLimitExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NumberOfNodesQuotaExceededFault":
        case "com.amazonaws.redshift#NumberOfNodesQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SnapshotScheduleNotFoundFault":
        case "com.amazonaws.redshift#SnapshotScheduleNotFoundFault":
            response = {
                ...(await deserializeAws_querySnapshotScheduleNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededFault":
        case "com.amazonaws.redshift#TagLimitExceededFault":
            response = {
                ...(await deserializeAws_queryTagLimitExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperation":
        case "com.amazonaws.redshift#UnauthorizedOperation":
            response = {
                ...(await deserializeAws_queryUnauthorizedOperationResponse(parsedOutput, context)),
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
const deserializeAws_queryRestoreTableFromClusterSnapshotCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRestoreTableFromClusterSnapshotCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRestoreTableFromClusterSnapshotResult(data.RestoreTableFromClusterSnapshotResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRestoreTableFromClusterSnapshotCommand = deserializeAws_queryRestoreTableFromClusterSnapshotCommand;
const deserializeAws_queryRestoreTableFromClusterSnapshotCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InProgressTableRestoreQuotaExceededFault":
        case "com.amazonaws.redshift#InProgressTableRestoreQuotaExceededFault":
            response = {
                ...(await deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSnapshotStateFault":
        case "com.amazonaws.redshift#InvalidClusterSnapshotStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSnapshotStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidTableRestoreArgumentFault":
        case "com.amazonaws.redshift#InvalidTableRestoreArgumentFault":
            response = {
                ...(await deserializeAws_queryInvalidTableRestoreArgumentFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationFault":
        case "com.amazonaws.redshift#UnsupportedOperationFault":
            response = {
                ...(await deserializeAws_queryUnsupportedOperationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryResumeClusterCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryResumeClusterCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryResumeClusterResult(data.ResumeClusterResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryResumeClusterCommand = deserializeAws_queryResumeClusterCommand;
const deserializeAws_queryResumeClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientClusterCapacityFault":
        case "com.amazonaws.redshift#InsufficientClusterCapacityFault":
            response = {
                ...(await deserializeAws_queryInsufficientClusterCapacityFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeClusterSecurityGroupIngressResult(data.RevokeClusterSecurityGroupIngressResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRevokeClusterSecurityGroupIngressCommand = deserializeAws_queryRevokeClusterSecurityGroupIngressCommand;
const deserializeAws_queryRevokeClusterSecurityGroupIngressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.redshift#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSecurityGroupNotFoundFault":
        case "com.amazonaws.redshift#ClusterSecurityGroupNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRevokeEndpointAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRevokeEndpointAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryEndpointAuthorization(data.RevokeEndpointAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRevokeEndpointAccessCommand = deserializeAws_queryRevokeEndpointAccessCommand;
const deserializeAws_queryRevokeEndpointAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointAuthorizationNotFoundFault":
        case "com.amazonaws.redshift#EndpointAuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EndpointNotFoundFault":
        case "com.amazonaws.redshift#EndpointNotFoundFault":
            response = {
                ...(await deserializeAws_queryEndpointNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidAuthorizationStateFault":
        case "com.amazonaws.redshift#InvalidAuthorizationStateFault":
            response = {
                ...(await deserializeAws_queryInvalidAuthorizationStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterSecurityGroupStateFault":
        case "com.amazonaws.redshift#InvalidClusterSecurityGroupStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidEndpointStateFault":
        case "com.amazonaws.redshift#InvalidEndpointStateFault":
            response = {
                ...(await deserializeAws_queryInvalidEndpointStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRevokeSnapshotAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRevokeSnapshotAccessCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRevokeSnapshotAccessResult(data.RevokeSnapshotAccessResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRevokeSnapshotAccessCommand = deserializeAws_queryRevokeSnapshotAccessCommand;
const deserializeAws_queryRevokeSnapshotAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessToSnapshotDeniedFault":
        case "com.amazonaws.redshift#AccessToSnapshotDeniedFault":
            response = {
                ...(await deserializeAws_queryAccessToSnapshotDeniedFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AuthorizationNotFoundFault":
        case "com.amazonaws.redshift#AuthorizationNotFoundFault":
            response = {
                ...(await deserializeAws_queryAuthorizationNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClusterSnapshotNotFoundFault":
        case "com.amazonaws.redshift#ClusterSnapshotNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterSnapshotNotFoundFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryRotateEncryptionKeyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryRotateEncryptionKeyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryRotateEncryptionKeyResult(data.RotateEncryptionKeyResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryRotateEncryptionKeyCommand = deserializeAws_queryRotateEncryptionKeyCommand;
const deserializeAws_queryRotateEncryptionKeyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependentServiceRequestThrottlingFault":
        case "com.amazonaws.redshift#DependentServiceRequestThrottlingFault":
            response = {
                ...(await deserializeAws_queryDependentServiceRequestThrottlingFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClusterStateFault":
        case "com.amazonaws.redshift#InvalidClusterStateFault":
            response = {
                ...(await deserializeAws_queryInvalidClusterStateFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryUpdatePartnerStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_queryUpdatePartnerStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_queryPartnerIntegrationOutputMessage(data.UpdatePartnerStatusResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_queryUpdatePartnerStatusCommand = deserializeAws_queryUpdatePartnerStatusCommand;
const deserializeAws_queryUpdatePartnerStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClusterNotFoundFault":
        case "com.amazonaws.redshift#ClusterNotFoundFault":
            response = {
                ...(await deserializeAws_queryClusterNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PartnerNotFoundFault":
        case "com.amazonaws.redshift#PartnerNotFoundFault":
            response = {
                ...(await deserializeAws_queryPartnerNotFoundFaultResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedPartnerIntegrationFault":
        case "com.amazonaws.redshift#UnauthorizedPartnerIntegrationFault":
            response = {
                ...(await deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse(parsedOutput, context)),
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
const deserializeAws_queryAccessToClusterDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccessToClusterDeniedFault(body.Error, context);
    const contents = {
        name: "AccessToClusterDeniedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryAccessToSnapshotDeniedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryAccessToSnapshotDeniedFault(body.Error, context);
    const contents = {
        name: "AccessToSnapshotDeniedFault",
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
const deserializeAws_queryBatchDeleteRequestSizeExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchDeleteRequestSizeExceededFault(body.Error, context);
    const contents = {
        name: "BatchDeleteRequestSizeExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault(body.Error, context);
    const contents = {
        name: "BatchModifyClusterSnapshotsLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryBucketNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryBucketNotFoundFault(body.Error, context);
    const contents = {
        name: "BucketNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ClusterAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterNotFoundFault(body.Error, context);
    const contents = {
        name: "ClusterNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterOnLatestRevisionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterOnLatestRevisionFault(body.Error, context);
    const contents = {
        name: "ClusterOnLatestRevisionFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterParameterGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ClusterParameterGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterParameterGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "ClusterParameterGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterParameterGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterParameterGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterParameterGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSecurityGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ClusterSecurityGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSecurityGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "ClusterSecurityGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSecurityGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSecurityGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterSecurityGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSnapshotAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ClusterSnapshotAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSnapshotNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotNotFoundFault(body.Error, context);
    const contents = {
        name: "ClusterSnapshotNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSnapshotQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSnapshotQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterSnapshotQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSubnetGroupAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ClusterSubnetGroupAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSubnetGroupNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupNotFoundFault(body.Error, context);
    const contents = {
        name: "ClusterSubnetGroupNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSubnetGroupQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetGroupQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterSubnetGroupQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryClusterSubnetQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryClusterSubnetQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ClusterSubnetQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryCopyToRegionDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryCopyToRegionDisabledFault(body.Error, context);
    const contents = {
        name: "CopyToRegionDisabledFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDependentServiceRequestThrottlingFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependentServiceRequestThrottlingFault(body.Error, context);
    const contents = {
        name: "DependentServiceRequestThrottlingFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryDependentServiceUnavailableFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryDependentServiceUnavailableFault(body.Error, context);
    const contents = {
        name: "DependentServiceUnavailableFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "EndpointAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointAuthorizationAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointAuthorizationAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "EndpointAuthorizationAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointAuthorizationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointAuthorizationNotFoundFault(body.Error, context);
    const contents = {
        name: "EndpointAuthorizationNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault(body.Error, context);
    const contents = {
        name: "EndpointAuthorizationsPerClusterLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointNotFoundFault(body.Error, context);
    const contents = {
        name: "EndpointNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointsPerAuthorizationLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault(body.Error, context);
    const contents = {
        name: "EndpointsPerAuthorizationLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryEndpointsPerClusterLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryEndpointsPerClusterLimitExceededFault(body.Error, context);
    const contents = {
        name: "EndpointsPerClusterLimitExceededFault",
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
const deserializeAws_queryHsmClientCertificateAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "HsmClientCertificateAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHsmClientCertificateNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateNotFoundFault(body.Error, context);
    const contents = {
        name: "HsmClientCertificateNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHsmClientCertificateQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmClientCertificateQuotaExceededFault(body.Error, context);
    const contents = {
        name: "HsmClientCertificateQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHsmConfigurationAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "HsmConfigurationAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHsmConfigurationNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationNotFoundFault(body.Error, context);
    const contents = {
        name: "HsmConfigurationNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryHsmConfigurationQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryHsmConfigurationQuotaExceededFault(body.Error, context);
    const contents = {
        name: "HsmConfigurationQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryIncompatibleOrderableOptionsResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryIncompatibleOrderableOptions(body.Error, context);
    const contents = {
        name: "IncompatibleOrderableOptions",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInProgressTableRestoreQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInProgressTableRestoreQuotaExceededFault(body.Error, context);
    const contents = {
        name: "InProgressTableRestoreQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientClusterCapacityFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientClusterCapacityFault(body.Error, context);
    const contents = {
        name: "InsufficientClusterCapacityFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInsufficientS3BucketPolicyFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInsufficientS3BucketPolicyFault(body.Error, context);
    const contents = {
        name: "InsufficientS3BucketPolicyFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidAuthorizationStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidAuthorizationStateFault(body.Error, context);
    const contents = {
        name: "InvalidAuthorizationStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterParameterGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterParameterGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterParameterGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterSecurityGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSecurityGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterSecurityGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotScheduleStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSnapshotScheduleStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterSnapshotScheduleStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSnapshotStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterSnapshotStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetGroupStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSubnetGroupStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterSubnetGroupStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterSubnetStateFault(body.Error, context);
    const contents = {
        name: "InvalidClusterSubnetStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidClusterTrackFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidClusterTrackFault(body.Error, context);
    const contents = {
        name: "InvalidClusterTrackFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidElasticIpFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidElasticIpFault(body.Error, context);
    const contents = {
        name: "InvalidElasticIpFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidEndpointStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidEndpointStateFault(body.Error, context);
    const contents = {
        name: "InvalidEndpointStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidHsmClientCertificateStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidHsmClientCertificateStateFault(body.Error, context);
    const contents = {
        name: "InvalidHsmClientCertificateStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidHsmConfigurationStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidHsmConfigurationStateFault(body.Error, context);
    const contents = {
        name: "InvalidHsmConfigurationStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidReservedNodeStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidReservedNodeStateFault(body.Error, context);
    const contents = {
        name: "InvalidReservedNodeStateFault",
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
const deserializeAws_queryInvalidRetentionPeriodFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidRetentionPeriodFault(body.Error, context);
    const contents = {
        name: "InvalidRetentionPeriodFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidS3BucketNameFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3BucketNameFault(body.Error, context);
    const contents = {
        name: "InvalidS3BucketNameFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidS3KeyPrefixFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidS3KeyPrefixFault(body.Error, context);
    const contents = {
        name: "InvalidS3KeyPrefixFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidScheduledActionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidScheduledActionFault(body.Error, context);
    const contents = {
        name: "InvalidScheduledActionFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidScheduleFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidScheduleFault(body.Error, context);
    const contents = {
        name: "InvalidScheduleFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidSnapshotCopyGrantStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSnapshotCopyGrantStateFault(body.Error, context);
    const contents = {
        name: "InvalidSnapshotCopyGrantStateFault",
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
const deserializeAws_queryInvalidSubscriptionStateFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidSubscriptionStateFault(body.Error, context);
    const contents = {
        name: "InvalidSubscriptionStateFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTableRestoreArgumentFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTableRestoreArgumentFault(body.Error, context);
    const contents = {
        name: "InvalidTableRestoreArgumentFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidTagFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidTagFault(body.Error, context);
    const contents = {
        name: "InvalidTagFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryInvalidUsageLimitFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryInvalidUsageLimitFault(body.Error, context);
    const contents = {
        name: "InvalidUsageLimitFault",
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
const deserializeAws_queryLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryLimitExceededFault(body.Error, context);
    const contents = {
        name: "LimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault(body.Error, context);
    const contents = {
        name: "NumberOfNodesPerClusterLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryNumberOfNodesQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryNumberOfNodesQuotaExceededFault(body.Error, context);
    const contents = {
        name: "NumberOfNodesQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryPartnerNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryPartnerNotFoundFault(body.Error, context);
    const contents = {
        name: "PartnerNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ReservedNodeAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyMigratedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeAlreadyMigratedFault(body.Error, context);
    const contents = {
        name: "ReservedNodeAlreadyMigratedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedNodeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedNodeNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedNodeOfferingNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeOfferingNotFoundFault(body.Error, context);
    const contents = {
        name: "ReservedNodeOfferingNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryReservedNodeQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryReservedNodeQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ReservedNodeQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryResizeNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryResizeNotFoundFault(body.Error, context);
    const contents = {
        name: "ResizeNotFoundFault",
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
const deserializeAws_queryScheduledActionAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "ScheduledActionAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryScheduledActionNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionNotFoundFault(body.Error, context);
    const contents = {
        name: "ScheduledActionNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryScheduledActionQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionQuotaExceededFault(body.Error, context);
    const contents = {
        name: "ScheduledActionQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryScheduledActionTypeUnsupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduledActionTypeUnsupportedFault(body.Error, context);
    const contents = {
        name: "ScheduledActionTypeUnsupportedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryScheduleDefinitionTypeUnsupportedFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryScheduleDefinitionTypeUnsupportedFault(body.Error, context);
    const contents = {
        name: "ScheduleDefinitionTypeUnsupportedFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyAlreadyDisabledFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyAlreadyDisabledFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyEnabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyAlreadyEnabledFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyAlreadyEnabledFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyDisabledFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyDisabledFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyDisabledFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyGrantAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyGrantAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyGrantNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantNotFoundFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyGrantNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotCopyGrantQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotCopyGrantQuotaExceededFault(body.Error, context);
    const contents = {
        name: "SnapshotCopyGrantQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotScheduleAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "SnapshotScheduleAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotScheduleNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleNotFoundFault(body.Error, context);
    const contents = {
        name: "SnapshotScheduleNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotScheduleQuotaExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleQuotaExceededFault(body.Error, context);
    const contents = {
        name: "SnapshotScheduleQuotaExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_querySnapshotScheduleUpdateInProgressFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySnapshotScheduleUpdateInProgressFault(body.Error, context);
    const contents = {
        name: "SnapshotScheduleUpdateInProgressFault",
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
const deserializeAws_querySubscriptionEventIdNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionEventIdNotFoundFault(body.Error, context);
    const contents = {
        name: "SubscriptionEventIdNotFoundFault",
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
const deserializeAws_querySubscriptionSeverityNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_querySubscriptionSeverityNotFoundFault(body.Error, context);
    const contents = {
        name: "SubscriptionSeverityNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTableLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTableLimitExceededFault(body.Error, context);
    const contents = {
        name: "TableLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTableRestoreNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTableRestoreNotFoundFault(body.Error, context);
    const contents = {
        name: "TableRestoreNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryTagLimitExceededFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryTagLimitExceededFault(body.Error, context);
    const contents = {
        name: "TagLimitExceededFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnauthorizedOperationResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnauthorizedOperation(body.Error, context);
    const contents = {
        name: "UnauthorizedOperation",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnauthorizedPartnerIntegrationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnauthorizedPartnerIntegrationFault(body.Error, context);
    const contents = {
        name: "UnauthorizedPartnerIntegrationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnknownSnapshotCopyRegionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnknownSnapshotCopyRegionFault(body.Error, context);
    const contents = {
        name: "UnknownSnapshotCopyRegionFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnsupportedOperationFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOperationFault(body.Error, context);
    const contents = {
        name: "UnsupportedOperationFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUnsupportedOptionFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUnsupportedOptionFault(body.Error, context);
    const contents = {
        name: "UnsupportedOptionFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUsageLimitAlreadyExistsFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUsageLimitAlreadyExistsFault(body.Error, context);
    const contents = {
        name: "UsageLimitAlreadyExistsFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_queryUsageLimitNotFoundFaultResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_queryUsageLimitNotFoundFault(body.Error, context);
    const contents = {
        name: "UsageLimitNotFoundFault",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_queryAcceptReservedNodeExchangeInputMessage = (input, context) => {
    const entries = {};
    if (input.ReservedNodeId !== undefined && input.ReservedNodeId !== null) {
        entries["ReservedNodeId"] = input.ReservedNodeId;
    }
    if (input.TargetReservedNodeOfferingId !== undefined && input.TargetReservedNodeOfferingId !== null) {
        entries["TargetReservedNodeOfferingId"] = input.TargetReservedNodeOfferingId;
    }
    return entries;
};
const serializeAws_queryAttributeNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`AttributeName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryAuthorizeClusterSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryAuthorizeEndpointAccessMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Account !== undefined && input.Account !== null) {
        entries["Account"] = input.Account;
    }
    if (input.VpcIds !== undefined && input.VpcIds !== null) {
        const memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcIds.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryAuthorizeSnapshotAccessMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryBatchDeleteClusterSnapshotsRequest = (input, context) => {
    const entries = {};
    if (input.Identifiers !== undefined && input.Identifiers !== null) {
        const memberEntries = serializeAws_queryDeleteClusterSnapshotMessageList(input.Identifiers, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Identifiers.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryBatchModifyClusterSnapshotsMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotIdentifierList !== undefined && input.SnapshotIdentifierList !== null) {
        const memberEntries = serializeAws_querySnapshotIdentifierList(input.SnapshotIdentifierList, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SnapshotIdentifierList.${key}`;
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
const serializeAws_queryCancelResizeMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryClusterSecurityGroupNameList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`ClusterSecurityGroupName.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryCopyClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryCreateClusterMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ClusterSecurityGroups.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
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
        const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IamRoles.${key}`;
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
const serializeAws_queryCreateClusterParameterGroupMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateClusterSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
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
const serializeAws_queryCreateClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
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
const serializeAws_queryCreateEndpointAccessMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventCategories.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateHsmClientCertificateMessage = (input, context) => {
    const entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
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
const serializeAws_queryCreateHsmConfigurationMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryCreateScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.TargetAction !== undefined && input.TargetAction !== null) {
        const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TargetAction.${key}`;
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
const serializeAws_queryCreateSnapshotCopyGrantMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
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
const serializeAws_queryCreateSnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ScheduleDefinitions !== undefined && input.ScheduleDefinitions !== null) {
        const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScheduleDefinitions.${key}`;
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
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
const serializeAws_queryCreateTagsMessage = (input, context) => {
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
const serializeAws_queryCreateUsageLimitMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagList(input.Tags, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDbGroupList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`DbGroup.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteClusterMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDeleteClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSecurityGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSecurityGroupName !== undefined && input.ClusterSecurityGroupName !== null) {
        entries["ClusterSecurityGroupName"] = input.ClusterSecurityGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSnapshotMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotIdentifier !== undefined && input.SnapshotIdentifier !== null) {
        entries["SnapshotIdentifier"] = input.SnapshotIdentifier;
    }
    if (input.SnapshotClusterIdentifier !== undefined && input.SnapshotClusterIdentifier !== null) {
        entries["SnapshotClusterIdentifier"] = input.SnapshotClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSnapshotMessageList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryDeleteClusterSnapshotMessage(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`DeleteClusterSnapshotMessage.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryDeleteClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    return entries;
};
const serializeAws_queryDeleteEndpointAccessMessage = (input, context) => {
    const entries = {};
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
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
const serializeAws_queryDeleteHsmClientCertificateMessage = (input, context) => {
    const entries = {};
    if (input.HsmClientCertificateIdentifier !== undefined && input.HsmClientCertificateIdentifier !== null) {
        entries["HsmClientCertificateIdentifier"] = input.HsmClientCertificateIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteHsmConfigurationMessage = (input, context) => {
    const entries = {};
    if (input.HsmConfigurationIdentifier !== undefined && input.HsmConfigurationIdentifier !== null) {
        entries["HsmConfigurationIdentifier"] = input.HsmConfigurationIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    return entries;
};
const serializeAws_queryDeleteSnapshotCopyGrantMessage = (input, context) => {
    const entries = {};
    if (input.SnapshotCopyGrantName !== undefined && input.SnapshotCopyGrantName !== null) {
        entries["SnapshotCopyGrantName"] = input.SnapshotCopyGrantName;
    }
    return entries;
};
const serializeAws_queryDeleteSnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    return entries;
};
const serializeAws_queryDeleteTagsMessage = (input, context) => {
    const entries = {};
    if (input.ResourceName !== undefined && input.ResourceName !== null) {
        entries["ResourceName"] = input.ResourceName;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDeleteUsageLimitMessage = (input, context) => {
    const entries = {};
    if (input.UsageLimitId !== undefined && input.UsageLimitId !== null) {
        entries["UsageLimitId"] = input.UsageLimitId;
    }
    return entries;
};
const serializeAws_queryDescribeAccountAttributesMessage = (input, context) => {
    const entries = {};
    if (input.AttributeNames !== undefined && input.AttributeNames !== null) {
        const memberEntries = serializeAws_queryAttributeNameList(input.AttributeNames, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AttributeNames.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterDbRevisionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeClusterParameterGroupsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterParametersMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeClusterSecurityGroupsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClustersMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterSnapshotsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ClusterExists !== undefined && input.ClusterExists !== null) {
        entries["ClusterExists"] = input.ClusterExists;
    }
    if (input.SortingEntities !== undefined && input.SortingEntities !== null) {
        const memberEntries = serializeAws_querySnapshotSortingEntityList(input.SortingEntities, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SortingEntities.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterSubnetGroupsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeClusterTracksMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeClusterVersionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeDefaultClusterParametersMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeEndpointAccessMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeEndpointAuthorizationMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeEventCategoriesMessage = (input, context) => {
    const entries = {};
    if (input.SourceType !== undefined && input.SourceType !== null) {
        entries["SourceType"] = input.SourceType;
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
const serializeAws_queryDescribeEventSubscriptionsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeHsmClientCertificatesMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeHsmConfigurationsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeLoggingStatusMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeNodeConfigurationOptionsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryNodeConfigurationOptionsFilterList(input.Filters, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Filter.${key}`;
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
const serializeAws_queryDescribeOrderableClusterOptionsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribePartnersInputMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeReservedNodeOfferingsMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeReservedNodesMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeResizeMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDescribeScheduledActionsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryScheduledActionFilterList(input.Filters, context);
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
const serializeAws_queryDescribeSnapshotCopyGrantsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeSnapshotSchedulesMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.TagKeys !== undefined && input.TagKeys !== null) {
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
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
const serializeAws_queryDescribeTableRestoreStatusMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryDescribeTagsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDescribeUsageLimitsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input.TagValues !== undefined && input.TagValues !== null) {
        const memberEntries = serializeAws_queryTagValueList(input.TagValues, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TagValues.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryDisableLoggingMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryDisableSnapshotCopyMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryEnableLoggingMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryEnableSnapshotCopyMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryGetClusterCredentialsMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryDbGroupList(input.DbGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `DbGroups.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryGetReservedNodeExchangeOfferingsInputMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryIamRoleArnList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`IamRoleArn.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryModifyAquaInputMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.AquaConfigurationStatus !== undefined && input.AquaConfigurationStatus !== null) {
        entries["AquaConfigurationStatus"] = input.AquaConfigurationStatus;
    }
    return entries;
};
const serializeAws_queryModifyClusterDbRevisionMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.RevisionTarget !== undefined && input.RevisionTarget !== null) {
        entries["RevisionTarget"] = input.RevisionTarget;
    }
    return entries;
};
const serializeAws_queryModifyClusterIamRolesMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.AddIamRoles !== undefined && input.AddIamRoles !== null) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.AddIamRoles, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `AddIamRoles.${key}`;
            entries[loc] = value;
        });
    }
    if (input.RemoveIamRoles !== undefined && input.RemoveIamRoles !== null) {
        const memberEntries = serializeAws_queryIamRoleArnList(input.RemoveIamRoles, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `RemoveIamRoles.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyClusterMaintenanceMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryModifyClusterMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ClusterSecurityGroups.${key}`;
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
const serializeAws_queryModifyClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
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
const serializeAws_queryModifyClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryModifyClusterSnapshotScheduleMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryModifyClusterSubnetGroupMessage = (input, context) => {
    const entries = {};
    if (input.ClusterSubnetGroupName !== undefined && input.ClusterSubnetGroupName !== null) {
        entries["ClusterSubnetGroupName"] = input.ClusterSubnetGroupName;
    }
    if (input.Description !== undefined && input.Description !== null) {
        entries["Description"] = input.Description;
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
const serializeAws_queryModifyEndpointAccessMessage = (input, context) => {
    const entries = {};
    if (input.EndpointName !== undefined && input.EndpointName !== null) {
        entries["EndpointName"] = input.EndpointName;
    }
    if (input.VpcSecurityGroupIds !== undefined && input.VpcSecurityGroupIds !== null) {
        const memberEntries = serializeAws_queryVpcSecurityGroupIdList(input.VpcSecurityGroupIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcSecurityGroupIds.${key}`;
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
    if (input.SourceIds !== undefined && input.SourceIds !== null) {
        const memberEntries = serializeAws_querySourceIdsList(input.SourceIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `SourceIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.EventCategories !== undefined && input.EventCategories !== null) {
        const memberEntries = serializeAws_queryEventCategoriesList(input.EventCategories, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `EventCategories.${key}`;
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
const serializeAws_queryModifyScheduledActionMessage = (input, context) => {
    const entries = {};
    if (input.ScheduledActionName !== undefined && input.ScheduledActionName !== null) {
        entries["ScheduledActionName"] = input.ScheduledActionName;
    }
    if (input.TargetAction !== undefined && input.TargetAction !== null) {
        const memberEntries = serializeAws_queryScheduledActionType(input.TargetAction, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TargetAction.${key}`;
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
const serializeAws_queryModifySnapshotCopyRetentionPeriodMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryModifySnapshotScheduleMessage = (input, context) => {
    const entries = {};
    if (input.ScheduleIdentifier !== undefined && input.ScheduleIdentifier !== null) {
        entries["ScheduleIdentifier"] = input.ScheduleIdentifier;
    }
    if (input.ScheduleDefinitions !== undefined && input.ScheduleDefinitions !== null) {
        const memberEntries = serializeAws_queryScheduleDefinitionList(input.ScheduleDefinitions, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ScheduleDefinitions.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryModifyUsageLimitMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryNodeConfigurationOptionsFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Operator !== undefined && input.Operator !== null) {
        entries["Operator"] = input.Operator;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Value.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryNodeConfigurationOptionsFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryNodeConfigurationOptionsFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`NodeConfigurationOptionsFilter.${counter}.${key}`] = value;
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
const serializeAws_queryPartnerIntegrationInputMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryPauseClusterMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryPurchaseReservedNodeOfferingMessage = (input, context) => {
    const entries = {};
    if (input.ReservedNodeOfferingId !== undefined && input.ReservedNodeOfferingId !== null) {
        entries["ReservedNodeOfferingId"] = input.ReservedNodeOfferingId;
    }
    if (input.NodeCount !== undefined && input.NodeCount !== null) {
        entries["NodeCount"] = input.NodeCount;
    }
    return entries;
};
const serializeAws_queryRebootClusterMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryResetClusterParameterGroupMessage = (input, context) => {
    const entries = {};
    if (input.ParameterGroupName !== undefined && input.ParameterGroupName !== null) {
        entries["ParameterGroupName"] = input.ParameterGroupName;
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
const serializeAws_queryResizeClusterMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryRestoreFromClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
        const memberEntries = serializeAws_queryClusterSecurityGroupNameList(input.ClusterSecurityGroups, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ClusterSecurityGroups.${key}`;
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
        const memberEntries = serializeAws_queryIamRoleArnList(input.IamRoles, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `IamRoles.${key}`;
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
const serializeAws_queryRestoreTableFromClusterSnapshotMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryResumeClusterMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryRevokeClusterSecurityGroupIngressMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryRevokeEndpointAccessMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    if (input.Account !== undefined && input.Account !== null) {
        entries["Account"] = input.Account;
    }
    if (input.VpcIds !== undefined && input.VpcIds !== null) {
        const memberEntries = serializeAws_queryVpcIdentifierList(input.VpcIds, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `VpcIds.${key}`;
            entries[loc] = value;
        });
    }
    if (input.Force !== undefined && input.Force !== null) {
        entries["Force"] = input.Force;
    }
    return entries;
};
const serializeAws_queryRevokeSnapshotAccessMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryRotateEncryptionKeyMessage = (input, context) => {
    const entries = {};
    if (input.ClusterIdentifier !== undefined && input.ClusterIdentifier !== null) {
        entries["ClusterIdentifier"] = input.ClusterIdentifier;
    }
    return entries;
};
const serializeAws_queryScheduledActionFilter = (input, context) => {
    const entries = {};
    if (input.Name !== undefined && input.Name !== null) {
        entries["Name"] = input.Name;
    }
    if (input.Values !== undefined && input.Values !== null) {
        const memberEntries = serializeAws_queryValueStringList(input.Values, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Values.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryScheduledActionFilterList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_queryScheduledActionFilter(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`ScheduledActionFilter.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const serializeAws_queryScheduledActionType = (input, context) => {
    const entries = {};
    if (input.ResizeCluster !== undefined && input.ResizeCluster !== null) {
        const memberEntries = serializeAws_queryResizeClusterMessage(input.ResizeCluster, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResizeCluster.${key}`;
            entries[loc] = value;
        });
    }
    if (input.PauseCluster !== undefined && input.PauseCluster !== null) {
        const memberEntries = serializeAws_queryPauseClusterMessage(input.PauseCluster, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PauseCluster.${key}`;
            entries[loc] = value;
        });
    }
    if (input.ResumeCluster !== undefined && input.ResumeCluster !== null) {
        const memberEntries = serializeAws_queryResumeClusterMessage(input.ResumeCluster, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ResumeCluster.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const serializeAws_queryScheduleDefinitionList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`ScheduleDefinition.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySnapshotIdentifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`String.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_querySnapshotSortingEntity = (input, context) => {
    const entries = {};
    if (input.Attribute !== undefined && input.Attribute !== null) {
        entries["Attribute"] = input.Attribute;
    }
    if (input.SortOrder !== undefined && input.SortOrder !== null) {
        entries["SortOrder"] = input.SortOrder;
    }
    return entries;
};
const serializeAws_querySnapshotSortingEntityList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = serializeAws_querySnapshotSortingEntity(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`SnapshotSortingEntity.${counter}.${key}`] = value;
        });
        counter++;
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
const serializeAws_queryTagKeyList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`TagKey.${counter}`] = entry;
        counter++;
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
const serializeAws_queryTagValueList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`TagValue.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryUpdatePartnerStatusInputMessage = (input, context) => {
    const entries = {};
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
const serializeAws_queryValueStringList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`item.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const serializeAws_queryVpcIdentifierList = (input, context) => {
    const entries = {};
    let counter = 1;
    for (let entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`VpcIdentifier.${counter}`] = entry;
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
const deserializeAws_queryAcceptReservedNodeExchangeOutputMessage = (output, context) => {
    let contents = {
        ExchangedReservedNode: undefined,
    };
    if (output["ExchangedReservedNode"] !== undefined) {
        contents.ExchangedReservedNode = deserializeAws_queryReservedNode(output["ExchangedReservedNode"], context);
    }
    return contents;
};
const deserializeAws_queryAccessToClusterDeniedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAccessToSnapshotDeniedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAccountAttribute = (output, context) => {
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
    if (output["AttributeValues"] !== undefined && output["AttributeValues"]["AttributeValueTarget"] !== undefined) {
        contents.AttributeValues = deserializeAws_queryAttributeValueList(smithy_client_1.getArrayIfSingleItem(output["AttributeValues"]["AttributeValueTarget"]), context);
    }
    return contents;
};
const deserializeAws_queryAccountAttributeList = (output, context) => {
    let contents = {
        AccountAttributes: undefined,
    };
    if (output.AccountAttributes === "") {
        contents.AccountAttributes = [];
    }
    if (output["AccountAttributes"] !== undefined && output["AccountAttributes"]["AccountAttribute"] !== undefined) {
        contents.AccountAttributes = deserializeAws_queryAttributeList(smithy_client_1.getArrayIfSingleItem(output["AccountAttributes"]["AccountAttribute"]), context);
    }
    return contents;
};
const deserializeAws_queryAccountsWithRestoreAccessList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccountWithRestoreAccess(entry, context);
    });
};
const deserializeAws_queryAccountWithRestoreAccess = (output, context) => {
    let contents = {
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
const deserializeAws_queryAquaConfiguration = (output, context) => {
    let contents = {
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
const deserializeAws_queryAssociatedClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterAssociatedToSchedule(entry, context);
    });
};
const deserializeAws_queryAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAccountAttribute(entry, context);
    });
};
const deserializeAws_queryAttributeValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryAttributeValueTarget(entry, context);
    });
};
const deserializeAws_queryAttributeValueTarget = (output, context) => {
    let contents = {
        AttributeValue: undefined,
    };
    if (output["AttributeValue"] !== undefined) {
        contents.AttributeValue = output["AttributeValue"];
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
const deserializeAws_queryAuthorizationQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryAuthorizeClusterSecurityGroupIngressResult = (output, context) => {
    let contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryAuthorizeSnapshotAccessResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryAvailabilityZone = (output, context) => {
    let contents = {
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
        contents.SupportedPlatforms = deserializeAws_querySupportedPlatformsList(smithy_client_1.getArrayIfSingleItem(output["SupportedPlatforms"]["SupportedPlatform"]), context);
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
const deserializeAws_queryBatchDeleteClusterSnapshotsResult = (output, context) => {
    let contents = {
        Resources: undefined,
        Errors: undefined,
    };
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
        contents.Resources = deserializeAws_querySnapshotIdentifierList(smithy_client_1.getArrayIfSingleItem(output["Resources"]["String"]), context);
    }
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrorList(smithy_client_1.getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]), context);
    }
    return contents;
};
const deserializeAws_queryBatchDeleteRequestSizeExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryBatchModifyClusterSnapshotsOutputMessage = (output, context) => {
    let contents = {
        Resources: undefined,
        Errors: undefined,
    };
    if (output.Resources === "") {
        contents.Resources = [];
    }
    if (output["Resources"] !== undefined && output["Resources"]["String"] !== undefined) {
        contents.Resources = deserializeAws_querySnapshotIdentifierList(smithy_client_1.getArrayIfSingleItem(output["Resources"]["String"]), context);
    }
    if (output.Errors === "") {
        contents.Errors = [];
    }
    if (output["Errors"] !== undefined && output["Errors"]["SnapshotErrorMessage"] !== undefined) {
        contents.Errors = deserializeAws_queryBatchSnapshotOperationErrors(smithy_client_1.getArrayIfSingleItem(output["Errors"]["SnapshotErrorMessage"]), context);
    }
    return contents;
};
const deserializeAws_queryBatchSnapshotOperationErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};
const deserializeAws_queryBatchSnapshotOperationErrors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotErrorMessage(entry, context);
    });
};
const deserializeAws_queryBucketNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCluster = (output, context) => {
    let contents = {
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
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]), context);
    }
    if (output.VpcSecurityGroups === "") {
        contents.VpcSecurityGroups = [];
    }
    if (output["VpcSecurityGroups"] !== undefined && output["VpcSecurityGroups"]["VpcSecurityGroup"] !== undefined) {
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]), context);
    }
    if (output.ClusterParameterGroups === "") {
        contents.ClusterParameterGroups = [];
    }
    if (output["ClusterParameterGroups"] !== undefined &&
        output["ClusterParameterGroups"]["ClusterParameterGroup"] !== undefined) {
        contents.ClusterParameterGroups = deserializeAws_queryClusterParameterGroupStatusList(smithy_client_1.getArrayIfSingleItem(output["ClusterParameterGroups"]["ClusterParameterGroup"]), context);
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
        contents.ClusterNodes = deserializeAws_queryClusterNodesList(smithy_client_1.getArrayIfSingleItem(output["ClusterNodes"]["member"]), context);
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
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
        contents.IamRoles = deserializeAws_queryClusterIamRoleList(smithy_client_1.getArrayIfSingleItem(output["IamRoles"]["ClusterIamRole"]), context);
    }
    if (output.PendingActions === "") {
        contents.PendingActions = [];
    }
    if (output["PendingActions"] !== undefined && output["PendingActions"]["member"] !== undefined) {
        contents.PendingActions = deserializeAws_queryPendingActionsList(smithy_client_1.getArrayIfSingleItem(output["PendingActions"]["member"]), context);
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
        contents.DeferredMaintenanceWindows = deserializeAws_queryDeferredMaintenanceWindowsList(smithy_client_1.getArrayIfSingleItem(output["DeferredMaintenanceWindows"]["DeferredMaintenanceWindow"]), context);
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
const deserializeAws_queryClusterAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterAssociatedToSchedule = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterCredentials = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterDbRevision = (output, context) => {
    let contents = {
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
        contents.RevisionTargets = deserializeAws_queryRevisionTargetsList(smithy_client_1.getArrayIfSingleItem(output["RevisionTargets"]["RevisionTarget"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterDbRevisionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterDbRevision(entry, context);
    });
};
const deserializeAws_queryClusterDbRevisionsMessage = (output, context) => {
    let contents = {
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
        contents.ClusterDbRevisions = deserializeAws_queryClusterDbRevisionsList(smithy_client_1.getArrayIfSingleItem(output["ClusterDbRevisions"]["ClusterDbRevision"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterIamRole = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterIamRoleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterIamRole(entry, context);
    });
};
const deserializeAws_queryClusterList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryCluster(entry, context);
    });
};
const deserializeAws_queryClusterNode = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterNodesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterNode(entry, context);
    });
};
const deserializeAws_queryClusterNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterOnLatestRevisionFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroup = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupDetails = (output, context) => {
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
const deserializeAws_queryClusterParameterGroupNameMessage = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterParameterGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupsMessage = (output, context) => {
    let contents = {
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
        contents.ParameterGroups = deserializeAws_queryParameterGroupList(smithy_client_1.getArrayIfSingleItem(output["ParameterGroups"]["ClusterParameterGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupStatus = (output, context) => {
    let contents = {
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
        contents.ClusterParameterStatusList = deserializeAws_queryClusterParameterStatusList(smithy_client_1.getArrayIfSingleItem(output["ClusterParameterStatusList"]["member"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterParameterGroupStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterGroupStatus(entry, context);
    });
};
const deserializeAws_queryClusterParameterStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterParameterStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterStatus(entry, context);
    });
};
const deserializeAws_queryClusterQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroup = (output, context) => {
    let contents = {
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
        contents.EC2SecurityGroups = deserializeAws_queryEC2SecurityGroupList(smithy_client_1.getArrayIfSingleItem(output["EC2SecurityGroups"]["EC2SecurityGroup"]), context);
    }
    if (output.IPRanges === "") {
        contents.IPRanges = [];
    }
    if (output["IPRanges"] !== undefined && output["IPRanges"]["IPRange"] !== undefined) {
        contents.IPRanges = deserializeAws_queryIPRangeList(smithy_client_1.getArrayIfSingleItem(output["IPRanges"]["IPRange"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupMembership = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterSecurityGroupMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSecurityGroupMembership(entry, context);
    });
};
const deserializeAws_queryClusterSecurityGroupMessage = (output, context) => {
    let contents = {
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
        contents.ClusterSecurityGroups = deserializeAws_queryClusterSecurityGroups(smithy_client_1.getArrayIfSingleItem(output["ClusterSecurityGroups"]["ClusterSecurityGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSecurityGroup(entry, context);
    });
};
const deserializeAws_queryClustersMessage = (output, context) => {
    let contents = {
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
        contents.Clusters = deserializeAws_queryClusterList(smithy_client_1.getArrayIfSingleItem(output["Clusters"]["Cluster"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotCopyStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterSnapshotNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSnapshotQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroup = (output, context) => {
    let contents = {
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
        contents.Subnets = deserializeAws_querySubnetList(smithy_client_1.getArrayIfSingleItem(output["Subnets"]["Subnet"]), context);
    }
    if (output.Tags === "") {
        contents.Tags = [];
    }
    if (output["Tags"] !== undefined && output["Tags"]["Tag"] !== undefined) {
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupMessage = (output, context) => {
    let contents = {
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
        contents.ClusterSubnetGroups = deserializeAws_queryClusterSubnetGroups(smithy_client_1.getArrayIfSingleItem(output["ClusterSubnetGroups"]["ClusterSubnetGroup"]), context);
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroupQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterSubnetGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterSubnetGroup(entry, context);
    });
};
const deserializeAws_queryClusterSubnetQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryClusterVersion = (output, context) => {
    let contents = {
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
const deserializeAws_queryClusterVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterVersion(entry, context);
    });
};
const deserializeAws_queryClusterVersionsMessage = (output, context) => {
    let contents = {
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
        contents.ClusterVersions = deserializeAws_queryClusterVersionList(smithy_client_1.getArrayIfSingleItem(output["ClusterVersions"]["ClusterVersion"]), context);
    }
    return contents;
};
const deserializeAws_queryCopyClusterSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCopyToRegionDisabledFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryCreateClusterParameterGroupResult = (output, context) => {
    let contents = {
        ClusterParameterGroup: undefined,
    };
    if (output["ClusterParameterGroup"] !== undefined) {
        contents.ClusterParameterGroup = deserializeAws_queryClusterParameterGroup(output["ClusterParameterGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSecurityGroupResult = (output, context) => {
    let contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryCreateClusterSubnetGroupResult = (output, context) => {
    let contents = {
        ClusterSubnetGroup: undefined,
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
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
const deserializeAws_queryCreateHsmClientCertificateResult = (output, context) => {
    let contents = {
        HsmClientCertificate: undefined,
    };
    if (output["HsmClientCertificate"] !== undefined) {
        contents.HsmClientCertificate = deserializeAws_queryHsmClientCertificate(output["HsmClientCertificate"], context);
    }
    return contents;
};
const deserializeAws_queryCreateHsmConfigurationResult = (output, context) => {
    let contents = {
        HsmConfiguration: undefined,
    };
    if (output["HsmConfiguration"] !== undefined) {
        contents.HsmConfiguration = deserializeAws_queryHsmConfiguration(output["HsmConfiguration"], context);
    }
    return contents;
};
const deserializeAws_queryCreateSnapshotCopyGrantResult = (output, context) => {
    let contents = {
        SnapshotCopyGrant: undefined,
    };
    if (output["SnapshotCopyGrant"] !== undefined) {
        contents.SnapshotCopyGrant = deserializeAws_querySnapshotCopyGrant(output["SnapshotCopyGrant"], context);
    }
    return contents;
};
const deserializeAws_queryCustomerStorageMessage = (output, context) => {
    let contents = {
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
const deserializeAws_queryDataTransferProgress = (output, context) => {
    let contents = {
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
const deserializeAws_queryDefaultClusterParameters = (output, context) => {
    let contents = {
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
        contents.Parameters = deserializeAws_queryParametersList(smithy_client_1.getArrayIfSingleItem(output["Parameters"]["Parameter"]), context);
    }
    return contents;
};
const deserializeAws_queryDeferredMaintenanceWindow = (output, context) => {
    let contents = {
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
const deserializeAws_queryDeferredMaintenanceWindowsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryDeferredMaintenanceWindow(entry, context);
    });
};
const deserializeAws_queryDeleteClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryDeleteClusterSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryDependentServiceRequestThrottlingFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDependentServiceUnavailableFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryDescribeDefaultClusterParametersResult = (output, context) => {
    let contents = {
        DefaultClusterParameters: undefined,
    };
    if (output["DefaultClusterParameters"] !== undefined) {
        contents.DefaultClusterParameters = deserializeAws_queryDefaultClusterParameters(output["DefaultClusterParameters"], context);
    }
    return contents;
};
const deserializeAws_queryDescribePartnersOutputMessage = (output, context) => {
    let contents = {
        PartnerIntegrationInfoList: undefined,
    };
    if (output.PartnerIntegrationInfoList === "") {
        contents.PartnerIntegrationInfoList = [];
    }
    if (output["PartnerIntegrationInfoList"] !== undefined &&
        output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"] !== undefined) {
        contents.PartnerIntegrationInfoList = deserializeAws_queryPartnerIntegrationInfoList(smithy_client_1.getArrayIfSingleItem(output["PartnerIntegrationInfoList"]["PartnerIntegrationInfo"]), context);
    }
    return contents;
};
const deserializeAws_queryDescribeSnapshotSchedulesOutputMessage = (output, context) => {
    let contents = {
        SnapshotSchedules: undefined,
        Marker: undefined,
    };
    if (output.SnapshotSchedules === "") {
        contents.SnapshotSchedules = [];
    }
    if (output["SnapshotSchedules"] !== undefined && output["SnapshotSchedules"]["SnapshotSchedule"] !== undefined) {
        contents.SnapshotSchedules = deserializeAws_querySnapshotScheduleList(smithy_client_1.getArrayIfSingleItem(output["SnapshotSchedules"]["SnapshotSchedule"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryDisableSnapshotCopyResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryEC2SecurityGroup = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
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
const deserializeAws_queryElasticIpStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryEligibleTracksToUpdateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUpdateTarget(entry, context);
    });
};
const deserializeAws_queryEnableSnapshotCopyResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryEndpoint = (output, context) => {
    let contents = {
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
        contents.VpcEndpoints = deserializeAws_queryVpcEndpointsList(smithy_client_1.getArrayIfSingleItem(output["VpcEndpoints"]["VpcEndpoint"]), context);
    }
    return contents;
};
const deserializeAws_queryEndpointAccess = (output, context) => {
    let contents = {
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
        contents.VpcSecurityGroups = deserializeAws_queryVpcSecurityGroupMembershipList(smithy_client_1.getArrayIfSingleItem(output["VpcSecurityGroups"]["VpcSecurityGroup"]), context);
    }
    if (output["VpcEndpoint"] !== undefined) {
        contents.VpcEndpoint = deserializeAws_queryVpcEndpoint(output["VpcEndpoint"], context);
    }
    return contents;
};
const deserializeAws_queryEndpointAccesses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEndpointAccess(entry, context);
    });
};
const deserializeAws_queryEndpointAccessList = (output, context) => {
    let contents = {
        EndpointAccessList: undefined,
        Marker: undefined,
    };
    if (output.EndpointAccessList === "") {
        contents.EndpointAccessList = [];
    }
    if (output["EndpointAccessList"] !== undefined && output["EndpointAccessList"]["member"] !== undefined) {
        contents.EndpointAccessList = deserializeAws_queryEndpointAccesses(smithy_client_1.getArrayIfSingleItem(output["EndpointAccessList"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryEndpointAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointAuthorization = (output, context) => {
    let contents = {
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
        contents.AllowedVPCs = deserializeAws_queryVpcIdentifierList(smithy_client_1.getArrayIfSingleItem(output["AllowedVPCs"]["VpcIdentifier"]), context);
    }
    if (output["EndpointCount"] !== undefined) {
        contents.EndpointCount = parseInt(output["EndpointCount"]);
    }
    return contents;
};
const deserializeAws_queryEndpointAuthorizationAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointAuthorizationList = (output, context) => {
    let contents = {
        EndpointAuthorizationList: undefined,
        Marker: undefined,
    };
    if (output.EndpointAuthorizationList === "") {
        contents.EndpointAuthorizationList = [];
    }
    if (output["EndpointAuthorizationList"] !== undefined &&
        output["EndpointAuthorizationList"]["member"] !== undefined) {
        contents.EndpointAuthorizationList = deserializeAws_queryEndpointAuthorizations(smithy_client_1.getArrayIfSingleItem(output["EndpointAuthorizationList"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryEndpointAuthorizationNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointAuthorizations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEndpointAuthorization(entry, context);
    });
};
const deserializeAws_queryEndpointAuthorizationsPerClusterLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointsPerAuthorizationLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEndpointsPerClusterLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryEvent = (output, context) => {
    let contents = {
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
        contents.EventCategories = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
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
        Events: undefined,
    };
    if (output["SourceType"] !== undefined) {
        contents.SourceType = output["SourceType"];
    }
    if (output.Events === "") {
        contents.Events = [];
    }
    if (output["Events"] !== undefined && output["Events"]["EventInfoMap"] !== undefined) {
        contents.Events = deserializeAws_queryEventInfoMapList(smithy_client_1.getArrayIfSingleItem(output["Events"]["EventInfoMap"]), context);
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
const deserializeAws_queryEventInfoMap = (output, context) => {
    let contents = {
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
        contents.EventCategories = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategories"]["EventCategory"]), context);
    }
    if (output["EventDescription"] !== undefined) {
        contents.EventDescription = output["EventDescription"];
    }
    if (output["Severity"] !== undefined) {
        contents.Severity = output["Severity"];
    }
    return contents;
};
const deserializeAws_queryEventInfoMapList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryEventInfoMap(entry, context);
    });
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
        contents.SourceIdsList = deserializeAws_querySourceIdsList(smithy_client_1.getArrayIfSingleItem(output["SourceIdsList"]["SourceId"]), context);
    }
    if (output.EventCategoriesList === "") {
        contents.EventCategoriesList = [];
    }
    if (output["EventCategoriesList"] !== undefined && output["EventCategoriesList"]["EventCategory"] !== undefined) {
        contents.EventCategoriesList = deserializeAws_queryEventCategoriesList(smithy_client_1.getArrayIfSingleItem(output["EventCategoriesList"]["EventCategory"]), context);
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
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
const deserializeAws_queryGetReservedNodeExchangeOfferingsOutputMessage = (output, context) => {
    let contents = {
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
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(smithy_client_1.getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]), context);
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificate = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryHsmClientCertificate(entry, context);
    });
};
const deserializeAws_queryHsmClientCertificateMessage = (output, context) => {
    let contents = {
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
        contents.HsmClientCertificates = deserializeAws_queryHsmClientCertificateList(smithy_client_1.getArrayIfSingleItem(output["HsmClientCertificates"]["HsmClientCertificate"]), context);
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmClientCertificateQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfiguration = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryHsmConfiguration(entry, context);
    });
};
const deserializeAws_queryHsmConfigurationMessage = (output, context) => {
    let contents = {
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
        contents.HsmConfigurations = deserializeAws_queryHsmConfigurationList(smithy_client_1.getArrayIfSingleItem(output["HsmConfigurations"]["HsmConfiguration"]), context);
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmConfigurationQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryHsmStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryImportTablesCompleted = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryImportTablesInProgress = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryImportTablesNotStarted = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryIncompatibleOrderableOptions = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInProgressTableRestoreQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientClusterCapacityFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInsufficientS3BucketPolicyFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidAuthorizationStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterParameterGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSecurityGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotScheduleStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSnapshotStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetGroupStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterSubnetStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidClusterTrackFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidElasticIpFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidEndpointStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidHsmClientCertificateStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidHsmConfigurationStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidReservedNodeStateFault = (output, context) => {
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
const deserializeAws_queryInvalidRetentionPeriodFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3BucketNameFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidS3KeyPrefixFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidScheduledActionFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidScheduleFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidSnapshotCopyGrantStateFault = (output, context) => {
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
const deserializeAws_queryInvalidSubscriptionStateFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTableRestoreArgumentFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidTagFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryInvalidUsageLimitFault = (output, context) => {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
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
const deserializeAws_queryLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryLoggingStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryMaintenanceTrack = (output, context) => {
    let contents = {
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
        contents.UpdateTargets = deserializeAws_queryEligibleTracksToUpdateList(smithy_client_1.getArrayIfSingleItem(output["UpdateTargets"]["UpdateTarget"]), context);
    }
    return contents;
};
const deserializeAws_queryModifyAquaOutputMessage = (output, context) => {
    let contents = {
        AquaConfiguration: undefined,
    };
    if (output["AquaConfiguration"] !== undefined) {
        contents.AquaConfiguration = deserializeAws_queryAquaConfiguration(output["AquaConfiguration"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterDbRevisionResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterIamRolesResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterMaintenanceResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterSnapshotResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryModifyClusterSubnetGroupResult = (output, context) => {
    let contents = {
        ClusterSubnetGroup: undefined,
    };
    if (output["ClusterSubnetGroup"] !== undefined) {
        contents.ClusterSubnetGroup = deserializeAws_queryClusterSubnetGroup(output["ClusterSubnetGroup"], context);
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
const deserializeAws_queryModifySnapshotCopyRetentionPeriodResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryNetworkInterface = (output, context) => {
    let contents = {
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
const deserializeAws_queryNetworkInterfaceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNetworkInterface(entry, context);
    });
};
const deserializeAws_queryNodeConfigurationOption = (output, context) => {
    let contents = {
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
const deserializeAws_queryNodeConfigurationOptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryNodeConfigurationOption(entry, context);
    });
};
const deserializeAws_queryNodeConfigurationOptionsMessage = (output, context) => {
    let contents = {
        NodeConfigurationOptionList: undefined,
        Marker: undefined,
    };
    if (output.NodeConfigurationOptionList === "") {
        contents.NodeConfigurationOptionList = [];
    }
    if (output["NodeConfigurationOptionList"] !== undefined &&
        output["NodeConfigurationOptionList"]["NodeConfigurationOption"] !== undefined) {
        contents.NodeConfigurationOptionList = deserializeAws_queryNodeConfigurationOptionList(smithy_client_1.getArrayIfSingleItem(output["NodeConfigurationOptionList"]["NodeConfigurationOption"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryNumberOfNodesPerClusterLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryNumberOfNodesQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryOrderableClusterOption = (output, context) => {
    let contents = {
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
        contents.AvailabilityZones = deserializeAws_queryAvailabilityZoneList(smithy_client_1.getArrayIfSingleItem(output["AvailabilityZones"]["AvailabilityZone"]), context);
    }
    return contents;
};
const deserializeAws_queryOrderableClusterOptionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryOrderableClusterOption(entry, context);
    });
};
const deserializeAws_queryOrderableClusterOptionsMessage = (output, context) => {
    let contents = {
        OrderableClusterOptions: undefined,
        Marker: undefined,
    };
    if (output.OrderableClusterOptions === "") {
        contents.OrderableClusterOptions = [];
    }
    if (output["OrderableClusterOptions"] !== undefined &&
        output["OrderableClusterOptions"]["OrderableClusterOption"] !== undefined) {
        contents.OrderableClusterOptions = deserializeAws_queryOrderableClusterOptionsList(smithy_client_1.getArrayIfSingleItem(output["OrderableClusterOptions"]["OrderableClusterOption"]), context);
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
const deserializeAws_queryParameterGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryClusterParameterGroup(entry, context);
    });
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
const deserializeAws_queryPartnerIntegrationInfo = (output, context) => {
    let contents = {
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
const deserializeAws_queryPartnerIntegrationInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryPartnerIntegrationInfo(entry, context);
    });
};
const deserializeAws_queryPartnerIntegrationOutputMessage = (output, context) => {
    let contents = {
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
const deserializeAws_queryPartnerNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryPauseClusterMessage = (output, context) => {
    let contents = {
        ClusterIdentifier: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    return contents;
};
const deserializeAws_queryPauseClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryPendingActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryPendingModifiedValues = (output, context) => {
    let contents = {
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
const deserializeAws_queryPurchaseReservedNodeOfferingResult = (output, context) => {
    let contents = {
        ReservedNode: undefined,
    };
    if (output["ReservedNode"] !== undefined) {
        contents.ReservedNode = deserializeAws_queryReservedNode(output["ReservedNode"], context);
    }
    return contents;
};
const deserializeAws_queryRebootClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
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
const deserializeAws_queryReservedNode = (output, context) => {
    let contents = {
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
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(smithy_client_1.getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeAlreadyMigratedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedNode(entry, context);
    });
};
const deserializeAws_queryReservedNodeNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeOffering = (output, context) => {
    let contents = {
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
        contents.RecurringCharges = deserializeAws_queryRecurringChargeList(smithy_client_1.getArrayIfSingleItem(output["RecurringCharges"]["RecurringCharge"]), context);
    }
    if (output["ReservedNodeOfferingType"] !== undefined) {
        contents.ReservedNodeOfferingType = output["ReservedNodeOfferingType"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeOfferingList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryReservedNodeOffering(entry, context);
    });
};
const deserializeAws_queryReservedNodeOfferingNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodeOfferingsMessage = (output, context) => {
    let contents = {
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
        contents.ReservedNodeOfferings = deserializeAws_queryReservedNodeOfferingList(smithy_client_1.getArrayIfSingleItem(output["ReservedNodeOfferings"]["ReservedNodeOffering"]), context);
    }
    return contents;
};
const deserializeAws_queryReservedNodeQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryReservedNodesMessage = (output, context) => {
    let contents = {
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
        contents.ReservedNodes = deserializeAws_queryReservedNodeList(smithy_client_1.getArrayIfSingleItem(output["ReservedNodes"]["ReservedNode"]), context);
    }
    return contents;
};
const deserializeAws_queryResizeClusterMessage = (output, context) => {
    let contents = {
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
const deserializeAws_queryResizeClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryResizeInfo = (output, context) => {
    let contents = {
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
const deserializeAws_queryResizeNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryResizeProgressMessage = (output, context) => {
    let contents = {
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
        contents.ImportTablesCompleted = deserializeAws_queryImportTablesCompleted(smithy_client_1.getArrayIfSingleItem(output["ImportTablesCompleted"]["member"]), context);
    }
    if (output.ImportTablesInProgress === "") {
        contents.ImportTablesInProgress = [];
    }
    if (output["ImportTablesInProgress"] !== undefined && output["ImportTablesInProgress"]["member"] !== undefined) {
        contents.ImportTablesInProgress = deserializeAws_queryImportTablesInProgress(smithy_client_1.getArrayIfSingleItem(output["ImportTablesInProgress"]["member"]), context);
    }
    if (output.ImportTablesNotStarted === "") {
        contents.ImportTablesNotStarted = [];
    }
    if (output["ImportTablesNotStarted"] !== undefined && output["ImportTablesNotStarted"]["member"] !== undefined) {
        contents.ImportTablesNotStarted = deserializeAws_queryImportTablesNotStarted(smithy_client_1.getArrayIfSingleItem(output["ImportTablesNotStarted"]["member"]), context);
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
const deserializeAws_queryResourceNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryRestorableNodeTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryRestoreFromClusterSnapshotResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryRestoreStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryRestoreTableFromClusterSnapshotResult = (output, context) => {
    let contents = {
        TableRestoreStatus: undefined,
    };
    if (output["TableRestoreStatus"] !== undefined) {
        contents.TableRestoreStatus = deserializeAws_queryTableRestoreStatus(output["TableRestoreStatus"], context);
    }
    return contents;
};
const deserializeAws_queryResumeClusterMessage = (output, context) => {
    let contents = {
        ClusterIdentifier: undefined,
    };
    if (output["ClusterIdentifier"] !== undefined) {
        contents.ClusterIdentifier = output["ClusterIdentifier"];
    }
    return contents;
};
const deserializeAws_queryResumeClusterResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryRevisionTarget = (output, context) => {
    let contents = {
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
const deserializeAws_queryRevisionTargetsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryRevisionTarget(entry, context);
    });
};
const deserializeAws_queryRevokeClusterSecurityGroupIngressResult = (output, context) => {
    let contents = {
        ClusterSecurityGroup: undefined,
    };
    if (output["ClusterSecurityGroup"] !== undefined) {
        contents.ClusterSecurityGroup = deserializeAws_queryClusterSecurityGroup(output["ClusterSecurityGroup"], context);
    }
    return contents;
};
const deserializeAws_queryRevokeSnapshotAccessResult = (output, context) => {
    let contents = {
        Snapshot: undefined,
    };
    if (output["Snapshot"] !== undefined) {
        contents.Snapshot = deserializeAws_querySnapshot(output["Snapshot"], context);
    }
    return contents;
};
const deserializeAws_queryRotateEncryptionKeyResult = (output, context) => {
    let contents = {
        Cluster: undefined,
    };
    if (output["Cluster"] !== undefined) {
        contents.Cluster = deserializeAws_queryCluster(output["Cluster"], context);
    }
    return contents;
};
const deserializeAws_queryScheduledAction = (output, context) => {
    let contents = {
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
        contents.NextInvocations = deserializeAws_queryScheduledActionTimeList(smithy_client_1.getArrayIfSingleItem(output["NextInvocations"]["ScheduledActionTime"]), context);
    }
    if (output["StartTime"] !== undefined) {
        contents.StartTime = new Date(output["StartTime"]);
    }
    if (output["EndTime"] !== undefined) {
        contents.EndTime = new Date(output["EndTime"]);
    }
    return contents;
};
const deserializeAws_queryScheduledActionAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryScheduledAction(entry, context);
    });
};
const deserializeAws_queryScheduledActionNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledActionsMessage = (output, context) => {
    let contents = {
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
        contents.ScheduledActions = deserializeAws_queryScheduledActionList(smithy_client_1.getArrayIfSingleItem(output["ScheduledActions"]["ScheduledAction"]), context);
    }
    return contents;
};
const deserializeAws_queryScheduledActionTimeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
const deserializeAws_queryScheduledActionType = (output, context) => {
    let contents = {
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
const deserializeAws_queryScheduledActionTypeUnsupportedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduleDefinitionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_queryScheduleDefinitionTypeUnsupportedFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryScheduledSnapshotTimeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return new Date(entry);
    });
};
const deserializeAws_querySnapshot = (output, context) => {
    let contents = {
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
        contents.AccountsWithRestoreAccess = deserializeAws_queryAccountsWithRestoreAccessList(smithy_client_1.getArrayIfSingleItem(output["AccountsWithRestoreAccess"]["AccountWithRestoreAccess"]), context);
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    if (output.RestorableNodeTypes === "") {
        contents.RestorableNodeTypes = [];
    }
    if (output["RestorableNodeTypes"] !== undefined && output["RestorableNodeTypes"]["NodeType"] !== undefined) {
        contents.RestorableNodeTypes = deserializeAws_queryRestorableNodeTypeList(smithy_client_1.getArrayIfSingleItem(output["RestorableNodeTypes"]["NodeType"]), context);
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
const deserializeAws_querySnapshotCopyAlreadyDisabledFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyAlreadyEnabledFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyDisabledFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrant = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotCopyGrant(entry, context);
    });
};
const deserializeAws_querySnapshotCopyGrantMessage = (output, context) => {
    let contents = {
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
        contents.SnapshotCopyGrants = deserializeAws_querySnapshotCopyGrantList(smithy_client_1.getArrayIfSingleItem(output["SnapshotCopyGrants"]["SnapshotCopyGrant"]), context);
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotCopyGrantQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotErrorMessage = (output, context) => {
    let contents = {
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
const deserializeAws_querySnapshotIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_querySnapshotMessage = (output, context) => {
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
const deserializeAws_querySnapshotSchedule = (output, context) => {
    let contents = {
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
        contents.ScheduleDefinitions = deserializeAws_queryScheduleDefinitionList(smithy_client_1.getArrayIfSingleItem(output["ScheduleDefinitions"]["ScheduleDefinition"]), context);
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    if (output.NextInvocations === "") {
        contents.NextInvocations = [];
    }
    if (output["NextInvocations"] !== undefined && output["NextInvocations"]["SnapshotTime"] !== undefined) {
        contents.NextInvocations = deserializeAws_queryScheduledSnapshotTimeList(smithy_client_1.getArrayIfSingleItem(output["NextInvocations"]["SnapshotTime"]), context);
    }
    if (output["AssociatedClusterCount"] !== undefined) {
        contents.AssociatedClusterCount = parseInt(output["AssociatedClusterCount"]);
    }
    if (output.AssociatedClusters === "") {
        contents.AssociatedClusters = [];
    }
    if (output["AssociatedClusters"] !== undefined &&
        output["AssociatedClusters"]["ClusterAssociatedToSchedule"] !== undefined) {
        contents.AssociatedClusters = deserializeAws_queryAssociatedClusterList(smithy_client_1.getArrayIfSingleItem(output["AssociatedClusters"]["ClusterAssociatedToSchedule"]), context);
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySnapshotSchedule(entry, context);
    });
};
const deserializeAws_querySnapshotScheduleNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleQuotaExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySnapshotScheduleUpdateInProgressFault = (output, context) => {
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
const deserializeAws_querySubscriptionEventIdNotFoundFault = (output, context) => {
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
const deserializeAws_querySubscriptionSeverityNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_querySupportedOperation = (output, context) => {
    let contents = {
        OperationName: undefined,
    };
    if (output["OperationName"] !== undefined) {
        contents.OperationName = output["OperationName"];
    }
    return contents;
};
const deserializeAws_querySupportedOperationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySupportedOperation(entry, context);
    });
};
const deserializeAws_querySupportedPlatform = (output, context) => {
    let contents = {
        Name: undefined,
    };
    if (output["Name"] !== undefined) {
        contents.Name = output["Name"];
    }
    return contents;
};
const deserializeAws_querySupportedPlatformsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_querySupportedPlatform(entry, context);
    });
};
const deserializeAws_queryTableLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTableRestoreNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryTableRestoreStatus = (output, context) => {
    let contents = {
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
const deserializeAws_queryTableRestoreStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTableRestoreStatus(entry, context);
    });
};
const deserializeAws_queryTableRestoreStatusMessage = (output, context) => {
    let contents = {
        TableRestoreStatusDetails: undefined,
        Marker: undefined,
    };
    if (output.TableRestoreStatusDetails === "") {
        contents.TableRestoreStatusDetails = [];
    }
    if (output["TableRestoreStatusDetails"] !== undefined &&
        output["TableRestoreStatusDetails"]["TableRestoreStatus"] !== undefined) {
        contents.TableRestoreStatusDetails = deserializeAws_queryTableRestoreStatusList(smithy_client_1.getArrayIfSingleItem(output["TableRestoreStatusDetails"]["TableRestoreStatus"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
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
const deserializeAws_queryTaggedResource = (output, context) => {
    let contents = {
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
const deserializeAws_queryTaggedResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryTaggedResource(entry, context);
    });
};
const deserializeAws_queryTaggedResourceListMessage = (output, context) => {
    let contents = {
        TaggedResources: undefined,
        Marker: undefined,
    };
    if (output.TaggedResources === "") {
        contents.TaggedResources = [];
    }
    if (output["TaggedResources"] !== undefined && output["TaggedResources"]["TaggedResource"] !== undefined) {
        contents.TaggedResources = deserializeAws_queryTaggedResourceList(smithy_client_1.getArrayIfSingleItem(output["TaggedResources"]["TaggedResource"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryTagLimitExceededFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
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
const deserializeAws_queryTrackList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryMaintenanceTrack(entry, context);
    });
};
const deserializeAws_queryTrackListMessage = (output, context) => {
    let contents = {
        MaintenanceTracks: undefined,
        Marker: undefined,
    };
    if (output.MaintenanceTracks === "") {
        contents.MaintenanceTracks = [];
    }
    if (output["MaintenanceTracks"] !== undefined && output["MaintenanceTracks"]["MaintenanceTrack"] !== undefined) {
        contents.MaintenanceTracks = deserializeAws_queryTrackList(smithy_client_1.getArrayIfSingleItem(output["MaintenanceTracks"]["MaintenanceTrack"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryUnauthorizedOperation = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnauthorizedPartnerIntegrationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnknownSnapshotCopyRegionFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedOperationFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUnsupportedOptionFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUpdateTarget = (output, context) => {
    let contents = {
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
        contents.SupportedOperations = deserializeAws_querySupportedOperationList(smithy_client_1.getArrayIfSingleItem(output["SupportedOperations"]["SupportedOperation"]), context);
    }
    return contents;
};
const deserializeAws_queryUsageLimit = (output, context) => {
    let contents = {
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
        contents.Tags = deserializeAws_queryTagList(smithy_client_1.getArrayIfSingleItem(output["Tags"]["Tag"]), context);
    }
    return contents;
};
const deserializeAws_queryUsageLimitAlreadyExistsFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUsageLimitList = (output, context) => {
    let contents = {
        UsageLimits: undefined,
        Marker: undefined,
    };
    if (output.UsageLimits === "") {
        contents.UsageLimits = [];
    }
    if (output["UsageLimits"] !== undefined && output["UsageLimits"]["member"] !== undefined) {
        contents.UsageLimits = deserializeAws_queryUsageLimits(smithy_client_1.getArrayIfSingleItem(output["UsageLimits"]["member"]), context);
    }
    if (output["Marker"] !== undefined) {
        contents.Marker = output["Marker"];
    }
    return contents;
};
const deserializeAws_queryUsageLimitNotFoundFault = (output, context) => {
    let contents = {
        message: undefined,
    };
    if (output["message"] !== undefined) {
        contents.message = output["message"];
    }
    return contents;
};
const deserializeAws_queryUsageLimits = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryUsageLimit(entry, context);
    });
};
const deserializeAws_queryVpcEndpoint = (output, context) => {
    let contents = {
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
        contents.NetworkInterfaces = deserializeAws_queryNetworkInterfaceList(smithy_client_1.getArrayIfSingleItem(output["NetworkInterfaces"]["NetworkInterface"]), context);
    }
    return contents;
};
const deserializeAws_queryVpcEndpointsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_queryVpcEndpoint(entry, context);
    });
};
const deserializeAws_queryVpcIdentifierList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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