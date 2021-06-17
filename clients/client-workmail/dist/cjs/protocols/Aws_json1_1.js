"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1StartMailboxExportJobCommand = exports.serializeAws_json1_1ResetPasswordCommand = exports.serializeAws_json1_1RegisterToWorkMailCommand = exports.serializeAws_json1_1PutRetentionPolicyCommand = exports.serializeAws_json1_1PutMailboxPermissionsCommand = exports.serializeAws_json1_1PutAccessControlRuleCommand = exports.serializeAws_json1_1ListUsersCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListResourcesCommand = exports.serializeAws_json1_1ListResourceDelegatesCommand = exports.serializeAws_json1_1ListOrganizationsCommand = exports.serializeAws_json1_1ListMobileDeviceAccessRulesCommand = exports.serializeAws_json1_1ListMailboxPermissionsCommand = exports.serializeAws_json1_1ListMailboxExportJobsCommand = exports.serializeAws_json1_1ListGroupsCommand = exports.serializeAws_json1_1ListGroupMembersCommand = exports.serializeAws_json1_1ListAliasesCommand = exports.serializeAws_json1_1ListAccessControlRulesCommand = exports.serializeAws_json1_1GetMobileDeviceAccessEffectCommand = exports.serializeAws_json1_1GetMailboxDetailsCommand = exports.serializeAws_json1_1GetDefaultRetentionPolicyCommand = exports.serializeAws_json1_1GetAccessControlEffectCommand = exports.serializeAws_json1_1DisassociateMemberFromGroupCommand = exports.serializeAws_json1_1DisassociateDelegateFromResourceCommand = exports.serializeAws_json1_1DescribeUserCommand = exports.serializeAws_json1_1DescribeResourceCommand = exports.serializeAws_json1_1DescribeOrganizationCommand = exports.serializeAws_json1_1DescribeMailboxExportJobCommand = exports.serializeAws_json1_1DescribeGroupCommand = exports.serializeAws_json1_1DeregisterFromWorkMailCommand = exports.serializeAws_json1_1DeleteUserCommand = exports.serializeAws_json1_1DeleteRetentionPolicyCommand = exports.serializeAws_json1_1DeleteResourceCommand = exports.serializeAws_json1_1DeleteOrganizationCommand = exports.serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = exports.serializeAws_json1_1DeleteMailboxPermissionsCommand = exports.serializeAws_json1_1DeleteGroupCommand = exports.serializeAws_json1_1DeleteAliasCommand = exports.serializeAws_json1_1DeleteAccessControlRuleCommand = exports.serializeAws_json1_1CreateUserCommand = exports.serializeAws_json1_1CreateResourceCommand = exports.serializeAws_json1_1CreateOrganizationCommand = exports.serializeAws_json1_1CreateMobileDeviceAccessRuleCommand = exports.serializeAws_json1_1CreateGroupCommand = exports.serializeAws_json1_1CreateAliasCommand = exports.serializeAws_json1_1CancelMailboxExportJobCommand = exports.serializeAws_json1_1AssociateMemberToGroupCommand = exports.serializeAws_json1_1AssociateDelegateToResourceCommand = void 0;
exports.deserializeAws_json1_1RegisterToWorkMailCommand = exports.deserializeAws_json1_1PutRetentionPolicyCommand = exports.deserializeAws_json1_1PutMailboxPermissionsCommand = exports.deserializeAws_json1_1PutAccessControlRuleCommand = exports.deserializeAws_json1_1ListUsersCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListResourcesCommand = exports.deserializeAws_json1_1ListResourceDelegatesCommand = exports.deserializeAws_json1_1ListOrganizationsCommand = exports.deserializeAws_json1_1ListMobileDeviceAccessRulesCommand = exports.deserializeAws_json1_1ListMailboxPermissionsCommand = exports.deserializeAws_json1_1ListMailboxExportJobsCommand = exports.deserializeAws_json1_1ListGroupsCommand = exports.deserializeAws_json1_1ListGroupMembersCommand = exports.deserializeAws_json1_1ListAliasesCommand = exports.deserializeAws_json1_1ListAccessControlRulesCommand = exports.deserializeAws_json1_1GetMobileDeviceAccessEffectCommand = exports.deserializeAws_json1_1GetMailboxDetailsCommand = exports.deserializeAws_json1_1GetDefaultRetentionPolicyCommand = exports.deserializeAws_json1_1GetAccessControlEffectCommand = exports.deserializeAws_json1_1DisassociateMemberFromGroupCommand = exports.deserializeAws_json1_1DisassociateDelegateFromResourceCommand = exports.deserializeAws_json1_1DescribeUserCommand = exports.deserializeAws_json1_1DescribeResourceCommand = exports.deserializeAws_json1_1DescribeOrganizationCommand = exports.deserializeAws_json1_1DescribeMailboxExportJobCommand = exports.deserializeAws_json1_1DescribeGroupCommand = exports.deserializeAws_json1_1DeregisterFromWorkMailCommand = exports.deserializeAws_json1_1DeleteUserCommand = exports.deserializeAws_json1_1DeleteRetentionPolicyCommand = exports.deserializeAws_json1_1DeleteResourceCommand = exports.deserializeAws_json1_1DeleteOrganizationCommand = exports.deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = exports.deserializeAws_json1_1DeleteMailboxPermissionsCommand = exports.deserializeAws_json1_1DeleteGroupCommand = exports.deserializeAws_json1_1DeleteAliasCommand = exports.deserializeAws_json1_1DeleteAccessControlRuleCommand = exports.deserializeAws_json1_1CreateUserCommand = exports.deserializeAws_json1_1CreateResourceCommand = exports.deserializeAws_json1_1CreateOrganizationCommand = exports.deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand = exports.deserializeAws_json1_1CreateGroupCommand = exports.deserializeAws_json1_1CreateAliasCommand = exports.deserializeAws_json1_1CancelMailboxExportJobCommand = exports.deserializeAws_json1_1AssociateMemberToGroupCommand = exports.deserializeAws_json1_1AssociateDelegateToResourceCommand = exports.serializeAws_json1_1UpdateResourceCommand = exports.serializeAws_json1_1UpdatePrimaryEmailAddressCommand = exports.serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = exports.serializeAws_json1_1UpdateMailboxQuotaCommand = void 0;
exports.deserializeAws_json1_1UpdateResourceCommand = exports.deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = exports.deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = exports.deserializeAws_json1_1UpdateMailboxQuotaCommand = exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1StartMailboxExportJobCommand = exports.deserializeAws_json1_1ResetPasswordCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const uuid_1 = require("uuid");
const serializeAws_json1_1AssociateDelegateToResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.AssociateDelegateToResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateDelegateToResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateDelegateToResourceCommand = serializeAws_json1_1AssociateDelegateToResourceCommand;
const serializeAws_json1_1AssociateMemberToGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.AssociateMemberToGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AssociateMemberToGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AssociateMemberToGroupCommand = serializeAws_json1_1AssociateMemberToGroupCommand;
const serializeAws_json1_1CancelMailboxExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CancelMailboxExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelMailboxExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelMailboxExportJobCommand = serializeAws_json1_1CancelMailboxExportJobCommand;
const serializeAws_json1_1CreateAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAliasCommand = serializeAws_json1_1CreateAliasCommand;
const serializeAws_json1_1CreateGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGroupCommand = serializeAws_json1_1CreateGroupCommand;
const serializeAws_json1_1CreateMobileDeviceAccessRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateMobileDeviceAccessRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateMobileDeviceAccessRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateMobileDeviceAccessRuleCommand = serializeAws_json1_1CreateMobileDeviceAccessRuleCommand;
const serializeAws_json1_1CreateOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateOrganizationCommand = serializeAws_json1_1CreateOrganizationCommand;
const serializeAws_json1_1CreateResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateResourceCommand = serializeAws_json1_1CreateResourceCommand;
const serializeAws_json1_1CreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.CreateUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateUserCommand = serializeAws_json1_1CreateUserCommand;
const serializeAws_json1_1DeleteAccessControlRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteAccessControlRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAccessControlRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAccessControlRuleCommand = serializeAws_json1_1DeleteAccessControlRuleCommand;
const serializeAws_json1_1DeleteAliasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteAlias",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteAliasRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteAliasCommand = serializeAws_json1_1DeleteAliasCommand;
const serializeAws_json1_1DeleteGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteGroupCommand = serializeAws_json1_1DeleteGroupCommand;
const serializeAws_json1_1DeleteMailboxPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteMailboxPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMailboxPermissionsCommand = serializeAws_json1_1DeleteMailboxPermissionsCommand;
const serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteMobileDeviceAccessRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteMobileDeviceAccessRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = serializeAws_json1_1DeleteMobileDeviceAccessRuleCommand;
const serializeAws_json1_1DeleteOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOrganizationCommand = serializeAws_json1_1DeleteOrganizationCommand;
const serializeAws_json1_1DeleteResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteResourceCommand = serializeAws_json1_1DeleteResourceCommand;
const serializeAws_json1_1DeleteRetentionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteRetentionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteRetentionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteRetentionPolicyCommand = serializeAws_json1_1DeleteRetentionPolicyCommand;
const serializeAws_json1_1DeleteUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeleteUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteUserCommand = serializeAws_json1_1DeleteUserCommand;
const serializeAws_json1_1DeregisterFromWorkMailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DeregisterFromWorkMail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterFromWorkMailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterFromWorkMailCommand = serializeAws_json1_1DeregisterFromWorkMailCommand;
const serializeAws_json1_1DescribeGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DescribeGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeGroupCommand = serializeAws_json1_1DescribeGroupCommand;
const serializeAws_json1_1DescribeMailboxExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DescribeMailboxExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeMailboxExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeMailboxExportJobCommand = serializeAws_json1_1DescribeMailboxExportJobCommand;
const serializeAws_json1_1DescribeOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DescribeOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationCommand = serializeAws_json1_1DescribeOrganizationCommand;
const serializeAws_json1_1DescribeResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DescribeResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeResourceCommand = serializeAws_json1_1DescribeResourceCommand;
const serializeAws_json1_1DescribeUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DescribeUser",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeUserRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeUserCommand = serializeAws_json1_1DescribeUserCommand;
const serializeAws_json1_1DisassociateDelegateFromResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DisassociateDelegateFromResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateDelegateFromResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateDelegateFromResourceCommand = serializeAws_json1_1DisassociateDelegateFromResourceCommand;
const serializeAws_json1_1DisassociateMemberFromGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.DisassociateMemberFromGroup",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisassociateMemberFromGroupRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisassociateMemberFromGroupCommand = serializeAws_json1_1DisassociateMemberFromGroupCommand;
const serializeAws_json1_1GetAccessControlEffectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.GetAccessControlEffect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetAccessControlEffectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetAccessControlEffectCommand = serializeAws_json1_1GetAccessControlEffectCommand;
const serializeAws_json1_1GetDefaultRetentionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.GetDefaultRetentionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetDefaultRetentionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetDefaultRetentionPolicyCommand = serializeAws_json1_1GetDefaultRetentionPolicyCommand;
const serializeAws_json1_1GetMailboxDetailsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.GetMailboxDetails",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMailboxDetailsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMailboxDetailsCommand = serializeAws_json1_1GetMailboxDetailsCommand;
const serializeAws_json1_1GetMobileDeviceAccessEffectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.GetMobileDeviceAccessEffect",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1GetMobileDeviceAccessEffectRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1GetMobileDeviceAccessEffectCommand = serializeAws_json1_1GetMobileDeviceAccessEffectCommand;
const serializeAws_json1_1ListAccessControlRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListAccessControlRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccessControlRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAccessControlRulesCommand = serializeAws_json1_1ListAccessControlRulesCommand;
const serializeAws_json1_1ListAliasesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListAliases",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAliasesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAliasesCommand = serializeAws_json1_1ListAliasesCommand;
const serializeAws_json1_1ListGroupMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListGroupMembers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupMembersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGroupMembersCommand = serializeAws_json1_1ListGroupMembersCommand;
const serializeAws_json1_1ListGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListGroups",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListGroupsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListGroupsCommand = serializeAws_json1_1ListGroupsCommand;
const serializeAws_json1_1ListMailboxExportJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListMailboxExportJobs",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMailboxExportJobsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMailboxExportJobsCommand = serializeAws_json1_1ListMailboxExportJobsCommand;
const serializeAws_json1_1ListMailboxPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListMailboxPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMailboxPermissionsCommand = serializeAws_json1_1ListMailboxPermissionsCommand;
const serializeAws_json1_1ListMobileDeviceAccessRulesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListMobileDeviceAccessRules",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListMobileDeviceAccessRulesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListMobileDeviceAccessRulesCommand = serializeAws_json1_1ListMobileDeviceAccessRulesCommand;
const serializeAws_json1_1ListOrganizationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListOrganizations",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOrganizationsCommand = serializeAws_json1_1ListOrganizationsCommand;
const serializeAws_json1_1ListResourceDelegatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListResourceDelegates",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourceDelegatesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourceDelegatesCommand = serializeAws_json1_1ListResourceDelegatesCommand;
const serializeAws_json1_1ListResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListResources",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListResourcesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListResourcesCommand = serializeAws_json1_1ListResourcesCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListUsersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ListUsers",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListUsersRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListUsersCommand = serializeAws_json1_1ListUsersCommand;
const serializeAws_json1_1PutAccessControlRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.PutAccessControlRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutAccessControlRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutAccessControlRuleCommand = serializeAws_json1_1PutAccessControlRuleCommand;
const serializeAws_json1_1PutMailboxPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.PutMailboxPermissions",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutMailboxPermissionsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutMailboxPermissionsCommand = serializeAws_json1_1PutMailboxPermissionsCommand;
const serializeAws_json1_1PutRetentionPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.PutRetentionPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1PutRetentionPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1PutRetentionPolicyCommand = serializeAws_json1_1PutRetentionPolicyCommand;
const serializeAws_json1_1RegisterToWorkMailCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.RegisterToWorkMail",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterToWorkMailRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterToWorkMailCommand = serializeAws_json1_1RegisterToWorkMailCommand;
const serializeAws_json1_1ResetPasswordCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.ResetPassword",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ResetPasswordRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ResetPasswordCommand = serializeAws_json1_1ResetPasswordCommand;
const serializeAws_json1_1StartMailboxExportJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.StartMailboxExportJob",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1StartMailboxExportJobRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1StartMailboxExportJobCommand = serializeAws_json1_1StartMailboxExportJobCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateMailboxQuotaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.UpdateMailboxQuota",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMailboxQuotaRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMailboxQuotaCommand = serializeAws_json1_1UpdateMailboxQuotaCommand;
const serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.UpdateMobileDeviceAccessRule",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateMobileDeviceAccessRuleRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = serializeAws_json1_1UpdateMobileDeviceAccessRuleCommand;
const serializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.UpdatePrimaryEmailAddress",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePrimaryEmailAddressRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePrimaryEmailAddressCommand = serializeAws_json1_1UpdatePrimaryEmailAddressCommand;
const serializeAws_json1_1UpdateResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "WorkMailService.UpdateResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateResourceCommand = serializeAws_json1_1UpdateResourceCommand;
const deserializeAws_json1_1AssociateDelegateToResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateDelegateToResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateDelegateToResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateDelegateToResourceCommand = deserializeAws_json1_1AssociateDelegateToResourceCommand;
const deserializeAws_json1_1AssociateDelegateToResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AssociateMemberToGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AssociateMemberToGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AssociateMemberToGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AssociateMemberToGroupCommand = deserializeAws_json1_1AssociateMemberToGroupCommand;
const deserializeAws_json1_1AssociateMemberToGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelMailboxExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelMailboxExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelMailboxExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelMailboxExportJobCommand = deserializeAws_json1_1CancelMailboxExportJobCommand;
const deserializeAws_json1_1CancelMailboxExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAliasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAliasCommand = deserializeAws_json1_1CreateAliasCommand;
const deserializeAws_json1_1CreateAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail#EmailAddressInUseException":
            response = {
                ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail#MailDomainNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail#MailDomainStateException":
            response = {
                ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGroupCommand = deserializeAws_json1_1CreateGroupCommand;
const deserializeAws_json1_1CreateGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail#NameAvailabilityException":
            response = {
                ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail#ReservedNameException":
            response = {
                ...(await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateMobileDeviceAccessRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateMobileDeviceAccessRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand = deserializeAws_json1_1CreateMobileDeviceAccessRuleCommand;
const deserializeAws_json1_1CreateMobileDeviceAccessRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateOrganizationCommand = deserializeAws_json1_1CreateOrganizationCommand;
const deserializeAws_json1_1CreateOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryInUseException":
        case "com.amazonaws.workmail#DirectoryInUseException":
            response = {
                ...(await deserializeAws_json1_1DirectoryInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail#NameAvailabilityException":
            response = {
                ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateResourceCommand = deserializeAws_json1_1CreateResourceCommand;
const deserializeAws_json1_1CreateResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail#NameAvailabilityException":
            response = {
                ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail#ReservedNameException":
            response = {
                ...(await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateUserCommand = deserializeAws_json1_1CreateUserCommand;
const deserializeAws_json1_1CreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workmail#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail#NameAvailabilityException":
            response = {
                ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ReservedNameException":
        case "com.amazonaws.workmail#ReservedNameException":
            response = {
                ...(await deserializeAws_json1_1ReservedNameExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAccessControlRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAccessControlRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAccessControlRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAccessControlRuleCommand = deserializeAws_json1_1DeleteAccessControlRuleCommand;
const deserializeAws_json1_1DeleteAccessControlRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteAliasCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteAliasCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteAliasResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteAliasCommand = deserializeAws_json1_1DeleteAliasCommand;
const deserializeAws_json1_1DeleteAliasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteGroupCommand = deserializeAws_json1_1DeleteGroupCommand;
const deserializeAws_json1_1DeleteGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMailboxPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMailboxPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMailboxPermissionsCommand = deserializeAws_json1_1DeleteMailboxPermissionsCommand;
const deserializeAws_json1_1DeleteMailboxPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteMobileDeviceAccessRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand = deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommand;
const deserializeAws_json1_1DeleteMobileDeviceAccessRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOrganizationCommand = deserializeAws_json1_1DeleteOrganizationCommand;
const deserializeAws_json1_1DeleteOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteResourceCommand = deserializeAws_json1_1DeleteResourceCommand;
const deserializeAws_json1_1DeleteResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteRetentionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteRetentionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteRetentionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteRetentionPolicyCommand = deserializeAws_json1_1DeleteRetentionPolicyCommand;
const deserializeAws_json1_1DeleteRetentionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeleteUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteUserCommand = deserializeAws_json1_1DeleteUserCommand;
const deserializeAws_json1_1DeleteUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterFromWorkMailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterFromWorkMailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeregisterFromWorkMailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterFromWorkMailCommand = deserializeAws_json1_1DeregisterFromWorkMailCommand;
const deserializeAws_json1_1DeregisterFromWorkMailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeGroupCommand = deserializeAws_json1_1DescribeGroupCommand;
const deserializeAws_json1_1DescribeGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeMailboxExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeMailboxExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeMailboxExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeMailboxExportJobCommand = deserializeAws_json1_1DescribeMailboxExportJobCommand;
const deserializeAws_json1_1DescribeMailboxExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationCommand = deserializeAws_json1_1DescribeOrganizationCommand;
const deserializeAws_json1_1DescribeOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeResourceCommand = deserializeAws_json1_1DescribeResourceCommand;
const deserializeAws_json1_1DescribeResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeUserCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeUserCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeUserResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeUserCommand = deserializeAws_json1_1DescribeUserCommand;
const deserializeAws_json1_1DescribeUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateDelegateFromResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateDelegateFromResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateDelegateFromResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateDelegateFromResourceCommand = deserializeAws_json1_1DisassociateDelegateFromResourceCommand;
const deserializeAws_json1_1DisassociateDelegateFromResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisassociateMemberFromGroupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisassociateMemberFromGroupCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisassociateMemberFromGroupResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisassociateMemberFromGroupCommand = deserializeAws_json1_1DisassociateMemberFromGroupCommand;
const deserializeAws_json1_1DisassociateMemberFromGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetAccessControlEffectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetAccessControlEffectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetAccessControlEffectResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetAccessControlEffectCommand = deserializeAws_json1_1GetAccessControlEffectCommand;
const deserializeAws_json1_1GetAccessControlEffectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetDefaultRetentionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetDefaultRetentionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetDefaultRetentionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetDefaultRetentionPolicyCommand = deserializeAws_json1_1GetDefaultRetentionPolicyCommand;
const deserializeAws_json1_1GetDefaultRetentionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMailboxDetailsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMailboxDetailsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMailboxDetailsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMailboxDetailsCommand = deserializeAws_json1_1GetMailboxDetailsCommand;
const deserializeAws_json1_1GetMailboxDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1GetMobileDeviceAccessEffectCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1GetMobileDeviceAccessEffectCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1GetMobileDeviceAccessEffectResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1GetMobileDeviceAccessEffectCommand = deserializeAws_json1_1GetMobileDeviceAccessEffectCommand;
const deserializeAws_json1_1GetMobileDeviceAccessEffectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAccessControlRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAccessControlRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccessControlRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAccessControlRulesCommand = deserializeAws_json1_1ListAccessControlRulesCommand;
const deserializeAws_json1_1ListAccessControlRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAliasesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAliasesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAliasesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAliasesCommand = deserializeAws_json1_1ListAliasesCommand;
const deserializeAws_json1_1ListAliasesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGroupMembersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGroupMembersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupMembersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGroupMembersCommand = deserializeAws_json1_1ListGroupMembersCommand;
const deserializeAws_json1_1ListGroupMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListGroupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListGroupsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListGroupsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListGroupsCommand = deserializeAws_json1_1ListGroupsCommand;
const deserializeAws_json1_1ListGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMailboxExportJobsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMailboxExportJobsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMailboxExportJobsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMailboxExportJobsCommand = deserializeAws_json1_1ListMailboxExportJobsCommand;
const deserializeAws_json1_1ListMailboxExportJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMailboxPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMailboxPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMailboxPermissionsCommand = deserializeAws_json1_1ListMailboxPermissionsCommand;
const deserializeAws_json1_1ListMailboxPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListMobileDeviceAccessRulesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListMobileDeviceAccessRulesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListMobileDeviceAccessRulesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListMobileDeviceAccessRulesCommand = deserializeAws_json1_1ListMobileDeviceAccessRulesCommand;
const deserializeAws_json1_1ListMobileDeviceAccessRulesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListOrganizationsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOrganizationsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOrganizationsCommand = deserializeAws_json1_1ListOrganizationsCommand;
const deserializeAws_json1_1ListOrganizationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourceDelegatesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourceDelegatesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourceDelegatesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourceDelegatesCommand = deserializeAws_json1_1ListResourceDelegatesCommand;
const deserializeAws_json1_1ListResourceDelegatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListResourcesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListResourcesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListResourcesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListResourcesCommand = deserializeAws_json1_1ListResourcesCommand;
const deserializeAws_json1_1ListResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTagsForResourceCommand = deserializeAws_json1_1ListTagsForResourceCommand;
const deserializeAws_json1_1ListTagsForResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.workmail#ResourceNotFoundException":
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
const deserializeAws_json1_1ListUsersCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListUsersCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListUsersResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListUsersCommand = deserializeAws_json1_1ListUsersCommand;
const deserializeAws_json1_1ListUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutAccessControlRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutAccessControlRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutAccessControlRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutAccessControlRuleCommand = deserializeAws_json1_1PutAccessControlRuleCommand;
const deserializeAws_json1_1PutAccessControlRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutMailboxPermissionsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutMailboxPermissionsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutMailboxPermissionsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutMailboxPermissionsCommand = deserializeAws_json1_1PutMailboxPermissionsCommand;
const deserializeAws_json1_1PutMailboxPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1PutRetentionPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1PutRetentionPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1PutRetentionPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1PutRetentionPolicyCommand = deserializeAws_json1_1PutRetentionPolicyCommand;
const deserializeAws_json1_1PutRetentionPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterToWorkMailCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterToWorkMailCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1RegisterToWorkMailResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterToWorkMailCommand = deserializeAws_json1_1RegisterToWorkMailCommand;
const deserializeAws_json1_1RegisterToWorkMailCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail#EmailAddressInUseException":
            response = {
                ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyRegisteredException":
        case "com.amazonaws.workmail#EntityAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail#MailDomainNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail#MailDomainStateException":
            response = {
                ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ResetPasswordCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ResetPasswordCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ResetPasswordResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ResetPasswordCommand = deserializeAws_json1_1ResetPasswordCommand;
const deserializeAws_json1_1ResetPasswordCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workmail#InvalidPasswordException":
            response = {
                ...(await deserializeAws_json1_1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1StartMailboxExportJobCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1StartMailboxExportJobCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1StartMailboxExportJobResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1StartMailboxExportJobCommand = deserializeAws_json1_1StartMailboxExportJobCommand;
const deserializeAws_json1_1StartMailboxExportJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workmail#LimitExceededException":
            response = {
                ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1TagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1TagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1TagResourceCommand = deserializeAws_json1_1TagResourceCommand;
const deserializeAws_json1_1TagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.workmail#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyTagsException":
        case "com.amazonaws.workmail#TooManyTagsException":
            response = {
                ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UntagResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UntagResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UntagResourceCommand = deserializeAws_json1_1UntagResourceCommand;
const deserializeAws_json1_1UntagResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.workmail#ResourceNotFoundException":
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
const deserializeAws_json1_1UpdateMailboxQuotaCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMailboxQuotaCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMailboxQuotaResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMailboxQuotaCommand = deserializeAws_json1_1UpdateMailboxQuotaCommand;
const deserializeAws_json1_1UpdateMailboxQuotaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateMobileDeviceAccessRuleResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand = deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommand;
const deserializeAws_json1_1UpdateMobileDeviceAccessRuleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePrimaryEmailAddressResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePrimaryEmailAddressCommand = deserializeAws_json1_1UpdatePrimaryEmailAddressCommand;
const deserializeAws_json1_1UpdatePrimaryEmailAddressCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryServiceAuthenticationFailedException":
        case "com.amazonaws.workmail#DirectoryServiceAuthenticationFailedException":
            response = {
                ...(await deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail#EmailAddressInUseException":
            response = {
                ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.workmail#InvalidParameterException":
            response = {
                ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail#MailDomainNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail#MailDomainStateException":
            response = {
                ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedOperationException":
        case "com.amazonaws.workmail#UnsupportedOperationException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateResourceCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateResourceResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateResourceCommand = deserializeAws_json1_1UpdateResourceCommand;
const deserializeAws_json1_1UpdateResourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DirectoryUnavailableException":
        case "com.amazonaws.workmail#DirectoryUnavailableException":
            response = {
                ...(await deserializeAws_json1_1DirectoryUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EmailAddressInUseException":
        case "com.amazonaws.workmail#EmailAddressInUseException":
            response = {
                ...(await deserializeAws_json1_1EmailAddressInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotFoundException":
        case "com.amazonaws.workmail#EntityNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EntityNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityStateException":
        case "com.amazonaws.workmail#EntityStateException":
            response = {
                ...(await deserializeAws_json1_1EntityStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationException":
        case "com.amazonaws.workmail#InvalidConfigurationException":
            response = {
                ...(await deserializeAws_json1_1InvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainNotFoundException":
        case "com.amazonaws.workmail#MailDomainNotFoundException":
            response = {
                ...(await deserializeAws_json1_1MailDomainNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MailDomainStateException":
        case "com.amazonaws.workmail#MailDomainStateException":
            response = {
                ...(await deserializeAws_json1_1MailDomainStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NameAvailabilityException":
        case "com.amazonaws.workmail#NameAvailabilityException":
            response = {
                ...(await deserializeAws_json1_1NameAvailabilityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotFoundException":
        case "com.amazonaws.workmail#OrganizationNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationStateException":
        case "com.amazonaws.workmail#OrganizationStateException":
            response = {
                ...(await deserializeAws_json1_1OrganizationStateExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DirectoryInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryInUseException(body, context);
    const contents = {
        name: "DirectoryInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryServiceAuthenticationFailedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryServiceAuthenticationFailedException(body, context);
    const contents = {
        name: "DirectoryServiceAuthenticationFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DirectoryUnavailableExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DirectoryUnavailableException(body, context);
    const contents = {
        name: "DirectoryUnavailableException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EmailAddressInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EmailAddressInUseException(body, context);
    const contents = {
        name: "EmailAddressInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityAlreadyRegisteredException(body, context);
    const contents = {
        name: "EntityAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityNotFoundException(body, context);
    const contents = {
        name: "EntityNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EntityStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EntityStateException(body, context);
    const contents = {
        name: "EntityStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidConfigurationException(body, context);
    const contents = {
        name: "InvalidConfigurationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidParameterException(body, context);
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidPasswordException(body, context);
    const contents = {
        name: "InvalidPasswordException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1LimitExceededException(body, context);
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MailDomainNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MailDomainNotFoundException(body, context);
    const contents = {
        name: "MailDomainNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MailDomainStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MailDomainStateException(body, context);
    const contents = {
        name: "MailDomainStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1NameAvailabilityExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1NameAvailabilityException(body, context);
    const contents = {
        name: "NameAvailabilityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotFoundException(body, context);
    const contents = {
        name: "OrganizationNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationStateException(body, context);
    const contents = {
        name: "OrganizationStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ReservedNameExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ReservedNameException(body, context);
    const contents = {
        name: "ReservedNameException",
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
const deserializeAws_json1_1TooManyTagsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyTagsException(body, context);
    const contents = {
        name: "TooManyTagsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedOperationException(body, context);
    const contents = {
        name: "UnsupportedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1ActionsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1AssociateDelegateToResourceRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1AssociateMemberToGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1BookingOptions = (input, context) => {
    return {
        ...(input.AutoAcceptRequests !== undefined &&
            input.AutoAcceptRequests !== null && { AutoAcceptRequests: input.AutoAcceptRequests }),
        ...(input.AutoDeclineConflictingRequests !== undefined &&
            input.AutoDeclineConflictingRequests !== null && {
            AutoDeclineConflictingRequests: input.AutoDeclineConflictingRequests,
        }),
        ...(input.AutoDeclineRecurringRequests !== undefined &&
            input.AutoDeclineRecurringRequests !== null && {
            AutoDeclineRecurringRequests: input.AutoDeclineRecurringRequests,
        }),
    };
};
const serializeAws_json1_1CancelMailboxExportJobRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1CreateAliasRequest = (input, context) => {
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1CreateGroupRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1CreateMobileDeviceAccessRuleRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DeviceModels !== undefined &&
            input.DeviceModels !== null && {
            DeviceModels: serializeAws_json1_1DeviceModelList(input.DeviceModels, context),
        }),
        ...(input.DeviceOperatingSystems !== undefined &&
            input.DeviceOperatingSystems !== null && {
            DeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
        }),
        ...(input.DeviceTypes !== undefined &&
            input.DeviceTypes !== null && { DeviceTypes: serializeAws_json1_1DeviceTypeList(input.DeviceTypes, context) }),
        ...(input.DeviceUserAgents !== undefined &&
            input.DeviceUserAgents !== null && {
            DeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.DeviceUserAgents, context),
        }),
        ...(input.Effect !== undefined && input.Effect !== null && { Effect: input.Effect }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotDeviceModels !== undefined &&
            input.NotDeviceModels !== null && {
            NotDeviceModels: serializeAws_json1_1DeviceModelList(input.NotDeviceModels, context),
        }),
        ...(input.NotDeviceOperatingSystems !== undefined &&
            input.NotDeviceOperatingSystems !== null && {
            NotDeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.NotDeviceOperatingSystems, context),
        }),
        ...(input.NotDeviceTypes !== undefined &&
            input.NotDeviceTypes !== null && {
            NotDeviceTypes: serializeAws_json1_1DeviceTypeList(input.NotDeviceTypes, context),
        }),
        ...(input.NotDeviceUserAgents !== undefined &&
            input.NotDeviceUserAgents !== null && {
            NotDeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.NotDeviceUserAgents, context),
        }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1CreateOrganizationRequest = (input, context) => {
    var _a;
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DirectoryId !== undefined && input.DirectoryId !== null && { DirectoryId: input.DirectoryId }),
        ...(input.Domains !== undefined &&
            input.Domains !== null && { Domains: serializeAws_json1_1Domains(input.Domains, context) }),
        ...(input.EnableInteroperability !== undefined &&
            input.EnableInteroperability !== null && { EnableInteroperability: input.EnableInteroperability }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
    };
};
const serializeAws_json1_1CreateResourceRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1CreateUserRequest = (input, context) => {
    return {
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
    };
};
const serializeAws_json1_1DeleteAccessControlRuleRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteAliasRequest = (input, context) => {
    return {
        ...(input.Alias !== undefined && input.Alias !== null && { Alias: input.Alias }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteMailboxPermissionsRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.GranteeId !== undefined && input.GranteeId !== null && { GranteeId: input.GranteeId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteMobileDeviceAccessRuleRequest = (input, context) => {
    return {
        ...(input.MobileDeviceAccessRuleId !== undefined &&
            input.MobileDeviceAccessRuleId !== null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteOrganizationRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.DeleteDirectory !== undefined &&
            input.DeleteDirectory !== null && { DeleteDirectory: input.DeleteDirectory }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteResourceRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DeleteRetentionPolicyRequest = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DeleteUserRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1DeregisterFromWorkMailRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DescribeGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DescribeMailboxExportJobRequest = (input, context) => {
    return {
        ...(input.JobId !== undefined && input.JobId !== null && { JobId: input.JobId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DescribeOrganizationRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1DescribeResourceRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DescribeUserRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1DeviceModelList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeviceOperatingSystemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeviceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DeviceUserAgentList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1DisassociateDelegateFromResourceRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1DisassociateMemberFromGroupRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.MemberId !== undefined && input.MemberId !== null && { MemberId: input.MemberId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1Domain = (input, context) => {
    return {
        ...(input.DomainName !== undefined && input.DomainName !== null && { DomainName: input.DomainName }),
        ...(input.HostedZoneId !== undefined && input.HostedZoneId !== null && { HostedZoneId: input.HostedZoneId }),
    };
};
const serializeAws_json1_1Domains = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Domain(entry, context);
    });
};
const serializeAws_json1_1FolderConfiguration = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Period !== undefined && input.Period !== null && { Period: input.Period }),
    };
};
const serializeAws_json1_1FolderConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1FolderConfiguration(entry, context);
    });
};
const serializeAws_json1_1GetAccessControlEffectRequest = (input, context) => {
    return {
        ...(input.Action !== undefined && input.Action !== null && { Action: input.Action }),
        ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1GetDefaultRetentionPolicyRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1GetMailboxDetailsRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1GetMobileDeviceAccessEffectRequest = (input, context) => {
    return {
        ...(input.DeviceModel !== undefined && input.DeviceModel !== null && { DeviceModel: input.DeviceModel }),
        ...(input.DeviceOperatingSystem !== undefined &&
            input.DeviceOperatingSystem !== null && { DeviceOperatingSystem: input.DeviceOperatingSystem }),
        ...(input.DeviceType !== undefined && input.DeviceType !== null && { DeviceType: input.DeviceType }),
        ...(input.DeviceUserAgent !== undefined &&
            input.DeviceUserAgent !== null && { DeviceUserAgent: input.DeviceUserAgent }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1IpRangeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1ListAccessControlRulesRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListAliasesRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListGroupMembersRequest = (input, context) => {
    return {
        ...(input.GroupId !== undefined && input.GroupId !== null && { GroupId: input.GroupId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListGroupsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListMailboxExportJobsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListMailboxPermissionsRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListMobileDeviceAccessRulesRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListOrganizationsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListResourceDelegatesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1ListResourcesRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    };
};
const serializeAws_json1_1ListUsersRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1PermissionValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1PutAccessControlRuleRequest = (input, context) => {
    return {
        ...(input.Actions !== undefined &&
            input.Actions !== null && { Actions: serializeAws_json1_1ActionsList(input.Actions, context) }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Effect !== undefined && input.Effect !== null && { Effect: input.Effect }),
        ...(input.IpRanges !== undefined &&
            input.IpRanges !== null && { IpRanges: serializeAws_json1_1IpRangeList(input.IpRanges, context) }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotActions !== undefined &&
            input.NotActions !== null && { NotActions: serializeAws_json1_1ActionsList(input.NotActions, context) }),
        ...(input.NotIpRanges !== undefined &&
            input.NotIpRanges !== null && { NotIpRanges: serializeAws_json1_1IpRangeList(input.NotIpRanges, context) }),
        ...(input.NotUserIds !== undefined &&
            input.NotUserIds !== null && { NotUserIds: serializeAws_json1_1UserIdList(input.NotUserIds, context) }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserIds !== undefined &&
            input.UserIds !== null && { UserIds: serializeAws_json1_1UserIdList(input.UserIds, context) }),
    };
};
const serializeAws_json1_1PutMailboxPermissionsRequest = (input, context) => {
    return {
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.GranteeId !== undefined && input.GranteeId !== null && { GranteeId: input.GranteeId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.PermissionValues !== undefined &&
            input.PermissionValues !== null && {
            PermissionValues: serializeAws_json1_1PermissionValues(input.PermissionValues, context),
        }),
    };
};
const serializeAws_json1_1PutRetentionPolicyRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.FolderConfigurations !== undefined &&
            input.FolderConfigurations !== null && {
            FolderConfigurations: serializeAws_json1_1FolderConfigurations(input.FolderConfigurations, context),
        }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1RegisterToWorkMailRequest = (input, context) => {
    return {
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1ResetPasswordRequest = (input, context) => {
    return {
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1StartMailboxExportJobRequest = (input, context) => {
    var _a;
    return {
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.S3BucketName !== undefined && input.S3BucketName !== null && { S3BucketName: input.S3BucketName }),
        ...(input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix }),
    };
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
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    };
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateMailboxQuotaRequest = (input, context) => {
    return {
        ...(input.MailboxQuota !== undefined && input.MailboxQuota !== null && { MailboxQuota: input.MailboxQuota }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.UserId !== undefined && input.UserId !== null && { UserId: input.UserId }),
    };
};
const serializeAws_json1_1UpdateMobileDeviceAccessRuleRequest = (input, context) => {
    return {
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.DeviceModels !== undefined &&
            input.DeviceModels !== null && {
            DeviceModels: serializeAws_json1_1DeviceModelList(input.DeviceModels, context),
        }),
        ...(input.DeviceOperatingSystems !== undefined &&
            input.DeviceOperatingSystems !== null && {
            DeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.DeviceOperatingSystems, context),
        }),
        ...(input.DeviceTypes !== undefined &&
            input.DeviceTypes !== null && { DeviceTypes: serializeAws_json1_1DeviceTypeList(input.DeviceTypes, context) }),
        ...(input.DeviceUserAgents !== undefined &&
            input.DeviceUserAgents !== null && {
            DeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.DeviceUserAgents, context),
        }),
        ...(input.Effect !== undefined && input.Effect !== null && { Effect: input.Effect }),
        ...(input.MobileDeviceAccessRuleId !== undefined &&
            input.MobileDeviceAccessRuleId !== null && { MobileDeviceAccessRuleId: input.MobileDeviceAccessRuleId }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.NotDeviceModels !== undefined &&
            input.NotDeviceModels !== null && {
            NotDeviceModels: serializeAws_json1_1DeviceModelList(input.NotDeviceModels, context),
        }),
        ...(input.NotDeviceOperatingSystems !== undefined &&
            input.NotDeviceOperatingSystems !== null && {
            NotDeviceOperatingSystems: serializeAws_json1_1DeviceOperatingSystemList(input.NotDeviceOperatingSystems, context),
        }),
        ...(input.NotDeviceTypes !== undefined &&
            input.NotDeviceTypes !== null && {
            NotDeviceTypes: serializeAws_json1_1DeviceTypeList(input.NotDeviceTypes, context),
        }),
        ...(input.NotDeviceUserAgents !== undefined &&
            input.NotDeviceUserAgents !== null && {
            NotDeviceUserAgents: serializeAws_json1_1DeviceUserAgentList(input.NotDeviceUserAgents, context),
        }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1UpdatePrimaryEmailAddressRequest = (input, context) => {
    return {
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.EntityId !== undefined && input.EntityId !== null && { EntityId: input.EntityId }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
    };
};
const serializeAws_json1_1UpdateResourceRequest = (input, context) => {
    return {
        ...(input.BookingOptions !== undefined &&
            input.BookingOptions !== null && {
            BookingOptions: serializeAws_json1_1BookingOptions(input.BookingOptions, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1UserIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AccessControlRule = (output, context) => {
    return {
        Actions: output.Actions !== undefined && output.Actions !== null
            ? deserializeAws_json1_1ActionsList(output.Actions, context)
            : undefined,
        DateCreated: output.DateCreated !== undefined && output.DateCreated !== null
            ? new Date(Math.round(output.DateCreated * 1000))
            : undefined,
        DateModified: output.DateModified !== undefined && output.DateModified !== null
            ? new Date(Math.round(output.DateModified * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Effect: output.Effect !== undefined && output.Effect !== null ? output.Effect : undefined,
        IpRanges: output.IpRanges !== undefined && output.IpRanges !== null
            ? deserializeAws_json1_1IpRangeList(output.IpRanges, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotActions: output.NotActions !== undefined && output.NotActions !== null
            ? deserializeAws_json1_1ActionsList(output.NotActions, context)
            : undefined,
        NotIpRanges: output.NotIpRanges !== undefined && output.NotIpRanges !== null
            ? deserializeAws_json1_1IpRangeList(output.NotIpRanges, context)
            : undefined,
        NotUserIds: output.NotUserIds !== undefined && output.NotUserIds !== null
            ? deserializeAws_json1_1UserIdList(output.NotUserIds, context)
            : undefined,
        UserIds: output.UserIds !== undefined && output.UserIds !== null
            ? deserializeAws_json1_1UserIdList(output.UserIds, context)
            : undefined,
    };
};
const deserializeAws_json1_1AccessControlRuleNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AccessControlRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1AccessControlRule(entry, context);
    });
};
const deserializeAws_json1_1ActionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Aliases = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1AssociateDelegateToResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1AssociateMemberToGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1BookingOptions = (output, context) => {
    return {
        AutoAcceptRequests: output.AutoAcceptRequests !== undefined && output.AutoAcceptRequests !== null
            ? output.AutoAcceptRequests
            : undefined,
        AutoDeclineConflictingRequests: output.AutoDeclineConflictingRequests !== undefined && output.AutoDeclineConflictingRequests !== null
            ? output.AutoDeclineConflictingRequests
            : undefined,
        AutoDeclineRecurringRequests: output.AutoDeclineRecurringRequests !== undefined && output.AutoDeclineRecurringRequests !== null
            ? output.AutoDeclineRecurringRequests
            : undefined,
    };
};
const deserializeAws_json1_1CancelMailboxExportJobResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateAliasResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1CreateGroupResponse = (output, context) => {
    return {
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
    };
};
const deserializeAws_json1_1CreateMobileDeviceAccessRuleResponse = (output, context) => {
    return {
        MobileDeviceAccessRuleId: output.MobileDeviceAccessRuleId !== undefined && output.MobileDeviceAccessRuleId !== null
            ? output.MobileDeviceAccessRuleId
            : undefined,
    };
};
const deserializeAws_json1_1CreateOrganizationResponse = (output, context) => {
    return {
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
    };
};
const deserializeAws_json1_1CreateResourceResponse = (output, context) => {
    return {
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
    };
};
const deserializeAws_json1_1CreateUserResponse = (output, context) => {
    return {
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
    };
};
const deserializeAws_json1_1Delegate = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1DeleteAccessControlRuleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteAliasResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteMailboxPermissionsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteMobileDeviceAccessRuleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteOrganizationResponse = (output, context) => {
    return {
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DeleteResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteRetentionPolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeleteUserResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DeregisterFromWorkMailResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DescribeGroupResponse = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        GroupId: output.GroupId !== undefined && output.GroupId !== null ? output.GroupId : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DescribeMailboxExportJobResponse = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        ErrorInfo: output.ErrorInfo !== undefined && output.ErrorInfo !== null ? output.ErrorInfo : undefined,
        EstimatedProgress: output.EstimatedProgress !== undefined && output.EstimatedProgress !== null
            ? output.EstimatedProgress
            : undefined,
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3Path: output.S3Path !== undefined && output.S3Path !== null ? output.S3Path : undefined,
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationResponse = (output, context) => {
    return {
        ARN: output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined,
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        CompletedDate: output.CompletedDate !== undefined && output.CompletedDate !== null
            ? new Date(Math.round(output.CompletedDate * 1000))
            : undefined,
        DefaultMailDomain: output.DefaultMailDomain !== undefined && output.DefaultMailDomain !== null
            ? output.DefaultMailDomain
            : undefined,
        DirectoryId: output.DirectoryId !== undefined && output.DirectoryId !== null ? output.DirectoryId : undefined,
        DirectoryType: output.DirectoryType !== undefined && output.DirectoryType !== null ? output.DirectoryType : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1DescribeResourceResponse = (output, context) => {
    return {
        BookingOptions: output.BookingOptions !== undefined && output.BookingOptions !== null
            ? deserializeAws_json1_1BookingOptions(output.BookingOptions, context)
            : undefined,
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1DescribeUserResponse = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UserId: output.UserId !== undefined && output.UserId !== null ? output.UserId : undefined,
        UserRole: output.UserRole !== undefined && output.UserRole !== null ? output.UserRole : undefined,
    };
};
const deserializeAws_json1_1DeviceModelList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeviceOperatingSystemList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeviceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DeviceUserAgentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1DirectoryInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DirectoryServiceAuthenticationFailedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DirectoryUnavailableException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DisassociateDelegateFromResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1DisassociateMemberFromGroupResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1EmailAddressInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EntityAlreadyRegisteredException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EntityNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EntityStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1FolderConfiguration = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Period: output.Period !== undefined && output.Period !== null ? output.Period : undefined,
    };
};
const deserializeAws_json1_1FolderConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1FolderConfiguration(entry, context);
    });
};
const deserializeAws_json1_1GetAccessControlEffectResponse = (output, context) => {
    return {
        Effect: output.Effect !== undefined && output.Effect !== null ? output.Effect : undefined,
        MatchedRules: output.MatchedRules !== undefined && output.MatchedRules !== null
            ? deserializeAws_json1_1AccessControlRuleNameList(output.MatchedRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1GetDefaultRetentionPolicyResponse = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FolderConfigurations: output.FolderConfigurations !== undefined && output.FolderConfigurations !== null
            ? deserializeAws_json1_1FolderConfigurations(output.FolderConfigurations, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1GetMailboxDetailsResponse = (output, context) => {
    return {
        MailboxQuota: output.MailboxQuota !== undefined && output.MailboxQuota !== null ? output.MailboxQuota : undefined,
        MailboxSize: output.MailboxSize !== undefined && output.MailboxSize !== null ? output.MailboxSize : undefined,
    };
};
const deserializeAws_json1_1GetMobileDeviceAccessEffectResponse = (output, context) => {
    return {
        Effect: output.Effect !== undefined && output.Effect !== null ? output.Effect : undefined,
        MatchedRules: output.MatchedRules !== undefined && output.MatchedRules !== null
            ? deserializeAws_json1_1MobileDeviceAccessMatchedRuleList(output.MatchedRules, context)
            : undefined,
    };
};
const deserializeAws_json1_1Group = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1Groups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Group(entry, context);
    });
};
const deserializeAws_json1_1InvalidConfigurationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidParameterException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidPasswordException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1IpRangeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Jobs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MailboxExportJob(entry, context);
    });
};
const deserializeAws_json1_1LimitExceededException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ListAccessControlRulesResponse = (output, context) => {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1AccessControlRulesList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListAliasesResponse = (output, context) => {
    return {
        Aliases: output.Aliases !== undefined && output.Aliases !== null
            ? deserializeAws_json1_1Aliases(output.Aliases, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListGroupMembersResponse = (output, context) => {
    return {
        Members: output.Members !== undefined && output.Members !== null
            ? deserializeAws_json1_1Members(output.Members, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListGroupsResponse = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_json1_1Groups(output.Groups, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListMailboxExportJobsResponse = (output, context) => {
    return {
        Jobs: output.Jobs !== undefined && output.Jobs !== null ? deserializeAws_json1_1Jobs(output.Jobs, context) : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListMailboxPermissionsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null
            ? deserializeAws_json1_1Permissions(output.Permissions, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListMobileDeviceAccessRulesResponse = (output, context) => {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_json1_1MobileDeviceAccessRulesList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListOrganizationsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationSummaries: output.OrganizationSummaries !== undefined && output.OrganizationSummaries !== null
            ? deserializeAws_json1_1OrganizationSummaries(output.OrganizationSummaries, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListResourceDelegatesResponse = (output, context) => {
    return {
        Delegates: output.Delegates !== undefined && output.Delegates !== null
            ? deserializeAws_json1_1ResourceDelegates(output.Delegates, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListResourcesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1Resources(output.Resources, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_1TagList(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListUsersResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_json1_1Users(output.Users, context)
            : undefined,
    };
};
const deserializeAws_json1_1MailboxExportJob = (output, context) => {
    return {
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        EntityId: output.EntityId !== undefined && output.EntityId !== null ? output.EntityId : undefined,
        EstimatedProgress: output.EstimatedProgress !== undefined && output.EstimatedProgress !== null
            ? output.EstimatedProgress
            : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        S3BucketName: output.S3BucketName !== undefined && output.S3BucketName !== null ? output.S3BucketName : undefined,
        S3Path: output.S3Path !== undefined && output.S3Path !== null ? output.S3Path : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1MailDomainNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1MailDomainStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Member = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Members = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Member(entry, context);
    });
};
const deserializeAws_json1_1MobileDeviceAccessMatchedRule = (output, context) => {
    return {
        MobileDeviceAccessRuleId: output.MobileDeviceAccessRuleId !== undefined && output.MobileDeviceAccessRuleId !== null
            ? output.MobileDeviceAccessRuleId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1MobileDeviceAccessMatchedRuleList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MobileDeviceAccessMatchedRule(entry, context);
    });
};
const deserializeAws_json1_1MobileDeviceAccessRule = (output, context) => {
    return {
        DateCreated: output.DateCreated !== undefined && output.DateCreated !== null
            ? new Date(Math.round(output.DateCreated * 1000))
            : undefined,
        DateModified: output.DateModified !== undefined && output.DateModified !== null
            ? new Date(Math.round(output.DateModified * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        DeviceModels: output.DeviceModels !== undefined && output.DeviceModels !== null
            ? deserializeAws_json1_1DeviceModelList(output.DeviceModels, context)
            : undefined,
        DeviceOperatingSystems: output.DeviceOperatingSystems !== undefined && output.DeviceOperatingSystems !== null
            ? deserializeAws_json1_1DeviceOperatingSystemList(output.DeviceOperatingSystems, context)
            : undefined,
        DeviceTypes: output.DeviceTypes !== undefined && output.DeviceTypes !== null
            ? deserializeAws_json1_1DeviceTypeList(output.DeviceTypes, context)
            : undefined,
        DeviceUserAgents: output.DeviceUserAgents !== undefined && output.DeviceUserAgents !== null
            ? deserializeAws_json1_1DeviceUserAgentList(output.DeviceUserAgents, context)
            : undefined,
        Effect: output.Effect !== undefined && output.Effect !== null ? output.Effect : undefined,
        MobileDeviceAccessRuleId: output.MobileDeviceAccessRuleId !== undefined && output.MobileDeviceAccessRuleId !== null
            ? output.MobileDeviceAccessRuleId
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NotDeviceModels: output.NotDeviceModels !== undefined && output.NotDeviceModels !== null
            ? deserializeAws_json1_1DeviceModelList(output.NotDeviceModels, context)
            : undefined,
        NotDeviceOperatingSystems: output.NotDeviceOperatingSystems !== undefined && output.NotDeviceOperatingSystems !== null
            ? deserializeAws_json1_1DeviceOperatingSystemList(output.NotDeviceOperatingSystems, context)
            : undefined,
        NotDeviceTypes: output.NotDeviceTypes !== undefined && output.NotDeviceTypes !== null
            ? deserializeAws_json1_1DeviceTypeList(output.NotDeviceTypes, context)
            : undefined,
        NotDeviceUserAgents: output.NotDeviceUserAgents !== undefined && output.NotDeviceUserAgents !== null
            ? deserializeAws_json1_1DeviceUserAgentList(output.NotDeviceUserAgents, context)
            : undefined,
    };
};
const deserializeAws_json1_1MobileDeviceAccessRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1MobileDeviceAccessRule(entry, context);
    });
};
const deserializeAws_json1_1NameAvailabilityException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationSummary(entry, context);
    });
};
const deserializeAws_json1_1OrganizationSummary = (output, context) => {
    return {
        Alias: output.Alias !== undefined && output.Alias !== null ? output.Alias : undefined,
        DefaultMailDomain: output.DefaultMailDomain !== undefined && output.DefaultMailDomain !== null
            ? output.DefaultMailDomain
            : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1Permission = (output, context) => {
    return {
        GranteeId: output.GranteeId !== undefined && output.GranteeId !== null ? output.GranteeId : undefined,
        GranteeType: output.GranteeType !== undefined && output.GranteeType !== null ? output.GranteeType : undefined,
        PermissionValues: output.PermissionValues !== undefined && output.PermissionValues !== null
            ? deserializeAws_json1_1PermissionValues(output.PermissionValues, context)
            : undefined,
    };
};
const deserializeAws_json1_1Permissions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Permission(entry, context);
    });
};
const deserializeAws_json1_1PermissionValues = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1PutAccessControlRuleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutMailboxPermissionsResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1PutRetentionPolicyResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1RegisterToWorkMailResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1ReservedNameException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ResetPasswordResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1Resource = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ResourceDelegates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Delegate(entry, context);
    });
};
const deserializeAws_json1_1ResourceNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Resources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Resource(entry, context);
    });
};
const deserializeAws_json1_1StartMailboxExportJobResponse = (output, context) => {
    return {
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    };
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
const deserializeAws_json1_1TagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1TooManyTagsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UnsupportedOperationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UntagResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateMailboxQuotaResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateMobileDeviceAccessRuleResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdatePrimaryEmailAddressResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1UpdateResourceResponse = (output, context) => {
    return {};
};
const deserializeAws_json1_1User = (output, context) => {
    return {
        DisabledDate: output.DisabledDate !== undefined && output.DisabledDate !== null
            ? new Date(Math.round(output.DisabledDate * 1000))
            : undefined,
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        EnabledDate: output.EnabledDate !== undefined && output.EnabledDate !== null
            ? new Date(Math.round(output.EnabledDate * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        UserRole: output.UserRole !== undefined && output.UserRole !== null ? output.UserRole : undefined,
    };
};
const deserializeAws_json1_1UserIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_json1_1Users = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1User(entry, context);
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