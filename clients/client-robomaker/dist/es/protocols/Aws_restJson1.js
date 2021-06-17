import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1BatchDeleteWorldsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/batchDeleteWorlds";
                body = JSON.stringify(__assign({}, (input.worlds !== undefined &&
                    input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) })));
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
export var serializeAws_restJson1BatchDescribeSimulationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/batchDescribeSimulationJob";
                body = JSON.stringify(__assign({}, (input.jobs !== undefined && input.jobs !== null && { jobs: serializeAws_restJson1Arns(input.jobs, context) })));
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
export var serializeAws_restJson1CancelDeploymentJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/cancelDeploymentJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1CancelSimulationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/cancelSimulationJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1CancelSimulationJobBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/cancelSimulationJobBatch";
                body = JSON.stringify(__assign({}, (input.batch !== undefined && input.batch !== null && { batch: input.batch })));
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
export var serializeAws_restJson1CancelWorldExportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/cancelWorldExportJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1CancelWorldGenerationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/cancelWorldGenerationJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1CreateDeploymentJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createDeploymentJob";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.deploymentApplicationConfigs !== undefined &&
                    input.deploymentApplicationConfigs !== null && {
                    deploymentApplicationConfigs: serializeAws_restJson1DeploymentApplicationConfigs(input.deploymentApplicationConfigs, context),
                })), (input.deploymentConfig !== undefined &&
                    input.deploymentConfig !== null && {
                    deploymentConfig: serializeAws_restJson1DeploymentConfig(input.deploymentConfig, context),
                })), (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createFleet";
                body = JSON.stringify(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateRobotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createRobot";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture })), (input.greengrassGroupId !== undefined &&
                    input.greengrassGroupId !== null && { greengrassGroupId: input.greengrassGroupId })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateRobotApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createRobotApplication";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.robotSoftwareSuite !== undefined &&
                    input.robotSoftwareSuite !== null && {
                    robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
                })), (input.sources !== undefined &&
                    input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateRobotApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createRobotApplicationVersion";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.currentRevisionId !== undefined &&
                    input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId })));
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
export var serializeAws_restJson1CreateSimulationApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createSimulationApplication";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.renderingEngine !== undefined &&
                    input.renderingEngine !== null && {
                    renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
                })), (input.robotSoftwareSuite !== undefined &&
                    input.robotSoftwareSuite !== null && {
                    robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
                })), (input.simulationSoftwareSuite !== undefined &&
                    input.simulationSoftwareSuite !== null && {
                    simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
                })), (input.sources !== undefined &&
                    input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1CreateSimulationApplicationVersionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createSimulationApplicationVersion";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.currentRevisionId !== undefined &&
                    input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId })));
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
export var serializeAws_restJson1CreateSimulationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createSimulationJob";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.compute !== undefined &&
                    input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) })), (input.dataSources !== undefined &&
                    input.dataSources !== null && {
                    dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
                })), (input.failureBehavior !== undefined &&
                    input.failureBehavior !== null && { failureBehavior: input.failureBehavior })), (input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole })), (input.loggingConfig !== undefined &&
                    input.loggingConfig !== null && {
                    loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
                })), (input.maxJobDurationInSeconds !== undefined &&
                    input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds })), (input.outputLocation !== undefined &&
                    input.outputLocation !== null && {
                    outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
                })), (input.robotApplications !== undefined &&
                    input.robotApplications !== null && {
                    robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
                })), (input.simulationApplications !== undefined &&
                    input.simulationApplications !== null && {
                    simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.vpcConfig !== undefined &&
                    input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) })));
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
export var serializeAws_restJson1CreateWorldExportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createWorldExportJob";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole })), (input.outputLocation !== undefined &&
                    input.outputLocation !== null && {
                    outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.worlds !== undefined &&
                    input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) })));
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
export var serializeAws_restJson1CreateWorldGenerationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createWorldGenerationJob";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.template !== undefined && input.template !== null && { template: input.template })), (input.worldCount !== undefined &&
                    input.worldCount !== null && { worldCount: serializeAws_restJson1WorldCount(input.worldCount, context) })), (input.worldTags !== undefined &&
                    input.worldTags !== null && { worldTags: serializeAws_restJson1TagMap(input.worldTags, context) })));
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
export var serializeAws_restJson1CreateWorldTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/createWorldTemplate";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.clientRequestToken !== undefined &&
                    input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody })), (input.templateLocation !== undefined &&
                    input.templateLocation !== null && {
                    templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
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
export var serializeAws_restJson1DeleteFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deleteFleet";
                body = JSON.stringify(__assign({}, (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })));
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
export var serializeAws_restJson1DeleteRobotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deleteRobot";
                body = JSON.stringify(__assign({}, (input.robot !== undefined && input.robot !== null && { robot: input.robot })));
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
export var serializeAws_restJson1DeleteRobotApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deleteRobotApplication";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
                    input.applicationVersion !== null && { applicationVersion: input.applicationVersion })));
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
export var serializeAws_restJson1DeleteSimulationApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deleteSimulationApplication";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
                    input.applicationVersion !== null && { applicationVersion: input.applicationVersion })));
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
export var serializeAws_restJson1DeleteWorldTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deleteWorldTemplate";
                body = JSON.stringify(__assign({}, (input.template !== undefined && input.template !== null && { template: input.template })));
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
export var serializeAws_restJson1DeregisterRobotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/deregisterRobot";
                body = JSON.stringify(__assign(__assign({}, (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })), (input.robot !== undefined && input.robot !== null && { robot: input.robot })));
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
export var serializeAws_restJson1DescribeDeploymentJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeDeploymentJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1DescribeFleetCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeFleet";
                body = JSON.stringify(__assign({}, (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })));
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
export var serializeAws_restJson1DescribeRobotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeRobot";
                body = JSON.stringify(__assign({}, (input.robot !== undefined && input.robot !== null && { robot: input.robot })));
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
export var serializeAws_restJson1DescribeRobotApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeRobotApplication";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
                    input.applicationVersion !== null && { applicationVersion: input.applicationVersion })));
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
export var serializeAws_restJson1DescribeSimulationApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeSimulationApplication";
                body = JSON.stringify(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
                    input.applicationVersion !== null && { applicationVersion: input.applicationVersion })));
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
export var serializeAws_restJson1DescribeSimulationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeSimulationJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1DescribeSimulationJobBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeSimulationJobBatch";
                body = JSON.stringify(__assign({}, (input.batch !== undefined && input.batch !== null && { batch: input.batch })));
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
export var serializeAws_restJson1DescribeWorldCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeWorld";
                body = JSON.stringify(__assign({}, (input.world !== undefined && input.world !== null && { world: input.world })));
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
export var serializeAws_restJson1DescribeWorldExportJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeWorldExportJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1DescribeWorldGenerationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeWorldGenerationJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1DescribeWorldTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/describeWorldTemplate";
                body = JSON.stringify(__assign({}, (input.template !== undefined && input.template !== null && { template: input.template })));
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
export var serializeAws_restJson1GetWorldTemplateBodyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/getWorldTemplateBody";
                body = JSON.stringify(__assign(__assign({}, (input.generationJob !== undefined && input.generationJob !== null && { generationJob: input.generationJob })), (input.template !== undefined && input.template !== null && { template: input.template })));
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
export var serializeAws_restJson1ListDeploymentJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listDeploymentJobs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListFleetsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listFleets";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListRobotApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listRobotApplications";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.versionQualifier !== undefined &&
                    input.versionQualifier !== null && { versionQualifier: input.versionQualifier })));
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
export var serializeAws_restJson1ListRobotsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listRobots";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListSimulationApplicationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listSimulationApplications";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.versionQualifier !== undefined &&
                    input.versionQualifier !== null && { versionQualifier: input.versionQualifier })));
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
export var serializeAws_restJson1ListSimulationJobBatchesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listSimulationJobBatches";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListSimulationJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listSimulationJobs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListWorldExportJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listWorldExportJobs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListWorldGenerationJobsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listWorldGenerationJobs";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListWorldsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listWorlds";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListWorldTemplatesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/listWorldTemplates";
                body = JSON.stringify(__assign(__assign({}, (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1RegisterRobotCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/registerRobot";
                body = JSON.stringify(__assign(__assign({}, (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })), (input.robot !== undefined && input.robot !== null && { robot: input.robot })));
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
export var serializeAws_restJson1RestartSimulationJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/restartSimulationJob";
                body = JSON.stringify(__assign({}, (input.job !== undefined && input.job !== null && { job: input.job })));
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
export var serializeAws_restJson1StartSimulationJobBatchCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/startSimulationJobBatch";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.batchPolicy !== undefined &&
                    input.batchPolicy !== null && { batchPolicy: serializeAws_restJson1BatchPolicy(input.batchPolicy, context) })), { clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.createSimulationJobRequests !== undefined &&
                    input.createSimulationJobRequests !== null && {
                    createSimulationJobRequests: serializeAws_restJson1CreateSimulationJobRequests(input.createSimulationJobRequests, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
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
export var serializeAws_restJson1SyncDeploymentJobCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/syncDeploymentJob";
                body = JSON.stringify(__assign({ clientRequestToken: (_c = input.clientRequestToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet })));
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
export var serializeAws_restJson1UpdateRobotApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/updateRobotApplication";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.currentRevisionId !== undefined &&
                    input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId })), (input.robotSoftwareSuite !== undefined &&
                    input.robotSoftwareSuite !== null && {
                    robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
                })), (input.sources !== undefined &&
                    input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) })));
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
export var serializeAws_restJson1UpdateSimulationApplicationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/updateSimulationApplication";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.currentRevisionId !== undefined &&
                    input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId })), (input.renderingEngine !== undefined &&
                    input.renderingEngine !== null && {
                    renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
                })), (input.robotSoftwareSuite !== undefined &&
                    input.robotSoftwareSuite !== null && {
                    robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
                })), (input.simulationSoftwareSuite !== undefined &&
                    input.simulationSoftwareSuite !== null && {
                    simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
                })), (input.sources !== undefined &&
                    input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) })));
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
export var serializeAws_restJson1UpdateWorldTemplateCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/updateWorldTemplate";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.template !== undefined && input.template !== null && { template: input.template })), (input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody })), (input.templateLocation !== undefined &&
                    input.templateLocation !== null && {
                    templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
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
export var deserializeAws_restJson1BatchDeleteWorldsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchDeleteWorldsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    unprocessedWorlds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.unprocessedWorlds !== undefined && data.unprocessedWorlds !== null) {
                    contents.unprocessedWorlds = deserializeAws_restJson1Arns(data.unprocessedWorlds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchDeleteWorldsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1BatchDescribeSimulationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1BatchDescribeSimulationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    jobs: undefined,
                    unprocessedJobs: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.jobs !== undefined && data.jobs !== null) {
                    contents.jobs = deserializeAws_restJson1SimulationJobs(data.jobs, context);
                }
                if (data.unprocessedJobs !== undefined && data.unprocessedJobs !== null) {
                    contents.unprocessedJobs = deserializeAws_restJson1Arns(data.unprocessedJobs, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1BatchDescribeSimulationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelDeploymentJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelDeploymentJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelDeploymentJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelSimulationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelSimulationJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelSimulationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelSimulationJobBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelSimulationJobBatchCommandError(output, context)];
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
var deserializeAws_restJson1CancelSimulationJobBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelWorldExportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelWorldExportJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelWorldExportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CancelWorldGenerationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelWorldGenerationJobCommandError(output, context)];
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
var deserializeAws_restJson1CancelWorldGenerationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateDeploymentJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateDeploymentJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    deploymentApplicationConfigs: undefined,
                    deploymentConfig: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    fleet: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
                    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
                }
                if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
                    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.fleet !== undefined && data.fleet !== null) {
                    contents.fleet = data.fleet;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateDeploymentJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentDeploymentException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#ConcurrentDeploymentException": return [3 /*break*/, 2];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateFleetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    name: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRobotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateRobotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    architecture: undefined,
                    arn: undefined,
                    createdAt: undefined,
                    greengrassGroupId: undefined,
                    name: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.architecture !== undefined && data.architecture !== null) {
                    contents.architecture = data.architecture;
                }
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
                    contents.greengrassGroupId = data.greengrassGroupId;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateRobotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRobotApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateRobotApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    sources: undefined,
                    tags: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateRobotApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ResourceAlreadyExistsException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateRobotApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateRobotApplicationVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    sources: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateRobotApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSimulationApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSimulationApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    renderingEngine: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    simulationSoftwareSuite: undefined,
                    sources: undefined,
                    tags: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
                    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
                    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSimulationApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ResourceAlreadyExistsException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSimulationApplicationVersionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSimulationApplicationVersionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    renderingEngine: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    simulationSoftwareSuite: undefined,
                    sources: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
                    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
                    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSimulationApplicationVersionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateSimulationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateSimulationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    compute: undefined,
                    dataSources: undefined,
                    failureBehavior: undefined,
                    failureCode: undefined,
                    iamRole: undefined,
                    lastStartedAt: undefined,
                    lastUpdatedAt: undefined,
                    loggingConfig: undefined,
                    maxJobDurationInSeconds: undefined,
                    outputLocation: undefined,
                    robotApplications: undefined,
                    simulationApplications: undefined,
                    simulationTimeMillis: undefined,
                    status: undefined,
                    tags: undefined,
                    vpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.compute !== undefined && data.compute !== null) {
                    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
                }
                if (data.dataSources !== undefined && data.dataSources !== null) {
                    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
                }
                if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
                    contents.failureBehavior = data.failureBehavior;
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.iamRole !== undefined && data.iamRole !== null) {
                    contents.iamRole = data.iamRole;
                }
                if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
                    contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
                    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
                }
                if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
                    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
                }
                if (data.outputLocation !== undefined && data.outputLocation !== null) {
                    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
                }
                if (data.robotApplications !== undefined && data.robotApplications !== null) {
                    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
                }
                if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
                    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(data.simulationApplications, context);
                }
                if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
                    contents.simulationTimeMillis = data.simulationTimeMillis;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
                    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateSimulationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateWorldExportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateWorldExportJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    failureCode: undefined,
                    iamRole: undefined,
                    outputLocation: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.iamRole !== undefined && data.iamRole !== null) {
                    contents.iamRole = data.iamRole;
                }
                if (data.outputLocation !== undefined && data.outputLocation !== null) {
                    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateWorldExportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ServiceUnavailableException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateWorldGenerationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateWorldGenerationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    failureCode: undefined,
                    status: undefined,
                    tags: undefined,
                    template: undefined,
                    worldCount: undefined,
                    worldTags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.template !== undefined && data.template !== null) {
                    contents.template = data.template;
                }
                if (data.worldCount !== undefined && data.worldCount !== null) {
                    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
                }
                if (data.worldTags !== undefined && data.worldTags !== null) {
                    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateWorldGenerationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ServiceUnavailableException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateWorldTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateWorldTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    name: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateWorldTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceAlreadyExistsException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "ThrottlingException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteFleetCommandError(output, context)];
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
var deserializeAws_restJson1DeleteFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRobotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteRobotCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRobotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteRobotApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteRobotApplicationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteRobotApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteSimulationApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteSimulationApplicationCommandError(output, context)];
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
var deserializeAws_restJson1DeleteSimulationApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteWorldTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteWorldTemplateCommandError(output, context)];
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
var deserializeAws_restJson1DeleteWorldTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeregisterRobotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeregisterRobotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fleet: undefined,
                    robot: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fleet !== undefined && data.fleet !== null) {
                    contents.fleet = data.fleet;
                }
                if (data.robot !== undefined && data.robot !== null) {
                    contents.robot = data.robot;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeregisterRobotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeDeploymentJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeDeploymentJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    deploymentApplicationConfigs: undefined,
                    deploymentConfig: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    fleet: undefined,
                    robotDeploymentSummary: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
                    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
                }
                if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
                    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.fleet !== undefined && data.fleet !== null) {
                    contents.fleet = data.fleet;
                }
                if (data.robotDeploymentSummary !== undefined && data.robotDeploymentSummary !== null) {
                    contents.robotDeploymentSummary = deserializeAws_restJson1RobotDeploymentSummary(data.robotDeploymentSummary, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeDeploymentJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeFleetCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeFleetCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    lastDeploymentJob: undefined,
                    lastDeploymentStatus: undefined,
                    lastDeploymentTime: undefined,
                    name: undefined,
                    robots: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
                    contents.lastDeploymentJob = data.lastDeploymentJob;
                }
                if (data.lastDeploymentStatus !== undefined && data.lastDeploymentStatus !== null) {
                    contents.lastDeploymentStatus = data.lastDeploymentStatus;
                }
                if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
                    contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.robots !== undefined && data.robots !== null) {
                    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeFleetCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRobotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeRobotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    architecture: undefined,
                    arn: undefined,
                    createdAt: undefined,
                    fleetArn: undefined,
                    greengrassGroupId: undefined,
                    lastDeploymentJob: undefined,
                    lastDeploymentTime: undefined,
                    name: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.architecture !== undefined && data.architecture !== null) {
                    contents.architecture = data.architecture;
                }
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.fleetArn !== undefined && data.fleetArn !== null) {
                    contents.fleetArn = data.fleetArn;
                }
                if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
                    contents.greengrassGroupId = data.greengrassGroupId;
                }
                if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
                    contents.lastDeploymentJob = data.lastDeploymentJob;
                }
                if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
                    contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeRobotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeRobotApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeRobotApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    sources: undefined,
                    tags: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeRobotApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSimulationApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSimulationApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    renderingEngine: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    simulationSoftwareSuite: undefined,
                    sources: undefined,
                    tags: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
                    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
                    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSimulationApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSimulationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSimulationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    compute: undefined,
                    dataSources: undefined,
                    failureBehavior: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    iamRole: undefined,
                    lastStartedAt: undefined,
                    lastUpdatedAt: undefined,
                    loggingConfig: undefined,
                    maxJobDurationInSeconds: undefined,
                    name: undefined,
                    networkInterface: undefined,
                    outputLocation: undefined,
                    robotApplications: undefined,
                    simulationApplications: undefined,
                    simulationTimeMillis: undefined,
                    status: undefined,
                    tags: undefined,
                    vpcConfig: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.compute !== undefined && data.compute !== null) {
                    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
                }
                if (data.dataSources !== undefined && data.dataSources !== null) {
                    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
                }
                if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
                    contents.failureBehavior = data.failureBehavior;
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.iamRole !== undefined && data.iamRole !== null) {
                    contents.iamRole = data.iamRole;
                }
                if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
                    contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
                    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
                }
                if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
                    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.networkInterface !== undefined && data.networkInterface !== null) {
                    contents.networkInterface = deserializeAws_restJson1NetworkInterface(data.networkInterface, context);
                }
                if (data.outputLocation !== undefined && data.outputLocation !== null) {
                    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
                }
                if (data.robotApplications !== undefined && data.robotApplications !== null) {
                    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
                }
                if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
                    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(data.simulationApplications, context);
                }
                if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
                    contents.simulationTimeMillis = data.simulationTimeMillis;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
                    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSimulationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeSimulationJobBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeSimulationJobBatchCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    batchPolicy: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    createdRequests: undefined,
                    failedRequests: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    lastUpdatedAt: undefined,
                    pendingRequests: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
                    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.createdRequests !== undefined && data.createdRequests !== null) {
                    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
                }
                if (data.failedRequests !== undefined && data.failedRequests !== null) {
                    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
                    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeSimulationJobBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeWorldCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeWorldCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    generationJob: undefined,
                    tags: undefined,
                    template: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.generationJob !== undefined && data.generationJob !== null) {
                    contents.generationJob = data.generationJob;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.template !== undefined && data.template !== null) {
                    contents.template = data.template;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeWorldCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeWorldExportJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeWorldExportJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    iamRole: undefined,
                    outputLocation: undefined,
                    status: undefined,
                    tags: undefined,
                    worlds: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.iamRole !== undefined && data.iamRole !== null) {
                    contents.iamRole = data.iamRole;
                }
                if (data.outputLocation !== undefined && data.outputLocation !== null) {
                    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.worlds !== undefined && data.worlds !== null) {
                    contents.worlds = deserializeAws_restJson1Arns(data.worlds, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeWorldExportJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeWorldGenerationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeWorldGenerationJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    finishedWorldsSummary: undefined,
                    status: undefined,
                    tags: undefined,
                    template: undefined,
                    worldCount: undefined,
                    worldTags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.finishedWorldsSummary !== undefined && data.finishedWorldsSummary !== null) {
                    contents.finishedWorldsSummary = deserializeAws_restJson1FinishedWorldsSummary(data.finishedWorldsSummary, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                if (data.template !== undefined && data.template !== null) {
                    contents.template = data.template;
                }
                if (data.worldCount !== undefined && data.worldCount !== null) {
                    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
                }
                if (data.worldTags !== undefined && data.worldTags !== null) {
                    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeWorldGenerationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DescribeWorldTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DescribeWorldTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DescribeWorldTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetWorldTemplateBodyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetWorldTemplateBodyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    templateBody: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.templateBody !== undefined && data.templateBody !== null) {
                    contents.templateBody = data.templateBody;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetWorldTemplateBodyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDeploymentJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDeploymentJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    deploymentJobs: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.deploymentJobs !== undefined && data.deploymentJobs !== null) {
                    contents.deploymentJobs = deserializeAws_restJson1DeploymentJobs(data.deploymentJobs, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDeploymentJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListFleetsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListFleetsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fleetDetails: undefined,
                    nextToken: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fleetDetails !== undefined && data.fleetDetails !== null) {
                    contents.fleetDetails = deserializeAws_restJson1Fleets(data.fleetDetails, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListFleetsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRobotApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListRobotApplicationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    robotApplicationSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.robotApplicationSummaries !== undefined && data.robotApplicationSummaries !== null) {
                    contents.robotApplicationSummaries = deserializeAws_restJson1RobotApplicationSummaries(data.robotApplicationSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRobotApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListRobotsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListRobotsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    robots: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.robots !== undefined && data.robots !== null) {
                    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListRobotsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSimulationApplicationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSimulationApplicationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    simulationApplicationSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.simulationApplicationSummaries !== undefined && data.simulationApplicationSummaries !== null) {
                    contents.simulationApplicationSummaries = deserializeAws_restJson1SimulationApplicationSummaries(data.simulationApplicationSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSimulationApplicationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSimulationJobBatchesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSimulationJobBatchesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    simulationJobBatchSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.simulationJobBatchSummaries !== undefined && data.simulationJobBatchSummaries !== null) {
                    contents.simulationJobBatchSummaries = deserializeAws_restJson1SimulationJobBatchSummaries(data.simulationJobBatchSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSimulationJobBatchesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListSimulationJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListSimulationJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    simulationJobSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.simulationJobSummaries !== undefined && data.simulationJobSummaries !== null) {
                    contents.simulationJobSummaries = deserializeAws_restJson1SimulationJobSummaries(data.simulationJobSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListSimulationJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListWorldExportJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListWorldExportJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    worldExportJobSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.worldExportJobSummaries !== undefined && data.worldExportJobSummaries !== null) {
                    contents.worldExportJobSummaries = deserializeAws_restJson1WorldExportJobSummaries(data.worldExportJobSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListWorldExportJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListWorldGenerationJobsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListWorldGenerationJobsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    worldGenerationJobSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.worldGenerationJobSummaries !== undefined && data.worldGenerationJobSummaries !== null) {
                    contents.worldGenerationJobSummaries = deserializeAws_restJson1WorldGenerationJobSummaries(data.worldGenerationJobSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListWorldGenerationJobsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListWorldsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListWorldsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    worldSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.worldSummaries !== undefined && data.worldSummaries !== null) {
                    contents.worldSummaries = deserializeAws_restJson1WorldSummaries(data.worldSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListWorldsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListWorldTemplatesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListWorldTemplatesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    nextToken: undefined,
                    templateSummaries: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.templateSummaries !== undefined && data.templateSummaries !== null) {
                    contents.templateSummaries = deserializeAws_restJson1TemplateSummaries(data.templateSummaries, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListWorldTemplatesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ThrottlingException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 6];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RegisterRobotCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RegisterRobotCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    fleet: undefined,
                    robot: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.fleet !== undefined && data.fleet !== null) {
                    contents.fleet = data.fleet;
                }
                if (data.robot !== undefined && data.robot !== null) {
                    contents.robot = data.robot;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1RegisterRobotCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1RestartSimulationJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1RestartSimulationJobCommandError(output, context)];
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
var deserializeAws_restJson1RestartSimulationJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1StartSimulationJobBatchCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartSimulationJobBatchCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    batchPolicy: undefined,
                    clientRequestToken: undefined,
                    createdAt: undefined,
                    createdRequests: undefined,
                    failedRequests: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    pendingRequests: undefined,
                    status: undefined,
                    tags: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
                    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
                }
                if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
                    contents.clientRequestToken = data.clientRequestToken;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.createdRequests !== undefined && data.createdRequests !== null) {
                    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
                }
                if (data.failedRequests !== undefined && data.failedRequests !== null) {
                    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
                    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                if (data.tags !== undefined && data.tags !== null) {
                    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartSimulationJobBatchCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 4];
                    case "InvalidParameterException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1SyncDeploymentJobCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1SyncDeploymentJobCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    deploymentApplicationConfigs: undefined,
                    deploymentConfig: undefined,
                    failureCode: undefined,
                    failureReason: undefined,
                    fleet: undefined,
                    status: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
                    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
                }
                if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
                    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
                }
                if (data.failureCode !== undefined && data.failureCode !== null) {
                    contents.failureCode = data.failureCode;
                }
                if (data.failureReason !== undefined && data.failureReason !== null) {
                    contents.failureReason = data.failureReason;
                }
                if (data.fleet !== undefined && data.fleet !== null) {
                    contents.fleet = data.fleet;
                }
                if (data.status !== undefined && data.status !== null) {
                    contents.status = data.status;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1SyncDeploymentJobCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "ConcurrentDeploymentException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#ConcurrentDeploymentException": return [3 /*break*/, 2];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#IdempotentParameterMismatchException": return [3 /*break*/, 4];
                    case "InternalServerException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 6];
                    case "InvalidParameterException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ThrottlingException": return [3 /*break*/, 14];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateRobotApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateRobotApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    sources: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateRobotApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateSimulationApplicationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateSimulationApplicationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                    renderingEngine: undefined,
                    revisionId: undefined,
                    robotSoftwareSuite: undefined,
                    simulationSoftwareSuite: undefined,
                    sources: undefined,
                    version: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
                    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
                }
                if (data.revisionId !== undefined && data.revisionId !== null) {
                    contents.revisionId = data.revisionId;
                }
                if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
                    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
                }
                if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
                    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
                }
                if (data.sources !== undefined && data.sources !== null) {
                    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
                }
                if (data.version !== undefined && data.version !== null) {
                    contents.version = data.version;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateSimulationApplicationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ThrottlingException": return [3 /*break*/, 10];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateWorldTemplateCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateWorldTemplateCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    arn: undefined,
                    createdAt: undefined,
                    lastUpdatedAt: undefined,
                    name: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.arn !== undefined && data.arn !== null) {
                    contents.arn = data.arn;
                }
                if (data.createdAt !== undefined && data.createdAt !== null) {
                    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
                }
                if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
                    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
                }
                if (data.name !== undefined && data.name !== null) {
                    contents.name = data.name;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateWorldTemplateCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "InternalServerException": return [3 /*break*/, 2];
                    case "com.amazonaws.robomaker#InternalServerException": return [3 /*break*/, 2];
                    case "InvalidParameterException": return [3 /*break*/, 4];
                    case "com.amazonaws.robomaker#InvalidParameterException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.robomaker#ResourceNotFoundException": return [3 /*break*/, 6];
                    case "ThrottlingException": return [3 /*break*/, 8];
                    case "com.amazonaws.robomaker#ThrottlingException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)];
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
var deserializeAws_restJson1ConcurrentDeploymentExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ConcurrentDeploymentException",
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
var deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "IdempotentParameterMismatchException",
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
var deserializeAws_restJson1InvalidParameterExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterException",
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
var deserializeAws_restJson1LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "LimitExceededException",
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
var deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceAlreadyExistsException",
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
var deserializeAws_restJson1ThrottlingExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ThrottlingException",
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
var serializeAws_restJson1Arns = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1BatchPolicy = function (input, context) {
    return __assign(__assign({}, (input.maxConcurrency !== undefined &&
        input.maxConcurrency !== null && { maxConcurrency: input.maxConcurrency })), (input.timeoutInSeconds !== undefined &&
        input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }));
};
var serializeAws_restJson1Compute = function (input, context) {
    return __assign({}, (input.simulationUnitLimit !== undefined &&
        input.simulationUnitLimit !== null && { simulationUnitLimit: input.simulationUnitLimit }));
};
var serializeAws_restJson1CreateSimulationJobRequests = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SimulationJobRequest(entry, context);
    });
};
var serializeAws_restJson1DataSourceConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket })), (input.s3Keys !== undefined &&
        input.s3Keys !== null && { s3Keys: serializeAws_restJson1S3Keys(input.s3Keys, context) }));
};
var serializeAws_restJson1DataSourceConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataSourceConfig(entry, context);
    });
};
var serializeAws_restJson1DeploymentApplicationConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
        input.applicationVersion !== null && { applicationVersion: input.applicationVersion })), (input.launchConfig !== undefined &&
        input.launchConfig !== null && {
        launchConfig: serializeAws_restJson1DeploymentLaunchConfig(input.launchConfig, context),
    }));
};
var serializeAws_restJson1DeploymentApplicationConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};
var serializeAws_restJson1DeploymentConfig = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.concurrentDeploymentPercentage !== undefined &&
        input.concurrentDeploymentPercentage !== null && {
        concurrentDeploymentPercentage: input.concurrentDeploymentPercentage,
    })), (input.downloadConditionFile !== undefined &&
        input.downloadConditionFile !== null && {
        downloadConditionFile: serializeAws_restJson1S3Object(input.downloadConditionFile, context),
    })), (input.failureThresholdPercentage !== undefined &&
        input.failureThresholdPercentage !== null && { failureThresholdPercentage: input.failureThresholdPercentage })), (input.robotDeploymentTimeoutInSeconds !== undefined &&
        input.robotDeploymentTimeoutInSeconds !== null && {
        robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds,
    }));
};
var serializeAws_restJson1DeploymentLaunchConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.environmentVariables !== undefined &&
        input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
    })), (input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile })), (input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName })), (input.postLaunchFile !== undefined &&
        input.postLaunchFile !== null && { postLaunchFile: input.postLaunchFile })), (input.preLaunchFile !== undefined && input.preLaunchFile !== null && { preLaunchFile: input.preLaunchFile }));
};
var serializeAws_restJson1EnvironmentVariableMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1Filter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1Filters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
var serializeAws_restJson1FilterValues = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1LaunchConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.environmentVariables !== undefined &&
        input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
    })), (input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile })), (input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName })), (input.portForwardingConfig !== undefined &&
        input.portForwardingConfig !== null && {
        portForwardingConfig: serializeAws_restJson1PortForwardingConfig(input.portForwardingConfig, context),
    })), (input.streamUI !== undefined && input.streamUI !== null && { streamUI: input.streamUI }));
};
var serializeAws_restJson1LoggingConfig = function (input, context) {
    return __assign({}, (input.recordAllRosTopics !== undefined &&
        input.recordAllRosTopics !== null && { recordAllRosTopics: input.recordAllRosTopics }));
};
var serializeAws_restJson1OutputLocation = function (input, context) {
    return __assign(__assign({}, (input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket })), (input.s3Prefix !== undefined && input.s3Prefix !== null && { s3Prefix: input.s3Prefix }));
};
var serializeAws_restJson1PortForwardingConfig = function (input, context) {
    return __assign({}, (input.portMappings !== undefined &&
        input.portMappings !== null && {
        portMappings: serializeAws_restJson1PortMappingList(input.portMappings, context),
    }));
};
var serializeAws_restJson1PortMapping = function (input, context) {
    return __assign(__assign(__assign({}, (input.applicationPort !== undefined &&
        input.applicationPort !== null && { applicationPort: input.applicationPort })), (input.enableOnPublicIp !== undefined &&
        input.enableOnPublicIp !== null && { enableOnPublicIp: input.enableOnPublicIp })), (input.jobPort !== undefined && input.jobPort !== null && { jobPort: input.jobPort }));
};
var serializeAws_restJson1PortMappingList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PortMapping(entry, context);
    });
};
var serializeAws_restJson1RenderingEngine = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_restJson1RobotApplicationConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
        input.applicationVersion !== null && { applicationVersion: input.applicationVersion })), (input.launchConfig !== undefined &&
        input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) })), (input.tools !== undefined &&
        input.tools !== null && { tools: serializeAws_restJson1Tools(input.tools, context) })), (input.uploadConfigurations !== undefined &&
        input.uploadConfigurations !== null && {
        uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
    })), (input.useDefaultTools !== undefined &&
        input.useDefaultTools !== null && { useDefaultTools: input.useDefaultTools })), (input.useDefaultUploadConfigurations !== undefined &&
        input.useDefaultUploadConfigurations !== null && {
        useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    }));
};
var serializeAws_restJson1RobotApplicationConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};
var serializeAws_restJson1RobotSoftwareSuite = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_restJson1S3Keys = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1S3Object = function (input, context) {
    return __assign(__assign(__assign({}, (input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket })), (input.etag !== undefined && input.etag !== null && { etag: input.etag })), (input.key !== undefined && input.key !== null && { key: input.key }));
};
var serializeAws_restJson1SecurityGroups = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1SimulationApplicationConfig = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.application !== undefined && input.application !== null && { application: input.application })), (input.applicationVersion !== undefined &&
        input.applicationVersion !== null && { applicationVersion: input.applicationVersion })), (input.launchConfig !== undefined &&
        input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) })), (input.tools !== undefined &&
        input.tools !== null && { tools: serializeAws_restJson1Tools(input.tools, context) })), (input.uploadConfigurations !== undefined &&
        input.uploadConfigurations !== null && {
        uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
    })), (input.useDefaultTools !== undefined &&
        input.useDefaultTools !== null && { useDefaultTools: input.useDefaultTools })), (input.useDefaultUploadConfigurations !== undefined &&
        input.useDefaultUploadConfigurations !== null && {
        useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    })), (input.worldConfigs !== undefined &&
        input.worldConfigs !== null && { worldConfigs: serializeAws_restJson1WorldConfigs(input.worldConfigs, context) }));
};
var serializeAws_restJson1SimulationApplicationConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};
var serializeAws_restJson1SimulationJobRequest = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.compute !== undefined &&
        input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) })), (input.dataSources !== undefined &&
        input.dataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
    })), (input.failureBehavior !== undefined &&
        input.failureBehavior !== null && { failureBehavior: input.failureBehavior })), (input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole })), (input.loggingConfig !== undefined &&
        input.loggingConfig !== null && {
        loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
    })), (input.maxJobDurationInSeconds !== undefined &&
        input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds })), (input.outputLocation !== undefined &&
        input.outputLocation !== null && {
        outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
    })), (input.robotApplications !== undefined &&
        input.robotApplications !== null && {
        robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
    })), (input.simulationApplications !== undefined &&
        input.simulationApplications !== null && {
        simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
    })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.useDefaultApplications !== undefined &&
        input.useDefaultApplications !== null && { useDefaultApplications: input.useDefaultApplications })), (input.vpcConfig !== undefined &&
        input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }));
};
var serializeAws_restJson1SimulationSoftwareSuite = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.version !== undefined && input.version !== null && { version: input.version }));
};
var serializeAws_restJson1SourceConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture })), (input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket })), (input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }));
};
var serializeAws_restJson1SourceConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1SourceConfig(entry, context);
    });
};
var serializeAws_restJson1Subnets = function (input, context) {
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
var serializeAws_restJson1TemplateLocation = function (input, context) {
    return __assign(__assign({}, (input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket })), (input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }));
};
var serializeAws_restJson1Tool = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.command !== undefined && input.command !== null && { command: input.command })), (input.exitBehavior !== undefined && input.exitBehavior !== null && { exitBehavior: input.exitBehavior })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.streamOutputToCloudWatch !== undefined &&
        input.streamOutputToCloudWatch !== null && { streamOutputToCloudWatch: input.streamOutputToCloudWatch })), (input.streamUI !== undefined && input.streamUI !== null && { streamUI: input.streamUI }));
};
var serializeAws_restJson1Tools = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tool(entry, context);
    });
};
var serializeAws_restJson1UploadConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.path !== undefined && input.path !== null && { path: input.path })), (input.uploadBehavior !== undefined &&
        input.uploadBehavior !== null && { uploadBehavior: input.uploadBehavior }));
};
var serializeAws_restJson1UploadConfigurations = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1UploadConfiguration(entry, context);
    });
};
var serializeAws_restJson1VPCConfig = function (input, context) {
    return __assign(__assign(__assign({}, (input.assignPublicIp !== undefined &&
        input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp })), (input.securityGroups !== undefined &&
        input.securityGroups !== null && {
        securityGroups: serializeAws_restJson1SecurityGroups(input.securityGroups, context),
    })), (input.subnets !== undefined &&
        input.subnets !== null && { subnets: serializeAws_restJson1Subnets(input.subnets, context) }));
};
var serializeAws_restJson1WorldConfig = function (input, context) {
    return __assign({}, (input.world !== undefined && input.world !== null && { world: input.world }));
};
var serializeAws_restJson1WorldConfigs = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1WorldConfig(entry, context);
    });
};
var serializeAws_restJson1WorldCount = function (input, context) {
    return __assign(__assign({}, (input.floorplanCount !== undefined &&
        input.floorplanCount !== null && { floorplanCount: input.floorplanCount })), (input.interiorCountPerFloorplan !== undefined &&
        input.interiorCountPerFloorplan !== null && { interiorCountPerFloorplan: input.interiorCountPerFloorplan }));
};
var deserializeAws_restJson1Arns = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1BatchPolicy = function (output, context) {
    return {
        maxConcurrency: output.maxConcurrency !== undefined && output.maxConcurrency !== null ? output.maxConcurrency : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
var deserializeAws_restJson1Compute = function (output, context) {
    return {
        simulationUnitLimit: output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
            ? output.simulationUnitLimit
            : undefined,
    };
};
var deserializeAws_restJson1ComputeResponse = function (output, context) {
    return {
        simulationUnitLimit: output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
            ? output.simulationUnitLimit
            : undefined,
    };
};
var deserializeAws_restJson1CreateSimulationJobRequests = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobRequest(entry, context);
    });
};
var deserializeAws_restJson1DataSource = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Keys: output.s3Keys !== undefined && output.s3Keys !== null
            ? deserializeAws_restJson1S3KeyOutputs(output.s3Keys, context)
            : undefined,
    };
};
var deserializeAws_restJson1DataSourceConfig = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Keys: output.s3Keys !== undefined && output.s3Keys !== null
            ? deserializeAws_restJson1S3Keys(output.s3Keys, context)
            : undefined,
    };
};
var deserializeAws_restJson1DataSourceConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSourceConfig(entry, context);
    });
};
var deserializeAws_restJson1DataSourceNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1DataSources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSource(entry, context);
    });
};
var deserializeAws_restJson1DeploymentApplicationConfig = function (output, context) {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1DeploymentLaunchConfig(output.launchConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1DeploymentApplicationConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};
var deserializeAws_restJson1DeploymentConfig = function (output, context) {
    return {
        concurrentDeploymentPercentage: output.concurrentDeploymentPercentage !== undefined && output.concurrentDeploymentPercentage !== null
            ? output.concurrentDeploymentPercentage
            : undefined,
        downloadConditionFile: output.downloadConditionFile !== undefined && output.downloadConditionFile !== null
            ? deserializeAws_restJson1S3Object(output.downloadConditionFile, context)
            : undefined,
        failureThresholdPercentage: output.failureThresholdPercentage !== undefined && output.failureThresholdPercentage !== null
            ? output.failureThresholdPercentage
            : undefined,
        robotDeploymentTimeoutInSeconds: output.robotDeploymentTimeoutInSeconds !== undefined && output.robotDeploymentTimeoutInSeconds !== null
            ? output.robotDeploymentTimeoutInSeconds
            : undefined,
    };
};
var deserializeAws_restJson1DeploymentJob = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        deploymentApplicationConfigs: output.deploymentApplicationConfigs !== undefined && output.deploymentApplicationConfigs !== null
            ? deserializeAws_restJson1DeploymentApplicationConfigs(output.deploymentApplicationConfigs, context)
            : undefined,
        deploymentConfig: output.deploymentConfig !== undefined && output.deploymentConfig !== null
            ? deserializeAws_restJson1DeploymentConfig(output.deploymentConfig, context)
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        fleet: output.fleet !== undefined && output.fleet !== null ? output.fleet : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1DeploymentJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DeploymentJob(entry, context);
    });
};
var deserializeAws_restJson1DeploymentLaunchConfig = function (output, context) {
    return {
        environmentVariables: output.environmentVariables !== undefined && output.environmentVariables !== null
            ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
            : undefined,
        launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        postLaunchFile: output.postLaunchFile !== undefined && output.postLaunchFile !== null ? output.postLaunchFile : undefined,
        preLaunchFile: output.preLaunchFile !== undefined && output.preLaunchFile !== null ? output.preLaunchFile : undefined,
    };
};
var deserializeAws_restJson1EnvironmentVariableMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1FailedCreateSimulationJobRequest = function (output, context) {
    return {
        failedAt: output.failedAt !== undefined && output.failedAt !== null
            ? new Date(Math.round(output.failedAt * 1000))
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        request: output.request !== undefined && output.request !== null
            ? deserializeAws_restJson1SimulationJobRequest(output.request, context)
            : undefined,
    };
};
var deserializeAws_restJson1FailedCreateSimulationJobRequests = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1FailedCreateSimulationJobRequest(entry, context);
    });
};
var deserializeAws_restJson1FailureSummary = function (output, context) {
    return {
        failures: output.failures !== undefined && output.failures !== null
            ? deserializeAws_restJson1WorldFailures(output.failures, context)
            : undefined,
        totalFailureCount: output.totalFailureCount !== undefined && output.totalFailureCount !== null
            ? output.totalFailureCount
            : undefined,
    };
};
var deserializeAws_restJson1FinishedWorldsSummary = function (output, context) {
    return {
        failureSummary: output.failureSummary !== undefined && output.failureSummary !== null
            ? deserializeAws_restJson1FailureSummary(output.failureSummary, context)
            : undefined,
        finishedCount: output.finishedCount !== undefined && output.finishedCount !== null ? output.finishedCount : undefined,
        succeededWorlds: output.succeededWorlds !== undefined && output.succeededWorlds !== null
            ? deserializeAws_restJson1Arns(output.succeededWorlds, context)
            : undefined,
    };
};
var deserializeAws_restJson1Fleet = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        lastDeploymentJob: output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
            ? output.lastDeploymentJob
            : undefined,
        lastDeploymentStatus: output.lastDeploymentStatus !== undefined && output.lastDeploymentStatus !== null
            ? output.lastDeploymentStatus
            : undefined,
        lastDeploymentTime: output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
            ? new Date(Math.round(output.lastDeploymentTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1Fleets = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Fleet(entry, context);
    });
};
var deserializeAws_restJson1LaunchConfig = function (output, context) {
    return {
        environmentVariables: output.environmentVariables !== undefined && output.environmentVariables !== null
            ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
            : undefined,
        launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        portForwardingConfig: output.portForwardingConfig !== undefined && output.portForwardingConfig !== null
            ? deserializeAws_restJson1PortForwardingConfig(output.portForwardingConfig, context)
            : undefined,
        streamUI: output.streamUI !== undefined && output.streamUI !== null ? output.streamUI : undefined,
    };
};
var deserializeAws_restJson1LoggingConfig = function (output, context) {
    return {
        recordAllRosTopics: output.recordAllRosTopics !== undefined && output.recordAllRosTopics !== null
            ? output.recordAllRosTopics
            : undefined,
    };
};
var deserializeAws_restJson1NetworkInterface = function (output, context) {
    return {
        networkInterfaceId: output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
            ? output.networkInterfaceId
            : undefined,
        privateIpAddress: output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
        publicIpAddress: output.publicIpAddress !== undefined && output.publicIpAddress !== null ? output.publicIpAddress : undefined,
    };
};
var deserializeAws_restJson1OutputLocation = function (output, context) {
    return {
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Prefix: output.s3Prefix !== undefined && output.s3Prefix !== null ? output.s3Prefix : undefined,
    };
};
var deserializeAws_restJson1PortForwardingConfig = function (output, context) {
    return {
        portMappings: output.portMappings !== undefined && output.portMappings !== null
            ? deserializeAws_restJson1PortMappingList(output.portMappings, context)
            : undefined,
    };
};
var deserializeAws_restJson1PortMapping = function (output, context) {
    return {
        applicationPort: output.applicationPort !== undefined && output.applicationPort !== null ? output.applicationPort : undefined,
        enableOnPublicIp: output.enableOnPublicIp !== undefined && output.enableOnPublicIp !== null ? output.enableOnPublicIp : undefined,
        jobPort: output.jobPort !== undefined && output.jobPort !== null ? output.jobPort : undefined,
    };
};
var deserializeAws_restJson1PortMappingList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PortMapping(entry, context);
    });
};
var deserializeAws_restJson1ProgressDetail = function (output, context) {
    return {
        currentProgress: output.currentProgress !== undefined && output.currentProgress !== null ? output.currentProgress : undefined,
        estimatedTimeRemainingSeconds: output.estimatedTimeRemainingSeconds !== undefined && output.estimatedTimeRemainingSeconds !== null
            ? output.estimatedTimeRemainingSeconds
            : undefined,
        percentDone: output.percentDone !== undefined && output.percentDone !== null ? output.percentDone : undefined,
        targetResource: output.targetResource !== undefined && output.targetResource !== null ? output.targetResource : undefined,
    };
};
var deserializeAws_restJson1RenderingEngine = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1Robot = function (output, context) {
    return {
        architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        fleetArn: output.fleetArn !== undefined && output.fleetArn !== null ? output.fleetArn : undefined,
        greenGrassGroupId: output.greenGrassGroupId !== undefined && output.greenGrassGroupId !== null
            ? output.greenGrassGroupId
            : undefined,
        lastDeploymentJob: output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
            ? output.lastDeploymentJob
            : undefined,
        lastDeploymentTime: output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
            ? new Date(Math.round(output.lastDeploymentTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1RobotApplicationConfig = function (output, context) {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
            : undefined,
        tools: output.tools !== undefined && output.tools !== null
            ? deserializeAws_restJson1Tools(output.tools, context)
            : undefined,
        uploadConfigurations: output.uploadConfigurations !== undefined && output.uploadConfigurations !== null
            ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
            : undefined,
        useDefaultTools: output.useDefaultTools !== undefined && output.useDefaultTools !== null ? output.useDefaultTools : undefined,
        useDefaultUploadConfigurations: output.useDefaultUploadConfigurations !== undefined && output.useDefaultUploadConfigurations !== null
            ? output.useDefaultUploadConfigurations
            : undefined,
    };
};
var deserializeAws_restJson1RobotApplicationConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};
var deserializeAws_restJson1RobotApplicationNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1RobotApplicationSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotApplicationSummary(entry, context);
    });
};
var deserializeAws_restJson1RobotApplicationSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotSoftwareSuite: output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
            ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1RobotDeployment = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        deploymentFinishTime: output.deploymentFinishTime !== undefined && output.deploymentFinishTime !== null
            ? new Date(Math.round(output.deploymentFinishTime * 1000))
            : undefined,
        deploymentStartTime: output.deploymentStartTime !== undefined && output.deploymentStartTime !== null
            ? new Date(Math.round(output.deploymentStartTime * 1000))
            : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        progressDetail: output.progressDetail !== undefined && output.progressDetail !== null
            ? deserializeAws_restJson1ProgressDetail(output.progressDetail, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1RobotDeploymentSummary = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RobotDeployment(entry, context);
    });
};
var deserializeAws_restJson1Robots = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Robot(entry, context);
    });
};
var deserializeAws_restJson1RobotSoftwareSuite = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1S3KeyOutput = function (output, context) {
    return {
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
    };
};
var deserializeAws_restJson1S3KeyOutputs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1S3KeyOutput(entry, context);
    });
};
var deserializeAws_restJson1S3Keys = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1S3Object = function (output, context) {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
    };
};
var deserializeAws_restJson1SecurityGroups = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SimulationApplicationConfig = function (output, context) {
    return {
        application: output.application !== undefined && output.application !== null ? output.application : undefined,
        applicationVersion: output.applicationVersion !== undefined && output.applicationVersion !== null
            ? output.applicationVersion
            : undefined,
        launchConfig: output.launchConfig !== undefined && output.launchConfig !== null
            ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
            : undefined,
        tools: output.tools !== undefined && output.tools !== null
            ? deserializeAws_restJson1Tools(output.tools, context)
            : undefined,
        uploadConfigurations: output.uploadConfigurations !== undefined && output.uploadConfigurations !== null
            ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
            : undefined,
        useDefaultTools: output.useDefaultTools !== undefined && output.useDefaultTools !== null ? output.useDefaultTools : undefined,
        useDefaultUploadConfigurations: output.useDefaultUploadConfigurations !== undefined && output.useDefaultUploadConfigurations !== null
            ? output.useDefaultUploadConfigurations
            : undefined,
        worldConfigs: output.worldConfigs !== undefined && output.worldConfigs !== null
            ? deserializeAws_restJson1WorldConfigs(output.worldConfigs, context)
            : undefined,
    };
};
var deserializeAws_restJson1SimulationApplicationConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};
var deserializeAws_restJson1SimulationApplicationNames = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1SimulationApplicationSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationApplicationSummary(entry, context);
    });
};
var deserializeAws_restJson1SimulationApplicationSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotSoftwareSuite: output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
            ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
            : undefined,
        simulationSoftwareSuite: output.simulationSoftwareSuite !== undefined && output.simulationSoftwareSuite !== null
            ? deserializeAws_restJson1SimulationSoftwareSuite(output.simulationSoftwareSuite, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1SimulationJob = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        clientRequestToken: output.clientRequestToken !== undefined && output.clientRequestToken !== null
            ? output.clientRequestToken
            : undefined,
        compute: output.compute !== undefined && output.compute !== null
            ? deserializeAws_restJson1ComputeResponse(output.compute, context)
            : undefined,
        dataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSources(output.dataSources, context)
            : undefined,
        failureBehavior: output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureReason: output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
        iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
        lastStartedAt: output.lastStartedAt !== undefined && output.lastStartedAt !== null
            ? new Date(Math.round(output.lastStartedAt * 1000))
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        loggingConfig: output.loggingConfig !== undefined && output.loggingConfig !== null
            ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
            : undefined,
        maxJobDurationInSeconds: output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
            ? output.maxJobDurationInSeconds
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        networkInterface: output.networkInterface !== undefined && output.networkInterface !== null
            ? deserializeAws_restJson1NetworkInterface(output.networkInterface, context)
            : undefined,
        outputLocation: output.outputLocation !== undefined && output.outputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
            : undefined,
        robotApplications: output.robotApplications !== undefined && output.robotApplications !== null
            ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
            : undefined,
        simulationApplications: output.simulationApplications !== undefined && output.simulationApplications !== null
            ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
            : undefined,
        simulationTimeMillis: output.simulationTimeMillis !== undefined && output.simulationTimeMillis !== null
            ? output.simulationTimeMillis
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_restJson1VPCConfigResponse(output.vpcConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1SimulationJobBatchSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobBatchSummary(entry, context);
    });
};
var deserializeAws_restJson1SimulationJobBatchSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        createdRequestCount: output.createdRequestCount !== undefined && output.createdRequestCount !== null
            ? output.createdRequestCount
            : undefined,
        failedRequestCount: output.failedRequestCount !== undefined && output.failedRequestCount !== null
            ? output.failedRequestCount
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        pendingRequestCount: output.pendingRequestCount !== undefined && output.pendingRequestCount !== null
            ? output.pendingRequestCount
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1SimulationJobRequest = function (output, context) {
    return {
        compute: output.compute !== undefined && output.compute !== null
            ? deserializeAws_restJson1Compute(output.compute, context)
            : undefined,
        dataSources: output.dataSources !== undefined && output.dataSources !== null
            ? deserializeAws_restJson1DataSourceConfigs(output.dataSources, context)
            : undefined,
        failureBehavior: output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
        iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
        loggingConfig: output.loggingConfig !== undefined && output.loggingConfig !== null
            ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
            : undefined,
        maxJobDurationInSeconds: output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
            ? output.maxJobDurationInSeconds
            : undefined,
        outputLocation: output.outputLocation !== undefined && output.outputLocation !== null
            ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
            : undefined,
        robotApplications: output.robotApplications !== undefined && output.robotApplications !== null
            ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
            : undefined,
        simulationApplications: output.simulationApplications !== undefined && output.simulationApplications !== null
            ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        useDefaultApplications: output.useDefaultApplications !== undefined && output.useDefaultApplications !== null
            ? output.useDefaultApplications
            : undefined,
        vpcConfig: output.vpcConfig !== undefined && output.vpcConfig !== null
            ? deserializeAws_restJson1VPCConfig(output.vpcConfig, context)
            : undefined,
    };
};
var deserializeAws_restJson1SimulationJobs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJob(entry, context);
    });
};
var deserializeAws_restJson1SimulationJobSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SimulationJobSummary(entry, context);
    });
};
var deserializeAws_restJson1SimulationJobSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dataSourceNames: output.dataSourceNames !== undefined && output.dataSourceNames !== null
            ? deserializeAws_restJson1DataSourceNames(output.dataSourceNames, context)
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        robotApplicationNames: output.robotApplicationNames !== undefined && output.robotApplicationNames !== null
            ? deserializeAws_restJson1RobotApplicationNames(output.robotApplicationNames, context)
            : undefined,
        simulationApplicationNames: output.simulationApplicationNames !== undefined && output.simulationApplicationNames !== null
            ? deserializeAws_restJson1SimulationApplicationNames(output.simulationApplicationNames, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1SimulationSoftwareSuite = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1Source = function (output, context) {
    return {
        architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
        etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
        s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
        s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
    };
};
var deserializeAws_restJson1Sources = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Source(entry, context);
    });
};
var deserializeAws_restJson1Subnets = function (output, context) {
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
var deserializeAws_restJson1TemplateSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1TemplateSummary(entry, context);
    });
};
var deserializeAws_restJson1TemplateSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        lastUpdatedAt: output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
            ? new Date(Math.round(output.lastUpdatedAt * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
var deserializeAws_restJson1Tool = function (output, context) {
    return {
        command: output.command !== undefined && output.command !== null ? output.command : undefined,
        exitBehavior: output.exitBehavior !== undefined && output.exitBehavior !== null ? output.exitBehavior : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        streamOutputToCloudWatch: output.streamOutputToCloudWatch !== undefined && output.streamOutputToCloudWatch !== null
            ? output.streamOutputToCloudWatch
            : undefined,
        streamUI: output.streamUI !== undefined && output.streamUI !== null ? output.streamUI : undefined,
    };
};
var deserializeAws_restJson1Tools = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tool(entry, context);
    });
};
var deserializeAws_restJson1UploadConfiguration = function (output, context) {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        path: output.path !== undefined && output.path !== null ? output.path : undefined,
        uploadBehavior: output.uploadBehavior !== undefined && output.uploadBehavior !== null ? output.uploadBehavior : undefined,
    };
};
var deserializeAws_restJson1UploadConfigurations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1UploadConfiguration(entry, context);
    });
};
var deserializeAws_restJson1VPCConfig = function (output, context) {
    return {
        assignPublicIp: output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1Subnets(output.subnets, context)
            : undefined,
    };
};
var deserializeAws_restJson1VPCConfigResponse = function (output, context) {
    return {
        assignPublicIp: output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
        securityGroups: output.securityGroups !== undefined && output.securityGroups !== null
            ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
            : undefined,
        subnets: output.subnets !== undefined && output.subnets !== null
            ? deserializeAws_restJson1Subnets(output.subnets, context)
            : undefined,
        vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
    };
};
var deserializeAws_restJson1WorldConfig = function (output, context) {
    return {
        world: output.world !== undefined && output.world !== null ? output.world : undefined,
    };
};
var deserializeAws_restJson1WorldConfigs = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldConfig(entry, context);
    });
};
var deserializeAws_restJson1WorldCount = function (output, context) {
    return {
        floorplanCount: output.floorplanCount !== undefined && output.floorplanCount !== null ? output.floorplanCount : undefined,
        interiorCountPerFloorplan: output.interiorCountPerFloorplan !== undefined && output.interiorCountPerFloorplan !== null
            ? output.interiorCountPerFloorplan
            : undefined,
    };
};
var deserializeAws_restJson1WorldExportJobSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldExportJobSummary(entry, context);
    });
};
var deserializeAws_restJson1WorldExportJobSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        worlds: output.worlds !== undefined && output.worlds !== null
            ? deserializeAws_restJson1Arns(output.worlds, context)
            : undefined,
    };
};
var deserializeAws_restJson1WorldFailure = function (output, context) {
    return {
        failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
        failureCount: output.failureCount !== undefined && output.failureCount !== null ? output.failureCount : undefined,
        sampleFailureReason: output.sampleFailureReason !== undefined && output.sampleFailureReason !== null
            ? output.sampleFailureReason
            : undefined,
    };
};
var deserializeAws_restJson1WorldFailures = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldFailure(entry, context);
    });
};
var deserializeAws_restJson1WorldGenerationJobSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldGenerationJobSummary(entry, context);
    });
};
var deserializeAws_restJson1WorldGenerationJobSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        failedWorldCount: output.failedWorldCount !== undefined && output.failedWorldCount !== null ? output.failedWorldCount : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        succeededWorldCount: output.succeededWorldCount !== undefined && output.succeededWorldCount !== null
            ? output.succeededWorldCount
            : undefined,
        template: output.template !== undefined && output.template !== null ? output.template : undefined,
        worldCount: output.worldCount !== undefined && output.worldCount !== null
            ? deserializeAws_restJson1WorldCount(output.worldCount, context)
            : undefined,
    };
};
var deserializeAws_restJson1WorldSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1WorldSummary(entry, context);
    });
};
var deserializeAws_restJson1WorldSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null
            ? new Date(Math.round(output.createdAt * 1000))
            : undefined,
        generationJob: output.generationJob !== undefined && output.generationJob !== null ? output.generationJob : undefined,
        template: output.template !== undefined && output.template !== null ? output.template : undefined,
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