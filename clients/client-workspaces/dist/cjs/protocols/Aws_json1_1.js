"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UpdateConnectionAliasPermissionCommand = exports.serializeAws_json1_1TerminateWorkspacesCommand = exports.serializeAws_json1_1StopWorkspacesCommand = exports.serializeAws_json1_1StartWorkspacesCommand = exports.serializeAws_json1_1RevokeIpRulesCommand = exports.serializeAws_json1_1RestoreWorkspaceCommand = exports.serializeAws_json1_1RegisterWorkspaceDirectoryCommand = exports.serializeAws_json1_1RebuildWorkspacesCommand = exports.serializeAws_json1_1RebootWorkspacesCommand = exports.serializeAws_json1_1ModifyWorkspaceStateCommand = exports.serializeAws_json1_1ModifyWorkspacePropertiesCommand = exports.serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = exports.serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = exports.serializeAws_json1_1ModifySelfservicePermissionsCommand = exports.serializeAws_json1_1ModifyClientPropertiesCommand = exports.serializeAws_json1_1ModifyAccountCommand = exports.serializeAws_json1_1MigrateWorkspaceCommand = exports.serializeAws_json1_1ListAvailableManagementCidrRangesCommand = exports.serializeAws_json1_1ImportWorkspaceImageCommand = exports.serializeAws_json1_1DisassociateIpGroupsCommand = exports.serializeAws_json1_1DisassociateConnectionAliasCommand = exports.serializeAws_json1_1DescribeWorkspaceSnapshotsCommand = exports.serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = exports.serializeAws_json1_1DescribeWorkspacesCommand = exports.serializeAws_json1_1DescribeWorkspaceImagesCommand = exports.serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = exports.serializeAws_json1_1DescribeWorkspaceDirectoriesCommand = exports.serializeAws_json1_1DescribeWorkspaceBundlesCommand = exports.serializeAws_json1_1DescribeTagsCommand = exports.serializeAws_json1_1DescribeIpGroupsCommand = exports.serializeAws_json1_1DescribeConnectionAliasPermissionsCommand = exports.serializeAws_json1_1DescribeConnectionAliasesCommand = exports.serializeAws_json1_1DescribeClientPropertiesCommand = exports.serializeAws_json1_1DescribeAccountModificationsCommand = exports.serializeAws_json1_1DescribeAccountCommand = exports.serializeAws_json1_1DeregisterWorkspaceDirectoryCommand = exports.serializeAws_json1_1DeleteWorkspaceImageCommand = exports.serializeAws_json1_1DeleteWorkspaceBundleCommand = exports.serializeAws_json1_1DeleteTagsCommand = exports.serializeAws_json1_1DeleteIpGroupCommand = exports.serializeAws_json1_1DeleteConnectionAliasCommand = exports.serializeAws_json1_1CreateWorkspacesCommand = exports.serializeAws_json1_1CreateWorkspaceBundleCommand = exports.serializeAws_json1_1CreateTagsCommand = exports.serializeAws_json1_1CreateIpGroupCommand = exports.serializeAws_json1_1CreateConnectionAliasCommand = exports.serializeAws_json1_1CopyWorkspaceImageCommand = exports.serializeAws_json1_1AuthorizeIpRulesCommand = exports.serializeAws_json1_1AssociateIpGroupsCommand = exports.serializeAws_json1_1AssociateConnectionAliasCommand = void 0;
exports.deserializeAws_json1_1StartWorkspacesCommand = exports.deserializeAws_json1_1RevokeIpRulesCommand = exports.deserializeAws_json1_1RestoreWorkspaceCommand = exports.deserializeAws_json1_1RegisterWorkspaceDirectoryCommand = exports.deserializeAws_json1_1RebuildWorkspacesCommand = exports.deserializeAws_json1_1RebootWorkspacesCommand = exports.deserializeAws_json1_1ModifyWorkspaceStateCommand = exports.deserializeAws_json1_1ModifyWorkspacePropertiesCommand = exports.deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = exports.deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = exports.deserializeAws_json1_1ModifySelfservicePermissionsCommand = exports.deserializeAws_json1_1ModifyClientPropertiesCommand = exports.deserializeAws_json1_1ModifyAccountCommand = exports.deserializeAws_json1_1MigrateWorkspaceCommand = exports.deserializeAws_json1_1ListAvailableManagementCidrRangesCommand = exports.deserializeAws_json1_1ImportWorkspaceImageCommand = exports.deserializeAws_json1_1DisassociateIpGroupsCommand = exports.deserializeAws_json1_1DisassociateConnectionAliasCommand = exports.deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand = exports.deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = exports.deserializeAws_json1_1DescribeWorkspacesCommand = exports.deserializeAws_json1_1DescribeWorkspaceImagesCommand = exports.deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = exports.deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand = exports.deserializeAws_json1_1DescribeWorkspaceBundlesCommand = exports.deserializeAws_json1_1DescribeTagsCommand = exports.deserializeAws_json1_1DescribeIpGroupsCommand = exports.deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand = exports.deserializeAws_json1_1DescribeConnectionAliasesCommand = exports.deserializeAws_json1_1DescribeClientPropertiesCommand = exports.deserializeAws_json1_1DescribeAccountModificationsCommand = exports.deserializeAws_json1_1DescribeAccountCommand = exports.deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand = exports.deserializeAws_json1_1DeleteWorkspaceImageCommand = exports.deserializeAws_json1_1DeleteWorkspaceBundleCommand = exports.deserializeAws_json1_1DeleteTagsCommand = exports.deserializeAws_json1_1DeleteIpGroupCommand = exports.deserializeAws_json1_1DeleteConnectionAliasCommand = exports.deserializeAws_json1_1CreateWorkspacesCommand = exports.deserializeAws_json1_1CreateWorkspaceBundleCommand = exports.deserializeAws_json1_1CreateTagsCommand = exports.deserializeAws_json1_1CreateIpGroupCommand = exports.deserializeAws_json1_1CreateConnectionAliasCommand = exports.deserializeAws_json1_1CopyWorkspaceImageCommand = exports.deserializeAws_json1_1AuthorizeIpRulesCommand = exports.deserializeAws_json1_1AssociateIpGroupsCommand = exports.deserializeAws_json1_1AssociateConnectionAliasCommand = exports.serializeAws_json1_1UpdateWorkspaceImagePermissionCommand = exports.serializeAws_json1_1UpdateWorkspaceBundleCommand = exports.serializeAws_json1_1UpdateRulesOfIpGroupCommand = void 0;
exports.deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand = exports.deserializeAws_json1_1UpdateWorkspaceBundleCommand = exports.deserializeAws_json1_1UpdateRulesOfIpGroupCommand = exports.deserializeAws_json1_1UpdateConnectionAliasPermissionCommand = exports.deserializeAws_json1_1TerminateWorkspacesCommand = exports.deserializeAws_json1_1StopWorkspacesCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AssociateConnectionAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.AssociateConnectionAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateConnectionAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateConnectionAliasCommand = serializeAws_json1_1AssociateConnectionAliasCommand;
const serializeAws_json1_1AssociateIpGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.AssociateIpGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateIpGroupsCommand = serializeAws_json1_1AssociateIpGroupsCommand;
const serializeAws_json1_1AuthorizeIpRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.AuthorizeIpRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AuthorizeIpRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AuthorizeIpRulesCommand = serializeAws_json1_1AuthorizeIpRulesCommand;
const serializeAws_json1_1CopyWorkspaceImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CopyWorkspaceImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CopyWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CopyWorkspaceImageCommand = serializeAws_json1_1CopyWorkspaceImageCommand;
const serializeAws_json1_1CreateConnectionAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CreateConnectionAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateConnectionAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateConnectionAliasCommand = serializeAws_json1_1CreateConnectionAliasCommand;
const serializeAws_json1_1CreateIpGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CreateIpGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateIpGroupCommand = serializeAws_json1_1CreateIpGroupCommand;
const serializeAws_json1_1CreateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CreateTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateTagsCommand = serializeAws_json1_1CreateTagsCommand;
const serializeAws_json1_1CreateWorkspaceBundleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CreateWorkspaceBundle",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkspaceBundleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWorkspaceBundleCommand = serializeAws_json1_1CreateWorkspaceBundleCommand;
const serializeAws_json1_1CreateWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.CreateWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateWorkspacesCommand = serializeAws_json1_1CreateWorkspacesCommand;
const serializeAws_json1_1DeleteConnectionAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeleteConnectionAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteConnectionAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteConnectionAliasCommand = serializeAws_json1_1DeleteConnectionAliasCommand;
const serializeAws_json1_1DeleteIpGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeleteIpGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteIpGroupCommand = serializeAws_json1_1DeleteIpGroupCommand;
const serializeAws_json1_1DeleteTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeleteTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteTagsCommand = serializeAws_json1_1DeleteTagsCommand;
const serializeAws_json1_1DeleteWorkspaceBundleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeleteWorkspaceBundle",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkspaceBundleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWorkspaceBundleCommand = serializeAws_json1_1DeleteWorkspaceBundleCommand;
const serializeAws_json1_1DeleteWorkspaceImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeleteWorkspaceImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteWorkspaceImageCommand = serializeAws_json1_1DeleteWorkspaceImageCommand;
const serializeAws_json1_1DeregisterWorkspaceDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DeregisterWorkspaceDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterWorkspaceDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterWorkspaceDirectoryCommand = serializeAws_json1_1DeregisterWorkspaceDirectoryCommand;
const serializeAws_json1_1DescribeAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccountCommand = serializeAws_json1_1DescribeAccountCommand;
const serializeAws_json1_1DescribeAccountModificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeAccountModifications",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountModificationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccountModificationsCommand = serializeAws_json1_1DescribeAccountModificationsCommand;
const serializeAws_json1_1DescribeClientPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeClientProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeClientPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeClientPropertiesCommand = serializeAws_json1_1DescribeClientPropertiesCommand;
const serializeAws_json1_1DescribeConnectionAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeConnectionAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionAliasesCommand = serializeAws_json1_1DescribeConnectionAliasesCommand;
const serializeAws_json1_1DescribeConnectionAliasPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeConnectionAliasPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeConnectionAliasPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeConnectionAliasPermissionsCommand = serializeAws_json1_1DescribeConnectionAliasPermissionsCommand;
const serializeAws_json1_1DescribeIpGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeIpGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeIpGroupsCommand = serializeAws_json1_1DescribeIpGroupsCommand;
const serializeAws_json1_1DescribeTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeTags",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeTagsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeTagsCommand = serializeAws_json1_1DescribeTagsCommand;
const serializeAws_json1_1DescribeWorkspaceBundlesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaceBundles",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceBundlesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspaceBundlesCommand = serializeAws_json1_1DescribeWorkspaceBundlesCommand;
const serializeAws_json1_1DescribeWorkspaceDirectoriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaceDirectories",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceDirectoriesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspaceDirectoriesCommand = serializeAws_json1_1DescribeWorkspaceDirectoriesCommand;
const serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaceImagePermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = serializeAws_json1_1DescribeWorkspaceImagePermissionsCommand;
const serializeAws_json1_1DescribeWorkspaceImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaceImages",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceImagesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspaceImagesCommand = serializeAws_json1_1DescribeWorkspaceImagesCommand;
const serializeAws_json1_1DescribeWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspacesCommand = serializeAws_json1_1DescribeWorkspacesCommand;
const serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspacesConnectionStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = serializeAws_json1_1DescribeWorkspacesConnectionStatusCommand;
const serializeAws_json1_1DescribeWorkspaceSnapshotsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DescribeWorkspaceSnapshots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeWorkspaceSnapshotsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeWorkspaceSnapshotsCommand = serializeAws_json1_1DescribeWorkspaceSnapshotsCommand;
const serializeAws_json1_1DisassociateConnectionAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DisassociateConnectionAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateConnectionAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateConnectionAliasCommand = serializeAws_json1_1DisassociateConnectionAliasCommand;
const serializeAws_json1_1DisassociateIpGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.DisassociateIpGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateIpGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateIpGroupsCommand = serializeAws_json1_1DisassociateIpGroupsCommand;
const serializeAws_json1_1ImportWorkspaceImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ImportWorkspaceImage",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ImportWorkspaceImageRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ImportWorkspaceImageCommand = serializeAws_json1_1ImportWorkspaceImageCommand;
const serializeAws_json1_1ListAvailableManagementCidrRangesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ListAvailableManagementCidrRanges",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAvailableManagementCidrRangesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAvailableManagementCidrRangesCommand = serializeAws_json1_1ListAvailableManagementCidrRangesCommand;
const serializeAws_json1_1MigrateWorkspaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.MigrateWorkspace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MigrateWorkspaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MigrateWorkspaceCommand = serializeAws_json1_1MigrateWorkspaceCommand;
const serializeAws_json1_1ModifyAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyAccountCommand = serializeAws_json1_1ModifyAccountCommand;
const serializeAws_json1_1ModifyClientPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyClientProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyClientPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyClientPropertiesCommand = serializeAws_json1_1ModifyClientPropertiesCommand;
const serializeAws_json1_1ModifySelfservicePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifySelfservicePermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifySelfservicePermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifySelfservicePermissionsCommand = serializeAws_json1_1ModifySelfservicePermissionsCommand;
const serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyWorkspaceAccessProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = serializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand;
const serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyWorkspaceCreationProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = serializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand;
const serializeAws_json1_1ModifyWorkspacePropertiesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyWorkspaceProperties",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspacePropertiesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyWorkspacePropertiesCommand = serializeAws_json1_1ModifyWorkspacePropertiesCommand;
const serializeAws_json1_1ModifyWorkspaceStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.ModifyWorkspaceState",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ModifyWorkspaceStateRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ModifyWorkspaceStateCommand = serializeAws_json1_1ModifyWorkspaceStateCommand;
const serializeAws_json1_1RebootWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.RebootWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebootWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebootWorkspacesCommand = serializeAws_json1_1RebootWorkspacesCommand;
const serializeAws_json1_1RebuildWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.RebuildWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RebuildWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RebuildWorkspacesCommand = serializeAws_json1_1RebuildWorkspacesCommand;
const serializeAws_json1_1RegisterWorkspaceDirectoryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.RegisterWorkspaceDirectory",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterWorkspaceDirectoryRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterWorkspaceDirectoryCommand = serializeAws_json1_1RegisterWorkspaceDirectoryCommand;
const serializeAws_json1_1RestoreWorkspaceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.RestoreWorkspace",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RestoreWorkspaceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RestoreWorkspaceCommand = serializeAws_json1_1RestoreWorkspaceCommand;
const serializeAws_json1_1RevokeIpRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.RevokeIpRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RevokeIpRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RevokeIpRulesCommand = serializeAws_json1_1RevokeIpRulesCommand;
const serializeAws_json1_1StartWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.StartWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartWorkspacesCommand = serializeAws_json1_1StartWorkspacesCommand;
const serializeAws_json1_1StopWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.StopWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StopWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StopWorkspacesCommand = serializeAws_json1_1StopWorkspacesCommand;
const serializeAws_json1_1TerminateWorkspacesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.TerminateWorkspaces",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TerminateWorkspacesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TerminateWorkspacesCommand = serializeAws_json1_1TerminateWorkspacesCommand;
const serializeAws_json1_1UpdateConnectionAliasPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.UpdateConnectionAliasPermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateConnectionAliasPermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateConnectionAliasPermissionCommand = serializeAws_json1_1UpdateConnectionAliasPermissionCommand;
const serializeAws_json1_1UpdateRulesOfIpGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.UpdateRulesOfIpGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateRulesOfIpGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateRulesOfIpGroupCommand = serializeAws_json1_1UpdateRulesOfIpGroupCommand;
const serializeAws_json1_1UpdateWorkspaceBundleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.UpdateWorkspaceBundle",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkspaceBundleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWorkspaceBundleCommand = serializeAws_json1_1UpdateWorkspaceBundleCommand;
const serializeAws_json1_1UpdateWorkspaceImagePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkspacesService.UpdateWorkspaceImagePermission",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateWorkspaceImagePermissionRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateWorkspaceImagePermissionCommand = serializeAws_json1_1UpdateWorkspaceImagePermissionCommand;
const deserializeAws_json1_1AssociateConnectionAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateConnectionAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateConnectionAliasResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateConnectionAliasCommand = deserializeAws_json1_1AssociateConnectionAliasCommand;
const deserializeAws_json1_1AssociateConnectionAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateIpGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateIpGroupsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateIpGroupsCommand = deserializeAws_json1_1AssociateIpGroupsCommand;
const deserializeAws_json1_1AssociateIpGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AuthorizeIpRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AuthorizeIpRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AuthorizeIpRulesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AuthorizeIpRulesCommand = deserializeAws_json1_1AuthorizeIpRulesCommand;
const deserializeAws_json1_1AuthorizeIpRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CopyWorkspaceImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CopyWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CopyWorkspaceImageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CopyWorkspaceImageCommand = deserializeAws_json1_1CopyWorkspaceImageCommand;
const deserializeAws_json1_1CopyWorkspaceImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateConnectionAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateConnectionAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateConnectionAliasResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateConnectionAliasCommand = deserializeAws_json1_1CreateConnectionAliasCommand;
const deserializeAws_json1_1CreateConnectionAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateIpGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateIpGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateIpGroupCommand = deserializeAws_json1_1CreateIpGroupCommand;
const deserializeAws_json1_1CreateIpGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceCreationFailedException":
        case "com.amazonaws.workspaces#ResourceCreationFailedException":
            response = {
                ...(await deserializeAws_json1_1ResourceCreationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateTagsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateTagsCommand = deserializeAws_json1_1CreateTagsCommand;
const deserializeAws_json1_1CreateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateWorkspaceBundleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWorkspaceBundleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkspaceBundleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWorkspaceBundleCommand = deserializeAws_json1_1CreateWorkspaceBundleCommand;
const deserializeAws_json1_1CreateWorkspaceBundleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateWorkspacesCommand = deserializeAws_json1_1CreateWorkspacesCommand;
const deserializeAws_json1_1CreateWorkspacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteConnectionAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteConnectionAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteConnectionAliasResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteConnectionAliasCommand = deserializeAws_json1_1DeleteConnectionAliasCommand;
const deserializeAws_json1_1DeleteConnectionAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteIpGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteIpGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteIpGroupCommand = deserializeAws_json1_1DeleteIpGroupCommand;
const deserializeAws_json1_1DeleteIpGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteTagsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteTagsCommand = deserializeAws_json1_1DeleteTagsCommand;
const deserializeAws_json1_1DeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteWorkspaceBundleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWorkspaceBundleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkspaceBundleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWorkspaceBundleCommand = deserializeAws_json1_1DeleteWorkspaceBundleCommand;
const deserializeAws_json1_1DeleteWorkspaceBundleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteWorkspaceImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteWorkspaceImageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteWorkspaceImageCommand = deserializeAws_json1_1DeleteWorkspaceImageCommand;
const deserializeAws_json1_1DeleteWorkspaceImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterWorkspaceDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand = deserializeAws_json1_1DeregisterWorkspaceDirectoryCommand;
const deserializeAws_json1_1DeregisterWorkspaceDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAccountCommand = deserializeAws_json1_1DescribeAccountCommand;
const deserializeAws_json1_1DescribeAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeAccountModificationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeAccountModificationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeAccountModificationsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeAccountModificationsCommand = deserializeAws_json1_1DescribeAccountModificationsCommand;
const deserializeAws_json1_1DescribeAccountModificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeClientPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeClientPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeClientPropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeClientPropertiesCommand = deserializeAws_json1_1DescribeClientPropertiesCommand;
const deserializeAws_json1_1DescribeClientPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConnectionAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionAliasesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionAliasesCommand = deserializeAws_json1_1DescribeConnectionAliasesCommand;
const deserializeAws_json1_1DescribeConnectionAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeConnectionAliasPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeConnectionAliasPermissionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand = deserializeAws_json1_1DescribeConnectionAliasPermissionsCommand;
const deserializeAws_json1_1DescribeConnectionAliasPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeIpGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeIpGroupsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeIpGroupsCommand = deserializeAws_json1_1DescribeIpGroupsCommand;
const deserializeAws_json1_1DescribeIpGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeTagsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeTagsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeTagsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeTagsCommand = deserializeAws_json1_1DescribeTagsCommand;
const deserializeAws_json1_1DescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspaceBundlesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspaceBundlesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceBundlesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspaceBundlesCommand = deserializeAws_json1_1DescribeWorkspaceBundlesCommand;
const deserializeAws_json1_1DescribeWorkspaceBundlesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceDirectoriesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand = deserializeAws_json1_1DescribeWorkspaceDirectoriesCommand;
const deserializeAws_json1_1DescribeWorkspaceDirectoriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand = deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommand;
const deserializeAws_json1_1DescribeWorkspaceImagePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspaceImagesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspaceImagesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceImagesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspaceImagesCommand = deserializeAws_json1_1DescribeWorkspaceImagesCommand;
const deserializeAws_json1_1DescribeWorkspaceImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspacesCommand = deserializeAws_json1_1DescribeWorkspacesCommand;
const deserializeAws_json1_1DescribeWorkspacesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand = deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommand;
const deserializeAws_json1_1DescribeWorkspacesConnectionStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeWorkspaceSnapshotsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand = deserializeAws_json1_1DescribeWorkspaceSnapshotsCommand;
const deserializeAws_json1_1DescribeWorkspaceSnapshotsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateConnectionAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateConnectionAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateConnectionAliasResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateConnectionAliasCommand = deserializeAws_json1_1DisassociateConnectionAliasCommand;
const deserializeAws_json1_1DisassociateConnectionAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateIpGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateIpGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateIpGroupsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateIpGroupsCommand = deserializeAws_json1_1DisassociateIpGroupsCommand;
const deserializeAws_json1_1DisassociateIpGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ImportWorkspaceImageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ImportWorkspaceImageCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ImportWorkspaceImageResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ImportWorkspaceImageCommand = deserializeAws_json1_1ImportWorkspaceImageCommand;
const deserializeAws_json1_1ImportWorkspaceImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.workspaces#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAvailableManagementCidrRangesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAvailableManagementCidrRangesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAvailableManagementCidrRangesCommand = deserializeAws_json1_1ListAvailableManagementCidrRangesCommand;
const deserializeAws_json1_1ListAvailableManagementCidrRangesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MigrateWorkspaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MigrateWorkspaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1MigrateWorkspaceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MigrateWorkspaceCommand = deserializeAws_json1_1MigrateWorkspaceCommand;
const deserializeAws_json1_1MigrateWorkspaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationInProgressException":
        case "com.amazonaws.workspaces#OperationInProgressException":
            response = {
                ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyAccountResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyAccountCommand = deserializeAws_json1_1ModifyAccountCommand;
const deserializeAws_json1_1ModifyAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyClientPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyClientPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyClientPropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyClientPropertiesCommand = deserializeAws_json1_1ModifyClientPropertiesCommand;
const deserializeAws_json1_1ModifyClientPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifySelfservicePermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifySelfservicePermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifySelfservicePermissionsResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifySelfservicePermissionsCommand = deserializeAws_json1_1ModifySelfservicePermissionsCommand;
const deserializeAws_json1_1ModifySelfservicePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand = deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommand;
const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand = deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommand;
const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyWorkspacePropertiesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyWorkspacePropertiesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspacePropertiesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyWorkspacePropertiesCommand = deserializeAws_json1_1ModifyWorkspacePropertiesCommand;
const deserializeAws_json1_1ModifyWorkspacePropertiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationInProgressException":
        case "com.amazonaws.workspaces#OperationInProgressException":
            response = {
                ...(await deserializeAws_json1_1OperationInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedWorkspaceConfigurationException":
        case "com.amazonaws.workspaces#UnsupportedWorkspaceConfigurationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ModifyWorkspaceStateCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ModifyWorkspaceStateCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ModifyWorkspaceStateResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ModifyWorkspaceStateCommand = deserializeAws_json1_1ModifyWorkspaceStateCommand;
const deserializeAws_json1_1ModifyWorkspaceStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RebootWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebootWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebootWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebootWorkspacesCommand = deserializeAws_json1_1RebootWorkspacesCommand;
const deserializeAws_json1_1RebootWorkspacesCommandError = async (output, context) => {
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
const deserializeAws_json1_1RebuildWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RebuildWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RebuildWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RebuildWorkspacesCommand = deserializeAws_json1_1RebuildWorkspacesCommand;
const deserializeAws_json1_1RebuildWorkspacesCommandError = async (output, context) => {
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
const deserializeAws_json1_1RegisterWorkspaceDirectoryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterWorkspaceDirectoryResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterWorkspaceDirectoryCommand = deserializeAws_json1_1RegisterWorkspaceDirectoryCommand;
const deserializeAws_json1_1RegisterWorkspaceDirectoryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedNetworkConfigurationException":
        case "com.amazonaws.workspaces#UnsupportedNetworkConfigurationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "WorkspacesDefaultRoleNotFoundException":
        case "com.amazonaws.workspaces#WorkspacesDefaultRoleNotFoundException":
            response = {
                ...(await deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RestoreWorkspaceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RestoreWorkspaceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RestoreWorkspaceResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RestoreWorkspaceCommand = deserializeAws_json1_1RestoreWorkspaceCommand;
const deserializeAws_json1_1RestoreWorkspaceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RevokeIpRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RevokeIpRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RevokeIpRulesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RevokeIpRulesCommand = deserializeAws_json1_1RevokeIpRulesCommand;
const deserializeAws_json1_1RevokeIpRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartWorkspacesCommand = deserializeAws_json1_1StartWorkspacesCommand;
const deserializeAws_json1_1StartWorkspacesCommandError = async (output, context) => {
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
const deserializeAws_json1_1StopWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StopWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StopWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StopWorkspacesCommand = deserializeAws_json1_1StopWorkspacesCommand;
const deserializeAws_json1_1StopWorkspacesCommandError = async (output, context) => {
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
const deserializeAws_json1_1TerminateWorkspacesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TerminateWorkspacesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TerminateWorkspacesResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TerminateWorkspacesCommand = deserializeAws_json1_1TerminateWorkspacesCommand;
const deserializeAws_json1_1TerminateWorkspacesCommandError = async (output, context) => {
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
const deserializeAws_json1_1UpdateConnectionAliasPermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateConnectionAliasPermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateConnectionAliasPermissionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateConnectionAliasPermissionCommand = deserializeAws_json1_1UpdateConnectionAliasPermissionCommand;
const deserializeAws_json1_1UpdateConnectionAliasPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAssociatedException":
        case "com.amazonaws.workspaces#ResourceAssociatedException":
            response = {
                ...(await deserializeAws_json1_1ResourceAssociatedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateRulesOfIpGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateRulesOfIpGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateRulesOfIpGroupResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateRulesOfIpGroupCommand = deserializeAws_json1_1UpdateRulesOfIpGroupCommand;
const deserializeAws_json1_1UpdateRulesOfIpGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceStateException":
        case "com.amazonaws.workspaces#InvalidResourceStateException":
            response = {
                ...(await deserializeAws_json1_1InvalidResourceStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.workspaces#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_json1_1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateWorkspaceBundleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateWorkspaceBundleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkspaceBundleResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWorkspaceBundleCommand = deserializeAws_json1_1UpdateWorkspaceBundleCommand;
const deserializeAws_json1_1UpdateWorkspaceBundleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateWorkspaceImagePermissionCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateWorkspaceImagePermissionResult(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand = deserializeAws_json1_1UpdateWorkspaceImagePermissionCommand;
const deserializeAws_json1_1UpdateWorkspaceImagePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.workspaces#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValuesException":
        case "com.amazonaws.workspaces#InvalidParameterValuesException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterValuesExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotSupportedException":
        case "com.amazonaws.workspaces#OperationNotSupportedException":
            response = {
                ...(await deserializeAws_json1_1OperationNotSupportedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workspaces#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceUnavailableException":
        case "com.amazonaws.workspaces#ResourceUnavailableException":
            response = {
                ...(await deserializeAws_json1_1ResourceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedException(body, context);
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterValuesExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterValuesException(body, context);
    const contents = {
        name: "InvalidParameterValuesException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidResourceStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidResourceStateException(body, context);
    const contents = {
        name: "InvalidResourceStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationInProgressException(body, context);
    const contents = {
        name: "OperationInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OperationNotSupportedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OperationNotSupportedException(body, context);
    const contents = {
        name: "OperationNotSupportedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceAssociatedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceAssociatedException(body, context);
    const contents = {
        name: "ResourceAssociatedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceCreationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceCreationFailedException(body, context);
    const contents = {
        name: "ResourceCreationFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceLimitExceededException(body, context);
    const contents = {
        name: "ResourceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceNotFoundException(body, context);
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ResourceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ResourceUnavailableException(body, context);
    const contents = {
        name: "ResourceUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedNetworkConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedNetworkConfigurationException(body, context);
    const contents = {
        name: "UnsupportedNetworkConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedWorkspaceConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedWorkspaceConfigurationException(body, context);
    const contents = {
        name: "UnsupportedWorkspaceConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException(body, context);
    const contents = {
        name: "WorkspacesDefaultRoleNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ApplicationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociateConnectionAliasRequest = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1AssociateIpGroupsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.GroupIds !== undefined &&
            input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
    };
};
const serializeAws_json1_1AuthorizeIpRulesRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.UserRules !== undefined &&
            input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
    };
};
const serializeAws_json1_1BundleIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ClientProperties = (input, context) => {
    return {
        ...(input.ReconnectEnabled !== undefined &&
            input.ReconnectEnabled !== null && { ReconnectEnabled: input.ReconnectEnabled }),
    };
};
const serializeAws_json1_1ComputeType = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    };
};
const serializeAws_json1_1ConnectionAliasIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ConnectionAliasPermission = (input, context) => {
    return {
        ...(input.AllowAssociation !== undefined &&
            input.AllowAssociation !== null && { AllowAssociation: input.AllowAssociation }),
        ...(input.SharedAccountId !== undefined &&
            input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
    };
};
const serializeAws_json1_1CopyWorkspaceImageRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.SourceImageId !== undefined && input.SourceImageId !== null && { SourceImageId: input.SourceImageId }),
        ...(input.SourceRegion !== undefined && input.SourceRegion !== null && { SourceRegion: input.SourceRegion }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateConnectionAliasRequest = (input, context) => {
    return {
        ...(input.ConnectionString !== undefined &&
            input.ConnectionString !== null && { ConnectionString: input.ConnectionString }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateIpGroupRequest = (input, context) => {
    return {
        ...(input.GroupDesc !== undefined && input.GroupDesc !== null && { GroupDesc: input.GroupDesc }),
        ...(input.GroupName !== undefined && input.GroupName !== null && { GroupName: input.GroupName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.UserRules !== undefined &&
            input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
    };
};
const serializeAws_json1_1CreateTagsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateWorkspaceBundleRequest = (input, context) => {
    return {
        ...(input.BundleDescription !== undefined &&
            input.BundleDescription !== null && { BundleDescription: input.BundleDescription }),
        ...(input.BundleName !== undefined && input.BundleName !== null && { BundleName: input.BundleName }),
        ...(input.ComputeType !== undefined &&
            input.ComputeType !== null && { ComputeType: serializeAws_json1_1ComputeType(input.ComputeType, context) }),
        ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
        ...(input.RootStorage !== undefined &&
            input.RootStorage !== null && { RootStorage: serializeAws_json1_1RootStorage(input.RootStorage, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.UserStorage !== undefined &&
            input.UserStorage !== null && { UserStorage: serializeAws_json1_1UserStorage(input.UserStorage, context) }),
    };
};
const serializeAws_json1_1CreateWorkspacesRequest = (input, context) => {
    return {
        ...(input.Workspaces !== undefined &&
            input.Workspaces !== null && { Workspaces: serializeAws_json1_1WorkspaceRequestList(input.Workspaces, context) }),
    };
};
const serializeAws_json1_1DeleteConnectionAliasRequest = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    };
};
const serializeAws_json1_1DeleteIpGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
    };
};
const serializeAws_json1_1DeleteTagsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1DeleteWorkspaceBundleRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
    };
};
const serializeAws_json1_1DeleteWorkspaceImageRequest = (input, context) => {
    return {
        ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    };
};
const serializeAws_json1_1DeregisterWorkspaceDirectoryRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
    };
};
const serializeAws_json1_1DescribeAccountModificationsRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeAccountRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1DescribeClientPropertiesRequest = (input, context) => {
    return {
        ...(input.ResourceIds !== undefined &&
            input.ResourceIds !== null && { ResourceIds: serializeAws_json1_1ResourceIdList(input.ResourceIds, context) }),
    };
};
const serializeAws_json1_1DescribeConnectionAliasesRequest = (input, context) => {
    return {
        ...(input.AliasIds !== undefined &&
            input.AliasIds !== null && { AliasIds: serializeAws_json1_1ConnectionAliasIdList(input.AliasIds, context) }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DescribeConnectionAliasPermissionsRequest = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeIpGroupsRequest = (input, context) => {
    return {
        ...(input.GroupIds !== undefined &&
            input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeTagsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DescribeWorkspaceBundlesRequest = (input, context) => {
    return {
        ...(input.BundleIds !== undefined &&
            input.BundleIds !== null && { BundleIds: serializeAws_json1_1BundleIdList(input.BundleIds, context) }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.Owner !== undefined && input.Owner !== null && { Owner: input.Owner }),
    };
};
const serializeAws_json1_1DescribeWorkspaceDirectoriesRequest = (input, context) => {
    return {
        ...(input.DirectoryIds !== undefined &&
            input.DirectoryIds !== null && {
            DirectoryIds: serializeAws_json1_1DirectoryIdList(input.DirectoryIds, context),
        }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeWorkspaceImagePermissionsRequest = (input, context) => {
    return {
        ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeWorkspaceImagesRequest = (input, context) => {
    return {
        ...(input.ImageIds !== undefined &&
            input.ImageIds !== null && { ImageIds: serializeAws_json1_1WorkspaceImageIdList(input.ImageIds, context) }),
        ...(input.ImageType !== undefined && input.ImageType !== null && { ImageType: input.ImageType }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1DescribeWorkspacesConnectionStatusRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.WorkspaceIds !== undefined &&
            input.WorkspaceIds !== null && {
            WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
        }),
    };
};
const serializeAws_json1_1DescribeWorkspaceSnapshotsRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1DescribeWorkspacesRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
        ...(input.WorkspaceIds !== undefined &&
            input.WorkspaceIds !== null && {
            WorkspaceIds: serializeAws_json1_1WorkspaceIdList(input.WorkspaceIds, context),
        }),
    };
};
const serializeAws_json1_1DirectoryIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DisassociateConnectionAliasRequest = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
    };
};
const serializeAws_json1_1DisassociateIpGroupsRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.GroupIds !== undefined &&
            input.GroupIds !== null && { GroupIds: serializeAws_json1_1IpGroupIdList(input.GroupIds, context) }),
    };
};
const serializeAws_json1_1ImportWorkspaceImageRequest = (input, context) => {
    return {
        ...(input.Applications !== undefined &&
            input.Applications !== null && {
            Applications: serializeAws_json1_1ApplicationList(input.Applications, context),
        }),
        ...(input.Ec2ImageId !== undefined && input.Ec2ImageId !== null && { Ec2ImageId: input.Ec2ImageId }),
        ...(input.ImageDescription !== undefined &&
            input.ImageDescription !== null && { ImageDescription: input.ImageDescription }),
        ...(input.ImageName !== undefined && input.ImageName !== null && { ImageName: input.ImageName }),
        ...(input.IngestionProcess !== undefined &&
            input.IngestionProcess !== null && { IngestionProcess: input.IngestionProcess }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1IpGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IpRevokedRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1IpRuleItem = (input, context) => {
    return {
        ...(input.ipRule !== undefined && input.ipRule !== null && { ipRule: input.ipRule }),
        ...(input.ruleDesc !== undefined && input.ruleDesc !== null && { ruleDesc: input.ruleDesc }),
    };
};
const serializeAws_json1_1IpRuleList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1IpRuleItem(entry, context);
    });
};
const serializeAws_json1_1ListAvailableManagementCidrRangesRequest = (input, context) => {
    return {
        ...(input.ManagementCidrRangeConstraint !== undefined &&
            input.ManagementCidrRangeConstraint !== null && {
            ManagementCidrRangeConstraint: input.ManagementCidrRangeConstraint,
        }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1MigrateWorkspaceRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.SourceWorkspaceId !== undefined &&
            input.SourceWorkspaceId !== null && { SourceWorkspaceId: input.SourceWorkspaceId }),
    };
};
const serializeAws_json1_1ModifyAccountRequest = (input, context) => {
    return {
        ...(input.DedicatedTenancyManagementCidrRange !== undefined &&
            input.DedicatedTenancyManagementCidrRange !== null && {
            DedicatedTenancyManagementCidrRange: input.DedicatedTenancyManagementCidrRange,
        }),
        ...(input.DedicatedTenancySupport !== undefined &&
            input.DedicatedTenancySupport !== null && { DedicatedTenancySupport: input.DedicatedTenancySupport }),
    };
};
const serializeAws_json1_1ModifyClientPropertiesRequest = (input, context) => {
    return {
        ...(input.ClientProperties !== undefined &&
            input.ClientProperties !== null && {
            ClientProperties: serializeAws_json1_1ClientProperties(input.ClientProperties, context),
        }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1ModifySelfservicePermissionsRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.SelfservicePermissions !== undefined &&
            input.SelfservicePermissions !== null && {
            SelfservicePermissions: serializeAws_json1_1SelfservicePermissions(input.SelfservicePermissions, context),
        }),
    };
};
const serializeAws_json1_1ModifyWorkspaceAccessPropertiesRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.WorkspaceAccessProperties !== undefined &&
            input.WorkspaceAccessProperties !== null && {
            WorkspaceAccessProperties: serializeAws_json1_1WorkspaceAccessProperties(input.WorkspaceAccessProperties, context),
        }),
    };
};
const serializeAws_json1_1ModifyWorkspaceCreationPropertiesRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.WorkspaceCreationProperties !== undefined &&
            input.WorkspaceCreationProperties !== null && {
            WorkspaceCreationProperties: serializeAws_json1_1WorkspaceCreationProperties(input.WorkspaceCreationProperties, context),
        }),
    };
};
const serializeAws_json1_1ModifyWorkspacePropertiesRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
        ...(input.WorkspaceProperties !== undefined &&
            input.WorkspaceProperties !== null && {
            WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
        }),
    };
};
const serializeAws_json1_1ModifyWorkspaceStateRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
        ...(input.WorkspaceState !== undefined &&
            input.WorkspaceState !== null && { WorkspaceState: input.WorkspaceState }),
    };
};
const serializeAws_json1_1RebootRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1RebootWorkspaceRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RebootRequest(entry, context);
    });
};
const serializeAws_json1_1RebootWorkspacesRequest = (input, context) => {
    return {
        ...(input.RebootWorkspaceRequests !== undefined &&
            input.RebootWorkspaceRequests !== null && {
            RebootWorkspaceRequests: serializeAws_json1_1RebootWorkspaceRequests(input.RebootWorkspaceRequests, context),
        }),
    };
};
const serializeAws_json1_1RebuildRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1RebuildWorkspaceRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1RebuildRequest(entry, context);
    });
};
const serializeAws_json1_1RebuildWorkspacesRequest = (input, context) => {
    return {
        ...(input.RebuildWorkspaceRequests !== undefined &&
            input.RebuildWorkspaceRequests !== null && {
            RebuildWorkspaceRequests: serializeAws_json1_1RebuildWorkspaceRequests(input.RebuildWorkspaceRequests, context),
        }),
    };
};
const serializeAws_json1_1RegisterWorkspaceDirectoryRequest = (input, context) => {
    return {
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.EnableSelfService !== undefined &&
            input.EnableSelfService !== null && { EnableSelfService: input.EnableSelfService }),
        ...(input.EnableWorkDocs !== undefined &&
            input.EnableWorkDocs !== null && { EnableWorkDocs: input.EnableWorkDocs }),
        ...(input.SubnetIds !== undefined &&
            input.SubnetIds !== null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.Tenancy !== undefined && input.Tenancy !== null && { Tenancy: input.Tenancy }),
    };
};
const serializeAws_json1_1ResourceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1RestoreWorkspaceRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1RevokeIpRulesRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.UserRules !== undefined &&
            input.UserRules !== null && { UserRules: serializeAws_json1_1IpRevokedRuleList(input.UserRules, context) }),
    };
};
const serializeAws_json1_1RootStorage = (input, context) => {
    return {
        ...(input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity }),
    };
};
const serializeAws_json1_1SelfservicePermissions = (input, context) => {
    return {
        ...(input.ChangeComputeType !== undefined &&
            input.ChangeComputeType !== null && { ChangeComputeType: input.ChangeComputeType }),
        ...(input.IncreaseVolumeSize !== undefined &&
            input.IncreaseVolumeSize !== null && { IncreaseVolumeSize: input.IncreaseVolumeSize }),
        ...(input.RebuildWorkspace !== undefined &&
            input.RebuildWorkspace !== null && { RebuildWorkspace: input.RebuildWorkspace }),
        ...(input.RestartWorkspace !== undefined &&
            input.RestartWorkspace !== null && { RestartWorkspace: input.RestartWorkspace }),
        ...(input.SwitchRunningMode !== undefined &&
            input.SwitchRunningMode !== null && { SwitchRunningMode: input.SwitchRunningMode }),
    };
};
const serializeAws_json1_1StartRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1StartWorkspaceRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StartRequest(entry, context);
    });
};
const serializeAws_json1_1StartWorkspacesRequest = (input, context) => {
    return {
        ...(input.StartWorkspaceRequests !== undefined &&
            input.StartWorkspaceRequests !== null && {
            StartWorkspaceRequests: serializeAws_json1_1StartWorkspaceRequests(input.StartWorkspaceRequests, context),
        }),
    };
};
const serializeAws_json1_1StopRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1StopWorkspaceRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1StopRequest(entry, context);
    });
};
const serializeAws_json1_1StopWorkspacesRequest = (input, context) => {
    return {
        ...(input.StopWorkspaceRequests !== undefined &&
            input.StopWorkspaceRequests !== null && {
            StopWorkspaceRequests: serializeAws_json1_1StopWorkspaceRequests(input.StopWorkspaceRequests, context),
        }),
    };
};
const serializeAws_json1_1SubnetIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_json1_1TerminateRequest = (input, context) => {
    return {
        ...(input.WorkspaceId !== undefined && input.WorkspaceId !== null && { WorkspaceId: input.WorkspaceId }),
    };
};
const serializeAws_json1_1TerminateWorkspaceRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1TerminateRequest(entry, context);
    });
};
const serializeAws_json1_1TerminateWorkspacesRequest = (input, context) => {
    return {
        ...(input.TerminateWorkspaceRequests !== undefined &&
            input.TerminateWorkspaceRequests !== null && {
            TerminateWorkspaceRequests: serializeAws_json1_1TerminateWorkspaceRequests(input.TerminateWorkspaceRequests, context),
        }),
    };
};
const serializeAws_json1_1UpdateConnectionAliasPermissionRequest = (input, context) => {
    return {
        ...(input.AliasId !== undefined && input.AliasId !== null && { AliasId: input.AliasId }),
        ...(input.ConnectionAliasPermission !== undefined &&
            input.ConnectionAliasPermission !== null && {
            ConnectionAliasPermission: serializeAws_json1_1ConnectionAliasPermission(input.ConnectionAliasPermission, context),
        }),
    };
};
const serializeAws_json1_1UpdateRulesOfIpGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.UserRules !== undefined &&
            input.UserRules !== null && { UserRules: serializeAws_json1_1IpRuleList(input.UserRules, context) }),
    };
};
const serializeAws_json1_1UpdateWorkspaceBundleRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
    };
};
const serializeAws_json1_1UpdateWorkspaceImagePermissionRequest = (input, context) => {
    return {
        ...(input.AllowCopyImage !== undefined &&
            input.AllowCopyImage !== null && { AllowCopyImage: input.AllowCopyImage }),
        ...(input.ImageId !== undefined && input.ImageId !== null && { ImageId: input.ImageId }),
        ...(input.SharedAccountId !== undefined &&
            input.SharedAccountId !== null && { SharedAccountId: input.SharedAccountId }),
    };
};
const serializeAws_json1_1UserStorage = (input, context) => {
    return {
        ...(input.Capacity !== undefined && input.Capacity !== null && { Capacity: input.Capacity }),
    };
};
const serializeAws_json1_1WorkspaceAccessProperties = (input, context) => {
    return {
        ...(input.DeviceTypeAndroid !== undefined &&
            input.DeviceTypeAndroid !== null && { DeviceTypeAndroid: input.DeviceTypeAndroid }),
        ...(input.DeviceTypeChromeOs !== undefined &&
            input.DeviceTypeChromeOs !== null && { DeviceTypeChromeOs: input.DeviceTypeChromeOs }),
        ...(input.DeviceTypeIos !== undefined && input.DeviceTypeIos !== null && { DeviceTypeIos: input.DeviceTypeIos }),
        ...(input.DeviceTypeLinux !== undefined &&
            input.DeviceTypeLinux !== null && { DeviceTypeLinux: input.DeviceTypeLinux }),
        ...(input.DeviceTypeOsx !== undefined && input.DeviceTypeOsx !== null && { DeviceTypeOsx: input.DeviceTypeOsx }),
        ...(input.DeviceTypeWeb !== undefined && input.DeviceTypeWeb !== null && { DeviceTypeWeb: input.DeviceTypeWeb }),
        ...(input.DeviceTypeWindows !== undefined &&
            input.DeviceTypeWindows !== null && { DeviceTypeWindows: input.DeviceTypeWindows }),
        ...(input.DeviceTypeZeroClient !== undefined &&
            input.DeviceTypeZeroClient !== null && { DeviceTypeZeroClient: input.DeviceTypeZeroClient }),
    };
};
const serializeAws_json1_1WorkspaceCreationProperties = (input, context) => {
    return {
        ...(input.CustomSecurityGroupId !== undefined &&
            input.CustomSecurityGroupId !== null && { CustomSecurityGroupId: input.CustomSecurityGroupId }),
        ...(input.DefaultOu !== undefined && input.DefaultOu !== null && { DefaultOu: input.DefaultOu }),
        ...(input.EnableInternetAccess !== undefined &&
            input.EnableInternetAccess !== null && { EnableInternetAccess: input.EnableInternetAccess }),
        ...(input.EnableMaintenanceMode !== undefined &&
            input.EnableMaintenanceMode !== null && { EnableMaintenanceMode: input.EnableMaintenanceMode }),
        ...(input.EnableWorkDocs !== undefined &&
            input.EnableWorkDocs !== null && { EnableWorkDocs: input.EnableWorkDocs }),
        ...(input.UserEnabledAsLocalAdministrator !== undefined &&
            input.UserEnabledAsLocalAdministrator !== null && {
            UserEnabledAsLocalAdministrator: input.UserEnabledAsLocalAdministrator,
        }),
    };
};
const serializeAws_json1_1WorkspaceIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1WorkspaceImageIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1WorkspaceProperties = (input, context) => {
    return {
        ...(input.ComputeTypeName !== undefined &&
            input.ComputeTypeName !== null && { ComputeTypeName: input.ComputeTypeName }),
        ...(input.RootVolumeSizeGib !== undefined &&
            input.RootVolumeSizeGib !== null && { RootVolumeSizeGib: input.RootVolumeSizeGib }),
        ...(input.RunningMode !== undefined && input.RunningMode !== null && { RunningMode: input.RunningMode }),
        ...(input.RunningModeAutoStopTimeoutInMinutes !== undefined &&
            input.RunningModeAutoStopTimeoutInMinutes !== null && {
            RunningModeAutoStopTimeoutInMinutes: input.RunningModeAutoStopTimeoutInMinutes,
        }),
        ...(input.UserVolumeSizeGib !== undefined &&
            input.UserVolumeSizeGib !== null && { UserVolumeSizeGib: input.UserVolumeSizeGib }),
    };
};
const serializeAws_json1_1WorkspaceRequest = (input, context) => {
    return {
        ...(input.BundleId !== undefined && input.BundleId !== null && { BundleId: input.BundleId }),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.RootVolumeEncryptionEnabled !== undefined &&
            input.RootVolumeEncryptionEnabled !== null && { RootVolumeEncryptionEnabled: input.RootVolumeEncryptionEnabled }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
        ...(input.UserName !== undefined && input.UserName !== null && { UserName: input.UserName }),
        ...(input.UserVolumeEncryptionEnabled !== undefined &&
            input.UserVolumeEncryptionEnabled !== null && { UserVolumeEncryptionEnabled: input.UserVolumeEncryptionEnabled }),
        ...(input.VolumeEncryptionKey !== undefined &&
            input.VolumeEncryptionKey !== null && { VolumeEncryptionKey: input.VolumeEncryptionKey }),
        ...(input.WorkspaceProperties !== undefined &&
            input.WorkspaceProperties !== null && {
            WorkspaceProperties: serializeAws_json1_1WorkspaceProperties(input.WorkspaceProperties, context),
        }),
    };
};
const serializeAws_json1_1WorkspaceRequestList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1WorkspaceRequest(entry, context);
    });
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1AccountModification = (output, context) => {
    return {
        DedicatedTenancyManagementCidrRange: output.DedicatedTenancyManagementCidrRange !== undefined && output.DedicatedTenancyManagementCidrRange !== null
            ? output.DedicatedTenancyManagementCidrRange
            : undefined,
        DedicatedTenancySupport: output.DedicatedTenancySupport !== undefined && output.DedicatedTenancySupport !== null
            ? output.DedicatedTenancySupport
            : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ModificationState: output.ModificationState !== undefined && output.ModificationState !== null
            ? output.ModificationState
            : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1AccountModificationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccountModification(entry, context);
    });
};
const deserializeAws_json1_1AssociateConnectionAliasResult = (output, context) => {
    return {
        ConnectionIdentifier: output.ConnectionIdentifier !== undefined && output.ConnectionIdentifier !== null
            ? output.ConnectionIdentifier
            : undefined,
    };
};
const deserializeAws_json1_1AssociateIpGroupsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1AuthorizeIpRulesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1BundleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkspaceBundle(entry, context);
    });
};
const deserializeAws_json1_1ClientProperties = (output, context) => {
    return {
        ReconnectEnabled: output.ReconnectEnabled !== undefined && output.ReconnectEnabled !== null ? output.ReconnectEnabled : undefined,
    };
};
const deserializeAws_json1_1ClientPropertiesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ClientPropertiesResult(entry, context);
    });
};
const deserializeAws_json1_1ClientPropertiesResult = (output, context) => {
    return {
        ClientProperties: output.ClientProperties !== undefined && output.ClientProperties !== null
            ? deserializeAws_json1_1ClientProperties(output.ClientProperties, context)
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1ComputeType = (output, context) => {
    return {
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1ConnectionAlias = (output, context) => {
    return {
        AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
        Associations: output.Associations !== undefined && output.Associations !== null
            ? deserializeAws_json1_1ConnectionAliasAssociationList(output.Associations, context)
            : undefined,
        ConnectionString: output.ConnectionString !== undefined && output.ConnectionString !== null ? output.ConnectionString : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1ConnectionAliasAssociation = (output, context) => {
    return {
        AssociatedAccountId: output.AssociatedAccountId !== undefined && output.AssociatedAccountId !== null
            ? output.AssociatedAccountId
            : undefined,
        AssociationStatus: output.AssociationStatus !== undefined && output.AssociationStatus !== null
            ? output.AssociationStatus
            : undefined,
        ConnectionIdentifier: output.ConnectionIdentifier !== undefined && output.ConnectionIdentifier !== null
            ? output.ConnectionIdentifier
            : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1ConnectionAliasAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionAliasAssociation(entry, context);
    });
};
const deserializeAws_json1_1ConnectionAliasList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionAlias(entry, context);
    });
};
const deserializeAws_json1_1ConnectionAliasPermission = (output, context) => {
    return {
        AllowAssociation: output.AllowAssociation !== undefined && output.AllowAssociation !== null ? output.AllowAssociation : undefined,
        SharedAccountId: output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
    };
};
const deserializeAws_json1_1ConnectionAliasPermissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ConnectionAliasPermission(entry, context);
    });
};
const deserializeAws_json1_1CopyWorkspaceImageResult = (output, context) => {
    return {
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    };
};
const deserializeAws_json1_1CreateConnectionAliasResult = (output, context) => {
    return {
        AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
    };
};
const deserializeAws_json1_1CreateIpGroupResult = (output, context) => {
    return {
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    };
};
const deserializeAws_json1_1CreateTagsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateWorkspaceBundleResult = (output, context) => {
    return {
        WorkspaceBundle: output.WorkspaceBundle !== undefined && output.WorkspaceBundle !== null
            ? deserializeAws_json1_1WorkspaceBundle(output.WorkspaceBundle, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedCreateWorkspaceRequests(output.FailedRequests, context)
            : undefined,
        PendingRequests: output.PendingRequests !== undefined && output.PendingRequests !== null
            ? deserializeAws_json1_1WorkspaceList(output.PendingRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1DedicatedTenancyCidrRangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DefaultWorkspaceCreationProperties = (output, context) => {
    return {
        CustomSecurityGroupId: output.CustomSecurityGroupId !== undefined && output.CustomSecurityGroupId !== null
            ? output.CustomSecurityGroupId
            : undefined,
        DefaultOu: output.DefaultOu !== undefined && output.DefaultOu !== null ? output.DefaultOu : undefined,
        EnableInternetAccess: output.EnableInternetAccess !== undefined && output.EnableInternetAccess !== null
            ? output.EnableInternetAccess
            : undefined,
        EnableMaintenanceMode: output.EnableMaintenanceMode !== undefined && output.EnableMaintenanceMode !== null
            ? output.EnableMaintenanceMode
            : undefined,
        EnableWorkDocs: output.EnableWorkDocs !== undefined && output.EnableWorkDocs !== null ? output.EnableWorkDocs : undefined,
        UserEnabledAsLocalAdministrator: output.UserEnabledAsLocalAdministrator !== undefined && output.UserEnabledAsLocalAdministrator !== null
            ? output.UserEnabledAsLocalAdministrator
            : undefined,
    };
};
const deserializeAws_json1_1DeleteConnectionAliasResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteIpGroupResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteTagsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteWorkspaceBundleResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteWorkspaceImageResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterWorkspaceDirectoryResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeAccountModificationsResult = (output, context) => {
    return {
        AccountModifications: output.AccountModifications !== undefined && output.AccountModifications !== null
            ? deserializeAws_json1_1AccountModificationList(output.AccountModifications, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeAccountResult = (output, context) => {
    return {
        DedicatedTenancyManagementCidrRange: output.DedicatedTenancyManagementCidrRange !== undefined && output.DedicatedTenancyManagementCidrRange !== null
            ? output.DedicatedTenancyManagementCidrRange
            : undefined,
        DedicatedTenancySupport: output.DedicatedTenancySupport !== undefined && output.DedicatedTenancySupport !== null
            ? output.DedicatedTenancySupport
            : undefined,
    };
};
const deserializeAws_json1_1DescribeClientPropertiesResult = (output, context) => {
    return {
        ClientPropertiesList: output.ClientPropertiesList !== undefined && output.ClientPropertiesList !== null
            ? deserializeAws_json1_1ClientPropertiesList(output.ClientPropertiesList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeConnectionAliasesResult = (output, context) => {
    return {
        ConnectionAliases: output.ConnectionAliases !== undefined && output.ConnectionAliases !== null
            ? deserializeAws_json1_1ConnectionAliasList(output.ConnectionAliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeConnectionAliasPermissionsResult = (output, context) => {
    return {
        AliasId: output.AliasId !== undefined && output.AliasId !== null ? output.AliasId : undefined,
        ConnectionAliasPermissions: output.ConnectionAliasPermissions !== undefined && output.ConnectionAliasPermissions !== null
            ? deserializeAws_json1_1ConnectionAliasPermissions(output.ConnectionAliasPermissions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeIpGroupsResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Result: output.Result !== undefined && output.Result !== null
            ? deserializeAws_json1_1WorkspacesIpGroupsList(output.Result, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeTagsResult = (output, context) => {
    return {
        TagList: output.TagList !== undefined && output.TagList !== null
            ? deserializeAws_json1_1TagList(output.TagList, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspaceBundlesResult = (output, context) => {
    return {
        Bundles: output.Bundles !== undefined && output.Bundles !== null
            ? deserializeAws_json1_1BundleList(output.Bundles, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspaceDirectoriesResult = (output, context) => {
    return {
        Directories: output.Directories !== undefined && output.Directories !== null
            ? deserializeAws_json1_1DirectoryList(output.Directories, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspaceImagePermissionsResult = (output, context) => {
    return {
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
        ImagePermissions: output.ImagePermissions !== undefined && output.ImagePermissions !== null
            ? deserializeAws_json1_1ImagePermissions(output.ImagePermissions, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspaceImagesResult = (output, context) => {
    return {
        Images: output.Images !== undefined && output.Images !== null
            ? deserializeAws_json1_1WorkspaceImageList(output.Images, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspacesConnectionStatusResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        WorkspacesConnectionStatus: output.WorkspacesConnectionStatus !== undefined && output.WorkspacesConnectionStatus !== null
            ? deserializeAws_json1_1WorkspaceConnectionStatusList(output.WorkspacesConnectionStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspaceSnapshotsResult = (output, context) => {
    return {
        RebuildSnapshots: output.RebuildSnapshots !== undefined && output.RebuildSnapshots !== null
            ? deserializeAws_json1_1SnapshotList(output.RebuildSnapshots, context)
            : undefined,
        RestoreSnapshots: output.RestoreSnapshots !== undefined && output.RestoreSnapshots !== null
            ? deserializeAws_json1_1SnapshotList(output.RestoreSnapshots, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeWorkspacesResult = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Workspaces: output.Workspaces !== undefined && output.Workspaces !== null
            ? deserializeAws_json1_1WorkspaceList(output.Workspaces, context)
            : undefined,
    };
};
const deserializeAws_json1_1DirectoryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkspaceDirectory(entry, context);
    });
};
const deserializeAws_json1_1DisassociateConnectionAliasResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateIpGroupsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1DnsIpAddresses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1FailedCreateWorkspaceRequest = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        WorkspaceRequest: output.WorkspaceRequest !== undefined && output.WorkspaceRequest !== null
            ? deserializeAws_json1_1WorkspaceRequest(output.WorkspaceRequest, context)
            : undefined,
    };
};
const deserializeAws_json1_1FailedCreateWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedCreateWorkspaceRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedRebootWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedRebuildWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedStartWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedStopWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedTerminateWorkspaceRequests = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FailedWorkspaceChangeRequest(entry, context);
    });
};
const deserializeAws_json1_1FailedWorkspaceChangeRequest = (output, context) => {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
    };
};
const deserializeAws_json1_1ImagePermission = (output, context) => {
    return {
        SharedAccountId: output.SharedAccountId !== undefined && output.SharedAccountId !== null ? output.SharedAccountId : undefined,
    };
};
const deserializeAws_json1_1ImagePermissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ImagePermission(entry, context);
    });
};
const deserializeAws_json1_1ImportWorkspaceImageResult = (output, context) => {
    return {
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterValuesException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1InvalidResourceStateException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1IpGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1IpRuleItem = (output, context) => {
    return {
        ipRule: output.ipRule !== undefined && output.ipRule !== null ? output.ipRule : undefined,
        ruleDesc: output.ruleDesc !== undefined && output.ruleDesc !== null ? output.ruleDesc : undefined,
    };
};
const deserializeAws_json1_1IpRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1IpRuleItem(entry, context);
    });
};
const deserializeAws_json1_1ListAvailableManagementCidrRangesResult = (output, context) => {
    return {
        ManagementCidrRanges: output.ManagementCidrRanges !== undefined && output.ManagementCidrRanges !== null
            ? deserializeAws_json1_1DedicatedTenancyCidrRangeList(output.ManagementCidrRanges, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1MigrateWorkspaceResult = (output, context) => {
    return {
        SourceWorkspaceId: output.SourceWorkspaceId !== undefined && output.SourceWorkspaceId !== null
            ? output.SourceWorkspaceId
            : undefined,
        TargetWorkspaceId: output.TargetWorkspaceId !== undefined && output.TargetWorkspaceId !== null
            ? output.TargetWorkspaceId
            : undefined,
    };
};
const deserializeAws_json1_1ModificationState = (output, context) => {
    return {
        Resource: output.Resource !== undefined && output.Resource !== null ? output.Resource : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1ModificationStateList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1ModificationState(entry, context);
    });
};
const deserializeAws_json1_1ModifyAccountResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifyClientPropertiesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifySelfservicePermissionsResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifyWorkspaceAccessPropertiesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifyWorkspaceCreationPropertiesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifyWorkspacePropertiesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ModifyWorkspaceStateResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1OperatingSystem = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1OperationInProgressException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1OperationNotSupportedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RebootWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedRebootWorkspaceRequests(output.FailedRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1RebuildWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedRebuildWorkspaceRequests(output.FailedRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1RegisterWorkspaceDirectoryResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1ResourceAlreadyExistsException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceAssociatedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceCreationFailedException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceLimitExceededException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1ResourceUnavailableException = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1RestoreWorkspaceResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RevokeIpRulesResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1RootStorage = (output, context) => {
    return {
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
    };
};
const deserializeAws_json1_1SelfservicePermissions = (output, context) => {
    return {
        ChangeComputeType: output.ChangeComputeType !== undefined && output.ChangeComputeType !== null
            ? output.ChangeComputeType
            : undefined,
        IncreaseVolumeSize: output.IncreaseVolumeSize !== undefined && output.IncreaseVolumeSize !== null
            ? output.IncreaseVolumeSize
            : undefined,
        RebuildWorkspace: output.RebuildWorkspace !== undefined && output.RebuildWorkspace !== null ? output.RebuildWorkspace : undefined,
        RestartWorkspace: output.RestartWorkspace !== undefined && output.RestartWorkspace !== null ? output.RestartWorkspace : undefined,
        SwitchRunningMode: output.SwitchRunningMode !== undefined && output.SwitchRunningMode !== null
            ? output.SwitchRunningMode
            : undefined,
    };
};
const deserializeAws_json1_1Snapshot = (output, context) => {
    return {
        SnapshotTime: output.SnapshotTime !== undefined && output.SnapshotTime !== null
            ? new Date(Math.round(output.SnapshotTime * 1000))
            : undefined,
    };
};
const deserializeAws_json1_1SnapshotList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Snapshot(entry, context);
    });
};
const deserializeAws_json1_1StartWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedStartWorkspaceRequests(output.FailedRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1StopWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedStopWorkspaceRequests(output.FailedRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1SubnetIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
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
const deserializeAws_json1_1TerminateWorkspacesResult = (output, context) => {
    return {
        FailedRequests: output.FailedRequests !== undefined && output.FailedRequests !== null
            ? deserializeAws_json1_1FailedTerminateWorkspaceRequests(output.FailedRequests, context)
            : undefined,
    };
};
const deserializeAws_json1_1UnsupportedNetworkConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedWorkspaceConfigurationException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1UpdateConnectionAliasPermissionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateRulesOfIpGroupResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateWorkspaceBundleResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateWorkspaceImagePermissionResult = (output, context) => {
    return {};
};
const deserializeAws_json1_1UserStorage = (output, context) => {
    return {
        Capacity: output.Capacity !== undefined && output.Capacity !== null ? output.Capacity : undefined,
    };
};
const deserializeAws_json1_1Workspace = (output, context) => {
    return {
        BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
        ComputerName: output.ComputerName !== undefined && output.ComputerName !== null ? output.ComputerName : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        ModificationStates: output.ModificationStates !== undefined && output.ModificationStates !== null
            ? deserializeAws_json1_1ModificationStateList(output.ModificationStates, context)
            : undefined,
        RootVolumeEncryptionEnabled: output.RootVolumeEncryptionEnabled !== undefined && output.RootVolumeEncryptionEnabled !== null
            ? output.RootVolumeEncryptionEnabled
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
        UserVolumeEncryptionEnabled: output.UserVolumeEncryptionEnabled !== undefined && output.UserVolumeEncryptionEnabled !== null
            ? output.UserVolumeEncryptionEnabled
            : undefined,
        VolumeEncryptionKey: output.VolumeEncryptionKey !== undefined && output.VolumeEncryptionKey !== null
            ? output.VolumeEncryptionKey
            : undefined,
        WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
        WorkspaceProperties: output.WorkspaceProperties !== undefined && output.WorkspaceProperties !== null
            ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkspaceAccessProperties = (output, context) => {
    return {
        DeviceTypeAndroid: output.DeviceTypeAndroid !== undefined && output.DeviceTypeAndroid !== null
            ? output.DeviceTypeAndroid
            : undefined,
        DeviceTypeChromeOs: output.DeviceTypeChromeOs !== undefined && output.DeviceTypeChromeOs !== null
            ? output.DeviceTypeChromeOs
            : undefined,
        DeviceTypeIos: output.DeviceTypeIos !== undefined && output.DeviceTypeIos !== null ? output.DeviceTypeIos : undefined,
        DeviceTypeLinux: output.DeviceTypeLinux !== undefined && output.DeviceTypeLinux !== null ? output.DeviceTypeLinux : undefined,
        DeviceTypeOsx: output.DeviceTypeOsx !== undefined && output.DeviceTypeOsx !== null ? output.DeviceTypeOsx : undefined,
        DeviceTypeWeb: output.DeviceTypeWeb !== undefined && output.DeviceTypeWeb !== null ? output.DeviceTypeWeb : undefined,
        DeviceTypeWindows: output.DeviceTypeWindows !== undefined && output.DeviceTypeWindows !== null
            ? output.DeviceTypeWindows
            : undefined,
        DeviceTypeZeroClient: output.DeviceTypeZeroClient !== undefined && output.DeviceTypeZeroClient !== null
            ? output.DeviceTypeZeroClient
            : undefined,
    };
};
const deserializeAws_json1_1WorkspaceBundle = (output, context) => {
    return {
        BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
        ComputeType: output.ComputeType !== undefined && output.ComputeType !== null
            ? deserializeAws_json1_1ComputeType(output.ComputeType, context)
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
        LastUpdatedTime: output.LastUpdatedTime !== undefined && output.LastUpdatedTime !== null
            ? new Date(Math.round(output.LastUpdatedTime * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null ? output.Owner : undefined,
        RootStorage: output.RootStorage !== undefined && output.RootStorage !== null
            ? deserializeAws_json1_1RootStorage(output.RootStorage, context)
            : undefined,
        UserStorage: output.UserStorage !== undefined && output.UserStorage !== null
            ? deserializeAws_json1_1UserStorage(output.UserStorage, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkspaceConnectionStatus = (output, context) => {
    return {
        ConnectionState: output.ConnectionState !== undefined && output.ConnectionState !== null ? output.ConnectionState : undefined,
        ConnectionStateCheckTimestamp: output.ConnectionStateCheckTimestamp !== undefined && output.ConnectionStateCheckTimestamp !== null
            ? new Date(Math.round(output.ConnectionStateCheckTimestamp * 1000))
            : undefined,
        LastKnownUserConnectionTimestamp: output.LastKnownUserConnectionTimestamp !== undefined && output.LastKnownUserConnectionTimestamp !== null
            ? new Date(Math.round(output.LastKnownUserConnectionTimestamp * 1000))
            : undefined,
        WorkspaceId: output.WorkspaceId !== undefined && output.WorkspaceId !== null ? output.WorkspaceId : undefined,
    };
};
const deserializeAws_json1_1WorkspaceConnectionStatusList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkspaceConnectionStatus(entry, context);
    });
};
const deserializeAws_json1_1WorkspaceDirectory = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        CustomerUserName: output.CustomerUserName !== undefined && output.CustomerUserName !== null ? output.CustomerUserName : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        DirectoryName: output.DirectoryName !== undefined && output.DirectoryName !== null ? output.DirectoryName : undefined,
        DirectoryType: output.DirectoryType !== undefined && output.DirectoryType !== null ? output.DirectoryType : undefined,
        DnsIpAddresses: output.DnsIpAddresses !== undefined && output.DnsIpAddresses !== null
            ? deserializeAws_json1_1DnsIpAddresses(output.DnsIpAddresses, context)
            : undefined,
        IamRoleId: output.IamRoleId !== undefined && output.IamRoleId !== null ? output.IamRoleId : undefined,
        RegistrationCode: output.RegistrationCode !== undefined && output.RegistrationCode !== null ? output.RegistrationCode : undefined,
        SelfservicePermissions: output.SelfservicePermissions !== undefined && output.SelfservicePermissions !== null
            ? deserializeAws_json1_1SelfservicePermissions(output.SelfservicePermissions, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context)
            : undefined,
        Tenancy: output.Tenancy !== undefined && output.Tenancy !== null ? output.Tenancy : undefined,
        WorkspaceAccessProperties: output.WorkspaceAccessProperties !== undefined && output.WorkspaceAccessProperties !== null
            ? deserializeAws_json1_1WorkspaceAccessProperties(output.WorkspaceAccessProperties, context)
            : undefined,
        WorkspaceCreationProperties: output.WorkspaceCreationProperties !== undefined && output.WorkspaceCreationProperties !== null
            ? deserializeAws_json1_1DefaultWorkspaceCreationProperties(output.WorkspaceCreationProperties, context)
            : undefined,
        WorkspaceSecurityGroupId: output.WorkspaceSecurityGroupId !== undefined && output.WorkspaceSecurityGroupId !== null
            ? output.WorkspaceSecurityGroupId
            : undefined,
        ipGroupIds: output.ipGroupIds !== undefined && output.ipGroupIds !== null
            ? deserializeAws_json1_1IpGroupIdList(output.ipGroupIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkspaceImage = (output, context) => {
    return {
        Created: output.Created !== undefined && output.Created !== null ? new Date(Math.round(output.Created * 1000)) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        ImageId: output.ImageId !== undefined && output.ImageId !== null ? output.ImageId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OperatingSystem: output.OperatingSystem !== undefined && output.OperatingSystem !== null
            ? deserializeAws_json1_1OperatingSystem(output.OperatingSystem, context)
            : undefined,
        OwnerAccountId: output.OwnerAccountId !== undefined && output.OwnerAccountId !== null ? output.OwnerAccountId : undefined,
        RequiredTenancy: output.RequiredTenancy !== undefined && output.RequiredTenancy !== null ? output.RequiredTenancy : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1WorkspaceImageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkspaceImage(entry, context);
    });
};
const deserializeAws_json1_1WorkspaceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Workspace(entry, context);
    });
};
const deserializeAws_json1_1WorkspaceProperties = (output, context) => {
    return {
        ComputeTypeName: output.ComputeTypeName !== undefined && output.ComputeTypeName !== null ? output.ComputeTypeName : undefined,
        RootVolumeSizeGib: output.RootVolumeSizeGib !== undefined && output.RootVolumeSizeGib !== null
            ? output.RootVolumeSizeGib
            : undefined,
        RunningMode: output.RunningMode !== undefined && output.RunningMode !== null ? output.RunningMode : undefined,
        RunningModeAutoStopTimeoutInMinutes: output.RunningModeAutoStopTimeoutInMinutes !== undefined && output.RunningModeAutoStopTimeoutInMinutes !== null
            ? output.RunningModeAutoStopTimeoutInMinutes
            : undefined,
        UserVolumeSizeGib: output.UserVolumeSizeGib !== undefined && output.UserVolumeSizeGib !== null
            ? output.UserVolumeSizeGib
            : undefined,
    };
};
const deserializeAws_json1_1WorkspaceRequest = (output, context) => {
    return {
        BundleId: output.BundleId !== undefined && output.BundleId !== null ? output.BundleId : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        RootVolumeEncryptionEnabled: output.RootVolumeEncryptionEnabled !== undefined && output.RootVolumeEncryptionEnabled !== null
            ? output.RootVolumeEncryptionEnabled
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
        UserName: output.UserName !== undefined && output.UserName !== null ? output.UserName : undefined,
        UserVolumeEncryptionEnabled: output.UserVolumeEncryptionEnabled !== undefined && output.UserVolumeEncryptionEnabled !== null
            ? output.UserVolumeEncryptionEnabled
            : undefined,
        VolumeEncryptionKey: output.VolumeEncryptionKey !== undefined && output.VolumeEncryptionKey !== null
            ? output.VolumeEncryptionKey
            : undefined,
        WorkspaceProperties: output.WorkspaceProperties !== undefined && output.WorkspaceProperties !== null
            ? deserializeAws_json1_1WorkspaceProperties(output.WorkspaceProperties, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkspacesDefaultRoleNotFoundException = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_json1_1WorkspacesIpGroup = (output, context) => {
    return {
        groupDesc: output.groupDesc !== undefined && output.groupDesc !== null ? output.groupDesc : undefined,
        groupId: output.groupId !== undefined && output.groupId !== null ? output.groupId : undefined,
        groupName: output.groupName !== undefined && output.groupName !== null ? output.groupName : undefined,
        userRules: output.userRules !== undefined && output.userRules !== null
            ? deserializeAws_json1_1IpRuleList(output.userRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1WorkspacesIpGroupsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1WorkspacesIpGroup(entry, context);
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