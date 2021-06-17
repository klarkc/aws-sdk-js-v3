import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1BatchAssociateScramSecretCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/scram-secrets";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign({}, (input.SecretArnList !== undefined &&
                    input.SecretArnList !== null && {
                    secretArnList: serializeAws_restJson1__listOf__string(input.SecretArnList, context),
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
export var serializeAws_restJson1BatchDisassociateScramSecretCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/scram-secrets";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign({}, (input.SecretArnList !== undefined &&
                    input.SecretArnList !== null && {
                    secretArnList: serializeAws_restJson1__listOf__string(input.SecretArnList, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BrokerNodeGroupInfo !== undefined &&
                    input.BrokerNodeGroupInfo !== null && {
                    brokerNodeGroupInfo: serializeAws_restJson1BrokerNodeGroupInfo(input.BrokerNodeGroupInfo, context),
                })), (input.ClientAuthentication !== undefined &&
                    input.ClientAuthentication !== null && {
                    clientAuthentication: serializeAws_restJson1ClientAuthentication(input.ClientAuthentication, context),
                })), (input.ClusterName !== undefined && input.ClusterName !== null && { clusterName: input.ClusterName })), (input.ConfigurationInfo !== undefined &&
                    input.ConfigurationInfo !== null && {
                    configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
                })), (input.EncryptionInfo !== undefined &&
                    input.EncryptionInfo !== null && {
                    encryptionInfo: serializeAws_restJson1EncryptionInfo(input.EncryptionInfo, context),
                })), (input.EnhancedMonitoring !== undefined &&
                    input.EnhancedMonitoring !== null && { enhancedMonitoring: input.EnhancedMonitoring })), (input.KafkaVersion !== undefined && input.KafkaVersion !== null && { kafkaVersion: input.KafkaVersion })), (input.LoggingInfo !== undefined &&
                    input.LoggingInfo !== null && { loggingInfo: serializeAws_restJson1LoggingInfo(input.LoggingInfo, context) })), (input.NumberOfBrokerNodes !== undefined &&
                    input.NumberOfBrokerNodes !== null && { numberOfBrokerNodes: input.NumberOfBrokerNodes })), (input.OpenMonitoring !== undefined &&
                    input.OpenMonitoring !== null && {
                    openMonitoring: serializeAws_restJson1OpenMonitoringInfo(input.OpenMonitoring, context),
                })), (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
export var serializeAws_restJson1CreateConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/configurations";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.KafkaVersions !== undefined &&
                    input.KafkaVersions !== null && {
                    kafkaVersions: serializeAws_restJson1__listOf__string(input.KafkaVersions, context),
                })), (input.Name !== undefined && input.Name !== null && { name: input.Name })), (input.ServerProperties !== undefined &&
                    input.ServerProperties !== null && { serverProperties: context.base64Encoder(input.ServerProperties) })));
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
export var serializeAws_restJson1DeleteClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                query = __assign({}, (input.CurrentVersion !== undefined && { currentVersion: input.CurrentVersion }));
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
export var serializeAws_restJson1DeleteConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/configurations/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
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
export var serializeAws_restJson1DescribeClusterCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
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
export var serializeAws_restJson1DescribeClusterOperationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/operations/{ClusterOperationArn}";
                if (input.ClusterOperationArn !== undefined) {
                    labelValue = input.ClusterOperationArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterOperationArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterOperationArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterOperationArn.");
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
export var serializeAws_restJson1DescribeConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/configurations/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
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
export var serializeAws_restJson1DescribeConfigurationRevisionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/configurations/{Arn}/revisions/{Revision}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
                }
                if (input.Revision !== undefined) {
                    labelValue = input.Revision.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Revision.");
                    }
                    resolvedPath = resolvedPath.replace("{Revision}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Revision.");
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
export var serializeAws_restJson1GetBootstrapBrokersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}/bootstrap-brokers";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
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
export var serializeAws_restJson1GetCompatibleKafkaVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/compatible-kafka-versions";
                query = __assign({}, (input.ClusterArn !== undefined && { clusterArn: input.ClusterArn }));
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
export var serializeAws_restJson1ListClusterOperationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}/operations";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
                resolvedPath = "/v1/clusters";
                query = __assign(__assign(__assign({}, (input.ClusterNameFilter !== undefined && { clusterNameFilter: input.ClusterNameFilter })), (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListConfigurationRevisionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/configurations/{Arn}/revisions";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
                }
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/configurations";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListKafkaVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/kafka-versions";
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListNodesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}/nodes";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
export var serializeAws_restJson1ListScramSecretsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/v1/clusters/{ClusterArn}/scram-secrets";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                query = __assign(__assign({}, (input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() })), (input.NextToken !== undefined && { nextToken: input.NextToken }));
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
                resolvedPath = "/v1/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
export var serializeAws_restJson1RebootBrokerCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/reboot-broker";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign({}, (input.BrokerIds !== undefined &&
                    input.BrokerIds !== null && { brokerIds: serializeAws_restJson1__listOf__string(input.BrokerIds, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
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
                resolvedPath = "/v1/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined &&
                    input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) })));
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
                resolvedPath = "/v1/tags/{ResourceArn}";
                if (input.ResourceArn !== undefined) {
                    labelValue = input.ResourceArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ResourceArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ResourceArn.");
                }
                query = __assign({}, (input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map(function (_entry) { return _entry; }) }));
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
export var serializeAws_restJson1UpdateBrokerCountCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/nodes/count";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })), (input.TargetNumberOfBrokerNodes !== undefined &&
                    input.TargetNumberOfBrokerNodes !== null && { targetNumberOfBrokerNodes: input.TargetNumberOfBrokerNodes })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateBrokerStorageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/nodes/storage";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })), (input.TargetBrokerEBSVolumeInfo !== undefined &&
                    input.TargetBrokerEBSVolumeInfo !== null && {
                    targetBrokerEBSVolumeInfo: serializeAws_restJson1__listOfBrokerEBSVolumeInfo(input.TargetBrokerEBSVolumeInfo, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateBrokerTypeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/nodes/type";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })), (input.TargetInstanceType !== undefined &&
                    input.TargetInstanceType !== null && { targetInstanceType: input.TargetInstanceType })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateClusterConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/configuration";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.ConfigurationInfo !== undefined &&
                    input.ConfigurationInfo !== null && {
                    configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
                })), (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateClusterKafkaVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/version";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.ConfigurationInfo !== undefined &&
                    input.ConfigurationInfo !== null && {
                    configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
                })), (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })), (input.TargetKafkaVersion !== undefined &&
                    input.TargetKafkaVersion !== null && { targetKafkaVersion: input.TargetKafkaVersion })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/configurations/{Arn}";
                if (input.Arn !== undefined) {
                    labelValue = input.Arn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Arn.");
                    }
                    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Arn.");
                }
                body = JSON.stringify(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { description: input.Description })), (input.ServerProperties !== undefined &&
                    input.ServerProperties !== null && { serverProperties: context.base64Encoder(input.ServerProperties) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1UpdateMonitoringCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/v1/clusters/{ClusterArn}/monitoring";
                if (input.ClusterArn !== undefined) {
                    labelValue = input.ClusterArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: ClusterArn.");
                    }
                    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: ClusterArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.CurrentVersion !== undefined &&
                    input.CurrentVersion !== null && { currentVersion: input.CurrentVersion })), (input.EnhancedMonitoring !== undefined &&
                    input.EnhancedMonitoring !== null && { enhancedMonitoring: input.EnhancedMonitoring })), (input.LoggingInfo !== undefined &&
                    input.LoggingInfo !== null && { loggingInfo: serializeAws_restJson1LoggingInfo(input.LoggingInfo, context) })), (input.OpenMonitoring !== undefined &&
                    input.OpenMonitoring !== null && {
                    openMonitoring: serializeAws_restJson1OpenMonitoringInfo(input.OpenMonitoring, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: hostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1BatchAssociateScramSecretCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchAssociateScramSecretCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    UnprocessedScramSecrets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.unprocessedScramSecrets !== undefined && data.unprocessedScramSecrets !== null) {
                    contents.UnprocessedScramSecrets = deserializeAws_restJson1__listOfUnprocessedScramSecret(data.unprocessedScramSecrets, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchAssociateScramSecretCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1BatchDisassociateScramSecretCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchDisassociateScramSecretCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    UnprocessedScramSecrets: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.unprocessedScramSecrets !== undefined && data.unprocessedScramSecrets !== null) {
                    contents.UnprocessedScramSecrets = deserializeAws_restJson1__listOfUnprocessedScramSecret(data.unprocessedScramSecrets, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchDisassociateScramSecretCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
                    ClusterArn: undefined,
                    ClusterName: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterName !== undefined && data.clusterName !== null) {
                    contents.ClusterName = data.clusterName;
                }
                if (data.state !== undefined && data.state !== null) {
                    contents.State = data.state;
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    LatestRevision: undefined,
                    Name: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = new Date(data.creationTime);
                }
                if (data.latestRevision !== undefined && data.latestRevision !== null) {
                    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.state !== undefined && data.state !== null) {
                    contents.State = data.state;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
                    ClusterArn: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.state !== undefined && data.state !== null) {
                    contents.State = data.state;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.state !== undefined && data.state !== null) {
                    contents.State = data.state;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
                    ClusterInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterInfo !== undefined && data.clusterInfo !== null) {
                    contents.ClusterInfo = deserializeAws_restJson1ClusterInfo(data.clusterInfo, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeClusterCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeClusterOperationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeClusterOperationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterOperationInfo: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterOperationInfo !== undefined && data.clusterOperationInfo !== null) {
                    contents.ClusterOperationInfo = deserializeAws_restJson1ClusterOperationInfo(data.clusterOperationInfo, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeClusterOperationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    Description: undefined,
                    KafkaVersions: undefined,
                    LatestRevision: undefined,
                    Name: undefined,
                    State: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = new Date(data.creationTime);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.kafkaVersions !== undefined && data.kafkaVersions !== null) {
                    contents.KafkaVersions = deserializeAws_restJson1__listOf__string(data.kafkaVersions, context);
                }
                if (data.latestRevision !== undefined && data.latestRevision !== null) {
                    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.Name = data.name;
                }
                if (data.state !== undefined && data.state !== null) {
                    contents.State = data.state;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeConfigurationRevisionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeConfigurationRevisionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    CreationTime: undefined,
                    Description: undefined,
                    Revision: undefined,
                    ServerProperties: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.creationTime !== undefined && data.creationTime !== null) {
                    contents.CreationTime = new Date(data.creationTime);
                }
                if (data.description !== undefined && data.description !== null) {
                    contents.Description = data.description;
                }
                if (data.revision !== undefined && data.revision !== null) {
                    contents.Revision = data.revision;
                }
                if (data.serverProperties !== undefined && data.serverProperties !== null) {
                    contents.ServerProperties = context.base64Decoder(data.serverProperties);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeConfigurationRevisionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetBootstrapBrokersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetBootstrapBrokersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BootstrapBrokerString: undefined,
                    BootstrapBrokerStringSaslIam: undefined,
                    BootstrapBrokerStringSaslScram: undefined,
                    BootstrapBrokerStringTls: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.bootstrapBrokerString !== undefined && data.bootstrapBrokerString !== null) {
                    contents.BootstrapBrokerString = data.bootstrapBrokerString;
                }
                if (data.bootstrapBrokerStringSaslIam !== undefined && data.bootstrapBrokerStringSaslIam !== null) {
                    contents.BootstrapBrokerStringSaslIam = data.bootstrapBrokerStringSaslIam;
                }
                if (data.bootstrapBrokerStringSaslScram !== undefined && data.bootstrapBrokerStringSaslScram !== null) {
                    contents.BootstrapBrokerStringSaslScram = data.bootstrapBrokerStringSaslScram;
                }
                if (data.bootstrapBrokerStringTls !== undefined && data.bootstrapBrokerStringTls !== null) {
                    contents.BootstrapBrokerStringTls = data.bootstrapBrokerStringTls;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetBootstrapBrokersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ConflictException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 6];
                    case "InternalServerErrorException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetCompatibleKafkaVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCompatibleKafkaVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CompatibleKafkaVersions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.compatibleKafkaVersions !== undefined && data.compatibleKafkaVersions !== null) {
                    contents.CompatibleKafkaVersions = deserializeAws_restJson1__listOfCompatibleKafkaVersion(data.compatibleKafkaVersions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCompatibleKafkaVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListClusterOperationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListClusterOperationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterOperationInfoList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterOperationInfoList !== undefined && data.clusterOperationInfoList !== null) {
                    contents.ClusterOperationInfoList = deserializeAws_restJson1__listOfClusterOperationInfo(data.clusterOperationInfoList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListClusterOperationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
                    ClusterInfoList: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterInfoList !== undefined && data.clusterInfoList !== null) {
                    contents.ClusterInfoList = deserializeAws_restJson1__listOfClusterInfo(data.clusterInfoList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListConfigurationRevisionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListConfigurationRevisionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    Revisions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.revisions !== undefined && data.revisions !== null) {
                    contents.Revisions = deserializeAws_restJson1__listOfConfigurationRevision(data.revisions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListConfigurationRevisionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListConfigurationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Configurations: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.configurations !== undefined && data.configurations !== null) {
                    contents.Configurations = deserializeAws_restJson1__listOfConfiguration(data.configurations, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListKafkaVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListKafkaVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    KafkaVersions: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.kafkaVersions !== undefined && data.kafkaVersions !== null) {
                    contents.KafkaVersions = deserializeAws_restJson1__listOfKafkaVersion(data.kafkaVersions, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListKafkaVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "UnauthorizedException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListNodesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListNodesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    NodeInfoList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.nodeInfoList !== undefined && data.nodeInfoList !== null) {
                    contents.NodeInfoList = deserializeAws_restJson1__listOfNodeInfo(data.nodeInfoList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListNodesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListScramSecretsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListScramSecretsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextToken: undefined,
                    SecretArnList: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.NextToken = data.nextToken;
                }
                if (data.secretArnList !== undefined && data.secretArnList !== null) {
                    contents.SecretArnList = deserializeAws_restJson1__listOf__string(data.secretArnList, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListScramSecretsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.tags !== undefined && data.tags !== null) {
                    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsForResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RebootBrokerCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RebootBrokerCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RebootBrokerCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
                if (output.statusCode !== 204 && output.statusCode >= 300) {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "InternalServerErrorException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 4];
                    case "NotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBrokerCountCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBrokerCountCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBrokerCountCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBrokerStorageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBrokerStorageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBrokerStorageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateBrokerTypeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateBrokerTypeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateBrokerTypeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateClusterConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateClusterConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateClusterConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateClusterKafkaVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateClusterKafkaVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateClusterKafkaVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#TooManyRequestsException": return [3 /*break*/, 12];
                    case "UnauthorizedException": return [3 /*break*/, 14];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                    LatestRevision: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.Arn = data.arn;
                }
                if (data.latestRevision !== undefined && data.latestRevision !== null) {
                    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "NotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#NotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "UnauthorizedException": return [3 /*break*/, 12];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateMonitoringCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateMonitoringCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ClusterArn: undefined,
                    ClusterOperationArn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clusterArn !== undefined && data.clusterArn !== null) {
                    contents.ClusterArn = data.clusterArn;
                }
                if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
                    contents.ClusterOperationArn = data.clusterOperationArn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateMonitoringCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "BadRequestException": return [3 /*break*/, 2];
                    case "com.amazonaws.kafka#BadRequestException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.kafka#ForbiddenException": return [3 /*break*/, 4];
                    case "InternalServerErrorException": return [3 /*break*/, 6];
                    case "com.amazonaws.kafka#InternalServerErrorException": return [3 /*break*/, 6];
                    case "ServiceUnavailableException": return [3 /*break*/, 8];
                    case "com.amazonaws.kafka#ServiceUnavailableException": return [3 /*break*/, 8];
                    case "UnauthorizedException": return [3 /*break*/, 10];
                    case "com.amazonaws.kafka#UnauthorizedException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1BadRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "BadRequestException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
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
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ForbiddenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ForbiddenException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InternalServerErrorExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InternalServerErrorException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
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
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
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
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1TooManyRequestsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "TooManyRequestsException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnauthorizedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnauthorizedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            InvalidParameter: undefined,
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
            contents.InvalidParameter = data.invalidParameter;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.Message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1__listOf__string = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1__listOfBrokerEBSVolumeInfo = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1BrokerEBSVolumeInfo(entry, context);
    });
};
var serializeAws_restJson1__mapOf__string = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1BrokerEBSVolumeInfo = function (input, context) {
    return __assign(__assign({}, (input.KafkaBrokerNodeId !== undefined &&
        input.KafkaBrokerNodeId !== null && { kafkaBrokerNodeId: input.KafkaBrokerNodeId })), (input.VolumeSizeGB !== undefined && input.VolumeSizeGB !== null && { volumeSizeGB: input.VolumeSizeGB }));
};
var serializeAws_restJson1BrokerLogs = function (input, context) {
    return __assign(__assign(__assign({}, (input.CloudWatchLogs !== undefined &&
        input.CloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_restJson1CloudWatchLogs(input.CloudWatchLogs, context),
    })), (input.Firehose !== undefined &&
        input.Firehose !== null && { firehose: serializeAws_restJson1Firehose(input.Firehose, context) })), (input.S3 !== undefined && input.S3 !== null && { s3: serializeAws_restJson1S3(input.S3, context) }));
};
var serializeAws_restJson1BrokerNodeGroupInfo = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.BrokerAZDistribution !== undefined &&
        input.BrokerAZDistribution !== null && { brokerAZDistribution: input.BrokerAZDistribution })), (input.ClientSubnets !== undefined &&
        input.ClientSubnets !== null && {
        clientSubnets: serializeAws_restJson1__listOf__string(input.ClientSubnets, context),
    })), (input.InstanceType !== undefined && input.InstanceType !== null && { instanceType: input.InstanceType })), (input.SecurityGroups !== undefined &&
        input.SecurityGroups !== null && {
        securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
    })), (input.StorageInfo !== undefined &&
        input.StorageInfo !== null && { storageInfo: serializeAws_restJson1StorageInfo(input.StorageInfo, context) }));
};
var serializeAws_restJson1ClientAuthentication = function (input, context) {
    return __assign(__assign({}, (input.Sasl !== undefined && input.Sasl !== null && { sasl: serializeAws_restJson1Sasl(input.Sasl, context) })), (input.Tls !== undefined && input.Tls !== null && { tls: serializeAws_restJson1Tls(input.Tls, context) }));
};
var serializeAws_restJson1CloudWatchLogs = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled })), (input.LogGroup !== undefined && input.LogGroup !== null && { logGroup: input.LogGroup }));
};
var serializeAws_restJson1ConfigurationInfo = function (input, context) {
    return __assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { arn: input.Arn })), (input.Revision !== undefined && input.Revision !== null && { revision: input.Revision }));
};
var serializeAws_restJson1EBSStorageInfo = function (input, context) {
    return __assign({}, (input.VolumeSize !== undefined && input.VolumeSize !== null && { volumeSize: input.VolumeSize }));
};
var serializeAws_restJson1EncryptionAtRest = function (input, context) {
    return __assign({}, (input.DataVolumeKMSKeyId !== undefined &&
        input.DataVolumeKMSKeyId !== null && { dataVolumeKMSKeyId: input.DataVolumeKMSKeyId }));
};
var serializeAws_restJson1EncryptionInfo = function (input, context) {
    return __assign(__assign({}, (input.EncryptionAtRest !== undefined &&
        input.EncryptionAtRest !== null && {
        encryptionAtRest: serializeAws_restJson1EncryptionAtRest(input.EncryptionAtRest, context),
    })), (input.EncryptionInTransit !== undefined &&
        input.EncryptionInTransit !== null && {
        encryptionInTransit: serializeAws_restJson1EncryptionInTransit(input.EncryptionInTransit, context),
    }));
};
var serializeAws_restJson1EncryptionInTransit = function (input, context) {
    return __assign(__assign({}, (input.ClientBroker !== undefined && input.ClientBroker !== null && { clientBroker: input.ClientBroker })), (input.InCluster !== undefined && input.InCluster !== null && { inCluster: input.InCluster }));
};
var serializeAws_restJson1Firehose = function (input, context) {
    return __assign(__assign({}, (input.DeliveryStream !== undefined &&
        input.DeliveryStream !== null && { deliveryStream: input.DeliveryStream })), (input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }));
};
var serializeAws_restJson1Iam = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }));
};
var serializeAws_restJson1JmxExporterInfo = function (input, context) {
    return __assign({}, (input.EnabledInBroker !== undefined &&
        input.EnabledInBroker !== null && { enabledInBroker: input.EnabledInBroker }));
};
var serializeAws_restJson1LoggingInfo = function (input, context) {
    return __assign({}, (input.BrokerLogs !== undefined &&
        input.BrokerLogs !== null && { brokerLogs: serializeAws_restJson1BrokerLogs(input.BrokerLogs, context) }));
};
var serializeAws_restJson1NodeExporterInfo = function (input, context) {
    return __assign({}, (input.EnabledInBroker !== undefined &&
        input.EnabledInBroker !== null && { enabledInBroker: input.EnabledInBroker }));
};
var serializeAws_restJson1OpenMonitoringInfo = function (input, context) {
    return __assign({}, (input.Prometheus !== undefined &&
        input.Prometheus !== null && { prometheus: serializeAws_restJson1PrometheusInfo(input.Prometheus, context) }));
};
var serializeAws_restJson1PrometheusInfo = function (input, context) {
    return __assign(__assign({}, (input.JmxExporter !== undefined &&
        input.JmxExporter !== null && { jmxExporter: serializeAws_restJson1JmxExporterInfo(input.JmxExporter, context) })), (input.NodeExporter !== undefined &&
        input.NodeExporter !== null && {
        nodeExporter: serializeAws_restJson1NodeExporterInfo(input.NodeExporter, context),
    }));
};
var serializeAws_restJson1S3 = function (input, context) {
    return __assign(__assign(__assign({}, (input.Bucket !== undefined && input.Bucket !== null && { bucket: input.Bucket })), (input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled })), (input.Prefix !== undefined && input.Prefix !== null && { prefix: input.Prefix }));
};
var serializeAws_restJson1Sasl = function (input, context) {
    return __assign(__assign({}, (input.Iam !== undefined && input.Iam !== null && { iam: serializeAws_restJson1Iam(input.Iam, context) })), (input.Scram !== undefined &&
        input.Scram !== null && { scram: serializeAws_restJson1Scram(input.Scram, context) }));
};
var serializeAws_restJson1Scram = function (input, context) {
    return __assign({}, (input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }));
};
var serializeAws_restJson1StorageInfo = function (input, context) {
    return __assign({}, (input.EbsStorageInfo !== undefined &&
        input.EbsStorageInfo !== null && {
        ebsStorageInfo: serializeAws_restJson1EBSStorageInfo(input.EbsStorageInfo, context),
    }));
};
var serializeAws_restJson1Tls = function (input, context) {
    return __assign({}, (input.CertificateAuthorityArnList !== undefined &&
        input.CertificateAuthorityArnList !== null && {
        certificateAuthorityArnList: serializeAws_restJson1__listOf__string(input.CertificateAuthorityArnList, context),
    }));
};
var deserializeAws_restJson1__listOf__string = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1__listOfBrokerEBSVolumeInfo = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BrokerEBSVolumeInfo(entry, context);
    });
};
var deserializeAws_restJson1__listOfClusterInfo = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ClusterInfo(entry, context);
    });
};
var deserializeAws_restJson1__listOfClusterOperationInfo = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ClusterOperationInfo(entry, context);
    });
};
var deserializeAws_restJson1__listOfClusterOperationStep = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ClusterOperationStep(entry, context);
    });
};
var deserializeAws_restJson1__listOfCompatibleKafkaVersion = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CompatibleKafkaVersion(entry, context);
    });
};
var deserializeAws_restJson1__listOfConfiguration = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Configuration(entry, context);
    });
};
var deserializeAws_restJson1__listOfConfigurationRevision = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConfigurationRevision(entry, context);
    });
};
var deserializeAws_restJson1__listOfKafkaVersion = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1KafkaVersion(entry, context);
    });
};
var deserializeAws_restJson1__listOfNodeInfo = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1NodeInfo(entry, context);
    });
};
var deserializeAws_restJson1__listOfUnprocessedScramSecret = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UnprocessedScramSecret(entry, context);
    });
};
var deserializeAws_restJson1__mapOf__string = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1BrokerEBSVolumeInfo = function (output, context) {
    return {
        KafkaBrokerNodeId: output.kafkaBrokerNodeId !== undefined && output.kafkaBrokerNodeId !== null
            ? output.kafkaBrokerNodeId
            : undefined,
        VolumeSizeGB: output.volumeSizeGB !== undefined && output.volumeSizeGB !== null ? output.volumeSizeGB : undefined,
    };
};
var deserializeAws_restJson1BrokerLogs = function (output, context) {
    return {
        CloudWatchLogs: output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
            ? deserializeAws_restJson1CloudWatchLogs(output.cloudWatchLogs, context)
            : undefined,
        Firehose: output.firehose !== undefined && output.firehose !== null
            ? deserializeAws_restJson1Firehose(output.firehose, context)
            : undefined,
        S3: output.s3 !== undefined && output.s3 !== null ? deserializeAws_restJson1S3(output.s3, context) : undefined,
    };
};
var deserializeAws_restJson1BrokerNodeGroupInfo = function (output, context) {
    return {
        BrokerAZDistribution: output.brokerAZDistribution !== undefined && output.brokerAZDistribution !== null
            ? output.brokerAZDistribution
            : undefined,
        ClientSubnets: output.clientSubnets !== undefined && output.clientSubnets !== null
            ? deserializeAws_restJson1__listOf__string(output.clientSubnets, context)
            : undefined,
        InstanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        SecurityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1__listOf__string(output.securityGroups, context)
            : undefined,
        StorageInfo: output.storageInfo !== undefined && output.storageInfo !== null
            ? deserializeAws_restJson1StorageInfo(output.storageInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1BrokerNodeInfo = function (output, context) {
    return {
        AttachedENIId: output.attachedENIId !== undefined && output.attachedENIId !== null ? output.attachedENIId : undefined,
        BrokerId: output.brokerId !== undefined && output.brokerId !== null ? output.brokerId : undefined,
        ClientSubnet: output.clientSubnet !== undefined && output.clientSubnet !== null ? output.clientSubnet : undefined,
        ClientVpcIpAddress: output.clientVpcIpAddress !== undefined && output.clientVpcIpAddress !== null
            ? output.clientVpcIpAddress
            : undefined,
        CurrentBrokerSoftwareInfo: output.currentBrokerSoftwareInfo !== undefined && output.currentBrokerSoftwareInfo !== null
            ? deserializeAws_restJson1BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
            : undefined,
        Endpoints: output.endpoints !== undefined && output.endpoints !== null
            ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
            : undefined,
    };
};
var deserializeAws_restJson1BrokerSoftwareInfo = function (output, context) {
    return {
        ConfigurationArn: output.configurationArn !== undefined && output.configurationArn !== null ? output.configurationArn : undefined,
        ConfigurationRevision: output.configurationRevision !== undefined && output.configurationRevision !== null
            ? output.configurationRevision
            : undefined,
        KafkaVersion: output.kafkaVersion !== undefined && output.kafkaVersion !== null ? output.kafkaVersion : undefined,
    };
};
var deserializeAws_restJson1ClientAuthentication = function (output, context) {
    return {
        Sasl: output.sasl !== undefined && output.sasl !== null
            ? deserializeAws_restJson1Sasl(output.sasl, context)
            : undefined,
        Tls: output.tls !== undefined && output.tls !== null ? deserializeAws_restJson1Tls(output.tls, context) : undefined,
    };
};
var deserializeAws_restJson1CloudWatchLogs = function (output, context) {
    return {
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        LogGroup: output.logGroup !== undefined && output.logGroup !== null ? output.logGroup : undefined,
    };
};
var deserializeAws_restJson1ClusterInfo = function (output, context) {
    return {
        ActiveOperationArn: output.activeOperationArn !== undefined && output.activeOperationArn !== null
            ? output.activeOperationArn
            : undefined,
        BrokerNodeGroupInfo: output.brokerNodeGroupInfo !== undefined && output.brokerNodeGroupInfo !== null
            ? deserializeAws_restJson1BrokerNodeGroupInfo(output.brokerNodeGroupInfo, context)
            : undefined,
        ClientAuthentication: output.clientAuthentication !== undefined && output.clientAuthentication !== null
            ? deserializeAws_restJson1ClientAuthentication(output.clientAuthentication, context)
            : undefined,
        ClusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        ClusterName: output.clusterName !== undefined && output.clusterName !== null ? output.clusterName : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        CurrentBrokerSoftwareInfo: output.currentBrokerSoftwareInfo !== undefined && output.currentBrokerSoftwareInfo !== null
            ? deserializeAws_restJson1BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
            : undefined,
        CurrentVersion: output.currentVersion !== undefined && output.currentVersion !== null ? output.currentVersion : undefined,
        EncryptionInfo: output.encryptionInfo !== undefined && output.encryptionInfo !== null
            ? deserializeAws_restJson1EncryptionInfo(output.encryptionInfo, context)
            : undefined,
        EnhancedMonitoring: output.enhancedMonitoring !== undefined && output.enhancedMonitoring !== null
            ? output.enhancedMonitoring
            : undefined,
        LoggingInfo: output.loggingInfo !== undefined && output.loggingInfo !== null
            ? deserializeAws_restJson1LoggingInfo(output.loggingInfo, context)
            : undefined,
        NumberOfBrokerNodes: output.numberOfBrokerNodes !== undefined && output.numberOfBrokerNodes !== null
            ? output.numberOfBrokerNodes
            : undefined,
        OpenMonitoring: output.openMonitoring !== undefined && output.openMonitoring !== null
            ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
            : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
        StateInfo: output.stateInfo !== undefined && output.stateInfo !== null
            ? deserializeAws_restJson1StateInfo(output.stateInfo, context)
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        ZookeeperConnectString: output.zookeeperConnectString !== undefined && output.zookeeperConnectString !== null
            ? output.zookeeperConnectString
            : undefined,
        ZookeeperConnectStringTls: output.zookeeperConnectStringTls !== undefined && output.zookeeperConnectStringTls !== null
            ? output.zookeeperConnectStringTls
            : undefined,
    };
};
var deserializeAws_restJson1ClusterOperationInfo = function (output, context) {
    return {
        ClientRequestId: output.clientRequestId !== undefined && output.clientRequestId !== null ? output.clientRequestId : undefined,
        ClusterArn: output.clusterArn !== undefined && output.clusterArn !== null ? output.clusterArn : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        EndTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
        ErrorInfo: output.errorInfo !== undefined && output.errorInfo !== null
            ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
            : undefined,
        OperationArn: output.operationArn !== undefined && output.operationArn !== null ? output.operationArn : undefined,
        OperationState: output.operationState !== undefined && output.operationState !== null ? output.operationState : undefined,
        OperationSteps: output.operationSteps !== undefined && output.operationSteps !== null
            ? deserializeAws_restJson1__listOfClusterOperationStep(output.operationSteps, context)
            : undefined,
        OperationType: output.operationType !== undefined && output.operationType !== null ? output.operationType : undefined,
        SourceClusterInfo: output.sourceClusterInfo !== undefined && output.sourceClusterInfo !== null
            ? deserializeAws_restJson1MutableClusterInfo(output.sourceClusterInfo, context)
            : undefined,
        TargetClusterInfo: output.targetClusterInfo !== undefined && output.targetClusterInfo !== null
            ? deserializeAws_restJson1MutableClusterInfo(output.targetClusterInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1ClusterOperationStep = function (output, context) {
    return {
        StepInfo: output.stepInfo !== undefined && output.stepInfo !== null
            ? deserializeAws_restJson1ClusterOperationStepInfo(output.stepInfo, context)
            : undefined,
        StepName: output.stepName !== undefined && output.stepName !== null ? output.stepName : undefined,
    };
};
var deserializeAws_restJson1ClusterOperationStepInfo = function (output, context) {
    return {
        StepStatus: output.stepStatus !== undefined && output.stepStatus !== null ? output.stepStatus : undefined,
    };
};
var deserializeAws_restJson1CompatibleKafkaVersion = function (output, context) {
    return {
        SourceVersion: output.sourceVersion !== undefined && output.sourceVersion !== null ? output.sourceVersion : undefined,
        TargetVersions: output.targetVersions !== undefined && output.targetVersions !== null
            ? deserializeAws_restJson1__listOf__string(output.targetVersions, context)
            : undefined,
    };
};
var deserializeAws_restJson1Configuration = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        KafkaVersions: output.kafkaVersions !== undefined && output.kafkaVersions !== null
            ? deserializeAws_restJson1__listOf__string(output.kafkaVersions, context)
            : undefined,
        LatestRevision: output.latestRevision !== undefined && output.latestRevision !== null
            ? deserializeAws_restJson1ConfigurationRevision(output.latestRevision, context)
            : undefined,
        Name: output.name !== undefined && output.name !== null ? output.name : undefined,
        State: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
var deserializeAws_restJson1ConfigurationInfo = function (output, context) {
    return {
        Arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        Revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
var deserializeAws_restJson1ConfigurationRevision = function (output, context) {
    return {
        CreationTime: output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
        Description: output.description !== undefined && output.description !== null ? output.description : undefined,
        Revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    };
};
var deserializeAws_restJson1EBSStorageInfo = function (output, context) {
    return {
        VolumeSize: output.volumeSize !== undefined && output.volumeSize !== null ? output.volumeSize : undefined,
    };
};
var deserializeAws_restJson1EncryptionAtRest = function (output, context) {
    return {
        DataVolumeKMSKeyId: output.dataVolumeKMSKeyId !== undefined && output.dataVolumeKMSKeyId !== null
            ? output.dataVolumeKMSKeyId
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionInfo = function (output, context) {
    return {
        EncryptionAtRest: output.encryptionAtRest !== undefined && output.encryptionAtRest !== null
            ? deserializeAws_restJson1EncryptionAtRest(output.encryptionAtRest, context)
            : undefined,
        EncryptionInTransit: output.encryptionInTransit !== undefined && output.encryptionInTransit !== null
            ? deserializeAws_restJson1EncryptionInTransit(output.encryptionInTransit, context)
            : undefined,
    };
};
var deserializeAws_restJson1EncryptionInTransit = function (output, context) {
    return {
        ClientBroker: output.clientBroker !== undefined && output.clientBroker !== null ? output.clientBroker : undefined,
        InCluster: output.inCluster !== undefined && output.inCluster !== null ? output.inCluster : undefined,
    };
};
var deserializeAws_restJson1ErrorInfo = function (output, context) {
    return {
        ErrorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        ErrorString: output.errorString !== undefined && output.errorString !== null ? output.errorString : undefined,
    };
};
var deserializeAws_restJson1Firehose = function (output, context) {
    return {
        DeliveryStream: output.deliveryStream !== undefined && output.deliveryStream !== null ? output.deliveryStream : undefined,
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1Iam = function (output, context) {
    return {
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1JmxExporter = function (output, context) {
    return {
        EnabledInBroker: output.enabledInBroker !== undefined && output.enabledInBroker !== null ? output.enabledInBroker : undefined,
    };
};
var deserializeAws_restJson1KafkaVersion = function (output, context) {
    return {
        Status: output.status !== undefined && output.status !== null ? output.status : undefined,
        Version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1LoggingInfo = function (output, context) {
    return {
        BrokerLogs: output.brokerLogs !== undefined && output.brokerLogs !== null
            ? deserializeAws_restJson1BrokerLogs(output.brokerLogs, context)
            : undefined,
    };
};
var deserializeAws_restJson1MutableClusterInfo = function (output, context) {
    return {
        BrokerEBSVolumeInfo: output.brokerEBSVolumeInfo !== undefined && output.brokerEBSVolumeInfo !== null
            ? deserializeAws_restJson1__listOfBrokerEBSVolumeInfo(output.brokerEBSVolumeInfo, context)
            : undefined,
        ConfigurationInfo: output.configurationInfo !== undefined && output.configurationInfo !== null
            ? deserializeAws_restJson1ConfigurationInfo(output.configurationInfo, context)
            : undefined,
        EnhancedMonitoring: output.enhancedMonitoring !== undefined && output.enhancedMonitoring !== null
            ? output.enhancedMonitoring
            : undefined,
        InstanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        KafkaVersion: output.kafkaVersion !== undefined && output.kafkaVersion !== null ? output.kafkaVersion : undefined,
        LoggingInfo: output.loggingInfo !== undefined && output.loggingInfo !== null
            ? deserializeAws_restJson1LoggingInfo(output.loggingInfo, context)
            : undefined,
        NumberOfBrokerNodes: output.numberOfBrokerNodes !== undefined && output.numberOfBrokerNodes !== null
            ? output.numberOfBrokerNodes
            : undefined,
        OpenMonitoring: output.openMonitoring !== undefined && output.openMonitoring !== null
            ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
            : undefined,
    };
};
var deserializeAws_restJson1NodeExporter = function (output, context) {
    return {
        EnabledInBroker: output.enabledInBroker !== undefined && output.enabledInBroker !== null ? output.enabledInBroker : undefined,
    };
};
var deserializeAws_restJson1NodeInfo = function (output, context) {
    return {
        AddedToClusterTime: output.addedToClusterTime !== undefined && output.addedToClusterTime !== null
            ? output.addedToClusterTime
            : undefined,
        BrokerNodeInfo: output.brokerNodeInfo !== undefined && output.brokerNodeInfo !== null
            ? deserializeAws_restJson1BrokerNodeInfo(output.brokerNodeInfo, context)
            : undefined,
        InstanceType: output.instanceType !== undefined && output.instanceType !== null ? output.instanceType : undefined,
        NodeARN: output.nodeARN !== undefined && output.nodeARN !== null ? output.nodeARN : undefined,
        NodeType: output.nodeType !== undefined && output.nodeType !== null ? output.nodeType : undefined,
        ZookeeperNodeInfo: output.zookeeperNodeInfo !== undefined && output.zookeeperNodeInfo !== null
            ? deserializeAws_restJson1ZookeeperNodeInfo(output.zookeeperNodeInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1OpenMonitoring = function (output, context) {
    return {
        Prometheus: output.prometheus !== undefined && output.prometheus !== null
            ? deserializeAws_restJson1Prometheus(output.prometheus, context)
            : undefined,
    };
};
var deserializeAws_restJson1Prometheus = function (output, context) {
    return {
        JmxExporter: output.jmxExporter !== undefined && output.jmxExporter !== null
            ? deserializeAws_restJson1JmxExporter(output.jmxExporter, context)
            : undefined,
        NodeExporter: output.nodeExporter !== undefined && output.nodeExporter !== null
            ? deserializeAws_restJson1NodeExporter(output.nodeExporter, context)
            : undefined,
    };
};
var deserializeAws_restJson1S3 = function (output, context) {
    return {
        Bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        Prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
    };
};
var deserializeAws_restJson1Sasl = function (output, context) {
    return {
        Iam: output.iam !== undefined && output.iam !== null ? deserializeAws_restJson1Iam(output.iam, context) : undefined,
        Scram: output.scram !== undefined && output.scram !== null
            ? deserializeAws_restJson1Scram(output.scram, context)
            : undefined,
    };
};
var deserializeAws_restJson1Scram = function (output, context) {
    return {
        Enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
var deserializeAws_restJson1StateInfo = function (output, context) {
    return {
        Code: output.code !== undefined && output.code !== null ? output.code : undefined,
        Message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_restJson1StorageInfo = function (output, context) {
    return {
        EbsStorageInfo: output.ebsStorageInfo !== undefined && output.ebsStorageInfo !== null
            ? deserializeAws_restJson1EBSStorageInfo(output.ebsStorageInfo, context)
            : undefined,
    };
};
var deserializeAws_restJson1Tls = function (output, context) {
    return {
        CertificateAuthorityArnList: output.certificateAuthorityArnList !== undefined && output.certificateAuthorityArnList !== null
            ? deserializeAws_restJson1__listOf__string(output.certificateAuthorityArnList, context)
            : undefined,
    };
};
var deserializeAws_restJson1UnprocessedScramSecret = function (output, context) {
    return {
        ErrorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        ErrorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        SecretArn: output.secretArn !== undefined && output.secretArn !== null ? output.secretArn : undefined,
    };
};
var deserializeAws_restJson1ZookeeperNodeInfo = function (output, context) {
    return {
        AttachedENIId: output.attachedENIId !== undefined && output.attachedENIId !== null ? output.attachedENIId : undefined,
        ClientVpcIpAddress: output.clientVpcIpAddress !== undefined && output.clientVpcIpAddress !== null
            ? output.clientVpcIpAddress
            : undefined,
        Endpoints: output.endpoints !== undefined && output.endpoints !== null
            ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
            : undefined,
        ZookeeperId: output.zookeeperId !== undefined && output.zookeeperId !== null ? output.zookeeperId : undefined,
        ZookeeperVersion: output.zookeeperVersion !== undefined && output.zookeeperVersion !== null ? output.zookeeperVersion : undefined,
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