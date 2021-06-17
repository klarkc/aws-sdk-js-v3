"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateResourceShareCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1RejectResourceShareInvitationCommand = exports.deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = exports.deserializeAws_restJson1ListResourceTypesCommand = exports.deserializeAws_restJson1ListResourceSharePermissionsCommand = exports.deserializeAws_restJson1ListResourcesCommand = exports.deserializeAws_restJson1ListPrincipalsCommand = exports.deserializeAws_restJson1ListPermissionsCommand = exports.deserializeAws_restJson1ListPendingInvitationResourcesCommand = exports.deserializeAws_restJson1GetResourceSharesCommand = exports.deserializeAws_restJson1GetResourceShareInvitationsCommand = exports.deserializeAws_restJson1GetResourceShareAssociationsCommand = exports.deserializeAws_restJson1GetResourcePoliciesCommand = exports.deserializeAws_restJson1GetPermissionCommand = exports.deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand = exports.deserializeAws_restJson1DisassociateResourceSharePermissionCommand = exports.deserializeAws_restJson1DisassociateResourceShareCommand = exports.deserializeAws_restJson1DeleteResourceShareCommand = exports.deserializeAws_restJson1CreateResourceShareCommand = exports.deserializeAws_restJson1AssociateResourceSharePermissionCommand = exports.deserializeAws_restJson1AssociateResourceShareCommand = exports.deserializeAws_restJson1AcceptResourceShareInvitationCommand = exports.serializeAws_restJson1UpdateResourceShareCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1RejectResourceShareInvitationCommand = exports.serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = exports.serializeAws_restJson1ListResourceTypesCommand = exports.serializeAws_restJson1ListResourceSharePermissionsCommand = exports.serializeAws_restJson1ListResourcesCommand = exports.serializeAws_restJson1ListPrincipalsCommand = exports.serializeAws_restJson1ListPermissionsCommand = exports.serializeAws_restJson1ListPendingInvitationResourcesCommand = exports.serializeAws_restJson1GetResourceSharesCommand = exports.serializeAws_restJson1GetResourceShareInvitationsCommand = exports.serializeAws_restJson1GetResourceShareAssociationsCommand = exports.serializeAws_restJson1GetResourcePoliciesCommand = exports.serializeAws_restJson1GetPermissionCommand = exports.serializeAws_restJson1EnableSharingWithAwsOrganizationCommand = exports.serializeAws_restJson1DisassociateResourceSharePermissionCommand = exports.serializeAws_restJson1DisassociateResourceShareCommand = exports.serializeAws_restJson1DeleteResourceShareCommand = exports.serializeAws_restJson1CreateResourceShareCommand = exports.serializeAws_restJson1AssociateResourceSharePermissionCommand = exports.serializeAws_restJson1AssociateResourceShareCommand = exports.serializeAws_restJson1AcceptResourceShareInvitationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const serializeAws_restJson1AcceptResourceShareInvitationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/acceptresourceshareinvitation";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.resourceShareInvitationArn !== undefined &&
            input.resourceShareInvitationArn !== null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
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
exports.serializeAws_restJson1AcceptResourceShareInvitationCommand = serializeAws_restJson1AcceptResourceShareInvitationCommand;
const serializeAws_restJson1AssociateResourceShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associateresourceshare";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.principals !== undefined &&
            input.principals !== null && {
            principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
        }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1AssociateResourceShareCommand = serializeAws_restJson1AssociateResourceShareCommand;
