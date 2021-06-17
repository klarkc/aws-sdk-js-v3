"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1GetVaultNotificationsCommand = exports.deserializeAws_restJson1GetVaultLockCommand = exports.deserializeAws_restJson1GetVaultAccessPolicyCommand = exports.deserializeAws_restJson1GetJobOutputCommand = exports.deserializeAws_restJson1GetDataRetrievalPolicyCommand = exports.deserializeAws_restJson1DescribeVaultCommand = exports.deserializeAws_restJson1DescribeJobCommand = exports.deserializeAws_restJson1DeleteVaultNotificationsCommand = exports.deserializeAws_restJson1DeleteVaultAccessPolicyCommand = exports.deserializeAws_restJson1DeleteVaultCommand = exports.deserializeAws_restJson1DeleteArchiveCommand = exports.deserializeAws_restJson1CreateVaultCommand = exports.deserializeAws_restJson1CompleteVaultLockCommand = exports.deserializeAws_restJson1CompleteMultipartUploadCommand = exports.deserializeAws_restJson1AddTagsToVaultCommand = exports.deserializeAws_restJson1AbortVaultLockCommand = exports.deserializeAws_restJson1AbortMultipartUploadCommand = exports.serializeAws_restJson1UploadMultipartPartCommand = exports.serializeAws_restJson1UploadArchiveCommand = exports.serializeAws_restJson1SetVaultNotificationsCommand = exports.serializeAws_restJson1SetVaultAccessPolicyCommand = exports.serializeAws_restJson1SetDataRetrievalPolicyCommand = exports.serializeAws_restJson1RemoveTagsFromVaultCommand = exports.serializeAws_restJson1PurchaseProvisionedCapacityCommand = exports.serializeAws_restJson1ListVaultsCommand = exports.serializeAws_restJson1ListTagsForVaultCommand = exports.serializeAws_restJson1ListProvisionedCapacityCommand = exports.serializeAws_restJson1ListPartsCommand = exports.serializeAws_restJson1ListMultipartUploadsCommand = exports.serializeAws_restJson1ListJobsCommand = exports.serializeAws_restJson1InitiateVaultLockCommand = exports.serializeAws_restJson1InitiateMultipartUploadCommand = exports.serializeAws_restJson1InitiateJobCommand = exports.serializeAws_restJson1GetVaultNotificationsCommand = exports.serializeAws_restJson1GetVaultLockCommand = exports.serializeAws_restJson1GetVaultAccessPolicyCommand = exports.serializeAws_restJson1GetJobOutputCommand = exports.serializeAws_restJson1GetDataRetrievalPolicyCommand = exports.serializeAws_restJson1DescribeVaultCommand = exports.serializeAws_restJson1DescribeJobCommand = exports.serializeAws_restJson1DeleteVaultNotificationsCommand = exports.serializeAws_restJson1DeleteVaultAccessPolicyCommand = exports.serializeAws_restJson1DeleteVaultCommand = exports.serializeAws_restJson1DeleteArchiveCommand = exports.serializeAws_restJson1CreateVaultCommand = exports.serializeAws_restJson1CompleteVaultLockCommand = exports.serializeAws_restJson1CompleteMultipartUploadCommand = exports.serializeAws_restJson1AddTagsToVaultCommand = exports.serializeAws_restJson1AbortVaultLockCommand = exports.serializeAws_restJson1AbortMultipartUploadCommand = void 0;
exports.deserializeAws_restJson1UploadMultipartPartCommand = exports.deserializeAws_restJson1UploadArchiveCommand = exports.deserializeAws_restJson1SetVaultNotificationsCommand = exports.deserializeAws_restJson1SetVaultAccessPolicyCommand = exports.deserializeAws_restJson1SetDataRetrievalPolicyCommand = exports.deserializeAws_restJson1RemoveTagsFromVaultCommand = exports.deserializeAws_restJson1PurchaseProvisionedCapacityCommand = exports.deserializeAws_restJson1ListVaultsCommand = exports.deserializeAws_restJson1ListTagsForVaultCommand = exports.deserializeAws_restJson1ListProvisionedCapacityCommand = exports.deserializeAws_restJson1ListPartsCommand = exports.deserializeAws_restJson1ListMultipartUploadsCommand = exports.deserializeAws_restJson1ListJobsCommand = exports.deserializeAws_restJson1InitiateVaultLockCommand = exports.deserializeAws_restJson1InitiateMultipartUploadCommand = exports.deserializeAws_restJson1InitiateJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AbortMultipartUploadCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.uploadId !== undefined) {
        const labelValue = input.uploadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: uploadId.");
        }
        resolvedPath = resolvedPath.replace("{uploadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: uploadId.");
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
exports.serializeAws_restJson1AbortMultipartUploadCommand = serializeAws_restJson1AbortMultipartUploadCommand;
const serializeAws_restJson1AbortVaultLockCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1AbortVaultLockCommand = serializeAws_restJson1AbortVaultLockCommand;
const serializeAws_restJson1AddTagsToVaultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    const query = {
        operation: "add",
    };
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
exports.serializeAws_restJson1AddTagsToVaultCommand = serializeAws_restJson1AddTagsToVaultCommand;
const serializeAws_restJson1CompleteMultipartUploadCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.archiveSize) && { "x-amz-archive-size": input.archiveSize }),
        ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum }),
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.uploadId !== undefined) {
        const labelValue = input.uploadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: uploadId.");
        }
        resolvedPath = resolvedPath.replace("{uploadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: uploadId.");
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
exports.serializeAws_restJson1CompleteMultipartUploadCommand = serializeAws_restJson1CompleteMultipartUploadCommand;
const serializeAws_restJson1CompleteVaultLockCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.lockId !== undefined) {
        const labelValue = input.lockId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: lockId.");
        }
        resolvedPath = resolvedPath.replace("{lockId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: lockId.");
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
exports.serializeAws_restJson1CompleteVaultLockCommand = serializeAws_restJson1CompleteVaultLockCommand;
const serializeAws_restJson1CreateVaultCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1CreateVaultCommand = serializeAws_restJson1CreateVaultCommand;
const serializeAws_restJson1DeleteArchiveCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/archives/{archiveId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.archiveId !== undefined) {
        const labelValue = input.archiveId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: archiveId.");
        }
        resolvedPath = resolvedPath.replace("{archiveId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: archiveId.");
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
exports.serializeAws_restJson1DeleteArchiveCommand = serializeAws_restJson1DeleteArchiveCommand;
const serializeAws_restJson1DeleteVaultCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1DeleteVaultCommand = serializeAws_restJson1DeleteVaultCommand;
const serializeAws_restJson1DeleteVaultAccessPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1DeleteVaultAccessPolicyCommand = serializeAws_restJson1DeleteVaultAccessPolicyCommand;
const serializeAws_restJson1DeleteVaultNotificationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1DeleteVaultNotificationsCommand = serializeAws_restJson1DeleteVaultNotificationsCommand;
const serializeAws_restJson1DescribeJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1DescribeJobCommand = serializeAws_restJson1DescribeJobCommand;
const serializeAws_restJson1DescribeVaultCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1DescribeVaultCommand = serializeAws_restJson1DescribeVaultCommand;
const serializeAws_restJson1GetDataRetrievalPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/policies/data-retrieval";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
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
exports.serializeAws_restJson1GetDataRetrievalPolicyCommand = serializeAws_restJson1GetDataRetrievalPolicyCommand;
const serializeAws_restJson1GetJobOutputCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.range) && { range: input.range }),
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.jobId !== undefined) {
        const labelValue = input.jobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: jobId.");
        }
        resolvedPath = resolvedPath.replace("{jobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: jobId.");
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
exports.serializeAws_restJson1GetJobOutputCommand = serializeAws_restJson1GetJobOutputCommand;
const serializeAws_restJson1GetVaultAccessPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1GetVaultAccessPolicyCommand = serializeAws_restJson1GetVaultAccessPolicyCommand;
const serializeAws_restJson1GetVaultLockCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1GetVaultLockCommand = serializeAws_restJson1GetVaultLockCommand;
const serializeAws_restJson1GetVaultNotificationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1GetVaultNotificationsCommand = serializeAws_restJson1GetVaultNotificationsCommand;
const serializeAws_restJson1InitiateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    let body;
    if (input.jobParameters !== undefined) {
        body = serializeAws_restJson1JobParameters(input.jobParameters, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
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
exports.serializeAws_restJson1InitiateJobCommand = serializeAws_restJson1InitiateJobCommand;
const serializeAws_restJson1InitiateMultipartUploadCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.archiveDescription) && {
            "x-amz-archive-description": input.archiveDescription,
        }),
        ...(isSerializableHeaderValue(input.partSize) && { "x-amz-part-size": input.partSize }),
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1InitiateMultipartUploadCommand = serializeAws_restJson1InitiateMultipartUploadCommand;
const serializeAws_restJson1InitiateVaultLockCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    let body;
    if (input.policy !== undefined) {
        body = serializeAws_restJson1VaultLockPolicy(input.policy, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
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
exports.serializeAws_restJson1InitiateVaultLockCommand = serializeAws_restJson1InitiateVaultLockCommand;
const serializeAws_restJson1ListJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    const query = {
        ...(input.limit !== undefined && { limit: input.limit.toString() }),
        ...(input.marker !== undefined && { marker: input.marker }),
        ...(input.statuscode !== undefined && { statuscode: input.statuscode }),
        ...(input.completed !== undefined && { completed: input.completed }),
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
exports.serializeAws_restJson1ListJobsCommand = serializeAws_restJson1ListJobsCommand;
const serializeAws_restJson1ListMultipartUploadsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    const query = {
        ...(input.limit !== undefined && { limit: input.limit.toString() }),
        ...(input.marker !== undefined && { marker: input.marker }),
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
exports.serializeAws_restJson1ListMultipartUploadsCommand = serializeAws_restJson1ListMultipartUploadsCommand;
const serializeAws_restJson1ListPartsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.uploadId !== undefined) {
        const labelValue = input.uploadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: uploadId.");
        }
        resolvedPath = resolvedPath.replace("{uploadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: uploadId.");
    }
    const query = {
        ...(input.marker !== undefined && { marker: input.marker }),
        ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1ListPartsCommand = serializeAws_restJson1ListPartsCommand;
const serializeAws_restJson1ListProvisionedCapacityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/provisioned-capacity";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
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
exports.serializeAws_restJson1ListProvisionedCapacityCommand = serializeAws_restJson1ListProvisionedCapacityCommand;
const serializeAws_restJson1ListTagsForVaultCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
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
exports.serializeAws_restJson1ListTagsForVaultCommand = serializeAws_restJson1ListTagsForVaultCommand;
const serializeAws_restJson1ListVaultsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/vaults";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    const query = {
        ...(input.marker !== undefined && { marker: input.marker }),
        ...(input.limit !== undefined && { limit: input.limit.toString() }),
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
exports.serializeAws_restJson1ListVaultsCommand = serializeAws_restJson1ListVaultsCommand;
const serializeAws_restJson1PurchaseProvisionedCapacityCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/{accountId}/provisioned-capacity";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
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
exports.serializeAws_restJson1PurchaseProvisionedCapacityCommand = serializeAws_restJson1PurchaseProvisionedCapacityCommand;
const serializeAws_restJson1RemoveTagsFromVaultCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    const query = {
        operation: "remove",
    };
    let body;
    body = JSON.stringify({
        ...(input.TagKeys !== undefined &&
            input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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
exports.serializeAws_restJson1RemoveTagsFromVaultCommand = serializeAws_restJson1RemoveTagsFromVaultCommand;
const serializeAws_restJson1SetDataRetrievalPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/policies/data-retrieval";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Policy !== undefined &&
            input.Policy !== null && { Policy: serializeAws_restJson1DataRetrievalPolicy(input.Policy, context) }),
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
exports.serializeAws_restJson1SetDataRetrievalPolicyCommand = serializeAws_restJson1SetDataRetrievalPolicyCommand;
const serializeAws_restJson1SetVaultAccessPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    let body;
    if (input.policy !== undefined) {
        body = serializeAws_restJson1VaultAccessPolicy(input.policy, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
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
exports.serializeAws_restJson1SetVaultAccessPolicyCommand = serializeAws_restJson1SetVaultAccessPolicyCommand;
const serializeAws_restJson1SetVaultNotificationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    let body;
    if (input.vaultNotificationConfig !== undefined) {
        body = serializeAws_restJson1VaultNotificationConfig(input.vaultNotificationConfig, context);
    }
    if (body === undefined) {
        body = {};
    }
    body = JSON.stringify(body);
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
exports.serializeAws_restJson1SetVaultNotificationsCommand = serializeAws_restJson1SetVaultNotificationsCommand;
const serializeAws_restJson1UploadArchiveCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.archiveDescription) && {
            "x-amz-archive-description": input.archiveDescription,
        }),
        ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum }),
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/archives";
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    let body;
    if (input.body !== undefined) {
        body = input.body;
    }
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
exports.serializeAws_restJson1UploadArchiveCommand = serializeAws_restJson1UploadArchiveCommand;
const serializeAws_restJson1UploadMultipartPartCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum }),
        ...(isSerializableHeaderValue(input.range) && { "content-range": input.range }),
    };
    let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
    if (input.accountId !== undefined) {
        const labelValue = input.accountId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: accountId.");
        }
        resolvedPath = resolvedPath.replace("{accountId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: accountId.");
    }
    if (input.vaultName !== undefined) {
        const labelValue = input.vaultName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: vaultName.");
        }
        resolvedPath = resolvedPath.replace("{vaultName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: vaultName.");
    }
    if (input.uploadId !== undefined) {
        const labelValue = input.uploadId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: uploadId.");
        }
        resolvedPath = resolvedPath.replace("{uploadId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: uploadId.");
    }
    let body;
    if (input.body !== undefined) {
        body = input.body;
    }
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
exports.serializeAws_restJson1UploadMultipartPartCommand = serializeAws_restJson1UploadMultipartPartCommand;
const deserializeAws_restJson1AbortMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AbortMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AbortMultipartUploadCommand = deserializeAws_restJson1AbortMultipartUploadCommand;
const deserializeAws_restJson1AbortMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1AbortVaultLockCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AbortVaultLockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AbortVaultLockCommand = deserializeAws_restJson1AbortVaultLockCommand;
const deserializeAws_restJson1AbortVaultLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1AddTagsToVaultCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1AddTagsToVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AddTagsToVaultCommand = deserializeAws_restJson1AddTagsToVaultCommand;
const deserializeAws_restJson1AddTagsToVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.glacier#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1CompleteMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        archiveId: undefined,
        checksum: undefined,
        location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.location = output.headers["location"];
    }
    if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
        contents.checksum = output.headers["x-amz-sha256-tree-hash"];
    }
    if (output.headers["x-amz-archive-id"] !== undefined) {
        contents.archiveId = output.headers["x-amz-archive-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteMultipartUploadCommand = deserializeAws_restJson1CompleteMultipartUploadCommand;
const deserializeAws_restJson1CompleteMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1CompleteVaultLockCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1CompleteVaultLockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CompleteVaultLockCommand = deserializeAws_restJson1CompleteVaultLockCommand;
const deserializeAws_restJson1CompleteVaultLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateVaultCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.location = output.headers["location"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVaultCommand = deserializeAws_restJson1CreateVaultCommand;
const deserializeAws_restJson1CreateVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.glacier#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteArchiveCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteArchiveCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteArchiveCommand = deserializeAws_restJson1DeleteArchiveCommand;
const deserializeAws_restJson1DeleteArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteVaultCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVaultCommand = deserializeAws_restJson1DeleteVaultCommand;
const deserializeAws_restJson1DeleteVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteVaultAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVaultAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVaultAccessPolicyCommand = deserializeAws_restJson1DeleteVaultAccessPolicyCommand;
const deserializeAws_restJson1DeleteVaultAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteVaultNotificationsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVaultNotificationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVaultNotificationsCommand = deserializeAws_restJson1DeleteVaultNotificationsCommand;
const deserializeAws_restJson1DeleteVaultNotificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Action: undefined,
        ArchiveId: undefined,
        ArchiveSHA256TreeHash: undefined,
        ArchiveSizeInBytes: undefined,
        Completed: undefined,
        CompletionDate: undefined,
        CreationDate: undefined,
        InventoryRetrievalParameters: undefined,
        InventorySizeInBytes: undefined,
        JobDescription: undefined,
        JobId: undefined,
        JobOutputPath: undefined,
        OutputLocation: undefined,
        RetrievalByteRange: undefined,
        SHA256TreeHash: undefined,
        SNSTopic: undefined,
        SelectParameters: undefined,
        StatusCode: undefined,
        StatusMessage: undefined,
        Tier: undefined,
        VaultARN: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Action !== undefined && data.Action !== null) {
        contents.Action = data.Action;
    }
    if (data.ArchiveId !== undefined && data.ArchiveId !== null) {
        contents.ArchiveId = data.ArchiveId;
    }
    if (data.ArchiveSHA256TreeHash !== undefined && data.ArchiveSHA256TreeHash !== null) {
        contents.ArchiveSHA256TreeHash = data.ArchiveSHA256TreeHash;
    }
    if (data.ArchiveSizeInBytes !== undefined && data.ArchiveSizeInBytes !== null) {
        contents.ArchiveSizeInBytes = data.ArchiveSizeInBytes;
    }
    if (data.Completed !== undefined && data.Completed !== null) {
        contents.Completed = data.Completed;
    }
    if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
        contents.CompletionDate = data.CompletionDate;
    }
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = data.CreationDate;
    }
    if (data.InventoryRetrievalParameters !== undefined && data.InventoryRetrievalParameters !== null) {
        contents.InventoryRetrievalParameters = deserializeAws_restJson1InventoryRetrievalJobDescription(data.InventoryRetrievalParameters, context);
    }
    if (data.InventorySizeInBytes !== undefined && data.InventorySizeInBytes !== null) {
        contents.InventorySizeInBytes = data.InventorySizeInBytes;
    }
    if (data.JobDescription !== undefined && data.JobDescription !== null) {
        contents.JobDescription = data.JobDescription;
    }
    if (data.JobId !== undefined && data.JobId !== null) {
        contents.JobId = data.JobId;
    }
    if (data.JobOutputPath !== undefined && data.JobOutputPath !== null) {
        contents.JobOutputPath = data.JobOutputPath;
    }
    if (data.OutputLocation !== undefined && data.OutputLocation !== null) {
        contents.OutputLocation = deserializeAws_restJson1OutputLocation(data.OutputLocation, context);
    }
    if (data.RetrievalByteRange !== undefined && data.RetrievalByteRange !== null) {
        contents.RetrievalByteRange = data.RetrievalByteRange;
    }
    if (data.SHA256TreeHash !== undefined && data.SHA256TreeHash !== null) {
        contents.SHA256TreeHash = data.SHA256TreeHash;
    }
    if (data.SNSTopic !== undefined && data.SNSTopic !== null) {
        contents.SNSTopic = data.SNSTopic;
    }
    if (data.SelectParameters !== undefined && data.SelectParameters !== null) {
        contents.SelectParameters = deserializeAws_restJson1SelectParameters(data.SelectParameters, context);
    }
    if (data.StatusCode !== undefined && data.StatusCode !== null) {
        contents.StatusCode = data.StatusCode;
    }
    if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
        contents.StatusMessage = data.StatusMessage;
    }
    if (data.Tier !== undefined && data.Tier !== null) {
        contents.Tier = data.Tier;
    }
    if (data.VaultARN !== undefined && data.VaultARN !== null) {
        contents.VaultARN = data.VaultARN;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobCommand = deserializeAws_restJson1DescribeJobCommand;
const deserializeAws_restJson1DescribeJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeVaultCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationDate: undefined,
        LastInventoryDate: undefined,
        NumberOfArchives: undefined,
        SizeInBytes: undefined,
        VaultARN: undefined,
        VaultName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = data.CreationDate;
    }
    if (data.LastInventoryDate !== undefined && data.LastInventoryDate !== null) {
        contents.LastInventoryDate = data.LastInventoryDate;
    }
    if (data.NumberOfArchives !== undefined && data.NumberOfArchives !== null) {
        contents.NumberOfArchives = data.NumberOfArchives;
    }
    if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
        contents.SizeInBytes = data.SizeInBytes;
    }
    if (data.VaultARN !== undefined && data.VaultARN !== null) {
        contents.VaultARN = data.VaultARN;
    }
    if (data.VaultName !== undefined && data.VaultName !== null) {
        contents.VaultName = data.VaultName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVaultCommand = deserializeAws_restJson1DescribeVaultCommand;
const deserializeAws_restJson1DescribeVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1GetDataRetrievalPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDataRetrievalPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = deserializeAws_restJson1DataRetrievalPolicy(data.Policy, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDataRetrievalPolicyCommand = deserializeAws_restJson1GetDataRetrievalPolicyCommand;
const deserializeAws_restJson1GetDataRetrievalPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1GetJobOutputCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJobOutputCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        acceptRanges: undefined,
        archiveDescription: undefined,
        body: undefined,
        checksum: undefined,
        contentRange: undefined,
        contentType: undefined,
        status: undefined,
    };
    if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
        contents.checksum = output.headers["x-amz-sha256-tree-hash"];
    }
    if (output.headers["content-range"] !== undefined) {
        contents.contentRange = output.headers["content-range"];
    }
    if (output.headers["accept-ranges"] !== undefined) {
        contents.acceptRanges = output.headers["accept-ranges"];
    }
    if (output.headers["content-type"] !== undefined) {
        contents.contentType = output.headers["content-type"];
    }
    if (output.headers["x-amz-archive-description"] !== undefined) {
        contents.archiveDescription = output.headers["x-amz-archive-description"];
    }
    const data = output.body;
    contents.body = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJobOutputCommand = deserializeAws_restJson1GetJobOutputCommand;
