import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1AddLayerVersionPermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                if (input.VersionNumber !== undefined) {
                    labelValue = input.VersionNumber.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VersionNumber.");
                    }
                    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VersionNumber.");
                }
                query = __assign({}, (input.RevisionId !== undefined && { RevisionId: input.RevisionId }));
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Action !== undefined && input.Action !== null && { Action: input.Action })), (input.OrganizationId !== undefined &&
                    input.OrganizationId !== null && { OrganizationId: input.OrganizationId })), (input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal })), (input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1AddPermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Action !== undefined && input.Action !== null && { Action: input.Action })), (input.EventSourceToken !== undefined &&
                    input.EventSourceToken !== null && { EventSourceToken: input.EventSourceToken })), (input.Principal !== undefined && input.Principal !== null && { Principal: input.Principal })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })), (input.SourceAccount !== undefined && input.SourceAccount !== null && { SourceAccount: input.SourceAccount })), (input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn })), (input.StatementId !== undefined && input.StatementId !== null && { StatementId: input.StatementId })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FunctionVersion !== undefined &&
                    input.FunctionVersion !== null && { FunctionVersion: input.FunctionVersion })), (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.RoutingConfig !== undefined &&
                    input.RoutingConfig !== null && {
                    RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
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
export var serializeAws_restJson1CreateCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2020-04-22/code-signing-configs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.AllowedPublishers !== undefined &&
                    input.AllowedPublishers !== null && {
                    AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
                })), (input.CodeSigningPolicies !== undefined &&
                    input.CodeSigningPolicies !== null && {
                    CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
                })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })));
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
export var serializeAws_restJson1CreateEventSourceMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/event-source-mappings";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize })), (input.BisectBatchOnFunctionError !== undefined &&
                    input.BisectBatchOnFunctionError !== null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError })), (input.DestinationConfig !== undefined &&
                    input.DestinationConfig !== null && {
                    DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
                })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.EventSourceArn !== undefined &&
                    input.EventSourceArn !== null && { EventSourceArn: input.EventSourceArn })), (input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName })), (input.FunctionResponseTypes !== undefined &&
                    input.FunctionResponseTypes !== null && {
                    FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
                })), (input.MaximumBatchingWindowInSeconds !== undefined &&
                    input.MaximumBatchingWindowInSeconds !== null && {
                    MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
                })), (input.MaximumRecordAgeInSeconds !== undefined &&
                    input.MaximumRecordAgeInSeconds !== null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds })), (input.MaximumRetryAttempts !== undefined &&
                    input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts })), (input.ParallelizationFactor !== undefined &&
                    input.ParallelizationFactor !== null && { ParallelizationFactor: input.ParallelizationFactor })), (input.Queues !== undefined &&
                    input.Queues !== null && { Queues: serializeAws_restJson1Queues(input.Queues, context) })), (input.SelfManagedEventSource !== undefined &&
                    input.SelfManagedEventSource !== null && {
                    SelfManagedEventSource: serializeAws_restJson1SelfManagedEventSource(input.SelfManagedEventSource, context),
                })), (input.SourceAccessConfigurations !== undefined &&
                    input.SourceAccessConfigurations !== null && {
                    SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(input.SourceAccessConfigurations, context),
                })), (input.StartingPosition !== undefined &&
                    input.StartingPosition !== null && { StartingPosition: input.StartingPosition })), (input.StartingPositionTimestamp !== undefined &&
                    input.StartingPositionTimestamp !== null && {
                    StartingPositionTimestamp: Math.round(input.StartingPositionTimestamp.getTime() / 1000),
                })), (input.Topics !== undefined &&
                    input.Topics !== null && { Topics: serializeAws_restJson1Topics(input.Topics, context) })), (input.TumblingWindowInSeconds !== undefined &&
                    input.TumblingWindowInSeconds !== null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds })));
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
export var serializeAws_restJson1CreateFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.Code !== undefined &&
                    input.Code !== null && { Code: serializeAws_restJson1FunctionCode(input.Code, context) })), (input.CodeSigningConfigArn !== undefined &&
                    input.CodeSigningConfigArn !== null && { CodeSigningConfigArn: input.CodeSigningConfigArn })), (input.DeadLetterConfig !== undefined &&
                    input.DeadLetterConfig !== null && {
                    DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
                })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Environment !== undefined &&
                    input.Environment !== null && { Environment: serializeAws_restJson1Environment(input.Environment, context) })), (input.FileSystemConfigs !== undefined &&
                    input.FileSystemConfigs !== null && {
                    FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
                })), (input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName })), (input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler })), (input.ImageConfig !== undefined &&
                    input.ImageConfig !== null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) })), (input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn })), (input.Layers !== undefined &&
                    input.Layers !== null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) })), (input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize })), (input.PackageType !== undefined && input.PackageType !== null && { PackageType: input.PackageType })), (input.Publish !== undefined && input.Publish !== null && { Publish: input.Publish })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })), (input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout })), (input.TracingConfig !== undefined &&
                    input.TracingConfig !== null && {
                    TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
                })), (input.VpcConfig !== undefined &&
                    input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) })));
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
export var serializeAws_restJson1DeleteAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1DeleteCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
                if (input.CodeSigningConfigArn !== undefined) {
                    labelValue = input.CodeSigningConfigArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
                    }
                    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
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
export var serializeAws_restJson1DeleteEventSourceMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
                if (input.UUID !== undefined) {
                    labelValue = input.UUID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UUID.");
                    }
                    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UUID.");
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
export var serializeAws_restJson1DeleteFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
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
export var serializeAws_restJson1DeleteFunctionConcurrencyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
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
export var serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1DeleteLayerVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                if (input.VersionNumber !== undefined) {
                    labelValue = input.VersionNumber.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VersionNumber.");
                    }
                    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VersionNumber.");
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
export var serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1GetAccountSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2016-08-19/account-settings";
                body = "";
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
export var serializeAws_restJson1GetAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
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
export var serializeAws_restJson1GetCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
                if (input.CodeSigningConfigArn !== undefined) {
                    labelValue = input.CodeSigningConfigArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
                    }
                    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
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
export var serializeAws_restJson1GetEventSourceMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
                if (input.UUID !== undefined) {
                    labelValue = input.UUID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UUID.");
                    }
                    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UUID.");
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
export var serializeAws_restJson1GetFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1GetFunctionCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
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
export var serializeAws_restJson1GetFunctionConcurrencyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-30/functions/{FunctionName}/concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
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
export var serializeAws_restJson1GetFunctionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1GetFunctionEventInvokeConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1GetLayerVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                if (input.VersionNumber !== undefined) {
                    labelValue = input.VersionNumber.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VersionNumber.");
                    }
                    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VersionNumber.");
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
export var serializeAws_restJson1GetLayerVersionByArnCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers";
                query = __assign({ find: "LayerVersion" }, (input.Arn !== undefined && { Arn: input.Arn }));
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
export var serializeAws_restJson1GetLayerVersionPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                if (input.VersionNumber !== undefined) {
                    labelValue = input.VersionNumber.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VersionNumber.");
                    }
                    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VersionNumber.");
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
export var serializeAws_restJson1GetPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
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
export var serializeAws_restJson1InvokeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = __assign(__assign(__assign({ "content-type": "application/octet-stream" }, (isSerializableHeaderValue(input.InvocationType) && { "x-amz-invocation-type": input.InvocationType })), (isSerializableHeaderValue(input.LogType) && { "x-amz-log-type": input.LogType })), (isSerializableHeaderValue(input.ClientContext) && { "x-amz-client-context": input.ClientContext }));
                resolvedPath = "/2015-03-31/functions/{FunctionName}/invocations";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
                if (input.Payload !== undefined) {
                    body = input.Payload;
                }
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1InvokeAsyncCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/octet-stream",
                };
                resolvedPath = "/2014-11-13/functions/{FunctionName}/invoke-async";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                if (input.InvokeArgs !== undefined) {
                    body = input.InvokeArgs;
                }
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
export var serializeAws_restJson1ListAliasesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign(__assign(__assign({}, (input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion })), (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListCodeSigningConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-04-22/code-signing-configs";
                query = __assign(__assign({}, (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListEventSourceMappingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/event-source-mappings";
                query = __assign(__assign(__assign(__assign({}, (input.EventSourceArn !== undefined && { EventSourceArn: input.EventSourceArn })), (input.FunctionName !== undefined && { FunctionName: input.FunctionName })), (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign(__assign({}, (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListFunctionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions";
                query = __assign(__assign(__assign(__assign({}, (input.MasterRegion !== undefined && { MasterRegion: input.MasterRegion })), (input.FunctionVersion !== undefined && { FunctionVersion: input.FunctionVersion })), (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}/functions";
                if (input.CodeSigningConfigArn !== undefined) {
                    labelValue = input.CodeSigningConfigArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
                    }
                    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
                }
                query = __assign(__assign({}, (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListLayersCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers";
                query = __assign(__assign(__assign({}, (input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime })), (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListLayerVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                query = __assign(__assign(__assign({}, (input.CompatibleRuntime !== undefined && { CompatibleRuntime: input.CompatibleRuntime })), (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign(__assign({ List: "ALL" }, (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1ListTagsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2017-03-31/tags/{Resource}";
                if (input.Resource !== undefined) {
                    labelValue = input.Resource;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Resource.");
                    }
                    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Resource.");
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
export var serializeAws_restJson1ListVersionsByFunctionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign(__assign({}, (input.Marker !== undefined && { Marker: input.Marker })), (input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() }));
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
export var serializeAws_restJson1PublishLayerVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.CompatibleRuntimes !== undefined &&
                    input.CompatibleRuntimes !== null && {
                    CompatibleRuntimes: serializeAws_restJson1CompatibleRuntimes(input.CompatibleRuntimes, context),
                })), (input.Content !== undefined &&
                    input.Content !== null && { Content: serializeAws_restJson1LayerVersionContentInput(input.Content, context) })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.LicenseInfo !== undefined && input.LicenseInfo !== null && { LicenseInfo: input.LicenseInfo })));
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
export var serializeAws_restJson1PublishVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.CodeSha256 !== undefined && input.CodeSha256 !== null && { CodeSha256: input.CodeSha256 })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })));
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
export var serializeAws_restJson1PutFunctionCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2020-06-30/functions/{FunctionName}/code-signing-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign({}, (input.CodeSigningConfigArn !== undefined &&
                    input.CodeSigningConfigArn !== null && { CodeSigningConfigArn: input.CodeSigningConfigArn })));
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
export var serializeAws_restJson1PutFunctionConcurrencyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign({}, (input.ReservedConcurrentExecutions !== undefined &&
                    input.ReservedConcurrentExecutions !== null && {
                    ReservedConcurrentExecutions: input.ReservedConcurrentExecutions,
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
export var serializeAws_restJson1PutFunctionEventInvokeConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
                body = JSON.stringify(__assign(__assign(__assign({}, (input.DestinationConfig !== undefined &&
                    input.DestinationConfig !== null && {
                    DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
                })), (input.MaximumEventAgeInSeconds !== undefined &&
                    input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds })), (input.MaximumRetryAttempts !== undefined &&
                    input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
                body = JSON.stringify(__assign({}, (input.ProvisionedConcurrentExecutions !== undefined &&
                    input.ProvisionedConcurrentExecutions !== null && {
                    ProvisionedConcurrentExecutions: input.ProvisionedConcurrentExecutions,
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1RemoveLayerVersionPermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
                if (input.LayerName !== undefined) {
                    labelValue = input.LayerName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: LayerName.");
                    }
                    resolvedPath = resolvedPath.replace("{LayerName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: LayerName.");
                }
                if (input.VersionNumber !== undefined) {
                    labelValue = input.VersionNumber.toString();
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: VersionNumber.");
                    }
                    resolvedPath = resolvedPath.replace("{VersionNumber}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: VersionNumber.");
                }
                if (input.StatementId !== undefined) {
                    labelValue = input.StatementId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: StatementId.");
                    }
                    resolvedPath = resolvedPath.replace("{StatementId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: StatementId.");
                }
                query = __assign({}, (input.RevisionId !== undefined && { RevisionId: input.RevisionId }));
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
export var serializeAws_restJson1RemovePermissionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                if (input.StatementId !== undefined) {
                    labelValue = input.StatementId;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: StatementId.");
                    }
                    resolvedPath = resolvedPath.replace("{StatementId}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: StatementId.");
                }
                query = __assign(__assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier })), (input.RevisionId !== undefined && { RevisionId: input.RevisionId }));
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
export var serializeAws_restJson1TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2017-03-31/tags/{Resource}";
                if (input.Resource !== undefined) {
                    labelValue = input.Resource;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Resource.");
                    }
                    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Resource.");
                }
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) })));
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
                resolvedPath = "/2017-03-31/tags/{Resource}";
                if (input.Resource !== undefined) {
                    labelValue = input.Resource;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Resource.");
                    }
                    resolvedPath = resolvedPath.replace("{Resource}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Resource.");
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
export var serializeAws_restJson1UpdateAliasCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                if (input.Name !== undefined) {
                    labelValue = input.Name;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: Name.");
                    }
                    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: Name.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.FunctionVersion !== undefined &&
                    input.FunctionVersion !== null && { FunctionVersion: input.FunctionVersion })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })), (input.RoutingConfig !== undefined &&
                    input.RoutingConfig !== null && {
                    RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(input.RoutingConfig, context),
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
export var serializeAws_restJson1UpdateCodeSigningConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2020-04-22/code-signing-configs/{CodeSigningConfigArn}";
                if (input.CodeSigningConfigArn !== undefined) {
                    labelValue = input.CodeSigningConfigArn;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: CodeSigningConfigArn.");
                    }
                    resolvedPath = resolvedPath.replace("{CodeSigningConfigArn}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: CodeSigningConfigArn.");
                }
                body = JSON.stringify(__assign(__assign(__assign({}, (input.AllowedPublishers !== undefined &&
                    input.AllowedPublishers !== null && {
                    AllowedPublishers: serializeAws_restJson1AllowedPublishers(input.AllowedPublishers, context),
                })), (input.CodeSigningPolicies !== undefined &&
                    input.CodeSigningPolicies !== null && {
                    CodeSigningPolicies: serializeAws_restJson1CodeSigningPolicies(input.CodeSigningPolicies, context),
                })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })));
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
export var serializeAws_restJson1UpdateEventSourceMappingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
                if (input.UUID !== undefined) {
                    labelValue = input.UUID;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: UUID.");
                    }
                    resolvedPath = resolvedPath.replace("{UUID}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: UUID.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BatchSize !== undefined && input.BatchSize !== null && { BatchSize: input.BatchSize })), (input.BisectBatchOnFunctionError !== undefined &&
                    input.BisectBatchOnFunctionError !== null && { BisectBatchOnFunctionError: input.BisectBatchOnFunctionError })), (input.DestinationConfig !== undefined &&
                    input.DestinationConfig !== null && {
                    DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
                })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.FunctionName !== undefined && input.FunctionName !== null && { FunctionName: input.FunctionName })), (input.FunctionResponseTypes !== undefined &&
                    input.FunctionResponseTypes !== null && {
                    FunctionResponseTypes: serializeAws_restJson1FunctionResponseTypeList(input.FunctionResponseTypes, context),
                })), (input.MaximumBatchingWindowInSeconds !== undefined &&
                    input.MaximumBatchingWindowInSeconds !== null && {
                    MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds,
                })), (input.MaximumRecordAgeInSeconds !== undefined &&
                    input.MaximumRecordAgeInSeconds !== null && { MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds })), (input.MaximumRetryAttempts !== undefined &&
                    input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts })), (input.ParallelizationFactor !== undefined &&
                    input.ParallelizationFactor !== null && { ParallelizationFactor: input.ParallelizationFactor })), (input.SourceAccessConfigurations !== undefined &&
                    input.SourceAccessConfigurations !== null && {
                    SourceAccessConfigurations: serializeAws_restJson1SourceAccessConfigurations(input.SourceAccessConfigurations, context),
                })), (input.TumblingWindowInSeconds !== undefined &&
                    input.TumblingWindowInSeconds !== null && { TumblingWindowInSeconds: input.TumblingWindowInSeconds })));
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
export var serializeAws_restJson1UpdateFunctionCodeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/code";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DryRun !== undefined && input.DryRun !== null && { DryRun: input.DryRun })), (input.ImageUri !== undefined && input.ImageUri !== null && { ImageUri: input.ImageUri })), (input.Publish !== undefined && input.Publish !== null && { Publish: input.Publish })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })), (input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket })), (input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key })), (input.S3ObjectVersion !== undefined &&
                    input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) })));
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
export var serializeAws_restJson1UpdateFunctionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.DeadLetterConfig !== undefined &&
                    input.DeadLetterConfig !== null && {
                    DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(input.DeadLetterConfig, context),
                })), (input.Description !== undefined && input.Description !== null && { Description: input.Description })), (input.Environment !== undefined &&
                    input.Environment !== null && { Environment: serializeAws_restJson1Environment(input.Environment, context) })), (input.FileSystemConfigs !== undefined &&
                    input.FileSystemConfigs !== null && {
                    FileSystemConfigs: serializeAws_restJson1FileSystemConfigList(input.FileSystemConfigs, context),
                })), (input.Handler !== undefined && input.Handler !== null && { Handler: input.Handler })), (input.ImageConfig !== undefined &&
                    input.ImageConfig !== null && { ImageConfig: serializeAws_restJson1ImageConfig(input.ImageConfig, context) })), (input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn })), (input.Layers !== undefined &&
                    input.Layers !== null && { Layers: serializeAws_restJson1LayerList(input.Layers, context) })), (input.MemorySize !== undefined && input.MemorySize !== null && { MemorySize: input.MemorySize })), (input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId })), (input.Role !== undefined && input.Role !== null && { Role: input.Role })), (input.Runtime !== undefined && input.Runtime !== null && { Runtime: input.Runtime })), (input.Timeout !== undefined && input.Timeout !== null && { Timeout: input.Timeout })), (input.TracingConfig !== undefined &&
                    input.TracingConfig !== null && {
                    TracingConfig: serializeAws_restJson1TracingConfig(input.TracingConfig, context),
                })), (input.VpcConfig !== undefined &&
                    input.VpcConfig !== null && { VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context) })));
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
export var serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
                if (input.FunctionName !== undefined) {
                    labelValue = input.FunctionName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: FunctionName.");
                    }
                    resolvedPath = resolvedPath.replace("{FunctionName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: FunctionName.");
                }
                query = __assign({}, (input.Qualifier !== undefined && { Qualifier: input.Qualifier }));
                body = JSON.stringify(__assign(__assign(__assign({}, (input.DestinationConfig !== undefined &&
                    input.DestinationConfig !== null && {
                    DestinationConfig: serializeAws_restJson1DestinationConfig(input.DestinationConfig, context),
                })), (input.MaximumEventAgeInSeconds !== undefined &&
                    input.MaximumEventAgeInSeconds !== null && { MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds })), (input.MaximumRetryAttempts !== undefined &&
                    input.MaximumRetryAttempts !== null && { MaximumRetryAttempts: input.MaximumRetryAttempts })));
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
                        query: query,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1AddLayerVersionPermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddLayerVersionPermissionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    RevisionId: undefined,
                    Statement: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Statement !== undefined && data.Statement !== null) {
                    contents.Statement = data.Statement;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddLayerVersionPermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "PolicyLengthExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#PolicyLengthExceededException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1AddPermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1AddPermissionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Statement: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Statement !== undefined && data.Statement !== null) {
                    contents.Statement = data.Statement;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1AddPermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "PolicyLengthExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#PolicyLengthExceededException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PolicyLengthExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AliasArn: undefined,
                    Description: undefined,
                    FunctionVersion: undefined,
                    Name: undefined,
                    RevisionId: undefined,
                    RoutingConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AliasArn !== undefined && data.AliasArn !== null) {
                    contents.AliasArn = data.AliasArn;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
                    contents.FunctionVersion = data.FunctionVersion;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
                    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
                    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateEventSourceMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateEventSourceMappingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BatchSize: undefined,
                    BisectBatchOnFunctionError: undefined,
                    DestinationConfig: undefined,
                    EventSourceArn: undefined,
                    FunctionArn: undefined,
                    FunctionResponseTypes: undefined,
                    LastModified: undefined,
                    LastProcessingResult: undefined,
                    MaximumBatchingWindowInSeconds: undefined,
                    MaximumRecordAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                    ParallelizationFactor: undefined,
                    Queues: undefined,
                    SelfManagedEventSource: undefined,
                    SourceAccessConfigurations: undefined,
                    StartingPosition: undefined,
                    StartingPositionTimestamp: undefined,
                    State: undefined,
                    StateTransitionReason: undefined,
                    Topics: undefined,
                    TumblingWindowInSeconds: undefined,
                    UUID: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BatchSize !== undefined && data.BatchSize !== null) {
                    contents.BatchSize = data.BatchSize;
                }
                if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
                    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
                }
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
                    contents.EventSourceArn = data.EventSourceArn;
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
                    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
                    contents.LastProcessingResult = data.LastProcessingResult;
                }
                if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
                    contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
                }
                if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
                    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
                    contents.ParallelizationFactor = data.ParallelizationFactor;
                }
                if (data.Queues !== undefined && data.Queues !== null) {
                    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
                }
                if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
                    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
                }
                if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
                    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
                }
                if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
                    contents.StartingPosition = data.StartingPosition;
                }
                if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
                    contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
                    contents.StateTransitionReason = data.StateTransitionReason;
                }
                if (data.Topics !== undefined && data.Topics !== null) {
                    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
                }
                if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
                    contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
                }
                if (data.UUID !== undefined && data.UUID !== null) {
                    contents.UUID = data.UUID;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateEventSourceMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFunctionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSha256: undefined,
                    CodeSize: undefined,
                    DeadLetterConfig: undefined,
                    Description: undefined,
                    Environment: undefined,
                    FileSystemConfigs: undefined,
                    FunctionArn: undefined,
                    FunctionName: undefined,
                    Handler: undefined,
                    ImageConfigResponse: undefined,
                    KMSKeyArn: undefined,
                    LastModified: undefined,
                    LastUpdateStatus: undefined,
                    LastUpdateStatusReason: undefined,
                    LastUpdateStatusReasonCode: undefined,
                    Layers: undefined,
                    MasterArn: undefined,
                    MemorySize: undefined,
                    PackageType: undefined,
                    RevisionId: undefined,
                    Role: undefined,
                    Runtime: undefined,
                    SigningJobArn: undefined,
                    SigningProfileVersionArn: undefined,
                    State: undefined,
                    StateReason: undefined,
                    StateReasonCode: undefined,
                    Timeout: undefined,
                    TracingConfig: undefined,
                    Version: undefined,
                    VpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
                    contents.CodeSha256 = data.CodeSha256;
                }
                if (data.CodeSize !== undefined && data.CodeSize !== null) {
                    contents.CodeSize = data.CodeSize;
                }
                if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
                    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
                }
                if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
                    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                if (data.Handler !== undefined && data.Handler !== null) {
                    contents.Handler = data.Handler;
                }
                if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
                    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
                }
                if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
                    contents.KMSKeyArn = data.KMSKeyArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
                    contents.LastUpdateStatus = data.LastUpdateStatus;
                }
                if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
                    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
                }
                if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
                    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
                }
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
                }
                if (data.MasterArn !== undefined && data.MasterArn !== null) {
                    contents.MasterArn = data.MasterArn;
                }
                if (data.MemorySize !== undefined && data.MemorySize !== null) {
                    contents.MemorySize = data.MemorySize;
                }
                if (data.PackageType !== undefined && data.PackageType !== null) {
                    contents.PackageType = data.PackageType;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Role !== undefined && data.Role !== null) {
                    contents.Role = data.Role;
                }
                if (data.Runtime !== undefined && data.Runtime !== null) {
                    contents.Runtime = data.Runtime;
                }
                if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
                    contents.SigningJobArn = data.SigningJobArn;
                }
                if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
                    contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateReason !== undefined && data.StateReason !== null) {
                    contents.StateReason = data.StateReason;
                }
                if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
                    contents.StateReasonCode = data.StateReasonCode;
                }
                if (data.Timeout !== undefined && data.Timeout !== null) {
                    contents.Timeout = data.Timeout;
                }
                if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
                    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
                    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "CodeStorageExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#CodeStorageExceededException": return [3 /*break*/, 4];
                    case "CodeVerificationFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#CodeVerificationFailedException": return [3 /*break*/, 6];
                    case "InvalidCodeSignatureException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#InvalidCodeSignatureException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "ResourceConflictException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 16];
                    case "TooManyRequestsException": return [3 /*break*/, 18];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1DeleteAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteAliasCommandError(output, context)];
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
var deserializeAws_restJson1DeleteAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteCodeSigningConfigCommandError(output, context)];
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
var deserializeAws_restJson1DeleteCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteEventSourceMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteEventSourceMappingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BatchSize: undefined,
                    BisectBatchOnFunctionError: undefined,
                    DestinationConfig: undefined,
                    EventSourceArn: undefined,
                    FunctionArn: undefined,
                    FunctionResponseTypes: undefined,
                    LastModified: undefined,
                    LastProcessingResult: undefined,
                    MaximumBatchingWindowInSeconds: undefined,
                    MaximumRecordAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                    ParallelizationFactor: undefined,
                    Queues: undefined,
                    SelfManagedEventSource: undefined,
                    SourceAccessConfigurations: undefined,
                    StartingPosition: undefined,
                    StartingPositionTimestamp: undefined,
                    State: undefined,
                    StateTransitionReason: undefined,
                    Topics: undefined,
                    TumblingWindowInSeconds: undefined,
                    UUID: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BatchSize !== undefined && data.BatchSize !== null) {
                    contents.BatchSize = data.BatchSize;
                }
                if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
                    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
                }
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
                    contents.EventSourceArn = data.EventSourceArn;
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
                    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
                    contents.LastProcessingResult = data.LastProcessingResult;
                }
                if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
                    contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
                }
                if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
                    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
                    contents.ParallelizationFactor = data.ParallelizationFactor;
                }
                if (data.Queues !== undefined && data.Queues !== null) {
                    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
                }
                if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
                    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
                }
                if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
                    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
                }
                if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
                    contents.StartingPosition = data.StartingPosition;
                }
                if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
                    contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
                    contents.StateTransitionReason = data.StateTransitionReason;
                }
                if (data.Topics !== undefined && data.Topics !== null) {
                    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
                }
                if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
                    contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
                }
                if (data.UUID !== undefined && data.UUID !== null) {
                    contents.UUID = data.UUID;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteEventSourceMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceInUseException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceInUseException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFunctionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFunctionCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ResourceConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFunctionConcurrencyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFunctionConcurrencyCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFunctionConcurrencyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteLayerVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteLayerVersionCommandError(output, context)];
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
var deserializeAws_restJson1DeleteLayerVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 2];
                    case "TooManyRequestsException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError(output, context)];
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
var deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetAccountSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetAccountSettingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AccountLimit: undefined,
                    AccountUsage: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AccountLimit !== undefined && data.AccountLimit !== null) {
                    contents.AccountLimit = deserializeAws_restJson1AccountLimit(data.AccountLimit, context);
                }
                if (data.AccountUsage !== undefined && data.AccountUsage !== null) {
                    contents.AccountUsage = deserializeAws_restJson1AccountUsage(data.AccountUsage, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetAccountSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ServiceException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 2];
                    case "TooManyRequestsException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AliasArn: undefined,
                    Description: undefined,
                    FunctionVersion: undefined,
                    Name: undefined,
                    RevisionId: undefined,
                    RoutingConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AliasArn !== undefined && data.AliasArn !== null) {
                    contents.AliasArn = data.AliasArn;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
                    contents.FunctionVersion = data.FunctionVersion;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
                    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
                    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetEventSourceMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetEventSourceMappingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BatchSize: undefined,
                    BisectBatchOnFunctionError: undefined,
                    DestinationConfig: undefined,
                    EventSourceArn: undefined,
                    FunctionArn: undefined,
                    FunctionResponseTypes: undefined,
                    LastModified: undefined,
                    LastProcessingResult: undefined,
                    MaximumBatchingWindowInSeconds: undefined,
                    MaximumRecordAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                    ParallelizationFactor: undefined,
                    Queues: undefined,
                    SelfManagedEventSource: undefined,
                    SourceAccessConfigurations: undefined,
                    StartingPosition: undefined,
                    StartingPositionTimestamp: undefined,
                    State: undefined,
                    StateTransitionReason: undefined,
                    Topics: undefined,
                    TumblingWindowInSeconds: undefined,
                    UUID: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BatchSize !== undefined && data.BatchSize !== null) {
                    contents.BatchSize = data.BatchSize;
                }
                if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
                    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
                }
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
                    contents.EventSourceArn = data.EventSourceArn;
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
                    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
                    contents.LastProcessingResult = data.LastProcessingResult;
                }
                if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
                    contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
                }
                if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
                    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
                    contents.ParallelizationFactor = data.ParallelizationFactor;
                }
                if (data.Queues !== undefined && data.Queues !== null) {
                    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
                }
                if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
                    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
                }
                if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
                    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
                }
                if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
                    contents.StartingPosition = data.StartingPosition;
                }
                if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
                    contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
                    contents.StateTransitionReason = data.StateTransitionReason;
                }
                if (data.Topics !== undefined && data.Topics !== null) {
                    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
                }
                if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
                    contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
                }
                if (data.UUID !== undefined && data.UUID !== null) {
                    contents.UUID = data.UUID;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetEventSourceMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFunctionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Code: undefined,
                    Concurrency: undefined,
                    Configuration: undefined,
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Code !== undefined && data.Code !== null) {
                    contents.Code = deserializeAws_restJson1FunctionCodeLocation(data.Code, context);
                }
                if (data.Concurrency !== undefined && data.Concurrency !== null) {
                    contents.Concurrency = deserializeAws_restJson1Concurrency(data.Concurrency, context);
                }
                if (data.Configuration !== undefined && data.Configuration !== null) {
                    contents.Configuration = deserializeAws_restJson1FunctionConfiguration(data.Configuration, context);
                }
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFunctionCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfigArn: undefined,
                    FunctionName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
                    contents.CodeSigningConfigArn = data.CodeSigningConfigArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFunctionCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFunctionConcurrencyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFunctionConcurrencyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ReservedConcurrentExecutions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
                    contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFunctionConcurrencyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFunctionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFunctionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSha256: undefined,
                    CodeSize: undefined,
                    DeadLetterConfig: undefined,
                    Description: undefined,
                    Environment: undefined,
                    FileSystemConfigs: undefined,
                    FunctionArn: undefined,
                    FunctionName: undefined,
                    Handler: undefined,
                    ImageConfigResponse: undefined,
                    KMSKeyArn: undefined,
                    LastModified: undefined,
                    LastUpdateStatus: undefined,
                    LastUpdateStatusReason: undefined,
                    LastUpdateStatusReasonCode: undefined,
                    Layers: undefined,
                    MasterArn: undefined,
                    MemorySize: undefined,
                    PackageType: undefined,
                    RevisionId: undefined,
                    Role: undefined,
                    Runtime: undefined,
                    SigningJobArn: undefined,
                    SigningProfileVersionArn: undefined,
                    State: undefined,
                    StateReason: undefined,
                    StateReasonCode: undefined,
                    Timeout: undefined,
                    TracingConfig: undefined,
                    Version: undefined,
                    VpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
                    contents.CodeSha256 = data.CodeSha256;
                }
                if (data.CodeSize !== undefined && data.CodeSize !== null) {
                    contents.CodeSize = data.CodeSize;
                }
                if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
                    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
                }
                if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
                    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                if (data.Handler !== undefined && data.Handler !== null) {
                    contents.Handler = data.Handler;
                }
                if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
                    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
                }
                if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
                    contents.KMSKeyArn = data.KMSKeyArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
                    contents.LastUpdateStatus = data.LastUpdateStatus;
                }
                if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
                    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
                }
                if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
                    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
                }
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
                }
                if (data.MasterArn !== undefined && data.MasterArn !== null) {
                    contents.MasterArn = data.MasterArn;
                }
                if (data.MemorySize !== undefined && data.MemorySize !== null) {
                    contents.MemorySize = data.MemorySize;
                }
                if (data.PackageType !== undefined && data.PackageType !== null) {
                    contents.PackageType = data.PackageType;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Role !== undefined && data.Role !== null) {
                    contents.Role = data.Role;
                }
                if (data.Runtime !== undefined && data.Runtime !== null) {
                    contents.Runtime = data.Runtime;
                }
                if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
                    contents.SigningJobArn = data.SigningJobArn;
                }
                if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
                    contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateReason !== undefined && data.StateReason !== null) {
                    contents.StateReason = data.StateReason;
                }
                if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
                    contents.StateReasonCode = data.StateReasonCode;
                }
                if (data.Timeout !== undefined && data.Timeout !== null) {
                    contents.Timeout = data.Timeout;
                }
                if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
                    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
                    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFunctionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DestinationConfig: undefined,
                    FunctionArn: undefined,
                    LastModified: undefined,
                    MaximumEventAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
                    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLayerVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLayerVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CompatibleRuntimes: undefined,
                    Content: undefined,
                    CreatedDate: undefined,
                    Description: undefined,
                    LayerArn: undefined,
                    LayerVersionArn: undefined,
                    LicenseInfo: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
                    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
                }
                if (data.Content !== undefined && data.Content !== null) {
                    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
                }
                if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
                    contents.CreatedDate = data.CreatedDate;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.LayerArn !== undefined && data.LayerArn !== null) {
                    contents.LayerArn = data.LayerArn;
                }
                if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
                    contents.LayerVersionArn = data.LayerVersionArn;
                }
                if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
                    contents.LicenseInfo = data.LicenseInfo;
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLayerVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLayerVersionByArnCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLayerVersionByArnCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CompatibleRuntimes: undefined,
                    Content: undefined,
                    CreatedDate: undefined,
                    Description: undefined,
                    LayerArn: undefined,
                    LayerVersionArn: undefined,
                    LicenseInfo: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
                    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
                }
                if (data.Content !== undefined && data.Content !== null) {
                    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
                }
                if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
                    contents.CreatedDate = data.CreatedDate;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.LayerArn !== undefined && data.LayerArn !== null) {
                    contents.LayerArn = data.LayerArn;
                }
                if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
                    contents.LayerVersionArn = data.LayerVersionArn;
                }
                if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
                    contents.LicenseInfo = data.LicenseInfo;
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLayerVersionByArnCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetLayerVersionPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetLayerVersionPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                    RevisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetLayerVersionPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Policy: undefined,
                    RevisionId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Policy !== undefined && data.Policy !== null) {
                    contents.Policy = data.Policy;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AllocatedProvisionedConcurrentExecutions: undefined,
                    AvailableProvisionedConcurrentExecutions: undefined,
                    LastModified: undefined,
                    RequestedProvisionedConcurrentExecutions: undefined,
                    Status: undefined,
                    StatusReason: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AllocatedProvisionedConcurrentExecutions !== undefined &&
                    data.AllocatedProvisionedConcurrentExecutions !== null) {
                    contents.AllocatedProvisionedConcurrentExecutions = data.AllocatedProvisionedConcurrentExecutions;
                }
                if (data.AvailableProvisionedConcurrentExecutions !== undefined &&
                    data.AvailableProvisionedConcurrentExecutions !== null) {
                    contents.AvailableProvisionedConcurrentExecutions = data.AvailableProvisionedConcurrentExecutions;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.RequestedProvisionedConcurrentExecutions !== undefined &&
                    data.RequestedProvisionedConcurrentExecutions !== null) {
                    contents.RequestedProvisionedConcurrentExecutions = data.RequestedProvisionedConcurrentExecutions;
                }
                if (data.Status !== undefined && data.Status !== null) {
                    contents.Status = data.Status;
                }
                if (data.StatusReason !== undefined && data.StatusReason !== null) {
                    contents.StatusReason = data.StatusReason;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ProvisionedConcurrencyConfigNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1InvokeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InvokeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ExecutedVersion: undefined,
                    FunctionError: undefined,
                    LogResult: undefined,
                    Payload: undefined,
                    StatusCode: undefined,
                };
                if (output.headers["x-amz-function-error"] !== undefined) {
                    contents.FunctionError = output.headers["x-amz-function-error"];
                }
                if (output.headers["x-amz-log-result"] !== undefined) {
                    contents.LogResult = output.headers["x-amz-log-result"];
                }
                if (output.headers["x-amz-executed-version"] !== undefined) {
                    contents.ExecutedVersion = output.headers["x-amz-executed-version"];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents.Payload = data;
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InvokeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, parsedBody, message;
    var _4;
    return __generator(this, function (_5) {
        switch (_5.label) {
            case 0:
                _a = [__assign({}, output)];
                _4 = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_4.body = _5.sent(), _4)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "EC2AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#EC2AccessDeniedException": return [3 /*break*/, 2];
                    case "EC2ThrottledException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#EC2ThrottledException": return [3 /*break*/, 4];
                    case "EC2UnexpectedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#EC2UnexpectedException": return [3 /*break*/, 6];
                    case "EFSIOException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#EFSIOException": return [3 /*break*/, 8];
                    case "EFSMountConnectivityException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#EFSMountConnectivityException": return [3 /*break*/, 10];
                    case "EFSMountFailureException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#EFSMountFailureException": return [3 /*break*/, 12];
                    case "EFSMountTimeoutException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#EFSMountTimeoutException": return [3 /*break*/, 14];
                    case "ENILimitReachedException": return [3 /*break*/, 16];
                    case "com.amazonaws.lambda#ENILimitReachedException": return [3 /*break*/, 16];
                    case "InvalidParameterValueException": return [3 /*break*/, 18];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 18];
                    case "InvalidRequestContentException": return [3 /*break*/, 20];
                    case "com.amazonaws.lambda#InvalidRequestContentException": return [3 /*break*/, 20];
                    case "InvalidRuntimeException": return [3 /*break*/, 22];
                    case "com.amazonaws.lambda#InvalidRuntimeException": return [3 /*break*/, 22];
                    case "InvalidSecurityGroupIDException": return [3 /*break*/, 24];
                    case "com.amazonaws.lambda#InvalidSecurityGroupIDException": return [3 /*break*/, 24];
                    case "InvalidSubnetIDException": return [3 /*break*/, 26];
                    case "com.amazonaws.lambda#InvalidSubnetIDException": return [3 /*break*/, 26];
                    case "InvalidZipFileException": return [3 /*break*/, 28];
                    case "com.amazonaws.lambda#InvalidZipFileException": return [3 /*break*/, 28];
                    case "KMSAccessDeniedException": return [3 /*break*/, 30];
                    case "com.amazonaws.lambda#KMSAccessDeniedException": return [3 /*break*/, 30];
                    case "KMSDisabledException": return [3 /*break*/, 32];
                    case "com.amazonaws.lambda#KMSDisabledException": return [3 /*break*/, 32];
                    case "KMSInvalidStateException": return [3 /*break*/, 34];
                    case "com.amazonaws.lambda#KMSInvalidStateException": return [3 /*break*/, 34];
                    case "KMSNotFoundException": return [3 /*break*/, 36];
                    case "com.amazonaws.lambda#KMSNotFoundException": return [3 /*break*/, 36];
                    case "RequestTooLargeException": return [3 /*break*/, 38];
                    case "com.amazonaws.lambda#RequestTooLargeException": return [3 /*break*/, 38];
                    case "ResourceConflictException": return [3 /*break*/, 40];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 40];
                    case "ResourceNotFoundException": return [3 /*break*/, 42];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 42];
                    case "ResourceNotReadyException": return [3 /*break*/, 44];
                    case "com.amazonaws.lambda#ResourceNotReadyException": return [3 /*break*/, 44];
                    case "ServiceException": return [3 /*break*/, 46];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 46];
                    case "SubnetIPAddressLimitReachedException": return [3 /*break*/, 48];
                    case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException": return [3 /*break*/, 48];
                    case "TooManyRequestsException": return [3 /*break*/, 50];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 50];
                    case "UnsupportedMediaTypeException": return [3 /*break*/, 52];
                    case "com.amazonaws.lambda#UnsupportedMediaTypeException": return [3 /*break*/, 52];
                }
                return [3 /*break*/, 54];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EC2AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EC2ThrottledExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EC2UnexpectedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EFSIOExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EFSMountConnectivityExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EFSMountFailureExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1EFSMountTimeoutExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ENILimitReachedExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 24:
                _p = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse(parsedOutput, context)];
            case 25:
                response = __assign.apply(void 0, [__assign.apply(void 0, _p.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 26:
                _q = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidSubnetIDExceptionResponse(parsedOutput, context)];
            case 27:
                response = __assign.apply(void 0, [__assign.apply(void 0, _q.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 28:
                _r = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidZipFileExceptionResponse(parsedOutput, context)];
            case 29:
                response = __assign.apply(void 0, [__assign.apply(void 0, _r.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 30:
                _s = [{}];
                return [4 /*yield*/, deserializeAws_restJson1KMSAccessDeniedExceptionResponse(parsedOutput, context)];
            case 31:
                response = __assign.apply(void 0, [__assign.apply(void 0, _s.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 32:
                _t = [{}];
                return [4 /*yield*/, deserializeAws_restJson1KMSDisabledExceptionResponse(parsedOutput, context)];
            case 33:
                response = __assign.apply(void 0, [__assign.apply(void 0, _t.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 34:
                _u = [{}];
                return [4 /*yield*/, deserializeAws_restJson1KMSInvalidStateExceptionResponse(parsedOutput, context)];
            case 35:
                response = __assign.apply(void 0, [__assign.apply(void 0, _u.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 36:
                _v = [{}];
                return [4 /*yield*/, deserializeAws_restJson1KMSNotFoundExceptionResponse(parsedOutput, context)];
            case 37:
                response = __assign.apply(void 0, [__assign.apply(void 0, _v.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 38:
                _w = [{}];
                return [4 /*yield*/, deserializeAws_restJson1RequestTooLargeExceptionResponse(parsedOutput, context)];
            case 39:
                response = __assign.apply(void 0, [__assign.apply(void 0, _w.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 40:
                _x = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 41:
                response = __assign.apply(void 0, [__assign.apply(void 0, _x.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 42:
                _y = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 43:
                response = __assign.apply(void 0, [__assign.apply(void 0, _y.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 44:
                _z = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context)];
            case 45:
                response = __assign.apply(void 0, [__assign.apply(void 0, _z.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 46:
                _0 = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 47:
                response = __assign.apply(void 0, [__assign.apply(void 0, _0.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 48:
                _1 = [{}];
                return [4 /*yield*/, deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse(parsedOutput, context)];
            case 49:
                response = __assign.apply(void 0, [__assign.apply(void 0, _1.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 50:
                _2 = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 51:
                response = __assign.apply(void 0, [__assign.apply(void 0, _2.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 52:
                _3 = [{}];
                return [4 /*yield*/, deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(parsedOutput, context)];
            case 53:
                response = __assign.apply(void 0, [__assign.apply(void 0, _3.concat([(_5.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 55];
            case 54:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _5.label = 55;
            case 55:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1InvokeAsyncCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1InvokeAsyncCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Status: undefined,
                };
                if (contents.Status === undefined) {
                    contents.Status = output.statusCode;
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1InvokeAsyncCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidRequestContentException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidRequestContentException": return [3 /*break*/, 2];
                    case "InvalidRuntimeException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#InvalidRuntimeException": return [3 /*break*/, 4];
                    case "ResourceConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestContentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRuntimeExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListAliasesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListAliasesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Aliases: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Aliases !== undefined && data.Aliases !== null) {
                    contents.Aliases = deserializeAws_restJson1AliasList(data.Aliases, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListAliasesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListCodeSigningConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListCodeSigningConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfigs: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfigs !== undefined && data.CodeSigningConfigs !== null) {
                    contents.CodeSigningConfigs = deserializeAws_restJson1CodeSigningConfigList(data.CodeSigningConfigs, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListCodeSigningConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListEventSourceMappingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListEventSourceMappingsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    EventSourceMappings: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.EventSourceMappings !== undefined && data.EventSourceMappings !== null) {
                    contents.EventSourceMappings = deserializeAws_restJson1EventSourceMappingsList(data.EventSourceMappings, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListEventSourceMappingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FunctionEventInvokeConfigs: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FunctionEventInvokeConfigs !== undefined && data.FunctionEventInvokeConfigs !== null) {
                    contents.FunctionEventInvokeConfigs = deserializeAws_restJson1FunctionEventInvokeConfigList(data.FunctionEventInvokeConfigs, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFunctionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFunctionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Functions: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Functions !== undefined && data.Functions !== null) {
                    contents.Functions = deserializeAws_restJson1FunctionList(data.Functions, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFunctionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    FunctionArns: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.FunctionArns !== undefined && data.FunctionArns !== null) {
                    contents.FunctionArns = deserializeAws_restJson1FunctionArnList(data.FunctionArns, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFunctionsByCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListLayersCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListLayersCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Layers: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersList(data.Layers, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListLayersCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ServiceException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 4];
                    case "TooManyRequestsException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListLayerVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListLayerVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    LayerVersions: undefined,
                    NextMarker: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.LayerVersions !== undefined && data.LayerVersions !== null) {
                    contents.LayerVersions = deserializeAws_restJson1LayerVersionsList(data.LayerVersions, context);
                }
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListLayerVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextMarker: undefined,
                    ProvisionedConcurrencyConfigs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                if (data.ProvisionedConcurrencyConfigs !== undefined && data.ProvisionedConcurrencyConfigs !== null) {
                    contents.ProvisionedConcurrencyConfigs = deserializeAws_restJson1ProvisionedConcurrencyConfigList(data.ProvisionedConcurrencyConfigs, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListTagsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListTagsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListTagsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListVersionsByFunctionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListVersionsByFunctionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    NextMarker: undefined,
                    Versions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.NextMarker !== undefined && data.NextMarker !== null) {
                    contents.NextMarker = data.NextMarker;
                }
                if (data.Versions !== undefined && data.Versions !== null) {
                    contents.Versions = deserializeAws_restJson1FunctionList(data.Versions, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListVersionsByFunctionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PublishLayerVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PublishLayerVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CompatibleRuntimes: undefined,
                    Content: undefined,
                    CreatedDate: undefined,
                    Description: undefined,
                    LayerArn: undefined,
                    LayerVersionArn: undefined,
                    LicenseInfo: undefined,
                    Version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CompatibleRuntimes !== undefined && data.CompatibleRuntimes !== null) {
                    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(data.CompatibleRuntimes, context);
                }
                if (data.Content !== undefined && data.Content !== null) {
                    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(data.Content, context);
                }
                if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
                    contents.CreatedDate = data.CreatedDate;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.LayerArn !== undefined && data.LayerArn !== null) {
                    contents.LayerArn = data.LayerArn;
                }
                if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
                    contents.LayerVersionArn = data.LayerVersionArn;
                }
                if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
                    contents.LicenseInfo = data.LicenseInfo;
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PublishLayerVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CodeStorageExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeStorageExceededException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PublishVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 201 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PublishVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSha256: undefined,
                    CodeSize: undefined,
                    DeadLetterConfig: undefined,
                    Description: undefined,
                    Environment: undefined,
                    FileSystemConfigs: undefined,
                    FunctionArn: undefined,
                    FunctionName: undefined,
                    Handler: undefined,
                    ImageConfigResponse: undefined,
                    KMSKeyArn: undefined,
                    LastModified: undefined,
                    LastUpdateStatus: undefined,
                    LastUpdateStatusReason: undefined,
                    LastUpdateStatusReasonCode: undefined,
                    Layers: undefined,
                    MasterArn: undefined,
                    MemorySize: undefined,
                    PackageType: undefined,
                    RevisionId: undefined,
                    Role: undefined,
                    Runtime: undefined,
                    SigningJobArn: undefined,
                    SigningProfileVersionArn: undefined,
                    State: undefined,
                    StateReason: undefined,
                    StateReasonCode: undefined,
                    Timeout: undefined,
                    TracingConfig: undefined,
                    Version: undefined,
                    VpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
                    contents.CodeSha256 = data.CodeSha256;
                }
                if (data.CodeSize !== undefined && data.CodeSize !== null) {
                    contents.CodeSize = data.CodeSize;
                }
                if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
                    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
                }
                if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
                    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                if (data.Handler !== undefined && data.Handler !== null) {
                    contents.Handler = data.Handler;
                }
                if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
                    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
                }
                if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
                    contents.KMSKeyArn = data.KMSKeyArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
                    contents.LastUpdateStatus = data.LastUpdateStatus;
                }
                if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
                    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
                }
                if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
                    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
                }
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
                }
                if (data.MasterArn !== undefined && data.MasterArn !== null) {
                    contents.MasterArn = data.MasterArn;
                }
                if (data.MemorySize !== undefined && data.MemorySize !== null) {
                    contents.MemorySize = data.MemorySize;
                }
                if (data.PackageType !== undefined && data.PackageType !== null) {
                    contents.PackageType = data.PackageType;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Role !== undefined && data.Role !== null) {
                    contents.Role = data.Role;
                }
                if (data.Runtime !== undefined && data.Runtime !== null) {
                    contents.Runtime = data.Runtime;
                }
                if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
                    contents.SigningJobArn = data.SigningJobArn;
                }
                if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
                    contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateReason !== undefined && data.StateReason !== null) {
                    contents.StateReason = data.StateReason;
                }
                if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
                    contents.StateReasonCode = data.StateReasonCode;
                }
                if (data.Timeout !== undefined && data.Timeout !== null) {
                    contents.Timeout = data.Timeout;
                }
                if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
                    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
                    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PublishVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CodeStorageExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeStorageExceededException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "PreconditionFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 6];
                    case "ResourceConflictException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 12];
                    case "TooManyRequestsException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutFunctionCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfigArn: undefined,
                    FunctionName: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfigArn !== undefined && data.CodeSigningConfigArn !== null) {
                    contents.CodeSigningConfigArn = data.CodeSigningConfigArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutFunctionCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "InvalidParameterValueException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 4];
                    case "ResourceConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutFunctionConcurrencyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutFunctionConcurrencyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    ReservedConcurrentExecutions: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.ReservedConcurrentExecutions !== undefined && data.ReservedConcurrentExecutions !== null) {
                    contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutFunctionConcurrencyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DestinationConfig: undefined,
                    FunctionArn: undefined,
                    LastModified: undefined,
                    MaximumEventAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
                    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AllocatedProvisionedConcurrentExecutions: undefined,
                    AvailableProvisionedConcurrentExecutions: undefined,
                    LastModified: undefined,
                    RequestedProvisionedConcurrentExecutions: undefined,
                    Status: undefined,
                    StatusReason: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AllocatedProvisionedConcurrentExecutions !== undefined &&
                    data.AllocatedProvisionedConcurrentExecutions !== null) {
                    contents.AllocatedProvisionedConcurrentExecutions = data.AllocatedProvisionedConcurrentExecutions;
                }
                if (data.AvailableProvisionedConcurrentExecutions !== undefined &&
                    data.AvailableProvisionedConcurrentExecutions !== null) {
                    contents.AvailableProvisionedConcurrentExecutions = data.AvailableProvisionedConcurrentExecutions;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.RequestedProvisionedConcurrentExecutions !== undefined &&
                    data.RequestedProvisionedConcurrentExecutions !== null) {
                    contents.RequestedProvisionedConcurrentExecutions = data.RequestedProvisionedConcurrentExecutions;
                }
                if (data.Status !== undefined && data.Status !== null) {
                    contents.Status = data.Status;
                }
                if (data.StatusReason !== undefined && data.StatusReason !== null) {
                    contents.StatusReason = data.StatusReason;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemoveLayerVersionPermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemoveLayerVersionPermissionCommandError(output, context)];
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
var deserializeAws_restJson1RemoveLayerVersionPermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RemovePermissionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 204 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RemovePermissionCommandError(output, context)];
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
var deserializeAws_restJson1RemovePermissionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ServiceException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 8];
                    case "TooManyRequestsException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateAliasCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateAliasCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    AliasArn: undefined,
                    Description: undefined,
                    FunctionVersion: undefined,
                    Name: undefined,
                    RevisionId: undefined,
                    RoutingConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.AliasArn !== undefined && data.AliasArn !== null) {
                    contents.AliasArn = data.AliasArn;
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
                    contents.FunctionVersion = data.FunctionVersion;
                }
                if (data.Name !== undefined && data.Name !== null) {
                    contents.Name = data.Name;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
                    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(data.RoutingConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateAliasCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "PreconditionFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 4];
                    case "ResourceConflictException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateCodeSigningConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateCodeSigningConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSigningConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSigningConfig !== undefined && data.CodeSigningConfig !== null) {
                    contents.CodeSigningConfig = deserializeAws_restJson1CodeSigningConfig(data.CodeSigningConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateCodeSigningConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateEventSourceMappingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 202 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateEventSourceMappingCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    BatchSize: undefined,
                    BisectBatchOnFunctionError: undefined,
                    DestinationConfig: undefined,
                    EventSourceArn: undefined,
                    FunctionArn: undefined,
                    FunctionResponseTypes: undefined,
                    LastModified: undefined,
                    LastProcessingResult: undefined,
                    MaximumBatchingWindowInSeconds: undefined,
                    MaximumRecordAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                    ParallelizationFactor: undefined,
                    Queues: undefined,
                    SelfManagedEventSource: undefined,
                    SourceAccessConfigurations: undefined,
                    StartingPosition: undefined,
                    StartingPositionTimestamp: undefined,
                    State: undefined,
                    StateTransitionReason: undefined,
                    Topics: undefined,
                    TumblingWindowInSeconds: undefined,
                    UUID: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.BatchSize !== undefined && data.BatchSize !== null) {
                    contents.BatchSize = data.BatchSize;
                }
                if (data.BisectBatchOnFunctionError !== undefined && data.BisectBatchOnFunctionError !== null) {
                    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
                }
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
                    contents.EventSourceArn = data.EventSourceArn;
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionResponseTypes !== undefined && data.FunctionResponseTypes !== null) {
                    contents.FunctionResponseTypes = deserializeAws_restJson1FunctionResponseTypeList(data.FunctionResponseTypes, context);
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.LastProcessingResult !== undefined && data.LastProcessingResult !== null) {
                    contents.LastProcessingResult = data.LastProcessingResult;
                }
                if (data.MaximumBatchingWindowInSeconds !== undefined && data.MaximumBatchingWindowInSeconds !== null) {
                    contents.MaximumBatchingWindowInSeconds = data.MaximumBatchingWindowInSeconds;
                }
                if (data.MaximumRecordAgeInSeconds !== undefined && data.MaximumRecordAgeInSeconds !== null) {
                    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                if (data.ParallelizationFactor !== undefined && data.ParallelizationFactor !== null) {
                    contents.ParallelizationFactor = data.ParallelizationFactor;
                }
                if (data.Queues !== undefined && data.Queues !== null) {
                    contents.Queues = deserializeAws_restJson1Queues(data.Queues, context);
                }
                if (data.SelfManagedEventSource !== undefined && data.SelfManagedEventSource !== null) {
                    contents.SelfManagedEventSource = deserializeAws_restJson1SelfManagedEventSource(data.SelfManagedEventSource, context);
                }
                if (data.SourceAccessConfigurations !== undefined && data.SourceAccessConfigurations !== null) {
                    contents.SourceAccessConfigurations = deserializeAws_restJson1SourceAccessConfigurations(data.SourceAccessConfigurations, context);
                }
                if (data.StartingPosition !== undefined && data.StartingPosition !== null) {
                    contents.StartingPosition = data.StartingPosition;
                }
                if (data.StartingPositionTimestamp !== undefined && data.StartingPositionTimestamp !== null) {
                    contents.StartingPositionTimestamp = new Date(Math.round(data.StartingPositionTimestamp * 1000));
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateTransitionReason !== undefined && data.StateTransitionReason !== null) {
                    contents.StateTransitionReason = data.StateTransitionReason;
                }
                if (data.Topics !== undefined && data.Topics !== null) {
                    contents.Topics = deserializeAws_restJson1Topics(data.Topics, context);
                }
                if (data.TumblingWindowInSeconds !== undefined && data.TumblingWindowInSeconds !== null) {
                    contents.TumblingWindowInSeconds = data.TumblingWindowInSeconds;
                }
                if (data.UUID !== undefined && data.UUID !== null) {
                    contents.UUID = data.UUID;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateEventSourceMappingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceConflictException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 10];
                    case "TooManyRequestsException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateFunctionCodeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFunctionCodeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSha256: undefined,
                    CodeSize: undefined,
                    DeadLetterConfig: undefined,
                    Description: undefined,
                    Environment: undefined,
                    FileSystemConfigs: undefined,
                    FunctionArn: undefined,
                    FunctionName: undefined,
                    Handler: undefined,
                    ImageConfigResponse: undefined,
                    KMSKeyArn: undefined,
                    LastModified: undefined,
                    LastUpdateStatus: undefined,
                    LastUpdateStatusReason: undefined,
                    LastUpdateStatusReasonCode: undefined,
                    Layers: undefined,
                    MasterArn: undefined,
                    MemorySize: undefined,
                    PackageType: undefined,
                    RevisionId: undefined,
                    Role: undefined,
                    Runtime: undefined,
                    SigningJobArn: undefined,
                    SigningProfileVersionArn: undefined,
                    State: undefined,
                    StateReason: undefined,
                    StateReasonCode: undefined,
                    Timeout: undefined,
                    TracingConfig: undefined,
                    Version: undefined,
                    VpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
                    contents.CodeSha256 = data.CodeSha256;
                }
                if (data.CodeSize !== undefined && data.CodeSize !== null) {
                    contents.CodeSize = data.CodeSize;
                }
                if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
                    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
                }
                if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
                    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                if (data.Handler !== undefined && data.Handler !== null) {
                    contents.Handler = data.Handler;
                }
                if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
                    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
                }
                if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
                    contents.KMSKeyArn = data.KMSKeyArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
                    contents.LastUpdateStatus = data.LastUpdateStatus;
                }
                if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
                    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
                }
                if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
                    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
                }
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
                }
                if (data.MasterArn !== undefined && data.MasterArn !== null) {
                    contents.MasterArn = data.MasterArn;
                }
                if (data.MemorySize !== undefined && data.MemorySize !== null) {
                    contents.MemorySize = data.MemorySize;
                }
                if (data.PackageType !== undefined && data.PackageType !== null) {
                    contents.PackageType = data.PackageType;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Role !== undefined && data.Role !== null) {
                    contents.Role = data.Role;
                }
                if (data.Runtime !== undefined && data.Runtime !== null) {
                    contents.Runtime = data.Runtime;
                }
                if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
                    contents.SigningJobArn = data.SigningJobArn;
                }
                if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
                    contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateReason !== undefined && data.StateReason !== null) {
                    contents.StateReason = data.StateReason;
                }
                if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
                    contents.StateReasonCode = data.StateReasonCode;
                }
                if (data.Timeout !== undefined && data.Timeout !== null) {
                    contents.Timeout = data.Timeout;
                }
                if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
                    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
                    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFunctionCodeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, parsedBody, message;
    var _o;
    return __generator(this, function (_p) {
        switch (_p.label) {
            case 0:
                _a = [__assign({}, output)];
                _o = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_o.body = _p.sent(), _o)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "CodeStorageExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#CodeStorageExceededException": return [3 /*break*/, 4];
                    case "CodeVerificationFailedException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#CodeVerificationFailedException": return [3 /*break*/, 6];
                    case "InvalidCodeSignatureException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#InvalidCodeSignatureException": return [3 /*break*/, 8];
                    case "InvalidParameterValueException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 10];
                    case "PreconditionFailedException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 12];
                    case "ResourceConflictException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 14];
                    case "ResourceNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 18];
                    case "TooManyRequestsException": return [3 /*break*/, 20];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeStorageExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 22:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _p.label = 23;
            case 23:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateFunctionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFunctionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CodeSha256: undefined,
                    CodeSize: undefined,
                    DeadLetterConfig: undefined,
                    Description: undefined,
                    Environment: undefined,
                    FileSystemConfigs: undefined,
                    FunctionArn: undefined,
                    FunctionName: undefined,
                    Handler: undefined,
                    ImageConfigResponse: undefined,
                    KMSKeyArn: undefined,
                    LastModified: undefined,
                    LastUpdateStatus: undefined,
                    LastUpdateStatusReason: undefined,
                    LastUpdateStatusReasonCode: undefined,
                    Layers: undefined,
                    MasterArn: undefined,
                    MemorySize: undefined,
                    PackageType: undefined,
                    RevisionId: undefined,
                    Role: undefined,
                    Runtime: undefined,
                    SigningJobArn: undefined,
                    SigningProfileVersionArn: undefined,
                    State: undefined,
                    StateReason: undefined,
                    StateReasonCode: undefined,
                    Timeout: undefined,
                    TracingConfig: undefined,
                    Version: undefined,
                    VpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
                    contents.CodeSha256 = data.CodeSha256;
                }
                if (data.CodeSize !== undefined && data.CodeSize !== null) {
                    contents.CodeSize = data.CodeSize;
                }
                if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
                    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(data.DeadLetterConfig, context);
                }
                if (data.Description !== undefined && data.Description !== null) {
                    contents.Description = data.Description;
                }
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1EnvironmentResponse(data.Environment, context);
                }
                if (data.FileSystemConfigs !== undefined && data.FileSystemConfigs !== null) {
                    contents.FileSystemConfigs = deserializeAws_restJson1FileSystemConfigList(data.FileSystemConfigs, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.FunctionName !== undefined && data.FunctionName !== null) {
                    contents.FunctionName = data.FunctionName;
                }
                if (data.Handler !== undefined && data.Handler !== null) {
                    contents.Handler = data.Handler;
                }
                if (data.ImageConfigResponse !== undefined && data.ImageConfigResponse !== null) {
                    contents.ImageConfigResponse = deserializeAws_restJson1ImageConfigResponse(data.ImageConfigResponse, context);
                }
                if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
                    contents.KMSKeyArn = data.KMSKeyArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = data.LastModified;
                }
                if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
                    contents.LastUpdateStatus = data.LastUpdateStatus;
                }
                if (data.LastUpdateStatusReason !== undefined && data.LastUpdateStatusReason !== null) {
                    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
                }
                if (data.LastUpdateStatusReasonCode !== undefined && data.LastUpdateStatusReasonCode !== null) {
                    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
                }
                if (data.Layers !== undefined && data.Layers !== null) {
                    contents.Layers = deserializeAws_restJson1LayersReferenceList(data.Layers, context);
                }
                if (data.MasterArn !== undefined && data.MasterArn !== null) {
                    contents.MasterArn = data.MasterArn;
                }
                if (data.MemorySize !== undefined && data.MemorySize !== null) {
                    contents.MemorySize = data.MemorySize;
                }
                if (data.PackageType !== undefined && data.PackageType !== null) {
                    contents.PackageType = data.PackageType;
                }
                if (data.RevisionId !== undefined && data.RevisionId !== null) {
                    contents.RevisionId = data.RevisionId;
                }
                if (data.Role !== undefined && data.Role !== null) {
                    contents.Role = data.Role;
                }
                if (data.Runtime !== undefined && data.Runtime !== null) {
                    contents.Runtime = data.Runtime;
                }
                if (data.SigningJobArn !== undefined && data.SigningJobArn !== null) {
                    contents.SigningJobArn = data.SigningJobArn;
                }
                if (data.SigningProfileVersionArn !== undefined && data.SigningProfileVersionArn !== null) {
                    contents.SigningProfileVersionArn = data.SigningProfileVersionArn;
                }
                if (data.State !== undefined && data.State !== null) {
                    contents.State = data.State;
                }
                if (data.StateReason !== undefined && data.StateReason !== null) {
                    contents.StateReason = data.StateReason;
                }
                if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
                    contents.StateReasonCode = data.StateReasonCode;
                }
                if (data.Timeout !== undefined && data.Timeout !== null) {
                    contents.Timeout = data.Timeout;
                }
                if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
                    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(data.TracingConfig, context);
                }
                if (data.Version !== undefined && data.Version !== null) {
                    contents.Version = data.Version;
                }
                if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
                    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(data.VpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFunctionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, parsedBody, message;
    var _m;
    return __generator(this, function (_o) {
        switch (_o.label) {
            case 0:
                _a = [__assign({}, output)];
                _m = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_m.body = _o.sent(), _m)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#CodeSigningConfigNotFoundException": return [3 /*break*/, 2];
                    case "CodeVerificationFailedException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#CodeVerificationFailedException": return [3 /*break*/, 4];
                    case "InvalidCodeSignatureException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#InvalidCodeSignatureException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "PreconditionFailedException": return [3 /*break*/, 10];
                    case "com.amazonaws.lambda#PreconditionFailedException": return [3 /*break*/, 10];
                    case "ResourceConflictException": return [3 /*break*/, 12];
                    case "com.amazonaws.lambda#ResourceConflictException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 16];
                    case "TooManyRequestsException": return [3 /*break*/, 18];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CodeVerificationFailedExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidCodeSignatureExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 20:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _o.label = 21;
            case 21:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    DestinationConfig: undefined,
                    FunctionArn: undefined,
                    LastModified: undefined,
                    MaximumEventAgeInSeconds: undefined,
                    MaximumRetryAttempts: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
                    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(data.DestinationConfig, context);
                }
                if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
                    contents.FunctionArn = data.FunctionArn;
                }
                if (data.LastModified !== undefined && data.LastModified !== null) {
                    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
                }
                if (data.MaximumEventAgeInSeconds !== undefined && data.MaximumEventAgeInSeconds !== null) {
                    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
                }
                if (data.MaximumRetryAttempts !== undefined && data.MaximumRetryAttempts !== null) {
                    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InvalidParameterValueException": return [3 /*break*/, 2];
                    case "com.amazonaws.lambda#InvalidParameterValueException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.lambda#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.lambda#ServiceException": return [3 /*break*/, 6];
                    case "TooManyRequestsException": return [3 /*break*/, 8];
                    case "com.amazonaws.lambda#TooManyRequestsException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1CodeSigningConfigNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "CodeSigningConfigNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1CodeStorageExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "CodeStorageExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1CodeVerificationFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "CodeVerificationFailedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EC2AccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EC2AccessDeniedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EC2ThrottledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EC2ThrottledException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EC2UnexpectedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EC2UnexpectedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            EC2ErrorCode: undefined,
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.EC2ErrorCode !== undefined && data.EC2ErrorCode !== null) {
            contents.EC2ErrorCode = data.EC2ErrorCode;
        }
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EFSIOExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EFSIOException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EFSMountConnectivityExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EFSMountConnectivityException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EFSMountFailureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EFSMountFailureException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1EFSMountTimeoutExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "EFSMountTimeoutException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ENILimitReachedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ENILimitReachedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidCodeSignatureExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidCodeSignatureException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterValueException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidRequestContentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestContentException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidRuntimeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRuntimeException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidSecurityGroupIDException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidSubnetIDExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidSubnetIDException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1InvalidZipFileExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidZipFileException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1KMSAccessDeniedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KMSAccessDeniedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1KMSDisabledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KMSDisabledException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1KMSInvalidStateExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KMSInvalidStateException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1KMSNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "KMSNotFoundException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1PolicyLengthExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PolicyLengthExceededException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1PreconditionFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "PreconditionFailedException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ProvisionedConcurrencyConfigNotFoundException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1RequestTooLargeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "RequestTooLargeException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceConflictException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
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
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
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
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ResourceNotReadyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceNotReadyException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1ServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "SubnetIPAddressLimitReachedException",
            $fault: "server",
            $metadata: deserializeMetadata(parsedOutput),
            Message: undefined,
            Type: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
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
            Reason: undefined,
            Type: undefined,
            message: undefined,
            retryAfterSeconds: undefined,
        };
        if (parsedOutput.headers["retry-after"] !== undefined) {
            contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
        }
        data = parsedOutput.body;
        if (data.Reason !== undefined && data.Reason !== null) {
            contents.Reason = data.Reason;
        }
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "UnsupportedMediaTypeException",
            $fault: "client",
            $metadata: deserializeMetadata(parsedOutput),
            Type: undefined,
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.Type !== undefined && data.Type !== null) {
            contents.Type = data.Type;
        }
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AdditionalVersionWeights = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1AliasRoutingConfiguration = function (input, context) {
    return __assign({}, (input.AdditionalVersionWeights !== undefined &&
        input.AdditionalVersionWeights !== null && {
        AdditionalVersionWeights: serializeAws_restJson1AdditionalVersionWeights(input.AdditionalVersionWeights, context),
    }));
};
var serializeAws_restJson1AllowedPublishers = function (input, context) {
    return __assign({}, (input.SigningProfileVersionArns !== undefined &&
        input.SigningProfileVersionArns !== null && {
        SigningProfileVersionArns: serializeAws_restJson1SigningProfileVersionArns(input.SigningProfileVersionArns, context),
    }));
};
var serializeAws_restJson1CodeSigningPolicies = function (input, context) {
    return __assign({}, (input.UntrustedArtifactOnDeployment !== undefined &&
        input.UntrustedArtifactOnDeployment !== null && {
        UntrustedArtifactOnDeployment: input.UntrustedArtifactOnDeployment,
    }));
};
var serializeAws_restJson1CompatibleRuntimes = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1DeadLetterConfig = function (input, context) {
    return __assign({}, (input.TargetArn !== undefined && input.TargetArn !== null && { TargetArn: input.TargetArn }));
};
var serializeAws_restJson1DestinationConfig = function (input, context) {
    return __assign(__assign({}, (input.OnFailure !== undefined &&
        input.OnFailure !== null && { OnFailure: serializeAws_restJson1OnFailure(input.OnFailure, context) })), (input.OnSuccess !== undefined &&
        input.OnSuccess !== null && { OnSuccess: serializeAws_restJson1OnSuccess(input.OnSuccess, context) }));
};
var serializeAws_restJson1EndpointLists = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Endpoints = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_restJson1EndpointLists(value, context), _b));
    }, {});
};
var serializeAws_restJson1Environment = function (input, context) {
    return __assign({}, (input.Variables !== undefined &&
        input.Variables !== null && { Variables: serializeAws_restJson1EnvironmentVariables(input.Variables, context) }));
};
var serializeAws_restJson1EnvironmentVariables = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1FileSystemConfig = function (input, context) {
    return __assign(__assign({}, (input.Arn !== undefined && input.Arn !== null && { Arn: input.Arn })), (input.LocalMountPath !== undefined &&
        input.LocalMountPath !== null && { LocalMountPath: input.LocalMountPath }));
};
var serializeAws_restJson1FileSystemConfigList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1FileSystemConfig(entry, context);
    });
};
var serializeAws_restJson1FunctionCode = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.ImageUri !== undefined && input.ImageUri !== null && { ImageUri: input.ImageUri })), (input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket })), (input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key })), (input.S3ObjectVersion !== undefined &&
        input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }));
};
var serializeAws_restJson1FunctionResponseTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ImageConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.Command !== undefined &&
        input.Command !== null && { Command: serializeAws_restJson1StringList(input.Command, context) })), (input.EntryPoint !== undefined &&
        input.EntryPoint !== null && { EntryPoint: serializeAws_restJson1StringList(input.EntryPoint, context) })), (input.WorkingDirectory !== undefined &&
        input.WorkingDirectory !== null && { WorkingDirectory: input.WorkingDirectory }));
};
var serializeAws_restJson1LayerList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1LayerVersionContentInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket })), (input.S3Key !== undefined && input.S3Key !== null && { S3Key: input.S3Key })), (input.S3ObjectVersion !== undefined &&
        input.S3ObjectVersion !== null && { S3ObjectVersion: input.S3ObjectVersion })), (input.ZipFile !== undefined && input.ZipFile !== null && { ZipFile: context.base64Encoder(input.ZipFile) }));
};
var serializeAws_restJson1OnFailure = function (input, context) {
    return __assign({}, (input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }));
};
var serializeAws_restJson1OnSuccess = function (input, context) {
    return __assign({}, (input.Destination !== undefined && input.Destination !== null && { Destination: input.Destination }));
};
var serializeAws_restJson1Queues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SecurityGroupIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SelfManagedEventSource = function (input, context) {
    return __assign({}, (input.Endpoints !== undefined &&
        input.Endpoints !== null && { Endpoints: serializeAws_restJson1Endpoints(input.Endpoints, context) }));
};
var serializeAws_restJson1SigningProfileVersionArns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SourceAccessConfiguration = function (input, context) {
    return __assign(__assign({}, (input.Type !== undefined && input.Type !== null && { Type: input.Type })), (input.URI !== undefined && input.URI !== null && { URI: input.URI }));
};
var serializeAws_restJson1SourceAccessConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
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
var serializeAws_restJson1SubnetIds = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Tags = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Topics = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1TracingConfig = function (input, context) {
    return __assign({}, (input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }));
};
var serializeAws_restJson1VpcConfig = function (input, context) {
    return __assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context) }));
};
var deserializeAws_restJson1AccountLimit = function (output, context) {
    return {
        CodeSizeUnzipped: output.CodeSizeUnzipped !== undefined && output.CodeSizeUnzipped !== null ? output.CodeSizeUnzipped : undefined,
        CodeSizeZipped: output.CodeSizeZipped !== undefined && output.CodeSizeZipped !== null ? output.CodeSizeZipped : undefined,
        ConcurrentExecutions: output.ConcurrentExecutions !== undefined && output.ConcurrentExecutions !== null
            ? output.ConcurrentExecutions
            : undefined,
        TotalCodeSize: output.TotalCodeSize !== undefined && output.TotalCodeSize !== null ? output.TotalCodeSize : undefined,
        UnreservedConcurrentExecutions: output.UnreservedConcurrentExecutions !== undefined && output.UnreservedConcurrentExecutions !== null
            ? output.UnreservedConcurrentExecutions
            : undefined,
    };
};
var deserializeAws_restJson1AccountUsage = function (output, context) {
    return {
        FunctionCount: output.FunctionCount !== undefined && output.FunctionCount !== null ? output.FunctionCount : undefined,
        TotalCodeSize: output.TotalCodeSize !== undefined && output.TotalCodeSize !== null ? output.TotalCodeSize : undefined,
    };
};
var deserializeAws_restJson1AdditionalVersionWeights = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1AliasConfiguration = function (output, context) {
    return {
        AliasArn: output.AliasArn !== undefined && output.AliasArn !== null ? output.AliasArn : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        FunctionVersion: output.FunctionVersion !== undefined && output.FunctionVersion !== null ? output.FunctionVersion : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        RoutingConfig: output.RoutingConfig !== undefined && output.RoutingConfig !== null
            ? deserializeAws_restJson1AliasRoutingConfiguration(output.RoutingConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1AliasList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AliasConfiguration(entry, context);
    });
};
var deserializeAws_restJson1AliasRoutingConfiguration = function (output, context) {
    return {
        AdditionalVersionWeights: output.AdditionalVersionWeights !== undefined && output.AdditionalVersionWeights !== null
            ? deserializeAws_restJson1AdditionalVersionWeights(output.AdditionalVersionWeights, context)
            : undefined,
    };
};
var deserializeAws_restJson1AllowedPublishers = function (output, context) {
    return {
        SigningProfileVersionArns: output.SigningProfileVersionArns !== undefined && output.SigningProfileVersionArns !== null
            ? deserializeAws_restJson1SigningProfileVersionArns(output.SigningProfileVersionArns, context)
            : undefined,
    };
};
var deserializeAws_restJson1CodeSigningConfig = function (output, context) {
    return {
        AllowedPublishers: output.AllowedPublishers !== undefined && output.AllowedPublishers !== null
            ? deserializeAws_restJson1AllowedPublishers(output.AllowedPublishers, context)
            : undefined,
        CodeSigningConfigArn: output.CodeSigningConfigArn !== undefined && output.CodeSigningConfigArn !== null
            ? output.CodeSigningConfigArn
            : undefined,
        CodeSigningConfigId: output.CodeSigningConfigId !== undefined && output.CodeSigningConfigId !== null
            ? output.CodeSigningConfigId
            : undefined,
        CodeSigningPolicies: output.CodeSigningPolicies !== undefined && output.CodeSigningPolicies !== null
            ? deserializeAws_restJson1CodeSigningPolicies(output.CodeSigningPolicies, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
    };
};
var deserializeAws_restJson1CodeSigningConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CodeSigningConfig(entry, context);
    });
};
var deserializeAws_restJson1CodeSigningPolicies = function (output, context) {
    return {
        UntrustedArtifactOnDeployment: output.UntrustedArtifactOnDeployment !== undefined && output.UntrustedArtifactOnDeployment !== null
            ? output.UntrustedArtifactOnDeployment
            : undefined,
    };
};
var deserializeAws_restJson1CompatibleRuntimes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Concurrency = function (output, context) {
    return {
        ReservedConcurrentExecutions: output.ReservedConcurrentExecutions !== undefined && output.ReservedConcurrentExecutions !== null
            ? output.ReservedConcurrentExecutions
            : undefined,
    };
};
var deserializeAws_restJson1DeadLetterConfig = function (output, context) {
    return {
        TargetArn: output.TargetArn !== undefined && output.TargetArn !== null ? output.TargetArn : undefined,
    };
};
var deserializeAws_restJson1DestinationConfig = function (output, context) {
    return {
        OnFailure: output.OnFailure !== undefined && output.OnFailure !== null
            ? deserializeAws_restJson1OnFailure(output.OnFailure, context)
            : undefined,
        OnSuccess: output.OnSuccess !== undefined && output.OnSuccess !== null
            ? deserializeAws_restJson1OnSuccess(output.OnSuccess, context)
            : undefined,
    };
};
var deserializeAws_restJson1EndpointLists = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Endpoints = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_restJson1EndpointLists(value, context), _b));
    }, {});
};
var deserializeAws_restJson1EnvironmentError = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1EnvironmentResponse = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1EnvironmentError(output.Error, context)
            : undefined,
        Variables: output.Variables !== undefined && output.Variables !== null
            ? deserializeAws_restJson1EnvironmentVariables(output.Variables, context)
            : undefined,
    };
};
var deserializeAws_restJson1EnvironmentVariables = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1EventSourceMappingConfiguration = function (output, context) {
    return {
        BatchSize: output.BatchSize !== undefined && output.BatchSize !== null ? output.BatchSize : undefined,
        BisectBatchOnFunctionError: output.BisectBatchOnFunctionError !== undefined && output.BisectBatchOnFunctionError !== null
            ? output.BisectBatchOnFunctionError
            : undefined,
        DestinationConfig: output.DestinationConfig !== undefined && output.DestinationConfig !== null
            ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
            : undefined,
        EventSourceArn: output.EventSourceArn !== undefined && output.EventSourceArn !== null ? output.EventSourceArn : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        FunctionResponseTypes: output.FunctionResponseTypes !== undefined && output.FunctionResponseTypes !== null
            ? deserializeAws_restJson1FunctionResponseTypeList(output.FunctionResponseTypes, context)
            : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        LastProcessingResult: output.LastProcessingResult !== undefined && output.LastProcessingResult !== null
            ? output.LastProcessingResult
            : undefined,
        MaximumBatchingWindowInSeconds: output.MaximumBatchingWindowInSeconds !== undefined && output.MaximumBatchingWindowInSeconds !== null
            ? output.MaximumBatchingWindowInSeconds
            : undefined,
        MaximumRecordAgeInSeconds: output.MaximumRecordAgeInSeconds !== undefined && output.MaximumRecordAgeInSeconds !== null
            ? output.MaximumRecordAgeInSeconds
            : undefined,
        MaximumRetryAttempts: output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
            ? output.MaximumRetryAttempts
            : undefined,
        ParallelizationFactor: output.ParallelizationFactor !== undefined && output.ParallelizationFactor !== null
            ? output.ParallelizationFactor
            : undefined,
        Queues: output.Queues !== undefined && output.Queues !== null
            ? deserializeAws_restJson1Queues(output.Queues, context)
            : undefined,
        SelfManagedEventSource: output.SelfManagedEventSource !== undefined && output.SelfManagedEventSource !== null
            ? deserializeAws_restJson1SelfManagedEventSource(output.SelfManagedEventSource, context)
            : undefined,
        SourceAccessConfigurations: output.SourceAccessConfigurations !== undefined && output.SourceAccessConfigurations !== null
            ? deserializeAws_restJson1SourceAccessConfigurations(output.SourceAccessConfigurations, context)
            : undefined,
        StartingPosition: output.StartingPosition !== undefined && output.StartingPosition !== null ? output.StartingPosition : undefined,
        StartingPositionTimestamp: output.StartingPositionTimestamp !== undefined && output.StartingPositionTimestamp !== null
            ? new Date(Math.round(output.StartingPositionTimestamp * 1000))
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateTransitionReason: output.StateTransitionReason !== undefined && output.StateTransitionReason !== null
            ? output.StateTransitionReason
            : undefined,
        Topics: output.Topics !== undefined && output.Topics !== null
            ? deserializeAws_restJson1Topics(output.Topics, context)
            : undefined,
        TumblingWindowInSeconds: output.TumblingWindowInSeconds !== undefined && output.TumblingWindowInSeconds !== null
            ? output.TumblingWindowInSeconds
            : undefined,
        UUID: output.UUID !== undefined && output.UUID !== null ? output.UUID : undefined,
    };
};
var deserializeAws_restJson1EventSourceMappingsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EventSourceMappingConfiguration(entry, context);
    });
};
var deserializeAws_restJson1FileSystemConfig = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        LocalMountPath: output.LocalMountPath !== undefined && output.LocalMountPath !== null ? output.LocalMountPath : undefined,
    };
};
var deserializeAws_restJson1FileSystemConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FileSystemConfig(entry, context);
    });
};
var deserializeAws_restJson1FunctionArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1FunctionCodeLocation = function (output, context) {
    return {
        ImageUri: output.ImageUri !== undefined && output.ImageUri !== null ? output.ImageUri : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        RepositoryType: output.RepositoryType !== undefined && output.RepositoryType !== null ? output.RepositoryType : undefined,
        ResolvedImageUri: output.ResolvedImageUri !== undefined && output.ResolvedImageUri !== null ? output.ResolvedImageUri : undefined,
    };
};
var deserializeAws_restJson1FunctionConfiguration = function (output, context) {
    return {
        CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        DeadLetterConfig: output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
            ? deserializeAws_restJson1DeadLetterConfig(output.DeadLetterConfig, context)
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Environment: output.Environment !== undefined && output.Environment !== null
            ? deserializeAws_restJson1EnvironmentResponse(output.Environment, context)
            : undefined,
        FileSystemConfigs: output.FileSystemConfigs !== undefined && output.FileSystemConfigs !== null
            ? deserializeAws_restJson1FileSystemConfigList(output.FileSystemConfigs, context)
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        FunctionName: output.FunctionName !== undefined && output.FunctionName !== null ? output.FunctionName : undefined,
        Handler: output.Handler !== undefined && output.Handler !== null ? output.Handler : undefined,
        ImageConfigResponse: output.ImageConfigResponse !== undefined && output.ImageConfigResponse !== null
            ? deserializeAws_restJson1ImageConfigResponse(output.ImageConfigResponse, context)
            : undefined,
        KMSKeyArn: output.KMSKeyArn !== undefined && output.KMSKeyArn !== null ? output.KMSKeyArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        LastUpdateStatus: output.LastUpdateStatus !== undefined && output.LastUpdateStatus !== null ? output.LastUpdateStatus : undefined,
        LastUpdateStatusReason: output.LastUpdateStatusReason !== undefined && output.LastUpdateStatusReason !== null
            ? output.LastUpdateStatusReason
            : undefined,
        LastUpdateStatusReasonCode: output.LastUpdateStatusReasonCode !== undefined && output.LastUpdateStatusReasonCode !== null
            ? output.LastUpdateStatusReasonCode
            : undefined,
        Layers: output.Layers !== undefined && output.Layers !== null
            ? deserializeAws_restJson1LayersReferenceList(output.Layers, context)
            : undefined,
        MasterArn: output.MasterArn !== undefined && output.MasterArn !== null ? output.MasterArn : undefined,
        MemorySize: output.MemorySize !== undefined && output.MemorySize !== null ? output.MemorySize : undefined,
        PackageType: output.PackageType !== undefined && output.PackageType !== null ? output.PackageType : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        Role: output.Role !== undefined && output.Role !== null ? output.Role : undefined,
        Runtime: output.Runtime !== undefined && output.Runtime !== null ? output.Runtime : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        StateReason: output.StateReason !== undefined && output.StateReason !== null ? output.StateReason : undefined,
        StateReasonCode: output.StateReasonCode !== undefined && output.StateReasonCode !== null ? output.StateReasonCode : undefined,
        Timeout: output.Timeout !== undefined && output.Timeout !== null ? output.Timeout : undefined,
        TracingConfig: output.TracingConfig !== undefined && output.TracingConfig !== null
            ? deserializeAws_restJson1TracingConfigResponse(output.TracingConfig, context)
            : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
        VpcConfig: output.VpcConfig !== undefined && output.VpcConfig !== null
            ? deserializeAws_restJson1VpcConfigResponse(output.VpcConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1FunctionEventInvokeConfig = function (output, context) {
    return {
        DestinationConfig: output.DestinationConfig !== undefined && output.DestinationConfig !== null
            ? deserializeAws_restJson1DestinationConfig(output.DestinationConfig, context)
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null
            ? new Date(Math.round(output.LastModified * 1000))
            : undefined,
        MaximumEventAgeInSeconds: output.MaximumEventAgeInSeconds !== undefined && output.MaximumEventAgeInSeconds !== null
            ? output.MaximumEventAgeInSeconds
            : undefined,
        MaximumRetryAttempts: output.MaximumRetryAttempts !== undefined && output.MaximumRetryAttempts !== null
            ? output.MaximumRetryAttempts
            : undefined,
    };
};
var deserializeAws_restJson1FunctionEventInvokeConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FunctionEventInvokeConfig(entry, context);
    });
};
var deserializeAws_restJson1FunctionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
};
var deserializeAws_restJson1FunctionResponseTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ImageConfig = function (output, context) {
    return {
        Command: output.Command !== undefined && output.Command !== null
            ? deserializeAws_restJson1StringList(output.Command, context)
            : undefined,
        EntryPoint: output.EntryPoint !== undefined && output.EntryPoint !== null
            ? deserializeAws_restJson1StringList(output.EntryPoint, context)
            : undefined,
        WorkingDirectory: output.WorkingDirectory !== undefined && output.WorkingDirectory !== null ? output.WorkingDirectory : undefined,
    };
};
var deserializeAws_restJson1ImageConfigError = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_restJson1ImageConfigResponse = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1ImageConfigError(output.Error, context)
            : undefined,
        ImageConfig: output.ImageConfig !== undefined && output.ImageConfig !== null
            ? deserializeAws_restJson1ImageConfig(output.ImageConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1Layer = function (output, context) {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
    };
};
var deserializeAws_restJson1LayersList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LayersListItem(entry, context);
    });
};
var deserializeAws_restJson1LayersListItem = function (output, context) {
    return {
        LatestMatchingVersion: output.LatestMatchingVersion !== undefined && output.LatestMatchingVersion !== null
            ? deserializeAws_restJson1LayerVersionsListItem(output.LatestMatchingVersion, context)
            : undefined,
        LayerArn: output.LayerArn !== undefined && output.LayerArn !== null ? output.LayerArn : undefined,
        LayerName: output.LayerName !== undefined && output.LayerName !== null ? output.LayerName : undefined,
    };
};
var deserializeAws_restJson1LayersReferenceList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Layer(entry, context);
    });
};
var deserializeAws_restJson1LayerVersionContentOutput = function (output, context) {
    return {
        CodeSha256: output.CodeSha256 !== undefined && output.CodeSha256 !== null ? output.CodeSha256 : undefined,
        CodeSize: output.CodeSize !== undefined && output.CodeSize !== null ? output.CodeSize : undefined,
        Location: output.Location !== undefined && output.Location !== null ? output.Location : undefined,
        SigningJobArn: output.SigningJobArn !== undefined && output.SigningJobArn !== null ? output.SigningJobArn : undefined,
        SigningProfileVersionArn: output.SigningProfileVersionArn !== undefined && output.SigningProfileVersionArn !== null
            ? output.SigningProfileVersionArn
            : undefined,
    };
};
var deserializeAws_restJson1LayerVersionsList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LayerVersionsListItem(entry, context);
    });
};
var deserializeAws_restJson1LayerVersionsListItem = function (output, context) {
    return {
        CompatibleRuntimes: output.CompatibleRuntimes !== undefined && output.CompatibleRuntimes !== null
            ? deserializeAws_restJson1CompatibleRuntimes(output.CompatibleRuntimes, context)
            : undefined,
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? output.CreatedDate : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        LayerVersionArn: output.LayerVersionArn !== undefined && output.LayerVersionArn !== null ? output.LayerVersionArn : undefined,
        LicenseInfo: output.LicenseInfo !== undefined && output.LicenseInfo !== null ? output.LicenseInfo : undefined,
        Version: output.Version !== undefined && output.Version !== null ? output.Version : undefined,
    };
};
var deserializeAws_restJson1OnFailure = function (output, context) {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
var deserializeAws_restJson1OnSuccess = function (output, context) {
    return {
        Destination: output.Destination !== undefined && output.Destination !== null ? output.Destination : undefined,
    };
};
var deserializeAws_restJson1ProvisionedConcurrencyConfigList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProvisionedConcurrencyConfigListItem(entry, context);
    });
};
var deserializeAws_restJson1ProvisionedConcurrencyConfigListItem = function (output, context) {
    return {
        AllocatedProvisionedConcurrentExecutions: output.AllocatedProvisionedConcurrentExecutions !== undefined &&
            output.AllocatedProvisionedConcurrentExecutions !== null
            ? output.AllocatedProvisionedConcurrentExecutions
            : undefined,
        AvailableProvisionedConcurrentExecutions: output.AvailableProvisionedConcurrentExecutions !== undefined &&
            output.AvailableProvisionedConcurrentExecutions !== null
            ? output.AvailableProvisionedConcurrentExecutions
            : undefined,
        FunctionArn: output.FunctionArn !== undefined && output.FunctionArn !== null ? output.FunctionArn : undefined,
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? output.LastModified : undefined,
        RequestedProvisionedConcurrentExecutions: output.RequestedProvisionedConcurrentExecutions !== undefined &&
            output.RequestedProvisionedConcurrentExecutions !== null
            ? output.RequestedProvisionedConcurrentExecutions
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusReason: output.StatusReason !== undefined && output.StatusReason !== null ? output.StatusReason : undefined,
    };
};
var deserializeAws_restJson1Queues = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SecurityGroupIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SelfManagedEventSource = function (output, context) {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_restJson1Endpoints(output.Endpoints, context)
            : undefined,
    };
};
var deserializeAws_restJson1SigningProfileVersionArns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SourceAccessConfiguration = function (output, context) {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined,
    };
};
var deserializeAws_restJson1SourceAccessConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceAccessConfiguration(entry, context);
    });
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
var deserializeAws_restJson1SubnetIds = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Tags = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Topics = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1TracingConfigResponse = function (output, context) {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
    };
};
var deserializeAws_restJson1VpcConfigResponse = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupIds(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1SubnetIds(output.SubnetIds, context)
            : undefined,
        VpcId: output.VpcId !== undefined && output.VpcId !== null ? output.VpcId : undefined,
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