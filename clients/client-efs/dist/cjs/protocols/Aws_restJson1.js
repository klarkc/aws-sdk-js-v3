"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1PutFileSystemPolicyCommand = exports.deserializeAws_restJson1PutBackupPolicyCommand = exports.deserializeAws_restJson1PutAccountPreferencesCommand = exports.deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1DescribeTagsCommand = exports.deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = exports.deserializeAws_restJson1DescribeMountTargetsCommand = exports.deserializeAws_restJson1DescribeLifecycleConfigurationCommand = exports.deserializeAws_restJson1DescribeFileSystemsCommand = exports.deserializeAws_restJson1DescribeFileSystemPolicyCommand = exports.deserializeAws_restJson1DescribeBackupPolicyCommand = exports.deserializeAws_restJson1DescribeAccountPreferencesCommand = exports.deserializeAws_restJson1DescribeAccessPointsCommand = exports.deserializeAws_restJson1DeleteTagsCommand = exports.deserializeAws_restJson1DeleteMountTargetCommand = exports.deserializeAws_restJson1DeleteFileSystemPolicyCommand = exports.deserializeAws_restJson1DeleteFileSystemCommand = exports.deserializeAws_restJson1DeleteAccessPointCommand = exports.deserializeAws_restJson1CreateTagsCommand = exports.deserializeAws_restJson1CreateMountTargetCommand = exports.deserializeAws_restJson1CreateFileSystemCommand = exports.deserializeAws_restJson1CreateAccessPointCommand = exports.serializeAws_restJson1UpdateFileSystemCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1PutLifecycleConfigurationCommand = exports.serializeAws_restJson1PutFileSystemPolicyCommand = exports.serializeAws_restJson1PutBackupPolicyCommand = exports.serializeAws_restJson1PutAccountPreferencesCommand = exports.serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1DescribeTagsCommand = exports.serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = exports.serializeAws_restJson1DescribeMountTargetsCommand = exports.serializeAws_restJson1DescribeLifecycleConfigurationCommand = exports.serializeAws_restJson1DescribeFileSystemsCommand = exports.serializeAws_restJson1DescribeFileSystemPolicyCommand = exports.serializeAws_restJson1DescribeBackupPolicyCommand = exports.serializeAws_restJson1DescribeAccountPreferencesCommand = exports.serializeAws_restJson1DescribeAccessPointsCommand = exports.serializeAws_restJson1DeleteTagsCommand = exports.serializeAws_restJson1DeleteMountTargetCommand = exports.serializeAws_restJson1DeleteFileSystemPolicyCommand = exports.serializeAws_restJson1DeleteFileSystemCommand = exports.serializeAws_restJson1DeleteAccessPointCommand = exports.serializeAws_restJson1CreateTagsCommand = exports.serializeAws_restJson1CreateMountTargetCommand = exports.serializeAws_restJson1CreateFileSystemCommand = exports.serializeAws_restJson1CreateAccessPointCommand = void 0;
exports.deserializeAws_restJson1UpdateFileSystemCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1PutLifecycleConfigurationCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateAccessPointCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/access-points";
    let body;
    body = JSON.stringify({
        ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.PosixUser !== undefined &&
            input.PosixUser !== null && { PosixUser: serializeAws_restJson1PosixUser(input.PosixUser, context) }),
        ...(input.RootDirectory !== undefined &&
            input.RootDirectory !== null && {
            RootDirectory: serializeAws_restJson1RootDirectory(input.RootDirectory, context),
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateAccessPointCommand = serializeAws_restJson1CreateAccessPointCommand;
const serializeAws_restJson1CreateFileSystemCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/file-systems";
    let body;
    body = JSON.stringify({
        ...(input.AvailabilityZoneName !== undefined &&
            input.AvailabilityZoneName !== null && { AvailabilityZoneName: input.AvailabilityZoneName }),
        ...(input.Backup !== undefined && input.Backup !== null && { Backup: input.Backup }),
        CreationToken: (_a = input.CreationToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Encrypted !== undefined && input.Encrypted !== null && { Encrypted: input.Encrypted }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.PerformanceMode !== undefined &&
            input.PerformanceMode !== null && { PerformanceMode: input.PerformanceMode }),
        ...(input.ProvisionedThroughputInMibps !== undefined &&
            input.ProvisionedThroughputInMibps !== null && {
            ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps,
        }),
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
        ...(input.ThroughputMode !== undefined &&
            input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode }),
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
exports.serializeAws_restJson1CreateFileSystemCommand = serializeAws_restJson1CreateFileSystemCommand;
const serializeAws_restJson1CreateMountTargetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/mount-targets";
    let body;
    body = JSON.stringify({
        ...(input.FileSystemId !== undefined && input.FileSystemId !== null && { FileSystemId: input.FileSystemId }),
        ...(input.IpAddress !== undefined && input.IpAddress !== null && { IpAddress: input.IpAddress }),
        ...(input.SecurityGroups !== undefined &&
            input.SecurityGroups !== null && {
            SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
        }),
        ...(input.SubnetId !== undefined && input.SubnetId !== null && { SubnetId: input.SubnetId }),
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
exports.serializeAws_restJson1CreateMountTargetCommand = serializeAws_restJson1CreateMountTargetCommand;
const serializeAws_restJson1CreateTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/create-tags/{FileSystemId}";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateTagsCommand = serializeAws_restJson1CreateTagsCommand;
const serializeAws_restJson1DeleteAccessPointCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/access-points/{AccessPointId}";
    if (input.AccessPointId !== undefined) {
        const labelValue = input.AccessPointId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AccessPointId.");
        }
        resolvedPath = resolvedPath.replace("{AccessPointId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AccessPointId.");
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
exports.serializeAws_restJson1DeleteAccessPointCommand = serializeAws_restJson1DeleteAccessPointCommand;
const serializeAws_restJson1DeleteFileSystemCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
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
exports.serializeAws_restJson1DeleteFileSystemCommand = serializeAws_restJson1DeleteFileSystemCommand;
const serializeAws_restJson1DeleteFileSystemPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
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
exports.serializeAws_restJson1DeleteFileSystemPolicyCommand = serializeAws_restJson1DeleteFileSystemPolicyCommand;
const serializeAws_restJson1DeleteMountTargetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}";
    if (input.MountTargetId !== undefined) {
        const labelValue = input.MountTargetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MountTargetId.");
        }
        resolvedPath = resolvedPath.replace("{MountTargetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MountTargetId.");
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
exports.serializeAws_restJson1DeleteMountTargetCommand = serializeAws_restJson1DeleteMountTargetCommand;
const serializeAws_restJson1DeleteTagsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/delete-tags/{FileSystemId}";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeys(input.TagKeys, context) }),
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
exports.serializeAws_restJson1DeleteTagsCommand = serializeAws_restJson1DeleteTagsCommand;
const serializeAws_restJson1DescribeAccessPointsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/access-points";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
        ...(input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId }),
        ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
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
exports.serializeAws_restJson1DescribeAccessPointsCommand = serializeAws_restJson1DescribeAccessPointsCommand;
const serializeAws_restJson1DescribeAccountPreferencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/account-preferences";
    let body;
    body = JSON.stringify({
        ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
        ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    });
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
exports.serializeAws_restJson1DescribeAccountPreferencesCommand = serializeAws_restJson1DescribeAccountPreferencesCommand;
const serializeAws_restJson1DescribeBackupPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
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
exports.serializeAws_restJson1DescribeBackupPolicyCommand = serializeAws_restJson1DescribeBackupPolicyCommand;
const serializeAws_restJson1DescribeFileSystemPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
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
exports.serializeAws_restJson1DescribeFileSystemPolicyCommand = serializeAws_restJson1DescribeFileSystemPolicyCommand;
const serializeAws_restJson1DescribeFileSystemsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems";
    const query = {
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.CreationToken !== undefined && { CreationToken: input.CreationToken }),
        ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
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
exports.serializeAws_restJson1DescribeFileSystemsCommand = serializeAws_restJson1DescribeFileSystemsCommand;
const serializeAws_restJson1DescribeLifecycleConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
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
exports.serializeAws_restJson1DescribeLifecycleConfigurationCommand = serializeAws_restJson1DescribeLifecycleConfigurationCommand;
const serializeAws_restJson1DescribeMountTargetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/mount-targets";
    const query = {
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
        ...(input.FileSystemId !== undefined && { FileSystemId: input.FileSystemId }),
        ...(input.MountTargetId !== undefined && { MountTargetId: input.MountTargetId }),
        ...(input.AccessPointId !== undefined && { AccessPointId: input.AccessPointId }),
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
exports.serializeAws_restJson1DescribeMountTargetsCommand = serializeAws_restJson1DescribeMountTargetsCommand;
const serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
    if (input.MountTargetId !== undefined) {
        const labelValue = input.MountTargetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MountTargetId.");
        }
        resolvedPath = resolvedPath.replace("{MountTargetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MountTargetId.");
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
exports.serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = serializeAws_restJson1DescribeMountTargetSecurityGroupsCommand;
const serializeAws_restJson1DescribeTagsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/tags/{FileSystemId}";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    const query = {
        ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }),
        ...(input.Marker !== undefined && { Marker: input.Marker }),
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
exports.serializeAws_restJson1DescribeTagsCommand = serializeAws_restJson1DescribeTagsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
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
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/mount-targets/{MountTargetId}/security-groups";
    if (input.MountTargetId !== undefined) {
        const labelValue = input.MountTargetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: MountTargetId.");
        }
        resolvedPath = resolvedPath.replace("{MountTargetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: MountTargetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.SecurityGroups !== undefined &&
            input.SecurityGroups !== null && {
            SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
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
exports.serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = serializeAws_restJson1ModifyMountTargetSecurityGroupsCommand;
const serializeAws_restJson1PutAccountPreferencesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/account-preferences";
    let body;
    body = JSON.stringify({
        ...(input.ResourceIdType !== undefined &&
            input.ResourceIdType !== null && { ResourceIdType: input.ResourceIdType }),
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
exports.serializeAws_restJson1PutAccountPreferencesCommand = serializeAws_restJson1PutAccountPreferencesCommand;
const serializeAws_restJson1PutBackupPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/backup-policy";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BackupPolicy !== undefined &&
            input.BackupPolicy !== null && { BackupPolicy: serializeAws_restJson1BackupPolicy(input.BackupPolicy, context) }),
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
exports.serializeAws_restJson1PutBackupPolicyCommand = serializeAws_restJson1PutBackupPolicyCommand;
const serializeAws_restJson1PutFileSystemPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/policy";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.BypassPolicyLockoutSafetyCheck !== undefined &&
            input.BypassPolicyLockoutSafetyCheck !== null && {
            BypassPolicyLockoutSafetyCheck: input.BypassPolicyLockoutSafetyCheck,
        }),
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
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
exports.serializeAws_restJson1PutFileSystemPolicyCommand = serializeAws_restJson1PutFileSystemPolicyCommand;
const serializeAws_restJson1PutLifecycleConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.LifecyclePolicies !== undefined &&
            input.LifecyclePolicies !== null && {
            LifecyclePolicies: serializeAws_restJson1LifecyclePolicies(input.LifecyclePolicies, context),
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
exports.serializeAws_restJson1PutLifecycleConfigurationCommand = serializeAws_restJson1PutLifecycleConfigurationCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
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
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
    let resolvedPath = "/2015-02-01/resource-tags/{ResourceId}";
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
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateFileSystemCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2015-02-01/file-systems/{FileSystemId}";
    if (input.FileSystemId !== undefined) {
        const labelValue = input.FileSystemId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: FileSystemId.");
        }
        resolvedPath = resolvedPath.replace("{FileSystemId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: FileSystemId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ProvisionedThroughputInMibps !== undefined &&
            input.ProvisionedThroughputInMibps !== null && {
            ProvisionedThroughputInMibps: input.ProvisionedThroughputInMibps,
        }),
        ...(input.ThroughputMode !== undefined &&
            input.ThroughputMode !== null && { ThroughputMode: input.ThroughputMode }),
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
exports.serializeAws_restJson1UpdateFileSystemCommand = serializeAws_restJson1UpdateFileSystemCommand;
const deserializeAws_restJson1CreateAccessPointCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessPointArn: undefined,
        AccessPointId: undefined,
        ClientToken: undefined,
        FileSystemId: undefined,
        LifeCycleState: undefined,
        Name: undefined,
        OwnerId: undefined,
        PosixUser: undefined,
        RootDirectory: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessPointArn !== undefined && data.AccessPointArn !== null) {
        contents.AccessPointArn = data.AccessPointArn;
    }
    if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
        contents.AccessPointId = data.AccessPointId;
    }
    if (data.ClientToken !== undefined && data.ClientToken !== null) {
        contents.ClientToken = data.ClientToken;
    }
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
        contents.LifeCycleState = data.LifeCycleState;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.OwnerId !== undefined && data.OwnerId !== null) {
        contents.OwnerId = data.OwnerId;
    }
    if (data.PosixUser !== undefined && data.PosixUser !== null) {
        contents.PosixUser = deserializeAws_restJson1PosixUser(data.PosixUser, context);
    }
    if (data.RootDirectory !== undefined && data.RootDirectory !== null) {
        contents.RootDirectory = deserializeAws_restJson1RootDirectory(data.RootDirectory, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAccessPointCommand = deserializeAws_restJson1CreateAccessPointCommand;
const deserializeAws_restJson1CreateAccessPointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointAlreadyExists":
        case "com.amazonaws.efs#AccessPointAlreadyExists":
            response = {
                ...(await deserializeAws_restJson1AccessPointAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "AccessPointLimitExceeded":
        case "com.amazonaws.efs#AccessPointLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1AccessPointLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateFileSystemCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFileSystemCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AvailabilityZoneId: undefined,
        AvailabilityZoneName: undefined,
        CreationTime: undefined,
        CreationToken: undefined,
        Encrypted: undefined,
        FileSystemArn: undefined,
        FileSystemId: undefined,
        KmsKeyId: undefined,
        LifeCycleState: undefined,
        Name: undefined,
        NumberOfMountTargets: undefined,
        OwnerId: undefined,
        PerformanceMode: undefined,
        ProvisionedThroughputInMibps: undefined,
        SizeInBytes: undefined,
        Tags: undefined,
        ThroughputMode: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
        contents.AvailabilityZoneId = data.AvailabilityZoneId;
    }
    if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
        contents.AvailabilityZoneName = data.AvailabilityZoneName;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.CreationToken !== undefined && data.CreationToken !== null) {
        contents.CreationToken = data.CreationToken;
    }
    if (data.Encrypted !== undefined && data.Encrypted !== null) {
        contents.Encrypted = data.Encrypted;
    }
    if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
        contents.FileSystemArn = data.FileSystemArn;
    }
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
        contents.KmsKeyId = data.KmsKeyId;
    }
    if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
        contents.LifeCycleState = data.LifeCycleState;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
        contents.NumberOfMountTargets = data.NumberOfMountTargets;
    }
    if (data.OwnerId !== undefined && data.OwnerId !== null) {
        contents.OwnerId = data.OwnerId;
    }
    if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
        contents.PerformanceMode = data.PerformanceMode;
    }
    if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
        contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
    }
    if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
        contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
        contents.ThroughputMode = data.ThroughputMode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFileSystemCommand = deserializeAws_restJson1CreateFileSystemCommand;
