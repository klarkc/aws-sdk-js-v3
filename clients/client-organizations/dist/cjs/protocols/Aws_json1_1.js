"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_json1_1UpdateOrganizationalUnitCommand = exports.serializeAws_json1_1UntagResourceCommand = exports.serializeAws_json1_1TagResourceCommand = exports.serializeAws_json1_1RemoveAccountFromOrganizationCommand = exports.serializeAws_json1_1RegisterDelegatedAdministratorCommand = exports.serializeAws_json1_1MoveAccountCommand = exports.serializeAws_json1_1ListTargetsForPolicyCommand = exports.serializeAws_json1_1ListTagsForResourceCommand = exports.serializeAws_json1_1ListRootsCommand = exports.serializeAws_json1_1ListPoliciesForTargetCommand = exports.serializeAws_json1_1ListPoliciesCommand = exports.serializeAws_json1_1ListParentsCommand = exports.serializeAws_json1_1ListOrganizationalUnitsForParentCommand = exports.serializeAws_json1_1ListHandshakesForOrganizationCommand = exports.serializeAws_json1_1ListHandshakesForAccountCommand = exports.serializeAws_json1_1ListDelegatedServicesForAccountCommand = exports.serializeAws_json1_1ListDelegatedAdministratorsCommand = exports.serializeAws_json1_1ListCreateAccountStatusCommand = exports.serializeAws_json1_1ListChildrenCommand = exports.serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = exports.serializeAws_json1_1ListAccountsForParentCommand = exports.serializeAws_json1_1ListAccountsCommand = exports.serializeAws_json1_1LeaveOrganizationCommand = exports.serializeAws_json1_1InviteAccountToOrganizationCommand = exports.serializeAws_json1_1EnablePolicyTypeCommand = exports.serializeAws_json1_1EnableAWSServiceAccessCommand = exports.serializeAws_json1_1EnableAllFeaturesCommand = exports.serializeAws_json1_1DisablePolicyTypeCommand = exports.serializeAws_json1_1DisableAWSServiceAccessCommand = exports.serializeAws_json1_1DetachPolicyCommand = exports.serializeAws_json1_1DescribePolicyCommand = exports.serializeAws_json1_1DescribeOrganizationalUnitCommand = exports.serializeAws_json1_1DescribeOrganizationCommand = exports.serializeAws_json1_1DescribeHandshakeCommand = exports.serializeAws_json1_1DescribeEffectivePolicyCommand = exports.serializeAws_json1_1DescribeCreateAccountStatusCommand = exports.serializeAws_json1_1DescribeAccountCommand = exports.serializeAws_json1_1DeregisterDelegatedAdministratorCommand = exports.serializeAws_json1_1DeletePolicyCommand = exports.serializeAws_json1_1DeleteOrganizationalUnitCommand = exports.serializeAws_json1_1DeleteOrganizationCommand = exports.serializeAws_json1_1DeclineHandshakeCommand = exports.serializeAws_json1_1CreatePolicyCommand = exports.serializeAws_json1_1CreateOrganizationalUnitCommand = exports.serializeAws_json1_1CreateOrganizationCommand = exports.serializeAws_json1_1CreateGovCloudAccountCommand = exports.serializeAws_json1_1CreateAccountCommand = exports.serializeAws_json1_1CancelHandshakeCommand = exports.serializeAws_json1_1AttachPolicyCommand = exports.serializeAws_json1_1AcceptHandshakeCommand = void 0;
exports.deserializeAws_json1_1UntagResourceCommand = exports.deserializeAws_json1_1TagResourceCommand = exports.deserializeAws_json1_1RemoveAccountFromOrganizationCommand = exports.deserializeAws_json1_1RegisterDelegatedAdministratorCommand = exports.deserializeAws_json1_1MoveAccountCommand = exports.deserializeAws_json1_1ListTargetsForPolicyCommand = exports.deserializeAws_json1_1ListTagsForResourceCommand = exports.deserializeAws_json1_1ListRootsCommand = exports.deserializeAws_json1_1ListPoliciesForTargetCommand = exports.deserializeAws_json1_1ListPoliciesCommand = exports.deserializeAws_json1_1ListParentsCommand = exports.deserializeAws_json1_1ListOrganizationalUnitsForParentCommand = exports.deserializeAws_json1_1ListHandshakesForOrganizationCommand = exports.deserializeAws_json1_1ListHandshakesForAccountCommand = exports.deserializeAws_json1_1ListDelegatedServicesForAccountCommand = exports.deserializeAws_json1_1ListDelegatedAdministratorsCommand = exports.deserializeAws_json1_1ListCreateAccountStatusCommand = exports.deserializeAws_json1_1ListChildrenCommand = exports.deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = exports.deserializeAws_json1_1ListAccountsForParentCommand = exports.deserializeAws_json1_1ListAccountsCommand = exports.deserializeAws_json1_1LeaveOrganizationCommand = exports.deserializeAws_json1_1InviteAccountToOrganizationCommand = exports.deserializeAws_json1_1EnablePolicyTypeCommand = exports.deserializeAws_json1_1EnableAWSServiceAccessCommand = exports.deserializeAws_json1_1EnableAllFeaturesCommand = exports.deserializeAws_json1_1DisablePolicyTypeCommand = exports.deserializeAws_json1_1DisableAWSServiceAccessCommand = exports.deserializeAws_json1_1DetachPolicyCommand = exports.deserializeAws_json1_1DescribePolicyCommand = exports.deserializeAws_json1_1DescribeOrganizationalUnitCommand = exports.deserializeAws_json1_1DescribeOrganizationCommand = exports.deserializeAws_json1_1DescribeHandshakeCommand = exports.deserializeAws_json1_1DescribeEffectivePolicyCommand = exports.deserializeAws_json1_1DescribeCreateAccountStatusCommand = exports.deserializeAws_json1_1DescribeAccountCommand = exports.deserializeAws_json1_1DeregisterDelegatedAdministratorCommand = exports.deserializeAws_json1_1DeletePolicyCommand = exports.deserializeAws_json1_1DeleteOrganizationalUnitCommand = exports.deserializeAws_json1_1DeleteOrganizationCommand = exports.deserializeAws_json1_1DeclineHandshakeCommand = exports.deserializeAws_json1_1CreatePolicyCommand = exports.deserializeAws_json1_1CreateOrganizationalUnitCommand = exports.deserializeAws_json1_1CreateOrganizationCommand = exports.deserializeAws_json1_1CreateGovCloudAccountCommand = exports.deserializeAws_json1_1CreateAccountCommand = exports.deserializeAws_json1_1CancelHandshakeCommand = exports.deserializeAws_json1_1AttachPolicyCommand = exports.deserializeAws_json1_1AcceptHandshakeCommand = exports.serializeAws_json1_1UpdatePolicyCommand = void 0;
exports.deserializeAws_json1_1UpdatePolicyCommand = exports.deserializeAws_json1_1UpdateOrganizationalUnitCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_json1_1AcceptHandshakeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.AcceptHandshake",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AcceptHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AcceptHandshakeCommand = serializeAws_json1_1AcceptHandshakeCommand;
const serializeAws_json1_1AttachPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.AttachPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1AttachPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1AttachPolicyCommand = serializeAws_json1_1AttachPolicyCommand;
const serializeAws_json1_1CancelHandshakeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CancelHandshake",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CancelHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CancelHandshakeCommand = serializeAws_json1_1CancelHandshakeCommand;
const serializeAws_json1_1CreateAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CreateAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateAccountCommand = serializeAws_json1_1CreateAccountCommand;
const serializeAws_json1_1CreateGovCloudAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CreateGovCloudAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateGovCloudAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateGovCloudAccountCommand = serializeAws_json1_1CreateGovCloudAccountCommand;
const serializeAws_json1_1CreateOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CreateOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateOrganizationCommand = serializeAws_json1_1CreateOrganizationCommand;
const serializeAws_json1_1CreateOrganizationalUnitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CreateOrganizationalUnit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreateOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreateOrganizationalUnitCommand = serializeAws_json1_1CreateOrganizationalUnitCommand;
const serializeAws_json1_1CreatePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.CreatePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1CreatePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1CreatePolicyCommand = serializeAws_json1_1CreatePolicyCommand;
const serializeAws_json1_1DeclineHandshakeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DeclineHandshake",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeclineHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeclineHandshakeCommand = serializeAws_json1_1DeclineHandshakeCommand;
const serializeAws_json1_1DeleteOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DeleteOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOrganizationCommand = serializeAws_json1_1DeleteOrganizationCommand;
const serializeAws_json1_1DeleteOrganizationalUnitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DeleteOrganizationalUnit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeleteOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeleteOrganizationalUnitCommand = serializeAws_json1_1DeleteOrganizationalUnitCommand;
const serializeAws_json1_1DeletePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DeletePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeletePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeletePolicyCommand = serializeAws_json1_1DeletePolicyCommand;
const serializeAws_json1_1DeregisterDelegatedAdministratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DeregisterDelegatedAdministrator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DeregisterDelegatedAdministratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DeregisterDelegatedAdministratorCommand = serializeAws_json1_1DeregisterDelegatedAdministratorCommand;
const serializeAws_json1_1DescribeAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeAccountCommand = serializeAws_json1_1DescribeAccountCommand;
const serializeAws_json1_1DescribeCreateAccountStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeCreateAccountStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeCreateAccountStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeCreateAccountStatusCommand = serializeAws_json1_1DescribeCreateAccountStatusCommand;
const serializeAws_json1_1DescribeEffectivePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeEffectivePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeEffectivePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeEffectivePolicyCommand = serializeAws_json1_1DescribeEffectivePolicyCommand;
const serializeAws_json1_1DescribeHandshakeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeHandshake",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeHandshakeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeHandshakeCommand = serializeAws_json1_1DescribeHandshakeCommand;
const serializeAws_json1_1DescribeOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationCommand = serializeAws_json1_1DescribeOrganizationCommand;
const serializeAws_json1_1DescribeOrganizationalUnitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribeOrganizationalUnit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribeOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribeOrganizationalUnitCommand = serializeAws_json1_1DescribeOrganizationalUnitCommand;
const serializeAws_json1_1DescribePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DescribePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DescribePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DescribePolicyCommand = serializeAws_json1_1DescribePolicyCommand;
const serializeAws_json1_1DetachPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DetachPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DetachPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DetachPolicyCommand = serializeAws_json1_1DetachPolicyCommand;
const serializeAws_json1_1DisableAWSServiceAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DisableAWSServiceAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisableAWSServiceAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisableAWSServiceAccessCommand = serializeAws_json1_1DisableAWSServiceAccessCommand;
const serializeAws_json1_1DisablePolicyTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.DisablePolicyType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1DisablePolicyTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1DisablePolicyTypeCommand = serializeAws_json1_1DisablePolicyTypeCommand;
const serializeAws_json1_1EnableAllFeaturesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.EnableAllFeatures",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAllFeaturesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableAllFeaturesCommand = serializeAws_json1_1EnableAllFeaturesCommand;
const serializeAws_json1_1EnableAWSServiceAccessCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.EnableAWSServiceAccess",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnableAWSServiceAccessRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnableAWSServiceAccessCommand = serializeAws_json1_1EnableAWSServiceAccessCommand;
const serializeAws_json1_1EnablePolicyTypeCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.EnablePolicyType",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1EnablePolicyTypeRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1EnablePolicyTypeCommand = serializeAws_json1_1EnablePolicyTypeCommand;
const serializeAws_json1_1InviteAccountToOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.InviteAccountToOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1InviteAccountToOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1InviteAccountToOrganizationCommand = serializeAws_json1_1InviteAccountToOrganizationCommand;
const serializeAws_json1_1LeaveOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.LeaveOrganization",
    };
    const body = "{}";
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1LeaveOrganizationCommand = serializeAws_json1_1LeaveOrganizationCommand;
const serializeAws_json1_1ListAccountsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListAccounts",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAccountsCommand = serializeAws_json1_1ListAccountsCommand;
const serializeAws_json1_1ListAccountsForParentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListAccountsForParent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAccountsForParentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAccountsForParentCommand = serializeAws_json1_1ListAccountsForParentCommand;
const serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListAWSServiceAccessForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = serializeAws_json1_1ListAWSServiceAccessForOrganizationCommand;
const serializeAws_json1_1ListChildrenCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListChildren",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListChildrenRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListChildrenCommand = serializeAws_json1_1ListChildrenCommand;
const serializeAws_json1_1ListCreateAccountStatusCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListCreateAccountStatus",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListCreateAccountStatusRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListCreateAccountStatusCommand = serializeAws_json1_1ListCreateAccountStatusCommand;
const serializeAws_json1_1ListDelegatedAdministratorsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedAdministrators",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDelegatedAdministratorsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDelegatedAdministratorsCommand = serializeAws_json1_1ListDelegatedAdministratorsCommand;
const serializeAws_json1_1ListDelegatedServicesForAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListDelegatedServicesForAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListDelegatedServicesForAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListDelegatedServicesForAccountCommand = serializeAws_json1_1ListDelegatedServicesForAccountCommand;
const serializeAws_json1_1ListHandshakesForAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHandshakesForAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHandshakesForAccountCommand = serializeAws_json1_1ListHandshakesForAccountCommand;
const serializeAws_json1_1ListHandshakesForOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListHandshakesForOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListHandshakesForOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListHandshakesForOrganizationCommand = serializeAws_json1_1ListHandshakesForOrganizationCommand;
const serializeAws_json1_1ListOrganizationalUnitsForParentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListOrganizationalUnitsForParent",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListOrganizationalUnitsForParentRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListOrganizationalUnitsForParentCommand = serializeAws_json1_1ListOrganizationalUnitsForParentCommand;
const serializeAws_json1_1ListParentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListParents",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListParentsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListParentsCommand = serializeAws_json1_1ListParentsCommand;
const serializeAws_json1_1ListPoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListPolicies",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPoliciesCommand = serializeAws_json1_1ListPoliciesCommand;
const serializeAws_json1_1ListPoliciesForTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListPoliciesForTarget",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListPoliciesForTargetRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListPoliciesForTargetCommand = serializeAws_json1_1ListPoliciesForTargetCommand;
const serializeAws_json1_1ListRootsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListRoots",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListRootsRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListRootsCommand = serializeAws_json1_1ListRootsCommand;
const serializeAws_json1_1ListTagsForResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListTagsForResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTagsForResourceCommand = serializeAws_json1_1ListTagsForResourceCommand;
const serializeAws_json1_1ListTargetsForPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.ListTargetsForPolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1ListTargetsForPolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1ListTargetsForPolicyCommand = serializeAws_json1_1ListTargetsForPolicyCommand;
const serializeAws_json1_1MoveAccountCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.MoveAccount",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1MoveAccountRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1MoveAccountCommand = serializeAws_json1_1MoveAccountCommand;
const serializeAws_json1_1RegisterDelegatedAdministratorCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.RegisterDelegatedAdministrator",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RegisterDelegatedAdministratorRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RegisterDelegatedAdministratorCommand = serializeAws_json1_1RegisterDelegatedAdministratorCommand;
const serializeAws_json1_1RemoveAccountFromOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.RemoveAccountFromOrganization",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1RemoveAccountFromOrganizationRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1RemoveAccountFromOrganizationCommand = serializeAws_json1_1RemoveAccountFromOrganizationCommand;
const serializeAws_json1_1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.TagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1TagResourceCommand = serializeAws_json1_1TagResourceCommand;
const serializeAws_json1_1UntagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.UntagResource",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UntagResourceCommand = serializeAws_json1_1UntagResourceCommand;
const serializeAws_json1_1UpdateOrganizationalUnitCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.UpdateOrganizationalUnit",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdateOrganizationalUnitRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdateOrganizationalUnitCommand = serializeAws_json1_1UpdateOrganizationalUnitCommand;
const serializeAws_json1_1UpdatePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/x-amz-json-1.1",
        "x-amz-target": "AWSOrganizationsV20161128.UpdatePolicy",
    };
    let body;
    body = JSON.stringify(serializeAws_json1_1UpdatePolicyRequest(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
exports.serializeAws_json1_1UpdatePolicyCommand = serializeAws_json1_1UpdatePolicyCommand;
const deserializeAws_json1_1AcceptHandshakeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AcceptHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1AcceptHandshakeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AcceptHandshakeCommand = deserializeAws_json1_1AcceptHandshakeCommand;
const deserializeAws_json1_1AcceptHandshakeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.organizations#AccessDeniedForDependencyException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
            response = {
                ...(await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazonaws.organizations#HandshakeConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeNotFoundException":
        case "com.amazonaws.organizations#HandshakeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AttachPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1AttachPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1AttachPolicyCommand = deserializeAws_json1_1AttachPolicyCommand;
const deserializeAws_json1_1AttachPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyAttachmentException":
        case "com.amazonaws.organizations#DuplicatePolicyAttachmentException":
            response = {
                ...(await deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyChangesInProgressException":
        case "com.amazonaws.organizations#PolicyChangesInProgressException":
            response = {
                ...(await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeNotEnabledException":
        case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CancelHandshakeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CancelHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CancelHandshakeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CancelHandshakeCommand = deserializeAws_json1_1CancelHandshakeCommand;
const deserializeAws_json1_1CancelHandshakeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
            response = {
                ...(await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeNotFoundException":
        case "com.amazonaws.organizations#HandshakeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateAccountCommand = deserializeAws_json1_1CreateAccountCommand;
const deserializeAws_json1_1CreateAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FinalizingOrganizationException":
        case "com.amazonaws.organizations#FinalizingOrganizationException":
            response = {
                ...(await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateGovCloudAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateGovCloudAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateGovCloudAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateGovCloudAccountCommand = deserializeAws_json1_1CreateGovCloudAccountCommand;
const deserializeAws_json1_1CreateGovCloudAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FinalizingOrganizationException":
        case "com.amazonaws.organizations#FinalizingOrganizationException":
            response = {
                ...(await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessDeniedForDependencyException":
        case "com.amazonaws.organizations#AccessDeniedForDependencyException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AlreadyInOrganizationException":
        case "com.amazonaws.organizations#AlreadyInOrganizationException":
            response = {
                ...(await deserializeAws_json1_1AlreadyInOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreateOrganizationalUnitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreateOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreateOrganizationalUnitResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreateOrganizationalUnitCommand = deserializeAws_json1_1CreateOrganizationalUnitCommand;
const deserializeAws_json1_1CreateOrganizationalUnitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateOrganizationalUnitException":
        case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
            response = {
                ...(await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentNotFoundException":
        case "com.amazonaws.organizations#ParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1CreatePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1CreatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1CreatePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1CreatePolicyCommand = deserializeAws_json1_1CreatePolicyCommand;
const deserializeAws_json1_1CreatePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyException":
        case "com.amazonaws.organizations#DuplicatePolicyException":
            response = {
                ...(await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.organizations#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeNotAvailableForOrganizationException":
        case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
            response = {
                ...(await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeclineHandshakeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeclineHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DeclineHandshakeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeclineHandshakeCommand = deserializeAws_json1_1DeclineHandshakeCommand;
const deserializeAws_json1_1DeclineHandshakeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeAlreadyInStateException":
        case "com.amazonaws.organizations#HandshakeAlreadyInStateException":
            response = {
                ...(await deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeNotFoundException":
        case "com.amazonaws.organizations#HandshakeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidHandshakeTransitionException":
        case "com.amazonaws.organizations#InvalidHandshakeTransitionException":
            response = {
                ...(await deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationNotEmptyException":
        case "com.amazonaws.organizations#OrganizationNotEmptyException":
            response = {
                ...(await deserializeAws_json1_1OrganizationNotEmptyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeleteOrganizationalUnitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeleteOrganizationalUnitCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeleteOrganizationalUnitCommand = deserializeAws_json1_1DeleteOrganizationalUnitCommand;
const deserializeAws_json1_1DeleteOrganizationalUnitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationalUnitNotEmptyException":
        case "com.amazonaws.organizations#OrganizationalUnitNotEmptyException":
            response = {
                ...(await deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeletePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeletePolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeletePolicyCommand = deserializeAws_json1_1DeletePolicyCommand;
const deserializeAws_json1_1DeletePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyInUseException":
        case "com.amazonaws.organizations#PolicyInUseException":
            response = {
                ...(await deserializeAws_json1_1PolicyInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DeregisterDelegatedAdministratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DeregisterDelegatedAdministratorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DeregisterDelegatedAdministratorCommand = deserializeAws_json1_1DeregisterDelegatedAdministratorCommand;
const deserializeAws_json1_1DeregisterDelegatedAdministratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotRegisteredException":
        case "com.amazonaws.organizations#AccountNotRegisteredException":
            response = {
                ...(await deserializeAws_json1_1AccountNotRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
    contents = deserializeAws_json1_1DescribeAccountResponse(data, context);
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
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeCreateAccountStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeCreateAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeCreateAccountStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeCreateAccountStatusCommand = deserializeAws_json1_1DescribeCreateAccountStatusCommand;
const deserializeAws_json1_1DescribeCreateAccountStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "CreateAccountStatusNotFoundException":
        case "com.amazonaws.organizations#CreateAccountStatusNotFoundException":
            response = {
                ...(await deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeEffectivePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeEffectivePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeEffectivePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeEffectivePolicyCommand = deserializeAws_json1_1DescribeEffectivePolicyCommand;
const deserializeAws_json1_1DescribeEffectivePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EffectivePolicyNotFoundException":
        case "com.amazonaws.organizations#EffectivePolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeHandshakeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeHandshakeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeHandshakeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeHandshakeCommand = deserializeAws_json1_1DescribeHandshakeCommand;
const deserializeAws_json1_1DescribeHandshakeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeNotFoundException":
        case "com.amazonaws.organizations#HandshakeNotFoundException":
            response = {
                ...(await deserializeAws_json1_1HandshakeNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribeOrganizationalUnitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribeOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribeOrganizationalUnitResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribeOrganizationalUnitCommand = deserializeAws_json1_1DescribeOrganizationalUnitCommand;
const deserializeAws_json1_1DescribeOrganizationalUnitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DescribePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DescribePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DescribePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DescribePolicyCommand = deserializeAws_json1_1DescribePolicyCommand;
const deserializeAws_json1_1DescribePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DetachPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DetachPolicyCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DetachPolicyCommand = deserializeAws_json1_1DetachPolicyCommand;
const deserializeAws_json1_1DetachPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyChangesInProgressException":
        case "com.amazonaws.organizations#PolicyChangesInProgressException":
            response = {
                ...(await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotAttachedException":
        case "com.amazonaws.organizations#PolicyNotAttachedException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotAttachedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisableAWSServiceAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisableAWSServiceAccessCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisableAWSServiceAccessCommand = deserializeAws_json1_1DisableAWSServiceAccessCommand;
const deserializeAws_json1_1DisableAWSServiceAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1DisablePolicyTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1DisablePolicyTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1DisablePolicyTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1DisablePolicyTypeCommand = deserializeAws_json1_1DisablePolicyTypeCommand;
const deserializeAws_json1_1DisablePolicyTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyChangesInProgressException":
        case "com.amazonaws.organizations#PolicyChangesInProgressException":
            response = {
                ...(await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeNotEnabledException":
        case "com.amazonaws.organizations#PolicyTypeNotEnabledException":
            response = {
                ...(await deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RootNotFoundException":
        case "com.amazonaws.organizations#RootNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableAllFeaturesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableAllFeaturesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnableAllFeaturesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableAllFeaturesCommand = deserializeAws_json1_1EnableAllFeaturesCommand;
const deserializeAws_json1_1EnableAllFeaturesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazonaws.organizations#HandshakeConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnableAWSServiceAccessCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnableAWSServiceAccessCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnableAWSServiceAccessCommand = deserializeAws_json1_1EnableAWSServiceAccessCommand;
const deserializeAws_json1_1EnableAWSServiceAccessCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1EnablePolicyTypeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1EnablePolicyTypeCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1EnablePolicyTypeResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1EnablePolicyTypeCommand = deserializeAws_json1_1EnablePolicyTypeCommand;
const deserializeAws_json1_1EnablePolicyTypeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyChangesInProgressException":
        case "com.amazonaws.organizations#PolicyChangesInProgressException":
            response = {
                ...(await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeAlreadyEnabledException":
        case "com.amazonaws.organizations#PolicyTypeAlreadyEnabledException":
            response = {
                ...(await deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyTypeNotAvailableForOrganizationException":
        case "com.amazonaws.organizations#PolicyTypeNotAvailableForOrganizationException":
            response = {
                ...(await deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RootNotFoundException":
        case "com.amazonaws.organizations#RootNotFoundException":
            response = {
                ...(await deserializeAws_json1_1RootNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1InviteAccountToOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1InviteAccountToOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1InviteAccountToOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1InviteAccountToOrganizationCommand = deserializeAws_json1_1InviteAccountToOrganizationCommand;
const deserializeAws_json1_1InviteAccountToOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountOwnerNotVerifiedException":
        case "com.amazonaws.organizations#AccountOwnerNotVerifiedException":
            response = {
                ...(await deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateHandshakeException":
        case "com.amazonaws.organizations#DuplicateHandshakeException":
            response = {
                ...(await deserializeAws_json1_1DuplicateHandshakeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FinalizingOrganizationException":
        case "com.amazonaws.organizations#FinalizingOrganizationException":
            response = {
                ...(await deserializeAws_json1_1FinalizingOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "HandshakeConstraintViolationException":
        case "com.amazonaws.organizations#HandshakeConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1LeaveOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1LeaveOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1LeaveOrganizationCommand = deserializeAws_json1_1LeaveOrganizationCommand;
const deserializeAws_json1_1LeaveOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MasterCannotLeaveOrganizationException":
        case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
            response = {
                ...(await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAccountsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAccountsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAccountsCommand = deserializeAws_json1_1ListAccountsCommand;
const deserializeAws_json1_1ListAccountsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAccountsForParentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAccountsForParentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAccountsForParentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAccountsForParentCommand = deserializeAws_json1_1ListAccountsForParentCommand;
const deserializeAws_json1_1ListAccountsForParentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentNotFoundException":
        case "com.amazonaws.organizations#ParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand = deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommand;
const deserializeAws_json1_1ListAWSServiceAccessForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListChildrenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListChildrenCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListChildrenResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListChildrenCommand = deserializeAws_json1_1ListChildrenCommand;
const deserializeAws_json1_1ListChildrenCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentNotFoundException":
        case "com.amazonaws.organizations#ParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListCreateAccountStatusCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListCreateAccountStatusCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListCreateAccountStatusResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListCreateAccountStatusCommand = deserializeAws_json1_1ListCreateAccountStatusCommand;
const deserializeAws_json1_1ListCreateAccountStatusCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDelegatedAdministratorsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDelegatedAdministratorsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDelegatedAdministratorsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDelegatedAdministratorsCommand = deserializeAws_json1_1ListDelegatedAdministratorsCommand;
const deserializeAws_json1_1ListDelegatedAdministratorsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListDelegatedServicesForAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListDelegatedServicesForAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListDelegatedServicesForAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListDelegatedServicesForAccountCommand = deserializeAws_json1_1ListDelegatedServicesForAccountCommand;
const deserializeAws_json1_1ListDelegatedServicesForAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotRegisteredException":
        case "com.amazonaws.organizations#AccountNotRegisteredException":
            response = {
                ...(await deserializeAws_json1_1AccountNotRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListHandshakesForAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHandshakesForAccountCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHandshakesForAccountResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHandshakesForAccountCommand = deserializeAws_json1_1ListHandshakesForAccountCommand;
const deserializeAws_json1_1ListHandshakesForAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListHandshakesForOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListHandshakesForOrganizationCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListHandshakesForOrganizationResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListHandshakesForOrganizationCommand = deserializeAws_json1_1ListHandshakesForOrganizationCommand;
const deserializeAws_json1_1ListHandshakesForOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListOrganizationalUnitsForParentCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListOrganizationalUnitsForParentResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListOrganizationalUnitsForParentCommand = deserializeAws_json1_1ListOrganizationalUnitsForParentCommand;
const deserializeAws_json1_1ListOrganizationalUnitsForParentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ParentNotFoundException":
        case "com.amazonaws.organizations#ParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListParentsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListParentsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListParentsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListParentsCommand = deserializeAws_json1_1ListParentsCommand;
const deserializeAws_json1_1ListParentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ChildNotFoundException":
        case "com.amazonaws.organizations#ChildNotFoundException":
            response = {
                ...(await deserializeAws_json1_1ChildNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPoliciesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPoliciesCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPoliciesCommand = deserializeAws_json1_1ListPoliciesCommand;
const deserializeAws_json1_1ListPoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListPoliciesForTargetCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListPoliciesForTargetCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListPoliciesForTargetResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListPoliciesForTargetCommand = deserializeAws_json1_1ListPoliciesForTargetCommand;
const deserializeAws_json1_1ListPoliciesForTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListRootsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListRootsCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListRootsResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListRootsCommand = deserializeAws_json1_1ListRootsCommand;
const deserializeAws_json1_1ListRootsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1ListTargetsForPolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1ListTargetsForPolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1ListTargetsForPolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1ListTargetsForPolicyCommand = deserializeAws_json1_1ListTargetsForPolicyCommand;
const deserializeAws_json1_1ListTargetsForPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1MoveAccountCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1MoveAccountCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1MoveAccountCommand = deserializeAws_json1_1MoveAccountCommand;
const deserializeAws_json1_1MoveAccountCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DestinationParentNotFoundException":
        case "com.amazonaws.organizations#DestinationParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1DestinationParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateAccountException":
        case "com.amazonaws.organizations#DuplicateAccountException":
            response = {
                ...(await deserializeAws_json1_1DuplicateAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SourceParentNotFoundException":
        case "com.amazonaws.organizations#SourceParentNotFoundException":
            response = {
                ...(await deserializeAws_json1_1SourceParentNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RegisterDelegatedAdministratorCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RegisterDelegatedAdministratorCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RegisterDelegatedAdministratorCommand = deserializeAws_json1_1RegisterDelegatedAdministratorCommand;
const deserializeAws_json1_1RegisterDelegatedAdministratorCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountAlreadyRegisteredException":
        case "com.amazonaws.organizations#AccountAlreadyRegisteredException":
            response = {
                ...(await deserializeAws_json1_1AccountAlreadyRegisteredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1RemoveAccountFromOrganizationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1RemoveAccountFromOrganizationCommandError(output, context);
    }
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1RemoveAccountFromOrganizationCommand = deserializeAws_json1_1RemoveAccountFromOrganizationCommand;
const deserializeAws_json1_1RemoveAccountFromOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccountNotFoundException":
        case "com.amazonaws.organizations#AccountNotFoundException":
            response = {
                ...(await deserializeAws_json1_1AccountNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MasterCannotLeaveOrganizationException":
        case "com.amazonaws.organizations#MasterCannotLeaveOrganizationException":
            response = {
                ...(await deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
    await collectBody(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
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
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TargetNotFoundException":
        case "com.amazonaws.organizations#TargetNotFoundException":
            response = {
                ...(await deserializeAws_json1_1TargetNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdateOrganizationalUnitCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdateOrganizationalUnitCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdateOrganizationalUnitResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdateOrganizationalUnitCommand = deserializeAws_json1_1UpdateOrganizationalUnitCommand;
const deserializeAws_json1_1UpdateOrganizationalUnitCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateOrganizationalUnitException":
        case "com.amazonaws.organizations#DuplicateOrganizationalUnitException":
            response = {
                ...(await deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OrganizationalUnitNotFoundException":
        case "com.amazonaws.organizations#OrganizationalUnitNotFoundException":
            response = {
                ...(await deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1UpdatePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return deserializeAws_json1_1UpdatePolicyCommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = deserializeAws_json1_1UpdatePolicyResponse(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return Promise.resolve(response);
};
exports.deserializeAws_json1_1UpdatePolicyCommand = deserializeAws_json1_1UpdatePolicyCommand;
const deserializeAws_json1_1UpdatePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.organizations#AccessDeniedException":
            response = {
                ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AWSOrganizationsNotInUseException":
        case "com.amazonaws.organizations#AWSOrganizationsNotInUseException":
            response = {
                ...(await deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConcurrentModificationException":
        case "com.amazonaws.organizations#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConstraintViolationException":
        case "com.amazonaws.organizations#ConstraintViolationException":
            response = {
                ...(await deserializeAws_json1_1ConstraintViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicatePolicyException":
        case "com.amazonaws.organizations#DuplicatePolicyException":
            response = {
                ...(await deserializeAws_json1_1DuplicatePolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidInputException":
        case "com.amazonaws.organizations#InvalidInputException":
            response = {
                ...(await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedPolicyDocumentException":
        case "com.amazonaws.organizations#MalformedPolicyDocumentException":
            response = {
                ...(await deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyChangesInProgressException":
        case "com.amazonaws.organizations#PolicyChangesInProgressException":
            response = {
                ...(await deserializeAws_json1_1PolicyChangesInProgressExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFoundException":
        case "com.amazonaws.organizations#PolicyNotFoundException":
            response = {
                ...(await deserializeAws_json1_1PolicyNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.organizations#ServiceException":
            response = {
                ...(await deserializeAws_json1_1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.organizations#TooManyRequestsException":
            response = {
                ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAPIEndpointException":
        case "com.amazonaws.organizations#UnsupportedAPIEndpointException":
            response = {
                ...(await deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse(parsedOutput, context)),
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
const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccessDeniedForDependencyException(body, context);
    const contents = {
        name: "AccessDeniedForDependencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccountAlreadyRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountAlreadyRegisteredException(body, context);
    const contents = {
        name: "AccountAlreadyRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccountNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountNotFoundException(body, context);
    const contents = {
        name: "AccountNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccountNotRegisteredExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountNotRegisteredException(body, context);
    const contents = {
        name: "AccountNotRegisteredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AccountOwnerNotVerifiedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AccountOwnerNotVerifiedException(body, context);
    const contents = {
        name: "AccountOwnerNotVerifiedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AlreadyInOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AlreadyInOrganizationException(body, context);
    const contents = {
        name: "AlreadyInOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1AWSOrganizationsNotInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1AWSOrganizationsNotInUseException(body, context);
    const contents = {
        name: "AWSOrganizationsNotInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ChildNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ChildNotFoundException(body, context);
    const contents = {
        name: "ChildNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConcurrentModificationException(body, context);
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ConstraintViolationException(body, context);
    const contents = {
        name: "ConstraintViolationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1CreateAccountStatusNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1CreateAccountStatusNotFoundException(body, context);
    const contents = {
        name: "CreateAccountStatusNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DestinationParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DestinationParentNotFoundException(body, context);
    const contents = {
        name: "DestinationParentNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateAccountExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateAccountException(body, context);
    const contents = {
        name: "DuplicateAccountException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateHandshakeExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateHandshakeException(body, context);
    const contents = {
        name: "DuplicateHandshakeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicateOrganizationalUnitExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicateOrganizationalUnitException(body, context);
    const contents = {
        name: "DuplicateOrganizationalUnitException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyAttachmentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatePolicyAttachmentException(body, context);
    const contents = {
        name: "DuplicatePolicyAttachmentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1DuplicatePolicyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1DuplicatePolicyException(body, context);
    const contents = {
        name: "DuplicatePolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1EffectivePolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1EffectivePolicyNotFoundException(body, context);
    const contents = {
        name: "EffectivePolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1FinalizingOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1FinalizingOrganizationException(body, context);
    const contents = {
        name: "FinalizingOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HandshakeAlreadyInStateExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeAlreadyInStateException(body, context);
    const contents = {
        name: "HandshakeAlreadyInStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HandshakeConstraintViolationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeConstraintViolationException(body, context);
    const contents = {
        name: "HandshakeConstraintViolationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1HandshakeNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1HandshakeNotFoundException(body, context);
    const contents = {
        name: "HandshakeNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidHandshakeTransitionExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidHandshakeTransitionException(body, context);
    const contents = {
        name: "InvalidHandshakeTransitionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1InvalidInputExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1InvalidInputException(body, context);
    const contents = {
        name: "InvalidInputException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MalformedPolicyDocumentExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MalformedPolicyDocumentException(body, context);
    const contents = {
        name: "MalformedPolicyDocumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1MasterCannotLeaveOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1MasterCannotLeaveOrganizationException(body, context);
    const contents = {
        name: "MasterCannotLeaveOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationalUnitNotEmptyException(body, context);
    const contents = {
        name: "OrganizationalUnitNotEmptyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationalUnitNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationalUnitNotFoundException(body, context);
    const contents = {
        name: "OrganizationalUnitNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1OrganizationNotEmptyExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1OrganizationNotEmptyException(body, context);
    const contents = {
        name: "OrganizationNotEmptyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ParentNotFoundException(body, context);
    const contents = {
        name: "ParentNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyChangesInProgressExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyChangesInProgressException(body, context);
    const contents = {
        name: "PolicyChangesInProgressException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyInUseExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyInUseException(body, context);
    const contents = {
        name: "PolicyInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyNotAttachedExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotAttachedException(body, context);
    const contents = {
        name: "PolicyNotAttachedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyNotFoundException(body, context);
    const contents = {
        name: "PolicyNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyTypeAlreadyEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeAlreadyEnabledException(body, context);
    const contents = {
        name: "PolicyTypeAlreadyEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException(body, context);
    const contents = {
        name: "PolicyTypeNotAvailableForOrganizationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1PolicyTypeNotEnabledExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1PolicyTypeNotEnabledException(body, context);
    const contents = {
        name: "PolicyTypeNotEnabledException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1RootNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1RootNotFoundException(body, context);
    const contents = {
        name: "RootNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1ServiceExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1ServiceException(body, context);
    const contents = {
        name: "ServiceException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1SourceParentNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1SourceParentNotFoundException(body, context);
    const contents = {
        name: "SourceParentNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TargetNotFoundExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TargetNotFoundException(body, context);
    const contents = {
        name: "TargetNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1TooManyRequestsException(body, context);
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const deserializeAws_json1_1UnsupportedAPIEndpointExceptionResponse = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = deserializeAws_json1_1UnsupportedAPIEndpointException(body, context);
    const contents = {
        name: "UnsupportedAPIEndpointException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    };
    return contents;
};
const serializeAws_json1_1AcceptHandshakeRequest = (input, context) => {
    return {
        ...(input.HandshakeId !== undefined && input.HandshakeId !== null && { HandshakeId: input.HandshakeId }),
    };
};
const serializeAws_json1_1AttachPolicyRequest = (input, context) => {
    return {
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
        ...(input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId }),
    };
};
const serializeAws_json1_1CancelHandshakeRequest = (input, context) => {
    return {
        ...(input.HandshakeId !== undefined && input.HandshakeId !== null && { HandshakeId: input.HandshakeId }),
    };
};
const serializeAws_json1_1CreateAccountRequest = (input, context) => {
    return {
        ...(input.AccountName !== undefined && input.AccountName !== null && { AccountName: input.AccountName }),
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.IamUserAccessToBilling !== undefined &&
            input.IamUserAccessToBilling !== null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
        ...(input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateAccountStates = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1CreateGovCloudAccountRequest = (input, context) => {
    return {
        ...(input.AccountName !== undefined && input.AccountName !== null && { AccountName: input.AccountName }),
        ...(input.Email !== undefined && input.Email !== null && { Email: input.Email }),
        ...(input.IamUserAccessToBilling !== undefined &&
            input.IamUserAccessToBilling !== null && { IamUserAccessToBilling: input.IamUserAccessToBilling }),
        ...(input.RoleName !== undefined && input.RoleName !== null && { RoleName: input.RoleName }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateOrganizationalUnitRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentId !== undefined && input.ParentId !== null && { ParentId: input.ParentId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1CreateOrganizationRequest = (input, context) => {
    return {
        ...(input.FeatureSet !== undefined && input.FeatureSet !== null && { FeatureSet: input.FeatureSet }),
    };
};
const serializeAws_json1_1CreatePolicyRequest = (input, context) => {
    return {
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1DeclineHandshakeRequest = (input, context) => {
    return {
        ...(input.HandshakeId !== undefined && input.HandshakeId !== null && { HandshakeId: input.HandshakeId }),
    };
};
const serializeAws_json1_1DeleteOrganizationalUnitRequest = (input, context) => {
    return {
        ...(input.OrganizationalUnitId !== undefined &&
            input.OrganizationalUnitId !== null && { OrganizationalUnitId: input.OrganizationalUnitId }),
    };
};
const serializeAws_json1_1DeletePolicyRequest = (input, context) => {
    return {
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1DeregisterDelegatedAdministratorRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.ServicePrincipal !== undefined &&
            input.ServicePrincipal !== null && { ServicePrincipal: input.ServicePrincipal }),
    };
};
const serializeAws_json1_1DescribeAccountRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    };
};
const serializeAws_json1_1DescribeCreateAccountStatusRequest = (input, context) => {
    return {
        ...(input.CreateAccountRequestId !== undefined &&
            input.CreateAccountRequestId !== null && { CreateAccountRequestId: input.CreateAccountRequestId }),
    };
};
const serializeAws_json1_1DescribeEffectivePolicyRequest = (input, context) => {
    return {
        ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
        ...(input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId }),
    };
};
const serializeAws_json1_1DescribeHandshakeRequest = (input, context) => {
    return {
        ...(input.HandshakeId !== undefined && input.HandshakeId !== null && { HandshakeId: input.HandshakeId }),
    };
};
const serializeAws_json1_1DescribeOrganizationalUnitRequest = (input, context) => {
    return {
        ...(input.OrganizationalUnitId !== undefined &&
            input.OrganizationalUnitId !== null && { OrganizationalUnitId: input.OrganizationalUnitId }),
    };
};
const serializeAws_json1_1DescribePolicyRequest = (input, context) => {
    return {
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1DetachPolicyRequest = (input, context) => {
    return {
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
        ...(input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId }),
    };
};
const serializeAws_json1_1DisableAWSServiceAccessRequest = (input, context) => {
    return {
        ...(input.ServicePrincipal !== undefined &&
            input.ServicePrincipal !== null && { ServicePrincipal: input.ServicePrincipal }),
    };
};
const serializeAws_json1_1DisablePolicyTypeRequest = (input, context) => {
    return {
        ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
        ...(input.RootId !== undefined && input.RootId !== null && { RootId: input.RootId }),
    };
};
const serializeAws_json1_1EnableAllFeaturesRequest = (input, context) => {
    return {};
};
const serializeAws_json1_1EnableAWSServiceAccessRequest = (input, context) => {
    return {
        ...(input.ServicePrincipal !== undefined &&
            input.ServicePrincipal !== null && { ServicePrincipal: input.ServicePrincipal }),
    };
};
const serializeAws_json1_1EnablePolicyTypeRequest = (input, context) => {
    return {
        ...(input.PolicyType !== undefined && input.PolicyType !== null && { PolicyType: input.PolicyType }),
        ...(input.RootId !== undefined && input.RootId !== null && { RootId: input.RootId }),
    };
};
const serializeAws_json1_1HandshakeFilter = (input, context) => {
    return {
        ...(input.ActionType !== undefined && input.ActionType !== null && { ActionType: input.ActionType }),
        ...(input.ParentHandshakeId !== undefined &&
            input.ParentHandshakeId !== null && { ParentHandshakeId: input.ParentHandshakeId }),
    };
};
const serializeAws_json1_1HandshakeParty = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_json1_1InviteAccountToOrganizationRequest = (input, context) => {
    return {
        ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
        ...(input.Target !== undefined &&
            input.Target !== null && { Target: serializeAws_json1_1HandshakeParty(input.Target, context) }),
    };
};
const serializeAws_json1_1ListAccountsForParentRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParentId !== undefined && input.ParentId !== null && { ParentId: input.ParentId }),
    };
};
const serializeAws_json1_1ListAccountsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListAWSServiceAccessForOrganizationRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListChildrenRequest = (input, context) => {
    return {
        ...(input.ChildType !== undefined && input.ChildType !== null && { ChildType: input.ChildType }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParentId !== undefined && input.ParentId !== null && { ParentId: input.ParentId }),
    };
};
const serializeAws_json1_1ListCreateAccountStatusRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.States !== undefined &&
            input.States !== null && { States: serializeAws_json1_1CreateAccountStates(input.States, context) }),
    };
};
const serializeAws_json1_1ListDelegatedAdministratorsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ServicePrincipal !== undefined &&
            input.ServicePrincipal !== null && { ServicePrincipal: input.ServicePrincipal }),
    };
};
const serializeAws_json1_1ListDelegatedServicesForAccountRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListHandshakesForAccountRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1HandshakeFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListHandshakesForOrganizationRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined &&
            input.Filter !== null && { Filter: serializeAws_json1_1HandshakeFilter(input.Filter, context) }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListOrganizationalUnitsForParentRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ParentId !== undefined && input.ParentId !== null && { ParentId: input.ParentId }),
    };
};
const serializeAws_json1_1ListParentsRequest = (input, context) => {
    return {
        ...(input.ChildId !== undefined && input.ChildId !== null && { ChildId: input.ChildId }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListPoliciesForTargetRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined && input.Filter !== null && { Filter: input.Filter }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.TargetId !== undefined && input.TargetId !== null && { TargetId: input.TargetId }),
    };
};
const serializeAws_json1_1ListPoliciesRequest = (input, context) => {
    return {
        ...(input.Filter !== undefined && input.Filter !== null && { Filter: input.Filter }),
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListRootsRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    };
};
const serializeAws_json1_1ListTagsForResourceRequest = (input, context) => {
    return {
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
    };
};
const serializeAws_json1_1ListTargetsForPolicyRequest = (input, context) => {
    return {
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const serializeAws_json1_1MoveAccountRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.DestinationParentId !== undefined &&
            input.DestinationParentId !== null && { DestinationParentId: input.DestinationParentId }),
        ...(input.SourceParentId !== undefined &&
            input.SourceParentId !== null && { SourceParentId: input.SourceParentId }),
    };
};
const serializeAws_json1_1RegisterDelegatedAdministratorRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
        ...(input.ServicePrincipal !== undefined &&
            input.ServicePrincipal !== null && { ServicePrincipal: input.ServicePrincipal }),
    };
};
const serializeAws_json1_1RemoveAccountFromOrganizationRequest = (input, context) => {
    return {
        ...(input.AccountId !== undefined && input.AccountId !== null && { AccountId: input.AccountId }),
    };
};
const serializeAws_json1_1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_json1_1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_json1_1TagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    };
};
const serializeAws_json1_1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_1Tag(entry, context);
    });
};
const serializeAws_json1_1UntagResourceRequest = (input, context) => {
    return {
        ...(input.ResourceId !== undefined && input.ResourceId !== null && { ResourceId: input.ResourceId }),
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
    };
};
const serializeAws_json1_1UpdateOrganizationalUnitRequest = (input, context) => {
    return {
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.OrganizationalUnitId !== undefined &&
            input.OrganizationalUnitId !== null && { OrganizationalUnitId: input.OrganizationalUnitId }),
    };
};
const serializeAws_json1_1UpdatePolicyRequest = (input, context) => {
    return {
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PolicyId !== undefined && input.PolicyId !== null && { PolicyId: input.PolicyId }),
    };
};
const deserializeAws_json1_1AcceptHandshakeResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AccessDeniedForDependencyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1Account = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        JoinedMethod: output.JoinedMethod !== undefined && output.JoinedMethod !== null ? output.JoinedMethod : undefined,
        JoinedTimestamp: output.JoinedTimestamp !== undefined && output.JoinedTimestamp !== null
            ? new Date(Math.round(output.JoinedTimestamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1AccountAlreadyRegisteredException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AccountNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AccountNotRegisteredException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AccountOwnerNotVerifiedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Accounts = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Account(entry, context);
    });
};
const deserializeAws_json1_1AlreadyInOrganizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1AWSOrganizationsNotInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CancelHandshakeResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1Child = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ChildNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Children = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Child(entry, context);
    });
};
const deserializeAws_json1_1ConcurrentModificationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1ConstraintViolationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1CreateAccountResponse = (output, context) => {
    return {
        CreateAccountStatus: output.CreateAccountStatus !== undefined && output.CreateAccountStatus !== null
            ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateAccountStatus = (output, context) => {
    return {
        AccountId: output.AccountId !== undefined && output.AccountId !== null ? output.AccountId : undefined,
        AccountName: output.AccountName !== undefined && output.AccountName !== null ? output.AccountName : undefined,
        CompletedTimestamp: output.CompletedTimestamp !== undefined && output.CompletedTimestamp !== null
            ? new Date(Math.round(output.CompletedTimestamp * 1000))
            : undefined,
        FailureReason: output.FailureReason !== undefined && output.FailureReason !== null ? output.FailureReason : undefined,
        GovCloudAccountId: output.GovCloudAccountId !== undefined && output.GovCloudAccountId !== null
            ? output.GovCloudAccountId
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        RequestedTimestamp: output.RequestedTimestamp !== undefined && output.RequestedTimestamp !== null
            ? new Date(Math.round(output.RequestedTimestamp * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1CreateAccountStatuses = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1CreateAccountStatus(entry, context);
    });
};
const deserializeAws_json1_1CreateAccountStatusNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1CreateGovCloudAccountResponse = (output, context) => {
    return {
        CreateAccountStatus: output.CreateAccountStatus !== undefined && output.CreateAccountStatus !== null
            ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateOrganizationalUnitResponse = (output, context) => {
    return {
        OrganizationalUnit: output.OrganizationalUnit !== undefined && output.OrganizationalUnit !== null
            ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreateOrganizationResponse = (output, context) => {
    return {
        Organization: output.Organization !== undefined && output.Organization !== null
            ? deserializeAws_json1_1Organization(output.Organization, context)
            : undefined,
    };
};
const deserializeAws_json1_1CreatePolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
    };
};
const deserializeAws_json1_1DeclineHandshakeResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1DelegatedAdministrator = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        DelegationEnabledDate: output.DelegationEnabledDate !== undefined && output.DelegationEnabledDate !== null
            ? new Date(Math.round(output.DelegationEnabledDate * 1000))
            : undefined,
        Email: output.Email !== undefined && output.Email !== null ? output.Email : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        JoinedMethod: output.JoinedMethod !== undefined && output.JoinedMethod !== null ? output.JoinedMethod : undefined,
        JoinedTimestamp: output.JoinedTimestamp !== undefined && output.JoinedTimestamp !== null
            ? new Date(Math.round(output.JoinedTimestamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_json1_1DelegatedAdministrators = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DelegatedAdministrator(entry, context);
    });
};
const deserializeAws_json1_1DelegatedService = (output, context) => {
    return {
        DelegationEnabledDate: output.DelegationEnabledDate !== undefined && output.DelegationEnabledDate !== null
            ? new Date(Math.round(output.DelegationEnabledDate * 1000))
            : undefined,
        ServicePrincipal: output.ServicePrincipal !== undefined && output.ServicePrincipal !== null ? output.ServicePrincipal : undefined,
    };
};
const deserializeAws_json1_1DelegatedServices = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1DelegatedService(entry, context);
    });
};
const deserializeAws_json1_1DescribeAccountResponse = (output, context) => {
    return {
        Account: output.Account !== undefined && output.Account !== null
            ? deserializeAws_json1_1Account(output.Account, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeCreateAccountStatusResponse = (output, context) => {
    return {
        CreateAccountStatus: output.CreateAccountStatus !== undefined && output.CreateAccountStatus !== null
            ? deserializeAws_json1_1CreateAccountStatus(output.CreateAccountStatus, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeEffectivePolicyResponse = (output, context) => {
    return {
        EffectivePolicy: output.EffectivePolicy !== undefined && output.EffectivePolicy !== null
            ? deserializeAws_json1_1EffectivePolicy(output.EffectivePolicy, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeHandshakeResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationalUnitResponse = (output, context) => {
    return {
        OrganizationalUnit: output.OrganizationalUnit !== undefined && output.OrganizationalUnit !== null
            ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribeOrganizationResponse = (output, context) => {
    return {
        Organization: output.Organization !== undefined && output.Organization !== null
            ? deserializeAws_json1_1Organization(output.Organization, context)
            : undefined,
    };
};
const deserializeAws_json1_1DescribePolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
    };
};
const deserializeAws_json1_1DestinationParentNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DisablePolicyTypeResponse = (output, context) => {
    return {
        Root: output.Root !== undefined && output.Root !== null ? deserializeAws_json1_1Root(output.Root, context) : undefined,
    };
};
const deserializeAws_json1_1DuplicateAccountException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DuplicateHandshakeException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DuplicateOrganizationalUnitException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DuplicatePolicyAttachmentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1DuplicatePolicyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EffectivePolicy = (output, context) => {
    return {
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
            : undefined,
        PolicyContent: output.PolicyContent !== undefined && output.PolicyContent !== null ? output.PolicyContent : undefined,
        PolicyType: output.PolicyType !== undefined && output.PolicyType !== null ? output.PolicyType : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
    };
};
const deserializeAws_json1_1EffectivePolicyNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1EnableAllFeaturesResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1EnabledServicePrincipal = (output, context) => {
    return {
        DateEnabled: output.DateEnabled !== undefined && output.DateEnabled !== null
            ? new Date(Math.round(output.DateEnabled * 1000))
            : undefined,
        ServicePrincipal: output.ServicePrincipal !== undefined && output.ServicePrincipal !== null ? output.ServicePrincipal : undefined,
    };
};
const deserializeAws_json1_1EnabledServicePrincipals = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1EnabledServicePrincipal(entry, context);
    });
};
const deserializeAws_json1_1EnablePolicyTypeResponse = (output, context) => {
    return {
        Root: output.Root !== undefined && output.Root !== null ? deserializeAws_json1_1Root(output.Root, context) : undefined,
    };
};
const deserializeAws_json1_1FinalizingOrganizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Handshake = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ExpirationTimestamp: output.ExpirationTimestamp !== undefined && output.ExpirationTimestamp !== null
            ? new Date(Math.round(output.ExpirationTimestamp * 1000))
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Parties: output.Parties !== undefined && output.Parties !== null
            ? deserializeAws_json1_1HandshakeParties(output.Parties, context)
            : undefined,
        RequestedTimestamp: output.RequestedTimestamp !== undefined && output.RequestedTimestamp !== null
            ? new Date(Math.round(output.RequestedTimestamp * 1000))
            : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1HandshakeResources(output.Resources, context)
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
    };
};
const deserializeAws_json1_1HandshakeAlreadyInStateException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1HandshakeConstraintViolationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1HandshakeNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1HandshakeParties = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HandshakeParty(entry, context);
    });
};
const deserializeAws_json1_1HandshakeParty = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1HandshakeResource = (output, context) => {
    return {
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_json1_1HandshakeResources(output.Resources, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1HandshakeResources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1HandshakeResource(entry, context);
    });
};
const deserializeAws_json1_1Handshakes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Handshake(entry, context);
    });
};
const deserializeAws_json1_1InvalidHandshakeTransitionException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1InvalidInputException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Reason: output.Reason !== undefined && output.Reason !== null ? output.Reason : undefined,
    };
};
const deserializeAws_json1_1InviteAccountToOrganizationResponse = (output, context) => {
    return {
        Handshake: output.Handshake !== undefined && output.Handshake !== null
            ? deserializeAws_json1_1Handshake(output.Handshake, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListAccountsForParentResponse = (output, context) => {
    return {
        Accounts: output.Accounts !== undefined && output.Accounts !== null
            ? deserializeAws_json1_1Accounts(output.Accounts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListAccountsResponse = (output, context) => {
    return {
        Accounts: output.Accounts !== undefined && output.Accounts !== null
            ? deserializeAws_json1_1Accounts(output.Accounts, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListAWSServiceAccessForOrganizationResponse = (output, context) => {
    return {
        EnabledServicePrincipals: output.EnabledServicePrincipals !== undefined && output.EnabledServicePrincipals !== null
            ? deserializeAws_json1_1EnabledServicePrincipals(output.EnabledServicePrincipals, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListChildrenResponse = (output, context) => {
    return {
        Children: output.Children !== undefined && output.Children !== null
            ? deserializeAws_json1_1Children(output.Children, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListCreateAccountStatusResponse = (output, context) => {
    return {
        CreateAccountStatuses: output.CreateAccountStatuses !== undefined && output.CreateAccountStatuses !== null
            ? deserializeAws_json1_1CreateAccountStatuses(output.CreateAccountStatuses, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDelegatedAdministratorsResponse = (output, context) => {
    return {
        DelegatedAdministrators: output.DelegatedAdministrators !== undefined && output.DelegatedAdministrators !== null
            ? deserializeAws_json1_1DelegatedAdministrators(output.DelegatedAdministrators, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListDelegatedServicesForAccountResponse = (output, context) => {
    return {
        DelegatedServices: output.DelegatedServices !== undefined && output.DelegatedServices !== null
            ? deserializeAws_json1_1DelegatedServices(output.DelegatedServices, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListHandshakesForAccountResponse = (output, context) => {
    return {
        Handshakes: output.Handshakes !== undefined && output.Handshakes !== null
            ? deserializeAws_json1_1Handshakes(output.Handshakes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListHandshakesForOrganizationResponse = (output, context) => {
    return {
        Handshakes: output.Handshakes !== undefined && output.Handshakes !== null
            ? deserializeAws_json1_1Handshakes(output.Handshakes, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
const deserializeAws_json1_1ListOrganizationalUnitsForParentResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        OrganizationalUnits: output.OrganizationalUnits !== undefined && output.OrganizationalUnits !== null
            ? deserializeAws_json1_1OrganizationalUnits(output.OrganizationalUnits, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListParentsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Parents: output.Parents !== undefined && output.Parents !== null
            ? deserializeAws_json1_1Parents(output.Parents, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPoliciesForTargetResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_json1_1Policies(output.Policies, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListPoliciesResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Policies: output.Policies !== undefined && output.Policies !== null
            ? deserializeAws_json1_1Policies(output.Policies, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListRootsResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Roots: output.Roots !== undefined && output.Roots !== null
            ? deserializeAws_json1_1Roots(output.Roots, context)
            : undefined,
    };
};
const deserializeAws_json1_1ListTagsForResourceResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    };
};
const deserializeAws_json1_1ListTargetsForPolicyResponse = (output, context) => {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Targets: output.Targets !== undefined && output.Targets !== null
            ? deserializeAws_json1_1PolicyTargets(output.Targets, context)
            : undefined,
    };
};
const deserializeAws_json1_1MalformedPolicyDocumentException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1MasterCannotLeaveOrganizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Organization = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AvailablePolicyTypes: output.AvailablePolicyTypes !== undefined && output.AvailablePolicyTypes !== null
            ? deserializeAws_json1_1PolicyTypes(output.AvailablePolicyTypes, context)
            : undefined,
        FeatureSet: output.FeatureSet !== undefined && output.FeatureSet !== null ? output.FeatureSet : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        MasterAccountArn: output.MasterAccountArn !== undefined && output.MasterAccountArn !== null ? output.MasterAccountArn : undefined,
        MasterAccountEmail: output.MasterAccountEmail !== undefined && output.MasterAccountEmail !== null
            ? output.MasterAccountEmail
            : undefined,
        MasterAccountId: output.MasterAccountId !== undefined && output.MasterAccountId !== null ? output.MasterAccountId : undefined,
    };
};
const deserializeAws_json1_1OrganizationalUnit = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_json1_1OrganizationalUnitNotEmptyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationalUnitNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1OrganizationalUnits = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1OrganizationalUnit(entry, context);
    });
};
const deserializeAws_json1_1OrganizationNotEmptyException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Parent = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1ParentNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Parents = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Parent(entry, context);
    });
};
const deserializeAws_json1_1Policies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicySummary(entry, context);
    });
};
const deserializeAws_json1_1Policy = (output, context) => {
    return {
        Content: output.Content !== undefined && output.Content !== null ? output.Content : undefined,
        PolicySummary: output.PolicySummary !== undefined && output.PolicySummary !== null
            ? deserializeAws_json1_1PolicySummary(output.PolicySummary, context)
            : undefined,
    };
};
const deserializeAws_json1_1PolicyChangesInProgressException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyInUseException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyNotAttachedException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicySummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AwsManaged: output.AwsManaged !== undefined && output.AwsManaged !== null ? output.AwsManaged : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1PolicyTargets = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyTargetSummary(entry, context);
    });
};
const deserializeAws_json1_1PolicyTargetSummary = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        TargetId: output.TargetId !== undefined && output.TargetId !== null ? output.TargetId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1PolicyTypeAlreadyEnabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyTypeNotAvailableForOrganizationException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyTypeNotEnabledException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1PolicyTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1PolicyTypeSummary(entry, context);
    });
};
const deserializeAws_json1_1PolicyTypeSummary = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1Root = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PolicyTypes: output.PolicyTypes !== undefined && output.PolicyTypes !== null
            ? deserializeAws_json1_1PolicyTypes(output.PolicyTypes, context)
            : undefined,
    };
};
const deserializeAws_json1_1RootNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Roots = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Root(entry, context);
    });
};
const deserializeAws_json1_1ServiceException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1SourceParentNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_json1_1Tags = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_1Tag(entry, context);
    });
};
const deserializeAws_json1_1TargetNotFoundException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1TooManyRequestsException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_json1_1UnsupportedAPIEndpointException = (output, context) => {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
const deserializeAws_json1_1UpdateOrganizationalUnitResponse = (output, context) => {
    return {
        OrganizationalUnit: output.OrganizationalUnit !== undefined && output.OrganizationalUnit !== null
            ? deserializeAws_json1_1OrganizationalUnit(output.OrganizationalUnit, context)
            : undefined,
    };
};
const deserializeAws_json1_1UpdatePolicyResponse = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null
            ? deserializeAws_json1_1Policy(output.Policy, context)
            : undefined,
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