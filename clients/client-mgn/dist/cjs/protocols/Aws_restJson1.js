"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = exports.deserializeAws_restJson1UpdateReplicationConfigurationCommand = exports.deserializeAws_restJson1UpdateLaunchConfigurationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TerminateTargetInstancesCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartTestCommand = exports.deserializeAws_restJson1StartCutoverCommand = exports.deserializeAws_restJson1RetryDataReplicationCommand = exports.deserializeAws_restJson1MarkAsArchivedCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1InitializeServiceCommand = exports.deserializeAws_restJson1GetReplicationConfigurationCommand = exports.deserializeAws_restJson1GetLaunchConfigurationCommand = exports.deserializeAws_restJson1FinalizeCutoverCommand = exports.deserializeAws_restJson1DisconnectFromServiceCommand = exports.deserializeAws_restJson1DescribeSourceServersCommand = exports.deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = exports.deserializeAws_restJson1DescribeJobsCommand = exports.deserializeAws_restJson1DescribeJobLogItemsCommand = exports.deserializeAws_restJson1DeleteSourceServerCommand = exports.deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = exports.deserializeAws_restJson1DeleteJobCommand = exports.deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = exports.deserializeAws_restJson1ChangeServerLifeCycleStateCommand = exports.serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = exports.serializeAws_restJson1UpdateReplicationConfigurationCommand = exports.serializeAws_restJson1UpdateLaunchConfigurationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TerminateTargetInstancesCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartTestCommand = exports.serializeAws_restJson1StartCutoverCommand = exports.serializeAws_restJson1RetryDataReplicationCommand = exports.serializeAws_restJson1MarkAsArchivedCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1InitializeServiceCommand = exports.serializeAws_restJson1GetReplicationConfigurationCommand = exports.serializeAws_restJson1GetLaunchConfigurationCommand = exports.serializeAws_restJson1FinalizeCutoverCommand = exports.serializeAws_restJson1DisconnectFromServiceCommand = exports.serializeAws_restJson1DescribeSourceServersCommand = exports.serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = exports.serializeAws_restJson1DescribeJobsCommand = exports.serializeAws_restJson1DescribeJobLogItemsCommand = exports.serializeAws_restJson1DeleteSourceServerCommand = exports.serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = exports.serializeAws_restJson1DeleteJobCommand = exports.serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = exports.serializeAws_restJson1ChangeServerLifeCycleStateCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1ChangeServerLifeCycleStateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ChangeServerLifeCycleState";
    let body;
    body = JSON.stringify({
        ...(input.lifeCycle !== undefined &&
            input.lifeCycle !== null && {
            lifeCycle: serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle(input.lifeCycle, context),
        }),
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1ChangeServerLifeCycleStateCommand = serializeAws_restJson1ChangeServerLifeCycleStateCommand;
const serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateReplicationConfigurationTemplate";
    let body;
    body = JSON.stringify({
        ...(input.associateDefaultSecurityGroup !== undefined &&
            input.associateDefaultSecurityGroup !== null && {
            associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
        }),
        ...(input.bandwidthThrottling !== undefined &&
            input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
        ...(input.createPublicIP !== undefined &&
            input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
        ...(input.dataPlaneRouting !== undefined &&
            input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
        ...(input.defaultLargeStagingDiskType !== undefined &&
            input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
        ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
        ...(input.ebsEncryptionKeyArn !== undefined &&
            input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
        ...(input.replicationServerInstanceType !== undefined &&
            input.replicationServerInstanceType !== null && {
            replicationServerInstanceType: input.replicationServerInstanceType,
        }),
        ...(input.replicationServersSecurityGroupsIDs !== undefined &&
            input.replicationServersSecurityGroupsIDs !== null && {
            replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
        }),
        ...(input.stagingAreaSubnetId !== undefined &&
            input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
        ...(input.stagingAreaTags !== undefined &&
            input.stagingAreaTags !== null && {
            stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
        ...(input.useDedicatedReplicationServer !== undefined &&
            input.useDedicatedReplicationServer !== null && {
            useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
exports.serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = serializeAws_restJson1CreateReplicationConfigurationTemplateCommand;
const serializeAws_restJson1DeleteJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteJob";
    let body;
    body = JSON.stringify({
        ...(input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID }),
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
exports.serializeAws_restJson1DeleteJobCommand = serializeAws_restJson1DeleteJobCommand;
const serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteReplicationConfigurationTemplate";
    let body;
    body = JSON.stringify({
        ...(input.replicationConfigurationTemplateID !== undefined &&
            input.replicationConfigurationTemplateID !== null && {
            replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
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
exports.serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand;
const serializeAws_restJson1DeleteSourceServerCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DeleteSourceServer";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1DeleteSourceServerCommand = serializeAws_restJson1DeleteSourceServerCommand;
const serializeAws_restJson1DescribeJobLogItemsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeJobLogItems";
    let body;
    body = JSON.stringify({
        ...(input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID }),
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
exports.serializeAws_restJson1DescribeJobLogItemsCommand = serializeAws_restJson1DescribeJobLogItemsCommand;
const serializeAws_restJson1DescribeJobsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeJobs";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1DescribeJobsRequestFilters(input.filters, context) }),
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
exports.serializeAws_restJson1DescribeJobsCommand = serializeAws_restJson1DescribeJobsCommand;
const serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeReplicationConfigurationTemplates";
    let body;
    body = JSON.stringify({
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.replicationConfigurationTemplateIDs !== undefined &&
            input.replicationConfigurationTemplateIDs !== null && {
            replicationConfigurationTemplateIDs: serializeAws_restJson1ReplicationConfigurationTemplateIDs(input.replicationConfigurationTemplateIDs, context),
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
exports.serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand;
const serializeAws_restJson1DescribeSourceServersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DescribeSourceServers";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && {
            filters: serializeAws_restJson1DescribeSourceServersRequestFilters(input.filters, context),
        }),
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
exports.serializeAws_restJson1DescribeSourceServersCommand = serializeAws_restJson1DescribeSourceServersCommand;
const serializeAws_restJson1DisconnectFromServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/DisconnectFromService";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1DisconnectFromServiceCommand = serializeAws_restJson1DisconnectFromServiceCommand;
const serializeAws_restJson1FinalizeCutoverCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/FinalizeCutover";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1FinalizeCutoverCommand = serializeAws_restJson1FinalizeCutoverCommand;
const serializeAws_restJson1GetLaunchConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetLaunchConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1GetLaunchConfigurationCommand = serializeAws_restJson1GetLaunchConfigurationCommand;
const serializeAws_restJson1GetReplicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/GetReplicationConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1GetReplicationConfigurationCommand = serializeAws_restJson1GetReplicationConfigurationCommand;
const serializeAws_restJson1InitializeServiceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/InitializeService";
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
exports.serializeAws_restJson1InitializeServiceCommand = serializeAws_restJson1InitializeServiceCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
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
const serializeAws_restJson1MarkAsArchivedCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/MarkAsArchived";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1MarkAsArchivedCommand = serializeAws_restJson1MarkAsArchivedCommand;
const serializeAws_restJson1RetryDataReplicationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/RetryDataReplication";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
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
exports.serializeAws_restJson1RetryDataReplicationCommand = serializeAws_restJson1RetryDataReplicationCommand;
const serializeAws_restJson1StartCutoverCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/StartCutover";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerIDs !== undefined &&
            input.sourceServerIDs !== null && {
            sourceServerIDs: serializeAws_restJson1StartCutoverRequestSourceServerIDs(input.sourceServerIDs, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1StartCutoverCommand = serializeAws_restJson1StartCutoverCommand;
const serializeAws_restJson1StartTestCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/StartTest";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerIDs !== undefined &&
            input.sourceServerIDs !== null && {
            sourceServerIDs: serializeAws_restJson1StartTestRequestSourceServerIDs(input.sourceServerIDs, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1StartTestCommand = serializeAws_restJson1StartTestCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
const serializeAws_restJson1TerminateTargetInstancesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/TerminateTargetInstances";
    let body;
    body = JSON.stringify({
        ...(input.sourceServerIDs !== undefined &&
            input.sourceServerIDs !== null && {
            sourceServerIDs: serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs(input.sourceServerIDs, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1TerminateTargetInstancesCommand = serializeAws_restJson1TerminateTargetInstancesCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{resourceArn}";
    if (input.resourceArn !== undefined) {
        const labelValue = input.resourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: resourceArn.");
        }
        resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: resourceArn.");
    }
    const query = {
        ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateLaunchConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateLaunchConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.copyPrivateIp !== undefined && input.copyPrivateIp !== null && { copyPrivateIp: input.copyPrivateIp }),
        ...(input.copyTags !== undefined && input.copyTags !== null && { copyTags: input.copyTags }),
        ...(input.launchDisposition !== undefined &&
            input.launchDisposition !== null && { launchDisposition: input.launchDisposition }),
        ...(input.licensing !== undefined &&
            input.licensing !== null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
        ...(input.targetInstanceTypeRightSizingMethod !== undefined &&
            input.targetInstanceTypeRightSizingMethod !== null && {
            targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
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
exports.serializeAws_restJson1UpdateLaunchConfigurationCommand = serializeAws_restJson1UpdateLaunchConfigurationCommand;
const serializeAws_restJson1UpdateReplicationConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateReplicationConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.associateDefaultSecurityGroup !== undefined &&
            input.associateDefaultSecurityGroup !== null && {
            associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
        }),
        ...(input.bandwidthThrottling !== undefined &&
            input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
        ...(input.createPublicIP !== undefined &&
            input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
        ...(input.dataPlaneRouting !== undefined &&
            input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
        ...(input.defaultLargeStagingDiskType !== undefined &&
            input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
        ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
        ...(input.ebsEncryptionKeyArn !== undefined &&
            input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.replicatedDisks !== undefined &&
            input.replicatedDisks !== null && {
            replicatedDisks: serializeAws_restJson1ReplicationConfigurationReplicatedDisks(input.replicatedDisks, context),
        }),
        ...(input.replicationServerInstanceType !== undefined &&
            input.replicationServerInstanceType !== null && {
            replicationServerInstanceType: input.replicationServerInstanceType,
        }),
        ...(input.replicationServersSecurityGroupsIDs !== undefined &&
            input.replicationServersSecurityGroupsIDs !== null && {
            replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
        }),
        ...(input.sourceServerID !== undefined &&
            input.sourceServerID !== null && { sourceServerID: input.sourceServerID }),
        ...(input.stagingAreaSubnetId !== undefined &&
            input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
        ...(input.stagingAreaTags !== undefined &&
            input.stagingAreaTags !== null && {
            stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
        }),
        ...(input.useDedicatedReplicationServer !== undefined &&
            input.useDedicatedReplicationServer !== null && {
            useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
exports.serializeAws_restJson1UpdateReplicationConfigurationCommand = serializeAws_restJson1UpdateReplicationConfigurationCommand;
const serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateReplicationConfigurationTemplate";
    let body;
    body = JSON.stringify({
        ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
        ...(input.associateDefaultSecurityGroup !== undefined &&
            input.associateDefaultSecurityGroup !== null && {
            associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
        }),
        ...(input.bandwidthThrottling !== undefined &&
            input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling }),
        ...(input.createPublicIP !== undefined &&
            input.createPublicIP !== null && { createPublicIP: input.createPublicIP }),
        ...(input.dataPlaneRouting !== undefined &&
            input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting }),
        ...(input.defaultLargeStagingDiskType !== undefined &&
            input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType }),
        ...(input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption }),
        ...(input.ebsEncryptionKeyArn !== undefined &&
            input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn }),
        ...(input.replicationConfigurationTemplateID !== undefined &&
            input.replicationConfigurationTemplateID !== null && {
            replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
        }),
        ...(input.replicationServerInstanceType !== undefined &&
            input.replicationServerInstanceType !== null && {
            replicationServerInstanceType: input.replicationServerInstanceType,
        }),
        ...(input.replicationServersSecurityGroupsIDs !== undefined &&
            input.replicationServersSecurityGroupsIDs !== null && {
            replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
        }),
        ...(input.stagingAreaSubnetId !== undefined &&
            input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId }),
        ...(input.stagingAreaTags !== undefined &&
            input.stagingAreaTags !== null && {
            stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
        }),
        ...(input.useDedicatedReplicationServer !== undefined &&
            input.useDedicatedReplicationServer !== null && {
            useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
exports.serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand;
const deserializeAws_restJson1ChangeServerLifeCycleStateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ChangeServerLifeCycleStateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        dataReplicationInfo: undefined,
        isArchived: undefined,
        launchedInstance: undefined,
        lifeCycle: undefined,
        sourceProperties: undefined,
        sourceServerID: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
        contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
    }
    if (data.isArchived !== undefined && data.isArchived !== null) {
        contents.isArchived = data.isArchived;
    }
    if (data.launchedInstance !== undefined && data.launchedInstance !== null) {
        contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
    }
    if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
        contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
    }
    if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
        contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ChangeServerLifeCycleStateCommand = deserializeAws_restJson1ChangeServerLifeCycleStateCommand;
const deserializeAws_restJson1ChangeServerLifeCycleStateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        associateDefaultSecurityGroup: undefined,
        bandwidthThrottling: undefined,
        createPublicIP: undefined,
        dataPlaneRouting: undefined,
        defaultLargeStagingDiskType: undefined,
        ebsEncryption: undefined,
        ebsEncryptionKeyArn: undefined,
        replicationConfigurationTemplateID: undefined,
        replicationServerInstanceType: undefined,
        replicationServersSecurityGroupsIDs: undefined,
        stagingAreaSubnetId: undefined,
        stagingAreaTags: undefined,
        tags: undefined,
        useDedicatedReplicationServer: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
        contents.associateDefaultSecurityGroup = data.associateDefaultSecurityGroup;
    }
    if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
        contents.bandwidthThrottling = data.bandwidthThrottling;
    }
    if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
        contents.createPublicIP = data.createPublicIP;
    }
    if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
        contents.dataPlaneRouting = data.dataPlaneRouting;
    }
    if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
        contents.defaultLargeStagingDiskType = data.defaultLargeStagingDiskType;
    }
    if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
        contents.ebsEncryption = data.ebsEncryption;
    }
    if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
        contents.ebsEncryptionKeyArn = data.ebsEncryptionKeyArn;
    }
    if (data.replicationConfigurationTemplateID !== undefined && data.replicationConfigurationTemplateID !== null) {
        contents.replicationConfigurationTemplateID = data.replicationConfigurationTemplateID;
    }
    if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
        contents.replicationServerInstanceType = data.replicationServerInstanceType;
    }
    if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
        contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(data.replicationServersSecurityGroupsIDs, context);
    }
    if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
        contents.stagingAreaSubnetId = data.stagingAreaSubnetId;
    }
    if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
        contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
        contents.useDedicatedReplicationServer = data.useDedicatedReplicationServer;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand;
const deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1DeleteJobCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteJobCommand = deserializeAws_restJson1DeleteJobCommand;
const deserializeAws_restJson1DeleteJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand;
const deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteSourceServerCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSourceServerCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSourceServerCommand = deserializeAws_restJson1DeleteSourceServerCommand;
const deserializeAws_restJson1DeleteSourceServerCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeJobLogItemsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobLogItemsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1JobLogs(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobLogItemsCommand = deserializeAws_restJson1DescribeJobLogItemsCommand;
const deserializeAws_restJson1DescribeJobLogItemsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1DescribeJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1JobsList(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeJobsCommand = deserializeAws_restJson1DescribeJobsCommand;
const deserializeAws_restJson1DescribeJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1ReplicationConfigurationTemplates(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand;
const deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1DescribeSourceServersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSourceServersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        items: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.items !== undefined && data.items !== null) {
        contents.items = deserializeAws_restJson1SourceServersList(data.items, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSourceServersCommand = deserializeAws_restJson1DescribeSourceServersCommand;
const deserializeAws_restJson1DescribeSourceServersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1DisconnectFromServiceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisconnectFromServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        dataReplicationInfo: undefined,
        isArchived: undefined,
        launchedInstance: undefined,
        lifeCycle: undefined,
        sourceProperties: undefined,
        sourceServerID: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
        contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
    }
    if (data.isArchived !== undefined && data.isArchived !== null) {
        contents.isArchived = data.isArchived;
    }
    if (data.launchedInstance !== undefined && data.launchedInstance !== null) {
        contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
    }
    if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
        contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
    }
    if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
        contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisconnectFromServiceCommand = deserializeAws_restJson1DisconnectFromServiceCommand;
const deserializeAws_restJson1DisconnectFromServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1FinalizeCutoverCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1FinalizeCutoverCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        dataReplicationInfo: undefined,
        isArchived: undefined,
        launchedInstance: undefined,
        lifeCycle: undefined,
        sourceProperties: undefined,
        sourceServerID: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
        contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
    }
    if (data.isArchived !== undefined && data.isArchived !== null) {
        contents.isArchived = data.isArchived;
    }
    if (data.launchedInstance !== undefined && data.launchedInstance !== null) {
        contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
    }
    if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
        contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
    }
    if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
        contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FinalizeCutoverCommand = deserializeAws_restJson1FinalizeCutoverCommand;
const deserializeAws_restJson1FinalizeCutoverCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1GetLaunchConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLaunchConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        copyPrivateIp: undefined,
        copyTags: undefined,
        ec2LaunchTemplateID: undefined,
        launchDisposition: undefined,
        licensing: undefined,
        name: undefined,
        sourceServerID: undefined,
        targetInstanceTypeRightSizingMethod: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.copyPrivateIp !== undefined && data.copyPrivateIp !== null) {
        contents.copyPrivateIp = data.copyPrivateIp;
    }
    if (data.copyTags !== undefined && data.copyTags !== null) {
        contents.copyTags = data.copyTags;
    }
    if (data.ec2LaunchTemplateID !== undefined && data.ec2LaunchTemplateID !== null) {
        contents.ec2LaunchTemplateID = data.ec2LaunchTemplateID;
    }
    if (data.launchDisposition !== undefined && data.launchDisposition !== null) {
        contents.launchDisposition = data.launchDisposition;
    }
    if (data.licensing !== undefined && data.licensing !== null) {
        contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.targetInstanceTypeRightSizingMethod !== undefined && data.targetInstanceTypeRightSizingMethod !== null) {
        contents.targetInstanceTypeRightSizingMethod = data.targetInstanceTypeRightSizingMethod;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLaunchConfigurationCommand = deserializeAws_restJson1GetLaunchConfigurationCommand;
const deserializeAws_restJson1GetLaunchConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1GetReplicationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetReplicationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        associateDefaultSecurityGroup: undefined,
        bandwidthThrottling: undefined,
        createPublicIP: undefined,
        dataPlaneRouting: undefined,
        defaultLargeStagingDiskType: undefined,
        ebsEncryption: undefined,
        ebsEncryptionKeyArn: undefined,
        name: undefined,
        replicatedDisks: undefined,
        replicationServerInstanceType: undefined,
        replicationServersSecurityGroupsIDs: undefined,
        sourceServerID: undefined,
        stagingAreaSubnetId: undefined,
        stagingAreaTags: undefined,
        useDedicatedReplicationServer: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
        contents.associateDefaultSecurityGroup = data.associateDefaultSecurityGroup;
    }
    if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
        contents.bandwidthThrottling = data.bandwidthThrottling;
    }
    if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
        contents.createPublicIP = data.createPublicIP;
    }
    if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
        contents.dataPlaneRouting = data.dataPlaneRouting;
    }
    if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
        contents.defaultLargeStagingDiskType = data.defaultLargeStagingDiskType;
    }
    if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
        contents.ebsEncryption = data.ebsEncryption;
    }
    if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
        contents.ebsEncryptionKeyArn = data.ebsEncryptionKeyArn;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.replicatedDisks !== undefined && data.replicatedDisks !== null) {
        contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(data.replicatedDisks, context);
    }
    if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
        contents.replicationServerInstanceType = data.replicationServerInstanceType;
    }
    if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
        contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(data.replicationServersSecurityGroupsIDs, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
        contents.stagingAreaSubnetId = data.stagingAreaSubnetId;
    }
    if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
        contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
    }
    if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
        contents.useDedicatedReplicationServer = data.useDedicatedReplicationServer;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetReplicationConfigurationCommand = deserializeAws_restJson1GetReplicationConfigurationCommand;
const deserializeAws_restJson1GetReplicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1InitializeServiceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1InitializeServiceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1InitializeServiceCommand = deserializeAws_restJson1InitializeServiceCommand;
const deserializeAws_restJson1InitializeServiceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.mgn#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1ListTagsForResourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
        case "com.amazonaws.mgn#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.mgn#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.mgn#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1MarkAsArchivedCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1MarkAsArchivedCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        dataReplicationInfo: undefined,
        isArchived: undefined,
        launchedInstance: undefined,
        lifeCycle: undefined,
        sourceProperties: undefined,
        sourceServerID: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
        contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
    }
    if (data.isArchived !== undefined && data.isArchived !== null) {
        contents.isArchived = data.isArchived;
    }
    if (data.launchedInstance !== undefined && data.launchedInstance !== null) {
        contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
    }
    if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
        contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
    }
    if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
        contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1MarkAsArchivedCommand = deserializeAws_restJson1MarkAsArchivedCommand;
const deserializeAws_restJson1MarkAsArchivedCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1RetryDataReplicationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RetryDataReplicationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        dataReplicationInfo: undefined,
        isArchived: undefined,
        launchedInstance: undefined,
        lifeCycle: undefined,
        sourceProperties: undefined,
        sourceServerID: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.dataReplicationInfo !== undefined && data.dataReplicationInfo !== null) {
        contents.dataReplicationInfo = deserializeAws_restJson1DataReplicationInfo(data.dataReplicationInfo, context);
    }
    if (data.isArchived !== undefined && data.isArchived !== null) {
        contents.isArchived = data.isArchived;
    }
    if (data.launchedInstance !== undefined && data.launchedInstance !== null) {
        contents.launchedInstance = deserializeAws_restJson1LaunchedInstance(data.launchedInstance, context);
    }
    if (data.lifeCycle !== undefined && data.lifeCycle !== null) {
        contents.lifeCycle = deserializeAws_restJson1LifeCycle(data.lifeCycle, context);
    }
    if (data.sourceProperties !== undefined && data.sourceProperties !== null) {
        contents.sourceProperties = deserializeAws_restJson1SourceProperties(data.sourceProperties, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RetryDataReplicationCommand = deserializeAws_restJson1RetryDataReplicationCommand;
const deserializeAws_restJson1RetryDataReplicationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1StartCutoverCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartCutoverCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.job !== undefined && data.job !== null) {
        contents.job = deserializeAws_restJson1Job(data.job, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartCutoverCommand = deserializeAws_restJson1StartCutoverCommand;
const deserializeAws_restJson1StartCutoverCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1StartTestCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartTestCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.job !== undefined && data.job !== null) {
        contents.job = deserializeAws_restJson1Job(data.job, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartTestCommand = deserializeAws_restJson1StartTestCommand;
const deserializeAws_restJson1StartTestCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.mgn#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.mgn#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.mgn#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1TerminateTargetInstancesCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1TerminateTargetInstancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        job: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.job !== undefined && data.job !== null) {
        contents.job = deserializeAws_restJson1Job(data.job, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1TerminateTargetInstancesCommand = deserializeAws_restJson1TerminateTargetInstancesCommand;
const deserializeAws_restJson1TerminateTargetInstancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.mgn#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.mgn#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.mgn#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1UpdateLaunchConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLaunchConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        copyPrivateIp: undefined,
        copyTags: undefined,
        ec2LaunchTemplateID: undefined,
        launchDisposition: undefined,
        licensing: undefined,
        name: undefined,
        sourceServerID: undefined,
        targetInstanceTypeRightSizingMethod: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.copyPrivateIp !== undefined && data.copyPrivateIp !== null) {
        contents.copyPrivateIp = data.copyPrivateIp;
    }
    if (data.copyTags !== undefined && data.copyTags !== null) {
        contents.copyTags = data.copyTags;
    }
    if (data.ec2LaunchTemplateID !== undefined && data.ec2LaunchTemplateID !== null) {
        contents.ec2LaunchTemplateID = data.ec2LaunchTemplateID;
    }
    if (data.launchDisposition !== undefined && data.launchDisposition !== null) {
        contents.launchDisposition = data.launchDisposition;
    }
    if (data.licensing !== undefined && data.licensing !== null) {
        contents.licensing = deserializeAws_restJson1Licensing(data.licensing, context);
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.targetInstanceTypeRightSizingMethod !== undefined && data.targetInstanceTypeRightSizingMethod !== null) {
        contents.targetInstanceTypeRightSizingMethod = data.targetInstanceTypeRightSizingMethod;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLaunchConfigurationCommand = deserializeAws_restJson1UpdateLaunchConfigurationCommand;
const deserializeAws_restJson1UpdateLaunchConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1UpdateReplicationConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateReplicationConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        associateDefaultSecurityGroup: undefined,
        bandwidthThrottling: undefined,
        createPublicIP: undefined,
        dataPlaneRouting: undefined,
        defaultLargeStagingDiskType: undefined,
        ebsEncryption: undefined,
        ebsEncryptionKeyArn: undefined,
        name: undefined,
        replicatedDisks: undefined,
        replicationServerInstanceType: undefined,
        replicationServersSecurityGroupsIDs: undefined,
        sourceServerID: undefined,
        stagingAreaSubnetId: undefined,
        stagingAreaTags: undefined,
        useDedicatedReplicationServer: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
        contents.associateDefaultSecurityGroup = data.associateDefaultSecurityGroup;
    }
    if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
        contents.bandwidthThrottling = data.bandwidthThrottling;
    }
    if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
        contents.createPublicIP = data.createPublicIP;
    }
    if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
        contents.dataPlaneRouting = data.dataPlaneRouting;
    }
    if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
        contents.defaultLargeStagingDiskType = data.defaultLargeStagingDiskType;
    }
    if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
        contents.ebsEncryption = data.ebsEncryption;
    }
    if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
        contents.ebsEncryptionKeyArn = data.ebsEncryptionKeyArn;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.replicatedDisks !== undefined && data.replicatedDisks !== null) {
        contents.replicatedDisks = deserializeAws_restJson1ReplicationConfigurationReplicatedDisks(data.replicatedDisks, context);
    }
    if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
        contents.replicationServerInstanceType = data.replicationServerInstanceType;
    }
    if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
        contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(data.replicationServersSecurityGroupsIDs, context);
    }
    if (data.sourceServerID !== undefined && data.sourceServerID !== null) {
        contents.sourceServerID = data.sourceServerID;
    }
    if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
        contents.stagingAreaSubnetId = data.stagingAreaSubnetId;
    }
    if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
        contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
    }
    if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
        contents.useDedicatedReplicationServer = data.useDedicatedReplicationServer;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateReplicationConfigurationCommand = deserializeAws_restJson1UpdateReplicationConfigurationCommand;
const deserializeAws_restJson1UpdateReplicationConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.mgn#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        associateDefaultSecurityGroup: undefined,
        bandwidthThrottling: undefined,
        createPublicIP: undefined,
        dataPlaneRouting: undefined,
        defaultLargeStagingDiskType: undefined,
        ebsEncryption: undefined,
        ebsEncryptionKeyArn: undefined,
        replicationConfigurationTemplateID: undefined,
        replicationServerInstanceType: undefined,
        replicationServersSecurityGroupsIDs: undefined,
        stagingAreaSubnetId: undefined,
        stagingAreaTags: undefined,
        tags: undefined,
        useDedicatedReplicationServer: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.associateDefaultSecurityGroup !== undefined && data.associateDefaultSecurityGroup !== null) {
        contents.associateDefaultSecurityGroup = data.associateDefaultSecurityGroup;
    }
    if (data.bandwidthThrottling !== undefined && data.bandwidthThrottling !== null) {
        contents.bandwidthThrottling = data.bandwidthThrottling;
    }
    if (data.createPublicIP !== undefined && data.createPublicIP !== null) {
        contents.createPublicIP = data.createPublicIP;
    }
    if (data.dataPlaneRouting !== undefined && data.dataPlaneRouting !== null) {
        contents.dataPlaneRouting = data.dataPlaneRouting;
    }
    if (data.defaultLargeStagingDiskType !== undefined && data.defaultLargeStagingDiskType !== null) {
        contents.defaultLargeStagingDiskType = data.defaultLargeStagingDiskType;
    }
    if (data.ebsEncryption !== undefined && data.ebsEncryption !== null) {
        contents.ebsEncryption = data.ebsEncryption;
    }
    if (data.ebsEncryptionKeyArn !== undefined && data.ebsEncryptionKeyArn !== null) {
        contents.ebsEncryptionKeyArn = data.ebsEncryptionKeyArn;
    }
    if (data.replicationConfigurationTemplateID !== undefined && data.replicationConfigurationTemplateID !== null) {
        contents.replicationConfigurationTemplateID = data.replicationConfigurationTemplateID;
    }
    if (data.replicationServerInstanceType !== undefined && data.replicationServerInstanceType !== null) {
        contents.replicationServerInstanceType = data.replicationServerInstanceType;
    }
    if (data.replicationServersSecurityGroupsIDs !== undefined && data.replicationServersSecurityGroupsIDs !== null) {
        contents.replicationServersSecurityGroupsIDs = deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(data.replicationServersSecurityGroupsIDs, context);
    }
    if (data.stagingAreaSubnetId !== undefined && data.stagingAreaSubnetId !== null) {
        contents.stagingAreaSubnetId = data.stagingAreaSubnetId;
    }
    if (data.stagingAreaTags !== undefined && data.stagingAreaTags !== null) {
        contents.stagingAreaTags = deserializeAws_restJson1TagsMap(data.stagingAreaTags, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    if (data.useDedicatedReplicationServer !== undefined && data.useDedicatedReplicationServer !== null) {
        contents.useDedicatedReplicationServer = data.useDedicatedReplicationServer;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand;
const deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ResourceNotFoundException":
        case "com.amazonaws.mgn#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UninitializedAccountException":
        case "com.amazonaws.mgn#UninitializedAccountException":
            response = {
                ...(await deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.mgn#ValidationException":
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AccessDeniedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        retryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
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
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        quotaCode: undefined,
        retryAfterSeconds: undefined,
        serviceCode: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
    }
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.quotaCode !== undefined && data.quotaCode !== null) {
        contents.quotaCode = data.quotaCode;
    }
    if (data.serviceCode !== undefined && data.serviceCode !== null) {
        contents.serviceCode = data.serviceCode;
    }
    return contents;
};
const deserializeAws_restJson1UninitializedAccountExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UninitializedAccountException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        fieldList: undefined,
        message: undefined,
        reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.fieldList !== undefined && data.fieldList !== null) {
        contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.reason = data.reason;
    }
    return contents;
};
const serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle = (input, context) => {
    return {
        ...(input.state !== undefined && input.state !== null && { state: input.state }),
    };
};
const serializeAws_restJson1DescribeJobsRequestFilters = (input, context) => {
    return {
        ...(input.fromDate !== undefined && input.fromDate !== null && { fromDate: input.fromDate }),
        ...(input.jobIDs !== undefined &&
            input.jobIDs !== null && {
            jobIDs: serializeAws_restJson1DescribeJobsRequestFiltersJobIDs(input.jobIDs, context),
        }),
        ...(input.toDate !== undefined && input.toDate !== null && { toDate: input.toDate }),
    };
};
const serializeAws_restJson1DescribeJobsRequestFiltersJobIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DescribeSourceServersRequestFilters = (input, context) => {
    return {
        ...(input.isArchived !== undefined && input.isArchived !== null && { isArchived: input.isArchived }),
        ...(input.sourceServerIDs !== undefined &&
            input.sourceServerIDs !== null && {
            sourceServerIDs: serializeAws_restJson1DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
        }),
    };
};
const serializeAws_restJson1DescribeSourceServersRequestFiltersIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Licensing = (input, context) => {
    return {
        ...(input.osByol !== undefined && input.osByol !== null && { osByol: input.osByol }),
    };
};
const serializeAws_restJson1ReplicationConfigurationReplicatedDisk = (input, context) => {
    return {
        ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
        ...(input.iops !== undefined && input.iops !== null && { iops: input.iops }),
        ...(input.isBootDisk !== undefined && input.isBootDisk !== null && { isBootDisk: input.isBootDisk }),
        ...(input.stagingDiskType !== undefined &&
            input.stagingDiskType !== null && { stagingDiskType: input.stagingDiskType }),
    };
};
const serializeAws_restJson1ReplicationConfigurationReplicatedDisks = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};
const serializeAws_restJson1ReplicationConfigurationTemplateIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ReplicationServersSecurityGroupsIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StartCutoverRequestSourceServerIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StartTestRequestSourceServerIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagsMap = (input, context) => {
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
const serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1CPU = (output, context) => {
    return {
        cores: output.cores !== undefined && output.cores !== null ? output.cores : undefined,
        modelName: output.modelName !== undefined && output.modelName !== null ? output.modelName : undefined,
    };
};
const deserializeAws_restJson1Cpus = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CPU(entry, context);
    });
};
const deserializeAws_restJson1DataReplicationError = (output, context) => {
    return {
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        rawError: output.rawError !== undefined && output.rawError !== null ? output.rawError : undefined,
    };
};
const deserializeAws_restJson1DataReplicationInfo = (output, context) => {
    return {
        dataReplicationError: output.dataReplicationError !== undefined && output.dataReplicationError !== null
            ? deserializeAws_restJson1DataReplicationError(output.dataReplicationError, context)
            : undefined,
        dataReplicationInitiation: output.dataReplicationInitiation !== undefined && output.dataReplicationInitiation !== null
            ? deserializeAws_restJson1DataReplicationInitiation(output.dataReplicationInitiation, context)
            : undefined,
        dataReplicationState: output.dataReplicationState !== undefined && output.dataReplicationState !== null
            ? output.dataReplicationState
            : undefined,
        etaDateTime: output.etaDateTime !== undefined && output.etaDateTime !== null ? output.etaDateTime : undefined,
        lagDuration: output.lagDuration !== undefined && output.lagDuration !== null ? output.lagDuration : undefined,
        replicatedDisks: output.replicatedDisks !== undefined && output.replicatedDisks !== null
            ? deserializeAws_restJson1DataReplicationInfoReplicatedDisks(output.replicatedDisks, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataReplicationInfoReplicatedDisk = (output, context) => {
    return {
        backloggedStorageBytes: output.backloggedStorageBytes !== undefined && output.backloggedStorageBytes !== null
            ? output.backloggedStorageBytes
            : undefined,
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        replicatedStorageBytes: output.replicatedStorageBytes !== undefined && output.replicatedStorageBytes !== null
            ? output.replicatedStorageBytes
            : undefined,
        rescannedStorageBytes: output.rescannedStorageBytes !== undefined && output.rescannedStorageBytes !== null
            ? output.rescannedStorageBytes
            : undefined,
        totalStorageBytes: output.totalStorageBytes !== undefined && output.totalStorageBytes !== null
            ? output.totalStorageBytes
            : undefined,
    };
};
const deserializeAws_restJson1DataReplicationInfoReplicatedDisks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataReplicationInfoReplicatedDisk(entry, context);
    });
};
const deserializeAws_restJson1DataReplicationInitiation = (output, context) => {
    return {
        nextAttemptDateTime: output.nextAttemptDateTime !== undefined && output.nextAttemptDateTime !== null
            ? output.nextAttemptDateTime
            : undefined,
        startDateTime: output.startDateTime !== undefined && output.startDateTime !== null ? output.startDateTime : undefined,
        steps: output.steps !== undefined && output.steps !== null
            ? deserializeAws_restJson1DataReplicationInitiationSteps(output.steps, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataReplicationInitiationStep = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DataReplicationInitiationSteps = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataReplicationInitiationStep(entry, context);
    });
};
const deserializeAws_restJson1Disk = (output, context) => {
    return {
        bytes: output.bytes !== undefined && output.bytes !== null ? output.bytes : undefined,
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
    };
};
const deserializeAws_restJson1Disks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Disk(entry, context);
    });
};
const deserializeAws_restJson1IdentificationHints = (output, context) => {
    return {
        awsInstanceID: output.awsInstanceID !== undefined && output.awsInstanceID !== null ? output.awsInstanceID : undefined,
        fqdn: output.fqdn !== undefined && output.fqdn !== null ? output.fqdn : undefined,
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        vmWareUuid: output.vmWareUuid !== undefined && output.vmWareUuid !== null ? output.vmWareUuid : undefined,
    };
};
const deserializeAws_restJson1IPsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Job = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationDateTime: output.creationDateTime !== undefined && output.creationDateTime !== null ? output.creationDateTime : undefined,
        endDateTime: output.endDateTime !== undefined && output.endDateTime !== null ? output.endDateTime : undefined,
        initiatedBy: output.initiatedBy !== undefined && output.initiatedBy !== null ? output.initiatedBy : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
        participatingServers: output.participatingServers !== undefined && output.participatingServers !== null
            ? deserializeAws_restJson1ParticipatingServers(output.participatingServers, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagsMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1JobLog = (output, context) => {
    return {
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        eventData: output.eventData !== undefined && output.eventData !== null
            ? deserializeAws_restJson1JobLogEventData(output.eventData, context)
            : undefined,
        logDateTime: output.logDateTime !== undefined && output.logDateTime !== null ? output.logDateTime : undefined,
    };
};
const deserializeAws_restJson1JobLogEventData = (output, context) => {
    return {
        conversionServerID: output.conversionServerID !== undefined && output.conversionServerID !== null
            ? output.conversionServerID
            : undefined,
        rawError: output.rawError !== undefined && output.rawError !== null ? output.rawError : undefined,
        sourceServerID: output.sourceServerID !== undefined && output.sourceServerID !== null ? output.sourceServerID : undefined,
        targetInstanceID: output.targetInstanceID !== undefined && output.targetInstanceID !== null ? output.targetInstanceID : undefined,
    };
};
const deserializeAws_restJson1JobLogs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobLog(entry, context);
    });
};
const deserializeAws_restJson1JobsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
const deserializeAws_restJson1LaunchedInstance = (output, context) => {
    return {
        ec2InstanceID: output.ec2InstanceID !== undefined && output.ec2InstanceID !== null ? output.ec2InstanceID : undefined,
        firstBoot: output.firstBoot !== undefined && output.firstBoot !== null ? output.firstBoot : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
const deserializeAws_restJson1Licensing = (output, context) => {
    return {
        osByol: output.osByol !== undefined && output.osByol !== null ? output.osByol : undefined,
    };
};
const deserializeAws_restJson1LifeCycle = (output, context) => {
    return {
        addedToServiceDateTime: output.addedToServiceDateTime !== undefined && output.addedToServiceDateTime !== null
            ? output.addedToServiceDateTime
            : undefined,
        elapsedReplicationDuration: output.elapsedReplicationDuration !== undefined && output.elapsedReplicationDuration !== null
            ? output.elapsedReplicationDuration
            : undefined,
        firstByteDateTime: output.firstByteDateTime !== undefined && output.firstByteDateTime !== null
            ? output.firstByteDateTime
            : undefined,
        lastCutover: output.lastCutover !== undefined && output.lastCutover !== null
            ? deserializeAws_restJson1LifeCycleLastCutover(output.lastCutover, context)
            : undefined,
        lastSeenByServiceDateTime: output.lastSeenByServiceDateTime !== undefined && output.lastSeenByServiceDateTime !== null
            ? output.lastSeenByServiceDateTime
            : undefined,
        lastTest: output.lastTest !== undefined && output.lastTest !== null
            ? deserializeAws_restJson1LifeCycleLastTest(output.lastTest, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastCutover = (output, context) => {
    return {
        finalized: output.finalized !== undefined && output.finalized !== null
            ? deserializeAws_restJson1LifeCycleLastCutoverFinalized(output.finalized, context)
            : undefined,
        initiated: output.initiated !== undefined && output.initiated !== null
            ? deserializeAws_restJson1LifeCycleLastCutoverInitiated(output.initiated, context)
            : undefined,
        reverted: output.reverted !== undefined && output.reverted !== null
            ? deserializeAws_restJson1LifeCycleLastCutoverReverted(output.reverted, context)
            : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastCutoverFinalized = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastCutoverInitiated = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastCutoverReverted = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastTest = (output, context) => {
    return {
        finalized: output.finalized !== undefined && output.finalized !== null
            ? deserializeAws_restJson1LifeCycleLastTestFinalized(output.finalized, context)
            : undefined,
        initiated: output.initiated !== undefined && output.initiated !== null
            ? deserializeAws_restJson1LifeCycleLastTestInitiated(output.initiated, context)
            : undefined,
        reverted: output.reverted !== undefined && output.reverted !== null
            ? deserializeAws_restJson1LifeCycleLastTestReverted(output.reverted, context)
            : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastTestFinalized = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastTestInitiated = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
const deserializeAws_restJson1LifeCycleLastTestReverted = (output, context) => {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
const deserializeAws_restJson1NetworkInterface = (output, context) => {
    return {
        ips: output.ips !== undefined && output.ips !== null
            ? deserializeAws_restJson1IPsList(output.ips, context)
            : undefined,
        isPrimary: output.isPrimary !== undefined && output.isPrimary !== null ? output.isPrimary : undefined,
        macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
    };
};
const deserializeAws_restJson1NetworkInterfaces = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
const deserializeAws_restJson1OS = (output, context) => {
    return {
        fullString: output.fullString !== undefined && output.fullString !== null ? output.fullString : undefined,
    };
};
const deserializeAws_restJson1ParticipatingServer = (output, context) => {
    return {
        launchStatus: output.launchStatus !== undefined && output.launchStatus !== null ? output.launchStatus : undefined,
        sourceServerID: output.sourceServerID !== undefined && output.sourceServerID !== null ? output.sourceServerID : undefined,
    };
};
const deserializeAws_restJson1ParticipatingServers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ParticipatingServer(entry, context);
    });
};
const deserializeAws_restJson1ReplicationConfigurationReplicatedDisk = (output, context) => {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        iops: output.iops !== undefined && output.iops !== null ? output.iops : undefined,
        isBootDisk: output.isBootDisk !== undefined && output.isBootDisk !== null ? output.isBootDisk : undefined,
        stagingDiskType: output.stagingDiskType !== undefined && output.stagingDiskType !== null ? output.stagingDiskType : undefined,
    };
};
const deserializeAws_restJson1ReplicationConfigurationReplicatedDisks = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};
const deserializeAws_restJson1ReplicationConfigurationTemplate = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        associateDefaultSecurityGroup: output.associateDefaultSecurityGroup !== undefined && output.associateDefaultSecurityGroup !== null
            ? output.associateDefaultSecurityGroup
            : undefined,
        bandwidthThrottling: output.bandwidthThrottling !== undefined && output.bandwidthThrottling !== null
            ? output.bandwidthThrottling
            : undefined,
        createPublicIP: output.createPublicIP !== undefined && output.createPublicIP !== null ? output.createPublicIP : undefined,
        dataPlaneRouting: output.dataPlaneRouting !== undefined && output.dataPlaneRouting !== null ? output.dataPlaneRouting : undefined,
        defaultLargeStagingDiskType: output.defaultLargeStagingDiskType !== undefined && output.defaultLargeStagingDiskType !== null
            ? output.defaultLargeStagingDiskType
            : undefined,
        ebsEncryption: output.ebsEncryption !== undefined && output.ebsEncryption !== null ? output.ebsEncryption : undefined,
        ebsEncryptionKeyArn: output.ebsEncryptionKeyArn !== undefined && output.ebsEncryptionKeyArn !== null
            ? output.ebsEncryptionKeyArn
            : undefined,
        replicationConfigurationTemplateID: output.replicationConfigurationTemplateID !== undefined && output.replicationConfigurationTemplateID !== null
            ? output.replicationConfigurationTemplateID
            : undefined,
        replicationServerInstanceType: output.replicationServerInstanceType !== undefined && output.replicationServerInstanceType !== null
            ? output.replicationServerInstanceType
            : undefined,
        replicationServersSecurityGroupsIDs: output.replicationServersSecurityGroupsIDs !== undefined && output.replicationServersSecurityGroupsIDs !== null
            ? deserializeAws_restJson1ReplicationServersSecurityGroupsIDs(output.replicationServersSecurityGroupsIDs, context)
            : undefined,
        stagingAreaSubnetId: output.stagingAreaSubnetId !== undefined && output.stagingAreaSubnetId !== null
            ? output.stagingAreaSubnetId
            : undefined,
        stagingAreaTags: output.stagingAreaTags !== undefined && output.stagingAreaTags !== null
            ? deserializeAws_restJson1TagsMap(output.stagingAreaTags, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagsMap(output.tags, context)
            : undefined,
        useDedicatedReplicationServer: output.useDedicatedReplicationServer !== undefined && output.useDedicatedReplicationServer !== null
            ? output.useDedicatedReplicationServer
            : undefined,
    };
};
const deserializeAws_restJson1ReplicationConfigurationTemplates = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReplicationConfigurationTemplate(entry, context);
    });
};
const deserializeAws_restJson1ReplicationServersSecurityGroupsIDs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SourceProperties = (output, context) => {
    return {
        cpus: output.cpus !== undefined && output.cpus !== null
            ? deserializeAws_restJson1Cpus(output.cpus, context)
            : undefined,
        disks: output.disks !== undefined && output.disks !== null
            ? deserializeAws_restJson1Disks(output.disks, context)
            : undefined,
        identificationHints: output.identificationHints !== undefined && output.identificationHints !== null
            ? deserializeAws_restJson1IdentificationHints(output.identificationHints, context)
            : undefined,
        lastUpdatedDateTime: output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
            ? output.lastUpdatedDateTime
            : undefined,
        networkInterfaces: output.networkInterfaces !== undefined && output.networkInterfaces !== null
            ? deserializeAws_restJson1NetworkInterfaces(output.networkInterfaces, context)
            : undefined,
        os: output.os !== undefined && output.os !== null ? deserializeAws_restJson1OS(output.os, context) : undefined,
        ramBytes: output.ramBytes !== undefined && output.ramBytes !== null ? output.ramBytes : undefined,
        recommendedInstanceType: output.recommendedInstanceType !== undefined && output.recommendedInstanceType !== null
            ? output.recommendedInstanceType
            : undefined,
    };
};
const deserializeAws_restJson1SourceServer = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dataReplicationInfo: output.dataReplicationInfo !== undefined && output.dataReplicationInfo !== null
            ? deserializeAws_restJson1DataReplicationInfo(output.dataReplicationInfo, context)
            : undefined,
        isArchived: output.isArchived !== undefined && output.isArchived !== null ? output.isArchived : undefined,
        launchedInstance: output.launchedInstance !== undefined && output.launchedInstance !== null
            ? deserializeAws_restJson1LaunchedInstance(output.launchedInstance, context)
            : undefined,
        lifeCycle: output.lifeCycle !== undefined && output.lifeCycle !== null
            ? deserializeAws_restJson1LifeCycle(output.lifeCycle, context)
            : undefined,
        sourceProperties: output.sourceProperties !== undefined && output.sourceProperties !== null
            ? deserializeAws_restJson1SourceProperties(output.sourceProperties, context)
            : undefined,
        sourceServerID: output.sourceServerID !== undefined && output.sourceServerID !== null ? output.sourceServerID : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagsMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SourceServersList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceServer(entry, context);
    });
};
const deserializeAws_restJson1TagsMap = (output, context) => {
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
const deserializeAws_restJson1ValidationExceptionField = (output, context) => {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ValidationExceptionFieldList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
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