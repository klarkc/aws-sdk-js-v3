import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1ChangeServerLifeCycleStateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ChangeServerLifeCycleState";
                body = JSON.stringify(__assign(__assign({}, (input.lifeCycle !== undefined &&
                    input.lifeCycle !== null && {
                    lifeCycle: serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle(input.lifeCycle, context),
                })), (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1CreateReplicationConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateReplicationConfigurationTemplate";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.associateDefaultSecurityGroup !== undefined &&
                    input.associateDefaultSecurityGroup !== null && {
                    associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
                })), (input.bandwidthThrottling !== undefined &&
                    input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling })), (input.createPublicIP !== undefined &&
                    input.createPublicIP !== null && { createPublicIP: input.createPublicIP })), (input.dataPlaneRouting !== undefined &&
                    input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting })), (input.defaultLargeStagingDiskType !== undefined &&
                    input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType })), (input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption })), (input.ebsEncryptionKeyArn !== undefined &&
                    input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn })), (input.replicationServerInstanceType !== undefined &&
                    input.replicationServerInstanceType !== null && {
                    replicationServerInstanceType: input.replicationServerInstanceType,
                })), (input.replicationServersSecurityGroupsIDs !== undefined &&
                    input.replicationServersSecurityGroupsIDs !== null && {
                    replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
                })), (input.stagingAreaSubnetId !== undefined &&
                    input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId })), (input.stagingAreaTags !== undefined &&
                    input.stagingAreaTags !== null && {
                    stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
                })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) })), (input.useDedicatedReplicationServer !== undefined &&
                    input.useDedicatedReplicationServer !== null && {
                    useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
export var serializeAws_restJson1DeleteJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DeleteJob";
                body = JSON.stringify(__assign({}, (input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID })));
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
export var serializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DeleteReplicationConfigurationTemplate";
                body = JSON.stringify(__assign({}, (input.replicationConfigurationTemplateID !== undefined &&
                    input.replicationConfigurationTemplateID !== null && {
                    replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
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
export var serializeAws_restJson1DeleteSourceServerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DeleteSourceServer";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1DescribeJobLogItemsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DescribeJobLogItems";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.jobID !== undefined && input.jobID !== null && { jobID: input.jobID })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1DescribeJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DescribeJobs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1DescribeJobsRequestFilters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DescribeReplicationConfigurationTemplates";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.replicationConfigurationTemplateIDs !== undefined &&
                    input.replicationConfigurationTemplateIDs !== null && {
                    replicationConfigurationTemplateIDs: serializeAws_restJson1ReplicationConfigurationTemplateIDs(input.replicationConfigurationTemplateIDs, context),
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
export var serializeAws_restJson1DescribeSourceServersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DescribeSourceServers";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && {
                    filters: serializeAws_restJson1DescribeSourceServersRequestFilters(input.filters, context),
                })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1DisconnectFromServiceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/DisconnectFromService";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1FinalizeCutoverCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/FinalizeCutover";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1GetLaunchConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/GetLaunchConfiguration";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1GetReplicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/GetReplicationConfiguration";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1InitializeServiceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/InitializeService";
                body = "";
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
export var serializeAws_restJson1MarkAsArchivedCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/MarkAsArchived";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1RetryDataReplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/RetryDataReplication";
                body = JSON.stringify(__assign({}, (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })));
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
export var serializeAws_restJson1StartCutoverCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/StartCutover";
                body = JSON.stringify(__assign(__assign({}, (input.sourceServerIDs !== undefined &&
                    input.sourceServerIDs !== null && {
                    sourceServerIDs: serializeAws_restJson1StartCutoverRequestSourceServerIDs(input.sourceServerIDs, context),
                })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) })));
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
export var serializeAws_restJson1StartTestCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/StartTest";
                body = JSON.stringify(__assign(__assign({}, (input.sourceServerIDs !== undefined &&
                    input.sourceServerIDs !== null && {
                    sourceServerIDs: serializeAws_restJson1StartTestRequestSourceServerIDs(input.sourceServerIDs, context),
                })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) })));
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
                body = JSON.stringify(__assign({}, (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) })));
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
export var serializeAws_restJson1TerminateTargetInstancesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/TerminateTargetInstances";
                body = JSON.stringify(__assign(__assign({}, (input.sourceServerIDs !== undefined &&
                    input.sourceServerIDs !== null && {
                    sourceServerIDs: serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs(input.sourceServerIDs, context),
                })), (input.tags !== undefined &&
                    input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) })));
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
export var serializeAws_restJson1UpdateLaunchConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateLaunchConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.copyPrivateIp !== undefined && input.copyPrivateIp !== null && { copyPrivateIp: input.copyPrivateIp })), (input.copyTags !== undefined && input.copyTags !== null && { copyTags: input.copyTags })), (input.launchDisposition !== undefined &&
                    input.launchDisposition !== null && { launchDisposition: input.launchDisposition })), (input.licensing !== undefined &&
                    input.licensing !== null && { licensing: serializeAws_restJson1Licensing(input.licensing, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })), (input.targetInstanceTypeRightSizingMethod !== undefined &&
                    input.targetInstanceTypeRightSizingMethod !== null && {
                    targetInstanceTypeRightSizingMethod: input.targetInstanceTypeRightSizingMethod,
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
export var serializeAws_restJson1UpdateReplicationConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateReplicationConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.associateDefaultSecurityGroup !== undefined &&
                    input.associateDefaultSecurityGroup !== null && {
                    associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
                })), (input.bandwidthThrottling !== undefined &&
                    input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling })), (input.createPublicIP !== undefined &&
                    input.createPublicIP !== null && { createPublicIP: input.createPublicIP })), (input.dataPlaneRouting !== undefined &&
                    input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting })), (input.defaultLargeStagingDiskType !== undefined &&
                    input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType })), (input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption })), (input.ebsEncryptionKeyArn !== undefined &&
                    input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.replicatedDisks !== undefined &&
                    input.replicatedDisks !== null && {
                    replicatedDisks: serializeAws_restJson1ReplicationConfigurationReplicatedDisks(input.replicatedDisks, context),
                })), (input.replicationServerInstanceType !== undefined &&
                    input.replicationServerInstanceType !== null && {
                    replicationServerInstanceType: input.replicationServerInstanceType,
                })), (input.replicationServersSecurityGroupsIDs !== undefined &&
                    input.replicationServersSecurityGroupsIDs !== null && {
                    replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
                })), (input.sourceServerID !== undefined &&
                    input.sourceServerID !== null && { sourceServerID: input.sourceServerID })), (input.stagingAreaSubnetId !== undefined &&
                    input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId })), (input.stagingAreaTags !== undefined &&
                    input.stagingAreaTags !== null && {
                    stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
                })), (input.useDedicatedReplicationServer !== undefined &&
                    input.useDedicatedReplicationServer !== null && {
                    useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
export var serializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateReplicationConfigurationTemplate";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.arn !== undefined && input.arn !== null && { arn: input.arn })), (input.associateDefaultSecurityGroup !== undefined &&
                    input.associateDefaultSecurityGroup !== null && {
                    associateDefaultSecurityGroup: input.associateDefaultSecurityGroup,
                })), (input.bandwidthThrottling !== undefined &&
                    input.bandwidthThrottling !== null && { bandwidthThrottling: input.bandwidthThrottling })), (input.createPublicIP !== undefined &&
                    input.createPublicIP !== null && { createPublicIP: input.createPublicIP })), (input.dataPlaneRouting !== undefined &&
                    input.dataPlaneRouting !== null && { dataPlaneRouting: input.dataPlaneRouting })), (input.defaultLargeStagingDiskType !== undefined &&
                    input.defaultLargeStagingDiskType !== null && { defaultLargeStagingDiskType: input.defaultLargeStagingDiskType })), (input.ebsEncryption !== undefined && input.ebsEncryption !== null && { ebsEncryption: input.ebsEncryption })), (input.ebsEncryptionKeyArn !== undefined &&
                    input.ebsEncryptionKeyArn !== null && { ebsEncryptionKeyArn: input.ebsEncryptionKeyArn })), (input.replicationConfigurationTemplateID !== undefined &&
                    input.replicationConfigurationTemplateID !== null && {
                    replicationConfigurationTemplateID: input.replicationConfigurationTemplateID,
                })), (input.replicationServerInstanceType !== undefined &&
                    input.replicationServerInstanceType !== null && {
                    replicationServerInstanceType: input.replicationServerInstanceType,
                })), (input.replicationServersSecurityGroupsIDs !== undefined &&
                    input.replicationServersSecurityGroupsIDs !== null && {
                    replicationServersSecurityGroupsIDs: serializeAws_restJson1ReplicationServersSecurityGroupsIDs(input.replicationServersSecurityGroupsIDs, context),
                })), (input.stagingAreaSubnetId !== undefined &&
                    input.stagingAreaSubnetId !== null && { stagingAreaSubnetId: input.stagingAreaSubnetId })), (input.stagingAreaTags !== undefined &&
                    input.stagingAreaTags !== null && {
                    stagingAreaTags: serializeAws_restJson1TagsMap(input.stagingAreaTags, context),
                })), (input.useDedicatedReplicationServer !== undefined &&
                    input.useDedicatedReplicationServer !== null && {
                    useDedicatedReplicationServer: input.useDedicatedReplicationServer,
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
export var deserializeAws_restJson1ChangeServerLifeCycleStateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ChangeServerLifeCycleStateCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ChangeServerLifeCycleStateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateReplicationConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateReplicationConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UninitializedAccountException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteJobCommandError(output, context)];
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
var deserializeAws_restJson1DeleteJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError(output, context)];
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
var deserializeAws_restJson1DeleteReplicationConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSourceServerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSourceServerCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSourceServerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeJobLogItemsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeJobLogItemsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1JobLogs(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeJobLogItemsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UninitializedAccountException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1JobsList(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UninitializedAccountException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1ReplicationConfigurationTemplates(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeReplicationConfigurationTemplatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSourceServersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSourceServersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    items: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.items !== undefined && data.items !== null) {
                    contents.items = deserializeAws_restJson1SourceServersList(data.items, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSourceServersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "UninitializedAccountException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DisconnectFromServiceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DisconnectFromServiceCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DisconnectFromServiceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1FinalizeCutoverCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1FinalizeCutoverCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1FinalizeCutoverCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLaunchConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLaunchConfigurationCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLaunchConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetReplicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetReplicationConfigurationCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetReplicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InitializeServiceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InitializeServiceCommandError(output, context)];
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
var deserializeAws_restJson1InitializeServiceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#AccessDeniedException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1MarkAsArchivedCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1MarkAsArchivedCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1MarkAsArchivedCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RetryDataReplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RetryDataReplicationCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RetryDataReplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartCutoverCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartCutoverCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.job !== undefined && data.job !== null) {
                    contents.job = deserializeAws_restJson1Job(data.job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartCutoverCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartTestCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartTestCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.job !== undefined && data.job !== null) {
                    contents.job = deserializeAws_restJson1Job(data.job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartTestCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1TerminateTargetInstancesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1TerminateTargetInstancesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    job: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.job !== undefined && data.job !== null) {
                    contents.job = deserializeAws_restJson1Job(data.job, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1TerminateTargetInstancesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ThrottlingException": return [3 /*break*/, 8];
                    case "ValidationException": return [3 /*break*/, 10];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateLaunchConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateLaunchConfigurationCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateLaunchConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateReplicationConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateReplicationConfigurationCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateReplicationConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ConflictException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "UninitializedAccountException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError(output, context)];
                }
                contents = {
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
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
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
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateReplicationConfigurationTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mgn#ResourceNotFoundException": return [3 /*break*/, 2];
                    case "UninitializedAccountException": return [3 /*break*/, 4];
                    case "com.amazonaws.mgn#UninitializedAccountException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mgn#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UninitializedAccountExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "AccessDeniedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
            resourceId: undefined,
            resourceType: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            message: undefined,
            retryAfterSeconds: undefined,
        };
        if (parsedOutput.headers["retry-after"] !== undefined) {
            contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
        }
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
            code: undefined,
            message: undefined,
            resourceId: undefined,
            resourceType: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
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
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        if (data.quotaCode !== undefined && data.quotaCode !== null) {
            contents.quotaCode = data.quotaCode;
        }
        if (data.serviceCode !== undefined && data.serviceCode !== null) {
            contents.serviceCode = data.serviceCode;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UninitializedAccountExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UninitializedAccountException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.code !== undefined && data.code !== null) {
            contents.code = data.code;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ValidationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ValidationException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            code: undefined,
            fieldList: undefined,
            message: undefined,
            reason: undefined,
        };
        data = parsedOutput.body;
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
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1ChangeServerLifeCycleStateSourceServerLifecycle = function (input, context) {
    return __assign({}, (input.state !== undefined && input.state !== null && { state: input.state }));
};
var serializeAws_restJson1DescribeJobsRequestFilters = function (input, context) {
    return __assign(__assign(__assign({}, (input.fromDate !== undefined && input.fromDate !== null && { fromDate: input.fromDate })), (input.jobIDs !== undefined &&
        input.jobIDs !== null && {
        jobIDs: serializeAws_restJson1DescribeJobsRequestFiltersJobIDs(input.jobIDs, context),
    })), (input.toDate !== undefined && input.toDate !== null && { toDate: input.toDate }));
};
var serializeAws_restJson1DescribeJobsRequestFiltersJobIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1DescribeSourceServersRequestFilters = function (input, context) {
    return __assign(__assign({}, (input.isArchived !== undefined && input.isArchived !== null && { isArchived: input.isArchived })), (input.sourceServerIDs !== undefined &&
        input.sourceServerIDs !== null && {
        sourceServerIDs: serializeAws_restJson1DescribeSourceServersRequestFiltersIDs(input.sourceServerIDs, context),
    }));
};
var serializeAws_restJson1DescribeSourceServersRequestFiltersIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Licensing = function (input, context) {
    return __assign({}, (input.osByol !== undefined && input.osByol !== null && { osByol: input.osByol }));
};
var serializeAws_restJson1ReplicationConfigurationReplicatedDisk = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName })), (input.iops !== undefined && input.iops !== null && { iops: input.iops })), (input.isBootDisk !== undefined && input.isBootDisk !== null && { isBootDisk: input.isBootDisk })), (input.stagingDiskType !== undefined &&
        input.stagingDiskType !== null && { stagingDiskType: input.stagingDiskType }));
};
var serializeAws_restJson1ReplicationConfigurationReplicatedDisks = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};
var serializeAws_restJson1ReplicationConfigurationTemplateIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ReplicationServersSecurityGroupsIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1StartCutoverRequestSourceServerIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1StartTestRequestSourceServerIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1TagsMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1TerminateTargetInstancesRequestSourceServerIDs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1CPU = function (output, context) {
    return {
        cores: output.cores !== undefined && output.cores !== null ? output.cores : undefined,
        modelName: output.modelName !== undefined && output.modelName !== null ? output.modelName : undefined,
    };
};
var deserializeAws_restJson1Cpus = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CPU(entry, context);
    });
};
var deserializeAws_restJson1DataReplicationError = function (output, context) {
    return {
        error: output.error !== undefined && output.error !== null ? output.error : undefined,
        rawError: output.rawError !== undefined && output.rawError !== null ? output.rawError : undefined,
    };
};
var deserializeAws_restJson1DataReplicationInfo = function (output, context) {
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
var deserializeAws_restJson1DataReplicationInfoReplicatedDisk = function (output, context) {
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
var deserializeAws_restJson1DataReplicationInfoReplicatedDisks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataReplicationInfoReplicatedDisk(entry, context);
    });
};
var deserializeAws_restJson1DataReplicationInitiation = function (output, context) {
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
var deserializeAws_restJson1DataReplicationInitiationStep = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DataReplicationInitiationSteps = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataReplicationInitiationStep(entry, context);
    });
};
var deserializeAws_restJson1Disk = function (output, context) {
    return {
        bytes: output.bytes !== undefined && output.bytes !== null ? output.bytes : undefined,
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
    };
};
var deserializeAws_restJson1Disks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Disk(entry, context);
    });
};
var deserializeAws_restJson1IdentificationHints = function (output, context) {
    return {
        awsInstanceID: output.awsInstanceID !== undefined && output.awsInstanceID !== null ? output.awsInstanceID : undefined,
        fqdn: output.fqdn !== undefined && output.fqdn !== null ? output.fqdn : undefined,
        hostname: output.hostname !== undefined && output.hostname !== null ? output.hostname : undefined,
        vmWareUuid: output.vmWareUuid !== undefined && output.vmWareUuid !== null ? output.vmWareUuid : undefined,
    };
};
var deserializeAws_restJson1IPsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Job = function (output, context) {
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
var deserializeAws_restJson1JobLog = function (output, context) {
    return {
        event: output.event !== undefined && output.event !== null ? output.event : undefined,
        eventData: output.eventData !== undefined && output.eventData !== null
            ? deserializeAws_restJson1JobLogEventData(output.eventData, context)
            : undefined,
        logDateTime: output.logDateTime !== undefined && output.logDateTime !== null ? output.logDateTime : undefined,
    };
};
var deserializeAws_restJson1JobLogEventData = function (output, context) {
    return {
        conversionServerID: output.conversionServerID !== undefined && output.conversionServerID !== null
            ? output.conversionServerID
            : undefined,
        rawError: output.rawError !== undefined && output.rawError !== null ? output.rawError : undefined,
        sourceServerID: output.sourceServerID !== undefined && output.sourceServerID !== null ? output.sourceServerID : undefined,
        targetInstanceID: output.targetInstanceID !== undefined && output.targetInstanceID !== null ? output.targetInstanceID : undefined,
    };
};
var deserializeAws_restJson1JobLogs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobLog(entry, context);
    });
};
var deserializeAws_restJson1JobsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Job(entry, context);
    });
};
var deserializeAws_restJson1LaunchedInstance = function (output, context) {
    return {
        ec2InstanceID: output.ec2InstanceID !== undefined && output.ec2InstanceID !== null ? output.ec2InstanceID : undefined,
        firstBoot: output.firstBoot !== undefined && output.firstBoot !== null ? output.firstBoot : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
var deserializeAws_restJson1Licensing = function (output, context) {
    return {
        osByol: output.osByol !== undefined && output.osByol !== null ? output.osByol : undefined,
    };
};
var deserializeAws_restJson1LifeCycle = function (output, context) {
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
var deserializeAws_restJson1LifeCycleLastCutover = function (output, context) {
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
var deserializeAws_restJson1LifeCycleLastCutoverFinalized = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
var deserializeAws_restJson1LifeCycleLastCutoverInitiated = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
var deserializeAws_restJson1LifeCycleLastCutoverReverted = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
var deserializeAws_restJson1LifeCycleLastTest = function (output, context) {
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
var deserializeAws_restJson1LifeCycleLastTestFinalized = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
var deserializeAws_restJson1LifeCycleLastTestInitiated = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
        jobID: output.jobID !== undefined && output.jobID !== null ? output.jobID : undefined,
    };
};
var deserializeAws_restJson1LifeCycleLastTestReverted = function (output, context) {
    return {
        apiCallDateTime: output.apiCallDateTime !== undefined && output.apiCallDateTime !== null ? output.apiCallDateTime : undefined,
    };
};
var deserializeAws_restJson1NetworkInterface = function (output, context) {
    return {
        ips: output.ips !== undefined && output.ips !== null
            ? deserializeAws_restJson1IPsList(output.ips, context)
            : undefined,
        isPrimary: output.isPrimary !== undefined && output.isPrimary !== null ? output.isPrimary : undefined,
        macAddress: output.macAddress !== undefined && output.macAddress !== null ? output.macAddress : undefined,
    };
};
var deserializeAws_restJson1NetworkInterfaces = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NetworkInterface(entry, context);
    });
};
var deserializeAws_restJson1OS = function (output, context) {
    return {
        fullString: output.fullString !== undefined && output.fullString !== null ? output.fullString : undefined,
    };
};
var deserializeAws_restJson1ParticipatingServer = function (output, context) {
    return {
        launchStatus: output.launchStatus !== undefined && output.launchStatus !== null ? output.launchStatus : undefined,
        sourceServerID: output.sourceServerID !== undefined && output.sourceServerID !== null ? output.sourceServerID : undefined,
    };
};
var deserializeAws_restJson1ParticipatingServers = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ParticipatingServer(entry, context);
    });
};
var deserializeAws_restJson1ReplicationConfigurationReplicatedDisk = function (output, context) {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        iops: output.iops !== undefined && output.iops !== null ? output.iops : undefined,
        isBootDisk: output.isBootDisk !== undefined && output.isBootDisk !== null ? output.isBootDisk : undefined,
        stagingDiskType: output.stagingDiskType !== undefined && output.stagingDiskType !== null ? output.stagingDiskType : undefined,
    };
};
var deserializeAws_restJson1ReplicationConfigurationReplicatedDisks = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReplicationConfigurationReplicatedDisk(entry, context);
    });
};
var deserializeAws_restJson1ReplicationConfigurationTemplate = function (output, context) {
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
var deserializeAws_restJson1ReplicationConfigurationTemplates = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReplicationConfigurationTemplate(entry, context);
    });
};
var deserializeAws_restJson1ReplicationServersSecurityGroupsIDs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SourceProperties = function (output, context) {
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
var deserializeAws_restJson1SourceServer = function (output, context) {
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
var deserializeAws_restJson1SourceServersList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceServer(entry, context);
    });
};
var deserializeAws_restJson1TagsMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1ValidationExceptionField = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1ValidationExceptionFieldList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
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