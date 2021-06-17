import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest, isValidHostname as __isValidHostname, } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
export var serializeAws_restJson1CreateCliTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/clitoken/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "env." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/environments/{Name}";
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
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AirflowConfigurationOptions !== undefined &&
                    input.AirflowConfigurationOptions !== null && {
                    AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(input.AirflowConfigurationOptions, context),
                })), (input.AirflowVersion !== undefined &&
                    input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion })), (input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path })), (input.EnvironmentClass !== undefined &&
                    input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass })), (input.ExecutionRoleArn !== undefined &&
                    input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn })), (input.KmsKey !== undefined && input.KmsKey !== null && { KmsKey: input.KmsKey })), (input.LoggingConfiguration !== undefined &&
                    input.LoggingConfiguration !== null && {
                    LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
                })), (input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers })), (input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers })), (input.NetworkConfiguration !== undefined &&
                    input.NetworkConfiguration !== null && {
                    NetworkConfiguration: serializeAws_restJson1NetworkConfiguration(input.NetworkConfiguration, context),
                })), (input.PluginsS3ObjectVersion !== undefined &&
                    input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion })), (input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path })), (input.RequirementsS3ObjectVersion !== undefined &&
                    input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion })), (input.RequirementsS3Path !== undefined &&
                    input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path })), (input.Schedulers !== undefined && input.Schedulers !== null && { Schedulers: input.Schedulers })), (input.SourceBucketArn !== undefined &&
                    input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })), (input.WebserverAccessMode !== undefined &&
                    input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode })), (input.WeeklyMaintenanceWindowStart !== undefined &&
                    input.WeeklyMaintenanceWindowStart !== null && {
                    WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PUT",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1CreateWebLoginTokenCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/webtoken/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "env." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "POST",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1DeleteEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/environments/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "DELETE",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1GetEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/environments/{Name}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1ListEnvironmentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/environments";
                query = __assign(__assign({}, (input.NextToken !== undefined && { NextToken: input.NextToken })), (input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
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
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "GET",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var serializeAws_restJson1PublishMetricsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/metrics/environments/{EnvironmentName}";
                if (input.EnvironmentName !== undefined) {
                    labelValue = input.EnvironmentName;
                    if (labelValue.length <= 0) {
                        throw new Error("Empty value provided for input HTTP label: EnvironmentName.");
                    }
                    resolvedPath = resolvedPath.replace("{EnvironmentName}", __extendedEncodeURIComponent(labelValue));
                }
                else {
                    throw new Error("No value provided for input HTTP label: EnvironmentName.");
                }
                body = JSON.stringify(__assign({}, (input.MetricData !== undefined &&
                    input.MetricData !== null && { MetricData: serializeAws_restJson1MetricData(input.MetricData, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "ops." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/tags/{ResourceArn}";
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
                body = JSON.stringify(__assign({}, (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
    var headers, resolvedPath, labelValue, query, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/tags/{ResourceArn}";
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
                query = __assign({}, (input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map(function (_entry) { return _entry; }) }));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
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
export var serializeAws_restJson1UpdateEnvironmentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, labelValue, body, resolvedHostname, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/environments/{Name}";
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
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AirflowConfigurationOptions !== undefined &&
                    input.AirflowConfigurationOptions !== null && {
                    AirflowConfigurationOptions: serializeAws_restJson1AirflowConfigurationOptions(input.AirflowConfigurationOptions, context),
                })), (input.AirflowVersion !== undefined &&
                    input.AirflowVersion !== null && { AirflowVersion: input.AirflowVersion })), (input.DagS3Path !== undefined && input.DagS3Path !== null && { DagS3Path: input.DagS3Path })), (input.EnvironmentClass !== undefined &&
                    input.EnvironmentClass !== null && { EnvironmentClass: input.EnvironmentClass })), (input.ExecutionRoleArn !== undefined &&
                    input.ExecutionRoleArn !== null && { ExecutionRoleArn: input.ExecutionRoleArn })), (input.LoggingConfiguration !== undefined &&
                    input.LoggingConfiguration !== null && {
                    LoggingConfiguration: serializeAws_restJson1LoggingConfigurationInput(input.LoggingConfiguration, context),
                })), (input.MaxWorkers !== undefined && input.MaxWorkers !== null && { MaxWorkers: input.MaxWorkers })), (input.MinWorkers !== undefined && input.MinWorkers !== null && { MinWorkers: input.MinWorkers })), (input.NetworkConfiguration !== undefined &&
                    input.NetworkConfiguration !== null && {
                    NetworkConfiguration: serializeAws_restJson1UpdateNetworkConfigurationInput(input.NetworkConfiguration, context),
                })), (input.PluginsS3ObjectVersion !== undefined &&
                    input.PluginsS3ObjectVersion !== null && { PluginsS3ObjectVersion: input.PluginsS3ObjectVersion })), (input.PluginsS3Path !== undefined && input.PluginsS3Path !== null && { PluginsS3Path: input.PluginsS3Path })), (input.RequirementsS3ObjectVersion !== undefined &&
                    input.RequirementsS3ObjectVersion !== null && { RequirementsS3ObjectVersion: input.RequirementsS3ObjectVersion })), (input.RequirementsS3Path !== undefined &&
                    input.RequirementsS3Path !== null && { RequirementsS3Path: input.RequirementsS3Path })), (input.Schedulers !== undefined && input.Schedulers !== null && { Schedulers: input.Schedulers })), (input.SourceBucketArn !== undefined &&
                    input.SourceBucketArn !== null && { SourceBucketArn: input.SourceBucketArn })), (input.WebserverAccessMode !== undefined &&
                    input.WebserverAccessMode !== null && { WebserverAccessMode: input.WebserverAccessMode })), (input.WeeklyMaintenanceWindowStart !== undefined &&
                    input.WeeklyMaintenanceWindowStart !== null && {
                    WeeklyMaintenanceWindowStart: input.WeeklyMaintenanceWindowStart,
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                resolvedHostname = (_c.sent()).hostname;
                if (context.disableHostPrefix !== true) {
                    resolvedHostname = "api." + resolvedHostname;
                    if (!__isValidHostname(resolvedHostname)) {
                        throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
                    }
                }
                return [4 /*yield*/, context.endpoint()];
            case 2:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                return [2 /*return*/, new __HttpRequest({
                        protocol: protocol,
                        hostname: resolvedHostname,
                        port: port,
                        method: "PATCH",
                        headers: headers,
                        path: resolvedPath,
                        body: body,
                    })];
        }
    });
}); };
export var deserializeAws_restJson1CreateCliTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateCliTokenCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    CliToken: undefined,
                    WebServerHostname: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.CliToken !== undefined && data.CliToken !== null) {
                    contents.CliToken = data.CliToken;
                }
                if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
                    contents.WebServerHostname = data.WebServerHostname;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateCliTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, parsedBody, message;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _a = [__assign({}, output)];
                _d = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_d.body = _e.sent(), _d)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ResourceNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 2];
                }
                return [3 /*break*/, 4];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_e.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 5];
            case 4:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _e.label = 5;
            case 5:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateEnvironmentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateWebLoginTokenCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateWebLoginTokenCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    WebServerHostname: undefined,
                    WebToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.WebServerHostname !== undefined && data.WebServerHostname !== null) {
                    contents.WebServerHostname = data.WebServerHostname;
                }
                if (data.WebToken !== undefined && data.WebToken !== null) {
                    contents.WebToken = data.WebToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateWebLoginTokenCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "AccessDeniedException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#AccessDeniedException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ValidationException": return [3 /*break*/, 8];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteEnvironmentCommandError(output, context)];
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
var deserializeAws_restJson1DeleteEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetEnvironmentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Environment: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Environment !== undefined && data.Environment !== null) {
                    contents.Environment = deserializeAws_restJson1Environment(data.Environment, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListEnvironmentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListEnvironmentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Environments: undefined,
                    NextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Environments !== undefined && data.Environments !== null) {
                    contents.Environments = deserializeAws_restJson1EnvironmentList(data.Environments, context);
                }
                if (data.NextToken !== undefined && data.NextToken !== null) {
                    contents.NextToken = data.NextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListEnvironmentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                    Tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Tags !== undefined && data.Tags !== null) {
                    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1PublishMetricsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PublishMetricsCommandError(output, context)];
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
var deserializeAws_restJson1PublishMetricsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ValidationException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateEnvironmentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateEnvironmentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    Arn: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.Arn !== undefined && data.Arn !== null) {
                    contents.Arn = data.Arn;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateEnvironmentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.mwaa#InternalServerException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.mwaa#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ValidationException": return [3 /*break*/, 6];
                    case "com.amazonaws.mwaa#ValidationException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
            Message: undefined,
        };
        data = parsedOutput.body;
        if (data.Message !== undefined && data.Message !== null) {
            contents.Message = data.Message;
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
        };
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
            message: undefined,
        };
        data = parsedOutput.body;
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
        }
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_restJson1AirflowConfigurationOptions = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Dimension = function (input, context) {
    return __assign(__assign({}, (input.Name !== undefined && input.Name !== null && { Name: input.Name })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1Dimensions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Dimension(entry, context);
    });
};
var serializeAws_restJson1LoggingConfigurationInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.DagProcessingLogs !== undefined &&
        input.DagProcessingLogs !== null && {
        DagProcessingLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.DagProcessingLogs, context),
    })), (input.SchedulerLogs !== undefined &&
        input.SchedulerLogs !== null && {
        SchedulerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.SchedulerLogs, context),
    })), (input.TaskLogs !== undefined &&
        input.TaskLogs !== null && {
        TaskLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.TaskLogs, context),
    })), (input.WebserverLogs !== undefined &&
        input.WebserverLogs !== null && {
        WebserverLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WebserverLogs, context),
    })), (input.WorkerLogs !== undefined &&
        input.WorkerLogs !== null && {
        WorkerLogs: serializeAws_restJson1ModuleLoggingConfigurationInput(input.WorkerLogs, context),
    }));
};
var serializeAws_restJson1MetricData = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1MetricDatum(entry, context);
    });
};
var serializeAws_restJson1MetricDatum = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.Dimensions !== undefined &&
        input.Dimensions !== null && { Dimensions: serializeAws_restJson1Dimensions(input.Dimensions, context) })), (input.MetricName !== undefined && input.MetricName !== null && { MetricName: input.MetricName })), (input.StatisticValues !== undefined &&
        input.StatisticValues !== null && {
        StatisticValues: serializeAws_restJson1StatisticSet(input.StatisticValues, context),
    })), (input.Timestamp !== undefined &&
        input.Timestamp !== null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) })), (input.Unit !== undefined && input.Unit !== null && { Unit: input.Unit })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_restJson1ModuleLoggingConfigurationInput = function (input, context) {
    return __assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.LogLevel !== undefined && input.LogLevel !== null && { LogLevel: input.LogLevel }));
};
var serializeAws_restJson1NetworkConfiguration = function (input, context) {
    return __assign(__assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
    })), (input.SubnetIds !== undefined &&
        input.SubnetIds !== null && { SubnetIds: serializeAws_restJson1SubnetList(input.SubnetIds, context) }));
};
var serializeAws_restJson1SecurityGroupList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1StatisticSet = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.Maximum !== undefined && input.Maximum !== null && { Maximum: input.Maximum })), (input.Minimum !== undefined && input.Minimum !== null && { Minimum: input.Minimum })), (input.SampleCount !== undefined && input.SampleCount !== null && { SampleCount: input.SampleCount })), (input.Sum !== undefined && input.Sum !== null && { Sum: input.Sum }));
};
var serializeAws_restJson1SubnetList = function (input, context) {
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
var serializeAws_restJson1UpdateNetworkConfigurationInput = function (input, context) {
    return __assign({}, (input.SecurityGroupIds !== undefined &&
        input.SecurityGroupIds !== null && {
        SecurityGroupIds: serializeAws_restJson1SecurityGroupList(input.SecurityGroupIds, context),
    }));
};
var deserializeAws_restJson1AirflowConfigurationOptions = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1Environment = function (output, context) {
    return {
        AirflowConfigurationOptions: output.AirflowConfigurationOptions !== undefined && output.AirflowConfigurationOptions !== null
            ? deserializeAws_restJson1AirflowConfigurationOptions(output.AirflowConfigurationOptions, context)
            : undefined,
        AirflowVersion: output.AirflowVersion !== undefined && output.AirflowVersion !== null ? output.AirflowVersion : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        DagS3Path: output.DagS3Path !== undefined && output.DagS3Path !== null ? output.DagS3Path : undefined,
        EnvironmentClass: output.EnvironmentClass !== undefined && output.EnvironmentClass !== null ? output.EnvironmentClass : undefined,
        ExecutionRoleArn: output.ExecutionRoleArn !== undefined && output.ExecutionRoleArn !== null ? output.ExecutionRoleArn : undefined,
        KmsKey: output.KmsKey !== undefined && output.KmsKey !== null ? output.KmsKey : undefined,
        LastUpdate: output.LastUpdate !== undefined && output.LastUpdate !== null
            ? deserializeAws_restJson1LastUpdate(output.LastUpdate, context)
            : undefined,
        LoggingConfiguration: output.LoggingConfiguration !== undefined && output.LoggingConfiguration !== null
            ? deserializeAws_restJson1LoggingConfiguration(output.LoggingConfiguration, context)
            : undefined,
        MaxWorkers: output.MaxWorkers !== undefined && output.MaxWorkers !== null ? output.MaxWorkers : undefined,
        MinWorkers: output.MinWorkers !== undefined && output.MinWorkers !== null ? output.MinWorkers : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        NetworkConfiguration: output.NetworkConfiguration !== undefined && output.NetworkConfiguration !== null
            ? deserializeAws_restJson1NetworkConfiguration(output.NetworkConfiguration, context)
            : undefined,
        PluginsS3ObjectVersion: output.PluginsS3ObjectVersion !== undefined && output.PluginsS3ObjectVersion !== null
            ? output.PluginsS3ObjectVersion
            : undefined,
        PluginsS3Path: output.PluginsS3Path !== undefined && output.PluginsS3Path !== null ? output.PluginsS3Path : undefined,
        RequirementsS3ObjectVersion: output.RequirementsS3ObjectVersion !== undefined && output.RequirementsS3ObjectVersion !== null
            ? output.RequirementsS3ObjectVersion
            : undefined,
        RequirementsS3Path: output.RequirementsS3Path !== undefined && output.RequirementsS3Path !== null
            ? output.RequirementsS3Path
            : undefined,
        Schedulers: output.Schedulers !== undefined && output.Schedulers !== null ? output.Schedulers : undefined,
        ServiceRoleArn: output.ServiceRoleArn !== undefined && output.ServiceRoleArn !== null ? output.ServiceRoleArn : undefined,
        SourceBucketArn: output.SourceBucketArn !== undefined && output.SourceBucketArn !== null ? output.SourceBucketArn : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_restJson1TagMap(output.Tags, context)
            : undefined,
        WebserverAccessMode: output.WebserverAccessMode !== undefined && output.WebserverAccessMode !== null
            ? output.WebserverAccessMode
            : undefined,
        WebserverUrl: output.WebserverUrl !== undefined && output.WebserverUrl !== null ? output.WebserverUrl : undefined,
        WeeklyMaintenanceWindowStart: output.WeeklyMaintenanceWindowStart !== undefined && output.WeeklyMaintenanceWindowStart !== null
            ? output.WeeklyMaintenanceWindowStart
            : undefined,
    };
};
var deserializeAws_restJson1EnvironmentList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1LastUpdate = function (output, context) {
    return {
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null
            ? new Date(Math.round(output.CreatedAt * 1000))
            : undefined,
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_restJson1UpdateError(output.Error, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_restJson1LoggingConfiguration = function (output, context) {
    return {
        DagProcessingLogs: output.DagProcessingLogs !== undefined && output.DagProcessingLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.DagProcessingLogs, context)
            : undefined,
        SchedulerLogs: output.SchedulerLogs !== undefined && output.SchedulerLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.SchedulerLogs, context)
            : undefined,
        TaskLogs: output.TaskLogs !== undefined && output.TaskLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.TaskLogs, context)
            : undefined,
        WebserverLogs: output.WebserverLogs !== undefined && output.WebserverLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WebserverLogs, context)
            : undefined,
        WorkerLogs: output.WorkerLogs !== undefined && output.WorkerLogs !== null
            ? deserializeAws_restJson1ModuleLoggingConfiguration(output.WorkerLogs, context)
            : undefined,
    };
};
var deserializeAws_restJson1ModuleLoggingConfiguration = function (output, context) {
    return {
        CloudWatchLogGroupArn: output.CloudWatchLogGroupArn !== undefined && output.CloudWatchLogGroupArn !== null
            ? output.CloudWatchLogGroupArn
            : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
        LogLevel: output.LogLevel !== undefined && output.LogLevel !== null ? output.LogLevel : undefined,
    };
};
var deserializeAws_restJson1NetworkConfiguration = function (output, context) {
    return {
        SecurityGroupIds: output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupList(output.SecurityGroupIds, context)
            : undefined,
        SubnetIds: output.SubnetIds !== undefined && output.SubnetIds !== null
            ? deserializeAws_restJson1SubnetList(output.SubnetIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1SecurityGroupList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SubnetList = function (output, context) {
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
var deserializeAws_restJson1UpdateError = function (output, context) {
    return {
        ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
        ErrorMessage: output.ErrorMessage !== undefined && output.ErrorMessage !== null ? output.ErrorMessage : undefined,
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