const deserializeAws_restJson1GetJobOutputCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1GetVaultAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetVaultAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.policy = deserializeAws_restJson1VaultAccessPolicy(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVaultAccessPolicyCommand = deserializeAws_restJson1GetVaultAccessPolicyCommand;
const deserializeAws_restJson1GetVaultAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1GetVaultLockCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetVaultLockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationDate: undefined,
        ExpirationDate: undefined,
        Policy: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = data.CreationDate;
    }
    if (data.ExpirationDate !== undefined && data.ExpirationDate !== null) {
        contents.ExpirationDate = data.ExpirationDate;
    }
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVaultLockCommand = deserializeAws_restJson1GetVaultLockCommand;
const deserializeAws_restJson1GetVaultLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1GetVaultNotificationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetVaultNotificationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        vaultNotificationConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    contents.vaultNotificationConfig = deserializeAws_restJson1VaultNotificationConfig(data, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVaultNotificationsCommand = deserializeAws_restJson1GetVaultNotificationsCommand;
const deserializeAws_restJson1GetVaultNotificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1InitiateJobCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitiateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        jobId: undefined,
        jobOutputPath: undefined,
        location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.location = output.headers["location"];
    }
    if (output.headers["x-amz-job-id"] !== undefined) {
        contents.jobId = output.headers["x-amz-job-id"];
    }
    if (output.headers["x-amz-job-output-path"] !== undefined) {
        contents.jobOutputPath = output.headers["x-amz-job-output-path"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitiateJobCommand = deserializeAws_restJson1InitiateJobCommand;
const deserializeAws_restJson1InitiateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InsufficientCapacityException":
        case "com.amazonaws.glacier#InsufficientCapacityException":
            response = {
                ...(await deserializeAws_restJson1InsufficientCapacityExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PolicyEnforcedException":
        case "com.amazonaws.glacier#PolicyEnforcedException":
            response = {
                ...(await deserializeAws_restJson1PolicyEnforcedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1InitiateMultipartUploadCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitiateMultipartUploadCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        location: undefined,
        uploadId: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.location = output.headers["location"];
    }
    if (output.headers["x-amz-multipart-upload-id"] !== undefined) {
        contents.uploadId = output.headers["x-amz-multipart-upload-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitiateMultipartUploadCommand = deserializeAws_restJson1InitiateMultipartUploadCommand;
const deserializeAws_restJson1InitiateMultipartUploadCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1InitiateVaultLockCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitiateVaultLockCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        lockId: undefined,
    };
    if (output.headers["x-amz-lock-id"] !== undefined) {
        contents.lockId = output.headers["x-amz-lock-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitiateVaultLockCommand = deserializeAws_restJson1InitiateVaultLockCommand;
const deserializeAws_restJson1InitiateVaultLockCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        JobList: undefined,
        Marker: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.JobList !== undefined && data.JobList !== null) {
        contents.JobList = deserializeAws_restJson1JobList(data.JobList, context);
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsCommand = deserializeAws_restJson1ListJobsCommand;
const deserializeAws_restJson1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListMultipartUploadsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMultipartUploadsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        UploadsList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.UploadsList !== undefined && data.UploadsList !== null) {
        contents.UploadsList = deserializeAws_restJson1UploadsList(data.UploadsList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMultipartUploadsCommand = deserializeAws_restJson1ListMultipartUploadsCommand;
const deserializeAws_restJson1ListMultipartUploadsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListPartsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPartsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ArchiveDescription: undefined,
        CreationDate: undefined,
        Marker: undefined,
        MultipartUploadId: undefined,
        PartSizeInBytes: undefined,
        Parts: undefined,
        VaultARN: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ArchiveDescription !== undefined && data.ArchiveDescription !== null) {
        contents.ArchiveDescription = data.ArchiveDescription;
    }
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = data.CreationDate;
    }
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.MultipartUploadId !== undefined && data.MultipartUploadId !== null) {
        contents.MultipartUploadId = data.MultipartUploadId;
    }
    if (data.PartSizeInBytes !== undefined && data.PartSizeInBytes !== null) {
        contents.PartSizeInBytes = data.PartSizeInBytes;
    }
    if (data.Parts !== undefined && data.Parts !== null) {
        contents.Parts = deserializeAws_restJson1PartList(data.Parts, context);
    }
    if (data.VaultARN !== undefined && data.VaultARN !== null) {
        contents.VaultARN = data.VaultARN;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPartsCommand = deserializeAws_restJson1ListPartsCommand;
const deserializeAws_restJson1ListPartsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListProvisionedCapacityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProvisionedCapacityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProvisionedCapacityList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProvisionedCapacityList !== undefined && data.ProvisionedCapacityList !== null) {
        contents.ProvisionedCapacityList = deserializeAws_restJson1ProvisionedCapacityList(data.ProvisionedCapacityList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProvisionedCapacityCommand = deserializeAws_restJson1ListProvisionedCapacityCommand;
const deserializeAws_restJson1ListProvisionedCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListTagsForVaultCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTagsForVaultCommand = deserializeAws_restJson1ListTagsForVaultCommand;
const deserializeAws_restJson1ListTagsForVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1ListVaultsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListVaultsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Marker: undefined,
        VaultList: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Marker !== undefined && data.Marker !== null) {
        contents.Marker = data.Marker;
    }
    if (data.VaultList !== undefined && data.VaultList !== null) {
        contents.VaultList = deserializeAws_restJson1VaultList(data.VaultList, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVaultsCommand = deserializeAws_restJson1ListVaultsCommand;
const deserializeAws_restJson1ListVaultsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1PurchaseProvisionedCapacityCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1PurchaseProvisionedCapacityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        capacityId: undefined,
    };
    if (output.headers["x-amz-capacity-id"] !== undefined) {
        contents.capacityId = output.headers["x-amz-capacity-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PurchaseProvisionedCapacityCommand = deserializeAws_restJson1PurchaseProvisionedCapacityCommand;
const deserializeAws_restJson1PurchaseProvisionedCapacityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.glacier#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1RemoveTagsFromVaultCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1RemoveTagsFromVaultCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RemoveTagsFromVaultCommand = deserializeAws_restJson1RemoveTagsFromVaultCommand;
const deserializeAws_restJson1RemoveTagsFromVaultCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1SetDataRetrievalPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetDataRetrievalPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetDataRetrievalPolicyCommand = deserializeAws_restJson1SetDataRetrievalPolicyCommand;
const deserializeAws_restJson1SetDataRetrievalPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1SetVaultAccessPolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetVaultAccessPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetVaultAccessPolicyCommand = deserializeAws_restJson1SetVaultAccessPolicyCommand;
const deserializeAws_restJson1SetVaultAccessPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1SetVaultNotificationsCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetVaultNotificationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetVaultNotificationsCommand = deserializeAws_restJson1SetVaultNotificationsCommand;
const deserializeAws_restJson1SetVaultNotificationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1UploadArchiveCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1UploadArchiveCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        archiveId: undefined,
        checksum: undefined,
        location: undefined,
    };
    if (output.headers["location"] !== undefined) {
        contents.location = output.headers["location"];
    }
    if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
        contents.checksum = output.headers["x-amz-sha256-tree-hash"];
    }
    if (output.headers["x-amz-archive-id"] !== undefined) {
        contents.archiveId = output.headers["x-amz-archive-id"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UploadArchiveCommand = deserializeAws_restJson1UploadArchiveCommand;
const deserializeAws_restJson1UploadArchiveCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.glacier#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1UploadMultipartPartCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1UploadMultipartPartCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        checksum: undefined,
    };
    if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
        contents.checksum = output.headers["x-amz-sha256-tree-hash"];
    }
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UploadMultipartPartCommand = deserializeAws_restJson1UploadMultipartPartCommand;
const deserializeAws_restJson1UploadMultipartPartCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterValueException":
        case "com.amazonaws.glacier#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "MissingParameterValueException":
        case "com.amazonaws.glacier#MissingParameterValueException":
            response = {
                ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "RequestTimeoutException":
        case "com.amazonaws.glacier#RequestTimeoutException":
            response = {
                ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.glacier#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.glacier#ServiceUnavailableException":
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
const deserializeAws_restJson1InsufficientCapacityExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InsufficientCapacityException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1MissingParameterValueExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "MissingParameterValueException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1PolicyEnforcedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PolicyEnforcedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "RequestTimeoutException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        type: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.type !== undefined && data.type !== null) {
        contents.type = data.type;
    }
    return contents;
};
const serializeAws_restJson1AccessControlPolicyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Grant(entry, context);
    });
};
const serializeAws_restJson1CSVInput = (input, context) => {
    return {
        ...(input.Comments !== undefined && input.Comments !== null && { Comments: input.Comments }),
        ...(input.FieldDelimiter !== undefined &&
            input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter }),
        ...(input.FileHeaderInfo !== undefined &&
            input.FileHeaderInfo !== null && { FileHeaderInfo: input.FileHeaderInfo }),
        ...(input.QuoteCharacter !== undefined &&
            input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter }),
        ...(input.QuoteEscapeCharacter !== undefined &&
            input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
        ...(input.RecordDelimiter !== undefined &&
            input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }),
    };
};
const serializeAws_restJson1CSVOutput = (input, context) => {
    return {
        ...(input.FieldDelimiter !== undefined &&
            input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter }),
        ...(input.QuoteCharacter !== undefined &&
            input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter }),
        ...(input.QuoteEscapeCharacter !== undefined &&
            input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
        ...(input.QuoteFields !== undefined && input.QuoteFields !== null && { QuoteFields: input.QuoteFields }),
        ...(input.RecordDelimiter !== undefined &&
            input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }),
    };
};
const serializeAws_restJson1DataRetrievalPolicy = (input, context) => {
    return {
        ...(input.Rules !== undefined &&
            input.Rules !== null && { Rules: serializeAws_restJson1DataRetrievalRulesList(input.Rules, context) }),
    };
};
const serializeAws_restJson1DataRetrievalRule = (input, context) => {
    return {
        ...(input.BytesPerHour !== undefined && input.BytesPerHour !== null && { BytesPerHour: input.BytesPerHour }),
        ...(input.Strategy !== undefined && input.Strategy !== null && { Strategy: input.Strategy }),
    };
};
const serializeAws_restJson1DataRetrievalRulesList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataRetrievalRule(entry, context);
    });
};
const serializeAws_restJson1Encryption = (input, context) => {
    return {
        ...(input.EncryptionType !== undefined &&
            input.EncryptionType !== null && { EncryptionType: input.EncryptionType }),
        ...(input.KMSContext !== undefined && input.KMSContext !== null && { KMSContext: input.KMSContext }),
        ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
    };
};
const serializeAws_restJson1Grant = (input, context) => {
    return {
        ...(input.Grantee !== undefined &&
            input.Grantee !== null && { Grantee: serializeAws_restJson1Grantee(input.Grantee, context) }),
        ...(input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }),
    };
};
const serializeAws_restJson1Grantee = (input, context) => {
    return {
        ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
        ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
        ...(input.ID !== undefined && input.ID !== null && { ID: input.ID }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
        ...(input.URI !== undefined && input.URI !== null && { URI: input.URI }),
    };
};
const serializeAws_restJson1hashmap = (input, context) => {
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
const serializeAws_restJson1InputSerialization = (input, context) => {
    return {
        ...(input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVInput(input.csv, context) }),
    };
};
const serializeAws_restJson1InventoryRetrievalJobInput = (input, context) => {
    return {
        ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
        ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
        ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
        ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
    };
};
const serializeAws_restJson1JobParameters = (input, context) => {
    return {
        ...(input.ArchiveId !== undefined && input.ArchiveId !== null && { ArchiveId: input.ArchiveId }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
        ...(input.InventoryRetrievalParameters !== undefined &&
            input.InventoryRetrievalParameters !== null && {
            InventoryRetrievalParameters: serializeAws_restJson1InventoryRetrievalJobInput(input.InventoryRetrievalParameters, context),
        }),
        ...(input.OutputLocation !== undefined &&
            input.OutputLocation !== null && {
            OutputLocation: serializeAws_restJson1OutputLocation(input.OutputLocation, context),
        }),
        ...(input.RetrievalByteRange !== undefined &&
            input.RetrievalByteRange !== null && { RetrievalByteRange: input.RetrievalByteRange }),
        ...(input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic }),
        ...(input.SelectParameters !== undefined &&
            input.SelectParameters !== null && {
            SelectParameters: serializeAws_restJson1SelectParameters(input.SelectParameters, context),
        }),
        ...(input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1NotificationEventList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1OutputLocation = (input, context) => {
    return {
        ...(input.S3 !== undefined && input.S3 !== null && { S3: serializeAws_restJson1S3Location(input.S3, context) }),
    };
};
const serializeAws_restJson1OutputSerialization = (input, context) => {
    return {
        ...(input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVOutput(input.csv, context) }),
    };
};
const serializeAws_restJson1S3Location = (input, context) => {
    return {
        ...(input.AccessControlList !== undefined &&
            input.AccessControlList !== null && {
            AccessControlList: serializeAws_restJson1AccessControlPolicyList(input.AccessControlList, context),
        }),
        ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
        ...(input.CannedACL !== undefined && input.CannedACL !== null && { CannedACL: input.CannedACL }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
        ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
        ...(input.Tagging !== undefined &&
            input.Tagging !== null && { Tagging: serializeAws_restJson1hashmap(input.Tagging, context) }),
        ...(input.UserMetadata !== undefined &&
            input.UserMetadata !== null && { UserMetadata: serializeAws_restJson1hashmap(input.UserMetadata, context) }),
    };
};
const serializeAws_restJson1SelectParameters = (input, context) => {
    return {
        ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
        ...(input.ExpressionType !== undefined &&
            input.ExpressionType !== null && { ExpressionType: input.ExpressionType }),
        ...(input.InputSerialization !== undefined &&
            input.InputSerialization !== null && {
            InputSerialization: serializeAws_restJson1InputSerialization(input.InputSerialization, context),
        }),
        ...(input.OutputSerialization !== undefined &&
            input.OutputSerialization !== null && {
            OutputSerialization: serializeAws_restJson1OutputSerialization(input.OutputSerialization, context),
        }),
    };
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
const serializeAws_restJson1TagMap = (input, context) => {
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
const serializeAws_restJson1VaultAccessPolicy = (input, context) => {
    return {
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    };
};
const serializeAws_restJson1VaultLockPolicy = (input, context) => {
    return {
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
    };
};
const serializeAws_restJson1VaultNotificationConfig = (input, context) => {
    return {
        ...(input.Events !== undefined &&
            input.Events !== null && { Events: serializeAws_restJson1NotificationEventList(input.Events, context) }),
        ...(input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic }),
    };
};
const deserializeAws_restJson1AccessControlPolicyList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Grant(entry, context);
    });
};
const deserializeAws_restJson1CSVInput = (output, context) => {
    return {
        Comments: output.Comments !== undefined && output.Comments !== null ? output.Comments : undefined,
        FieldDelimiter: output.FieldDelimiter !== undefined && output.FieldDelimiter !== null ? output.FieldDelimiter : undefined,
        FileHeaderInfo: output.FileHeaderInfo !== undefined && output.FileHeaderInfo !== null ? output.FileHeaderInfo : undefined,
        QuoteCharacter: output.QuoteCharacter !== undefined && output.QuoteCharacter !== null ? output.QuoteCharacter : undefined,
        QuoteEscapeCharacter: output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
            ? output.QuoteEscapeCharacter
            : undefined,
        RecordDelimiter: output.RecordDelimiter !== undefined && output.RecordDelimiter !== null ? output.RecordDelimiter : undefined,
    };
};
const deserializeAws_restJson1CSVOutput = (output, context) => {
    return {
        FieldDelimiter: output.FieldDelimiter !== undefined && output.FieldDelimiter !== null ? output.FieldDelimiter : undefined,
        QuoteCharacter: output.QuoteCharacter !== undefined && output.QuoteCharacter !== null ? output.QuoteCharacter : undefined,
        QuoteEscapeCharacter: output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
            ? output.QuoteEscapeCharacter
            : undefined,
        QuoteFields: output.QuoteFields !== undefined && output.QuoteFields !== null ? output.QuoteFields : undefined,
        RecordDelimiter: output.RecordDelimiter !== undefined && output.RecordDelimiter !== null ? output.RecordDelimiter : undefined,
    };
};
const deserializeAws_restJson1DataRetrievalPolicy = (output, context) => {
    return {
        Rules: output.Rules !== undefined && output.Rules !== null
            ? deserializeAws_restJson1DataRetrievalRulesList(output.Rules, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataRetrievalRule = (output, context) => {
    return {
        BytesPerHour: output.BytesPerHour !== undefined && output.BytesPerHour !== null ? output.BytesPerHour : undefined,
        Strategy: output.Strategy !== undefined && output.Strategy !== null ? output.Strategy : undefined,
    };
};
const deserializeAws_restJson1DataRetrievalRulesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataRetrievalRule(entry, context);
    });
};
const deserializeAws_restJson1DescribeVaultOutput = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        LastInventoryDate: output.LastInventoryDate !== undefined && output.LastInventoryDate !== null
            ? output.LastInventoryDate
            : undefined,
        NumberOfArchives: output.NumberOfArchives !== undefined && output.NumberOfArchives !== null ? output.NumberOfArchives : undefined,
        SizeInBytes: output.SizeInBytes !== undefined && output.SizeInBytes !== null ? output.SizeInBytes : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
        VaultName: output.VaultName !== undefined && output.VaultName !== null ? output.VaultName : undefined,
    };
};
const deserializeAws_restJson1Encryption = (output, context) => {
    return {
        EncryptionType: output.EncryptionType !== undefined && output.EncryptionType !== null ? output.EncryptionType : undefined,
        KMSContext: output.KMSContext !== undefined && output.KMSContext !== null ? output.KMSContext : undefined,
        KMSKeyId: output.KMSKeyId !== undefined && output.KMSKeyId !== null ? output.KMSKeyId : undefined,
    };
};
const deserializeAws_restJson1GlacierJobDescription = (output, context) => {
    return {
        Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
        ArchiveId: output.ArchiveId !== undefined && output.ArchiveId !== null ? output.ArchiveId : undefined,
        ArchiveSHA256TreeHash: output.ArchiveSHA256TreeHash !== undefined && output.ArchiveSHA256TreeHash !== null
            ? output.ArchiveSHA256TreeHash
            : undefined,
        ArchiveSizeInBytes: output.ArchiveSizeInBytes !== undefined && output.ArchiveSizeInBytes !== null
            ? output.ArchiveSizeInBytes
            : undefined,
        Completed: output.Completed !== undefined && output.Completed !== null ? output.Completed : undefined,
        CompletionDate: output.CompletionDate !== undefined && output.CompletionDate !== null ? output.CompletionDate : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        InventoryRetrievalParameters: output.InventoryRetrievalParameters !== undefined && output.InventoryRetrievalParameters !== null
            ? deserializeAws_restJson1InventoryRetrievalJobDescription(output.InventoryRetrievalParameters, context)
            : undefined,
        InventorySizeInBytes: output.InventorySizeInBytes !== undefined && output.InventorySizeInBytes !== null
            ? output.InventorySizeInBytes
            : undefined,
        JobDescription: output.JobDescription !== undefined && output.JobDescription !== null ? output.JobDescription : undefined,
        JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
        JobOutputPath: output.JobOutputPath !== undefined && output.JobOutputPath !== null ? output.JobOutputPath : undefined,
        OutputLocation: output.OutputLocation !== undefined && output.OutputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.OutputLocation, context)
            : undefined,
        RetrievalByteRange: output.RetrievalByteRange !== undefined && output.RetrievalByteRange !== null
            ? output.RetrievalByteRange
            : undefined,
        SHA256TreeHash: output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null ? output.SHA256TreeHash : undefined,
        SNSTopic: output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined,
        SelectParameters: output.SelectParameters !== undefined && output.SelectParameters !== null
            ? deserializeAws_restJson1SelectParameters(output.SelectParameters, context)
            : undefined,
        StatusCode: output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
        Tier: output.Tier !== undefined && output.Tier !== null ? output.Tier : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
    };
};
const deserializeAws_restJson1Grant = (output, context) => {
    return {
        Grantee: output.Grantee !== undefined && output.Grantee !== null
            ? deserializeAws_restJson1Grantee(output.Grantee, context)
            : undefined,
        Permission: output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined,
    };
};
const deserializeAws_restJson1Grantee = (output, context) => {
    return {
        DisplayName: output.DisplayName !== undefined && output.DisplayName !== null ? output.DisplayName : undefined,
        EmailAddress: output.EmailAddress !== undefined && output.EmailAddress !== null ? output.EmailAddress : undefined,
        ID: output.ID !== undefined && output.ID !== null ? output.ID : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined,
    };
};
const deserializeAws_restJson1hashmap = (output, context) => {
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
const deserializeAws_restJson1InputSerialization = (output, context) => {
    return {
        csv: output.csv !== undefined && output.csv !== null
            ? deserializeAws_restJson1CSVInput(output.csv, context)
            : undefined,
    };
};
const deserializeAws_restJson1InventoryRetrievalJobDescription = (output, context) => {
    return {
        EndDate: output.EndDate !== undefined && output.EndDate !== null ? output.EndDate : undefined,
        Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
        Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
        Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
    };
};
const deserializeAws_restJson1JobList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GlacierJobDescription(entry, context);
    });
};
const deserializeAws_restJson1NotificationEventList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1OutputLocation = (output, context) => {
    return {
        S3: output.S3 !== undefined && output.S3 !== null
            ? deserializeAws_restJson1S3Location(output.S3, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputSerialization = (output, context) => {
    return {
        csv: output.csv !== undefined && output.csv !== null
            ? deserializeAws_restJson1CSVOutput(output.csv, context)
            : undefined,
    };
};
const deserializeAws_restJson1PartList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PartListElement(entry, context);
    });
};
const deserializeAws_restJson1PartListElement = (output, context) => {
    return {
        RangeInBytes: output.RangeInBytes !== undefined && output.RangeInBytes !== null ? output.RangeInBytes : undefined,
        SHA256TreeHash: output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null ? output.SHA256TreeHash : undefined,
    };
};
const deserializeAws_restJson1ProvisionedCapacityDescription = (output, context) => {
    return {
        CapacityId: output.CapacityId !== undefined && output.CapacityId !== null ? output.CapacityId : undefined,
        ExpirationDate: output.ExpirationDate !== undefined && output.ExpirationDate !== null ? output.ExpirationDate : undefined,
        StartDate: output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined,
    };
};
const deserializeAws_restJson1ProvisionedCapacityList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProvisionedCapacityDescription(entry, context);
    });
};
const deserializeAws_restJson1S3Location = (output, context) => {
    return {
        AccessControlList: output.AccessControlList !== undefined && output.AccessControlList !== null
            ? deserializeAws_restJson1AccessControlPolicyList(output.AccessControlList, context)
            : undefined,
        BucketName: output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
        CannedACL: output.CannedACL !== undefined && output.CannedACL !== null ? output.CannedACL : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1Encryption(output.Encryption, context)
            : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
        StorageClass: output.StorageClass !== undefined && output.StorageClass !== null ? output.StorageClass : undefined,
        Tagging: output.Tagging !== undefined && output.Tagging !== null
            ? deserializeAws_restJson1hashmap(output.Tagging, context)
            : undefined,
        UserMetadata: output.UserMetadata !== undefined && output.UserMetadata !== null
            ? deserializeAws_restJson1hashmap(output.UserMetadata, context)
            : undefined,
    };
};
const deserializeAws_restJson1SelectParameters = (output, context) => {
    return {
        Expression: output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
        ExpressionType: output.ExpressionType !== undefined && output.ExpressionType !== null ? output.ExpressionType : undefined,
        InputSerialization: output.InputSerialization !== undefined && output.InputSerialization !== null
            ? deserializeAws_restJson1InputSerialization(output.InputSerialization, context)
            : undefined,
        OutputSerialization: output.OutputSerialization !== undefined && output.OutputSerialization !== null
            ? deserializeAws_restJson1OutputSerialization(output.OutputSerialization, context)
            : undefined,
    };
};
const deserializeAws_restJson1TagMap = (output, context) => {
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
const deserializeAws_restJson1UploadListElement = (output, context) => {
    return {
        ArchiveDescription: output.ArchiveDescription !== undefined && output.ArchiveDescription !== null
            ? output.ArchiveDescription
            : undefined,
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null ? output.CreationDate : undefined,
        MultipartUploadId: output.MultipartUploadId !== undefined && output.MultipartUploadId !== null
            ? output.MultipartUploadId
            : undefined,
        PartSizeInBytes: output.PartSizeInBytes !== undefined && output.PartSizeInBytes !== null ? output.PartSizeInBytes : undefined,
        VaultARN: output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
    };
};
const deserializeAws_restJson1UploadsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UploadListElement(entry, context);
    });
};
const deserializeAws_restJson1VaultAccessPolicy = (output, context) => {
    return {
        Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined,
    };
};
const deserializeAws_restJson1VaultList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DescribeVaultOutput(entry, context);
    });
};
const deserializeAws_restJson1VaultNotificationConfig = (output, context) => {
    return {
        Events: output.Events !== undefined && output.Events !== null
            ? deserializeAws_restJson1NotificationEventList(output.Events, context)
            : undefined,
        SNSTopic: output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined,
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