const serializeAws_restJson1AssociateResourceSharePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/associateresourcesharepermission";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.permissionArn !== undefined && input.permissionArn !== null && { permissionArn: input.permissionArn }),
        ...(input.replace !== undefined && input.replace !== null && { replace: input.replace }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1AssociateResourceSharePermissionCommand = serializeAws_restJson1AssociateResourceSharePermissionCommand;
const serializeAws_restJson1CreateResourceShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/createresourceshare";
    let body;
    body = JSON.stringify({
        ...(input.allowExternalPrincipals !== undefined &&
            input.allowExternalPrincipals !== null && { allowExternalPrincipals: input.allowExternalPrincipals }),
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.permissionArns !== undefined &&
            input.permissionArns !== null && {
            permissionArns: serializeAws_restJson1PermissionArnList(input.permissionArns, context),
        }),
        ...(input.principals !== undefined &&
            input.principals !== null && {
            principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
        }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
exports.serializeAws_restJson1CreateResourceShareCommand = serializeAws_restJson1CreateResourceShareCommand;
const serializeAws_restJson1DeleteResourceShareCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/deleteresourceshare";
    const query = {
        ...(input.resourceShareArn !== undefined && { resourceShareArn: input.resourceShareArn }),
        ...(input.clientToken !== undefined && { clientToken: input.clientToken }),
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
exports.serializeAws_restJson1DeleteResourceShareCommand = serializeAws_restJson1DeleteResourceShareCommand;
const serializeAws_restJson1DisassociateResourceShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/disassociateresourceshare";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.principals !== undefined &&
            input.principals !== null && {
            principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
        }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1DisassociateResourceShareCommand = serializeAws_restJson1DisassociateResourceShareCommand;
const serializeAws_restJson1DisassociateResourceSharePermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/disassociateresourcesharepermission";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.permissionArn !== undefined && input.permissionArn !== null && { permissionArn: input.permissionArn }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1DisassociateResourceSharePermissionCommand = serializeAws_restJson1DisassociateResourceSharePermissionCommand;
const serializeAws_restJson1EnableSharingWithAwsOrganizationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/enablesharingwithawsorganization";
    let body;
    body = "";
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
exports.serializeAws_restJson1EnableSharingWithAwsOrganizationCommand = serializeAws_restJson1EnableSharingWithAwsOrganizationCommand;
const serializeAws_restJson1GetPermissionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getpermission";
    let body;
    body = JSON.stringify({
        ...(input.permissionArn !== undefined && input.permissionArn !== null && { permissionArn: input.permissionArn }),
        ...(input.permissionVersion !== undefined &&
            input.permissionVersion !== null && { permissionVersion: input.permissionVersion }),
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
exports.serializeAws_restJson1GetPermissionCommand = serializeAws_restJson1GetPermissionCommand;
const serializeAws_restJson1GetResourcePoliciesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getresourcepolicies";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.principal !== undefined && input.principal !== null && { principal: input.principal }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
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
exports.serializeAws_restJson1GetResourcePoliciesCommand = serializeAws_restJson1GetResourcePoliciesCommand;
const serializeAws_restJson1GetResourceShareAssociationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getresourceshareassociations";
    let body;
    body = JSON.stringify({
        ...(input.associationStatus !== undefined &&
            input.associationStatus !== null && { associationStatus: input.associationStatus }),
        ...(input.associationType !== undefined &&
            input.associationType !== null && { associationType: input.associationType }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.principal !== undefined && input.principal !== null && { principal: input.principal }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.resourceShareArns !== undefined &&
            input.resourceShareArns !== null && {
            resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
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
exports.serializeAws_restJson1GetResourceShareAssociationsCommand = serializeAws_restJson1GetResourceShareAssociationsCommand;
const serializeAws_restJson1GetResourceShareInvitationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getresourceshareinvitations";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceShareArns !== undefined &&
            input.resourceShareArns !== null && {
            resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
        }),
        ...(input.resourceShareInvitationArns !== undefined &&
            input.resourceShareInvitationArns !== null && {
            resourceShareInvitationArns: serializeAws_restJson1ResourceShareInvitationArnList(input.resourceShareInvitationArns, context),
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
exports.serializeAws_restJson1GetResourceShareInvitationsCommand = serializeAws_restJson1GetResourceShareInvitationsCommand;
const serializeAws_restJson1GetResourceSharesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/getresourceshares";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceOwner !== undefined && input.resourceOwner !== null && { resourceOwner: input.resourceOwner }),
        ...(input.resourceShareArns !== undefined &&
            input.resourceShareArns !== null && {
            resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
        }),
        ...(input.resourceShareStatus !== undefined &&
            input.resourceShareStatus !== null && { resourceShareStatus: input.resourceShareStatus }),
        ...(input.tagFilters !== undefined &&
            input.tagFilters !== null && { tagFilters: serializeAws_restJson1TagFilters(input.tagFilters, context) }),
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
exports.serializeAws_restJson1GetResourceSharesCommand = serializeAws_restJson1GetResourceSharesCommand;
const serializeAws_restJson1ListPendingInvitationResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listpendinginvitationresources";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceShareInvitationArn !== undefined &&
            input.resourceShareInvitationArn !== null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
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
exports.serializeAws_restJson1ListPendingInvitationResourcesCommand = serializeAws_restJson1ListPendingInvitationResourcesCommand;
const serializeAws_restJson1ListPermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listpermissions";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
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
exports.serializeAws_restJson1ListPermissionsCommand = serializeAws_restJson1ListPermissionsCommand;
const serializeAws_restJson1ListPrincipalsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listprincipals";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.principals !== undefined &&
            input.principals !== null && {
            principals: serializeAws_restJson1PrincipalArnOrIdList(input.principals, context),
        }),
        ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
        ...(input.resourceOwner !== undefined && input.resourceOwner !== null && { resourceOwner: input.resourceOwner }),
        ...(input.resourceShareArns !== undefined &&
            input.resourceShareArns !== null && {
            resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
        }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
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
exports.serializeAws_restJson1ListPrincipalsCommand = serializeAws_restJson1ListPrincipalsCommand;
const serializeAws_restJson1ListResourcesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listresources";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.principal !== undefined && input.principal !== null && { principal: input.principal }),
        ...(input.resourceArns !== undefined &&
            input.resourceArns !== null && {
            resourceArns: serializeAws_restJson1ResourceArnList(input.resourceArns, context),
        }),
        ...(input.resourceOwner !== undefined && input.resourceOwner !== null && { resourceOwner: input.resourceOwner }),
        ...(input.resourceShareArns !== undefined &&
            input.resourceShareArns !== null && {
            resourceShareArns: serializeAws_restJson1ResourceShareArnList(input.resourceShareArns, context),
        }),
        ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
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
exports.serializeAws_restJson1ListResourcesCommand = serializeAws_restJson1ListResourcesCommand;
const serializeAws_restJson1ListResourceSharePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listresourcesharepermissions";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1ListResourceSharePermissionsCommand = serializeAws_restJson1ListResourceSharePermissionsCommand;
const serializeAws_restJson1ListResourceTypesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/listresourcetypes";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListResourceTypesCommand = serializeAws_restJson1ListResourceTypesCommand;
const serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/promoteresourcesharecreatedfrompolicy";
    const query = {
        ...(input.resourceShareArn !== undefined && { resourceShareArn: input.resourceShareArn }),
    };
    let body;
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
exports.serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = serializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand;
const serializeAws_restJson1RejectResourceShareInvitationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/rejectresourceshareinvitation";
    let body;
    body = JSON.stringify({
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.resourceShareInvitationArn !== undefined &&
            input.resourceShareInvitationArn !== null && { resourceShareInvitationArn: input.resourceShareInvitationArn }),
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
exports.serializeAws_restJson1RejectResourceShareInvitationCommand = serializeAws_restJson1RejectResourceShareInvitationCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tagresource";
    let body;
    body = JSON.stringify({
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/untagresource";
    let body;
    body = JSON.stringify({
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
        ...(input.tagKeys !== undefined &&
            input.tagKeys !== null && { tagKeys: serializeAws_restJson1TagKeyList(input.tagKeys, context) }),
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
exports.serializeAws_restJson1UntagResourceCommand = serializeAws_restJson1UntagResourceCommand;
const serializeAws_restJson1UpdateResourceShareCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/updateresourceshare";
    let body;
    body = JSON.stringify({
        ...(input.allowExternalPrincipals !== undefined &&
            input.allowExternalPrincipals !== null && { allowExternalPrincipals: input.allowExternalPrincipals }),
        ...(input.clientToken !== undefined && input.clientToken !== null && { clientToken: input.clientToken }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.resourceShareArn !== undefined &&
            input.resourceShareArn !== null && { resourceShareArn: input.resourceShareArn }),
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
exports.serializeAws_restJson1UpdateResourceShareCommand = serializeAws_restJson1UpdateResourceShareCommand;
const deserializeAws_restJson1AcceptResourceShareInvitationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AcceptResourceShareInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShareInvitation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShareInvitation !== undefined && data.resourceShareInvitation !== null) {
        contents.resourceShareInvitation = deserializeAws_restJson1ResourceShareInvitation(data.resourceShareInvitation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AcceptResourceShareInvitationCommand = deserializeAws_restJson1AcceptResourceShareInvitationCommand;
const deserializeAws_restJson1AcceptResourceShareInvitationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationAlreadyAcceptedException":
        case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationAlreadyRejectedException":
        case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationArnNotFoundException":
        case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationExpiredException":
        case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AssociateResourceShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateResourceShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShareAssociations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShareAssociations !== undefined && data.resourceShareAssociations !== null) {
        contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(data.resourceShareAssociations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateResourceShareCommand = deserializeAws_restJson1AssociateResourceShareCommand;
const deserializeAws_restJson1AssociateResourceShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateTransitionException":
        case "com.amazonaws.ram#InvalidStateTransitionException":
            response = {
                ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareLimitExceededException":
        case "com.amazonaws.ram#ResourceShareLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AssociateResourceSharePermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateResourceSharePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        returnValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.returnValue !== undefined && data.returnValue !== null) {
        contents.returnValue = data.returnValue;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateResourceSharePermissionCommand = deserializeAws_restJson1AssociateResourceSharePermissionCommand;
const deserializeAws_restJson1AssociateResourceSharePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateResourceShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateResourceShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShare: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShare !== undefined && data.resourceShare !== null) {
        contents.resourceShare = deserializeAws_restJson1ResourceShare(data.resourceShare, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResourceShareCommand = deserializeAws_restJson1CreateResourceShareCommand;
const deserializeAws_restJson1CreateResourceShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateTransitionException":
        case "com.amazonaws.ram#InvalidStateTransitionException":
            response = {
                ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareLimitExceededException":
        case "com.amazonaws.ram#ResourceShareLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyViolationException":
        case "com.amazonaws.ram#TagPolicyViolationException":
            response = {
                ...(await deserializeAws_restJson1TagPolicyViolationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteResourceShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourceShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        returnValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.returnValue !== undefined && data.returnValue !== null) {
        contents.returnValue = data.returnValue;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourceShareCommand = deserializeAws_restJson1DeleteResourceShareCommand;
const deserializeAws_restJson1DeleteResourceShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateTransitionException":
        case "com.amazonaws.ram#InvalidStateTransitionException":
            response = {
                ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateResourceShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateResourceShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShareAssociations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShareAssociations !== undefined && data.resourceShareAssociations !== null) {
        contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(data.resourceShareAssociations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateResourceShareCommand = deserializeAws_restJson1DisassociateResourceShareCommand;
const deserializeAws_restJson1DisassociateResourceShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidStateTransitionException":
        case "com.amazonaws.ram#InvalidStateTransitionException":
            response = {
                ...(await deserializeAws_restJson1InvalidStateTransitionExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareLimitExceededException":
        case "com.amazonaws.ram#ResourceShareLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DisassociateResourceSharePermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateResourceSharePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        returnValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.returnValue !== undefined && data.returnValue !== null) {
        contents.returnValue = data.returnValue;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateResourceSharePermissionCommand = deserializeAws_restJson1DisassociateResourceSharePermissionCommand;
const deserializeAws_restJson1DisassociateResourceSharePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1EnableSharingWithAwsOrganizationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        returnValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.returnValue !== undefined && data.returnValue !== null) {
        contents.returnValue = data.returnValue;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand = deserializeAws_restJson1EnableSharingWithAwsOrganizationCommand;
const deserializeAws_restJson1EnableSharingWithAwsOrganizationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetPermissionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        permission: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.permission !== undefined && data.permission !== null) {
        contents.permission = deserializeAws_restJson1ResourceSharePermissionDetail(data.permission, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPermissionCommand = deserializeAws_restJson1GetPermissionCommand;
const deserializeAws_restJson1GetPermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourcePoliciesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourcePoliciesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        policies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.policies !== undefined && data.policies !== null) {
        contents.policies = deserializeAws_restJson1PolicyList(data.policies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourcePoliciesCommand = deserializeAws_restJson1GetResourcePoliciesCommand;
const deserializeAws_restJson1GetResourcePoliciesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnNotFoundException":
        case "com.amazonaws.ram#ResourceArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourceShareAssociationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceShareAssociationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resourceShareAssociations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resourceShareAssociations !== undefined && data.resourceShareAssociations !== null) {
        contents.resourceShareAssociations = deserializeAws_restJson1ResourceShareAssociationList(data.resourceShareAssociations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceShareAssociationsCommand = deserializeAws_restJson1GetResourceShareAssociationsCommand;
const deserializeAws_restJson1GetResourceShareAssociationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourceShareInvitationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceShareInvitationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resourceShareInvitations: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resourceShareInvitations !== undefined && data.resourceShareInvitations !== null) {
        contents.resourceShareInvitations = deserializeAws_restJson1ResourceShareInvitationList(data.resourceShareInvitations, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceShareInvitationsCommand = deserializeAws_restJson1GetResourceShareInvitationsCommand;
const deserializeAws_restJson1GetResourceShareInvitationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidMaxResultsException":
        case "com.amazonaws.ram#InvalidMaxResultsException":
            response = {
                ...(await deserializeAws_restJson1InvalidMaxResultsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationArnNotFoundException":
        case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourceSharesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourceSharesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resourceShares: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resourceShares !== undefined && data.resourceShares !== null) {
        contents.resourceShares = deserializeAws_restJson1ResourceShareList(data.resourceShares, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourceSharesCommand = deserializeAws_restJson1GetResourceSharesCommand;
const deserializeAws_restJson1GetResourceSharesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPendingInvitationResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPendingInvitationResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resources !== undefined && data.resources !== null) {
        contents.resources = deserializeAws_restJson1ResourceList(data.resources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPendingInvitationResourcesCommand = deserializeAws_restJson1ListPendingInvitationResourcesCommand;
const deserializeAws_restJson1ListPendingInvitationResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.ram#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationAlreadyRejectedException":
        case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationArnNotFoundException":
        case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationExpiredException":
        case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        permissions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.permissions !== undefined && data.permissions !== null) {
        contents.permissions = deserializeAws_restJson1ResourceSharePermissionList(data.permissions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPermissionsCommand = deserializeAws_restJson1ListPermissionsCommand;
const deserializeAws_restJson1ListPermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPrincipalsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPrincipalsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        principals: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.principals !== undefined && data.principals !== null) {
        contents.principals = deserializeAws_restJson1PrincipalList(data.principals, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPrincipalsCommand = deserializeAws_restJson1ListPrincipalsCommand;
const deserializeAws_restJson1ListPrincipalsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resources: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resources !== undefined && data.resources !== null) {
        contents.resources = deserializeAws_restJson1ResourceList(data.resources, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResourcesCommand = deserializeAws_restJson1ListResourcesCommand;
const deserializeAws_restJson1ListResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidResourceTypeException":
        case "com.amazonaws.ram#InvalidResourceTypeException":
            response = {
                ...(await deserializeAws_restJson1InvalidResourceTypeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListResourceSharePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResourceSharePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        permissions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.permissions !== undefined && data.permissions !== null) {
        contents.permissions = deserializeAws_restJson1ResourceSharePermissionList(data.permissions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResourceSharePermissionsCommand = deserializeAws_restJson1ListResourceSharePermissionsCommand;
const deserializeAws_restJson1ListResourceSharePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListResourceTypesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListResourceTypesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        resourceTypes: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.resourceTypes !== undefined && data.resourceTypes !== null) {
        contents.resourceTypes = deserializeAws_restJson1ServiceNameAndResourceTypeList(data.resourceTypes, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResourceTypesCommand = deserializeAws_restJson1ListResourceTypesCommand;
const deserializeAws_restJson1ListResourceTypesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidNextTokenException":
        case "com.amazonaws.ram#InvalidNextTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidNextTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        returnValue: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.returnValue !== undefined && data.returnValue !== null) {
        contents.returnValue = data.returnValue;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand = deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommand;
const deserializeAws_restJson1PromoteResourceShareCreatedFromPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.ram#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RejectResourceShareInvitationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RejectResourceShareInvitationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShareInvitation: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShareInvitation !== undefined && data.resourceShareInvitation !== null) {
        contents.resourceShareInvitation = deserializeAws_restJson1ResourceShareInvitation(data.resourceShareInvitation, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RejectResourceShareInvitationCommand = deserializeAws_restJson1RejectResourceShareInvitationCommand;
const deserializeAws_restJson1RejectResourceShareInvitationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationAlreadyAcceptedException":
        case "com.amazonaws.ram#ResourceShareInvitationAlreadyAcceptedException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationAlreadyRejectedException":
        case "com.amazonaws.ram#ResourceShareInvitationAlreadyRejectedException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationArnNotFoundException":
        case "com.amazonaws.ram#ResourceShareInvitationArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceShareInvitationExpiredException":
        case "com.amazonaws.ram#ResourceShareInvitationExpiredException":
            response = {
                ...(await deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
    };
    await collectBody(output.body, context);
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
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceArnNotFoundException":
        case "com.amazonaws.ram#ResourceArnNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceArnNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagLimitExceededException":
        case "com.amazonaws.ram#TagLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1TagLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TagPolicyViolationException":
        case "com.amazonaws.ram#TagPolicyViolationException":
            response = {
                ...(await deserializeAws_restJson1TagPolicyViolationExceptionResponse(parsedOutput, context)),
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
    };
    await collectBody(output.body, context);
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
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateResourceShareCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateResourceShareCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        resourceShare: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.resourceShare !== undefined && data.resourceShare !== null) {
        contents.resourceShare = deserializeAws_restJson1ResourceShare(data.resourceShare, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResourceShareCommand = deserializeAws_restJson1UpdateResourceShareCommand;
const deserializeAws_restJson1UpdateResourceShareCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.ram#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidClientTokenException":
        case "com.amazonaws.ram#InvalidClientTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidClientTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.ram#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MalformedArnException":
        case "com.amazonaws.ram#MalformedArnException":
            response = {
                ...(await deserializeAws_restJson1MalformedArnExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingRequiredParameterException":
        case "com.amazonaws.ram#MissingRequiredParameterException":
            response = {
                ...(await deserializeAws_restJson1MissingRequiredParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "OperationNotPermittedException":
        case "com.amazonaws.ram#OperationNotPermittedException":
            response = {
                ...(await deserializeAws_restJson1OperationNotPermittedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerInternalException":
        case "com.amazonaws.ram#ServerInternalException":
            response = {
                ...(await deserializeAws_restJson1ServerInternalExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.ram#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnknownResourceException":
        case "com.amazonaws.ram#UnknownResourceException":
            response = {
                ...(await deserializeAws_restJson1UnknownResourceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdempotentParameterMismatchException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidClientTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidClientTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidMaxResultsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidMaxResultsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidNextTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidNextTokenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidResourceTypeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidResourceTypeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidStateTransitionExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidStateTransitionException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1MalformedArnExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MalformedArnException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1MissingRequiredParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MissingRequiredParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1OperationNotPermittedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "OperationNotPermittedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceArnNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceArnNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceShareInvitationAlreadyAcceptedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceShareInvitationAlreadyAcceptedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceShareInvitationAlreadyRejectedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceShareInvitationAlreadyRejectedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceShareInvitationArnNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceShareInvitationArnNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceShareInvitationExpiredExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceShareInvitationExpiredException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceShareLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceShareLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServerInternalExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServerInternalException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TagLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TagLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1TagPolicyViolationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TagPolicyViolationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1UnknownResourceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnknownResourceException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1PermissionArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1PrincipalArnOrIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceShareArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceShareInvitationArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1TagFilter = (input, context) => {
    return {
        ...(input.tagKey !== undefined && input.tagKey !== null && { tagKey: input.tagKey }),
        ...(input.tagValues !== undefined &&
            input.tagValues !== null && { tagValues: serializeAws_restJson1TagValueList(input.tagValues, context) }),
    };
};
const serializeAws_restJson1TagFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1TagFilter(entry, context);
    });
};
const serializeAws_restJson1TagKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_restJson1TagValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1PolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Principal = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        external: output.external !== undefined && output.external !== null ? output.external : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        resourceShareArn: output.resourceShareArn !== undefined && output.resourceShareArn !== null ? output.resourceShareArn : undefined,
    };
};
const deserializeAws_restJson1PrincipalList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Principal(entry, context);
    });
};
const deserializeAws_restJson1Resource = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        resourceGroupArn: output.resourceGroupArn !== undefined && output.resourceGroupArn !== null ? output.resourceGroupArn : undefined,
        resourceShareArn: output.resourceShareArn !== undefined && output.resourceShareArn !== null ? output.resourceShareArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1ResourceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Resource(entry, context);
    });
};
const deserializeAws_restJson1ResourceShare = (output, context) => {
    return {
        allowExternalPrincipals: output.allowExternalPrincipals !== undefined && output.allowExternalPrincipals !== null
            ? output.allowExternalPrincipals
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        featureSet: output.featureSet !== undefined && output.featureSet !== null ? output.featureSet : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owningAccountId: output.owningAccountId !== undefined && output.owningAccountId !== null ? output.owningAccountId : undefined,
        resourceShareArn: output.resourceShareArn !== undefined && output.resourceShareArn !== null ? output.resourceShareArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagList(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourceShareAssociation = (output, context) => {
    return {
        associatedEntity: output.associatedEntity !== undefined && output.associatedEntity !== null ? output.associatedEntity : undefined,
        associationType: output.associationType !== undefined && output.associationType !== null ? output.associationType : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        external: output.external !== undefined && output.external !== null ? output.external : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        resourceShareArn: output.resourceShareArn !== undefined && output.resourceShareArn !== null ? output.resourceShareArn : undefined,
        resourceShareName: output.resourceShareName !== undefined && output.resourceShareName !== null
            ? output.resourceShareName
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
    };
};
const deserializeAws_restJson1ResourceShareAssociationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceShareAssociation(entry, context);
    });
};
const deserializeAws_restJson1ResourceShareInvitation = (output, context) => {
    return {
        invitationTimestamp: output.invitationTimestamp !== undefined && output.invitationTimestamp !== null
            ? new Date(Math.round(output.invitationTimestamp * 1000))
            : undefined,
        receiverAccountId: output.receiverAccountId !== undefined && output.receiverAccountId !== null
            ? output.receiverAccountId
            : undefined,
        resourceShareArn: output.resourceShareArn !== undefined && output.resourceShareArn !== null ? output.resourceShareArn : undefined,
        resourceShareAssociations: output.resourceShareAssociations !== undefined && output.resourceShareAssociations !== null
            ? deserializeAws_restJson1ResourceShareAssociationList(output.resourceShareAssociations, context)
            : undefined,
        resourceShareInvitationArn: output.resourceShareInvitationArn !== undefined && output.resourceShareInvitationArn !== null
            ? output.resourceShareInvitationArn
            : undefined,
        resourceShareName: output.resourceShareName !== undefined && output.resourceShareName !== null
            ? output.resourceShareName
            : undefined,
        senderAccountId: output.senderAccountId !== undefined && output.senderAccountId !== null ? output.senderAccountId : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ResourceShareInvitationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceShareInvitation(entry, context);
    });
};
const deserializeAws_restJson1ResourceShareList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceShare(entry, context);
    });
};
const deserializeAws_restJson1ResourceSharePermissionDetail = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        defaultVersion: output.defaultVersion !== undefined && output.defaultVersion !== null ? output.defaultVersion : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        permission: output.permission !== undefined && output.permission !== null ? output.permission : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1ResourceSharePermissionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourceSharePermissionSummary(entry, context);
    });
};
const deserializeAws_restJson1ResourceSharePermissionSummary = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        defaultVersion: output.defaultVersion !== undefined && output.defaultVersion !== null ? output.defaultVersion : undefined,
        lastUpdatedTime: output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
            ? new Date(Math.round(output.lastUpdatedTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1ServiceNameAndResourceType = (output, context) => {
    return {
        resourceType: output.resourceType !== undefined && output.resourceType !== null ? output.resourceType : undefined,
        serviceName: output.serviceName !== undefined && output.serviceName !== null ? output.serviceName : undefined,
    };
};
const deserializeAws_restJson1ServiceNameAndResourceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ServiceNameAndResourceType(entry, context);
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
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