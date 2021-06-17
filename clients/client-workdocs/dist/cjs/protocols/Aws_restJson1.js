"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1CreateUserCommand = exports.deserializeAws_restJson1CreateNotificationSubscriptionCommand = exports.deserializeAws_restJson1CreateLabelsCommand = exports.deserializeAws_restJson1CreateFolderCommand = exports.deserializeAws_restJson1CreateCustomMetadataCommand = exports.deserializeAws_restJson1CreateCommentCommand = exports.deserializeAws_restJson1AddResourcePermissionsCommand = exports.deserializeAws_restJson1ActivateUserCommand = exports.deserializeAws_restJson1AbortDocumentVersionUploadCommand = exports.serializeAws_restJson1UpdateUserCommand = exports.serializeAws_restJson1UpdateFolderCommand = exports.serializeAws_restJson1UpdateDocumentVersionCommand = exports.serializeAws_restJson1UpdateDocumentCommand = exports.serializeAws_restJson1RemoveResourcePermissionCommand = exports.serializeAws_restJson1RemoveAllResourcePermissionsCommand = exports.serializeAws_restJson1InitiateDocumentVersionUploadCommand = exports.serializeAws_restJson1GetResourcesCommand = exports.serializeAws_restJson1GetFolderPathCommand = exports.serializeAws_restJson1GetFolderCommand = exports.serializeAws_restJson1GetDocumentVersionCommand = exports.serializeAws_restJson1GetDocumentPathCommand = exports.serializeAws_restJson1GetDocumentCommand = exports.serializeAws_restJson1GetCurrentUserCommand = exports.serializeAws_restJson1DescribeUsersCommand = exports.serializeAws_restJson1DescribeRootFoldersCommand = exports.serializeAws_restJson1DescribeResourcePermissionsCommand = exports.serializeAws_restJson1DescribeNotificationSubscriptionsCommand = exports.serializeAws_restJson1DescribeGroupsCommand = exports.serializeAws_restJson1DescribeFolderContentsCommand = exports.serializeAws_restJson1DescribeDocumentVersionsCommand = exports.serializeAws_restJson1DescribeCommentsCommand = exports.serializeAws_restJson1DescribeActivitiesCommand = exports.serializeAws_restJson1DeleteUserCommand = exports.serializeAws_restJson1DeleteNotificationSubscriptionCommand = exports.serializeAws_restJson1DeleteLabelsCommand = exports.serializeAws_restJson1DeleteFolderContentsCommand = exports.serializeAws_restJson1DeleteFolderCommand = exports.serializeAws_restJson1DeleteDocumentCommand = exports.serializeAws_restJson1DeleteCustomMetadataCommand = exports.serializeAws_restJson1DeleteCommentCommand = exports.serializeAws_restJson1DeactivateUserCommand = exports.serializeAws_restJson1CreateUserCommand = exports.serializeAws_restJson1CreateNotificationSubscriptionCommand = exports.serializeAws_restJson1CreateLabelsCommand = exports.serializeAws_restJson1CreateFolderCommand = exports.serializeAws_restJson1CreateCustomMetadataCommand = exports.serializeAws_restJson1CreateCommentCommand = exports.serializeAws_restJson1AddResourcePermissionsCommand = exports.serializeAws_restJson1ActivateUserCommand = exports.serializeAws_restJson1AbortDocumentVersionUploadCommand = void 0;
exports.deserializeAws_restJson1UpdateUserCommand = exports.deserializeAws_restJson1UpdateFolderCommand = exports.deserializeAws_restJson1UpdateDocumentVersionCommand = exports.deserializeAws_restJson1UpdateDocumentCommand = exports.deserializeAws_restJson1RemoveResourcePermissionCommand = exports.deserializeAws_restJson1RemoveAllResourcePermissionsCommand = exports.deserializeAws_restJson1InitiateDocumentVersionUploadCommand = exports.deserializeAws_restJson1GetResourcesCommand = exports.deserializeAws_restJson1GetFolderPathCommand = exports.deserializeAws_restJson1GetFolderCommand = exports.deserializeAws_restJson1GetDocumentVersionCommand = exports.deserializeAws_restJson1GetDocumentPathCommand = exports.deserializeAws_restJson1GetDocumentCommand = exports.deserializeAws_restJson1GetCurrentUserCommand = exports.deserializeAws_restJson1DescribeUsersCommand = exports.deserializeAws_restJson1DescribeRootFoldersCommand = exports.deserializeAws_restJson1DescribeResourcePermissionsCommand = exports.deserializeAws_restJson1DescribeNotificationSubscriptionsCommand = exports.deserializeAws_restJson1DescribeGroupsCommand = exports.deserializeAws_restJson1DescribeFolderContentsCommand = exports.deserializeAws_restJson1DescribeDocumentVersionsCommand = exports.deserializeAws_restJson1DescribeCommentsCommand = exports.deserializeAws_restJson1DescribeActivitiesCommand = exports.deserializeAws_restJson1DeleteUserCommand = exports.deserializeAws_restJson1DeleteNotificationSubscriptionCommand = exports.deserializeAws_restJson1DeleteLabelsCommand = exports.deserializeAws_restJson1DeleteFolderContentsCommand = exports.deserializeAws_restJson1DeleteFolderCommand = exports.deserializeAws_restJson1DeleteDocumentCommand = exports.deserializeAws_restJson1DeleteCustomMetadataCommand = exports.deserializeAws_restJson1DeleteCommentCommand = exports.deserializeAws_restJson1DeactivateUserCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AbortDocumentVersionUploadCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
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
exports.serializeAws_restJson1AbortDocumentVersionUploadCommand = serializeAws_restJson1AbortDocumentVersionUploadCommand;
const serializeAws_restJson1ActivateUserCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users/{UserId}/activation";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
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
exports.serializeAws_restJson1ActivateUserCommand = serializeAws_restJson1ActivateUserCommand;
const serializeAws_restJson1AddResourcePermissionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.NotificationOptions !== undefined &&
            input.NotificationOptions !== null && {
            NotificationOptions: serializeAws_restJson1NotificationOptions(input.NotificationOptions, context),
        }),
        ...(input.Principals !== undefined &&
            input.Principals !== null && { Principals: serializeAws_restJson1SharePrincipalList(input.Principals, context) }),
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
exports.serializeAws_restJson1AddResourcePermissionsCommand = serializeAws_restJson1AddResourcePermissionsCommand;
const serializeAws_restJson1CreateCommentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.NotifyCollaborators !== undefined &&
            input.NotifyCollaborators !== null && { NotifyCollaborators: input.NotifyCollaborators }),
        ...(input.ParentId !== undefined && input.ParentId !== null && { ParentId: input.ParentId }),
        ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
        ...(input.ThreadId !== undefined && input.ThreadId !== null && { ThreadId: input.ThreadId }),
        ...(input.Visibility !== undefined && input.Visibility !== null && { Visibility: input.Visibility }),
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
exports.serializeAws_restJson1CreateCommentCommand = serializeAws_restJson1CreateCommentCommand;
const serializeAws_restJson1CreateCustomMetadataCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    const query = {
        ...(input.VersionId !== undefined && { versionid: input.VersionId }),
    };
    let body;
    body = JSON.stringify({
        ...(input.CustomMetadata !== undefined &&
            input.CustomMetadata !== null && {
            CustomMetadata: serializeAws_restJson1CustomMetadataMap(input.CustomMetadata, context),
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
exports.serializeAws_restJson1CreateCustomMetadataCommand = serializeAws_restJson1CreateCustomMetadataCommand;
const serializeAws_restJson1CreateFolderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders";
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentFolderId !== undefined &&
            input.ParentFolderId !== null && { ParentFolderId: input.ParentFolderId }),
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
exports.serializeAws_restJson1CreateFolderCommand = serializeAws_restJson1CreateFolderCommand;
const serializeAws_restJson1CreateLabelsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Labels !== undefined &&
            input.Labels !== null && { Labels: serializeAws_restJson1SharedLabels(input.Labels, context) }),
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
exports.serializeAws_restJson1CreateLabelsCommand = serializeAws_restJson1CreateLabelsCommand;
const serializeAws_restJson1CreateNotificationSubscriptionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
    if (input.OrganizationId !== undefined) {
        const labelValue = input.OrganizationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OrganizationId.");
        }
        resolvedPath = resolvedPath.replace("{OrganizationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OrganizationId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Endpoint !== undefined && input.Endpoint !== null && { Endpoint: input.Endpoint }),
        ...(input.Protocol !== undefined && input.Protocol !== null && { Protocol: input.Protocol }),
        ...(input.SubscriptionType !== undefined &&
            input.SubscriptionType !== null && { SubscriptionType: input.SubscriptionType }),
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
exports.serializeAws_restJson1CreateNotificationSubscriptionCommand = serializeAws_restJson1CreateNotificationSubscriptionCommand;
const serializeAws_restJson1CreateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users";
    let body;
    body = JSON.stringify({
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.GivenName !== undefined && input.GivenName !== null && { GivenName: input.GivenName }),
        ...(input.OrganizationId !== undefined &&
            input.OrganizationId !== null && { OrganizationId: input.OrganizationId }),
        ...(input.Password !== undefined && input.Password !== null && { Password: input.Password }),
        ...(input.StorageRule !== undefined &&
            input.StorageRule !== null && { StorageRule: serializeAws_restJson1StorageRuleType(input.StorageRule, context) }),
        ...(input.Surname !== undefined && input.Surname !== null && { Surname: input.Surname }),
        ...(input.TimeZoneId !== undefined && input.TimeZoneId !== null && { TimeZoneId: input.TimeZoneId }),
        ...(input.Username !== undefined && input.Username !== null && { Username: input.Username }),
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
exports.serializeAws_restJson1CreateUserCommand = serializeAws_restJson1CreateUserCommand;
const serializeAws_restJson1DeactivateUserCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users/{UserId}/activation";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
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
exports.serializeAws_restJson1DeactivateUserCommand = serializeAws_restJson1DeactivateUserCommand;
const serializeAws_restJson1DeleteCommentCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
    }
    if (input.CommentId !== undefined) {
        const labelValue = input.CommentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: CommentId.");
        }
        resolvedPath = resolvedPath.replace("{CommentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: CommentId.");
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
exports.serializeAws_restJson1DeleteCommentCommand = serializeAws_restJson1DeleteCommentCommand;
const serializeAws_restJson1DeleteCustomMetadataCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/customMetadata";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    const query = {
        ...(input.VersionId !== undefined && { versionId: input.VersionId }),
        ...(input.Keys !== undefined && { keys: (input.Keys || []).map((_entry) => _entry) }),
        ...(input.DeleteAll !== undefined && { deleteAll: input.DeleteAll.toString() }),
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
exports.serializeAws_restJson1DeleteCustomMetadataCommand = serializeAws_restJson1DeleteCustomMetadataCommand;
const serializeAws_restJson1DeleteDocumentCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
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
exports.serializeAws_restJson1DeleteDocumentCommand = serializeAws_restJson1DeleteDocumentCommand;
const serializeAws_restJson1DeleteFolderCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
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
exports.serializeAws_restJson1DeleteFolderCommand = serializeAws_restJson1DeleteFolderCommand;
const serializeAws_restJson1DeleteFolderContentsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}/contents";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
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
exports.serializeAws_restJson1DeleteFolderContentsCommand = serializeAws_restJson1DeleteFolderContentsCommand;
const serializeAws_restJson1DeleteLabelsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/labels";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    const query = {
        ...(input.Labels !== undefined && { labels: (input.Labels || []).map((_entry) => _entry) }),
        ...(input.DeleteAll !== undefined && { deleteAll: input.DeleteAll.toString() }),
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
exports.serializeAws_restJson1DeleteLabelsCommand = serializeAws_restJson1DeleteLabelsCommand;
const serializeAws_restJson1DeleteNotificationSubscriptionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions/{SubscriptionId}";
    if (input.SubscriptionId !== undefined) {
        const labelValue = input.SubscriptionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SubscriptionId.");
        }
        resolvedPath = resolvedPath.replace("{SubscriptionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SubscriptionId.");
    }
    if (input.OrganizationId !== undefined) {
        const labelValue = input.OrganizationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OrganizationId.");
        }
        resolvedPath = resolvedPath.replace("{OrganizationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OrganizationId.");
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
exports.serializeAws_restJson1DeleteNotificationSubscriptionCommand = serializeAws_restJson1DeleteNotificationSubscriptionCommand;
const serializeAws_restJson1DeleteUserCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users/{UserId}";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
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
const serializeAws_restJson1DescribeActivitiesCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/activities";
    const query = {
        ...(input.StartTime !== undefined && { startTime: (input.StartTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.EndTime !== undefined && { endTime: (input.EndTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.OrganizationId !== undefined && { organizationId: input.OrganizationId }),
        ...(input.ActivityTypes !== undefined && { activityTypes: input.ActivityTypes }),
        ...(input.ResourceId !== undefined && { resourceId: input.ResourceId }),
        ...(input.UserId !== undefined && { userId: input.UserId }),
        ...(input.IncludeIndirectActivities !== undefined && {
            includeIndirectActivities: input.IncludeIndirectActivities.toString(),
        }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1DescribeActivitiesCommand = serializeAws_restJson1DescribeActivitiesCommand;
const serializeAws_restJson1DescribeCommentsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}/comments";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
    }
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1DescribeCommentsCommand = serializeAws_restJson1DescribeCommentsCommand;
const serializeAws_restJson1DescribeDocumentVersionsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    const query = {
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Include !== undefined && { include: input.Include }),
        ...(input.Fields !== undefined && { fields: input.Fields }),
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
exports.serializeAws_restJson1DescribeDocumentVersionsCommand = serializeAws_restJson1DescribeDocumentVersionsCommand;
const serializeAws_restJson1DescribeFolderContentsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}/contents";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
    }
    const query = {
        ...(input.Sort !== undefined && { sort: input.Sort }),
        ...(input.Order !== undefined && { order: input.Order }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.Type !== undefined && { type: input.Type }),
        ...(input.Include !== undefined && { include: input.Include }),
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
exports.serializeAws_restJson1DescribeFolderContentsCommand = serializeAws_restJson1DescribeFolderContentsCommand;
const serializeAws_restJson1DescribeGroupsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/groups";
    const query = {
        ...(input.SearchQuery !== undefined && { searchQuery: input.SearchQuery }),
        ...(input.OrganizationId !== undefined && { organizationId: input.OrganizationId }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
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
exports.serializeAws_restJson1DescribeGroupsCommand = serializeAws_restJson1DescribeGroupsCommand;
const serializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/api/v1/organizations/{OrganizationId}/subscriptions";
    if (input.OrganizationId !== undefined) {
        const labelValue = input.OrganizationId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: OrganizationId.");
        }
        resolvedPath = resolvedPath.replace("{OrganizationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: OrganizationId.");
    }
    const query = {
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
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
exports.serializeAws_restJson1DescribeNotificationSubscriptionsCommand = serializeAws_restJson1DescribeNotificationSubscriptionsCommand;
const serializeAws_restJson1DescribeResourcePermissionsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
    const query = {
        ...(input.PrincipalId !== undefined && { principalId: input.PrincipalId }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1DescribeResourcePermissionsCommand = serializeAws_restJson1DescribeResourcePermissionsCommand;
const serializeAws_restJson1DescribeRootFoldersCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/me/root";
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1DescribeRootFoldersCommand = serializeAws_restJson1DescribeRootFoldersCommand;
const serializeAws_restJson1DescribeUsersCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users";
    const query = {
        ...(input.OrganizationId !== undefined && { organizationId: input.OrganizationId }),
        ...(input.UserIds !== undefined && { userIds: input.UserIds }),
        ...(input.Query !== undefined && { query: input.Query }),
        ...(input.Include !== undefined && { include: input.Include }),
        ...(input.Order !== undefined && { order: input.Order }),
        ...(input.Sort !== undefined && { sort: input.Sort }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Fields !== undefined && { fields: input.Fields }),
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
exports.serializeAws_restJson1DescribeUsersCommand = serializeAws_restJson1DescribeUsersCommand;
const serializeAws_restJson1GetCurrentUserCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/me";
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
exports.serializeAws_restJson1GetCurrentUserCommand = serializeAws_restJson1GetCurrentUserCommand;
const serializeAws_restJson1GetDocumentCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    const query = {
        ...(input.IncludeCustomMetadata !== undefined && { includeCustomMetadata: input.IncludeCustomMetadata.toString() }),
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
exports.serializeAws_restJson1GetDocumentCommand = serializeAws_restJson1GetDocumentCommand;
const serializeAws_restJson1GetDocumentPathCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/path";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Fields !== undefined && { fields: input.Fields }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1GetDocumentPathCommand = serializeAws_restJson1GetDocumentPathCommand;
const serializeAws_restJson1GetDocumentVersionCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
    }
    const query = {
        ...(input.Fields !== undefined && { fields: input.Fields }),
        ...(input.IncludeCustomMetadata !== undefined && { includeCustomMetadata: input.IncludeCustomMetadata.toString() }),
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
exports.serializeAws_restJson1GetDocumentVersionCommand = serializeAws_restJson1GetDocumentVersionCommand;
const serializeAws_restJson1GetFolderCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
    }
    const query = {
        ...(input.IncludeCustomMetadata !== undefined && { includeCustomMetadata: input.IncludeCustomMetadata.toString() }),
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
exports.serializeAws_restJson1GetFolderCommand = serializeAws_restJson1GetFolderCommand;
const serializeAws_restJson1GetFolderPathCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}/path";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
    }
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Fields !== undefined && { fields: input.Fields }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1GetFolderPathCommand = serializeAws_restJson1GetFolderPathCommand;
const serializeAws_restJson1GetResourcesCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources";
    const query = {
        ...(input.UserId !== undefined && { userId: input.UserId }),
        ...(input.CollectionType !== undefined && { collectionType: input.CollectionType }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.Marker !== undefined && { marker: input.Marker }),
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
exports.serializeAws_restJson1GetResourcesCommand = serializeAws_restJson1GetResourcesCommand;
const serializeAws_restJson1InitiateDocumentVersionUploadCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents";
    let body;
    body = JSON.stringify({
        ...(input.ContentCreatedTimestamp !== undefined &&
            input.ContentCreatedTimestamp !== null && {
            ContentCreatedTimestamp: Math.round(input.ContentCreatedTimestamp.getTime() / 1000),
        }),
        ...(input.ContentModifiedTimestamp !== undefined &&
            input.ContentModifiedTimestamp !== null && {
            ContentModifiedTimestamp: Math.round(input.ContentModifiedTimestamp.getTime() / 1000),
        }),
        ...(input.ContentType !== undefined && input.ContentType !== null && { ContentType: input.ContentType }),
        ...(input.DocumentSizeInBytes !== undefined &&
            input.DocumentSizeInBytes !== null && { DocumentSizeInBytes: input.DocumentSizeInBytes }),
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentFolderId !== undefined &&
            input.ParentFolderId !== null && { ParentFolderId: input.ParentFolderId }),
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
exports.serializeAws_restJson1InitiateDocumentVersionUploadCommand = serializeAws_restJson1InitiateDocumentVersionUploadCommand;
const serializeAws_restJson1RemoveAllResourcePermissionsCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/permissions";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
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
exports.serializeAws_restJson1RemoveAllResourcePermissionsCommand = serializeAws_restJson1RemoveAllResourcePermissionsCommand;
const serializeAws_restJson1RemoveResourcePermissionCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}";
    if (input.ResourceId !== undefined) {
        const labelValue = input.ResourceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceId.");
        }
        resolvedPath = resolvedPath.replace("{ResourceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceId.");
    }
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
    const query = {
        ...(input.PrincipalType !== undefined && { type: input.PrincipalType }),
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
exports.serializeAws_restJson1RemoveResourcePermissionCommand = serializeAws_restJson1RemoveResourcePermissionCommand;
const serializeAws_restJson1UpdateDocumentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentFolderId !== undefined &&
            input.ParentFolderId !== null && { ParentFolderId: input.ParentFolderId }),
        ...(input.ResourceState !== undefined && input.ResourceState !== null && { ResourceState: input.ResourceState }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDocumentCommand = serializeAws_restJson1UpdateDocumentCommand;
const serializeAws_restJson1UpdateDocumentVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/documents/{DocumentId}/versions/{VersionId}";
    if (input.DocumentId !== undefined) {
        const labelValue = input.DocumentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DocumentId.");
        }
        resolvedPath = resolvedPath.replace("{DocumentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DocumentId.");
    }
    if (input.VersionId !== undefined) {
        const labelValue = input.VersionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VersionId.");
        }
        resolvedPath = resolvedPath.replace("{VersionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VersionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.VersionStatus !== undefined && input.VersionStatus !== null && { VersionStatus: input.VersionStatus }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateDocumentVersionCommand = serializeAws_restJson1UpdateDocumentVersionCommand;
const serializeAws_restJson1UpdateFolderCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/folders/{FolderId}";
    if (input.FolderId !== undefined) {
        const labelValue = input.FolderId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FolderId.");
        }
        resolvedPath = resolvedPath.replace("{FolderId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FolderId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.ParentFolderId !== undefined &&
            input.ParentFolderId !== null && { ParentFolderId: input.ParentFolderId }),
        ...(input.ResourceState !== undefined && input.ResourceState !== null && { ResourceState: input.ResourceState }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateFolderCommand = serializeAws_restJson1UpdateFolderCommand;
const serializeAws_restJson1UpdateUserCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.AuthenticationToken) && { authentication: input.AuthenticationToken }),
    };
    let resolvedPath = "/api/v1/users/{UserId}";
    if (input.UserId !== undefined) {
        const labelValue = input.UserId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: UserId.");
        }
        resolvedPath = resolvedPath.replace("{UserId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: UserId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.GivenName !== undefined && input.GivenName !== null && { GivenName: input.GivenName }),
        ...(input.GrantPoweruserPrivileges !== undefined &&
            input.GrantPoweruserPrivileges !== null && { GrantPoweruserPrivileges: input.GrantPoweruserPrivileges }),
        ...(input.Locale !== undefined && input.Locale !== null && { Locale: input.Locale }),
        ...(input.StorageRule !== undefined &&
            input.StorageRule !== null && { StorageRule: serializeAws_restJson1StorageRuleType(input.StorageRule, context) }),
        ...(input.Surname !== undefined && input.Surname !== null && { Surname: input.Surname }),
        ...(input.TimeZoneId !== undefined && input.TimeZoneId !== null && { TimeZoneId: input.TimeZoneId }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateUserCommand = serializeAws_restJson1UpdateUserCommand;
const deserializeAws_restJson1AbortDocumentVersionUploadCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AbortDocumentVersionUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AbortDocumentVersionUploadCommand = deserializeAws_restJson1AbortDocumentVersionUploadCommand;
const deserializeAws_restJson1AbortDocumentVersionUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ActivateUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ActivateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ActivateUserCommand = deserializeAws_restJson1ActivateUserCommand;
const deserializeAws_restJson1ActivateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AddResourcePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddResourcePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ShareResults: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ShareResults !== undefined && data.ShareResults !== null) {
        contents.ShareResults = deserializeAws_restJson1ShareResultsList(data.ShareResults, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddResourcePermissionsCommand = deserializeAws_restJson1AddResourcePermissionsCommand;
const deserializeAws_restJson1AddResourcePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateCommentCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Comment: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Comment !== undefined && data.Comment !== null) {
        contents.Comment = deserializeAws_restJson1Comment(data.Comment, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCommentCommand = deserializeAws_restJson1CreateCommentCommand;
const deserializeAws_restJson1CreateCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentLockedForCommentsException":
        case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
            response = {
                ...(await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidCommentOperationException":
        case "com.amazonaws.workdocs#InvalidCommentOperationException":
            response = {
                ...(await deserializeAws_restJson1InvalidCommentOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateCustomMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateCustomMetadataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateCustomMetadataCommand = deserializeAws_restJson1CreateCustomMetadataCommand;
const deserializeAws_restJson1CreateCustomMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CustomMetadataLimitExceededException":
        case "com.amazonaws.workdocs#CustomMetadataLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateFolderCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFolderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Metadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Metadata !== undefined && data.Metadata !== null) {
        contents.Metadata = deserializeAws_restJson1FolderMetadata(data.Metadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFolderCommand = deserializeAws_restJson1CreateFolderCommand;
const deserializeAws_restJson1CreateFolderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.workdocs#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workdocs#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateLabelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLabelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLabelsCommand = deserializeAws_restJson1CreateLabelsCommand;
const deserializeAws_restJson1CreateLabelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyLabelsException":
        case "com.amazonaws.workdocs#TooManyLabelsException":
            response = {
                ...(await deserializeAws_restJson1TooManyLabelsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateNotificationSubscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateNotificationSubscriptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Subscription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Subscription !== undefined && data.Subscription !== null) {
        contents.Subscription = deserializeAws_restJson1Subscription(data.Subscription, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateNotificationSubscriptionCommand = deserializeAws_restJson1CreateNotificationSubscriptionCommand;
const deserializeAws_restJson1CreateNotificationSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManySubscriptionsException":
        case "com.amazonaws.workdocs#TooManySubscriptionsException":
            response = {
                ...(await deserializeAws_restJson1TooManySubscriptionsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateUserCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateUserCommand = deserializeAws_restJson1CreateUserCommand;
const deserializeAws_restJson1CreateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityAlreadyExistsException":
        case "com.amazonaws.workdocs#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeactivateUserCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeactivateUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeactivateUserCommand = deserializeAws_restJson1DeactivateUserCommand;
const deserializeAws_restJson1DeactivateUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteCommentCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCommentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCommentCommand = deserializeAws_restJson1DeleteCommentCommand;
const deserializeAws_restJson1DeleteCommentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DocumentLockedForCommentsException":
        case "com.amazonaws.workdocs#DocumentLockedForCommentsException":
            response = {
                ...(await deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteCustomMetadataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCustomMetadataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCustomMetadataCommand = deserializeAws_restJson1DeleteCustomMetadataCommand;
const deserializeAws_restJson1DeleteCustomMetadataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteDocumentCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDocumentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDocumentCommand = deserializeAws_restJson1DeleteDocumentCommand;
const deserializeAws_restJson1DeleteDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.workdocs#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteFolderCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFolderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFolderCommand = deserializeAws_restJson1DeleteFolderCommand;
const deserializeAws_restJson1DeleteFolderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.workdocs#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteFolderContentsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFolderContentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFolderContentsCommand = deserializeAws_restJson1DeleteFolderContentsCommand;
const deserializeAws_restJson1DeleteFolderContentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteLabelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLabelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLabelsCommand = deserializeAws_restJson1DeleteLabelsCommand;
const deserializeAws_restJson1DeleteLabelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteNotificationSubscriptionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteNotificationSubscriptionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteNotificationSubscriptionCommand = deserializeAws_restJson1DeleteNotificationSubscriptionCommand;
const deserializeAws_restJson1DeleteNotificationSubscriptionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
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
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeActivitiesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeActivitiesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        UserActivities: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.UserActivities !== undefined && data.UserActivities !== null) {
        contents.UserActivities = deserializeAws_restJson1UserActivities(data.UserActivities, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeActivitiesCommand = deserializeAws_restJson1DescribeActivitiesCommand;
const deserializeAws_restJson1DescribeActivitiesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeCommentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeCommentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Comments: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Comments !== undefined && data.Comments !== null) {
        contents.Comments = deserializeAws_restJson1CommentList(data.Comments, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeCommentsCommand = deserializeAws_restJson1DescribeCommentsCommand;
const deserializeAws_restJson1DescribeCommentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeDocumentVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDocumentVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DocumentVersions: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DocumentVersions !== undefined && data.DocumentVersions !== null) {
        contents.DocumentVersions = deserializeAws_restJson1DocumentVersionMetadataList(data.DocumentVersions, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDocumentVersionsCommand = deserializeAws_restJson1DescribeDocumentVersionsCommand;
const deserializeAws_restJson1DescribeDocumentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeFolderContentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFolderContentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Documents: undefined,
        Folders: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Documents !== undefined && data.Documents !== null) {
        contents.Documents = deserializeAws_restJson1DocumentMetadataList(data.Documents, context);
    }
    if (data.Folders !== undefined && data.Folders !== null) {
        contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFolderContentsCommand = deserializeAws_restJson1DescribeFolderContentsCommand;
const deserializeAws_restJson1DescribeFolderContentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Groups: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Groups !== undefined && data.Groups !== null) {
        contents.Groups = deserializeAws_restJson1GroupMetadataList(data.Groups, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeGroupsCommand = deserializeAws_restJson1DescribeGroupsCommand;
const deserializeAws_restJson1DescribeGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeNotificationSubscriptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        Subscriptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.Subscriptions !== undefined && data.Subscriptions !== null) {
        contents.Subscriptions = deserializeAws_restJson1SubscriptionList(data.Subscriptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeNotificationSubscriptionsCommand = deserializeAws_restJson1DescribeNotificationSubscriptionsCommand;
const deserializeAws_restJson1DescribeNotificationSubscriptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeResourcePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeResourcePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        Principals: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.Principals !== undefined && data.Principals !== null) {
        contents.Principals = deserializeAws_restJson1PrincipalList(data.Principals, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeResourcePermissionsCommand = deserializeAws_restJson1DescribeResourcePermissionsCommand;
const deserializeAws_restJson1DescribeResourcePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeRootFoldersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRootFoldersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Folders: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Folders !== undefined && data.Folders !== null) {
        contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRootFoldersCommand = deserializeAws_restJson1DescribeRootFoldersCommand;
const deserializeAws_restJson1DescribeRootFoldersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeUsersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUsersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        TotalNumberOfUsers: undefined,
        Users: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.TotalNumberOfUsers !== undefined && data.TotalNumberOfUsers !== null) {
        contents.TotalNumberOfUsers = data.TotalNumberOfUsers;
    }
    if (data.Users !== undefined && data.Users !== null) {
        contents.Users = deserializeAws_restJson1OrganizationUserList(data.Users, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUsersCommand = deserializeAws_restJson1DescribeUsersCommand;
const deserializeAws_restJson1DescribeUsersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestedEntityTooLargeException":
        case "com.amazonaws.workdocs#RequestedEntityTooLargeException":
            response = {
                ...(await deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetCurrentUserCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCurrentUserCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCurrentUserCommand = deserializeAws_restJson1GetCurrentUserCommand;
const deserializeAws_restJson1GetCurrentUserCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDocumentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDocumentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomMetadata: undefined,
        Metadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
        contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
    }
    if (data.Metadata !== undefined && data.Metadata !== null) {
        contents.Metadata = deserializeAws_restJson1DocumentMetadata(data.Metadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentCommand = deserializeAws_restJson1GetDocumentCommand;
const deserializeAws_restJson1GetDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workdocs#InvalidPasswordException":
            response = {
                ...(await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDocumentPathCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDocumentPathCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Path: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Path !== undefined && data.Path !== null) {
        contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentPathCommand = deserializeAws_restJson1GetDocumentPathCommand;
const deserializeAws_restJson1GetDocumentPathCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetDocumentVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDocumentVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomMetadata: undefined,
        Metadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
        contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
    }
    if (data.Metadata !== undefined && data.Metadata !== null) {
        contents.Metadata = deserializeAws_restJson1DocumentVersionMetadata(data.Metadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDocumentVersionCommand = deserializeAws_restJson1GetDocumentVersionCommand;
const deserializeAws_restJson1GetDocumentVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPasswordException":
        case "com.amazonaws.workdocs#InvalidPasswordException":
            response = {
                ...(await deserializeAws_restJson1InvalidPasswordExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetFolderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFolderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CustomMetadata: undefined,
        Metadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CustomMetadata !== undefined && data.CustomMetadata !== null) {
        contents.CustomMetadata = deserializeAws_restJson1CustomMetadataMap(data.CustomMetadata, context);
    }
    if (data.Metadata !== undefined && data.Metadata !== null) {
        contents.Metadata = deserializeAws_restJson1FolderMetadata(data.Metadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFolderCommand = deserializeAws_restJson1GetFolderCommand;
const deserializeAws_restJson1GetFolderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetFolderPathCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetFolderPathCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Path: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Path !== undefined && data.Path !== null) {
        contents.Path = deserializeAws_restJson1ResourcePath(data.Path, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFolderPathCommand = deserializeAws_restJson1GetFolderPathCommand;
const deserializeAws_restJson1GetFolderPathCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetResourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Documents: undefined,
        Folders: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Documents !== undefined && data.Documents !== null) {
        contents.Documents = deserializeAws_restJson1DocumentMetadataList(data.Documents, context);
    }
    if (data.Folders !== undefined && data.Folders !== null) {
        contents.Folders = deserializeAws_restJson1FolderMetadataList(data.Folders, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourcesCommand = deserializeAws_restJson1GetResourcesCommand;
const deserializeAws_restJson1GetResourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1InitiateDocumentVersionUploadCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitiateDocumentVersionUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Metadata: undefined,
        UploadMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Metadata !== undefined && data.Metadata !== null) {
        contents.Metadata = deserializeAws_restJson1DocumentMetadata(data.Metadata, context);
    }
    if (data.UploadMetadata !== undefined && data.UploadMetadata !== null) {
        contents.UploadMetadata = deserializeAws_restJson1UploadMetadata(data.UploadMetadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitiateDocumentVersionUploadCommand = deserializeAws_restJson1InitiateDocumentVersionUploadCommand;
const deserializeAws_restJson1InitiateDocumentVersionUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DraftUploadOutOfSyncException":
        case "com.amazonaws.workdocs#DraftUploadOutOfSyncException":
            response = {
                ...(await deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.workdocs#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyCheckedOutException":
        case "com.amazonaws.workdocs#ResourceAlreadyCheckedOutException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageLimitExceededException":
        case "com.amazonaws.workdocs#StorageLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1StorageLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "StorageLimitWillExceedException":
        case "com.amazonaws.workdocs#StorageLimitWillExceedException":
            response = {
                ...(await deserializeAws_restJson1StorageLimitWillExceedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RemoveAllResourcePermissionsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveAllResourcePermissionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveAllResourcePermissionsCommand = deserializeAws_restJson1RemoveAllResourcePermissionsCommand;
const deserializeAws_restJson1RemoveAllResourcePermissionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RemoveResourcePermissionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveResourcePermissionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveResourcePermissionCommand = deserializeAws_restJson1RemoveResourcePermissionCommand;
const deserializeAws_restJson1RemoveResourcePermissionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateDocumentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDocumentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDocumentCommand = deserializeAws_restJson1UpdateDocumentCommand;
const deserializeAws_restJson1UpdateDocumentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.workdocs#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.workdocs#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workdocs#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateDocumentVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDocumentVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDocumentVersionCommand = deserializeAws_restJson1UpdateDocumentVersionCommand;
const deserializeAws_restJson1UpdateDocumentVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.workdocs#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidOperationException":
        case "com.amazonaws.workdocs#InvalidOperationException":
            response = {
                ...(await deserializeAws_restJson1InvalidOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateFolderCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFolderCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFolderCommand = deserializeAws_restJson1UpdateFolderCommand;
const deserializeAws_restJson1UpdateFolderCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.workdocs#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictingOperationException":
        case "com.amazonaws.workdocs#ConflictingOperationException":
            response = {
                ...(await deserializeAws_restJson1ConflictingOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityAlreadyExistsException":
        case "com.amazonaws.workdocs#EntityAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.workdocs#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ProhibitedStateException":
        case "com.amazonaws.workdocs#ProhibitedStateException":
            response = {
                ...(await deserializeAws_restJson1ProhibitedStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        User: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.User !== undefined && data.User !== null) {
        contents.User = deserializeAws_restJson1User(data.User, context);
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
        case "DeactivatingLastSystemUserException":
        case "com.amazonaws.workdocs#DeactivatingLastSystemUserException":
            response = {
                ...(await deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "EntityNotExistsException":
        case "com.amazonaws.workdocs#EntityNotExistsException":
            response = {
                ...(await deserializeAws_restJson1EntityNotExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FailedDependencyException":
        case "com.amazonaws.workdocs#FailedDependencyException":
            response = {
                ...(await deserializeAws_restJson1FailedDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IllegalUserStateException":
        case "com.amazonaws.workdocs#IllegalUserStateException":
            response = {
                ...(await deserializeAws_restJson1IllegalUserStateExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidArgumentException":
        case "com.amazonaws.workdocs#InvalidArgumentException":
            response = {
                ...(await deserializeAws_restJson1InvalidArgumentExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.workdocs#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedOperationException":
        case "com.amazonaws.workdocs#UnauthorizedOperationException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedOperationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedResourceAccessException":
        case "com.amazonaws.workdocs#UnauthorizedResourceAccessException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentModificationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictingOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictingOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1CustomMetadataLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CustomMetadataLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1DeactivatingLastSystemUserExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DeactivatingLastSystemUserException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1DocumentLockedForCommentsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DocumentLockedForCommentsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1DraftUploadOutOfSyncExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DraftUploadOutOfSyncException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1EntityAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EntityAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1EntityNotExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "EntityNotExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        EntityIds: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.EntityIds !== undefined && data.EntityIds !== null) {
        contents.EntityIds = deserializeAws_restJson1EntityIdList(data.EntityIds, context);
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1FailedDependencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FailedDependencyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1IllegalUserStateExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IllegalUserStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidArgumentExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidArgumentException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidCommentOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidCommentOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidPasswordExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPasswordException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ProhibitedStateExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ProhibitedStateException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1RequestedEntityTooLargeExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestedEntityTooLargeException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceAlreadyCheckedOutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyCheckedOutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1StorageLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "StorageLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1StorageLimitWillExceedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "StorageLimitWillExceedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyLabelsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyLabelsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManySubscriptionsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManySubscriptionsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1UnauthorizedOperationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedOperationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1UnauthorizedResourceAccessExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedResourceAccessException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1CustomMetadataMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const serializeAws_restJson1NotificationOptions = (input, context) => {
    return {
        ...(input.EmailMessage !== undefined && input.EmailMessage !== null && { EmailMessage: input.EmailMessage }),
        ...(input.SendEmail !== undefined && input.SendEmail !== null && { SendEmail: input.SendEmail }),
    };
};
const serializeAws_restJson1SharedLabels = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SharePrincipal = (input, context) => {
    return {
        ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
        ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1SharePrincipalList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SharePrincipal(entry, context);
    });
};
const serializeAws_restJson1StorageRuleType = (input, context) => {
    return {
        ...(input.StorageAllocatedInBytes !== undefined &&
            input.StorageAllocatedInBytes !== null && { StorageAllocatedInBytes: input.StorageAllocatedInBytes }),
        ...(input.StorageType !== undefined && input.StorageType !== null && { StorageType: input.StorageType }),
    };
};
const deserializeAws_restJson1Activity = (output, context) => {
    return {
        CommentMetadata: output.CommentMetadata !== undefined && output.CommentMetadata !== null
            ? deserializeAws_restJson1CommentMetadata(output.CommentMetadata, context)
            : undefined,
        Initiator: output.Initiator !== undefined && output.Initiator !== null
            ? deserializeAws_restJson1UserMetadata(output.Initiator, context)
            : undefined,
        IsIndirectActivity: output.IsIndirectActivity !== undefined && output.IsIndirectActivity !== null
            ? output.IsIndirectActivity
            : undefined,
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
        OriginalParent: output.OriginalParent !== undefined && output.OriginalParent !== null
            ? deserializeAws_restJson1ResourceMetadata(output.OriginalParent, context)
            : undefined,
        Participants: output.Participants !== undefined && output.Participants !== null
            ? deserializeAws_restJson1Participants(output.Participants, context)
            : undefined,
        ResourceMetadata: output.ResourceMetadata !== undefined && output.ResourceMetadata !== null
            ? deserializeAws_restJson1ResourceMetadata(output.ResourceMetadata, context)
            : undefined,
        TimeStamp: output.TimeStamp !== undefined && output.TimeStamp !== null
            ? new Date(Math.round(output.TimeStamp * 1000))
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1Comment = (output, context) => {
    return {
        CommentId: output.CommentId !== undefined && output.CommentId !== null ? output.CommentId : undefined,
        Contributor: output.Contributor !== undefined && output.Contributor !== null
            ? deserializeAws_restJson1User(output.Contributor, context)
            : undefined,
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        ParentId: output.ParentId !== undefined && output.ParentId !== null ? output.ParentId : undefined,
        RecipientId: output.RecipientId !== undefined && output.RecipientId !== null ? output.RecipientId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Text: output.Text !== undefined && output.Text !== null ? output.Text : undefined,
        ThreadId: output.ThreadId !== undefined && output.ThreadId !== null ? output.ThreadId : undefined,
        Visibility: output.Visibility !== undefined && output.Visibility !== null ? output.Visibility : undefined,
    };
};
const deserializeAws_restJson1CommentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Comment(entry, context);
    });
};
const deserializeAws_restJson1CommentMetadata = (output, context) => {
    return {
        CommentId: output.CommentId !== undefined && output.CommentId !== null ? output.CommentId : undefined,
        CommentStatus: output.CommentStatus !== undefined && output.CommentStatus !== null ? output.CommentStatus : undefined,
        Contributor: output.Contributor !== undefined && output.Contributor !== null
            ? deserializeAws_restJson1User(output.Contributor, context)
            : undefined,
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        RecipientId: output.RecipientId !== undefined && output.RecipientId !== null ? output.RecipientId : undefined,
    };
};
const deserializeAws_restJson1CustomMetadataMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1DocumentMetadata = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        CreatorId: output.CreatorId !== undefined && output.CreatorId !== null ? output.CreatorId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Labels: output.Labels !== undefined && output.Labels !== null
            ? deserializeAws_restJson1SharedLabels(output.Labels, context)
            : undefined,
        LatestVersionMetadata: output.LatestVersionMetadata !== undefined && output.LatestVersionMetadata !== null
            ? deserializeAws_restJson1DocumentVersionMetadata(output.LatestVersionMetadata, context)
            : undefined,
        ModifiedTimestamp: output.ModifiedTimestamp !== undefined && output.ModifiedTimestamp !== null
            ? new Date(Math.round(output.ModifiedTimestamp * 1000))
            : undefined,
        ParentFolderId: output.ParentFolderId !== undefined && output.ParentFolderId !== null ? output.ParentFolderId : undefined,
        ResourceState: output.ResourceState !== undefined && output.ResourceState !== null ? output.ResourceState : undefined,
    };
};
const deserializeAws_restJson1DocumentMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DocumentMetadata(entry, context);
    });
};
const deserializeAws_restJson1DocumentSourceUrlMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1DocumentThumbnailUrlMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1DocumentVersionMetadata = (output, context) => {
    return {
        ContentCreatedTimestamp: output.ContentCreatedTimestamp !== undefined && output.ContentCreatedTimestamp !== null
            ? new Date(Math.round(output.ContentCreatedTimestamp * 1000))
            : undefined,
        ContentModifiedTimestamp: output.ContentModifiedTimestamp !== undefined && output.ContentModifiedTimestamp !== null
            ? new Date(Math.round(output.ContentModifiedTimestamp * 1000))
            : undefined,
        ContentType: output.ContentType !== undefined && output.ContentType !== null ? output.ContentType : undefined,
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        CreatorId: output.CreatorId !== undefined && output.CreatorId !== null ? output.CreatorId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        ModifiedTimestamp: output.ModifiedTimestamp !== undefined && output.ModifiedTimestamp !== null
            ? new Date(Math.round(output.ModifiedTimestamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Signature: output.Signature !== undefined && output.Signature !== null ? output.Signature : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_restJson1DocumentSourceUrlMap(output.Source, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Thumbnail: output.Thumbnail !== undefined && output.Thumbnail !== null
            ? deserializeAws_restJson1DocumentThumbnailUrlMap(output.Thumbnail, context)
            : undefined,
    };
};
const deserializeAws_restJson1DocumentVersionMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DocumentVersionMetadata(entry, context);
    });
};
const deserializeAws_restJson1EntityIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1FolderMetadata = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        CreatorId: output.CreatorId !== undefined && output.CreatorId !== null ? output.CreatorId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Labels: output.Labels !== undefined && output.Labels !== null
            ? deserializeAws_restJson1SharedLabels(output.Labels, context)
            : undefined,
        LatestVersionSize: output.LatestVersionSize !== undefined && output.LatestVersionSize !== null
            ? output.LatestVersionSize
            : undefined,
        ModifiedTimestamp: output.ModifiedTimestamp !== undefined && output.ModifiedTimestamp !== null
            ? new Date(Math.round(output.ModifiedTimestamp * 1000))
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        ParentFolderId: output.ParentFolderId !== undefined && output.ParentFolderId !== null ? output.ParentFolderId : undefined,
        ResourceState: output.ResourceState !== undefined && output.ResourceState !== null ? output.ResourceState : undefined,
        Signature: output.Signature !== undefined && output.Signature !== null ? output.Signature : undefined,
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
    };
};
const deserializeAws_restJson1FolderMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FolderMetadata(entry, context);
    });
};
const deserializeAws_restJson1GroupMetadata = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1GroupMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroupMetadata(entry, context);
    });
};
const deserializeAws_restJson1OrganizationUserList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1User(entry, context);
    });
};
const deserializeAws_restJson1Participants = (output, context) => {
    return {
        Groups: output.Groups !== undefined && output.Groups !== null
            ? deserializeAws_restJson1GroupMetadataList(output.Groups, context)
            : undefined,
        Users: output.Users !== undefined && output.Users !== null
            ? deserializeAws_restJson1UserMetadataList(output.Users, context)
            : undefined,
    };
};
const deserializeAws_restJson1PermissionInfo = (output, context) => {
    return {
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1PermissionInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PermissionInfo(entry, context);
    });
};
const deserializeAws_restJson1Principal = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Roles: output.Roles !== undefined && output.Roles !== null
            ? deserializeAws_restJson1PermissionInfoList(output.Roles, context)
            : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
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
const deserializeAws_restJson1ResourceMetadata = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OriginalName: output.OriginalName !== undefined && output.OriginalName !== null ? output.OriginalName : undefined,
        Owner: output.Owner !== undefined && output.Owner !== null
            ? deserializeAws_restJson1UserMetadata(output.Owner, context)
            : undefined,
        ParentId: output.ParentId !== undefined && output.ParentId !== null ? output.ParentId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        VersionId: output.VersionId !== undefined && output.VersionId !== null ? output.VersionId : undefined,
    };
};
const deserializeAws_restJson1ResourcePath = (output, context) => {
    return {
        Components: output.Components !== undefined && output.Components !== null
            ? deserializeAws_restJson1ResourcePathComponentList(output.Components, context)
            : undefined,
    };
};
const deserializeAws_restJson1ResourcePathComponent = (output, context) => {
    return {
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
    };
};
const deserializeAws_restJson1ResourcePathComponentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResourcePathComponent(entry, context);
    });
};
const deserializeAws_restJson1SharedLabels = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ShareResult = (output, context) => {
    return {
        InviteePrincipalId: output.InviteePrincipalId !== undefined && output.InviteePrincipalId !== null
            ? output.InviteePrincipalId
            : undefined,
        PrincipalId: output.PrincipalId !== undefined && output.PrincipalId !== null ? output.PrincipalId : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        ShareId: output.ShareId !== undefined && output.ShareId !== null ? output.ShareId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_restJson1ShareResultsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ShareResult(entry, context);
    });
};
const deserializeAws_restJson1SignedHeaderMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: value,
        };
    }, {});
};
const deserializeAws_restJson1StorageRuleType = (output, context) => {
    return {
        StorageAllocatedInBytes: output.StorageAllocatedInBytes !== undefined && output.StorageAllocatedInBytes !== null
            ? output.StorageAllocatedInBytes
            : undefined,
        StorageType: output.StorageType !== undefined && output.StorageType !== null ? output.StorageType : undefined,
    };
};
const deserializeAws_restJson1Subscription = (output, context) => {
    return {
        EndPoint: output.EndPoint !== undefined && output.EndPoint !== null ? output.EndPoint : undefined,
        Protocol: output.Protocol !== undefined && output.Protocol !== null ? output.Protocol : undefined,
        SubscriptionId: output.SubscriptionId !== undefined && output.SubscriptionId !== null ? output.SubscriptionId : undefined,
    };
};
const deserializeAws_restJson1SubscriptionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Subscription(entry, context);
    });
};
const deserializeAws_restJson1UploadMetadata = (output, context) => {
    return {
        SignedHeaders: output.SignedHeaders !== undefined && output.SignedHeaders !== null
            ? deserializeAws_restJson1SignedHeaderMap(output.SignedHeaders, context)
            : undefined,
        UploadUrl: output.UploadUrl !== undefined && output.UploadUrl !== null ? output.UploadUrl : undefined,
    };
};
const deserializeAws_restJson1User = (output, context) => {
    return {
        CreatedTimestamp: output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
            ? new Date(Math.round(output.CreatedTimestamp * 1000))
            : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        GivenName: output.GivenName !== undefined && output.GivenName !== null ? output.GivenName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Locale: output.Locale !== undefined && output.Locale !== null ? output.Locale : undefined,
        ModifiedTimestamp: output.ModifiedTimestamp !== undefined && output.ModifiedTimestamp !== null
            ? new Date(Math.round(output.ModifiedTimestamp * 1000))
            : undefined,
        OrganizationId: output.OrganizationId !== undefined && output.OrganizationId !== null ? output.OrganizationId : undefined,
        RecycleBinFolderId: output.RecycleBinFolderId !== undefined && output.RecycleBinFolderId !== null
            ? output.RecycleBinFolderId
            : undefined,
        RootFolderId: output.RootFolderId !== undefined && output.RootFolderId !== null ? output.RootFolderId : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Storage: output.Storage !== undefined && output.Storage !== null
            ? deserializeAws_restJson1UserStorageMetadata(output.Storage, context)
            : undefined,
        Surname: output.Surname !== undefined && output.Surname !== null ? output.Surname : undefined,
        TimeZoneId: output.TimeZoneId !== undefined && output.TimeZoneId !== null ? output.TimeZoneId : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_restJson1UserActivities = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Activity(entry, context);
    });
};
const deserializeAws_restJson1UserMetadata = (output, context) => {
    return {
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        GivenName: output.GivenName !== undefined && output.GivenName !== null ? output.GivenName : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Surname: output.Surname !== undefined && output.Surname !== null ? output.Surname : undefined,
        Username: output.Username !== undefined && output.Username !== null ? output.Username : undefined,
    };
};
const deserializeAws_restJson1UserMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UserMetadata(entry, context);
    });
};
const deserializeAws_restJson1UserStorageMetadata = (output, context) => {
    return {
        StorageRule: output.StorageRule !== undefined && output.StorageRule !== null
            ? deserializeAws_restJson1StorageRuleType(output.StorageRule, context)
            : undefined,
        StorageUtilizedInBytes: output.StorageUtilizedInBytes !== undefined && output.StorageUtilizedInBytes !== null
            ? output.StorageUtilizedInBytes
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