const deserializeAws_restJson1CreateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemAlreadyExists":
        case "com.amazonaws.efs#FileSystemAlreadyExists":
            response = {
                ...(await deserializeAws_restJson1FileSystemAlreadyExistsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemLimitExceeded":
        case "com.amazonaws.efs#FileSystemLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1FileSystemLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientThroughputCapacity":
        case "com.amazonaws.efs#InsufficientThroughputCapacity":
            response = {
                ...(await deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThroughputLimitExceeded":
        case "com.amazonaws.efs#ThroughputLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAvailabilityZone":
        case "com.amazonaws.efs#UnsupportedAvailabilityZone":
            response = {
                ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateMountTargetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMountTargetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AvailabilityZoneId: undefined,
        AvailabilityZoneName: undefined,
        FileSystemId: undefined,
        IpAddress: undefined,
        LifeCycleState: undefined,
        MountTargetId: undefined,
        NetworkInterfaceId: undefined,
        OwnerId: undefined,
        SubnetId: undefined,
        VpcId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
        contents.AvailabilityZoneId = data.AvailabilityZoneId;
    }
    if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
        contents.AvailabilityZoneName = data.AvailabilityZoneName;
    }
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.IpAddress !== undefined && data.IpAddress !== null) {
        contents.IpAddress = data.IpAddress;
    }
    if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
        contents.LifeCycleState = data.LifeCycleState;
    }
    if (data.MountTargetId !== undefined && data.MountTargetId !== null) {
        contents.MountTargetId = data.MountTargetId;
    }
    if (data.NetworkInterfaceId !== undefined && data.NetworkInterfaceId !== null) {
        contents.NetworkInterfaceId = data.NetworkInterfaceId;
    }
    if (data.OwnerId !== undefined && data.OwnerId !== null) {
        contents.OwnerId = data.OwnerId;
    }
    if (data.SubnetId !== undefined && data.SubnetId !== null) {
        contents.SubnetId = data.SubnetId;
    }
    if (data.VpcId !== undefined && data.VpcId !== null) {
        contents.VpcId = data.VpcId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMountTargetCommand = deserializeAws_restJson1CreateMountTargetCommand;
const deserializeAws_restJson1CreateMountTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AvailabilityZonesMismatch":
        case "com.amazonaws.efs#AvailabilityZonesMismatch":
            response = {
                ...(await deserializeAws_restJson1AvailabilityZonesMismatchResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IpAddressInUse":
        case "com.amazonaws.efs#IpAddressInUse":
            response = {
                ...(await deserializeAws_restJson1IpAddressInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MountTargetConflict":
        case "com.amazonaws.efs#MountTargetConflict":
            response = {
                ...(await deserializeAws_restJson1MountTargetConflictResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NetworkInterfaceLimitExceeded":
        case "com.amazonaws.efs#NetworkInterfaceLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1NetworkInterfaceLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NoFreeAddressesInSubnet":
        case "com.amazonaws.efs#NoFreeAddressesInSubnet":
            response = {
                ...(await deserializeAws_restJson1NoFreeAddressesInSubnetResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SecurityGroupLimitExceeded":
        case "com.amazonaws.efs#SecurityGroupLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SecurityGroupNotFound":
        case "com.amazonaws.efs#SecurityGroupNotFound":
            response = {
                ...(await deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SubnetNotFound":
        case "com.amazonaws.efs#SubnetNotFound":
            response = {
                ...(await deserializeAws_restJson1SubnetNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAvailabilityZone":
        case "com.amazonaws.efs#UnsupportedAvailabilityZone":
            response = {
                ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTagsCommand = deserializeAws_restJson1CreateTagsCommand;
const deserializeAws_restJson1CreateTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteAccessPointCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAccessPointCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAccessPointCommand = deserializeAws_restJson1DeleteAccessPointCommand;
const deserializeAws_restJson1DeleteAccessPointCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteFileSystemCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFileSystemCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFileSystemCommand = deserializeAws_restJson1DeleteFileSystemCommand;
const deserializeAws_restJson1DeleteFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemInUse":
        case "com.amazonaws.efs#FileSystemInUse":
            response = {
                ...(await deserializeAws_restJson1FileSystemInUseResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteFileSystemPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFileSystemPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFileSystemPolicyCommand = deserializeAws_restJson1DeleteFileSystemPolicyCommand;
const deserializeAws_restJson1DeleteFileSystemPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteMountTargetCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMountTargetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMountTargetCommand = deserializeAws_restJson1DeleteMountTargetCommand;
const deserializeAws_restJson1DeleteMountTargetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DependencyTimeout":
        case "com.amazonaws.efs#DependencyTimeout":
            response = {
                ...(await deserializeAws_restJson1DependencyTimeoutResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MountTargetNotFound":
        case "com.amazonaws.efs#MountTargetNotFound":
            response = {
                ...(await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteTagsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTagsCommand = deserializeAws_restJson1DeleteTagsCommand;
const deserializeAws_restJson1DeleteTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeAccessPointsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccessPointsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessPoints: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessPoints !== undefined && data.AccessPoints !== null) {
        contents.AccessPoints = deserializeAws_restJson1AccessPointDescriptions(data.AccessPoints, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccessPointsCommand = deserializeAws_restJson1DescribeAccessPointsCommand;
const deserializeAws_restJson1DescribeAccessPointsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeAccountPreferencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAccountPreferencesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        ResourceIdPreference: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
        contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAccountPreferencesCommand = deserializeAws_restJson1DescribeAccountPreferencesCommand;
const deserializeAws_restJson1DescribeAccountPreferencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeBackupPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeBackupPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BackupPolicy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
        contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeBackupPolicyCommand = deserializeAws_restJson1DescribeBackupPolicyCommand;
const deserializeAws_restJson1DescribeBackupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFound":
        case "com.amazonaws.efs#PolicyNotFound":
            response = {
                ...(await deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.efs#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeFileSystemPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFileSystemPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FileSystemId: undefined,
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFileSystemPolicyCommand = deserializeAws_restJson1DescribeFileSystemPolicyCommand;
const deserializeAws_restJson1DescribeFileSystemPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyNotFound":
        case "com.amazonaws.efs#PolicyNotFound":
            response = {
                ...(await deserializeAws_restJson1PolicyNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeFileSystemsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFileSystemsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FileSystems: undefined,
        Marker: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FileSystems !== undefined && data.FileSystems !== null) {
        contents.FileSystems = deserializeAws_restJson1FileSystemDescriptions(data.FileSystems, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFileSystemsCommand = deserializeAws_restJson1DescribeFileSystemsCommand;
const deserializeAws_restJson1DescribeFileSystemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LifecyclePolicies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
        contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeLifecycleConfigurationCommand = deserializeAws_restJson1DescribeLifecycleConfigurationCommand;
const deserializeAws_restJson1DescribeLifecycleConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeMountTargetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMountTargetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        MountTargets: undefined,
        NextMarker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.MountTargets !== undefined && data.MountTargets !== null) {
        contents.MountTargets = deserializeAws_restJson1MountTargetDescriptions(data.MountTargets, context);
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMountTargetsCommand = deserializeAws_restJson1DescribeMountTargetsCommand;
const deserializeAws_restJson1DescribeMountTargetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MountTargetNotFound":
        case "com.amazonaws.efs#MountTargetNotFound":
            response = {
                ...(await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        SecurityGroups: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.SecurityGroups !== undefined && data.SecurityGroups !== null) {
        contents.SecurityGroups = deserializeAws_restJson1SecurityGroups(data.SecurityGroups, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand = deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommand;
const deserializeAws_restJson1DescribeMountTargetSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectMountTargetState":
        case "com.amazonaws.efs#IncorrectMountTargetState":
            response = {
                ...(await deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MountTargetNotFound":
        case "com.amazonaws.efs#MountTargetNotFound":
            response = {
                ...(await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeTagsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeTagsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        NextMarker: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.NextMarker !== undefined && data.NextMarker !== null) {
        contents.NextMarker = data.NextMarker;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeTagsCommand = deserializeAws_restJson1DescribeTagsCommand;
const deserializeAws_restJson1DescribeTagsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        NextToken: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
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
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand = deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommand;
const deserializeAws_restJson1ModifyMountTargetSecurityGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectMountTargetState":
        case "com.amazonaws.efs#IncorrectMountTargetState":
            response = {
                ...(await deserializeAws_restJson1IncorrectMountTargetStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MountTargetNotFound":
        case "com.amazonaws.efs#MountTargetNotFound":
            response = {
                ...(await deserializeAws_restJson1MountTargetNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SecurityGroupLimitExceeded":
        case "com.amazonaws.efs#SecurityGroupLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1SecurityGroupLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "SecurityGroupNotFound":
        case "com.amazonaws.efs#SecurityGroupNotFound":
            response = {
                ...(await deserializeAws_restJson1SecurityGroupNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutAccountPreferencesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutAccountPreferencesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ResourceIdPreference: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ResourceIdPreference !== undefined && data.ResourceIdPreference !== null) {
        contents.ResourceIdPreference = deserializeAws_restJson1ResourceIdPreference(data.ResourceIdPreference, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutAccountPreferencesCommand = deserializeAws_restJson1PutAccountPreferencesCommand;
const deserializeAws_restJson1PutAccountPreferencesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutBackupPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutBackupPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BackupPolicy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BackupPolicy !== undefined && data.BackupPolicy !== null) {
        contents.BackupPolicy = deserializeAws_restJson1BackupPolicy(data.BackupPolicy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutBackupPolicyCommand = deserializeAws_restJson1PutBackupPolicyCommand;
const deserializeAws_restJson1PutBackupPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.efs#ValidationException":
            response = {
                ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutFileSystemPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutFileSystemPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        FileSystemId: undefined,
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutFileSystemPolicyCommand = deserializeAws_restJson1PutFileSystemPolicyCommand;
const deserializeAws_restJson1PutFileSystemPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPolicyException":
        case "com.amazonaws.efs#InvalidPolicyException":
            response = {
                ...(await deserializeAws_restJson1InvalidPolicyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1PutLifecycleConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutLifecycleConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        LifecyclePolicies: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.LifecyclePolicies !== undefined && data.LifecyclePolicies !== null) {
        contents.LifecyclePolicies = deserializeAws_restJson1LifecyclePolicies(data.LifecyclePolicies, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutLifecycleConfigurationCommand = deserializeAws_restJson1PutLifecycleConfigurationCommand;
const deserializeAws_restJson1PutLifecycleConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "AccessPointNotFound":
        case "com.amazonaws.efs#AccessPointNotFound":
            response = {
                ...(await deserializeAws_restJson1AccessPointNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateFileSystemCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateFileSystemCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AvailabilityZoneId: undefined,
        AvailabilityZoneName: undefined,
        CreationTime: undefined,
        CreationToken: undefined,
        Encrypted: undefined,
        FileSystemArn: undefined,
        FileSystemId: undefined,
        KmsKeyId: undefined,
        LifeCycleState: undefined,
        Name: undefined,
        NumberOfMountTargets: undefined,
        OwnerId: undefined,
        PerformanceMode: undefined,
        ProvisionedThroughputInMibps: undefined,
        SizeInBytes: undefined,
        Tags: undefined,
        ThroughputMode: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AvailabilityZoneId !== undefined && data.AvailabilityZoneId !== null) {
        contents.AvailabilityZoneId = data.AvailabilityZoneId;
    }
    if (data.AvailabilityZoneName !== undefined && data.AvailabilityZoneName !== null) {
        contents.AvailabilityZoneName = data.AvailabilityZoneName;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.CreationToken !== undefined && data.CreationToken !== null) {
        contents.CreationToken = data.CreationToken;
    }
    if (data.Encrypted !== undefined && data.Encrypted !== null) {
        contents.Encrypted = data.Encrypted;
    }
    if (data.FileSystemArn !== undefined && data.FileSystemArn !== null) {
        contents.FileSystemArn = data.FileSystemArn;
    }
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.KmsKeyId !== undefined && data.KmsKeyId !== null) {
        contents.KmsKeyId = data.KmsKeyId;
    }
    if (data.LifeCycleState !== undefined && data.LifeCycleState !== null) {
        contents.LifeCycleState = data.LifeCycleState;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.NumberOfMountTargets !== undefined && data.NumberOfMountTargets !== null) {
        contents.NumberOfMountTargets = data.NumberOfMountTargets;
    }
    if (data.OwnerId !== undefined && data.OwnerId !== null) {
        contents.OwnerId = data.OwnerId;
    }
    if (data.PerformanceMode !== undefined && data.PerformanceMode !== null) {
        contents.PerformanceMode = data.PerformanceMode;
    }
    if (data.ProvisionedThroughputInMibps !== undefined && data.ProvisionedThroughputInMibps !== null) {
        contents.ProvisionedThroughputInMibps = data.ProvisionedThroughputInMibps;
    }
    if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
        contents.SizeInBytes = deserializeAws_restJson1FileSystemSize(data.SizeInBytes, context);
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
    }
    if (data.ThroughputMode !== undefined && data.ThroughputMode !== null) {
        contents.ThroughputMode = data.ThroughputMode;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFileSystemCommand = deserializeAws_restJson1UpdateFileSystemCommand;
const deserializeAws_restJson1UpdateFileSystemCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequest":
        case "com.amazonaws.efs#BadRequest":
            response = {
                ...(await deserializeAws_restJson1BadRequestResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "FileSystemNotFound":
        case "com.amazonaws.efs#FileSystemNotFound":
            response = {
                ...(await deserializeAws_restJson1FileSystemNotFoundResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IncorrectFileSystemLifeCycleState":
        case "com.amazonaws.efs#IncorrectFileSystemLifeCycleState":
            response = {
                ...(await deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InsufficientThroughputCapacity":
        case "com.amazonaws.efs#InsufficientThroughputCapacity":
            response = {
                ...(await deserializeAws_restJson1InsufficientThroughputCapacityResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerError":
        case "com.amazonaws.efs#InternalServerError":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThroughputLimitExceeded":
        case "com.amazonaws.efs#ThroughputLimitExceeded":
            response = {
                ...(await deserializeAws_restJson1ThroughputLimitExceededResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequests":
        case "com.amazonaws.efs#TooManyRequests":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AccessPointAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessPointAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        AccessPointId: undefined,
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.AccessPointId !== undefined && data.AccessPointId !== null) {
        contents.AccessPointId = data.AccessPointId;
    }
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1AccessPointLimitExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessPointLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1AccessPointNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessPointNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1AvailabilityZonesMismatchResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AvailabilityZonesMismatch",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1BadRequestResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequest",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1DependencyTimeoutResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DependencyTimeout",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1FileSystemAlreadyExistsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FileSystemAlreadyExists",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        FileSystemId: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.FileSystemId !== undefined && data.FileSystemId !== null) {
        contents.FileSystemId = data.FileSystemId;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1FileSystemInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FileSystemInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1FileSystemLimitExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FileSystemLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1FileSystemNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "FileSystemNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1IncorrectFileSystemLifeCycleStateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IncorrectFileSystemLifeCycleState",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1IncorrectMountTargetStateResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IncorrectMountTargetState",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InsufficientThroughputCapacityResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InsufficientThroughputCapacity",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerError",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InvalidPolicyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPolicyException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1IpAddressInUseResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IpAddressInUse",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1MountTargetConflictResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MountTargetConflict",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1MountTargetNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MountTargetNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NetworkInterfaceLimitExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NetworkInterfaceLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NoFreeAddressesInSubnetResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NoFreeAddressesInSubnet",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1PolicyNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PolicyNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1SecurityGroupLimitExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SecurityGroupLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1SecurityGroupNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SecurityGroupNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1SubnetNotFoundResponse = async (parsedOutput, context) => {
    const contents = {
        name: "SubnetNotFound",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ThroughputLimitExceededResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThroughputLimitExceeded",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequests",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1UnsupportedAvailabilityZoneResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedAvailabilityZone",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        ErrorCode: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.ErrorCode !== undefined && data.ErrorCode !== null) {
        contents.ErrorCode = data.ErrorCode;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1BackupPolicy = (input, context) => {
    return {
        ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
    };
};
const serializeAws_restJson1CreationInfo = (input, context) => {
    return {
        ...(input.OwnerGid !== undefined && input.OwnerGid !== null && { OwnerGid: input.OwnerGid }),
        ...(input.OwnerUid !== undefined && input.OwnerUid !== null && { OwnerUid: input.OwnerUid }),
        ...(input.Permissions !== undefined && input.Permissions !== null && { Permissions: input.Permissions }),
    };
};
const serializeAws_restJson1LifecyclePolicies = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LifecyclePolicy(entry, context);
    });
};
const serializeAws_restJson1LifecyclePolicy = (input, context) => {
    return {
        ...(input.TransitionToIA !== undefined &&
            input.TransitionToIA !== null && { TransitionToIA: input.TransitionToIA }),
    };
};
const serializeAws_restJson1PosixUser = (input, context) => {
    return {
        ...(input.Gid !== undefined && input.Gid !== null && { Gid: input.Gid }),
        ...(input.SecondaryGids !== undefined &&
            input.SecondaryGids !== null && {
            SecondaryGids: serializeAws_restJson1SecondaryGids(input.SecondaryGids, context),
        }),
        ...(input.Uid !== undefined && input.Uid !== null && { Uid: input.Uid }),
    };
};
const serializeAws_restJson1RootDirectory = (input, context) => {
    return {
        ...(input.CreationInfo !== undefined &&
            input.CreationInfo !== null && { CreationInfo: serializeAws_restJson1CreationInfo(input.CreationInfo, context) }),
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    };
};
const serializeAws_restJson1SecondaryGids = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SecurityGroups = (input, context) => {
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
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1TagKeys = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Tags = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1AccessPointDescription = (output, context) => {
    return {
        AccessPointArn: output.AccessPointArn !== undefined && output.AccessPointArn !== null ? output.AccessPointArn : undefined,
        AccessPointId: output.AccessPointId !== undefined && output.AccessPointId !== null ? output.AccessPointId : undefined,
        ClientToken: output.ClientToken !== undefined && output.ClientToken !== null ? output.ClientToken : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        PosixUser: output.PosixUser !== undefined && output.PosixUser !== null
            ? deserializeAws_restJson1PosixUser(output.PosixUser, context)
            : undefined,
        RootDirectory: output.RootDirectory !== undefined && output.RootDirectory !== null
            ? deserializeAws_restJson1RootDirectory(output.RootDirectory, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1Tags(output.Tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1AccessPointDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AccessPointDescription(entry, context);
    });
};
const deserializeAws_restJson1BackupPolicy = (output, context) => {
    return {
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
const deserializeAws_restJson1CreationInfo = (output, context) => {
    return {
        OwnerGid: output.OwnerGid !== undefined && output.OwnerGid !== null ? output.OwnerGid : undefined,
        OwnerUid: output.OwnerUid !== undefined && output.OwnerUid !== null ? output.OwnerUid : undefined,
        Permissions: output.Permissions !== undefined && output.Permissions !== null ? output.Permissions : undefined,
    };
};
const deserializeAws_restJson1FileSystemDescription = (output, context) => {
    return {
        AvailabilityZoneId: output.AvailabilityZoneId !== undefined && output.AvailabilityZoneId !== null
            ? output.AvailabilityZoneId
            : undefined,
        AvailabilityZoneName: output.AvailabilityZoneName !== undefined && output.AvailabilityZoneName !== null
            ? output.AvailabilityZoneName
            : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        CreationToken: output.CreationToken !== undefined && output.CreationToken !== null ? output.CreationToken : undefined,
        Encrypted: output.Encrypted !== undefined && output.Encrypted !== null ? output.Encrypted : undefined,
        FileSystemArn: output.FileSystemArn !== undefined && output.FileSystemArn !== null ? output.FileSystemArn : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NumberOfMountTargets: output.NumberOfMountTargets !== undefined && output.NumberOfMountTargets !== null
            ? output.NumberOfMountTargets
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        PerformanceMode: output.PerformanceMode !== undefined && output.PerformanceMode !== null ? output.PerformanceMode : undefined,
        ProvisionedThroughputInMibps: output.ProvisionedThroughputInMibps !== undefined && output.ProvisionedThroughputInMibps !== null
            ? output.ProvisionedThroughputInMibps
            : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null
            ? deserializeAws_restJson1FileSystemSize(output.SizeInBytes, context)
            : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1Tags(output.Tags, context)
            : undefined,
        ThroughputMode: output.ThroughputMode !== undefined && output.ThroughputMode !== null ? output.ThroughputMode : undefined,
    };
};
const deserializeAws_restJson1FileSystemDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FileSystemDescription(entry, context);
    });
};
const deserializeAws_restJson1FileSystemSize = (output, context) => {
    return {
        Timestamp: output.Timestamp !== undefined && output.Timestamp !== null
            ? new Date(Math.round(output.Timestamp * 1000))
            : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
        ValueInIA: output.ValueInIA !== undefined && output.ValueInIA !== null ? output.ValueInIA : undefined,
        ValueInStandard: output.ValueInStandard !== undefined && output.ValueInStandard !== null ? output.ValueInStandard : undefined,
    };
};
const deserializeAws_restJson1LifecyclePolicies = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LifecyclePolicy(entry, context);
    });
};
const deserializeAws_restJson1LifecyclePolicy = (output, context) => {
    return {
        TransitionToIA: output.TransitionToIA !== undefined && output.TransitionToIA !== null ? output.TransitionToIA : undefined,
    };
};
const deserializeAws_restJson1MountTargetDescription = (output, context) => {
    return {
        AvailabilityZoneId: output.AvailabilityZoneId !== undefined && output.AvailabilityZoneId !== null
            ? output.AvailabilityZoneId
            : undefined,
        AvailabilityZoneName: output.AvailabilityZoneName !== undefined && output.AvailabilityZoneName !== null
            ? output.AvailabilityZoneName
            : undefined,
        FileSystemId: output.FileSystemId !== undefined && output.FileSystemId !== null ? output.FileSystemId : undefined,
        IpAddress: output.IpAddress !== undefined && output.IpAddress !== null ? output.IpAddress : undefined,
        LifeCycleState: output.LifeCycleState !== undefined && output.LifeCycleState !== null ? output.LifeCycleState : undefined,
        MountTargetId: output.MountTargetId !== undefined && output.MountTargetId !== null ? output.MountTargetId : undefined,
        NetworkInterfaceId: output.NetworkInterfaceId !== undefined && output.NetworkInterfaceId !== null
            ? output.NetworkInterfaceId
            : undefined,
        OwnerId: output.OwnerId !== undefined && output.OwnerId !== null ? output.OwnerId : undefined,
        SubnetId: output.SubnetId !== undefined && output.SubnetId !== null ? output.SubnetId : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
    };
};
const deserializeAws_restJson1MountTargetDescriptions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MountTargetDescription(entry, context);
    });
};
const deserializeAws_restJson1PosixUser = (output, context) => {
    return {
        Gid: output.Gid !== undefined && output.Gid !== null ? output.Gid : undefined,
        SecondaryGids: output.SecondaryGids !== undefined && output.SecondaryGids !== null
            ? deserializeAws_restJson1SecondaryGids(output.SecondaryGids, context)
            : undefined,
        Uid: output.Uid !== undefined && output.Uid !== null ? output.Uid : undefined,
    };
};
const deserializeAws_restJson1ResourceIdPreference = (output, context) => {
    return {
        ResourceIdType: output.ResourceIdType !== undefined && output.ResourceIdType !== null ? output.ResourceIdType : undefined,
        Resources: output.Resources !== undefined && output.Resources !== null
            ? deserializeAws_restJson1Resources(output.Resources, context)
            : undefined,
    };
};
const deserializeAws_restJson1Resources = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1RootDirectory = (output, context) => {
    return {
        CreationInfo: output.CreationInfo !== undefined && output.CreationInfo !== null
            ? deserializeAws_restJson1CreationInfo(output.CreationInfo, context)
            : undefined,
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
    };
};
const deserializeAws_restJson1SecondaryGids = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SecurityGroups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Tags = (output, context) => {
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