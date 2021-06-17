"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1DescribeThemePermissionsCommand = exports.serializeAws_restJson1DescribeThemeAliasCommand = exports.serializeAws_restJson1DescribeThemeCommand = exports.serializeAws_restJson1DescribeTemplatePermissionsCommand = exports.serializeAws_restJson1DescribeTemplateAliasCommand = exports.serializeAws_restJson1DescribeTemplateCommand = exports.serializeAws_restJson1DescribeNamespaceCommand = exports.serializeAws_restJson1DescribeIngestionCommand = exports.serializeAws_restJson1DescribeIAMPolicyAssignmentCommand = exports.serializeAws_restJson1DescribeGroupCommand = exports.serializeAws_restJson1DescribeDataSourcePermissionsCommand = exports.serializeAws_restJson1DescribeDataSourceCommand = exports.serializeAws_restJson1DescribeDataSetPermissionsCommand = exports.serializeAws_restJson1DescribeDataSetCommand = exports.serializeAws_restJson1DescribeDashboardPermissionsCommand = exports.serializeAws_restJson1DescribeDashboardCommand = exports.serializeAws_restJson1DescribeAnalysisPermissionsCommand = exports.serializeAws_restJson1DescribeAnalysisCommand = exports.serializeAws_restJson1DescribeAccountSettingsCommand = exports.serializeAws_restJson1DescribeAccountCustomizationCommand = exports.serializeAws_restJson1DeleteUserByPrincipalIdCommand = exports.serializeAws_restJson1DeleteUserCommand = exports.serializeAws_restJson1DeleteThemeAliasCommand = exports.serializeAws_restJson1DeleteThemeCommand = exports.serializeAws_restJson1DeleteTemplateAliasCommand = exports.serializeAws_restJson1DeleteTemplateCommand = exports.serializeAws_restJson1DeleteNamespaceCommand = exports.serializeAws_restJson1DeleteIAMPolicyAssignmentCommand = exports.serializeAws_restJson1DeleteGroupMembershipCommand = exports.serializeAws_restJson1DeleteGroupCommand = exports.serializeAws_restJson1DeleteDataSourceCommand = exports.serializeAws_restJson1DeleteDataSetCommand = exports.serializeAws_restJson1DeleteDashboardCommand = exports.serializeAws_restJson1DeleteAnalysisCommand = exports.serializeAws_restJson1DeleteAccountCustomizationCommand = exports.serializeAws_restJson1CreateThemeAliasCommand = exports.serializeAws_restJson1CreateThemeCommand = exports.serializeAws_restJson1CreateTemplateAliasCommand = exports.serializeAws_restJson1CreateTemplateCommand = exports.serializeAws_restJson1CreateNamespaceCommand = exports.serializeAws_restJson1CreateIngestionCommand = exports.serializeAws_restJson1CreateIAMPolicyAssignmentCommand = exports.serializeAws_restJson1CreateGroupMembershipCommand = exports.serializeAws_restJson1CreateGroupCommand = exports.serializeAws_restJson1CreateDataSourceCommand = exports.serializeAws_restJson1CreateDataSetCommand = exports.serializeAws_restJson1CreateDashboardCommand = exports.serializeAws_restJson1CreateAnalysisCommand = exports.serializeAws_restJson1CreateAccountCustomizationCommand = exports.serializeAws_restJson1CancelIngestionCommand = void 0;
exports.deserializeAws_restJson1CancelIngestionCommand = exports.serializeAws_restJson1UpdateUserCommand = exports.serializeAws_restJson1UpdateThemePermissionsCommand = exports.serializeAws_restJson1UpdateThemeAliasCommand = exports.serializeAws_restJson1UpdateThemeCommand = exports.serializeAws_restJson1UpdateTemplatePermissionsCommand = exports.serializeAws_restJson1UpdateTemplateAliasCommand = exports.serializeAws_restJson1UpdateTemplateCommand = exports.serializeAws_restJson1UpdateIAMPolicyAssignmentCommand = exports.serializeAws_restJson1UpdateGroupCommand = exports.serializeAws_restJson1UpdateDataSourcePermissionsCommand = exports.serializeAws_restJson1UpdateDataSourceCommand = exports.serializeAws_restJson1UpdateDataSetPermissionsCommand = exports.serializeAws_restJson1UpdateDataSetCommand = exports.serializeAws_restJson1UpdateDashboardPublishedVersionCommand = exports.serializeAws_restJson1UpdateDashboardPermissionsCommand = exports.serializeAws_restJson1UpdateDashboardCommand = exports.serializeAws_restJson1UpdateAnalysisPermissionsCommand = exports.serializeAws_restJson1UpdateAnalysisCommand = exports.serializeAws_restJson1UpdateAccountSettingsCommand = exports.serializeAws_restJson1UpdateAccountCustomizationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1SearchDashboardsCommand = exports.serializeAws_restJson1SearchAnalysesCommand = exports.serializeAws_restJson1RestoreAnalysisCommand = exports.serializeAws_restJson1RegisterUserCommand = exports.serializeAws_restJson1ListUsersCommand = exports.serializeAws_restJson1ListUserGroupsCommand = exports.serializeAws_restJson1ListThemeVersionsCommand = exports.serializeAws_restJson1ListThemesCommand = exports.serializeAws_restJson1ListThemeAliasesCommand = exports.serializeAws_restJson1ListTemplateVersionsCommand = exports.serializeAws_restJson1ListTemplatesCommand = exports.serializeAws_restJson1ListTemplateAliasesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListNamespacesCommand = exports.serializeAws_restJson1ListIngestionsCommand = exports.serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = exports.serializeAws_restJson1ListIAMPolicyAssignmentsCommand = exports.serializeAws_restJson1ListGroupsCommand = exports.serializeAws_restJson1ListGroupMembershipsCommand = exports.serializeAws_restJson1ListDataSourcesCommand = exports.serializeAws_restJson1ListDataSetsCommand = exports.serializeAws_restJson1ListDashboardVersionsCommand = exports.serializeAws_restJson1ListDashboardsCommand = exports.serializeAws_restJson1ListAnalysesCommand = exports.serializeAws_restJson1GetSessionEmbedUrlCommand = exports.serializeAws_restJson1GetDashboardEmbedUrlCommand = exports.serializeAws_restJson1DescribeUserCommand = void 0;
exports.deserializeAws_restJson1DescribeUserCommand = exports.deserializeAws_restJson1DescribeThemePermissionsCommand = exports.deserializeAws_restJson1DescribeThemeAliasCommand = exports.deserializeAws_restJson1DescribeThemeCommand = exports.deserializeAws_restJson1DescribeTemplatePermissionsCommand = exports.deserializeAws_restJson1DescribeTemplateAliasCommand = exports.deserializeAws_restJson1DescribeTemplateCommand = exports.deserializeAws_restJson1DescribeNamespaceCommand = exports.deserializeAws_restJson1DescribeIngestionCommand = exports.deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand = exports.deserializeAws_restJson1DescribeGroupCommand = exports.deserializeAws_restJson1DescribeDataSourcePermissionsCommand = exports.deserializeAws_restJson1DescribeDataSourceCommand = exports.deserializeAws_restJson1DescribeDataSetPermissionsCommand = exports.deserializeAws_restJson1DescribeDataSetCommand = exports.deserializeAws_restJson1DescribeDashboardPermissionsCommand = exports.deserializeAws_restJson1DescribeDashboardCommand = exports.deserializeAws_restJson1DescribeAnalysisPermissionsCommand = exports.deserializeAws_restJson1DescribeAnalysisCommand = exports.deserializeAws_restJson1DescribeAccountSettingsCommand = exports.deserializeAws_restJson1DescribeAccountCustomizationCommand = exports.deserializeAws_restJson1DeleteUserByPrincipalIdCommand = exports.deserializeAws_restJson1DeleteUserCommand = exports.deserializeAws_restJson1DeleteThemeAliasCommand = exports.deserializeAws_restJson1DeleteThemeCommand = exports.deserializeAws_restJson1DeleteTemplateAliasCommand = exports.deserializeAws_restJson1DeleteTemplateCommand = exports.deserializeAws_restJson1DeleteNamespaceCommand = exports.deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand = exports.deserializeAws_restJson1DeleteGroupMembershipCommand = exports.deserializeAws_restJson1DeleteGroupCommand = exports.deserializeAws_restJson1DeleteDataSourceCommand = exports.deserializeAws_restJson1DeleteDataSetCommand = exports.deserializeAws_restJson1DeleteDashboardCommand = exports.deserializeAws_restJson1DeleteAnalysisCommand = exports.deserializeAws_restJson1DeleteAccountCustomizationCommand = exports.deserializeAws_restJson1CreateThemeAliasCommand = exports.deserializeAws_restJson1CreateThemeCommand = exports.deserializeAws_restJson1CreateTemplateAliasCommand = exports.deserializeAws_restJson1CreateTemplateCommand = exports.deserializeAws_restJson1CreateNamespaceCommand = exports.deserializeAws_restJson1CreateIngestionCommand = exports.deserializeAws_restJson1CreateIAMPolicyAssignmentCommand = exports.deserializeAws_restJson1CreateGroupMembershipCommand = exports.deserializeAws_restJson1CreateGroupCommand = exports.deserializeAws_restJson1CreateDataSourceCommand = exports.deserializeAws_restJson1CreateDataSetCommand = exports.deserializeAws_restJson1CreateDashboardCommand = exports.deserializeAws_restJson1CreateAnalysisCommand = exports.deserializeAws_restJson1CreateAccountCustomizationCommand = void 0;
exports.deserializeAws_restJson1UpdateUserCommand = exports.deserializeAws_restJson1UpdateThemePermissionsCommand = exports.deserializeAws_restJson1UpdateThemeAliasCommand = exports.deserializeAws_restJson1UpdateThemeCommand = exports.deserializeAws_restJson1UpdateTemplatePermissionsCommand = exports.deserializeAws_restJson1UpdateTemplateAliasCommand = exports.deserializeAws_restJson1UpdateTemplateCommand = exports.deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand = exports.deserializeAws_restJson1UpdateGroupCommand = exports.deserializeAws_restJson1UpdateDataSourcePermissionsCommand = exports.deserializeAws_restJson1UpdateDataSourceCommand = exports.deserializeAws_restJson1UpdateDataSetPermissionsCommand = exports.deserializeAws_restJson1UpdateDataSetCommand = exports.deserializeAws_restJson1UpdateDashboardPublishedVersionCommand = exports.deserializeAws_restJson1UpdateDashboardPermissionsCommand = exports.deserializeAws_restJson1UpdateDashboardCommand = exports.deserializeAws_restJson1UpdateAnalysisPermissionsCommand = exports.deserializeAws_restJson1UpdateAnalysisCommand = exports.deserializeAws_restJson1UpdateAccountSettingsCommand = exports.deserializeAws_restJson1UpdateAccountCustomizationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1SearchDashboardsCommand = exports.deserializeAws_restJson1SearchAnalysesCommand = exports.deserializeAws_restJson1RestoreAnalysisCommand = exports.deserializeAws_restJson1RegisterUserCommand = exports.deserializeAws_restJson1ListUsersCommand = exports.deserializeAws_restJson1ListUserGroupsCommand = exports.deserializeAws_restJson1ListThemeVersionsCommand = exports.deserializeAws_restJson1ListThemesCommand = exports.deserializeAws_restJson1ListThemeAliasesCommand = exports.deserializeAws_restJson1ListTemplateVersionsCommand = exports.deserializeAws_restJson1ListTemplatesCommand = exports.deserializeAws_restJson1ListTemplateAliasesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListNamespacesCommand = exports.deserializeAws_restJson1ListIngestionsCommand = exports.deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = exports.deserializeAws_restJson1ListIAMPolicyAssignmentsCommand = exports.deserializeAws_restJson1ListGroupsCommand = exports.deserializeAws_restJson1ListGroupMembershipsCommand = exports.deserializeAws_restJson1ListDataSourcesCommand = exports.deserializeAws_restJson1ListDataSetsCommand = exports.deserializeAws_restJson1ListDashboardVersionsCommand = exports.deserializeAws_restJson1ListDashboardsCommand = exports.deserializeAws_restJson1ListAnalysesCommand = exports.deserializeAws_restJson1GetSessionEmbedUrlCommand = exports.deserializeAws_restJson1GetDashboardEmbedUrlCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelIngestionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.IngestionId !== undefined) {
        const labelValue = input.IngestionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IngestionId.");
        }
        resolvedPath = resolvedPath.replace("{IngestionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IngestionId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CancelIngestionCommand = serializeAws_restJson1CancelIngestionCommand;
const serializeAws_restJson1CreateAccountCustomizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/customizations";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.Namespace !== undefined && { namespace: input.Namespace }),
    };
    let body;
    body = JSON.stringify({
        ...(input.AccountCustomization !== undefined &&
            input.AccountCustomization !== null && {
            AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1CreateAccountCustomizationCommand = serializeAws_restJson1CreateAccountCustomizationCommand;
const serializeAws_restJson1CreateAnalysisCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateAnalysisCommand = serializeAws_restJson1CreateAnalysisCommand;
const serializeAws_restJson1CreateDashboardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DashboardPublishOptions !== undefined &&
            input.DashboardPublishOptions !== null && {
            DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDashboardCommand = serializeAws_restJson1CreateDashboardCommand;
const serializeAws_restJson1CreateDataSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ColumnGroups !== undefined &&
            input.ColumnGroups !== null && {
            ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
        }),
        ...(input.ColumnLevelPermissionRules !== undefined &&
            input.ColumnLevelPermissionRules !== null && {
            ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(input.ColumnLevelPermissionRules, context),
        }),
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.FieldFolders !== undefined &&
            input.FieldFolders !== null && {
            FieldFolders: serializeAws_restJson1FieldFolderMap(input.FieldFolders, context),
        }),
        ...(input.ImportMode !== undefined && input.ImportMode !== null && { ImportMode: input.ImportMode }),
        ...(input.LogicalTableMap !== undefined &&
            input.LogicalTableMap !== null && {
            LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.PhysicalTableMap !== undefined &&
            input.PhysicalTableMap !== null && {
            PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
        }),
        ...(input.RowLevelPermissionDataSet !== undefined &&
            input.RowLevelPermissionDataSet !== null && {
            RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(input.RowLevelPermissionDataSet, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDataSetCommand = serializeAws_restJson1CreateDataSetCommand;
const serializeAws_restJson1CreateDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Credentials !== undefined &&
            input.Credentials !== null && {
            Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
        }),
        ...(input.DataSourceId !== undefined && input.DataSourceId !== null && { DataSourceId: input.DataSourceId }),
        ...(input.DataSourceParameters !== undefined &&
            input.DataSourceParameters !== null && {
            DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.SslProperties !== undefined &&
            input.SslProperties !== null && {
            SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.VpcConnectionProperties !== undefined &&
            input.VpcConnectionProperties !== null && {
            VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateDataSourceCommand = serializeAws_restJson1CreateDataSourceCommand;
const serializeAws_restJson1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateGroupCommand = serializeAws_restJson1CreateGroupCommand;
const serializeAws_restJson1CreateGroupMembershipCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
    if (input.MemberName !== undefined) {
        const labelValue = input.MemberName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MemberName.");
        }
        resolvedPath = resolvedPath.replace("{MemberName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MemberName.");
    }
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateGroupMembershipCommand = serializeAws_restJson1CreateGroupMembershipCommand;
const serializeAws_restJson1CreateIAMPolicyAssignmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AssignmentName !== undefined &&
            input.AssignmentName !== null && { AssignmentName: input.AssignmentName }),
        ...(input.AssignmentStatus !== undefined &&
            input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
        ...(input.Identities !== undefined &&
            input.Identities !== null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
        ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateIAMPolicyAssignmentCommand = serializeAws_restJson1CreateIAMPolicyAssignmentCommand;
const serializeAws_restJson1CreateIngestionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.IngestionId !== undefined) {
        const labelValue = input.IngestionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IngestionId.");
        }
        resolvedPath = resolvedPath.replace("{IngestionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IngestionId.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateIngestionCommand = serializeAws_restJson1CreateIngestionCommand;
const serializeAws_restJson1CreateNamespaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.IdentityStore !== undefined && input.IdentityStore !== null && { IdentityStore: input.IdentityStore }),
        ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateNamespaceCommand = serializeAws_restJson1CreateNamespaceCommand;
const serializeAws_restJson1CreateTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTemplateCommand = serializeAws_restJson1CreateTemplateCommand;
const serializeAws_restJson1CreateTemplateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TemplateVersionNumber !== undefined &&
            input.TemplateVersionNumber !== null && { TemplateVersionNumber: input.TemplateVersionNumber }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateTemplateAliasCommand = serializeAws_restJson1CreateTemplateAliasCommand;
const serializeAws_restJson1CreateThemeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BaseThemeId !== undefined && input.BaseThemeId !== null && { BaseThemeId: input.BaseThemeId }),
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Permissions !== undefined &&
            input.Permissions !== null && {
            Permissions: serializeAws_restJson1ResourcePermissionList(input.Permissions, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateThemeCommand = serializeAws_restJson1CreateThemeCommand;
const serializeAws_restJson1CreateThemeAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ThemeVersionNumber !== undefined &&
            input.ThemeVersionNumber !== null && { ThemeVersionNumber: input.ThemeVersionNumber }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1CreateThemeAliasCommand = serializeAws_restJson1CreateThemeAliasCommand;
const serializeAws_restJson1DeleteAccountCustomizationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/customizations";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.Namespace !== undefined && { namespace: input.Namespace }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteAccountCustomizationCommand = serializeAws_restJson1DeleteAccountCustomizationCommand;
const serializeAws_restJson1DeleteAnalysisCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    const query = {
        ...(input.RecoveryWindowInDays !== undefined && {
            "recovery-window-in-days": input.RecoveryWindowInDays.toString(),
        }),
        ...(input.ForceDeleteWithoutRecovery !== undefined && {
            "force-delete-without-recovery": input.ForceDeleteWithoutRecovery.toString(),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteAnalysisCommand = serializeAws_restJson1DeleteAnalysisCommand;
const serializeAws_restJson1DeleteDashboardCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteDashboardCommand = serializeAws_restJson1DeleteDashboardCommand;
const serializeAws_restJson1DeleteDataSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteDataSetCommand = serializeAws_restJson1DeleteDataSetCommand;
const serializeAws_restJson1DeleteDataSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSourceId !== undefined) {
        const labelValue = input.DataSourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSourceId.");
        }
        resolvedPath = resolvedPath.replace("{DataSourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSourceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteDataSourceCommand = serializeAws_restJson1DeleteDataSourceCommand;
const serializeAws_restJson1DeleteGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGroupCommand = serializeAws_restJson1DeleteGroupCommand;
const serializeAws_restJson1DeleteGroupMembershipCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}";
    if (input.MemberName !== undefined) {
        const labelValue = input.MemberName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MemberName.");
        }
        resolvedPath = resolvedPath.replace("{MemberName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MemberName.");
    }
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteGroupMembershipCommand = serializeAws_restJson1DeleteGroupMembershipCommand;
const serializeAws_restJson1DeleteIAMPolicyAssignmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AssignmentName !== undefined) {
        const labelValue = input.AssignmentName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssignmentName.");
        }
        resolvedPath = resolvedPath.replace("{AssignmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssignmentName.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteIAMPolicyAssignmentCommand = serializeAws_restJson1DeleteIAMPolicyAssignmentCommand;
const serializeAws_restJson1DeleteNamespaceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteNamespaceCommand = serializeAws_restJson1DeleteNamespaceCommand;
const serializeAws_restJson1DeleteTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteTemplateCommand = serializeAws_restJson1DeleteTemplateCommand;
const serializeAws_restJson1DeleteTemplateAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteTemplateAliasCommand = serializeAws_restJson1DeleteTemplateAliasCommand;
const serializeAws_restJson1DeleteThemeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DeleteThemeCommand = serializeAws_restJson1DeleteThemeCommand;
const serializeAws_restJson1DeleteThemeAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteThemeAliasCommand = serializeAws_restJson1DeleteThemeAliasCommand;
const serializeAws_restJson1DeleteUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
    if (input.UserName !== undefined) {
        const labelValue = input.UserName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserName.");
        }
        resolvedPath = resolvedPath.replace("{UserName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteUserCommand = serializeAws_restJson1DeleteUserCommand;
const serializeAws_restJson1DeleteUserByPrincipalIdCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}";
    if (input.PrincipalId !== undefined) {
        const labelValue = input.PrincipalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: PrincipalId.");
        }
        resolvedPath = resolvedPath.replace("{PrincipalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: PrincipalId.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DeleteUserByPrincipalIdCommand = serializeAws_restJson1DeleteUserByPrincipalIdCommand;
const serializeAws_restJson1DescribeAccountCustomizationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/customizations";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.Namespace !== undefined && { namespace: input.Namespace }),
        ...(input.Resolved !== undefined && { resolved: input.Resolved.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeAccountCustomizationCommand = serializeAws_restJson1DescribeAccountCustomizationCommand;
const serializeAws_restJson1DescribeAccountSettingsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/settings";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAccountSettingsCommand = serializeAws_restJson1DescribeAccountSettingsCommand;
const serializeAws_restJson1DescribeAnalysisCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAnalysisCommand = serializeAws_restJson1DescribeAnalysisCommand;
const serializeAws_restJson1DescribeAnalysisPermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeAnalysisPermissionsCommand = serializeAws_restJson1DescribeAnalysisPermissionsCommand;
const serializeAws_restJson1DescribeDashboardCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
        ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeDashboardCommand = serializeAws_restJson1DescribeDashboardCommand;
const serializeAws_restJson1DescribeDashboardPermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDashboardPermissionsCommand = serializeAws_restJson1DescribeDashboardPermissionsCommand;
const serializeAws_restJson1DescribeDataSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDataSetCommand = serializeAws_restJson1DescribeDataSetCommand;
const serializeAws_restJson1DescribeDataSetPermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDataSetPermissionsCommand = serializeAws_restJson1DescribeDataSetPermissionsCommand;
const serializeAws_restJson1DescribeDataSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSourceId !== undefined) {
        const labelValue = input.DataSourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSourceId.");
        }
        resolvedPath = resolvedPath.replace("{DataSourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSourceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDataSourceCommand = serializeAws_restJson1DescribeDataSourceCommand;
const serializeAws_restJson1DescribeDataSourcePermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSourceId !== undefined) {
        const labelValue = input.DataSourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSourceId.");
        }
        resolvedPath = resolvedPath.replace("{DataSourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSourceId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeDataSourcePermissionsCommand = serializeAws_restJson1DescribeDataSourcePermissionsCommand;
const serializeAws_restJson1DescribeGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeGroupCommand = serializeAws_restJson1DescribeGroupCommand;
const serializeAws_restJson1DescribeIAMPolicyAssignmentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AssignmentName !== undefined) {
        const labelValue = input.AssignmentName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssignmentName.");
        }
        resolvedPath = resolvedPath.replace("{AssignmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssignmentName.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeIAMPolicyAssignmentCommand = serializeAws_restJson1DescribeIAMPolicyAssignmentCommand;
const serializeAws_restJson1DescribeIngestionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.IngestionId !== undefined) {
        const labelValue = input.IngestionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IngestionId.");
        }
        resolvedPath = resolvedPath.replace("{IngestionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IngestionId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeIngestionCommand = serializeAws_restJson1DescribeIngestionCommand;
const serializeAws_restJson1DescribeNamespaceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeNamespaceCommand = serializeAws_restJson1DescribeNamespaceCommand;
const serializeAws_restJson1DescribeTemplateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
        ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeTemplateCommand = serializeAws_restJson1DescribeTemplateCommand;
const serializeAws_restJson1DescribeTemplateAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeTemplateAliasCommand = serializeAws_restJson1DescribeTemplateAliasCommand;
const serializeAws_restJson1DescribeTemplatePermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeTemplatePermissionsCommand = serializeAws_restJson1DescribeTemplatePermissionsCommand;
const serializeAws_restJson1DescribeThemeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    const query = {
        ...(input.VersionNumber !== undefined && { "version-number": input.VersionNumber.toString() }),
        ...(input.AliasName !== undefined && { "alias-name": input.AliasName }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1DescribeThemeCommand = serializeAws_restJson1DescribeThemeCommand;
const serializeAws_restJson1DescribeThemeAliasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeThemeAliasCommand = serializeAws_restJson1DescribeThemeAliasCommand;
const serializeAws_restJson1DescribeThemePermissionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeThemePermissionsCommand = serializeAws_restJson1DescribeThemePermissionsCommand;
const serializeAws_restJson1DescribeUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
    if (input.UserName !== undefined) {
        const labelValue = input.UserName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserName.");
        }
        resolvedPath = resolvedPath.replace("{UserName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1DescribeUserCommand = serializeAws_restJson1DescribeUserCommand;
const serializeAws_restJson1GetDashboardEmbedUrlCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    const query = {
        ...(input.IdentityType !== undefined && { "creds-type": input.IdentityType }),
        ...(input.SessionLifetimeInMinutes !== undefined && {
            "session-lifetime": input.SessionLifetimeInMinutes.toString(),
        }),
        ...(input.UndoRedoDisabled !== undefined && { "undo-redo-disabled": input.UndoRedoDisabled.toString() }),
        ...(input.ResetDisabled !== undefined && { "reset-disabled": input.ResetDisabled.toString() }),
        ...(input.StatePersistenceEnabled !== undefined && {
            "state-persistence-enabled": input.StatePersistenceEnabled.toString(),
        }),
        ...(input.UserArn !== undefined && { "user-arn": input.UserArn }),
        ...(input.Namespace !== undefined && { namespace: input.Namespace }),
        ...(input.AdditionalDashboardIds !== undefined && {
            "additional-dashboard-ids": (input.AdditionalDashboardIds || []).map((_entry) => _entry),
        }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetDashboardEmbedUrlCommand = serializeAws_restJson1GetDashboardEmbedUrlCommand;
const serializeAws_restJson1GetSessionEmbedUrlCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/session-embed-url";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.EntryPoint !== undefined && { "entry-point": input.EntryPoint }),
        ...(input.SessionLifetimeInMinutes !== undefined && {
            "session-lifetime": input.SessionLifetimeInMinutes.toString(),
        }),
        ...(input.UserArn !== undefined && { "user-arn": input.UserArn }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1GetSessionEmbedUrlCommand = serializeAws_restJson1GetSessionEmbedUrlCommand;
const serializeAws_restJson1ListAnalysesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/analyses";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListAnalysesCommand = serializeAws_restJson1ListAnalysesCommand;
const serializeAws_restJson1ListDashboardsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDashboardsCommand = serializeAws_restJson1ListDashboardsCommand;
const serializeAws_restJson1ListDashboardVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDashboardVersionsCommand = serializeAws_restJson1ListDashboardVersionsCommand;
const serializeAws_restJson1ListDataSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDataSetsCommand = serializeAws_restJson1ListDataSetsCommand;
const serializeAws_restJson1ListDataSourcesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListDataSourcesCommand = serializeAws_restJson1ListDataSourcesCommand;
const serializeAws_restJson1ListGroupMembershipsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members";
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListGroupMembershipsCommand = serializeAws_restJson1ListGroupMembershipsCommand;
const serializeAws_restJson1ListGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListGroupsCommand = serializeAws_restJson1ListGroupsCommand;
const serializeAws_restJson1ListIAMPolicyAssignmentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    body = JSON.stringify({
        ...(input.AssignmentStatus !== undefined &&
            input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListIAMPolicyAssignmentsCommand = serializeAws_restJson1ListIAMPolicyAssignmentsCommand;
const serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.UserName !== undefined) {
        const labelValue = input.UserName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserName.");
        }
        resolvedPath = resolvedPath.replace("{UserName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserName.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = serializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand;
const serializeAws_restJson1ListIngestionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListIngestionsCommand = serializeAws_restJson1ListIngestionsCommand;
const serializeAws_restJson1ListNamespacesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListNamespacesCommand = serializeAws_restJson1ListNamespacesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/resources/{ResourceArn}/tags";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ListTemplateAliasesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTemplateAliasesCommand = serializeAws_restJson1ListTemplateAliasesCommand;
const serializeAws_restJson1ListTemplatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTemplatesCommand = serializeAws_restJson1ListTemplatesCommand;
const serializeAws_restJson1ListTemplateVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/versions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListTemplateVersionsCommand = serializeAws_restJson1ListTemplateVersionsCommand;
const serializeAws_restJson1ListThemeAliasesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-result": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListThemeAliasesCommand = serializeAws_restJson1ListThemeAliasesCommand;
const serializeAws_restJson1ListThemesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
        ...(input.Type !== undefined && { type: input.Type }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListThemesCommand = serializeAws_restJson1ListThemesCommand;
const serializeAws_restJson1ListThemeVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/versions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListThemeVersionsCommand = serializeAws_restJson1ListThemeVersionsCommand;
const serializeAws_restJson1ListUserGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups";
    if (input.UserName !== undefined) {
        const labelValue = input.UserName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserName.");
        }
        resolvedPath = resolvedPath.replace("{UserName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListUserGroupsCommand = serializeAws_restJson1ListUserGroupsCommand;
const serializeAws_restJson1ListUsersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    const query = {
        ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
        ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "GET",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1ListUsersCommand = serializeAws_restJson1ListUsersCommand;
const serializeAws_restJson1RegisterUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CustomFederationProviderUrl !== undefined &&
            input.CustomFederationProviderUrl !== null && { CustomFederationProviderUrl: input.CustomFederationProviderUrl }),
        ...(input.CustomPermissionsName !== undefined &&
            input.CustomPermissionsName !== null && { CustomPermissionsName: input.CustomPermissionsName }),
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.ExternalLoginFederationProviderType !== undefined &&
            input.ExternalLoginFederationProviderType !== null && {
            ExternalLoginFederationProviderType: input.ExternalLoginFederationProviderType,
        }),
        ...(input.ExternalLoginId !== undefined &&
            input.ExternalLoginId !== null && { ExternalLoginId: input.ExternalLoginId }),
        ...(input.IamArn !== undefined && input.IamArn !== null && { IamArn: input.IamArn }),
        ...(input.IdentityType !== undefined && input.IdentityType !== null && { IdentityType: input.IdentityType }),
        ...(input.SessionName !== undefined && input.SessionName !== null && { SessionName: input.SessionName }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
        ...(input.UserRole !== undefined && input.UserRole !== null && { UserRole: input.UserRole }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RegisterUserCommand = serializeAws_restJson1RegisterUserCommand;
const serializeAws_restJson1RestoreAnalysisCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/restore/analyses/{AnalysisId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1RestoreAnalysisCommand = serializeAws_restJson1RestoreAnalysisCommand;
const serializeAws_restJson1SearchAnalysesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/search/analyses";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1AnalysisSearchFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchAnalysesCommand = serializeAws_restJson1SearchAnalysesCommand;
const serializeAws_restJson1SearchDashboardsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/search/dashboards";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Filters !== undefined &&
            input.Filters !== null && { Filters: serializeAws_restJson1DashboardSearchFilterList(input.Filters, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1SearchDashboardsCommand = serializeAws_restJson1SearchDashboardsCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/resources/{ResourceArn}/tags";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/resources/{ResourceArn}/tags";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { keys: (input.TagKeys || []).map((_entry) => _entry) }),
    };
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "DELETE",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateAccountCustomizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/customizations";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    const query = {
        ...(input.Namespace !== undefined && { namespace: input.Namespace }),
    };
    let body;
    body = JSON.stringify({
        ...(input.AccountCustomization !== undefined &&
            input.AccountCustomization !== null && {
            AccountCustomization: serializeAws_restJson1AccountCustomization(input.AccountCustomization, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1UpdateAccountCustomizationCommand = serializeAws_restJson1UpdateAccountCustomizationCommand;
const serializeAws_restJson1UpdateAccountSettingsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/settings";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DefaultNamespace !== undefined &&
            input.DefaultNamespace !== null && { DefaultNamespace: input.DefaultNamespace }),
        ...(input.NotificationEmail !== undefined &&
            input.NotificationEmail !== null && { NotificationEmail: input.NotificationEmail }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAccountSettingsCommand = serializeAws_restJson1UpdateAccountSettingsCommand;
const serializeAws_restJson1UpdateAnalysisCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1AnalysisSourceEntity(input.SourceEntity, context),
        }),
        ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAnalysisCommand = serializeAws_restJson1UpdateAnalysisCommand;
const serializeAws_restJson1UpdateAnalysisPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/analyses/{AnalysisId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AnalysisId !== undefined) {
        const labelValue = input.AnalysisId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AnalysisId.");
        }
        resolvedPath = resolvedPath.replace("{AnalysisId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AnalysisId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateAnalysisPermissionsCommand = serializeAws_restJson1UpdateAnalysisPermissionsCommand;
const serializeAws_restJson1UpdateDashboardCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DashboardPublishOptions !== undefined &&
            input.DashboardPublishOptions !== null && {
            DashboardPublishOptions: serializeAws_restJson1DashboardPublishOptions(input.DashboardPublishOptions, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Parameters !== undefined &&
            input.Parameters !== null && { Parameters: serializeAws_restJson1_Parameters(input.Parameters, context) }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1DashboardSourceEntity(input.SourceEntity, context),
        }),
        ...(input.ThemeArn !== undefined && input.ThemeArn !== null && { ThemeArn: input.ThemeArn }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDashboardCommand = serializeAws_restJson1UpdateDashboardCommand;
const serializeAws_restJson1UpdateDashboardPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDashboardPermissionsCommand = serializeAws_restJson1UpdateDashboardPermissionsCommand;
const serializeAws_restJson1UpdateDashboardPublishedVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DashboardId !== undefined) {
        const labelValue = input.DashboardId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DashboardId.");
        }
        resolvedPath = resolvedPath.replace("{DashboardId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DashboardId.");
    }
    if (input.VersionNumber !== undefined) {
        const labelValue = input.VersionNumber.toString();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionNumber.");
        }
        resolvedPath = resolvedPath.replace("{VersionNumber}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionNumber.");
    }
    let body;
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDashboardPublishedVersionCommand = serializeAws_restJson1UpdateDashboardPublishedVersionCommand;
const serializeAws_restJson1UpdateDataSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ColumnGroups !== undefined &&
            input.ColumnGroups !== null && {
            ColumnGroups: serializeAws_restJson1ColumnGroupList(input.ColumnGroups, context),
        }),
        ...(input.ColumnLevelPermissionRules !== undefined &&
            input.ColumnLevelPermissionRules !== null && {
            ColumnLevelPermissionRules: serializeAws_restJson1ColumnLevelPermissionRuleList(input.ColumnLevelPermissionRules, context),
        }),
        ...(input.FieldFolders !== undefined &&
            input.FieldFolders !== null && {
            FieldFolders: serializeAws_restJson1FieldFolderMap(input.FieldFolders, context),
        }),
        ...(input.ImportMode !== undefined && input.ImportMode !== null && { ImportMode: input.ImportMode }),
        ...(input.LogicalTableMap !== undefined &&
            input.LogicalTableMap !== null && {
            LogicalTableMap: serializeAws_restJson1LogicalTableMap(input.LogicalTableMap, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PhysicalTableMap !== undefined &&
            input.PhysicalTableMap !== null && {
            PhysicalTableMap: serializeAws_restJson1PhysicalTableMap(input.PhysicalTableMap, context),
        }),
        ...(input.RowLevelPermissionDataSet !== undefined &&
            input.RowLevelPermissionDataSet !== null && {
            RowLevelPermissionDataSet: serializeAws_restJson1RowLevelPermissionDataSet(input.RowLevelPermissionDataSet, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDataSetCommand = serializeAws_restJson1UpdateDataSetCommand;
const serializeAws_restJson1UpdateDataSetPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDataSetPermissionsCommand = serializeAws_restJson1UpdateDataSetPermissionsCommand;
const serializeAws_restJson1UpdateDataSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSourceId !== undefined) {
        const labelValue = input.DataSourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSourceId.");
        }
        resolvedPath = resolvedPath.replace("{DataSourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSourceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Credentials !== undefined &&
            input.Credentials !== null && {
            Credentials: serializeAws_restJson1DataSourceCredentials(input.Credentials, context),
        }),
        ...(input.DataSourceParameters !== undefined &&
            input.DataSourceParameters !== null && {
            DataSourceParameters: serializeAws_restJson1DataSourceParameters(input.DataSourceParameters, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SslProperties !== undefined &&
            input.SslProperties !== null && {
            SslProperties: serializeAws_restJson1SslProperties(input.SslProperties, context),
        }),
        ...(input.VpcConnectionProperties !== undefined &&
            input.VpcConnectionProperties !== null && {
            VpcConnectionProperties: serializeAws_restJson1VpcConnectionProperties(input.VpcConnectionProperties, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDataSourceCommand = serializeAws_restJson1UpdateDataSourceCommand;
const serializeAws_restJson1UpdateDataSourcePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.DataSourceId !== undefined) {
        const labelValue = input.DataSourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSourceId.");
        }
        resolvedPath = resolvedPath.replace("{DataSourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSourceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1ResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1ResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDataSourcePermissionsCommand = serializeAws_restJson1UpdateDataSourcePermissionsCommand;
const serializeAws_restJson1UpdateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}";
    if (input.GroupName !== undefined) {
        const labelValue = input.GroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: GroupName.");
        }
        resolvedPath = resolvedPath.replace("{GroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: GroupName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateGroupCommand = serializeAws_restJson1UpdateGroupCommand;
const serializeAws_restJson1UpdateIAMPolicyAssignmentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.AssignmentName !== undefined) {
        const labelValue = input.AssignmentName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssignmentName.");
        }
        resolvedPath = resolvedPath.replace("{AssignmentName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssignmentName.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AssignmentStatus !== undefined &&
            input.AssignmentStatus !== null && { AssignmentStatus: input.AssignmentStatus }),
        ...(input.Identities !== undefined &&
            input.Identities !== null && { Identities: serializeAws_restJson1IdentityMap(input.Identities, context) }),
        ...(input.PolicyArn !== undefined && input.PolicyArn !== null && { PolicyArn: input.PolicyArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateIAMPolicyAssignmentCommand = serializeAws_restJson1UpdateIAMPolicyAssignmentCommand;
const serializeAws_restJson1UpdateTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SourceEntity !== undefined &&
            input.SourceEntity !== null && {
            SourceEntity: serializeAws_restJson1TemplateSourceEntity(input.SourceEntity, context),
        }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTemplateCommand = serializeAws_restJson1UpdateTemplateCommand;
const serializeAws_restJson1UpdateTemplateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TemplateVersionNumber !== undefined &&
            input.TemplateVersionNumber !== null && { TemplateVersionNumber: input.TemplateVersionNumber }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTemplateAliasCommand = serializeAws_restJson1UpdateTemplateAliasCommand;
const serializeAws_restJson1UpdateTemplatePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/templates/{TemplateId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.TemplateId !== undefined) {
        const labelValue = input.TemplateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: TemplateId.");
        }
        resolvedPath = resolvedPath.replace("{TemplateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: TemplateId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateTemplatePermissionsCommand = serializeAws_restJson1UpdateTemplatePermissionsCommand;
const serializeAws_restJson1UpdateThemeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BaseThemeId !== undefined && input.BaseThemeId !== null && { BaseThemeId: input.BaseThemeId }),
        ...(input.Configuration !== undefined &&
            input.Configuration !== null && {
            Configuration: serializeAws_restJson1ThemeConfiguration(input.Configuration, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.VersionDescription !== undefined &&
            input.VersionDescription !== null && { VersionDescription: input.VersionDescription }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateThemeCommand = serializeAws_restJson1UpdateThemeCommand;
const serializeAws_restJson1UpdateThemeAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/aliases/{AliasName}";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    if (input.AliasName !== undefined) {
        const labelValue = input.AliasName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AliasName.");
        }
        resolvedPath = resolvedPath.replace("{AliasName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AliasName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ThemeVersionNumber !== undefined &&
            input.ThemeVersionNumber !== null && { ThemeVersionNumber: input.ThemeVersionNumber }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateThemeAliasCommand = serializeAws_restJson1UpdateThemeAliasCommand;
const serializeAws_restJson1UpdateThemePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/themes/{ThemeId}/permissions";
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.ThemeId !== undefined) {
        const labelValue = input.ThemeId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ThemeId.");
        }
        resolvedPath = resolvedPath.replace("{ThemeId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ThemeId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GrantPermissions !== undefined &&
            input.GrantPermissions !== null && {
            GrantPermissions: serializeAws_restJson1UpdateResourcePermissionList(input.GrantPermissions, context),
        }),
        ...(input.RevokePermissions !== undefined &&
            input.RevokePermissions !== null && {
            RevokePermissions: serializeAws_restJson1UpdateResourcePermissionList(input.RevokePermissions, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateThemePermissionsCommand = serializeAws_restJson1UpdateThemePermissionsCommand;
const serializeAws_restJson1UpdateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}";
    if (input.UserName !== undefined) {
        const labelValue = input.UserName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserName.");
        }
        resolvedPath = resolvedPath.replace("{UserName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserName.");
    }
    if (input.AwsAccountId !== undefined) {
        const labelValue = input.AwsAccountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AwsAccountId.");
        }
        resolvedPath = resolvedPath.replace("{AwsAccountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AwsAccountId.");
    }
    if (input.Namespace !== undefined) {
        const labelValue = input.Namespace;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Namespace.");
        }
        resolvedPath = resolvedPath.replace("{Namespace}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Namespace.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CustomFederationProviderUrl !== undefined &&
            input.CustomFederationProviderUrl !== null && { CustomFederationProviderUrl: input.CustomFederationProviderUrl }),
        ...(input.CustomPermissionsName !== undefined &&
            input.CustomPermissionsName !== null && { CustomPermissionsName: input.CustomPermissionsName }),
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.ExternalLoginFederationProviderType !== undefined &&
            input.ExternalLoginFederationProviderType !== null && {
            ExternalLoginFederationProviderType: input.ExternalLoginFederationProviderType,
        }),
        ...(input.ExternalLoginId !== undefined &&
            input.ExternalLoginId !== null && { ExternalLoginId: input.ExternalLoginId }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.UnapplyCustomPermissions !== undefined &&
            input.UnapplyCustomPermissions !== null && { UnapplyCustomPermissions: input.UnapplyCustomPermissions }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateUserCommand = serializeAws_restJson1UpdateUserCommand;
const deserializeAws_restJson1CancelIngestionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelIngestionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        IngestionId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.IngestionId !== undefined && data.IngestionId !== null) {
        contents.IngestionId = data.IngestionId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelIngestionCommand = deserializeAws_restJson1CancelIngestionCommand;
const deserializeAws_restJson1CancelIngestionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAccountCustomizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAccountCustomizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountCustomization: undefined,
        Arn: undefined,
        AwsAccountId: undefined,
        Namespace: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
        contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
        contents.AwsAccountId = data.AwsAccountId;
    }
    if (data.Namespace !== undefined && data.Namespace !== null) {
        contents.Namespace = data.Namespace;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAccountCustomizationCommand = deserializeAws_restJson1CreateAccountCustomizationCommand;
const deserializeAws_restJson1CreateAccountCustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisId: undefined,
        Arn: undefined,
        CreationStatus: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAnalysisCommand = deserializeAws_restJson1CreateAnalysisCommand;
const deserializeAws_restJson1CreateAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        DashboardId: undefined,
        RequestId: undefined,
        Status: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDashboardCommand = deserializeAws_restJson1CreateDashboardCommand;
const deserializeAws_restJson1CreateDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DataSetId: undefined,
        IngestionArn: undefined,
        IngestionId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.IngestionArn !== undefined && data.IngestionArn !== null) {
        contents.IngestionArn = data.IngestionArn;
    }
    if (data.IngestionId !== undefined && data.IngestionId !== null) {
        contents.IngestionId = data.IngestionId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDataSetCommand = deserializeAws_restJson1CreateDataSetCommand;
const deserializeAws_restJson1CreateDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDataSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        DataSourceId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
        contents.DataSourceId = data.DataSourceId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDataSourceCommand = deserializeAws_restJson1CreateDataSourceCommand;
const deserializeAws_restJson1CreateDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupCommand = deserializeAws_restJson1CreateGroupCommand;
const deserializeAws_restJson1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateGroupMembershipCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateGroupMembershipCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupMember: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupMember !== undefined && data.GroupMember !== null) {
        contents.GroupMember = deserializeAws_restJson1GroupMember(data.GroupMember, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGroupMembershipCommand = deserializeAws_restJson1CreateGroupMembershipCommand;
const deserializeAws_restJson1CreateGroupMembershipCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateIAMPolicyAssignmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssignmentId: undefined,
        AssignmentName: undefined,
        AssignmentStatus: undefined,
        Identities: undefined,
        PolicyArn: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssignmentId !== undefined && data.AssignmentId !== null) {
        contents.AssignmentId = data.AssignmentId;
    }
    if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
        contents.AssignmentName = data.AssignmentName;
    }
    if (data.AssignmentStatus !== undefined && data.AssignmentStatus !== null) {
        contents.AssignmentStatus = data.AssignmentStatus;
    }
    if (data.Identities !== undefined && data.Identities !== null) {
        contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
    }
    if (data.PolicyArn !== undefined && data.PolicyArn !== null) {
        contents.PolicyArn = data.PolicyArn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIAMPolicyAssignmentCommand = deserializeAws_restJson1CreateIAMPolicyAssignmentCommand;
const deserializeAws_restJson1CreateIAMPolicyAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentUpdatingException":
        case "com.amazonaws.quicksight#ConcurrentUpdatingException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateIngestionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateIngestionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        IngestionId: undefined,
        IngestionStatus: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.IngestionId !== undefined && data.IngestionId !== null) {
        contents.IngestionId = data.IngestionId;
    }
    if (data.IngestionStatus !== undefined && data.IngestionStatus !== null) {
        contents.IngestionStatus = data.IngestionStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIngestionCommand = deserializeAws_restJson1CreateIngestionCommand;
const deserializeAws_restJson1CreateIngestionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateNamespaceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateNamespaceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CapacityRegion: undefined,
        CreationStatus: undefined,
        IdentityStore: undefined,
        Name: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CapacityRegion !== undefined && data.CapacityRegion !== null) {
        contents.CapacityRegion = data.CapacityRegion;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.IdentityStore !== undefined && data.IdentityStore !== null) {
        contents.IdentityStore = data.IdentityStore;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateNamespaceCommand = deserializeAws_restJson1CreateNamespaceCommand;
const deserializeAws_restJson1CreateNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateId: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTemplateCommand = deserializeAws_restJson1CreateTemplateCommand;
const deserializeAws_restJson1CreateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateTemplateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTemplateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        TemplateAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
        contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTemplateAliasCommand = deserializeAws_restJson1CreateTemplateAliasCommand;
const deserializeAws_restJson1CreateTemplateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateThemeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateThemeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeId: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateThemeCommand = deserializeAws_restJson1CreateThemeCommand;
const deserializeAws_restJson1CreateThemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateThemeAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateThemeAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        ThemeAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
        contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateThemeAliasCommand = deserializeAws_restJson1CreateThemeAliasCommand;
const deserializeAws_restJson1CreateThemeAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAccountCustomizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAccountCustomizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAccountCustomizationCommand = deserializeAws_restJson1DeleteAccountCustomizationCommand;
const deserializeAws_restJson1DeleteAccountCustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisId: undefined,
        Arn: undefined,
        DeletionTime: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DeletionTime !== undefined && data.DeletionTime !== null) {
        contents.DeletionTime = new Date(Math.round(data.DeletionTime * 1000));
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAnalysisCommand = deserializeAws_restJson1DeleteAnalysisCommand;
const deserializeAws_restJson1DeleteAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DashboardId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDashboardCommand = deserializeAws_restJson1DeleteDashboardCommand;
const deserializeAws_restJson1DeleteDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DataSetId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDataSetCommand = deserializeAws_restJson1DeleteDataSetCommand;
const deserializeAws_restJson1DeleteDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDataSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DataSourceId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
        contents.DataSourceId = data.DataSourceId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDataSourceCommand = deserializeAws_restJson1DeleteDataSourceCommand;
const deserializeAws_restJson1DeleteDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGroupCommand = deserializeAws_restJson1DeleteGroupCommand;
const deserializeAws_restJson1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteGroupMembershipCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteGroupMembershipCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGroupMembershipCommand = deserializeAws_restJson1DeleteGroupMembershipCommand;
const deserializeAws_restJson1DeleteGroupMembershipCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssignmentName: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
        contents.AssignmentName = data.AssignmentName;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand = deserializeAws_restJson1DeleteIAMPolicyAssignmentCommand;
const deserializeAws_restJson1DeleteIAMPolicyAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentUpdatingException":
        case "com.amazonaws.quicksight#ConcurrentUpdatingException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteNamespaceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteNamespaceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteNamespaceCommand = deserializeAws_restJson1DeleteNamespaceCommand;
const deserializeAws_restJson1DeleteNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTemplateCommand = deserializeAws_restJson1DeleteTemplateCommand;
const deserializeAws_restJson1DeleteTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteTemplateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTemplateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AliasName: undefined,
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AliasName !== undefined && data.AliasName !== null) {
        contents.AliasName = data.AliasName;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTemplateAliasCommand = deserializeAws_restJson1DeleteTemplateAliasCommand;
const deserializeAws_restJson1DeleteTemplateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteThemeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteThemeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteThemeCommand = deserializeAws_restJson1DeleteThemeCommand;
const deserializeAws_restJson1DeleteThemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteThemeAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteThemeAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AliasName: undefined,
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AliasName !== undefined && data.AliasName !== null) {
        contents.AliasName = data.AliasName;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteThemeAliasCommand = deserializeAws_restJson1DeleteThemeAliasCommand;
const deserializeAws_restJson1DeleteThemeAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUserCommand = deserializeAws_restJson1DeleteUserCommand;
const deserializeAws_restJson1DeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteUserByPrincipalIdCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserByPrincipalIdCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteUserByPrincipalIdCommand = deserializeAws_restJson1DeleteUserByPrincipalIdCommand;
const deserializeAws_restJson1DeleteUserByPrincipalIdCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeAccountCustomizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccountCustomizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountCustomization: undefined,
        Arn: undefined,
        AwsAccountId: undefined,
        Namespace: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
        contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
        contents.AwsAccountId = data.AwsAccountId;
    }
    if (data.Namespace !== undefined && data.Namespace !== null) {
        contents.Namespace = data.Namespace;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccountCustomizationCommand = deserializeAws_restJson1DescribeAccountCustomizationCommand;
const deserializeAws_restJson1DescribeAccountCustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeAccountSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccountSettingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountSettings: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountSettings !== undefined && data.AccountSettings !== null) {
        contents.AccountSettings = deserializeAws_restJson1AccountSettings(data.AccountSettings, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccountSettingsCommand = deserializeAws_restJson1DescribeAccountSettingsCommand;
const deserializeAws_restJson1DescribeAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Analysis: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Analysis !== undefined && data.Analysis !== null) {
        contents.Analysis = deserializeAws_restJson1Analysis(data.Analysis, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAnalysisCommand = deserializeAws_restJson1DescribeAnalysisCommand;
const deserializeAws_restJson1DescribeAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeAnalysisPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAnalysisPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisArn: undefined,
        AnalysisId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisArn !== undefined && data.AnalysisArn !== null) {
        contents.AnalysisArn = data.AnalysisArn;
    }
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAnalysisPermissionsCommand = deserializeAws_restJson1DescribeAnalysisPermissionsCommand;
const deserializeAws_restJson1DescribeAnalysisPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Dashboard: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Dashboard !== undefined && data.Dashboard !== null) {
        contents.Dashboard = deserializeAws_restJson1Dashboard(data.Dashboard, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDashboardCommand = deserializeAws_restJson1DescribeDashboardCommand;
const deserializeAws_restJson1DescribeDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDashboardPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDashboardPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardArn: undefined,
        DashboardId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
        contents.DashboardArn = data.DashboardArn;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDashboardPermissionsCommand = deserializeAws_restJson1DescribeDashboardPermissionsCommand;
const deserializeAws_restJson1DescribeDashboardPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSet: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSet !== undefined && data.DataSet !== null) {
        contents.DataSet = deserializeAws_restJson1DataSet(data.DataSet, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDataSetCommand = deserializeAws_restJson1DescribeDataSetCommand;
const deserializeAws_restJson1DescribeDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDataSetPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDataSetPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSetArn: undefined,
        DataSetId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSetArn !== undefined && data.DataSetArn !== null) {
        contents.DataSetArn = data.DataSetArn;
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDataSetPermissionsCommand = deserializeAws_restJson1DescribeDataSetPermissionsCommand;
const deserializeAws_restJson1DescribeDataSetPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDataSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDataSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSource: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSource !== undefined && data.DataSource !== null) {
        contents.DataSource = deserializeAws_restJson1DataSource(data.DataSource, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDataSourceCommand = deserializeAws_restJson1DescribeDataSourceCommand;
const deserializeAws_restJson1DescribeDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDataSourcePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDataSourcePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSourceArn: undefined,
        DataSourceId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSourceArn !== undefined && data.DataSourceArn !== null) {
        contents.DataSourceArn = data.DataSourceArn;
    }
    if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
        contents.DataSourceId = data.DataSourceId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDataSourcePermissionsCommand = deserializeAws_restJson1DescribeDataSourcePermissionsCommand;
const deserializeAws_restJson1DescribeDataSourcePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGroupCommand = deserializeAws_restJson1DescribeGroupCommand;
const deserializeAws_restJson1DescribeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IAMPolicyAssignment: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IAMPolicyAssignment !== undefined && data.IAMPolicyAssignment !== null) {
        contents.IAMPolicyAssignment = deserializeAws_restJson1IAMPolicyAssignment(data.IAMPolicyAssignment, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand = deserializeAws_restJson1DescribeIAMPolicyAssignmentCommand;
const deserializeAws_restJson1DescribeIAMPolicyAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeIngestionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIngestionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Ingestion: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Ingestion !== undefined && data.Ingestion !== null) {
        contents.Ingestion = deserializeAws_restJson1Ingestion(data.Ingestion, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIngestionCommand = deserializeAws_restJson1DescribeIngestionCommand;
const deserializeAws_restJson1DescribeIngestionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeNamespaceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeNamespaceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Namespace: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Namespace !== undefined && data.Namespace !== null) {
        contents.Namespace = deserializeAws_restJson1NamespaceInfoV2(data.Namespace, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeNamespaceCommand = deserializeAws_restJson1DescribeNamespaceCommand;
const deserializeAws_restJson1DescribeNamespaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        Template: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.Template !== undefined && data.Template !== null) {
        contents.Template = deserializeAws_restJson1Template(data.Template, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTemplateCommand = deserializeAws_restJson1DescribeTemplateCommand;
const deserializeAws_restJson1DescribeTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeTemplateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTemplateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        TemplateAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
        contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTemplateAliasCommand = deserializeAws_restJson1DescribeTemplateAliasCommand;
const deserializeAws_restJson1DescribeTemplateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeTemplatePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTemplatePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateArn: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateArn !== undefined && data.TemplateArn !== null) {
        contents.TemplateArn = data.TemplateArn;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTemplatePermissionsCommand = deserializeAws_restJson1DescribeTemplatePermissionsCommand;
const deserializeAws_restJson1DescribeTemplatePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeThemeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeThemeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        Theme: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.Theme !== undefined && data.Theme !== null) {
        contents.Theme = deserializeAws_restJson1Theme(data.Theme, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeThemeCommand = deserializeAws_restJson1DescribeThemeCommand;
const deserializeAws_restJson1DescribeThemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeThemeAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeThemeAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        ThemeAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
        contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeThemeAliasCommand = deserializeAws_restJson1DescribeThemeAliasCommand;
const deserializeAws_restJson1DescribeThemeAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeThemePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeThemePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeArn: undefined,
        ThemeId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeArn !== undefined && data.ThemeArn !== null) {
        contents.ThemeArn = data.ThemeArn;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeThemePermissionsCommand = deserializeAws_restJson1DescribeThemePermissionsCommand;
const deserializeAws_restJson1DescribeThemePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUserCommand = deserializeAws_restJson1DescribeUserCommand;
const deserializeAws_restJson1DescribeUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDashboardEmbedUrlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDashboardEmbedUrlCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmbedUrl: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EmbedUrl !== undefined && data.EmbedUrl !== null) {
        contents.EmbedUrl = data.EmbedUrl;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDashboardEmbedUrlCommand = deserializeAws_restJson1GetDashboardEmbedUrlCommand;
const deserializeAws_restJson1GetDashboardEmbedUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DomainNotWhitelistedException":
        case "com.amazonaws.quicksight#DomainNotWhitelistedException":
            response = {
                ...(await deserializeAws_restJson1DomainNotWhitelistedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdentityTypeNotSupportedException":
        case "com.amazonaws.quicksight#IdentityTypeNotSupportedException":
            response = {
                ...(await deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QuickSightUserNotFoundException":
        case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
            response = {
                ...(await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SessionLifetimeInMinutesInvalidException":
        case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
            response = {
                ...(await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedPricingPlanException":
        case "com.amazonaws.quicksight#UnsupportedPricingPlanException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSessionEmbedUrlCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSessionEmbedUrlCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        EmbedUrl: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.EmbedUrl !== undefined && data.EmbedUrl !== null) {
        contents.EmbedUrl = data.EmbedUrl;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSessionEmbedUrlCommand = deserializeAws_restJson1GetSessionEmbedUrlCommand;
const deserializeAws_restJson1GetSessionEmbedUrlCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "QuickSightUserNotFoundException":
        case "com.amazonaws.quicksight#QuickSightUserNotFoundException":
            response = {
                ...(await deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SessionLifetimeInMinutesInvalidException":
        case "com.amazonaws.quicksight#SessionLifetimeInMinutesInvalidException":
            response = {
                ...(await deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListAnalysesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAnalysesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisSummaryList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisSummaryList !== undefined && data.AnalysisSummaryList !== null) {
        contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAnalysesCommand = deserializeAws_restJson1ListAnalysesCommand;
const deserializeAws_restJson1ListAnalysesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDashboardsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDashboardsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardSummaryList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardSummaryList !== undefined && data.DashboardSummaryList !== null) {
        contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDashboardsCommand = deserializeAws_restJson1ListDashboardsCommand;
const deserializeAws_restJson1ListDashboardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDashboardVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDashboardVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardVersionSummaryList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardVersionSummaryList !== undefined && data.DashboardVersionSummaryList !== null) {
        contents.DashboardVersionSummaryList = deserializeAws_restJson1DashboardVersionSummaryList(data.DashboardVersionSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDashboardVersionsCommand = deserializeAws_restJson1ListDashboardVersionsCommand;
const deserializeAws_restJson1ListDashboardVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDataSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDataSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSetSummaries: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSetSummaries !== undefined && data.DataSetSummaries !== null) {
        contents.DataSetSummaries = deserializeAws_restJson1DataSetSummaryList(data.DataSetSummaries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataSetsCommand = deserializeAws_restJson1ListDataSetsCommand;
const deserializeAws_restJson1ListDataSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDataSourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSources: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSources !== undefined && data.DataSources !== null) {
        contents.DataSources = deserializeAws_restJson1DataSourceList(data.DataSources, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataSourcesCommand = deserializeAws_restJson1ListDataSourcesCommand;
const deserializeAws_restJson1ListDataSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupMembershipsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupMembershipsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupMemberList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupMemberList !== undefined && data.GroupMemberList !== null) {
        contents.GroupMemberList = deserializeAws_restJson1GroupMemberList(data.GroupMemberList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupMembershipsCommand = deserializeAws_restJson1ListGroupMembershipsCommand;
const deserializeAws_restJson1ListGroupMembershipsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupList !== undefined && data.GroupList !== null) {
        contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroupsCommand = deserializeAws_restJson1ListGroupsCommand;
const deserializeAws_restJson1ListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIAMPolicyAssignmentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IAMPolicyAssignments: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IAMPolicyAssignments !== undefined && data.IAMPolicyAssignments !== null) {
        contents.IAMPolicyAssignments = deserializeAws_restJson1IAMPolicyAssignmentSummaryList(data.IAMPolicyAssignments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIAMPolicyAssignmentsCommand = deserializeAws_restJson1ListIAMPolicyAssignmentsCommand;
const deserializeAws_restJson1ListIAMPolicyAssignmentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ActiveAssignments: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ActiveAssignments !== undefined && data.ActiveAssignments !== null) {
        contents.ActiveAssignments = deserializeAws_restJson1ActiveIAMPolicyAssignmentList(data.ActiveAssignments, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand = deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommand;
const deserializeAws_restJson1ListIAMPolicyAssignmentsForUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentUpdatingException":
        case "com.amazonaws.quicksight#ConcurrentUpdatingException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIngestionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIngestionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Ingestions: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Ingestions !== undefined && data.Ingestions !== null) {
        contents.Ingestions = deserializeAws_restJson1Ingestions(data.Ingestions, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIngestionsCommand = deserializeAws_restJson1ListIngestionsCommand;
const deserializeAws_restJson1ListIngestionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListNamespacesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNamespacesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Namespaces: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Namespaces !== undefined && data.Namespaces !== null) {
        contents.Namespaces = deserializeAws_restJson1Namespaces(data.Namespaces, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNamespacesCommand = deserializeAws_restJson1ListNamespacesCommand;
const deserializeAws_restJson1ListNamespacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForResourceCommand = deserializeAws_restJson1ListTagsForResourceCommand;
const deserializeAws_restJson1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTemplateAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTemplateAliasesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateAliasList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateAliasList !== undefined && data.TemplateAliasList !== null) {
        contents.TemplateAliasList = deserializeAws_restJson1TemplateAliasList(data.TemplateAliasList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTemplateAliasesCommand = deserializeAws_restJson1ListTemplateAliasesCommand;
const deserializeAws_restJson1ListTemplateAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateSummaryList !== undefined && data.TemplateSummaryList !== null) {
        contents.TemplateSummaryList = deserializeAws_restJson1TemplateSummaryList(data.TemplateSummaryList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTemplatesCommand = deserializeAws_restJson1ListTemplatesCommand;
const deserializeAws_restJson1ListTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListTemplateVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTemplateVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateVersionSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateVersionSummaryList !== undefined && data.TemplateVersionSummaryList !== null) {
        contents.TemplateVersionSummaryList = deserializeAws_restJson1TemplateVersionSummaryList(data.TemplateVersionSummaryList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTemplateVersionsCommand = deserializeAws_restJson1ListTemplateVersionsCommand;
const deserializeAws_restJson1ListTemplateVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListThemeAliasesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListThemeAliasesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeAliasList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeAliasList !== undefined && data.ThemeAliasList !== null) {
        contents.ThemeAliasList = deserializeAws_restJson1ThemeAliasList(data.ThemeAliasList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListThemeAliasesCommand = deserializeAws_restJson1ListThemeAliasesCommand;
const deserializeAws_restJson1ListThemeAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListThemesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListThemesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeSummaryList !== undefined && data.ThemeSummaryList !== null) {
        contents.ThemeSummaryList = deserializeAws_restJson1ThemeSummaryList(data.ThemeSummaryList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListThemesCommand = deserializeAws_restJson1ListThemesCommand;
const deserializeAws_restJson1ListThemesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListThemeVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListThemeVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeVersionSummaryList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeVersionSummaryList !== undefined && data.ThemeVersionSummaryList !== null) {
        contents.ThemeVersionSummaryList = deserializeAws_restJson1ThemeVersionSummaryList(data.ThemeVersionSummaryList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListThemeVersionsCommand = deserializeAws_restJson1ListThemeVersionsCommand;
const deserializeAws_restJson1ListThemeVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListUserGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUserGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        GroupList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.GroupList !== undefined && data.GroupList !== null) {
        contents.GroupList = deserializeAws_restJson1GroupList(data.GroupList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUserGroupsCommand = deserializeAws_restJson1ListUserGroupsCommand;
const deserializeAws_restJson1ListUserGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListUsersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUsersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
        UserList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.UserList !== undefined && data.UserList !== null) {
        contents.UserList = deserializeAws_restJson1UserList(data.UserList, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUsersCommand = deserializeAws_restJson1ListUsersCommand;
const deserializeAws_restJson1ListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        User: undefined,
        UserInvitationUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    if (data.UserInvitationUrl !== undefined && data.UserInvitationUrl !== null) {
        contents.UserInvitationUrl = data.UserInvitationUrl;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterUserCommand = deserializeAws_restJson1RegisterUserCommand;
const deserializeAws_restJson1RegisterUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RestoreAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RestoreAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisId: undefined,
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RestoreAnalysisCommand = deserializeAws_restJson1RestoreAnalysisCommand;
const deserializeAws_restJson1RestoreAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SearchAnalysesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchAnalysesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisSummaryList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisSummaryList !== undefined && data.AnalysisSummaryList !== null) {
        contents.AnalysisSummaryList = deserializeAws_restJson1AnalysisSummaryList(data.AnalysisSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchAnalysesCommand = deserializeAws_restJson1SearchAnalysesCommand;
const deserializeAws_restJson1SearchAnalysesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SearchDashboardsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchDashboardsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardSummaryList: undefined,
        NextToken: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardSummaryList !== undefined && data.DashboardSummaryList !== null) {
        contents.DashboardSummaryList = deserializeAws_restJson1DashboardSummaryList(data.DashboardSummaryList, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchDashboardsCommand = deserializeAws_restJson1SearchDashboardsCommand;
const deserializeAws_restJson1SearchDashboardsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.quicksight#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1TagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TagResourceCommand = deserializeAws_restJson1TagResourceCommand;
const deserializeAws_restJson1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UntagResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UntagResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UntagResourceCommand = deserializeAws_restJson1UntagResourceCommand;
const deserializeAws_restJson1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAccountCustomizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAccountCustomizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccountCustomization: undefined,
        Arn: undefined,
        AwsAccountId: undefined,
        Namespace: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccountCustomization !== undefined && data.AccountCustomization !== null) {
        contents.AccountCustomization = deserializeAws_restJson1AccountCustomization(data.AccountCustomization, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AwsAccountId !== undefined && data.AwsAccountId !== null) {
        contents.AwsAccountId = data.AwsAccountId;
    }
    if (data.Namespace !== undefined && data.Namespace !== null) {
        contents.Namespace = data.Namespace;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAccountCustomizationCommand = deserializeAws_restJson1UpdateAccountCustomizationCommand;
const deserializeAws_restJson1UpdateAccountCustomizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAccountSettingsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAccountSettingsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAccountSettingsCommand = deserializeAws_restJson1UpdateAccountSettingsCommand;
const deserializeAws_restJson1UpdateAccountSettingsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAnalysisCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAnalysisCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisId: undefined,
        Arn: undefined,
        RequestId: undefined,
        Status: undefined,
        UpdateStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.UpdateStatus !== undefined && data.UpdateStatus !== null) {
        contents.UpdateStatus = data.UpdateStatus;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAnalysisCommand = deserializeAws_restJson1UpdateAnalysisCommand;
const deserializeAws_restJson1UpdateAnalysisCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateAnalysisPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAnalysisPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AnalysisArn: undefined,
        AnalysisId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AnalysisArn !== undefined && data.AnalysisArn !== null) {
        contents.AnalysisArn = data.AnalysisArn;
    }
    if (data.AnalysisId !== undefined && data.AnalysisId !== null) {
        contents.AnalysisId = data.AnalysisId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAnalysisPermissionsCommand = deserializeAws_restJson1UpdateAnalysisPermissionsCommand;
const deserializeAws_restJson1UpdateAnalysisPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDashboardCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDashboardCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        DashboardId: undefined,
        RequestId: undefined,
        Status: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDashboardCommand = deserializeAws_restJson1UpdateDashboardCommand;
const deserializeAws_restJson1UpdateDashboardCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDashboardPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDashboardPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardArn: undefined,
        DashboardId: undefined,
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
        contents.DashboardArn = data.DashboardArn;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDashboardPermissionsCommand = deserializeAws_restJson1UpdateDashboardPermissionsCommand;
const deserializeAws_restJson1UpdateDashboardPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDashboardPublishedVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DashboardArn: undefined,
        DashboardId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DashboardArn !== undefined && data.DashboardArn !== null) {
        contents.DashboardArn = data.DashboardArn;
    }
    if (data.DashboardId !== undefined && data.DashboardId !== null) {
        contents.DashboardId = data.DashboardId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDashboardPublishedVersionCommand = deserializeAws_restJson1UpdateDashboardPublishedVersionCommand;
const deserializeAws_restJson1UpdateDashboardPublishedVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DataSetId: undefined,
        IngestionArn: undefined,
        IngestionId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.IngestionArn !== undefined && data.IngestionArn !== null) {
        contents.IngestionArn = data.IngestionArn;
    }
    if (data.IngestionId !== undefined && data.IngestionId !== null) {
        contents.IngestionId = data.IngestionId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSetCommand = deserializeAws_restJson1UpdateDataSetCommand;
const deserializeAws_restJson1UpdateDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDataSetPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataSetPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSetArn: undefined,
        DataSetId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSetArn !== undefined && data.DataSetArn !== null) {
        contents.DataSetArn = data.DataSetArn;
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSetPermissionsCommand = deserializeAws_restJson1UpdateDataSetPermissionsCommand;
const deserializeAws_restJson1UpdateDataSetPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDataSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        DataSourceId: undefined,
        RequestId: undefined,
        Status: undefined,
        UpdateStatus: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
        contents.DataSourceId = data.DataSourceId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.UpdateStatus !== undefined && data.UpdateStatus !== null) {
        contents.UpdateStatus = data.UpdateStatus;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSourceCommand = deserializeAws_restJson1UpdateDataSourceCommand;
const deserializeAws_restJson1UpdateDataSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDataSourcePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataSourcePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSourceArn: undefined,
        DataSourceId: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSourceArn !== undefined && data.DataSourceArn !== null) {
        contents.DataSourceArn = data.DataSourceArn;
    }
    if (data.DataSourceId !== undefined && data.DataSourceId !== null) {
        contents.DataSourceId = data.DataSourceId;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSourcePermissionsCommand = deserializeAws_restJson1UpdateDataSourcePermissionsCommand;
const deserializeAws_restJson1UpdateDataSourcePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Group: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Group !== undefined && data.Group !== null) {
        contents.Group = deserializeAws_restJson1Group(data.Group, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGroupCommand = deserializeAws_restJson1UpdateGroupCommand;
const deserializeAws_restJson1UpdateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AssignmentId: undefined,
        AssignmentName: undefined,
        AssignmentStatus: undefined,
        Identities: undefined,
        PolicyArn: undefined,
        RequestId: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AssignmentId !== undefined && data.AssignmentId !== null) {
        contents.AssignmentId = data.AssignmentId;
    }
    if (data.AssignmentName !== undefined && data.AssignmentName !== null) {
        contents.AssignmentName = data.AssignmentName;
    }
    if (data.AssignmentStatus !== undefined && data.AssignmentStatus !== null) {
        contents.AssignmentStatus = data.AssignmentStatus;
    }
    if (data.Identities !== undefined && data.Identities !== null) {
        contents.Identities = deserializeAws_restJson1IdentityMap(data.Identities, context);
    }
    if (data.PolicyArn !== undefined && data.PolicyArn !== null) {
        contents.PolicyArn = data.PolicyArn;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand = deserializeAws_restJson1UpdateIAMPolicyAssignmentCommand;
const deserializeAws_restJson1UpdateIAMPolicyAssignmentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentUpdatingException":
        case "com.amazonaws.quicksight#ConcurrentUpdatingException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentUpdatingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateId: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTemplateCommand = deserializeAws_restJson1UpdateTemplateCommand;
const deserializeAws_restJson1UpdateTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateTemplateAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTemplateAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        TemplateAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateAlias !== undefined && data.TemplateAlias !== null) {
        contents.TemplateAlias = deserializeAws_restJson1TemplateAlias(data.TemplateAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTemplateAliasCommand = deserializeAws_restJson1UpdateTemplateAliasCommand;
const deserializeAws_restJson1UpdateTemplateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateTemplatePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateTemplatePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
        TemplateArn: undefined,
        TemplateId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.TemplateArn !== undefined && data.TemplateArn !== null) {
        contents.TemplateArn = data.TemplateArn;
    }
    if (data.TemplateId !== undefined && data.TemplateId !== null) {
        contents.TemplateId = data.TemplateId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTemplatePermissionsCommand = deserializeAws_restJson1UpdateTemplatePermissionsCommand;
const deserializeAws_restJson1UpdateTemplatePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateThemeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateThemeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationStatus: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeId: undefined,
        VersionArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationStatus !== undefined && data.CreationStatus !== null) {
        contents.CreationStatus = data.CreationStatus;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (data.VersionArn !== undefined && data.VersionArn !== null) {
        contents.VersionArn = data.VersionArn;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateThemeCommand = deserializeAws_restJson1UpdateThemeCommand;
const deserializeAws_restJson1UpdateThemeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.quicksight#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateThemeAliasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateThemeAliasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        ThemeAlias: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeAlias !== undefined && data.ThemeAlias !== null) {
        contents.ThemeAlias = deserializeAws_restJson1ThemeAlias(data.ThemeAlias, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateThemeAliasCommand = deserializeAws_restJson1UpdateThemeAliasCommand;
const deserializeAws_restJson1UpdateThemeAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.quicksight#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceExistsException":
        case "com.amazonaws.quicksight#ResourceExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateThemePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateThemePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Permissions: undefined,
        RequestId: undefined,
        Status: undefined,
        ThemeArn: undefined,
        ThemeId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Permissions !== undefined && data.Permissions !== null) {
        contents.Permissions = deserializeAws_restJson1ResourcePermissionList(data.Permissions, context);
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ThemeArn !== undefined && data.ThemeArn !== null) {
        contents.ThemeArn = data.ThemeArn;
    }
    if (data.ThemeId !== undefined && data.ThemeId !== null) {
        contents.ThemeId = data.ThemeId;
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateThemePermissionsCommand = deserializeAws_restJson1UpdateThemePermissionsCommand;
const deserializeAws_restJson1UpdateThemePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedUserEditionException":
        case "com.amazonaws.quicksight#UnsupportedUserEditionException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedUserEditionExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        RequestId: undefined,
        Status: undefined,
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    if (contents.Status === undefined) {
        contents.Status = output.statusCode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateUserCommand = deserializeAws_restJson1UpdateUserCommand;
const deserializeAws_restJson1UpdateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.quicksight#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalFailureException":
        case "com.amazonaws.quicksight#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.quicksight#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionNotMetException":
        case "com.amazonaws.quicksight#PreconditionNotMetException":
            response = {
                ...(await deserializeAws_restJson1PreconditionNotMetExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.quicksight#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.quicksight#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.quicksight#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1ConcurrentUpdatingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentUpdatingException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1DomainNotWhitelistedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DomainNotWhitelistedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1IdentityTypeNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdentityTypeNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1PreconditionNotMetExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionNotMetException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1QuickSightUserNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "QuickSightUserNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1ResourceExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1SessionLifetimeInMinutesInvalidExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SessionLifetimeInMinutesInvalidException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1UnsupportedPricingPlanExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedPricingPlanException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const deserializeAws_restJson1UnsupportedUserEditionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedUserEditionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        RequestId: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.RequestId !== undefined && data.RequestId !== null) {
        contents.RequestId = data.RequestId;
    }
    return contents;
};
const serializeAws_restJson1AccountCustomization = (input, context) => {
    return {
        ...(input.DefaultTheme !== undefined && input.DefaultTheme !== null && { DefaultTheme: input.DefaultTheme }),
    };
};
const serializeAws_restJson1ActionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1AdHocFilteringOption = (input, context) => {
    return {
        ...(input.AvailabilityStatus !== undefined &&
            input.AvailabilityStatus !== null && { AvailabilityStatus: input.AvailabilityStatus }),
    };
};
const serializeAws_restJson1AmazonElasticsearchParameters = (input, context) => {
    return {
        ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    };
};
const serializeAws_restJson1AnalysisSearchFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1AnalysisSearchFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AnalysisSearchFilter(entry, context);
    });
};
const serializeAws_restJson1AnalysisSourceEntity = (input, context) => {
    return {
        ...(input.SourceTemplate !== undefined &&
            input.SourceTemplate !== null && {
            SourceTemplate: serializeAws_restJson1AnalysisSourceTemplate(input.SourceTemplate, context),
        }),
    };
};
const serializeAws_restJson1AnalysisSourceTemplate = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.DataSetReferences !== undefined &&
            input.DataSetReferences !== null && {
            DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
        }),
    };
};
const serializeAws_restJson1AthenaParameters = (input, context) => {
    return {
        ...(input.WorkGroup !== undefined && input.WorkGroup !== null && { WorkGroup: input.WorkGroup }),
    };
};
const serializeAws_restJson1AuroraParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1AuroraPostgreSqlParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1AwsIotAnalyticsParameters = (input, context) => {
    return {
        ...(input.DataSetName !== undefined && input.DataSetName !== null && { DataSetName: input.DataSetName }),
    };
};
const serializeAws_restJson1BorderStyle = (input, context) => {
    return {
        ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
    };
};
const serializeAws_restJson1CalculatedColumn = (input, context) => {
    return {
        ...(input.ColumnId !== undefined && input.ColumnId !== null && { ColumnId: input.ColumnId }),
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    };
};
const serializeAws_restJson1CalculatedColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1CalculatedColumn(entry, context);
    });
};
const serializeAws_restJson1CastColumnTypeOperation = (input, context) => {
    return {
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.NewColumnType !== undefined && input.NewColumnType !== null && { NewColumnType: input.NewColumnType }),
    };
};
const serializeAws_restJson1ColorList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ColumnDescription = (input, context) => {
    return {
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    };
};
const serializeAws_restJson1ColumnGroup = (input, context) => {
    return {
        ...(input.GeoSpatialColumnGroup !== undefined &&
            input.GeoSpatialColumnGroup !== null && {
            GeoSpatialColumnGroup: serializeAws_restJson1GeoSpatialColumnGroup(input.GeoSpatialColumnGroup, context),
        }),
    };
};
const serializeAws_restJson1ColumnGroupList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ColumnGroup(entry, context);
    });
};
const serializeAws_restJson1ColumnLevelPermissionRule = (input, context) => {
    return {
        ...(input.ColumnNames !== undefined &&
            input.ColumnNames !== null && { ColumnNames: serializeAws_restJson1ColumnNameList(input.ColumnNames, context) }),
        ...(input.Principals !== undefined &&
            input.Principals !== null && { Principals: serializeAws_restJson1PrincipalList(input.Principals, context) }),
    };
};
const serializeAws_restJson1ColumnLevelPermissionRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
};
const serializeAws_restJson1ColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ColumnNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ColumnTag = (input, context) => {
    return {
        ...(input.ColumnDescription !== undefined &&
            input.ColumnDescription !== null && {
            ColumnDescription: serializeAws_restJson1ColumnDescription(input.ColumnDescription, context),
        }),
        ...(input.ColumnGeographicRole !== undefined &&
            input.ColumnGeographicRole !== null && { ColumnGeographicRole: input.ColumnGeographicRole }),
    };
};
const serializeAws_restJson1ColumnTagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ColumnTag(entry, context);
    });
};
const serializeAws_restJson1CreateColumnsOperation = (input, context) => {
    return {
        ...(input.Columns !== undefined &&
            input.Columns !== null && { Columns: serializeAws_restJson1CalculatedColumnList(input.Columns, context) }),
    };
};
const serializeAws_restJson1CredentialPair = (input, context) => {
    return {
        ...(input.AlternateDataSourceParameters !== undefined &&
            input.AlternateDataSourceParameters !== null && {
            AlternateDataSourceParameters: serializeAws_restJson1DataSourceParametersList(input.AlternateDataSourceParameters, context),
        }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
    };
};
const serializeAws_restJson1CustomSql = (input, context) => {
    return {
        ...(input.Columns !== undefined &&
            input.Columns !== null && { Columns: serializeAws_restJson1InputColumnList(input.Columns, context) }),
        ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SqlQuery !== undefined && input.SqlQuery !== null && { SqlQuery: input.SqlQuery }),
    };
};
const serializeAws_restJson1DashboardPublishOptions = (input, context) => {
    return {
        ...(input.AdHocFilteringOption !== undefined &&
            input.AdHocFilteringOption !== null && {
            AdHocFilteringOption: serializeAws_restJson1AdHocFilteringOption(input.AdHocFilteringOption, context),
        }),
        ...(input.ExportToCSVOption !== undefined &&
            input.ExportToCSVOption !== null && {
            ExportToCSVOption: serializeAws_restJson1ExportToCSVOption(input.ExportToCSVOption, context),
        }),
        ...(input.SheetControlsOption !== undefined &&
            input.SheetControlsOption !== null && {
            SheetControlsOption: serializeAws_restJson1SheetControlsOption(input.SheetControlsOption, context),
        }),
    };
};
const serializeAws_restJson1DashboardSearchFilter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Operator !== undefined && input.Operator !== null && { Operator: input.Operator }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1DashboardSearchFilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DashboardSearchFilter(entry, context);
    });
};
const serializeAws_restJson1DashboardSourceEntity = (input, context) => {
    return {
        ...(input.SourceTemplate !== undefined &&
            input.SourceTemplate !== null && {
            SourceTemplate: serializeAws_restJson1DashboardSourceTemplate(input.SourceTemplate, context),
        }),
    };
};
const serializeAws_restJson1DashboardSourceTemplate = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.DataSetReferences !== undefined &&
            input.DataSetReferences !== null && {
            DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
        }),
    };
};
const serializeAws_restJson1DataColorPalette = (input, context) => {
    return {
        ...(input.Colors !== undefined &&
            input.Colors !== null && { Colors: serializeAws_restJson1ColorList(input.Colors, context) }),
        ...(input.EmptyFillColor !== undefined &&
            input.EmptyFillColor !== null && { EmptyFillColor: input.EmptyFillColor }),
        ...(input.MinMaxGradient !== undefined &&
            input.MinMaxGradient !== null && {
            MinMaxGradient: serializeAws_restJson1ColorList(input.MinMaxGradient, context),
        }),
    };
};
const serializeAws_restJson1DataSetReference = (input, context) => {
    return {
        ...(input.DataSetArn !== undefined && input.DataSetArn !== null && { DataSetArn: input.DataSetArn }),
        ...(input.DataSetPlaceholder !== undefined &&
            input.DataSetPlaceholder !== null && { DataSetPlaceholder: input.DataSetPlaceholder }),
    };
};
const serializeAws_restJson1DataSetReferenceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataSetReference(entry, context);
    });
};
const serializeAws_restJson1DataSourceCredentials = (input, context) => {
    return {
        ...(input.CopySourceArn !== undefined && input.CopySourceArn !== null && { CopySourceArn: input.CopySourceArn }),
        ...(input.CredentialPair !== undefined &&
            input.CredentialPair !== null && {
            CredentialPair: serializeAws_restJson1CredentialPair(input.CredentialPair, context),
        }),
    };
};
const serializeAws_restJson1DataSourceParameters = (input, context) => {
    return models_0_1.DataSourceParameters.visit(input, {
        AmazonElasticsearchParameters: (value) => ({
            AmazonElasticsearchParameters: serializeAws_restJson1AmazonElasticsearchParameters(value, context),
        }),
        AthenaParameters: (value) => ({ AthenaParameters: serializeAws_restJson1AthenaParameters(value, context) }),
        AuroraParameters: (value) => ({ AuroraParameters: serializeAws_restJson1AuroraParameters(value, context) }),
        AuroraPostgreSqlParameters: (value) => ({
            AuroraPostgreSqlParameters: serializeAws_restJson1AuroraPostgreSqlParameters(value, context),
        }),
        AwsIotAnalyticsParameters: (value) => ({
            AwsIotAnalyticsParameters: serializeAws_restJson1AwsIotAnalyticsParameters(value, context),
        }),
        JiraParameters: (value) => ({ JiraParameters: serializeAws_restJson1JiraParameters(value, context) }),
        MariaDbParameters: (value) => ({ MariaDbParameters: serializeAws_restJson1MariaDbParameters(value, context) }),
        MySqlParameters: (value) => ({ MySqlParameters: serializeAws_restJson1MySqlParameters(value, context) }),
        OracleParameters: (value) => ({ OracleParameters: serializeAws_restJson1OracleParameters(value, context) }),
        PostgreSqlParameters: (value) => ({
            PostgreSqlParameters: serializeAws_restJson1PostgreSqlParameters(value, context),
        }),
        PrestoParameters: (value) => ({ PrestoParameters: serializeAws_restJson1PrestoParameters(value, context) }),
        RdsParameters: (value) => ({ RdsParameters: serializeAws_restJson1RdsParameters(value, context) }),
        RedshiftParameters: (value) => ({ RedshiftParameters: serializeAws_restJson1RedshiftParameters(value, context) }),
        S3Parameters: (value) => ({ S3Parameters: serializeAws_restJson1S3Parameters(value, context) }),
        ServiceNowParameters: (value) => ({
            ServiceNowParameters: serializeAws_restJson1ServiceNowParameters(value, context),
        }),
        SnowflakeParameters: (value) => ({
            SnowflakeParameters: serializeAws_restJson1SnowflakeParameters(value, context),
        }),
        SparkParameters: (value) => ({ SparkParameters: serializeAws_restJson1SparkParameters(value, context) }),
        SqlServerParameters: (value) => ({
            SqlServerParameters: serializeAws_restJson1SqlServerParameters(value, context),
        }),
        TeradataParameters: (value) => ({ TeradataParameters: serializeAws_restJson1TeradataParameters(value, context) }),
        TwitterParameters: (value) => ({ TwitterParameters: serializeAws_restJson1TwitterParameters(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1DataSourceParametersList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataSourceParameters(entry, context);
    });
};
const serializeAws_restJson1DateTimeParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1TimestampList(input.Values, context) }),
    };
};
const serializeAws_restJson1DateTimeParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DateTimeParameter(entry, context);
    });
};
const serializeAws_restJson1DecimalParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1DoubleList(input.Values, context) }),
    };
};
const serializeAws_restJson1DecimalParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DecimalParameter(entry, context);
    });
};
const serializeAws_restJson1DoubleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ExportToCSVOption = (input, context) => {
    return {
        ...(input.AvailabilityStatus !== undefined &&
            input.AvailabilityStatus !== null && { AvailabilityStatus: input.AvailabilityStatus }),
    };
};
const serializeAws_restJson1FieldFolder = (input, context) => {
    return {
        ...(input.columns !== undefined &&
            input.columns !== null && { columns: serializeAws_restJson1FolderColumnList(input.columns, context) }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
    };
};
const serializeAws_restJson1FieldFolderMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1FieldFolder(value, context),
        };
    }, {});
};
const serializeAws_restJson1FilterOperation = (input, context) => {
    return {
        ...(input.ConditionExpression !== undefined &&
            input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression }),
    };
};
const serializeAws_restJson1FolderColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1GeoSpatialColumnGroup = (input, context) => {
    return {
        ...(input.Columns !== undefined &&
            input.Columns !== null && { Columns: serializeAws_restJson1ColumnList(input.Columns, context) }),
        ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_restJson1GutterStyle = (input, context) => {
    return {
        ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
    };
};
const serializeAws_restJson1IdentityMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1IdentityNameList(value, context),
        };
    }, {});
};
const serializeAws_restJson1IdentityNameList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1InputColumn = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1InputColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InputColumn(entry, context);
    });
};
const serializeAws_restJson1IntegerParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1LongList(input.Values, context) }),
    };
};
const serializeAws_restJson1IntegerParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IntegerParameter(entry, context);
    });
};
const serializeAws_restJson1JiraParameters = (input, context) => {
    return {
        ...(input.SiteBaseUrl !== undefined && input.SiteBaseUrl !== null && { SiteBaseUrl: input.SiteBaseUrl }),
    };
};
const serializeAws_restJson1JoinInstruction = (input, context) => {
    return {
        ...(input.LeftJoinKeyProperties !== undefined &&
            input.LeftJoinKeyProperties !== null && {
            LeftJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.LeftJoinKeyProperties, context),
        }),
        ...(input.LeftOperand !== undefined && input.LeftOperand !== null && { LeftOperand: input.LeftOperand }),
        ...(input.OnClause !== undefined && input.OnClause !== null && { OnClause: input.OnClause }),
        ...(input.RightJoinKeyProperties !== undefined &&
            input.RightJoinKeyProperties !== null && {
            RightJoinKeyProperties: serializeAws_restJson1JoinKeyProperties(input.RightJoinKeyProperties, context),
        }),
        ...(input.RightOperand !== undefined && input.RightOperand !== null && { RightOperand: input.RightOperand }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1JoinKeyProperties = (input, context) => {
    return {
        ...(input.UniqueKey !== undefined && input.UniqueKey !== null && { UniqueKey: input.UniqueKey }),
    };
};
const serializeAws_restJson1LogicalTable = (input, context) => {
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ...(input.DataTransforms !== undefined &&
            input.DataTransforms !== null && {
            DataTransforms: serializeAws_restJson1TransformOperationList(input.DataTransforms, context),
        }),
        ...(input.Source !== undefined &&
            input.Source !== null && { Source: serializeAws_restJson1LogicalTableSource(input.Source, context) }),
    };
};
const serializeAws_restJson1LogicalTableMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1LogicalTable(value, context),
        };
    }, {});
};
const serializeAws_restJson1LogicalTableSource = (input, context) => {
    return {
        ...(input.JoinInstruction !== undefined &&
            input.JoinInstruction !== null && {
            JoinInstruction: serializeAws_restJson1JoinInstruction(input.JoinInstruction, context),
        }),
        ...(input.PhysicalTableId !== undefined &&
            input.PhysicalTableId !== null && { PhysicalTableId: input.PhysicalTableId }),
    };
};
const serializeAws_restJson1LongList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ManifestFileLocation = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    };
};
const serializeAws_restJson1MarginStyle = (input, context) => {
    return {
        ...(input.Show !== undefined && input.Show !== null && { Show: input.Show }),
    };
};
const serializeAws_restJson1MariaDbParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1MySqlParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1OracleParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1_Parameters = (input, context) => {
    return {
        ...(input.DateTimeParameters !== undefined &&
            input.DateTimeParameters !== null && {
            DateTimeParameters: serializeAws_restJson1DateTimeParameterList(input.DateTimeParameters, context),
        }),
        ...(input.DecimalParameters !== undefined &&
            input.DecimalParameters !== null && {
            DecimalParameters: serializeAws_restJson1DecimalParameterList(input.DecimalParameters, context),
        }),
        ...(input.IntegerParameters !== undefined &&
            input.IntegerParameters !== null && {
            IntegerParameters: serializeAws_restJson1IntegerParameterList(input.IntegerParameters, context),
        }),
        ...(input.StringParameters !== undefined &&
            input.StringParameters !== null && {
            StringParameters: serializeAws_restJson1StringParameterList(input.StringParameters, context),
        }),
    };
};
const serializeAws_restJson1PhysicalTable = (input, context) => {
    return models_0_1.PhysicalTable.visit(input, {
        CustomSql: (value) => ({ CustomSql: serializeAws_restJson1CustomSql(value, context) }),
        RelationalTable: (value) => ({ RelationalTable: serializeAws_restJson1RelationalTable(value, context) }),
        S3Source: (value) => ({ S3Source: serializeAws_restJson1S3Source(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1PhysicalTableMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1PhysicalTable(value, context),
        };
    }, {});
};
const serializeAws_restJson1PostgreSqlParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1PrestoParameters = (input, context) => {
    return {
        ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1PrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ProjectedColumnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ProjectOperation = (input, context) => {
    return {
        ...(input.ProjectedColumns !== undefined &&
            input.ProjectedColumns !== null && {
            ProjectedColumns: serializeAws_restJson1ProjectedColumnList(input.ProjectedColumns, context),
        }),
    };
};
const serializeAws_restJson1RdsParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    };
};
const serializeAws_restJson1RedshiftParameters = (input, context) => {
    return {
        ...(input.ClusterId !== undefined && input.ClusterId !== null && { ClusterId: input.ClusterId }),
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1RelationalTable = (input, context) => {
    return {
        ...(input.Catalog !== undefined && input.Catalog !== null && { Catalog: input.Catalog }),
        ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
        ...(input.InputColumns !== undefined &&
            input.InputColumns !== null && {
            InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Schema !== undefined && input.Schema !== null && { Schema: input.Schema }),
    };
};
const serializeAws_restJson1RenameColumnOperation = (input, context) => {
    return {
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.NewColumnName !== undefined && input.NewColumnName !== null && { NewColumnName: input.NewColumnName }),
    };
};
const serializeAws_restJson1ResourcePermission = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_restJson1ActionList(input.Actions, context) }),
        ...(input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal }),
    };
};
const serializeAws_restJson1ResourcePermissionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ResourcePermission(entry, context);
    });
};
const serializeAws_restJson1RowLevelPermissionDataSet = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.FormatVersion !== undefined && input.FormatVersion !== null && { FormatVersion: input.FormatVersion }),
        ...(input.Namespace !== undefined && input.Namespace !== null && { Namespace: input.Namespace }),
        ...(input.PermissionPolicy !== undefined &&
            input.PermissionPolicy !== null && { PermissionPolicy: input.PermissionPolicy }),
    };
};
const serializeAws_restJson1S3Parameters = (input, context) => {
    return {
        ...(input.ManifestFileLocation !== undefined &&
            input.ManifestFileLocation !== null && {
            ManifestFileLocation: serializeAws_restJson1ManifestFileLocation(input.ManifestFileLocation, context),
        }),
    };
};
const serializeAws_restJson1S3Source = (input, context) => {
    return {
        ...(input.DataSourceArn !== undefined && input.DataSourceArn !== null && { DataSourceArn: input.DataSourceArn }),
        ...(input.InputColumns !== undefined &&
            input.InputColumns !== null && {
            InputColumns: serializeAws_restJson1InputColumnList(input.InputColumns, context),
        }),
        ...(input.UploadSettings !== undefined &&
            input.UploadSettings !== null && {
            UploadSettings: serializeAws_restJson1UploadSettings(input.UploadSettings, context),
        }),
    };
};
const serializeAws_restJson1ServiceNowParameters = (input, context) => {
    return {
        ...(input.SiteBaseUrl !== undefined && input.SiteBaseUrl !== null && { SiteBaseUrl: input.SiteBaseUrl }),
    };
};
const serializeAws_restJson1SheetControlsOption = (input, context) => {
    return {
        ...(input.VisibilityState !== undefined &&
            input.VisibilityState !== null && { VisibilityState: input.VisibilityState }),
    };
};
const serializeAws_restJson1SheetStyle = (input, context) => {
    return {
        ...(input.Tile !== undefined &&
            input.Tile !== null && { Tile: serializeAws_restJson1TileStyle(input.Tile, context) }),
        ...(input.TileLayout !== undefined &&
            input.TileLayout !== null && { TileLayout: serializeAws_restJson1TileLayoutStyle(input.TileLayout, context) }),
    };
};
const serializeAws_restJson1SnowflakeParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Warehouse !== undefined && input.Warehouse !== null && { Warehouse: input.Warehouse }),
    };
};
const serializeAws_restJson1SparkParameters = (input, context) => {
    return {
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1SqlServerParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1SslProperties = (input, context) => {
    return {
        ...(input.DisableSsl !== undefined && input.DisableSsl !== null && { DisableSsl: input.DisableSsl }),
    };
};
const serializeAws_restJson1StringList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StringParameter = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Values !== undefined &&
            input.Values !== null && { Values: serializeAws_restJson1StringList(input.Values, context) }),
    };
};
const serializeAws_restJson1StringParameterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1StringParameter(entry, context);
    });
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagColumnOperation = (input, context) => {
    return {
        ...(input.ColumnName !== undefined && input.ColumnName !== null && { ColumnName: input.ColumnName }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1ColumnTagList(input.Tags, context) }),
    };
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TemplateSourceAnalysis = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
        ...(input.DataSetReferences !== undefined &&
            input.DataSetReferences !== null && {
            DataSetReferences: serializeAws_restJson1DataSetReferenceList(input.DataSetReferences, context),
        }),
    };
};
const serializeAws_restJson1TemplateSourceEntity = (input, context) => {
    return {
        ...(input.SourceAnalysis !== undefined &&
            input.SourceAnalysis !== null && {
            SourceAnalysis: serializeAws_restJson1TemplateSourceAnalysis(input.SourceAnalysis, context),
        }),
        ...(input.SourceTemplate !== undefined &&
            input.SourceTemplate !== null && {
            SourceTemplate: serializeAws_restJson1TemplateSourceTemplate(input.SourceTemplate, context),
        }),
    };
};
const serializeAws_restJson1TemplateSourceTemplate = (input, context) => {
    return {
        ...(input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn }),
    };
};
const serializeAws_restJson1TeradataParameters = (input, context) => {
    return {
        ...(input.Database !== undefined && input.Database !== null && { Database: input.Database }),
        ...(input.Host !== undefined && input.Host !== null && { Host: input.Host }),
        ...(input.Port !== undefined && input.Port !== null && { Port: input.Port }),
    };
};
const serializeAws_restJson1ThemeConfiguration = (input, context) => {
    return {
        ...(input.DataColorPalette !== undefined &&
            input.DataColorPalette !== null && {
            DataColorPalette: serializeAws_restJson1DataColorPalette(input.DataColorPalette, context),
        }),
        ...(input.Sheet !== undefined &&
            input.Sheet !== null && { Sheet: serializeAws_restJson1SheetStyle(input.Sheet, context) }),
        ...(input.UIColorPalette !== undefined &&
            input.UIColorPalette !== null && {
            UIColorPalette: serializeAws_restJson1UIColorPalette(input.UIColorPalette, context),
        }),
    };
};
const serializeAws_restJson1TileLayoutStyle = (input, context) => {
    return {
        ...(input.Gutter !== undefined &&
            input.Gutter !== null && { Gutter: serializeAws_restJson1GutterStyle(input.Gutter, context) }),
        ...(input.Margin !== undefined &&
            input.Margin !== null && { Margin: serializeAws_restJson1MarginStyle(input.Margin, context) }),
    };
};
const serializeAws_restJson1TileStyle = (input, context) => {
    return {
        ...(input.Border !== undefined &&
            input.Border !== null && { Border: serializeAws_restJson1BorderStyle(input.Border, context) }),
    };
};
const serializeAws_restJson1TimestampList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return Math.round(entry.getTime() / 1000);
    });
};
const serializeAws_restJson1TransformOperation = (input, context) => {
    return models_0_1.TransformOperation.visit(input, {
        CastColumnTypeOperation: (value) => ({
            CastColumnTypeOperation: serializeAws_restJson1CastColumnTypeOperation(value, context),
        }),
        CreateColumnsOperation: (value) => ({
            CreateColumnsOperation: serializeAws_restJson1CreateColumnsOperation(value, context),
        }),
        FilterOperation: (value) => ({ FilterOperation: serializeAws_restJson1FilterOperation(value, context) }),
        ProjectOperation: (value) => ({ ProjectOperation: serializeAws_restJson1ProjectOperation(value, context) }),
        RenameColumnOperation: (value) => ({
            RenameColumnOperation: serializeAws_restJson1RenameColumnOperation(value, context),
        }),
        TagColumnOperation: (value) => ({ TagColumnOperation: serializeAws_restJson1TagColumnOperation(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1TransformOperationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TransformOperation(entry, context);
    });
};
const serializeAws_restJson1TwitterParameters = (input, context) => {
    return {
        ...(input.MaxRows !== undefined && input.MaxRows !== null && { MaxRows: input.MaxRows }),
        ...(input.Query !== undefined && input.Query !== null && { Query: input.Query }),
    };
};
const serializeAws_restJson1UIColorPalette = (input, context) => {
    return {
        ...(input.Accent !== undefined && input.Accent !== null && { Accent: input.Accent }),
        ...(input.AccentForeground !== undefined &&
            input.AccentForeground !== null && { AccentForeground: input.AccentForeground }),
        ...(input.Danger !== undefined && input.Danger !== null && { Danger: input.Danger }),
        ...(input.DangerForeground !== undefined &&
            input.DangerForeground !== null && { DangerForeground: input.DangerForeground }),
        ...(input.Dimension !== undefined && input.Dimension !== null && { Dimension: input.Dimension }),
        ...(input.DimensionForeground !== undefined &&
            input.DimensionForeground !== null && { DimensionForeground: input.DimensionForeground }),
        ...(input.Measure !== undefined && input.Measure !== null && { Measure: input.Measure }),
        ...(input.MeasureForeground !== undefined &&
            input.MeasureForeground !== null && { MeasureForeground: input.MeasureForeground }),
        ...(input.PrimaryBackground !== undefined &&
            input.PrimaryBackground !== null && { PrimaryBackground: input.PrimaryBackground }),
        ...(input.PrimaryForeground !== undefined &&
            input.PrimaryForeground !== null && { PrimaryForeground: input.PrimaryForeground }),
        ...(input.SecondaryBackground !== undefined &&
            input.SecondaryBackground !== null && { SecondaryBackground: input.SecondaryBackground }),
        ...(input.SecondaryForeground !== undefined &&
            input.SecondaryForeground !== null && { SecondaryForeground: input.SecondaryForeground }),
        ...(input.Success !== undefined && input.Success !== null && { Success: input.Success }),
        ...(input.SuccessForeground !== undefined &&
            input.SuccessForeground !== null && { SuccessForeground: input.SuccessForeground }),
        ...(input.Warning !== undefined && input.Warning !== null && { Warning: input.Warning }),
        ...(input.WarningForeground !== undefined &&
            input.WarningForeground !== null && { WarningForeground: input.WarningForeground }),
    };
};
const serializeAws_restJson1UpdateResourcePermissionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ResourcePermission(entry, context);
    });
};
const serializeAws_restJson1UploadSettings = (input, context) => {
    return {
        ...(input.ContainsHeader !== undefined &&
            input.ContainsHeader !== null && { ContainsHeader: input.ContainsHeader }),
        ...(input.Delimiter !== undefined && input.Delimiter !== null && { Delimiter: input.Delimiter }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.StartFromRow !== undefined && input.StartFromRow !== null && { StartFromRow: input.StartFromRow }),
        ...(input.TextQualifier !== undefined && input.TextQualifier !== null && { TextQualifier: input.TextQualifier }),
    };
};
const serializeAws_restJson1VpcConnectionProperties = (input, context) => {
    return {
        ...(input.VpcConnectionArn !== undefined &&
            input.VpcConnectionArn !== null && { VpcConnectionArn: input.VpcConnectionArn }),
    };
};
const deserializeAws_restJson1AccountCustomization = (output, context) => {
    return {
        DefaultTheme: output.DefaultTheme !== undefined && output.DefaultTheme !== null ? output.DefaultTheme : undefined,
    };
};
const deserializeAws_restJson1AccountSettings = (output, context) => {
    return {
        AccountName: output.AccountName !== undefined && output.AccountName !== null ? output.AccountName : undefined,
        DefaultNamespace: output.DefaultNamespace !== undefined && output.DefaultNamespace !== null ? output.DefaultNamespace : undefined,
        Edition: output.Edition !== undefined && output.Edition !== null ? output.Edition : undefined,
        NotificationEmail: output.NotificationEmail !== undefined && output.NotificationEmail !== null
            ? output.NotificationEmail
            : undefined,
    };
};
const deserializeAws_restJson1ActionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ActiveIAMPolicyAssignment = (output, context) => {
    return {
        AssignmentName: output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
const deserializeAws_restJson1ActiveIAMPolicyAssignmentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveIAMPolicyAssignment(entry, context);
    });
};
const deserializeAws_restJson1AmazonElasticsearchParameters = (output, context) => {
    return {
        Domain: output.Domain !== undefined && output.Domain !== null ? output.Domain : undefined,
    };
};
const deserializeAws_restJson1Analysis = (output, context) => {
    return {
        AnalysisId: output.AnalysisId !== undefined && output.AnalysisId !== null ? output.AnalysisId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSetArns: output.DataSetArns !== undefined && output.DataSetArns !== null
            ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context)
            : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1AnalysisErrorList(output.Errors, context)
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Sheets: output.Sheets !== undefined && output.Sheets !== null
            ? deserializeAws_restJson1SheetList(output.Sheets, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
    };
};
const deserializeAws_restJson1AnalysisError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1AnalysisErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisError(entry, context);
    });
};
const deserializeAws_restJson1AnalysisSummary = (output, context) => {
    return {
        AnalysisId: output.AnalysisId !== undefined && output.AnalysisId !== null ? output.AnalysisId : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1AnalysisSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AnalysisSummary(entry, context);
    });
};
const deserializeAws_restJson1AthenaParameters = (output, context) => {
    return {
        WorkGroup: output.WorkGroup !== undefined && output.WorkGroup !== null ? output.WorkGroup : undefined,
    };
};
const deserializeAws_restJson1AuroraParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1AuroraPostgreSqlParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1AwsIotAnalyticsParameters = (output, context) => {
    return {
        DataSetName: output.DataSetName !== undefined && output.DataSetName !== null ? output.DataSetName : undefined,
    };
};
const deserializeAws_restJson1BorderStyle = (output, context) => {
    return {
        Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
    };
};
const deserializeAws_restJson1CalculatedColumn = (output, context) => {
    return {
        ColumnId: output.ColumnId !== undefined && output.ColumnId !== null ? output.ColumnId : undefined,
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
    };
};
const deserializeAws_restJson1CalculatedColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CalculatedColumn(entry, context);
    });
};
const deserializeAws_restJson1CastColumnTypeOperation = (output, context) => {
    return {
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        NewColumnType: output.NewColumnType !== undefined && output.NewColumnType !== null ? output.NewColumnType : undefined,
    };
};
const deserializeAws_restJson1ColorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ColumnDescription = (output, context) => {
    return {
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
    };
};
const deserializeAws_restJson1ColumnGroup = (output, context) => {
    return {
        GeoSpatialColumnGroup: output.GeoSpatialColumnGroup !== undefined && output.GeoSpatialColumnGroup !== null
            ? deserializeAws_restJson1GeoSpatialColumnGroup(output.GeoSpatialColumnGroup, context)
            : undefined,
    };
};
const deserializeAws_restJson1ColumnGroupColumnSchema = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ColumnGroupColumnSchemaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnGroupColumnSchema(entry, context);
    });
};
const deserializeAws_restJson1ColumnGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnGroup(entry, context);
    });
};
const deserializeAws_restJson1ColumnGroupSchema = (output, context) => {
    return {
        ColumnGroupColumnSchemaList: output.ColumnGroupColumnSchemaList !== undefined && output.ColumnGroupColumnSchemaList !== null
            ? deserializeAws_restJson1ColumnGroupColumnSchemaList(output.ColumnGroupColumnSchemaList, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ColumnGroupSchemaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnGroupSchema(entry, context);
    });
};
const deserializeAws_restJson1ColumnLevelPermissionRule = (output, context) => {
    return {
        ColumnNames: output.ColumnNames !== undefined && output.ColumnNames !== null
            ? deserializeAws_restJson1ColumnNameList(output.ColumnNames, context)
            : undefined,
        Principals: output.Principals !== undefined && output.Principals !== null
            ? deserializeAws_restJson1PrincipalList(output.Principals, context)
            : undefined,
    };
};
const deserializeAws_restJson1ColumnLevelPermissionRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnLevelPermissionRule(entry, context);
    });
};
const deserializeAws_restJson1ColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ColumnNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ColumnSchema = (output, context) => {
    return {
        DataType: output.DataType !== undefined && output.DataType !== null ? output.DataType : undefined,
        GeographicRole: output.GeographicRole !== undefined && output.GeographicRole !== null ? output.GeographicRole : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ColumnSchemaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnSchema(entry, context);
    });
};
const deserializeAws_restJson1ColumnTag = (output, context) => {
    return {
        ColumnDescription: output.ColumnDescription !== undefined && output.ColumnDescription !== null
            ? deserializeAws_restJson1ColumnDescription(output.ColumnDescription, context)
            : undefined,
        ColumnGeographicRole: output.ColumnGeographicRole !== undefined && output.ColumnGeographicRole !== null
            ? output.ColumnGeographicRole
            : undefined,
    };
};
const deserializeAws_restJson1ColumnTagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ColumnTag(entry, context);
    });
};
const deserializeAws_restJson1CreateColumnsOperation = (output, context) => {
    return {
        Columns: output.Columns !== undefined && output.Columns !== null
            ? deserializeAws_restJson1CalculatedColumnList(output.Columns, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomSql = (output, context) => {
    return {
        Columns: output.Columns !== undefined && output.Columns !== null
            ? deserializeAws_restJson1InputColumnList(output.Columns, context)
            : undefined,
        DataSourceArn: output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SqlQuery: output.SqlQuery !== undefined && output.SqlQuery !== null ? output.SqlQuery : undefined,
    };
};
const deserializeAws_restJson1Dashboard = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DashboardId: output.DashboardId !== undefined && output.DashboardId !== null ? output.DashboardId : undefined,
        LastPublishedTime: output.LastPublishedTime !== undefined && output.LastPublishedTime !== null
            ? new Date(Math.round(output.LastPublishedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Version: output.Version !== undefined && output.Version !== null
            ? deserializeAws_restJson1DashboardVersion(output.Version, context)
            : undefined,
    };
};
const deserializeAws_restJson1DashboardError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1DashboardErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashboardError(entry, context);
    });
};
const deserializeAws_restJson1DashboardSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DashboardId: output.DashboardId !== undefined && output.DashboardId !== null ? output.DashboardId : undefined,
        LastPublishedTime: output.LastPublishedTime !== undefined && output.LastPublishedTime !== null
            ? new Date(Math.round(output.LastPublishedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PublishedVersionNumber: output.PublishedVersionNumber !== undefined && output.PublishedVersionNumber !== null
            ? output.PublishedVersionNumber
            : undefined,
    };
};
const deserializeAws_restJson1DashboardSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashboardSummary(entry, context);
    });
};
const deserializeAws_restJson1DashboardVersion = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSetArns: output.DataSetArns !== undefined && output.DataSetArns !== null
            ? deserializeAws_restJson1DataSetArnsList(output.DataSetArns, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1DashboardErrorList(output.Errors, context)
            : undefined,
        Sheets: output.Sheets !== undefined && output.Sheets !== null
            ? deserializeAws_restJson1SheetList(output.Sheets, context)
            : undefined,
        SourceEntityArn: output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1DashboardVersionSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        SourceEntityArn: output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1DashboardVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DashboardVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1DataColorPalette = (output, context) => {
    return {
        Colors: output.Colors !== undefined && output.Colors !== null
            ? deserializeAws_restJson1ColorList(output.Colors, context)
            : undefined,
        EmptyFillColor: output.EmptyFillColor !== undefined && output.EmptyFillColor !== null ? output.EmptyFillColor : undefined,
        MinMaxGradient: output.MinMaxGradient !== undefined && output.MinMaxGradient !== null
            ? deserializeAws_restJson1ColorList(output.MinMaxGradient, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSet = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ColumnGroups: output.ColumnGroups !== undefined && output.ColumnGroups !== null
            ? deserializeAws_restJson1ColumnGroupList(output.ColumnGroups, context)
            : undefined,
        ColumnLevelPermissionRules: output.ColumnLevelPermissionRules !== undefined && output.ColumnLevelPermissionRules !== null
            ? deserializeAws_restJson1ColumnLevelPermissionRuleList(output.ColumnLevelPermissionRules, context)
            : undefined,
        ConsumedSpiceCapacityInBytes: output.ConsumedSpiceCapacityInBytes !== undefined && output.ConsumedSpiceCapacityInBytes !== null
            ? output.ConsumedSpiceCapacityInBytes
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        FieldFolders: output.FieldFolders !== undefined && output.FieldFolders !== null
            ? deserializeAws_restJson1FieldFolderMap(output.FieldFolders, context)
            : undefined,
        ImportMode: output.ImportMode !== undefined && output.ImportMode !== null ? output.ImportMode : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        LogicalTableMap: output.LogicalTableMap !== undefined && output.LogicalTableMap !== null
            ? deserializeAws_restJson1LogicalTableMap(output.LogicalTableMap, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OutputColumns: output.OutputColumns !== undefined && output.OutputColumns !== null
            ? deserializeAws_restJson1OutputColumnList(output.OutputColumns, context)
            : undefined,
        PhysicalTableMap: output.PhysicalTableMap !== undefined && output.PhysicalTableMap !== null
            ? deserializeAws_restJson1PhysicalTableMap(output.PhysicalTableMap, context)
            : undefined,
        RowLevelPermissionDataSet: output.RowLevelPermissionDataSet !== undefined && output.RowLevelPermissionDataSet !== null
            ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSetArnsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DataSetConfiguration = (output, context) => {
    return {
        ColumnGroupSchemaList: output.ColumnGroupSchemaList !== undefined && output.ColumnGroupSchemaList !== null
            ? deserializeAws_restJson1ColumnGroupSchemaList(output.ColumnGroupSchemaList, context)
            : undefined,
        DataSetSchema: output.DataSetSchema !== undefined && output.DataSetSchema !== null
            ? deserializeAws_restJson1DataSetSchema(output.DataSetSchema, context)
            : undefined,
        Placeholder: output.Placeholder !== undefined && output.Placeholder !== null ? output.Placeholder : undefined,
    };
};
const deserializeAws_restJson1DataSetConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSetConfiguration(entry, context);
    });
};
const deserializeAws_restJson1DataSetSchema = (output, context) => {
    return {
        ColumnSchemaList: output.ColumnSchemaList !== undefined && output.ColumnSchemaList !== null
            ? deserializeAws_restJson1ColumnSchemaList(output.ColumnSchemaList, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSetSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ColumnLevelPermissionRulesApplied: output.ColumnLevelPermissionRulesApplied !== undefined && output.ColumnLevelPermissionRulesApplied !== null
            ? output.ColumnLevelPermissionRulesApplied
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        ImportMode: output.ImportMode !== undefined && output.ImportMode !== null ? output.ImportMode : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RowLevelPermissionDataSet: output.RowLevelPermissionDataSet !== undefined && output.RowLevelPermissionDataSet !== null
            ? deserializeAws_restJson1RowLevelPermissionDataSet(output.RowLevelPermissionDataSet, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSetSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSetSummary(entry, context);
    });
};
const deserializeAws_restJson1DataSource = (output, context) => {
    return {
        AlternateDataSourceParameters: output.AlternateDataSourceParameters !== undefined && output.AlternateDataSourceParameters !== null
            ? deserializeAws_restJson1DataSourceParametersList(output.AlternateDataSourceParameters, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSourceId: output.DataSourceId !== undefined && output.DataSourceId !== null ? output.DataSourceId : undefined,
        DataSourceParameters: output.DataSourceParameters !== undefined && output.DataSourceParameters !== null
            ? deserializeAws_restJson1DataSourceParameters(output.DataSourceParameters, context)
            : undefined,
        ErrorInfo: output.ErrorInfo !== undefined && output.ErrorInfo !== null
            ? deserializeAws_restJson1DataSourceErrorInfo(output.ErrorInfo, context)
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SslProperties: output.SslProperties !== undefined && output.SslProperties !== null
            ? deserializeAws_restJson1SslProperties(output.SslProperties, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VpcConnectionProperties: output.VpcConnectionProperties !== undefined && output.VpcConnectionProperties !== null
            ? deserializeAws_restJson1VpcConnectionProperties(output.VpcConnectionProperties, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataSourceErrorInfo = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1DataSourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSource(entry, context);
    });
};
const deserializeAws_restJson1DataSourceParameters = (output, context) => {
    if (output.AmazonElasticsearchParameters !== undefined && output.AmazonElasticsearchParameters !== null) {
        return {
            AmazonElasticsearchParameters: deserializeAws_restJson1AmazonElasticsearchParameters(output.AmazonElasticsearchParameters, context),
        };
    }
    if (output.AthenaParameters !== undefined && output.AthenaParameters !== null) {
        return {
            AthenaParameters: deserializeAws_restJson1AthenaParameters(output.AthenaParameters, context),
        };
    }
    if (output.AuroraParameters !== undefined && output.AuroraParameters !== null) {
        return {
            AuroraParameters: deserializeAws_restJson1AuroraParameters(output.AuroraParameters, context),
        };
    }
    if (output.AuroraPostgreSqlParameters !== undefined && output.AuroraPostgreSqlParameters !== null) {
        return {
            AuroraPostgreSqlParameters: deserializeAws_restJson1AuroraPostgreSqlParameters(output.AuroraPostgreSqlParameters, context),
        };
    }
    if (output.AwsIotAnalyticsParameters !== undefined && output.AwsIotAnalyticsParameters !== null) {
        return {
            AwsIotAnalyticsParameters: deserializeAws_restJson1AwsIotAnalyticsParameters(output.AwsIotAnalyticsParameters, context),
        };
    }
    if (output.JiraParameters !== undefined && output.JiraParameters !== null) {
        return {
            JiraParameters: deserializeAws_restJson1JiraParameters(output.JiraParameters, context),
        };
    }
    if (output.MariaDbParameters !== undefined && output.MariaDbParameters !== null) {
        return {
            MariaDbParameters: deserializeAws_restJson1MariaDbParameters(output.MariaDbParameters, context),
        };
    }
    if (output.MySqlParameters !== undefined && output.MySqlParameters !== null) {
        return {
            MySqlParameters: deserializeAws_restJson1MySqlParameters(output.MySqlParameters, context),
        };
    }
    if (output.OracleParameters !== undefined && output.OracleParameters !== null) {
        return {
            OracleParameters: deserializeAws_restJson1OracleParameters(output.OracleParameters, context),
        };
    }
    if (output.PostgreSqlParameters !== undefined && output.PostgreSqlParameters !== null) {
        return {
            PostgreSqlParameters: deserializeAws_restJson1PostgreSqlParameters(output.PostgreSqlParameters, context),
        };
    }
    if (output.PrestoParameters !== undefined && output.PrestoParameters !== null) {
        return {
            PrestoParameters: deserializeAws_restJson1PrestoParameters(output.PrestoParameters, context),
        };
    }
    if (output.RdsParameters !== undefined && output.RdsParameters !== null) {
        return {
            RdsParameters: deserializeAws_restJson1RdsParameters(output.RdsParameters, context),
        };
    }
    if (output.RedshiftParameters !== undefined && output.RedshiftParameters !== null) {
        return {
            RedshiftParameters: deserializeAws_restJson1RedshiftParameters(output.RedshiftParameters, context),
        };
    }
    if (output.S3Parameters !== undefined && output.S3Parameters !== null) {
        return {
            S3Parameters: deserializeAws_restJson1S3Parameters(output.S3Parameters, context),
        };
    }
    if (output.ServiceNowParameters !== undefined && output.ServiceNowParameters !== null) {
        return {
            ServiceNowParameters: deserializeAws_restJson1ServiceNowParameters(output.ServiceNowParameters, context),
        };
    }
    if (output.SnowflakeParameters !== undefined && output.SnowflakeParameters !== null) {
        return {
            SnowflakeParameters: deserializeAws_restJson1SnowflakeParameters(output.SnowflakeParameters, context),
        };
    }
    if (output.SparkParameters !== undefined && output.SparkParameters !== null) {
        return {
            SparkParameters: deserializeAws_restJson1SparkParameters(output.SparkParameters, context),
        };
    }
    if (output.SqlServerParameters !== undefined && output.SqlServerParameters !== null) {
        return {
            SqlServerParameters: deserializeAws_restJson1SqlServerParameters(output.SqlServerParameters, context),
        };
    }
    if (output.TeradataParameters !== undefined && output.TeradataParameters !== null) {
        return {
            TeradataParameters: deserializeAws_restJson1TeradataParameters(output.TeradataParameters, context),
        };
    }
    if (output.TwitterParameters !== undefined && output.TwitterParameters !== null) {
        return {
            TwitterParameters: deserializeAws_restJson1TwitterParameters(output.TwitterParameters, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1DataSourceParametersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSourceParameters(entry, context);
    });
};
const deserializeAws_restJson1ErrorInfo = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1FieldFolder = (output, context) => {
    return {
        columns: output.columns !== undefined && output.columns !== null
            ? deserializeAws_restJson1FolderColumnList(output.columns, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
    };
};
const deserializeAws_restJson1FieldFolderMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1FieldFolder(value, context),
        };
    }, {});
};
const deserializeAws_restJson1FilterOperation = (output, context) => {
    return {
        ConditionExpression: output.ConditionExpression !== undefined && output.ConditionExpression !== null
            ? output.ConditionExpression
            : undefined,
    };
};
const deserializeAws_restJson1FolderColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1GeoSpatialColumnGroup = (output, context) => {
    return {
        Columns: output.Columns !== undefined && output.Columns !== null
            ? deserializeAws_restJson1ColumnList(output.Columns, context)
            : undefined,
        CountryCode: output.CountryCode !== undefined && output.CountryCode !== null ? output.CountryCode : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1Group = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        GroupName: output.GroupName !== undefined && output.GroupName !== null ? output.GroupName : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
    };
};
const deserializeAws_restJson1GroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Group(entry, context);
    });
};
const deserializeAws_restJson1GroupMember = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        MemberName: output.MemberName !== undefined && output.MemberName !== null ? output.MemberName : undefined,
    };
};
const deserializeAws_restJson1GroupMemberList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupMember(entry, context);
    });
};
const deserializeAws_restJson1GutterStyle = (output, context) => {
    return {
        Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
    };
};
const deserializeAws_restJson1IAMPolicyAssignment = (output, context) => {
    return {
        AssignmentId: output.AssignmentId !== undefined && output.AssignmentId !== null ? output.AssignmentId : undefined,
        AssignmentName: output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
        AssignmentStatus: output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
        AwsAccountId: output.AwsAccountId !== undefined && output.AwsAccountId !== null ? output.AwsAccountId : undefined,
        Identities: output.Identities !== undefined && output.Identities !== null
            ? deserializeAws_restJson1IdentityMap(output.Identities, context)
            : undefined,
        PolicyArn: output.PolicyArn !== undefined && output.PolicyArn !== null ? output.PolicyArn : undefined,
    };
};
const deserializeAws_restJson1IAMPolicyAssignmentSummary = (output, context) => {
    return {
        AssignmentName: output.AssignmentName !== undefined && output.AssignmentName !== null ? output.AssignmentName : undefined,
        AssignmentStatus: output.AssignmentStatus !== undefined && output.AssignmentStatus !== null ? output.AssignmentStatus : undefined,
    };
};
const deserializeAws_restJson1IAMPolicyAssignmentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IAMPolicyAssignmentSummary(entry, context);
    });
};
const deserializeAws_restJson1IdentityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1IdentityNameList(value, context),
        };
    }, {});
};
const deserializeAws_restJson1IdentityNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Ingestion = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        ErrorInfo: output.ErrorInfo !== undefined && output.ErrorInfo !== null
            ? deserializeAws_restJson1ErrorInfo(output.ErrorInfo, context)
            : undefined,
        IngestionId: output.IngestionId !== undefined && output.IngestionId !== null ? output.IngestionId : undefined,
        IngestionSizeInBytes: output.IngestionSizeInBytes !== undefined && output.IngestionSizeInBytes !== null
            ? output.IngestionSizeInBytes
            : undefined,
        IngestionStatus: output.IngestionStatus !== undefined && output.IngestionStatus !== null ? output.IngestionStatus : undefined,
        IngestionTimeInSeconds: output.IngestionTimeInSeconds !== undefined && output.IngestionTimeInSeconds !== null
            ? output.IngestionTimeInSeconds
            : undefined,
        QueueInfo: output.QueueInfo !== undefined && output.QueueInfo !== null
            ? deserializeAws_restJson1QueueInfo(output.QueueInfo, context)
            : undefined,
        RequestSource: output.RequestSource !== undefined && output.RequestSource !== null ? output.RequestSource : undefined,
        RequestType: output.RequestType !== undefined && output.RequestType !== null ? output.RequestType : undefined,
        RowInfo: output.RowInfo !== undefined && output.RowInfo !== null
            ? deserializeAws_restJson1RowInfo(output.RowInfo, context)
            : undefined,
    };
};
const deserializeAws_restJson1Ingestions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Ingestion(entry, context);
    });
};
const deserializeAws_restJson1InputColumn = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1InputColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InputColumn(entry, context);
    });
};
const deserializeAws_restJson1JiraParameters = (output, context) => {
    return {
        SiteBaseUrl: output.SiteBaseUrl !== undefined && output.SiteBaseUrl !== null ? output.SiteBaseUrl : undefined,
    };
};
const deserializeAws_restJson1JoinInstruction = (output, context) => {
    return {
        LeftJoinKeyProperties: output.LeftJoinKeyProperties !== undefined && output.LeftJoinKeyProperties !== null
            ? deserializeAws_restJson1JoinKeyProperties(output.LeftJoinKeyProperties, context)
            : undefined,
        LeftOperand: output.LeftOperand !== undefined && output.LeftOperand !== null ? output.LeftOperand : undefined,
        OnClause: output.OnClause !== undefined && output.OnClause !== null ? output.OnClause : undefined,
        RightJoinKeyProperties: output.RightJoinKeyProperties !== undefined && output.RightJoinKeyProperties !== null
            ? deserializeAws_restJson1JoinKeyProperties(output.RightJoinKeyProperties, context)
            : undefined,
        RightOperand: output.RightOperand !== undefined && output.RightOperand !== null ? output.RightOperand : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1JoinKeyProperties = (output, context) => {
    return {
        UniqueKey: output.UniqueKey !== undefined && output.UniqueKey !== null ? output.UniqueKey : undefined,
    };
};
const deserializeAws_restJson1LogicalTable = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        DataTransforms: output.DataTransforms !== undefined && output.DataTransforms !== null
            ? deserializeAws_restJson1TransformOperationList(output.DataTransforms, context)
            : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_restJson1LogicalTableSource(output.Source, context)
            : undefined,
    };
};
const deserializeAws_restJson1LogicalTableMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1LogicalTable(value, context),
        };
    }, {});
};
const deserializeAws_restJson1LogicalTableSource = (output, context) => {
    return {
        JoinInstruction: output.JoinInstruction !== undefined && output.JoinInstruction !== null
            ? deserializeAws_restJson1JoinInstruction(output.JoinInstruction, context)
            : undefined,
        PhysicalTableId: output.PhysicalTableId !== undefined && output.PhysicalTableId !== null ? output.PhysicalTableId : undefined,
    };
};
const deserializeAws_restJson1ManifestFileLocation = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1MarginStyle = (output, context) => {
    return {
        Show: output.Show !== undefined && output.Show !== null ? output.Show : undefined,
    };
};
const deserializeAws_restJson1MariaDbParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1MySqlParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1NamespaceError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1NamespaceInfoV2 = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CapacityRegion: output.CapacityRegion !== undefined && output.CapacityRegion !== null ? output.CapacityRegion : undefined,
        CreationStatus: output.CreationStatus !== undefined && output.CreationStatus !== null ? output.CreationStatus : undefined,
        IdentityStore: output.IdentityStore !== undefined && output.IdentityStore !== null ? output.IdentityStore : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NamespaceError: output.NamespaceError !== undefined && output.NamespaceError !== null
            ? deserializeAws_restJson1NamespaceError(output.NamespaceError, context)
            : undefined,
    };
};
const deserializeAws_restJson1Namespaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NamespaceInfoV2(entry, context);
    });
};
const deserializeAws_restJson1OracleParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1OutputColumn = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1OutputColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1OutputColumn(entry, context);
    });
};
const deserializeAws_restJson1PhysicalTable = (output, context) => {
    if (output.CustomSql !== undefined && output.CustomSql !== null) {
        return {
            CustomSql: deserializeAws_restJson1CustomSql(output.CustomSql, context),
        };
    }
    if (output.RelationalTable !== undefined && output.RelationalTable !== null) {
        return {
            RelationalTable: deserializeAws_restJson1RelationalTable(output.RelationalTable, context),
        };
    }
    if (output.S3Source !== undefined && output.S3Source !== null) {
        return {
            S3Source: deserializeAws_restJson1S3Source(output.S3Source, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1PhysicalTableMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1PhysicalTable(value, context),
        };
    }, {});
};
const deserializeAws_restJson1PostgreSqlParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1PrestoParameters = (output, context) => {
    return {
        Catalog: output.Catalog !== undefined && output.Catalog !== null ? output.Catalog : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1PrincipalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ProjectedColumnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ProjectOperation = (output, context) => {
    return {
        ProjectedColumns: output.ProjectedColumns !== undefined && output.ProjectedColumns !== null
            ? deserializeAws_restJson1ProjectedColumnList(output.ProjectedColumns, context)
            : undefined,
    };
};
const deserializeAws_restJson1QueueInfo = (output, context) => {
    return {
        QueuedIngestion: output.QueuedIngestion !== undefined && output.QueuedIngestion !== null ? output.QueuedIngestion : undefined,
        WaitingOnIngestion: output.WaitingOnIngestion !== undefined && output.WaitingOnIngestion !== null
            ? output.WaitingOnIngestion
            : undefined,
    };
};
const deserializeAws_restJson1RdsParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        InstanceId: output.InstanceId !== undefined && output.InstanceId !== null ? output.InstanceId : undefined,
    };
};
const deserializeAws_restJson1RedshiftParameters = (output, context) => {
    return {
        ClusterId: output.ClusterId !== undefined && output.ClusterId !== null ? output.ClusterId : undefined,
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1RelationalTable = (output, context) => {
    return {
        Catalog: output.Catalog !== undefined && output.Catalog !== null ? output.Catalog : undefined,
        DataSourceArn: output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
        InputColumns: output.InputColumns !== undefined && output.InputColumns !== null
            ? deserializeAws_restJson1InputColumnList(output.InputColumns, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Schema: output.Schema !== undefined && output.Schema !== null ? output.Schema : undefined,
    };
};
const deserializeAws_restJson1RenameColumnOperation = (output, context) => {
    return {
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        NewColumnName: output.NewColumnName !== undefined && output.NewColumnName !== null ? output.NewColumnName : undefined,
    };
};
const deserializeAws_restJson1ResourcePermission = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_restJson1ActionList(output.Actions, context)
            : undefined,
        Principal: output.Principal !== undefined && output.Principal !== null ? output.Principal : undefined,
    };
};
const deserializeAws_restJson1ResourcePermissionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourcePermission(entry, context);
    });
};
const deserializeAws_restJson1RowInfo = (output, context) => {
    return {
        RowsDropped: output.RowsDropped !== undefined && output.RowsDropped !== null ? output.RowsDropped : undefined,
        RowsIngested: output.RowsIngested !== undefined && output.RowsIngested !== null ? output.RowsIngested : undefined,
    };
};
const deserializeAws_restJson1RowLevelPermissionDataSet = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        FormatVersion: output.FormatVersion !== undefined && output.FormatVersion !== null ? output.FormatVersion : undefined,
        Namespace: output.Namespace !== undefined && output.Namespace !== null ? output.Namespace : undefined,
        PermissionPolicy: output.PermissionPolicy !== undefined && output.PermissionPolicy !== null ? output.PermissionPolicy : undefined,
    };
};
const deserializeAws_restJson1S3Parameters = (output, context) => {
    return {
        ManifestFileLocation: output.ManifestFileLocation !== undefined && output.ManifestFileLocation !== null
            ? deserializeAws_restJson1ManifestFileLocation(output.ManifestFileLocation, context)
            : undefined,
    };
};
const deserializeAws_restJson1S3Source = (output, context) => {
    return {
        DataSourceArn: output.DataSourceArn !== undefined && output.DataSourceArn !== null ? output.DataSourceArn : undefined,
        InputColumns: output.InputColumns !== undefined && output.InputColumns !== null
            ? deserializeAws_restJson1InputColumnList(output.InputColumns, context)
            : undefined,
        UploadSettings: output.UploadSettings !== undefined && output.UploadSettings !== null
            ? deserializeAws_restJson1UploadSettings(output.UploadSettings, context)
            : undefined,
    };
};
const deserializeAws_restJson1ServiceNowParameters = (output, context) => {
    return {
        SiteBaseUrl: output.SiteBaseUrl !== undefined && output.SiteBaseUrl !== null ? output.SiteBaseUrl : undefined,
    };
};
const deserializeAws_restJson1Sheet = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        SheetId: output.SheetId !== undefined && output.SheetId !== null ? output.SheetId : undefined,
    };
};
const deserializeAws_restJson1SheetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Sheet(entry, context);
    });
};
const deserializeAws_restJson1SheetStyle = (output, context) => {
    return {
        Tile: output.Tile !== undefined && output.Tile !== null
            ? deserializeAws_restJson1TileStyle(output.Tile, context)
            : undefined,
        TileLayout: output.TileLayout !== undefined && output.TileLayout !== null
            ? deserializeAws_restJson1TileLayoutStyle(output.TileLayout, context)
            : undefined,
    };
};
const deserializeAws_restJson1SnowflakeParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Warehouse: output.Warehouse !== undefined && output.Warehouse !== null ? output.Warehouse : undefined,
    };
};
const deserializeAws_restJson1SparkParameters = (output, context) => {
    return {
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1SqlServerParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1SslProperties = (output, context) => {
    return {
        DisableSsl: output.DisableSsl !== undefined && output.DisableSsl !== null ? output.DisableSsl : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1TagColumnOperation = (output, context) => {
    return {
        ColumnName: output.ColumnName !== undefined && output.ColumnName !== null ? output.ColumnName : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1ColumnTagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1Template = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
        Version: output.Version !== undefined && output.Version !== null
            ? deserializeAws_restJson1TemplateVersion(output.Version, context)
            : undefined,
    };
};
const deserializeAws_restJson1TemplateAlias = (output, context) => {
    return {
        AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        TemplateVersionNumber: output.TemplateVersionNumber !== undefined && output.TemplateVersionNumber !== null
            ? output.TemplateVersionNumber
            : undefined,
    };
};
const deserializeAws_restJson1TemplateAliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateAlias(entry, context);
    });
};
const deserializeAws_restJson1TemplateError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1TemplateErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateError(entry, context);
    });
};
const deserializeAws_restJson1TemplateSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        LatestVersionNumber: output.LatestVersionNumber !== undefined && output.LatestVersionNumber !== null
            ? output.LatestVersionNumber
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TemplateId: output.TemplateId !== undefined && output.TemplateId !== null ? output.TemplateId : undefined,
    };
};
const deserializeAws_restJson1TemplateSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateSummary(entry, context);
    });
};
const deserializeAws_restJson1TemplateVersion = (output, context) => {
    return {
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        DataSetConfigurations: output.DataSetConfigurations !== undefined && output.DataSetConfigurations !== null
            ? deserializeAws_restJson1DataSetConfigurationList(output.DataSetConfigurations, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1TemplateErrorList(output.Errors, context)
            : undefined,
        Sheets: output.Sheets !== undefined && output.Sheets !== null
            ? deserializeAws_restJson1SheetList(output.Sheets, context)
            : undefined,
        SourceEntityArn: output.SourceEntityArn !== undefined && output.SourceEntityArn !== null ? output.SourceEntityArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        ThemeArn: output.ThemeArn !== undefined && output.ThemeArn !== null ? output.ThemeArn : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1TemplateVersionSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1TemplateVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1TeradataParameters = (output, context) => {
    return {
        Database: output.Database !== undefined && output.Database !== null ? output.Database : undefined,
        Host: output.Host !== undefined && output.Host !== null ? output.Host : undefined,
        Port: output.Port !== undefined && output.Port !== null ? output.Port : undefined,
    };
};
const deserializeAws_restJson1Theme = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ThemeId: output.ThemeId !== undefined && output.ThemeId !== null ? output.ThemeId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Version: output.Version !== undefined && output.Version !== null
            ? deserializeAws_restJson1ThemeVersion(output.Version, context)
            : undefined,
    };
};
const deserializeAws_restJson1ThemeAlias = (output, context) => {
    return {
        AliasName: output.AliasName !== undefined && output.AliasName !== null ? output.AliasName : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ThemeVersionNumber: output.ThemeVersionNumber !== undefined && output.ThemeVersionNumber !== null
            ? output.ThemeVersionNumber
            : undefined,
    };
};
const deserializeAws_restJson1ThemeAliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThemeAlias(entry, context);
    });
};
const deserializeAws_restJson1ThemeConfiguration = (output, context) => {
    return {
        DataColorPalette: output.DataColorPalette !== undefined && output.DataColorPalette !== null
            ? deserializeAws_restJson1DataColorPalette(output.DataColorPalette, context)
            : undefined,
        Sheet: output.Sheet !== undefined && output.Sheet !== null
            ? deserializeAws_restJson1SheetStyle(output.Sheet, context)
            : undefined,
        UIColorPalette: output.UIColorPalette !== undefined && output.UIColorPalette !== null
            ? deserializeAws_restJson1UIColorPalette(output.UIColorPalette, context)
            : undefined,
    };
};
const deserializeAws_restJson1ThemeError = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ThemeErrorList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThemeError(entry, context);
    });
};
const deserializeAws_restJson1ThemeSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        LatestVersionNumber: output.LatestVersionNumber !== undefined && output.LatestVersionNumber !== null
            ? output.LatestVersionNumber
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ThemeId: output.ThemeId !== undefined && output.ThemeId !== null ? output.ThemeId : undefined,
    };
};
const deserializeAws_restJson1ThemeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThemeSummary(entry, context);
    });
};
const deserializeAws_restJson1ThemeVersion = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        BaseThemeId: output.BaseThemeId !== undefined && output.BaseThemeId !== null ? output.BaseThemeId : undefined,
        Configuration: output.Configuration !== undefined && output.Configuration !== null
            ? deserializeAws_restJson1ThemeConfiguration(output.Configuration, context)
            : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1ThemeErrorList(output.Errors, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1ThemeVersionSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedTime: output.CreatedTime !== undefined && output.CreatedTime !== null
            ? new Date(Math.round(output.CreatedTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        VersionNumber: output.VersionNumber !== undefined && output.VersionNumber !== null ? output.VersionNumber : undefined,
    };
};
const deserializeAws_restJson1ThemeVersionSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ThemeVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1TileLayoutStyle = (output, context) => {
    return {
        Gutter: output.Gutter !== undefined && output.Gutter !== null
            ? deserializeAws_restJson1GutterStyle(output.Gutter, context)
            : undefined,
        Margin: output.Margin !== undefined && output.Margin !== null
            ? deserializeAws_restJson1MarginStyle(output.Margin, context)
            : undefined,
    };
};
const deserializeAws_restJson1TileStyle = (output, context) => {
    return {
        Border: output.Border !== undefined && output.Border !== null
            ? deserializeAws_restJson1BorderStyle(output.Border, context)
            : undefined,
    };
};
const deserializeAws_restJson1TransformOperation = (output, context) => {
    if (output.CastColumnTypeOperation !== undefined && output.CastColumnTypeOperation !== null) {
        return {
            CastColumnTypeOperation: deserializeAws_restJson1CastColumnTypeOperation(output.CastColumnTypeOperation, context),
        };
    }
    if (output.CreateColumnsOperation !== undefined && output.CreateColumnsOperation !== null) {
        return {
            CreateColumnsOperation: deserializeAws_restJson1CreateColumnsOperation(output.CreateColumnsOperation, context),
        };
    }
    if (output.FilterOperation !== undefined && output.FilterOperation !== null) {
        return {
            FilterOperation: deserializeAws_restJson1FilterOperation(output.FilterOperation, context),
        };
    }
    if (output.ProjectOperation !== undefined && output.ProjectOperation !== null) {
        return {
            ProjectOperation: deserializeAws_restJson1ProjectOperation(output.ProjectOperation, context),
        };
    }
    if (output.RenameColumnOperation !== undefined && output.RenameColumnOperation !== null) {
        return {
            RenameColumnOperation: deserializeAws_restJson1RenameColumnOperation(output.RenameColumnOperation, context),
        };
    }
    if (output.TagColumnOperation !== undefined && output.TagColumnOperation !== null) {
        return {
            TagColumnOperation: deserializeAws_restJson1TagColumnOperation(output.TagColumnOperation, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1TransformOperationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TransformOperation(entry, context);
    });
};
const deserializeAws_restJson1TwitterParameters = (output, context) => {
    return {
        MaxRows: output.MaxRows !== undefined && output.MaxRows !== null ? output.MaxRows : undefined,
        Query: output.Query !== undefined && output.Query !== null ? output.Query : undefined,
    };
};
const deserializeAws_restJson1UIColorPalette = (output, context) => {
    return {
        Accent: output.Accent !== undefined && output.Accent !== null ? output.Accent : undefined,
        AccentForeground: output.AccentForeground !== undefined && output.AccentForeground !== null ? output.AccentForeground : undefined,
        Danger: output.Danger !== undefined && output.Danger !== null ? output.Danger : undefined,
        DangerForeground: output.DangerForeground !== undefined && output.DangerForeground !== null ? output.DangerForeground : undefined,
        Dimension: output.Dimension !== undefined && output.Dimension !== null ? output.Dimension : undefined,
        DimensionForeground: output.DimensionForeground !== undefined && output.DimensionForeground !== null
            ? output.DimensionForeground
            : undefined,
        Measure: output.Measure !== undefined && output.Measure !== null ? output.Measure : undefined,
        MeasureForeground: output.MeasureForeground !== undefined && output.MeasureForeground !== null
            ? output.MeasureForeground
            : undefined,
        PrimaryBackground: output.PrimaryBackground !== undefined && output.PrimaryBackground !== null
            ? output.PrimaryBackground
            : undefined,
        PrimaryForeground: output.PrimaryForeground !== undefined && output.PrimaryForeground !== null
            ? output.PrimaryForeground
            : undefined,
        SecondaryBackground: output.SecondaryBackground !== undefined && output.SecondaryBackground !== null
            ? output.SecondaryBackground
            : undefined,
        SecondaryForeground: output.SecondaryForeground !== undefined && output.SecondaryForeground !== null
            ? output.SecondaryForeground
            : undefined,
        Success: output.Success !== undefined && output.Success !== null ? output.Success : undefined,
        SuccessForeground: output.SuccessForeground !== undefined && output.SuccessForeground !== null
            ? output.SuccessForeground
            : undefined,
        Warning: output.Warning !== undefined && output.Warning !== null ? output.Warning : undefined,
        WarningForeground: output.WarningForeground !== undefined && output.WarningForeground !== null
            ? output.WarningForeground
            : undefined,
    };
};
const deserializeAws_restJson1UploadSettings = (output, context) => {
    return {
        ContainsHeader: output.ContainsHeader !== undefined && output.ContainsHeader !== null ? output.ContainsHeader : undefined,
        Delimiter: output.Delimiter !== undefined && output.Delimiter !== null ? output.Delimiter : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        StartFromRow: output.StartFromRow !== undefined && output.StartFromRow !== null ? output.StartFromRow : undefined,
        TextQualifier: output.TextQualifier !== undefined && output.TextQualifier !== null ? output.TextQualifier : undefined,
    };
};
const deserializeAws_restJson1User = (output, context) => {
    return {
        Active: output.Active !== undefined && output.Active !== null ? output.Active : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CustomPermissionsName: output.CustomPermissionsName !== undefined && output.CustomPermissionsName !== null
            ? output.CustomPermissionsName
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        ExternalLoginFederationProviderType: output.ExternalLoginFederationProviderType !== undefined && output.ExternalLoginFederationProviderType !== null
            ? output.ExternalLoginFederationProviderType
            : undefined,
        ExternalLoginFederationProviderUrl: output.ExternalLoginFederationProviderUrl !== undefined && output.ExternalLoginFederationProviderUrl !== null
            ? output.ExternalLoginFederationProviderUrl
            : undefined,
        ExternalLoginId: output.ExternalLoginId !== undefined && output.ExternalLoginId !== null ? output.ExternalLoginId : undefined,
        IdentityType: output.IdentityType !== undefined && output.IdentityType !== null ? output.IdentityType : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
    };
};
const deserializeAws_restJson1UserList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1User(entry, context);
    });
};
const deserializeAws_restJson1VpcConnectionProperties = (output, context) => {
    return {
        VpcConnectionArn: output.VpcConnectionArn !== undefined && output.VpcConnectionArn !== null ? output.VpcConnectionArn : undefined,
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
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
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
//# sourceMappingURL=Aws_restJson1.js.map