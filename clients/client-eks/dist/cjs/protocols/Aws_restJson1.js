"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = exports.deserializeAws_restJson1DescribeUpdateCommand = exports.deserializeAws_restJson1DescribeNodegroupCommand = exports.deserializeAws_restJson1DescribeIdentityProviderConfigCommand = exports.deserializeAws_restJson1DescribeFargateProfileCommand = exports.deserializeAws_restJson1DescribeClusterCommand = exports.deserializeAws_restJson1DescribeAddonVersionsCommand = exports.deserializeAws_restJson1DescribeAddonCommand = exports.deserializeAws_restJson1DeleteNodegroupCommand = exports.deserializeAws_restJson1DeleteFargateProfileCommand = exports.deserializeAws_restJson1DeleteClusterCommand = exports.deserializeAws_restJson1DeleteAddonCommand = exports.deserializeAws_restJson1CreateNodegroupCommand = exports.deserializeAws_restJson1CreateFargateProfileCommand = exports.deserializeAws_restJson1CreateClusterCommand = exports.deserializeAws_restJson1CreateAddonCommand = exports.deserializeAws_restJson1AssociateIdentityProviderConfigCommand = exports.deserializeAws_restJson1AssociateEncryptionConfigCommand = exports.serializeAws_restJson1UpdateNodegroupVersionCommand = exports.serializeAws_restJson1UpdateNodegroupConfigCommand = exports.serializeAws_restJson1UpdateClusterVersionCommand = exports.serializeAws_restJson1UpdateClusterConfigCommand = exports.serializeAws_restJson1UpdateAddonCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ListUpdatesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListNodegroupsCommand = exports.serializeAws_restJson1ListIdentityProviderConfigsCommand = exports.serializeAws_restJson1ListFargateProfilesCommand = exports.serializeAws_restJson1ListClustersCommand = exports.serializeAws_restJson1ListAddonsCommand = exports.serializeAws_restJson1DisassociateIdentityProviderConfigCommand = exports.serializeAws_restJson1DescribeUpdateCommand = exports.serializeAws_restJson1DescribeNodegroupCommand = exports.serializeAws_restJson1DescribeIdentityProviderConfigCommand = exports.serializeAws_restJson1DescribeFargateProfileCommand = exports.serializeAws_restJson1DescribeClusterCommand = exports.serializeAws_restJson1DescribeAddonVersionsCommand = exports.serializeAws_restJson1DescribeAddonCommand = exports.serializeAws_restJson1DeleteNodegroupCommand = exports.serializeAws_restJson1DeleteFargateProfileCommand = exports.serializeAws_restJson1DeleteClusterCommand = exports.serializeAws_restJson1DeleteAddonCommand = exports.serializeAws_restJson1CreateNodegroupCommand = exports.serializeAws_restJson1CreateFargateProfileCommand = exports.serializeAws_restJson1CreateClusterCommand = exports.serializeAws_restJson1CreateAddonCommand = exports.serializeAws_restJson1AssociateIdentityProviderConfigCommand = exports.serializeAws_restJson1AssociateEncryptionConfigCommand = void 0;
exports.deserializeAws_restJson1UpdateNodegroupVersionCommand = exports.deserializeAws_restJson1UpdateNodegroupConfigCommand = exports.deserializeAws_restJson1UpdateClusterVersionCommand = exports.deserializeAws_restJson1UpdateClusterConfigCommand = exports.deserializeAws_restJson1UpdateAddonCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ListUpdatesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListNodegroupsCommand = exports.deserializeAws_restJson1ListIdentityProviderConfigsCommand = exports.deserializeAws_restJson1ListFargateProfilesCommand = exports.deserializeAws_restJson1ListClustersCommand = exports.deserializeAws_restJson1ListAddonsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1AssociateEncryptionConfigCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/encryption-config/associate";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.encryptionConfig !== undefined &&
            input.encryptionConfig !== null && {
            encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
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
exports.serializeAws_restJson1AssociateEncryptionConfigCommand = serializeAws_restJson1AssociateEncryptionConfigCommand;
const serializeAws_restJson1AssociateIdentityProviderConfigCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/identity-provider-configs/associate";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.oidc !== undefined &&
            input.oidc !== null && { oidc: serializeAws_restJson1OidcIdentityProviderConfigRequest(input.oidc, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1AssociateIdentityProviderConfigCommand = serializeAws_restJson1AssociateIdentityProviderConfigCommand;
const serializeAws_restJson1CreateAddonCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/addons";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.addonName !== undefined && input.addonName !== null && { addonName: input.addonName }),
        ...(input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.resolveConflicts !== undefined &&
            input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts }),
        ...(input.serviceAccountRoleArn !== undefined &&
            input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateAddonCommand = serializeAws_restJson1CreateAddonCommand;
const serializeAws_restJson1CreateClusterCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters";
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.encryptionConfig !== undefined &&
            input.encryptionConfig !== null && {
            encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
        }),
        ...(input.kubernetesNetworkConfig !== undefined &&
            input.kubernetesNetworkConfig !== null && {
            kubernetesNetworkConfig: serializeAws_restJson1KubernetesNetworkConfigRequest(input.kubernetesNetworkConfig, context),
        }),
        ...(input.logging !== undefined &&
            input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.resourcesVpcConfig !== undefined &&
            input.resourcesVpcConfig !== null && {
            resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
        }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
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
exports.serializeAws_restJson1CreateClusterCommand = serializeAws_restJson1CreateClusterCommand;
const serializeAws_restJson1CreateFargateProfileCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.fargateProfileName !== undefined &&
            input.fargateProfileName !== null && { fargateProfileName: input.fargateProfileName }),
        ...(input.podExecutionRoleArn !== undefined &&
            input.podExecutionRoleArn !== null && { podExecutionRoleArn: input.podExecutionRoleArn }),
        ...(input.selectors !== undefined &&
            input.selectors !== null && {
            selectors: serializeAws_restJson1FargateProfileSelectors(input.selectors, context),
        }),
        ...(input.subnets !== undefined &&
            input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateFargateProfileCommand = serializeAws_restJson1CreateFargateProfileCommand;
const serializeAws_restJson1CreateNodegroupCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/node-groups";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.amiType !== undefined && input.amiType !== null && { amiType: input.amiType }),
        ...(input.capacityType !== undefined && input.capacityType !== null && { capacityType: input.capacityType }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.diskSize !== undefined && input.diskSize !== null && { diskSize: input.diskSize }),
        ...(input.instanceTypes !== undefined &&
            input.instanceTypes !== null && {
            instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
        }),
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_restJson1labelsMap(input.labels, context) }),
        ...(input.launchTemplate !== undefined &&
            input.launchTemplate !== null && {
            launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
        }),
        ...(input.nodeRole !== undefined && input.nodeRole !== null && { nodeRole: input.nodeRole }),
        ...(input.nodegroupName !== undefined && input.nodegroupName !== null && { nodegroupName: input.nodegroupName }),
        ...(input.releaseVersion !== undefined &&
            input.releaseVersion !== null && { releaseVersion: input.releaseVersion }),
        ...(input.remoteAccess !== undefined &&
            input.remoteAccess !== null && {
            remoteAccess: serializeAws_restJson1RemoteAccessConfig(input.remoteAccess, context),
        }),
        ...(input.scalingConfig !== undefined &&
            input.scalingConfig !== null && {
            scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
        }),
        ...(input.subnets !== undefined &&
            input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.taints !== undefined &&
            input.taints !== null && { taints: serializeAws_restJson1taintsList(input.taints, context) }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
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
exports.serializeAws_restJson1CreateNodegroupCommand = serializeAws_restJson1CreateNodegroupCommand;
const serializeAws_restJson1DeleteAddonCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/addons/{addonName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.addonName !== undefined) {
        const labelValue = input.addonName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: addonName.");
        }
        resolvedPath = resolvedPath.replace("{addonName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: addonName.");
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
exports.serializeAws_restJson1DeleteAddonCommand = serializeAws_restJson1DeleteAddonCommand;
const serializeAws_restJson1DeleteClusterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{name}";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
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
exports.serializeAws_restJson1DeleteClusterCommand = serializeAws_restJson1DeleteClusterCommand;
const serializeAws_restJson1DeleteFargateProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.fargateProfileName !== undefined) {
        const labelValue = input.fargateProfileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
        }
        resolvedPath = resolvedPath.replace("{fargateProfileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: fargateProfileName.");
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
exports.serializeAws_restJson1DeleteFargateProfileCommand = serializeAws_restJson1DeleteFargateProfileCommand;
const serializeAws_restJson1DeleteNodegroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.nodegroupName !== undefined) {
        const labelValue = input.nodegroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: nodegroupName.");
        }
        resolvedPath = resolvedPath.replace("{nodegroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: nodegroupName.");
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
exports.serializeAws_restJson1DeleteNodegroupCommand = serializeAws_restJson1DeleteNodegroupCommand;
const serializeAws_restJson1DescribeAddonCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/addons/{addonName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.addonName !== undefined) {
        const labelValue = input.addonName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: addonName.");
        }
        resolvedPath = resolvedPath.replace("{addonName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: addonName.");
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
exports.serializeAws_restJson1DescribeAddonCommand = serializeAws_restJson1DescribeAddonCommand;
const serializeAws_restJson1DescribeAddonVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/addons/supported-versions";
    const query = {
        ...(input.kubernetesVersion !== undefined && { kubernetesVersion: input.kubernetesVersion }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.addonName !== undefined && { addonName: input.addonName }),
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
exports.serializeAws_restJson1DescribeAddonVersionsCommand = serializeAws_restJson1DescribeAddonVersionsCommand;
const serializeAws_restJson1DescribeClusterCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{name}";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
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
exports.serializeAws_restJson1DescribeClusterCommand = serializeAws_restJson1DescribeClusterCommand;
const serializeAws_restJson1DescribeFargateProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.fargateProfileName !== undefined) {
        const labelValue = input.fargateProfileName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
        }
        resolvedPath = resolvedPath.replace("{fargateProfileName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: fargateProfileName.");
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
exports.serializeAws_restJson1DescribeFargateProfileCommand = serializeAws_restJson1DescribeFargateProfileCommand;
const serializeAws_restJson1DescribeIdentityProviderConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/identity-provider-configs/describe";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.identityProviderConfig !== undefined &&
            input.identityProviderConfig !== null && {
            identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
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
exports.serializeAws_restJson1DescribeIdentityProviderConfigCommand = serializeAws_restJson1DescribeIdentityProviderConfigCommand;
const serializeAws_restJson1DescribeNodegroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.nodegroupName !== undefined) {
        const labelValue = input.nodegroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: nodegroupName.");
        }
        resolvedPath = resolvedPath.replace("{nodegroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: nodegroupName.");
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
exports.serializeAws_restJson1DescribeNodegroupCommand = serializeAws_restJson1DescribeNodegroupCommand;
const serializeAws_restJson1DescribeUpdateCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{name}/updates/{updateId}";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
    }
    if (input.updateId !== undefined) {
        const labelValue = input.updateId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: updateId.");
        }
        resolvedPath = resolvedPath.replace("{updateId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: updateId.");
    }
    const query = {
        ...(input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName }),
        ...(input.addonName !== undefined && { addonName: input.addonName }),
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
exports.serializeAws_restJson1DescribeUpdateCommand = serializeAws_restJson1DescribeUpdateCommand;
const serializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/identity-provider-configs/disassociate";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.identityProviderConfig !== undefined &&
            input.identityProviderConfig !== null && {
            identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
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
exports.serializeAws_restJson1DisassociateIdentityProviderConfigCommand = serializeAws_restJson1DisassociateIdentityProviderConfigCommand;
const serializeAws_restJson1ListAddonsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/addons";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListAddonsCommand = serializeAws_restJson1ListAddonsCommand;
const serializeAws_restJson1ListClustersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters";
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListClustersCommand = serializeAws_restJson1ListClustersCommand;
const serializeAws_restJson1ListFargateProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/fargate-profiles";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListFargateProfilesCommand = serializeAws_restJson1ListFargateProfilesCommand;
const serializeAws_restJson1ListIdentityProviderConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/identity-provider-configs";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListIdentityProviderConfigsCommand = serializeAws_restJson1ListIdentityProviderConfigsCommand;
const serializeAws_restJson1ListNodegroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{clusterName}/node-groups";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
exports.serializeAws_restJson1ListNodegroupsCommand = serializeAws_restJson1ListNodegroupsCommand;
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
const serializeAws_restJson1ListUpdatesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/clusters/{name}/updates";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
    }
    const query = {
        ...(input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName }),
        ...(input.addonName !== undefined && { addonName: input.addonName }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListUpdatesCommand = serializeAws_restJson1ListUpdatesCommand;
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
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
const serializeAws_restJson1UpdateAddonCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/addons/{addonName}/update";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.addonName !== undefined) {
        const labelValue = input.addonName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: addonName.");
        }
        resolvedPath = resolvedPath.replace("{addonName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: addonName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion }),
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.resolveConflicts !== undefined &&
            input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts }),
        ...(input.serviceAccountRoleArn !== undefined &&
            input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
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
exports.serializeAws_restJson1UpdateAddonCommand = serializeAws_restJson1UpdateAddonCommand;
const serializeAws_restJson1UpdateClusterConfigCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{name}/update-config";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.logging !== undefined &&
            input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
        ...(input.resourcesVpcConfig !== undefined &&
            input.resourcesVpcConfig !== null && {
            resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
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
exports.serializeAws_restJson1UpdateClusterConfigCommand = serializeAws_restJson1UpdateClusterConfigCommand;
const serializeAws_restJson1UpdateClusterVersionCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{name}/updates";
    if (input.name !== undefined) {
        const labelValue = input.name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: name.");
        }
        resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: name.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
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
exports.serializeAws_restJson1UpdateClusterVersionCommand = serializeAws_restJson1UpdateClusterVersionCommand;
const serializeAws_restJson1UpdateNodegroupConfigCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.nodegroupName !== undefined) {
        const labelValue = input.nodegroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: nodegroupName.");
        }
        resolvedPath = resolvedPath.replace("{nodegroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: nodegroupName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_restJson1UpdateLabelsPayload(input.labels, context) }),
        ...(input.scalingConfig !== undefined &&
            input.scalingConfig !== null && {
            scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
        }),
        ...(input.taints !== undefined &&
            input.taints !== null && { taints: serializeAws_restJson1UpdateTaintsPayload(input.taints, context) }),
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
exports.serializeAws_restJson1UpdateNodegroupConfigCommand = serializeAws_restJson1UpdateNodegroupConfigCommand;
const serializeAws_restJson1UpdateNodegroupVersionCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
    if (input.clusterName !== undefined) {
        const labelValue = input.clusterName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: clusterName.");
        }
        resolvedPath = resolvedPath.replace("{clusterName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: clusterName.");
    }
    if (input.nodegroupName !== undefined) {
        const labelValue = input.nodegroupName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: nodegroupName.");
        }
        resolvedPath = resolvedPath.replace("{nodegroupName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: nodegroupName.");
    }
    let body;
    body = JSON.stringify({
        clientRequestToken: (_a = input.clientRequestToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.force !== undefined && input.force !== null && { force: input.force }),
        ...(input.launchTemplate !== undefined &&
            input.launchTemplate !== null && {
            launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
        }),
        ...(input.releaseVersion !== undefined &&
            input.releaseVersion !== null && { releaseVersion: input.releaseVersion }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
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
exports.serializeAws_restJson1UpdateNodegroupVersionCommand = serializeAws_restJson1UpdateNodegroupVersionCommand;
const deserializeAws_restJson1AssociateEncryptionConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateEncryptionConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateEncryptionConfigCommand = deserializeAws_restJson1AssociateEncryptionConfigCommand;
const deserializeAws_restJson1AssociateEncryptionConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1AssociateIdentityProviderConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AssociateIdentityProviderConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        tags: undefined,
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AssociateIdentityProviderConfigCommand = deserializeAws_restJson1AssociateIdentityProviderConfigCommand;
const deserializeAws_restJson1AssociateIdentityProviderConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateAddonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateAddonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        addon: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.addon !== undefined && data.addon !== null) {
        contents.addon = deserializeAws_restJson1Addon(data.addon, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAddonCommand = deserializeAws_restJson1CreateAddonCommand;
const deserializeAws_restJson1CreateAddonCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        cluster: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.cluster !== undefined && data.cluster !== null) {
        contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateClusterCommand = deserializeAws_restJson1CreateClusterCommand;
const deserializeAws_restJson1CreateClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.eks#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAvailabilityZoneException":
        case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateFargateProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateFargateProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fargateProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
        contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFargateProfileCommand = deserializeAws_restJson1CreateFargateProfileCommand;
const deserializeAws_restJson1CreateFargateProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.eks#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnsupportedAvailabilityZoneException":
        case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
            response = {
                ...(await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1CreateNodegroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateNodegroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nodegroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nodegroup !== undefined && data.nodegroup !== null) {
        contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateNodegroupCommand = deserializeAws_restJson1CreateNodegroupCommand;
const deserializeAws_restJson1CreateNodegroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.eks#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteAddonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAddonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        addon: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.addon !== undefined && data.addon !== null) {
        contents.addon = deserializeAws_restJson1Addon(data.addon, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAddonCommand = deserializeAws_restJson1DeleteAddonCommand;
const deserializeAws_restJson1DeleteAddonCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        cluster: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.cluster !== undefined && data.cluster !== null) {
        contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteClusterCommand = deserializeAws_restJson1DeleteClusterCommand;
const deserializeAws_restJson1DeleteClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteFargateProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteFargateProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fargateProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
        contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFargateProfileCommand = deserializeAws_restJson1DeleteFargateProfileCommand;
const deserializeAws_restJson1DeleteFargateProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DeleteNodegroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteNodegroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nodegroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nodegroup !== undefined && data.nodegroup !== null) {
        contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteNodegroupCommand = deserializeAws_restJson1DeleteNodegroupCommand;
const deserializeAws_restJson1DeleteNodegroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeAddonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAddonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        addon: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.addon !== undefined && data.addon !== null) {
        contents.addon = deserializeAws_restJson1Addon(data.addon, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAddonCommand = deserializeAws_restJson1DescribeAddonCommand;
const deserializeAws_restJson1DescribeAddonCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeAddonVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeAddonVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        addons: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.addons !== undefined && data.addons !== null) {
        contents.addons = deserializeAws_restJson1Addons(data.addons, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeAddonVersionsCommand = deserializeAws_restJson1DescribeAddonVersionsCommand;
const deserializeAws_restJson1DescribeAddonVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeClusterCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeClusterCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        cluster: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.cluster !== undefined && data.cluster !== null) {
        contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeClusterCommand = deserializeAws_restJson1DescribeClusterCommand;
const deserializeAws_restJson1DescribeClusterCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeFargateProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeFargateProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fargateProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
        contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeFargateProfileCommand = deserializeAws_restJson1DescribeFargateProfileCommand;
const deserializeAws_restJson1DescribeFargateProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DescribeIdentityProviderConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIdentityProviderConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        identityProviderConfig: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.identityProviderConfig !== undefined && data.identityProviderConfig !== null) {
        contents.identityProviderConfig = deserializeAws_restJson1IdentityProviderConfigResponse(data.identityProviderConfig, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIdentityProviderConfigCommand = deserializeAws_restJson1DescribeIdentityProviderConfigCommand;
const deserializeAws_restJson1DescribeIdentityProviderConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeNodegroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeNodegroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nodegroup: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nodegroup !== undefined && data.nodegroup !== null) {
        contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeNodegroupCommand = deserializeAws_restJson1DescribeNodegroupCommand;
const deserializeAws_restJson1DescribeNodegroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1DescribeUpdateCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeUpdateCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeUpdateCommand = deserializeAws_restJson1DescribeUpdateCommand;
const deserializeAws_restJson1DescribeUpdateCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = deserializeAws_restJson1DisassociateIdentityProviderConfigCommand;
const deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListAddonsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListAddonsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        addons: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.addons !== undefined && data.addons !== null) {
        contents.addons = deserializeAws_restJson1StringList(data.addons, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListAddonsCommand = deserializeAws_restJson1ListAddonsCommand;
const deserializeAws_restJson1ListAddonsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListClustersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListClustersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clusters: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clusters !== undefined && data.clusters !== null) {
        contents.clusters = deserializeAws_restJson1StringList(data.clusters, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListClustersCommand = deserializeAws_restJson1ListClustersCommand;
const deserializeAws_restJson1ListClustersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1ListFargateProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListFargateProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        fargateProfileNames: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.fargateProfileNames !== undefined && data.fargateProfileNames !== null) {
        contents.fargateProfileNames = deserializeAws_restJson1StringList(data.fargateProfileNames, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFargateProfilesCommand = deserializeAws_restJson1ListFargateProfilesCommand;
const deserializeAws_restJson1ListFargateProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListIdentityProviderConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIdentityProviderConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        identityProviderConfigs: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.identityProviderConfigs !== undefined && data.identityProviderConfigs !== null) {
        contents.identityProviderConfigs = deserializeAws_restJson1IdentityProviderConfigs(data.identityProviderConfigs, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIdentityProviderConfigsCommand = deserializeAws_restJson1ListIdentityProviderConfigsCommand;
const deserializeAws_restJson1ListIdentityProviderConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
const deserializeAws_restJson1ListNodegroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListNodegroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        nodegroups: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.nodegroups !== undefined && data.nodegroups !== null) {
        contents.nodegroups = deserializeAws_restJson1StringList(data.nodegroups, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListNodegroupsCommand = deserializeAws_restJson1ListNodegroupsCommand;
const deserializeAws_restJson1ListNodegroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.eks#ServiceUnavailableException":
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
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
        case "BadRequestException":
        case "com.amazonaws.eks#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.eks#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1ListUpdatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListUpdatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        updateIds: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.updateIds !== undefined && data.updateIds !== null) {
        contents.updateIds = deserializeAws_restJson1StringList(data.updateIds, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListUpdatesCommand = deserializeAws_restJson1ListUpdatesCommand;
const deserializeAws_restJson1ListUpdatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "BadRequestException":
        case "com.amazonaws.eks#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.eks#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
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
        case "BadRequestException":
        case "com.amazonaws.eks#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.eks#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateAddonCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAddonCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAddonCommand = deserializeAws_restJson1UpdateAddonCommand;
const deserializeAws_restJson1UpdateAddonCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateClusterConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateClusterConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateClusterConfigCommand = deserializeAws_restJson1UpdateClusterConfigCommand;
const deserializeAws_restJson1UpdateClusterConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateClusterVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateClusterVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateClusterVersionCommand = deserializeAws_restJson1UpdateClusterVersionCommand;
const deserializeAws_restJson1UpdateClusterVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateNodegroupConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateNodegroupConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateNodegroupConfigCommand = deserializeAws_restJson1UpdateNodegroupConfigCommand;
const deserializeAws_restJson1UpdateNodegroupConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1UpdateNodegroupVersionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateNodegroupVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        update: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.update !== undefined && data.update !== null) {
        contents.update = deserializeAws_restJson1Update(data.update, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateNodegroupVersionCommand = deserializeAws_restJson1UpdateNodegroupVersionCommand;
const deserializeAws_restJson1UpdateNodegroupVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ClientException":
        case "com.amazonaws.eks#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.eks#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.eks#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.eks#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.eks#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServerException":
        case "com.amazonaws.eks#ServerException":
            response = {
                ...(await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        default:
            const parsedBody = parsedOutput.body;
            errorCode = parsedBody.code || parsedBody.Code || errorCode;
            response = {
                ...parsedBody,
                name: `${errorCode}`,
                message: parsedBody.message || parsedBody.Message || errorCode,
                $fault: "client",
                $metadata: deserializeMetadata(output),
            };
    }
    const message = response.message || response.Message || errorCode;
    response.message = message;
    delete response.Message;
    return Promise.reject(Object.assign(new Error(message), response));
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
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
const deserializeAws_restJson1ClientExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ClientException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        fargateProfileName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.fargateProfileName !== undefined && data.fargateProfileName !== null) {
        contents.fargateProfileName = data.fargateProfileName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
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
const deserializeAws_restJson1ResourceInUseExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceInUseException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        fargateProfileName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.fargateProfileName !== undefined && data.fargateProfileName !== null) {
        contents.fargateProfileName = data.fargateProfileName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    return contents;
};
const deserializeAws_restJson1ServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        addonName: undefined,
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
    };
    const data = parsedOutput.body;
    if (data.addonName !== undefined && data.addonName !== null) {
        contents.addonName = data.addonName;
    }
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
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
const deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnsupportedAvailabilityZoneException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        clusterName: undefined,
        message: undefined,
        nodegroupName: undefined,
        validZones: undefined,
    };
    const data = parsedOutput.body;
    if (data.clusterName !== undefined && data.clusterName !== null) {
        contents.clusterName = data.clusterName;
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
        contents.nodegroupName = data.nodegroupName;
    }
    if (data.validZones !== undefined && data.validZones !== null) {
        contents.validZones = deserializeAws_restJson1StringList(data.validZones, context);
    }
    return contents;
};
const serializeAws_restJson1EncryptionConfig = (input, context) => {
    return {
        ...(input.provider !== undefined &&
            input.provider !== null && { provider: serializeAws_restJson1Provider(input.provider, context) }),
        ...(input.resources !== undefined &&
            input.resources !== null && { resources: serializeAws_restJson1StringList(input.resources, context) }),
    };
};
const serializeAws_restJson1EncryptionConfigList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EncryptionConfig(entry, context);
    });
};
const serializeAws_restJson1FargateProfileLabel = (input, context) => {
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
const serializeAws_restJson1FargateProfileSelector = (input, context) => {
    return {
        ...(input.labels !== undefined &&
            input.labels !== null && { labels: serializeAws_restJson1FargateProfileLabel(input.labels, context) }),
        ...(input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }),
    };
};
const serializeAws_restJson1FargateProfileSelectors = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FargateProfileSelector(entry, context);
    });
};
const serializeAws_restJson1IdentityProviderConfig = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1KubernetesNetworkConfigRequest = (input, context) => {
    return {
        ...(input.serviceIpv4Cidr !== undefined &&
            input.serviceIpv4Cidr !== null && { serviceIpv4Cidr: input.serviceIpv4Cidr }),
    };
};
const serializeAws_restJson1labelsKeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1labelsMap = (input, context) => {
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
const serializeAws_restJson1LaunchTemplateSpecification = (input, context) => {
    return {
        ...(input.id !== undefined && input.id !== null && { id: input.id }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.version !== undefined && input.version !== null && { version: input.version }),
    };
};
const serializeAws_restJson1Logging = (input, context) => {
    return {
        ...(input.clusterLogging !== undefined &&
            input.clusterLogging !== null && {
            clusterLogging: serializeAws_restJson1LogSetups(input.clusterLogging, context),
        }),
    };
};
const serializeAws_restJson1LogSetup = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
        ...(input.types !== undefined &&
            input.types !== null && { types: serializeAws_restJson1LogTypes(input.types, context) }),
    };
};
const serializeAws_restJson1LogSetups = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LogSetup(entry, context);
    });
};
const serializeAws_restJson1LogTypes = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1NodegroupScalingConfig = (input, context) => {
    return {
        ...(input.desiredSize !== undefined && input.desiredSize !== null && { desiredSize: input.desiredSize }),
        ...(input.maxSize !== undefined && input.maxSize !== null && { maxSize: input.maxSize }),
        ...(input.minSize !== undefined && input.minSize !== null && { minSize: input.minSize }),
    };
};
const serializeAws_restJson1OidcIdentityProviderConfigRequest = (input, context) => {
    return {
        ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
        ...(input.groupsClaim !== undefined && input.groupsClaim !== null && { groupsClaim: input.groupsClaim }),
        ...(input.groupsPrefix !== undefined && input.groupsPrefix !== null && { groupsPrefix: input.groupsPrefix }),
        ...(input.identityProviderConfigName !== undefined &&
            input.identityProviderConfigName !== null && { identityProviderConfigName: input.identityProviderConfigName }),
        ...(input.issuerUrl !== undefined && input.issuerUrl !== null && { issuerUrl: input.issuerUrl }),
        ...(input.requiredClaims !== undefined &&
            input.requiredClaims !== null && {
            requiredClaims: serializeAws_restJson1requiredClaimsMap(input.requiredClaims, context),
        }),
        ...(input.usernameClaim !== undefined && input.usernameClaim !== null && { usernameClaim: input.usernameClaim }),
        ...(input.usernamePrefix !== undefined &&
            input.usernamePrefix !== null && { usernamePrefix: input.usernamePrefix }),
    };
};
const serializeAws_restJson1Provider = (input, context) => {
    return {
        ...(input.keyArn !== undefined && input.keyArn !== null && { keyArn: input.keyArn }),
    };
};
const serializeAws_restJson1RemoteAccessConfig = (input, context) => {
    return {
        ...(input.ec2SshKey !== undefined && input.ec2SshKey !== null && { ec2SshKey: input.ec2SshKey }),
        ...(input.sourceSecurityGroups !== undefined &&
            input.sourceSecurityGroups !== null && {
            sourceSecurityGroups: serializeAws_restJson1StringList(input.sourceSecurityGroups, context),
        }),
    };
};
const serializeAws_restJson1requiredClaimsMap = (input, context) => {
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
const serializeAws_restJson1Taint = (input, context) => {
    return {
        ...(input.effect !== undefined && input.effect !== null && { effect: input.effect }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1taintsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Taint(entry, context);
    });
};
const serializeAws_restJson1UpdateLabelsPayload = (input, context) => {
    return {
        ...(input.addOrUpdateLabels !== undefined &&
            input.addOrUpdateLabels !== null && {
            addOrUpdateLabels: serializeAws_restJson1labelsMap(input.addOrUpdateLabels, context),
        }),
        ...(input.removeLabels !== undefined &&
            input.removeLabels !== null && {
            removeLabels: serializeAws_restJson1labelsKeyList(input.removeLabels, context),
        }),
    };
};
const serializeAws_restJson1UpdateTaintsPayload = (input, context) => {
    return {
        ...(input.addOrUpdateTaints !== undefined &&
            input.addOrUpdateTaints !== null && {
            addOrUpdateTaints: serializeAws_restJson1taintsList(input.addOrUpdateTaints, context),
        }),
        ...(input.removeTaints !== undefined &&
            input.removeTaints !== null && { removeTaints: serializeAws_restJson1taintsList(input.removeTaints, context) }),
    };
};
const serializeAws_restJson1VpcConfigRequest = (input, context) => {
    return {
        ...(input.endpointPrivateAccess !== undefined &&
            input.endpointPrivateAccess !== null && { endpointPrivateAccess: input.endpointPrivateAccess }),
        ...(input.endpointPublicAccess !== undefined &&
            input.endpointPublicAccess !== null && { endpointPublicAccess: input.endpointPublicAccess }),
        ...(input.publicAccessCidrs !== undefined &&
            input.publicAccessCidrs !== null && {
            publicAccessCidrs: serializeAws_restJson1StringList(input.publicAccessCidrs, context),
        }),
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
        }),
        ...(input.subnetIds !== undefined &&
            input.subnetIds !== null && { subnetIds: serializeAws_restJson1StringList(input.subnetIds, context) }),
    };
};
const deserializeAws_restJson1Addon = (output, context) => {
    return {
        addonArn: output.addonArn !== undefined && output.addonArn !== null ? output.addonArn : undefined,
        addonName: output.addonName !== undefined && output.addonName !== null ? output.addonName : undefined,
        addonVersion: output.addonVersion !== undefined && output.addonVersion !== null ? output.addonVersion : undefined,
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        health: output.health !== undefined && output.health !== null
            ? deserializeAws_restJson1AddonHealth(output.health, context)
            : undefined,
        modifiedAt: output.modifiedAt !== undefined && output.modifiedAt !== null
            ? new Date(Math.round(output.modifiedAt * 1000))
            : undefined,
        serviceAccountRoleArn: output.serviceAccountRoleArn !== undefined && output.serviceAccountRoleArn !== null
            ? output.serviceAccountRoleArn
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1AddonHealth = (output, context) => {
    return {
        issues: output.issues !== undefined && output.issues !== null
            ? deserializeAws_restJson1AddonIssueList(output.issues, context)
            : undefined,
    };
};
const deserializeAws_restJson1AddonInfo = (output, context) => {
    return {
        addonName: output.addonName !== undefined && output.addonName !== null ? output.addonName : undefined,
        addonVersions: output.addonVersions !== undefined && output.addonVersions !== null
            ? deserializeAws_restJson1AddonVersionInfoList(output.addonVersions, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1AddonIssue = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1AddonIssueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonIssue(entry, context);
    });
};
const deserializeAws_restJson1Addons = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonInfo(entry, context);
    });
};
const deserializeAws_restJson1AddonVersionInfo = (output, context) => {
    return {
        addonVersion: output.addonVersion !== undefined && output.addonVersion !== null ? output.addonVersion : undefined,
        architecture: output.architecture !== undefined && output.architecture !== null
            ? deserializeAws_restJson1StringList(output.architecture, context)
            : undefined,
        compatibilities: output.compatibilities !== undefined && output.compatibilities !== null
            ? deserializeAws_restJson1Compatibilities(output.compatibilities, context)
            : undefined,
    };
};
const deserializeAws_restJson1AddonVersionInfoList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonVersionInfo(entry, context);
    });
};
const deserializeAws_restJson1AutoScalingGroup = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1AutoScalingGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoScalingGroup(entry, context);
    });
};
const deserializeAws_restJson1Certificate = (output, context) => {
    return {
        data: output.data !== undefined && output.data !== null ? output.data : undefined,
    };
};
const deserializeAws_restJson1Cluster = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        certificateAuthority: output.certificateAuthority !== undefined && output.certificateAuthority !== null
            ? deserializeAws_restJson1Certificate(output.certificateAuthority, context)
            : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        encryptionConfig: output.encryptionConfig !== undefined && output.encryptionConfig !== null
            ? deserializeAws_restJson1EncryptionConfigList(output.encryptionConfig, context)
            : undefined,
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
        identity: output.identity !== undefined && output.identity !== null
            ? deserializeAws_restJson1Identity(output.identity, context)
            : undefined,
        kubernetesNetworkConfig: output.kubernetesNetworkConfig !== undefined && output.kubernetesNetworkConfig !== null
            ? deserializeAws_restJson1KubernetesNetworkConfigResponse(output.kubernetesNetworkConfig, context)
            : undefined,
        logging: output.logging !== undefined && output.logging !== null
            ? deserializeAws_restJson1Logging(output.logging, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        platformVersion: output.platformVersion !== undefined && output.platformVersion !== null ? output.platformVersion : undefined,
        resourcesVpcConfig: output.resourcesVpcConfig !== undefined && output.resourcesVpcConfig !== null
            ? deserializeAws_restJson1VpcConfigResponse(output.resourcesVpcConfig, context)
            : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1Compatibilities = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Compatibility(entry, context);
    });
};
const deserializeAws_restJson1Compatibility = (output, context) => {
    return {
        clusterVersion: output.clusterVersion !== undefined && output.clusterVersion !== null ? output.clusterVersion : undefined,
        defaultVersion: output.defaultVersion !== undefined && output.defaultVersion !== null ? output.defaultVersion : undefined,
        platformVersions: output.platformVersions !== undefined && output.platformVersions !== null
            ? deserializeAws_restJson1StringList(output.platformVersions, context)
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionConfig = (output, context) => {
    return {
        provider: output.provider !== undefined && output.provider !== null
            ? deserializeAws_restJson1Provider(output.provider, context)
            : undefined,
        resources: output.resources !== undefined && output.resources !== null
            ? deserializeAws_restJson1StringList(output.resources, context)
            : undefined,
    };
};
const deserializeAws_restJson1EncryptionConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EncryptionConfig(entry, context);
    });
};
const deserializeAws_restJson1ErrorDetail = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1ErrorDetails = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorDetail(entry, context);
    });
};
const deserializeAws_restJson1FargateProfile = (output, context) => {
    return {
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fargateProfileArn: output.fargateProfileArn !== undefined && output.fargateProfileArn !== null
            ? output.fargateProfileArn
            : undefined,
        fargateProfileName: output.fargateProfileName !== undefined && output.fargateProfileName !== null
            ? output.fargateProfileName
            : undefined,
        podExecutionRoleArn: output.podExecutionRoleArn !== undefined && output.podExecutionRoleArn !== null
            ? output.podExecutionRoleArn
            : undefined,
        selectors: output.selectors !== undefined && output.selectors !== null
            ? deserializeAws_restJson1FargateProfileSelectors(output.selectors, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1StringList(output.subnets, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1FargateProfileLabel = (output, context) => {
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
const deserializeAws_restJson1FargateProfileSelector = (output, context) => {
    return {
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_restJson1FargateProfileLabel(output.labels, context)
            : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    };
};
const deserializeAws_restJson1FargateProfileSelectors = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FargateProfileSelector(entry, context);
    });
};
const deserializeAws_restJson1Identity = (output, context) => {
    return {
        oidc: output.oidc !== undefined && output.oidc !== null
            ? deserializeAws_restJson1OIDC(output.oidc, context)
            : undefined,
    };
};
const deserializeAws_restJson1IdentityProviderConfig = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1IdentityProviderConfigResponse = (output, context) => {
    return {
        oidc: output.oidc !== undefined && output.oidc !== null
            ? deserializeAws_restJson1OidcIdentityProviderConfig(output.oidc, context)
            : undefined,
    };
};
const deserializeAws_restJson1IdentityProviderConfigs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityProviderConfig(entry, context);
    });
};
const deserializeAws_restJson1Issue = (output, context) => {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1IssueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Issue(entry, context);
    });
};
const deserializeAws_restJson1KubernetesNetworkConfigResponse = (output, context) => {
    return {
        serviceIpv4Cidr: output.serviceIpv4Cidr !== undefined && output.serviceIpv4Cidr !== null ? output.serviceIpv4Cidr : undefined,
    };
};
const deserializeAws_restJson1labelsMap = (output, context) => {
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
const deserializeAws_restJson1LaunchTemplateSpecification = (output, context) => {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1Logging = (output, context) => {
    return {
        clusterLogging: output.clusterLogging !== undefined && output.clusterLogging !== null
            ? deserializeAws_restJson1LogSetups(output.clusterLogging, context)
            : undefined,
    };
};
const deserializeAws_restJson1LogSetup = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        types: output.types !== undefined && output.types !== null
            ? deserializeAws_restJson1LogTypes(output.types, context)
            : undefined,
    };
};
const deserializeAws_restJson1LogSetups = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LogSetup(entry, context);
    });
};
const deserializeAws_restJson1LogTypes = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Nodegroup = (output, context) => {
    return {
        amiType: output.amiType !== undefined && output.amiType !== null ? output.amiType : undefined,
        capacityType: output.capacityType !== undefined && output.capacityType !== null ? output.capacityType : undefined,
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        diskSize: output.diskSize !== undefined && output.diskSize !== null ? output.diskSize : undefined,
        health: output.health !== undefined && output.health !== null
            ? deserializeAws_restJson1NodegroupHealth(output.health, context)
            : undefined,
        instanceTypes: output.instanceTypes !== undefined && output.instanceTypes !== null
            ? deserializeAws_restJson1StringList(output.instanceTypes, context)
            : undefined,
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_restJson1labelsMap(output.labels, context)
            : undefined,
        launchTemplate: output.launchTemplate !== undefined && output.launchTemplate !== null
            ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
            : undefined,
        modifiedAt: output.modifiedAt !== undefined && output.modifiedAt !== null
            ? new Date(Math.round(output.modifiedAt * 1000))
            : undefined,
        nodeRole: output.nodeRole !== undefined && output.nodeRole !== null ? output.nodeRole : undefined,
        nodegroupArn: output.nodegroupArn !== undefined && output.nodegroupArn !== null ? output.nodegroupArn : undefined,
        nodegroupName: output.nodegroupName !== undefined && output.nodegroupName !== null ? output.nodegroupName : undefined,
        releaseVersion: output.releaseVersion !== undefined && output.releaseVersion !== null ? output.releaseVersion : undefined,
        remoteAccess: output.remoteAccess !== undefined && output.remoteAccess !== null
            ? deserializeAws_restJson1RemoteAccessConfig(output.remoteAccess, context)
            : undefined,
        resources: output.resources !== undefined && output.resources !== null
            ? deserializeAws_restJson1NodegroupResources(output.resources, context)
            : undefined,
        scalingConfig: output.scalingConfig !== undefined && output.scalingConfig !== null
            ? deserializeAws_restJson1NodegroupScalingConfig(output.scalingConfig, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1StringList(output.subnets, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        taints: output.taints !== undefined && output.taints !== null
            ? deserializeAws_restJson1taintsList(output.taints, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1NodegroupHealth = (output, context) => {
    return {
        issues: output.issues !== undefined && output.issues !== null
            ? deserializeAws_restJson1IssueList(output.issues, context)
            : undefined,
    };
};
const deserializeAws_restJson1NodegroupResources = (output, context) => {
    return {
        autoScalingGroups: output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
            ? deserializeAws_restJson1AutoScalingGroupList(output.autoScalingGroups, context)
            : undefined,
        remoteAccessSecurityGroup: output.remoteAccessSecurityGroup !== undefined && output.remoteAccessSecurityGroup !== null
            ? output.remoteAccessSecurityGroup
            : undefined,
    };
};
const deserializeAws_restJson1NodegroupScalingConfig = (output, context) => {
    return {
        desiredSize: output.desiredSize !== undefined && output.desiredSize !== null ? output.desiredSize : undefined,
        maxSize: output.maxSize !== undefined && output.maxSize !== null ? output.maxSize : undefined,
        minSize: output.minSize !== undefined && output.minSize !== null ? output.minSize : undefined,
    };
};
const deserializeAws_restJson1OIDC = (output, context) => {
    return {
        issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
    };
};
const deserializeAws_restJson1OidcIdentityProviderConfig = (output, context) => {
    return {
        clientId: output.clientId !== undefined && output.clientId !== null ? output.clientId : undefined,
        clusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        groupsClaim: output.groupsClaim !== undefined && output.groupsClaim !== null ? output.groupsClaim : undefined,
        groupsPrefix: output.groupsPrefix !== undefined && output.groupsPrefix !== null ? output.groupsPrefix : undefined,
        identityProviderConfigArn: output.identityProviderConfigArn !== undefined && output.identityProviderConfigArn !== null
            ? output.identityProviderConfigArn
            : undefined,
        identityProviderConfigName: output.identityProviderConfigName !== undefined && output.identityProviderConfigName !== null
            ? output.identityProviderConfigName
            : undefined,
        issuerUrl: output.issuerUrl !== undefined && output.issuerUrl !== null ? output.issuerUrl : undefined,
        requiredClaims: output.requiredClaims !== undefined && output.requiredClaims !== null
            ? deserializeAws_restJson1requiredClaimsMap(output.requiredClaims, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        usernameClaim: output.usernameClaim !== undefined && output.usernameClaim !== null ? output.usernameClaim : undefined,
        usernamePrefix: output.usernamePrefix !== undefined && output.usernamePrefix !== null ? output.usernamePrefix : undefined,
    };
};
const deserializeAws_restJson1Provider = (output, context) => {
    return {
        keyArn: output.keyArn !== undefined && output.keyArn !== null ? output.keyArn : undefined,
    };
};
const deserializeAws_restJson1RemoteAccessConfig = (output, context) => {
    return {
        ec2SshKey: output.ec2SshKey !== undefined && output.ec2SshKey !== null ? output.ec2SshKey : undefined,
        sourceSecurityGroups: output.sourceSecurityGroups !== undefined && output.sourceSecurityGroups !== null
            ? deserializeAws_restJson1StringList(output.sourceSecurityGroups, context)
            : undefined,
    };
};
const deserializeAws_restJson1requiredClaimsMap = (output, context) => {
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
const deserializeAws_restJson1StringList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_restJson1Taint = (output, context) => {
    return {
        effect: output.effect !== undefined && output.effect !== null ? output.effect : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1taintsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Taint(entry, context);
    });
};
const deserializeAws_restJson1Update = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_restJson1ErrorDetails(output.errors, context)
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        params: output.params !== undefined && output.params !== null
            ? deserializeAws_restJson1UpdateParams(output.params, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1UpdateParam = (output, context) => {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1UpdateParams = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpdateParam(entry, context);
    });
};
const deserializeAws_restJson1VpcConfigResponse = (output, context) => {
    return {
        clusterSecurityGroupId: output.clusterSecurityGroupId !== undefined && output.clusterSecurityGroupId !== null
            ? output.clusterSecurityGroupId
            : undefined,
        endpointPrivateAccess: output.endpointPrivateAccess !== undefined && output.endpointPrivateAccess !== null
            ? output.endpointPrivateAccess
            : undefined,
        endpointPublicAccess: output.endpointPublicAccess !== undefined && output.endpointPublicAccess !== null
            ? output.endpointPublicAccess
            : undefined,
        publicAccessCidrs: output.publicAccessCidrs !== undefined && output.publicAccessCidrs !== null
            ? deserializeAws_restJson1StringList(output.publicAccessCidrs, context)
            : undefined,
        securityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
            : undefined,
        subnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_restJson1StringList(output.subnetIds, context)
            : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
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