import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1AssociateEncryptionConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/encryption-config/associate";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.encryptionConfig !== undefined &&
                    input.encryptionConfig !== null && {
                    encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1AssociateIdentityProviderConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/identity-provider-configs/associate";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.oidc !== undefined &&
                    input.oidc !== null && { oidc: serializeAws_restJson1OidcIdentityProviderConfigRequest(input.oidc, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateAddonCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/addons";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.addonName !== undefined && input.addonName !== null && { addonName: input.addonName })), (input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion })), { clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.resolveConflicts !== undefined &&
                    input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts })), (input.serviceAccountRoleArn !== undefined &&
                    input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.encryptionConfig !== undefined &&
                    input.encryptionConfig !== null && {
                    encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
                })), (input.kubernetesNetworkConfig !== undefined &&
                    input.kubernetesNetworkConfig !== null && {
                    kubernetesNetworkConfig: serializeAws_restJson1KubernetesNetworkConfigRequest(input.kubernetesNetworkConfig, context),
                })), (input.logging !== undefined &&
                    input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.resourcesVpcConfig !== undefined &&
                    input.resourcesVpcConfig !== null && {
                    resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
                })), (input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.version !== undefined && input.version !== null && { version: input.version })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateFargateProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/fargate-profiles";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.fargateProfileName !== undefined &&
                    input.fargateProfileName !== null && { fargateProfileName: input.fargateProfileName })), (input.podExecutionRoleArn !== undefined &&
                    input.podExecutionRoleArn !== null && { podExecutionRoleArn: input.podExecutionRoleArn })), (input.selectors !== undefined &&
                    input.selectors !== null && {
                    selectors: serializeAws_restJson1FargateProfileSelectors(input.selectors, context),
                })), (input.subnets !== undefined &&
                    input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateNodegroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/node-groups";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.amiType !== undefined && input.amiType !== null && { amiType: input.amiType })), (input.capacityType !== undefined && input.capacityType !== null && { capacityType: input.capacityType })), { clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.diskSize !== undefined && input.diskSize !== null && { diskSize: input.diskSize })), (input.instanceTypes !== undefined &&
                    input.instanceTypes !== null && {
                    instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
                })), (input.labels !== undefined &&
                    input.labels !== null && { labels: serializeAws_restJson1labelsMap(input.labels, context) })), (input.launchTemplate !== undefined &&
                    input.launchTemplate !== null && {
                    launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
                })), (input.nodeRole !== undefined && input.nodeRole !== null && { nodeRole: input.nodeRole })), (input.nodegroupName !== undefined && input.nodegroupName !== null && { nodegroupName: input.nodegroupName })), (input.releaseVersion !== undefined &&
                    input.releaseVersion !== null && { releaseVersion: input.releaseVersion })), (input.remoteAccess !== undefined &&
                    input.remoteAccess !== null && {
                    remoteAccess: serializeAws_restJson1RemoteAccessConfig(input.remoteAccess, context),
                })), (input.scalingConfig !== undefined &&
                    input.scalingConfig !== null && {
                    scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
                })), (input.subnets !== undefined &&
                    input.subnets !== null && { subnets: serializeAws_restJson1StringList(input.subnets, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.taints !== undefined &&
                    input.taints !== null && { taints: serializeAws_restJson1taintsList(input.taints, context) })), (input.version !== undefined && input.version !== null && { version: input.version })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteAddonCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/addons/{addonName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.addonName !== undefined) {
                    labelValue = input.addonName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: addonName.");
                    }
                    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: addonName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteFargateProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.fargateProfileName !== undefined) {
                    labelValue = input.fargateProfileName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
                    }
                    resolvedPath = resolvedPath.replace("{fargateProfileName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: fargateProfileName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteNodegroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.nodegroupName !== undefined) {
                    labelValue = input.nodegroupName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: nodegroupName.");
                    }
                    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: nodegroupName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeAddonCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/addons/{addonName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.addonName !== undefined) {
                    labelValue = input.addonName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: addonName.");
                    }
                    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: addonName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeAddonVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/addons/supported-versions";
                query = __assign(__assign(__assign(__assign({}, (input.kubernetesVersion !== undefined && { kubernetesVersion: input.kubernetesVersion })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.addonName !== undefined && { addonName: input.addonName }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{name}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeFargateProfileCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.fargateProfileName !== undefined) {
                    labelValue = input.fargateProfileName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: fargateProfileName.");
                    }
                    resolvedPath = resolvedPath.replace("{fargateProfileName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: fargateProfileName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeIdentityProviderConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/identity-provider-configs/describe";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign({}, (input.identityProviderConfig !== undefined &&
                    input.identityProviderConfig !== null && {
                    identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeNodegroupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.nodegroupName !== undefined) {
                    labelValue = input.nodegroupName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: nodegroupName.");
                    }
                    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: nodegroupName.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DescribeUpdateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{name}/updates/{updateId}";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                if (input.updateId !== undefined) {
                    labelValue = input.updateId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: updateId.");
                    }
                    resolvedPath = resolvedPath.replace("{updateId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: updateId.");
                }
                query = __assign(__assign({}, (input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName })), (input.addonName !== undefined && { addonName: input.addonName }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DisassociateIdentityProviderConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/identity-provider-configs/disassociate";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                body = JSON.stringify(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.identityProviderConfig !== undefined &&
                    input.identityProviderConfig !== null && {
                    identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListAddonsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/addons";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListClustersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters";
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListFargateProfilesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/fargate-profiles";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListIdentityProviderConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/identity-provider-configs";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListNodegroupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{clusterName}/node-groups";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                query = __assign(__assign({}, (input.maxResults !== undefined && { maxResults: input.maxResults.toString() })), (input.nextToken !== undefined && { nextToken: input.nextToken }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListTagsForResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListUpdatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clusters/{name}/updates";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                query = __assign(__assign(__assign(__assign({}, (input.nodegroupName !== undefined && { nodegroupName: input.nodegroupName })), (input.addonName !== undefined && { addonName: input.addonName })), (input.nextToken !== undefined && { nextToken: input.nextToken })), (input.maxResults !== undefined && { maxResults: input.maxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{resourceArn}";
                if (input.resourceArn !== undefined) {
                    labelValue = input.resourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: resourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: resourceArn.");
                }
                query = __assign({}, (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateAddonCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/addons/{addonName}/update";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.addonName !== undefined) {
                    labelValue = input.addonName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: addonName.");
                    }
                    resolvedPath = resolvedPath.replace("{addonName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: addonName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.addonVersion !== undefined && input.addonVersion !== null && { addonVersion: input.addonVersion })), { clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.resolveConflicts !== undefined &&
                    input.resolveConflicts !== null && { resolveConflicts: input.resolveConflicts })), (input.serviceAccountRoleArn !== undefined &&
                    input.serviceAccountRoleArn !== null && { serviceAccountRoleArn: input.serviceAccountRoleArn })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateClusterConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{name}/update-config";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.logging !== undefined &&
                    input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) })), (input.resourcesVpcConfig !== undefined &&
                    input.resourcesVpcConfig !== null && {
                    resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateClusterVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{name}/updates";
                if (input.name !== undefined) {
                    labelValue = input.name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: name.");
                    }
                    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: name.");
                }
                body = JSON.stringify(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.version !== undefined && input.version !== null && { version: input.version })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateNodegroupConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.nodegroupName !== undefined) {
                    labelValue = input.nodegroupName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: nodegroupName.");
                    }
                    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: nodegroupName.");
                }
                body = JSON.stringify(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.labels !== undefined &&
                    input.labels !== null && { labels: serializeAws_restJson1UpdateLabelsPayload(input.labels, context) })), (input.scalingConfig !== undefined &&
                    input.scalingConfig !== null && {
                    scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
                })), (input.taints !== undefined &&
                    input.taints !== null && { taints: serializeAws_restJson1UpdateTaintsPayload(input.taints, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateNodegroupVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
                if (input.clusterName !== undefined) {
                    labelValue = input.clusterName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: clusterName.");
                    }
                    resolvedPath = resolvedPath.replace("{clusterName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: clusterName.");
                }
                if (input.nodegroupName !== undefined) {
                    labelValue = input.nodegroupName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: nodegroupName.");
                    }
                    resolvedPath = resolvedPath.replace("{nodegroupName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: nodegroupName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.force !== undefined && input.force !== null && { force: input.force })), (input.launchTemplate !== undefined &&
                    input.launchTemplate !== null && {
                    launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
                })), (input.releaseVersion !== undefined &&
                    input.releaseVersion !== null && { releaseVersion: input.releaseVersion })), (input.version !== undefined && input.version !== null && { version: input.version })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1AssociateEncryptionConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateEncryptionConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AssociateEncryptionConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1AssociateIdentityProviderConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AssociateIdentityProviderConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    tags: undefined,
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AssociateIdentityProviderConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateAddonCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateAddonCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    addon: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.addon !== undefined && data.addon !== null) {
                    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateAddonCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    cluster: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.cluster !== undefined && data.cluster !== null) {
                    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceLimitExceededException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "UnsupportedAvailabilityZoneException": return [3 /*break*/, 14];
                    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateFargateProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFargateProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fargateProfile: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
                    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFargateProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceLimitExceededException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                    case "UnsupportedAvailabilityZoneException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateNodegroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateNodegroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nodegroup: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nodegroup !== undefined && data.nodegroup !== null) {
                    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateNodegroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceLimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceLimitExceededException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteAddonCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteAddonCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    addon: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.addon !== undefined && data.addon !== null) {
                    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteAddonCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    cluster: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.cluster !== undefined && data.cluster !== null) {
                    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteFargateProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFargateProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fargateProfile: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
                    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteFargateProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteNodegroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteNodegroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nodegroup: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nodegroup !== undefined && data.nodegroup !== null) {
                    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteNodegroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeAddonCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeAddonCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    addon: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.addon !== undefined && data.addon !== null) {
                    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeAddonCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeAddonVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeAddonVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    addons: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.addons !== undefined && data.addons !== null) {
                    contents.addons = deserializeAws_restJson1Addons(data.addons, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeAddonVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeClusterCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeClusterCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    cluster: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.cluster !== undefined && data.cluster !== null) {
                    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeFargateProfileCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeFargateProfileCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fargateProfile: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fargateProfile !== undefined && data.fargateProfile !== null) {
                    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeFargateProfileCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeIdentityProviderConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeIdentityProviderConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    identityProviderConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.identityProviderConfig !== undefined && data.identityProviderConfig !== null) {
                    contents.identityProviderConfig = deserializeAws_restJson1IdentityProviderConfigResponse(data.identityProviderConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeIdentityProviderConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeNodegroupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeNodegroupCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nodegroup: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nodegroup !== undefined && data.nodegroup !== null) {
                    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeNodegroupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DescribeUpdateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeUpdateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeUpdateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListAddonsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListAddonsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    addons: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.addons !== undefined && data.addons !== null) {
                    contents.addons = deserializeAws_restJson1StringList(data.addons, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListAddonsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServerException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListClustersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListClustersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clusters: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusters !== undefined && data.clusters !== null) {
                    contents.clusters = deserializeAws_restJson1StringList(data.clusters, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListClustersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListFargateProfilesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFargateProfilesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fargateProfileNames: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fargateProfileNames !== undefined && data.fargateProfileNames !== null) {
                    contents.fargateProfileNames = deserializeAws_restJson1StringList(data.fargateProfileNames, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFargateProfilesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListIdentityProviderConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListIdentityProviderConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    identityProviderConfigs: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.identityProviderConfigs !== undefined && data.identityProviderConfigs !== null) {
                    contents.identityProviderConfigs = deserializeAws_restJson1IdentityProviderConfigs(data.identityProviderConfigs, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListIdentityProviderConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListNodegroupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListNodegroupsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    nodegroups: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.nodegroups !== undefined && data.nodegroups !== null) {
                    contents.nodegroups = deserializeAws_restJson1StringList(data.nodegroups, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListNodegroupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ServiceUnavailableException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListTagsForResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsForResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#BadRequestException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#NotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListUpdatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListUpdatesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    updateIds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.updateIds !== undefined && data.updateIds !== null) {
                    contents.updateIds = deserializeAws_restJson1StringList(data.updateIds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListUpdatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServerException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#BadRequestException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#NotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UntagResourceCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                };
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#BadRequestException": return [3 /*break*/, 2];
                    case "NotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#NotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateAddonCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateAddonCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateAddonCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateClusterConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateClusterConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateClusterConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateClusterVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateClusterVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateClusterVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateNodegroupConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateNodegroupConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateNodegroupConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateNodegroupVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateNodegroupVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    update: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.update !== undefined && data.update !== null) {
                    contents.update = deserializeAws_restJson1Update(data.update, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateNodegroupVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ClientException": return [3 /*break*/, 2];
                    case "com.amazonaws.eks#ClientException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.eks#InvalidParameterException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.eks#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.eks#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.eks#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServerException": return [3 /*break*/, 12];
                    case "com.amazonaws.eks#ServerException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ClientExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ClientException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            fargateProfileName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1NotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "NotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceInUseException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceLimitExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
        if (data.clusterName !== undefined && data.clusterName !== null) {
            contents.clusterName = data.clusterName;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.nodegroupName !== undefined && data.nodegroupName !== null) {
            contents.nodegroupName = data.nodegroupName;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            fargateProfileName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServerException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            addonName: undefined,
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceUnavailableException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedAvailabilityZoneException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            clusterName: undefined,
            message: undefined,
            nodegroupName: undefined,
            validZones: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1EncryptionConfig = function (input, context) {
    return __assign(__assign({}, (input.provider !== undefined &&
        input.provider !== null && { provider: serializeAws_restJson1Provider(input.provider, context) })), (input.resources !== undefined &&
        input.resources !== null && { resources: serializeAws_restJson1StringList(input.resources, context) }));
};
var serializeAws_restJson1EncryptionConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EncryptionConfig(entry, context);
    });
};
var serializeAws_restJson1FargateProfileLabel = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1FargateProfileSelector = function (input, context) {
    return __assign(__assign({}, (input.labels !== undefined &&
        input.labels !== null && { labels: serializeAws_restJson1FargateProfileLabel(input.labels, context) })), (input.namespace !== undefined && input.namespace !== null && { namespace: input.namespace }));
};
var serializeAws_restJson1FargateProfileSelectors = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FargateProfileSelector(entry, context);
    });
};
var serializeAws_restJson1IdentityProviderConfig = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.type !== undefined && input.type !== null && { type: input.type }));
};
var serializeAws_restJson1KubernetesNetworkConfigRequest = function (input, context) {
    return __assign({}, (input.serviceIpv4Cidr !== undefined &&
        input.serviceIpv4Cidr !== null && { serviceIpv4Cidr: input.serviceIpv4Cidr }));
};
var serializeAws_restJson1labelsKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1labelsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1LaunchTemplateSpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.id !== undefined && input.id !== null && { id: input.id })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_restJson1Logging = function (input, context) {
    return __assign({}, (input.clusterLogging !== undefined &&
        input.clusterLogging !== null && {
        clusterLogging: serializeAws_restJson1LogSetups(input.clusterLogging, context),
    }));
};
var serializeAws_restJson1LogSetup = function (input, context) {
    return __assign(__assign({}, (input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled })), (input.types !== undefined &&
        input.types !== null && { types: serializeAws_restJson1LogTypes(input.types, context) }));
};
var serializeAws_restJson1LogSetups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LogSetup(entry, context);
    });
};
var serializeAws_restJson1LogTypes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1NodegroupScalingConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.desiredSize !== undefined && input.desiredSize !== null && { desiredSize: input.desiredSize })), (input.maxSize !== undefined && input.maxSize !== null && { maxSize: input.maxSize })), (input.minSize !== undefined && input.minSize !== null && { minSize: input.minSize }));
};
var serializeAws_restJson1OidcIdentityProviderConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId })), (input.groupsClaim !== undefined && input.groupsClaim !== null && { groupsClaim: input.groupsClaim })), (input.groupsPrefix !== undefined && input.groupsPrefix !== null && { groupsPrefix: input.groupsPrefix })), (input.identityProviderConfigName !== undefined &&
        input.identityProviderConfigName !== null && { identityProviderConfigName: input.identityProviderConfigName })), (input.issuerUrl !== undefined && input.issuerUrl !== null && { issuerUrl: input.issuerUrl })), (input.requiredClaims !== undefined &&
        input.requiredClaims !== null && {
        requiredClaims: serializeAws_restJson1requiredClaimsMap(input.requiredClaims, context),
    })), (input.usernameClaim !== undefined && input.usernameClaim !== null && { usernameClaim: input.usernameClaim })), (input.usernamePrefix !== undefined &&
        input.usernamePrefix !== null && { usernamePrefix: input.usernamePrefix }));
};
var serializeAws_restJson1Provider = function (input, context) {
    return __assign({}, (input.keyArn !== undefined && input.keyArn !== null && { keyArn: input.keyArn }));
};
var serializeAws_restJson1RemoteAccessConfig = function (input, context) {
    return __assign(__assign({}, (input.ec2SshKey !== undefined && input.ec2SshKey !== null && { ec2SshKey: input.ec2SshKey })), (input.sourceSecurityGroups !== undefined &&
        input.sourceSecurityGroups !== null && {
        sourceSecurityGroups: serializeAws_restJson1StringList(input.sourceSecurityGroups, context),
    }));
};
var serializeAws_restJson1requiredClaimsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1StringList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1TagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Taint = function (input, context) {
    return __assign(__assign(__assign({}, (input.effect !== undefined && input.effect !== null && { effect: input.effect })), (input.key !== undefined && input.key !== null && { key: input.key })), (input.value !== undefined && input.value !== null && { value: input.value }));
};
var serializeAws_restJson1taintsList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Taint(entry, context);
    });
};
var serializeAws_restJson1UpdateLabelsPayload = function (input, context) {
    return __assign(__assign({}, (input.addOrUpdateLabels !== undefined &&
        input.addOrUpdateLabels !== null && {
        addOrUpdateLabels: serializeAws_restJson1labelsMap(input.addOrUpdateLabels, context),
    })), (input.removeLabels !== undefined &&
        input.removeLabels !== null && {
        removeLabels: serializeAws_restJson1labelsKeyList(input.removeLabels, context),
    }));
};
var serializeAws_restJson1UpdateTaintsPayload = function (input, context) {
    return __assign(__assign({}, (input.addOrUpdateTaints !== undefined &&
        input.addOrUpdateTaints !== null && {
        addOrUpdateTaints: serializeAws_restJson1taintsList(input.addOrUpdateTaints, context),
    })), (input.removeTaints !== undefined &&
        input.removeTaints !== null && { removeTaints: serializeAws_restJson1taintsList(input.removeTaints, context) }));
};
var serializeAws_restJson1VpcConfigRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.endpointPrivateAccess !== undefined &&
        input.endpointPrivateAccess !== null && { endpointPrivateAccess: input.endpointPrivateAccess })), (input.endpointPublicAccess !== undefined &&
        input.endpointPublicAccess !== null && { endpointPublicAccess: input.endpointPublicAccess })), (input.publicAccessCidrs !== undefined &&
        input.publicAccessCidrs !== null && {
        publicAccessCidrs: serializeAws_restJson1StringList(input.publicAccessCidrs, context),
    })), (input.securityGroupIds !== undefined &&
        input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    })), (input.subnetIds !== undefined &&
        input.subnetIds !== null && { subnetIds: serializeAws_restJson1StringList(input.subnetIds, context) }));
};
var deserializeAws_restJson1Addon = function (output, context) {
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
var deserializeAws_restJson1AddonHealth = function (output, context) {
    return {
        issues: output.issues !== undefined && output.issues !== null
            ? deserializeAws_restJson1AddonIssueList(output.issues, context)
            : undefined,
    };
};
var deserializeAws_restJson1AddonInfo = function (output, context) {
    return {
        addonName: output.addonName !== undefined && output.addonName !== null ? output.addonName : undefined,
        addonVersions: output.addonVersions !== undefined && output.addonVersions !== null
            ? deserializeAws_restJson1AddonVersionInfoList(output.addonVersions, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1AddonIssue = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1AddonIssueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonIssue(entry, context);
    });
};
var deserializeAws_restJson1Addons = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonInfo(entry, context);
    });
};
var deserializeAws_restJson1AddonVersionInfo = function (output, context) {
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
var deserializeAws_restJson1AddonVersionInfoList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AddonVersionInfo(entry, context);
    });
};
var deserializeAws_restJson1AutoScalingGroup = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1AutoScalingGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AutoScalingGroup(entry, context);
    });
};
var deserializeAws_restJson1Certificate = function (output, context) {
    return {
        data: output.data !== undefined && output.data !== null ? output.data : undefined,
    };
};
var deserializeAws_restJson1Cluster = function (output, context) {
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
var deserializeAws_restJson1Compatibilities = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Compatibility(entry, context);
    });
};
var deserializeAws_restJson1Compatibility = function (output, context) {
    return {
        clusterVersion: output.clusterVersion !== undefined && output.clusterVersion !== null ? output.clusterVersion : undefined,
        defaultVersion: output.defaultVersion !== undefined && output.defaultVersion !== null ? output.defaultVersion : undefined,
        platformVersions: output.platformVersions !== undefined && output.platformVersions !== null
            ? deserializeAws_restJson1StringList(output.platformVersions, context)
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionConfig = function (output, context) {
    return {
        provider: output.provider !== undefined && output.provider !== null
            ? deserializeAws_restJson1Provider(output.provider, context)
            : undefined,
        resources: output.resources !== undefined && output.resources !== null
            ? deserializeAws_restJson1StringList(output.resources, context)
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EncryptionConfig(entry, context);
    });
};
var deserializeAws_restJson1ErrorDetail = function (output, context) {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1ErrorDetails = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ErrorDetail(entry, context);
    });
};
var deserializeAws_restJson1FargateProfile = function (output, context) {
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
var deserializeAws_restJson1FargateProfileLabel = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1FargateProfileSelector = function (output, context) {
    return {
        labels: output.labels !== undefined && output.labels !== null
            ? deserializeAws_restJson1FargateProfileLabel(output.labels, context)
            : undefined,
        namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    };
};
var deserializeAws_restJson1FargateProfileSelectors = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FargateProfileSelector(entry, context);
    });
};
var deserializeAws_restJson1Identity = function (output, context) {
    return {
        oidc: output.oidc !== undefined && output.oidc !== null
            ? deserializeAws_restJson1OIDC(output.oidc, context)
            : undefined,
    };
};
var deserializeAws_restJson1IdentityProviderConfig = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
var deserializeAws_restJson1IdentityProviderConfigResponse = function (output, context) {
    return {
        oidc: output.oidc !== undefined && output.oidc !== null
            ? deserializeAws_restJson1OidcIdentityProviderConfig(output.oidc, context)
            : undefined,
    };
};
var deserializeAws_restJson1IdentityProviderConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityProviderConfig(entry, context);
    });
};
var deserializeAws_restJson1Issue = function (output, context) {
    return {
        code: output.code !== undefined && output.code !== null ? output.code : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        resourceIds: output.resourceIds !== undefined && output.resourceIds !== null
            ? deserializeAws_restJson1StringList(output.resourceIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1IssueList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Issue(entry, context);
    });
};
var deserializeAws_restJson1KubernetesNetworkConfigResponse = function (output, context) {
    return {
        serviceIpv4Cidr: output.serviceIpv4Cidr !== undefined && output.serviceIpv4Cidr !== null ? output.serviceIpv4Cidr : undefined,
    };
};
var deserializeAws_restJson1labelsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1LaunchTemplateSpecification = function (output, context) {
    return {
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1Logging = function (output, context) {
    return {
        clusterLogging: output.clusterLogging !== undefined && output.clusterLogging !== null
            ? deserializeAws_restJson1LogSetups(output.clusterLogging, context)
            : undefined,
    };
};
var deserializeAws_restJson1LogSetup = function (output, context) {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        types: output.types !== undefined && output.types !== null
            ? deserializeAws_restJson1LogTypes(output.types, context)
            : undefined,
    };
};
var deserializeAws_restJson1LogSetups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LogSetup(entry, context);
    });
};
var deserializeAws_restJson1LogTypes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Nodegroup = function (output, context) {
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
var deserializeAws_restJson1NodegroupHealth = function (output, context) {
    return {
        issues: output.issues !== undefined && output.issues !== null
            ? deserializeAws_restJson1IssueList(output.issues, context)
            : undefined,
    };
};
var deserializeAws_restJson1NodegroupResources = function (output, context) {
    return {
        autoScalingGroups: output.autoScalingGroups !== undefined && output.autoScalingGroups !== null
            ? deserializeAws_restJson1AutoScalingGroupList(output.autoScalingGroups, context)
            : undefined,
        remoteAccessSecurityGroup: output.remoteAccessSecurityGroup !== undefined && output.remoteAccessSecurityGroup !== null
            ? output.remoteAccessSecurityGroup
            : undefined,
    };
};
var deserializeAws_restJson1NodegroupScalingConfig = function (output, context) {
    return {
        desiredSize: output.desiredSize !== undefined && output.desiredSize !== null ? output.desiredSize : undefined,
        maxSize: output.maxSize !== undefined && output.maxSize !== null ? output.maxSize : undefined,
        minSize: output.minSize !== undefined && output.minSize !== null ? output.minSize : undefined,
    };
};
var deserializeAws_restJson1OIDC = function (output, context) {
    return {
        issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
    };
};
var deserializeAws_restJson1OidcIdentityProviderConfig = function (output, context) {
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
var deserializeAws_restJson1Provider = function (output, context) {
    return {
        keyArn: output.keyArn !== undefined && output.keyArn !== null ? output.keyArn : undefined,
    };
};
var deserializeAws_restJson1RemoteAccessConfig = function (output, context) {
    return {
        ec2SshKey: output.ec2SshKey !== undefined && output.ec2SshKey !== null ? output.ec2SshKey : undefined,
        sourceSecurityGroups: output.sourceSecurityGroups !== undefined && output.sourceSecurityGroups !== null
            ? deserializeAws_restJson1StringList(output.sourceSecurityGroups, context)
            : undefined,
    };
};
var deserializeAws_restJson1requiredClaimsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1StringList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1TagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Taint = function (output, context) {
    return {
        effect: output.effect !== undefined && output.effect !== null ? output.effect : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1taintsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Taint(entry, context);
    });
};
var deserializeAws_restJson1Update = function (output, context) {
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
var deserializeAws_restJson1UpdateParam = function (output, context) {
    return {
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
var deserializeAws_restJson1UpdateParams = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UpdateParam(entry, context);
    });
};
var deserializeAws_restJson1VpcConfigResponse = function (output, context) {
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
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var isSerializableHeaderValue = function (value) {
    return value !== undefined &&
        value !== null &&
        value !== "" &&
        (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
        (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
};
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
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