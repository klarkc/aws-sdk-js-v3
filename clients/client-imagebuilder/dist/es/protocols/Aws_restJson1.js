import { __assign, __awaiter, __generator, __read } from "tslib";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { extendedEncodeURIComponent as __extendedEncodeURIComponent, } from "@aws-sdk/smithy-client";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_restJson1CancelImageCreationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CancelImageCreation";
                body = JSON.stringify(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.imageBuildVersionArn !== undefined &&
                    input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateComponentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateComponent";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.changeDescription !== undefined &&
                    input.changeDescription !== null && { changeDescription: input.changeDescription })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.data !== undefined && input.data !== null && { data: input.data })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.platform !== undefined && input.platform !== null && { platform: input.platform })), (input.semanticVersion !== undefined &&
                    input.semanticVersion !== null && { semanticVersion: input.semanticVersion })), (input.supportedOsVersions !== undefined &&
                    input.supportedOsVersions !== null && {
                    supportedOsVersions: serializeAws_restJson1OsVersionList(input.supportedOsVersions, context),
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.uri !== undefined && input.uri !== null && { uri: input.uri })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateContainerRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateContainerRecipe";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.components !== undefined &&
                    input.components !== null && {
                    components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
                })), (input.containerType !== undefined && input.containerType !== null && { containerType: input.containerType })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.dockerfileTemplateData !== undefined &&
                    input.dockerfileTemplateData !== null && { dockerfileTemplateData: input.dockerfileTemplateData })), (input.dockerfileTemplateUri !== undefined &&
                    input.dockerfileTemplateUri !== null && { dockerfileTemplateUri: input.dockerfileTemplateUri })), (input.imageOsVersionOverride !== undefined &&
                    input.imageOsVersionOverride !== null && { imageOsVersionOverride: input.imageOsVersionOverride })), (input.instanceConfiguration !== undefined &&
                    input.instanceConfiguration !== null && {
                    instanceConfiguration: serializeAws_restJson1InstanceConfiguration(input.instanceConfiguration, context),
                })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage })), (input.platformOverride !== undefined &&
                    input.platformOverride !== null && { platformOverride: input.platformOverride })), (input.semanticVersion !== undefined &&
                    input.semanticVersion !== null && { semanticVersion: input.semanticVersion })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.targetRepository !== undefined &&
                    input.targetRepository !== null && {
                    targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
                })), (input.workingDirectory !== undefined &&
                    input.workingDirectory !== null && { workingDirectory: input.workingDirectory })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateDistributionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateDistributionConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.description !== undefined && input.description !== null && { description: input.description })), (input.distributions !== undefined &&
                    input.distributions !== null && {
                    distributions: serializeAws_restJson1DistributionList(input.distributions, context),
                })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateImageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateImage";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.containerRecipeArn !== undefined &&
                    input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn })), (input.distributionConfigurationArn !== undefined &&
                    input.distributionConfigurationArn !== null && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                })), (input.enhancedImageMetadataEnabled !== undefined &&
                    input.enhancedImageMetadataEnabled !== null && {
                    enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
                })), (input.imageRecipeArn !== undefined &&
                    input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn })), (input.imageTestsConfiguration !== undefined &&
                    input.imageTestsConfiguration !== null && {
                    imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
                })), (input.infrastructureConfigurationArn !== undefined &&
                    input.infrastructureConfigurationArn !== null && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateImagePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateImagePipeline";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.containerRecipeArn !== undefined &&
                    input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.distributionConfigurationArn !== undefined &&
                    input.distributionConfigurationArn !== null && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                })), (input.enhancedImageMetadataEnabled !== undefined &&
                    input.enhancedImageMetadataEnabled !== null && {
                    enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
                })), (input.imageRecipeArn !== undefined &&
                    input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn })), (input.imageTestsConfiguration !== undefined &&
                    input.imageTestsConfiguration !== null && {
                    imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
                })), (input.infrastructureConfigurationArn !== undefined &&
                    input.infrastructureConfigurationArn !== null && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.schedule !== undefined &&
                    input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) })), (input.status !== undefined && input.status !== null && { status: input.status })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateImageRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateImageRecipe";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.blockDeviceMappings !== undefined &&
                    input.blockDeviceMappings !== null && {
                    blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
                })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.components !== undefined &&
                    input.components !== null && {
                    components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
                })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage })), (input.semanticVersion !== undefined &&
                    input.semanticVersion !== null && { semanticVersion: input.semanticVersion })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.workingDirectory !== undefined &&
                    input.workingDirectory !== null && { workingDirectory: input.workingDirectory })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1CreateInfrastructureConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/CreateInfrastructureConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.description !== undefined && input.description !== null && { description: input.description })), (input.instanceProfileName !== undefined &&
                    input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName })), (input.instanceTypes !== undefined &&
                    input.instanceTypes !== null && {
                    instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
                })), (input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair })), (input.logging !== undefined &&
                    input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.resourceTags !== undefined &&
                    input.resourceTags !== null && {
                    resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
                })), (input.securityGroupIds !== undefined &&
                    input.securityGroupIds !== null && {
                    securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
                })), (input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn })), (input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.terminateInstanceOnFailure !== undefined &&
                    input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1DeleteComponentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteComponent";
                query = __assign({}, (input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }));
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
export var serializeAws_restJson1DeleteContainerRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteContainerRecipe";
                query = __assign({}, (input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }));
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
export var serializeAws_restJson1DeleteDistributionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteDistributionConfiguration";
                query = __assign({}, (input.distributionConfigurationArn !== undefined && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                }));
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
export var serializeAws_restJson1DeleteImageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteImage";
                query = __assign({}, (input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }));
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
export var serializeAws_restJson1DeleteImagePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteImagePipeline";
                query = __assign({}, (input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }));
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
export var serializeAws_restJson1DeleteImageRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteImageRecipe";
                query = __assign({}, (input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }));
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
export var serializeAws_restJson1DeleteInfrastructureConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/DeleteInfrastructureConfiguration";
                query = __assign({}, (input.infrastructureConfigurationArn !== undefined && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                }));
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
export var serializeAws_restJson1GetComponentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetComponent";
                query = __assign({}, (input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }));
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
export var serializeAws_restJson1GetComponentPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetComponentPolicy";
                query = __assign({}, (input.componentArn !== undefined && { componentArn: input.componentArn }));
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
export var serializeAws_restJson1GetContainerRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetContainerRecipe";
                query = __assign({}, (input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }));
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
export var serializeAws_restJson1GetContainerRecipePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetContainerRecipePolicy";
                query = __assign({}, (input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }));
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
export var serializeAws_restJson1GetDistributionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetDistributionConfiguration";
                query = __assign({}, (input.distributionConfigurationArn !== undefined && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                }));
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
export var serializeAws_restJson1GetImageCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetImage";
                query = __assign({}, (input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }));
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
export var serializeAws_restJson1GetImagePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetImagePipeline";
                query = __assign({}, (input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }));
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
export var serializeAws_restJson1GetImagePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetImagePolicy";
                query = __assign({}, (input.imageArn !== undefined && { imageArn: input.imageArn }));
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
export var serializeAws_restJson1GetImageRecipeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetImageRecipe";
                query = __assign({}, (input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }));
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
export var serializeAws_restJson1GetImageRecipePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetImageRecipePolicy";
                query = __assign({}, (input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }));
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
export var serializeAws_restJson1GetInfrastructureConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, query, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {};
                resolvedPath = "/GetInfrastructureConfiguration";
                query = __assign({}, (input.infrastructureConfigurationArn !== undefined && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                }));
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
export var serializeAws_restJson1ImportComponentCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ImportComponent";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.changeDescription !== undefined &&
                    input.changeDescription !== null && { changeDescription: input.changeDescription })), { clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }), (input.data !== undefined && input.data !== null && { data: input.data })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.format !== undefined && input.format !== null && { format: input.format })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.platform !== undefined && input.platform !== null && { platform: input.platform })), (input.semanticVersion !== undefined &&
                    input.semanticVersion !== null && { semanticVersion: input.semanticVersion })), (input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) })), (input.type !== undefined && input.type !== null && { type: input.type })), (input.uri !== undefined && input.uri !== null && { uri: input.uri })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1ListComponentBuildVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListComponentBuildVersions";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.componentVersionArn !== undefined &&
                    input.componentVersionArn !== null && { componentVersionArn: input.componentVersionArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListComponentsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListComponents";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign({}, (input.byName !== undefined && input.byName !== null && { byName: input.byName })), (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })));
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
export var serializeAws_restJson1ListContainerRecipesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListContainerRecipes";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })));
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
export var serializeAws_restJson1ListDistributionConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListDistributionConfigurations";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListImageBuildVersionsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImageBuildVersions";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.imageVersionArn !== undefined &&
                    input.imageVersionArn !== null && { imageVersionArn: input.imageVersionArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListImagePackagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImagePackages";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.imageBuildVersionArn !== undefined &&
                    input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListImagePipelineImagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImagePipelineImages";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.imagePipelineArn !== undefined &&
                    input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListImagePipelinesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImagePipelines";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1ListImageRecipesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImageRecipes";
                body = JSON.stringify(__assign(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })));
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
export var serializeAws_restJson1ListImagesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListImages";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.byName !== undefined && input.byName !== null && { byName: input.byName })), (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.includeDeprecated !== undefined &&
                    input.includeDeprecated !== null && { includeDeprecated: input.includeDeprecated })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })), (input.owner !== undefined && input.owner !== null && { owner: input.owner })));
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
export var serializeAws_restJson1ListInfrastructureConfigurationsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/ListInfrastructureConfigurations";
                body = JSON.stringify(__assign(__assign(__assign({}, (input.filters !== undefined &&
                    input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) })), (input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults })), (input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken })));
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
export var serializeAws_restJson1PutComponentPolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/PutComponentPolicy";
                body = JSON.stringify(__assign(__assign({}, (input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn })), (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
export var serializeAws_restJson1PutContainerRecipePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/PutContainerRecipePolicy";
                body = JSON.stringify(__assign(__assign({}, (input.containerRecipeArn !== undefined &&
                    input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn })), (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
export var serializeAws_restJson1PutImagePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/PutImagePolicy";
                body = JSON.stringify(__assign(__assign({}, (input.imageArn !== undefined && input.imageArn !== null && { imageArn: input.imageArn })), (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
export var serializeAws_restJson1PutImageRecipePolicyCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/PutImageRecipePolicy";
                body = JSON.stringify(__assign(__assign({}, (input.imageRecipeArn !== undefined &&
                    input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn })), (input.policy !== undefined && input.policy !== null && { policy: input.policy })));
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
export var serializeAws_restJson1StartImagePipelineExecutionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/StartImagePipelineExecution";
                body = JSON.stringify(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.imagePipelineArn !== undefined &&
                    input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1UpdateDistributionConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateDistributionConfiguration";
                body = JSON.stringify(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.description !== undefined && input.description !== null && { description: input.description })), (input.distributionConfigurationArn !== undefined &&
                    input.distributionConfigurationArn !== null && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                })), (input.distributions !== undefined &&
                    input.distributions !== null && {
                    distributions: serializeAws_restJson1DistributionList(input.distributions, context),
                })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1UpdateImagePipelineCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateImagePipeline";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.containerRecipeArn !== undefined &&
                    input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.distributionConfigurationArn !== undefined &&
                    input.distributionConfigurationArn !== null && {
                    distributionConfigurationArn: input.distributionConfigurationArn,
                })), (input.enhancedImageMetadataEnabled !== undefined &&
                    input.enhancedImageMetadataEnabled !== null && {
                    enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
                })), (input.imagePipelineArn !== undefined &&
                    input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn })), (input.imageRecipeArn !== undefined &&
                    input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn })), (input.imageTestsConfiguration !== undefined &&
                    input.imageTestsConfiguration !== null && {
                    imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
                })), (input.infrastructureConfigurationArn !== undefined &&
                    input.infrastructureConfigurationArn !== null && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                })), (input.schedule !== undefined &&
                    input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) })), (input.status !== undefined && input.status !== null && { status: input.status })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var serializeAws_restJson1UpdateInfrastructureConfigurationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, resolvedPath, body, _a, hostname, _b, protocol, port;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                headers = {
                    "content-type": "application/json",
                };
                resolvedPath = "/UpdateInfrastructureConfiguration";
                body = JSON.stringify(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ clientToken: (_c = input.clientToken) !== null && _c !== void 0 ? _c : generateIdempotencyToken() }, (input.description !== undefined && input.description !== null && { description: input.description })), (input.infrastructureConfigurationArn !== undefined &&
                    input.infrastructureConfigurationArn !== null && {
                    infrastructureConfigurationArn: input.infrastructureConfigurationArn,
                })), (input.instanceProfileName !== undefined &&
                    input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName })), (input.instanceTypes !== undefined &&
                    input.instanceTypes !== null && {
                    instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
                })), (input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair })), (input.logging !== undefined &&
                    input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) })), (input.resourceTags !== undefined &&
                    input.resourceTags !== null && {
                    resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
                })), (input.securityGroupIds !== undefined &&
                    input.securityGroupIds !== null && {
                    securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
                })), (input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn })), (input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId })), (input.terminateInstanceOnFailure !== undefined &&
                    input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure })));
                return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _d.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
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
export var deserializeAws_restJson1CancelImageCreationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CancelImageCreationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imageBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
                    contents.imageBuildVersionArn = data.imageBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CancelImageCreationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateComponentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateComponentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    componentBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
                    contents.componentBuildVersionArn = data.componentBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateComponentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidRequestException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 12];
                    case "InvalidVersionNumberException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#InvalidVersionNumberException": return [3 /*break*/, 14];
                    case "ResourceInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 18];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "ServiceUnavailableException": return [3 /*break*/, 22];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateContainerRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateContainerRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    containerRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
                    contents.containerRecipeArn = data.containerRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateContainerRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "InvalidVersionNumberException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidVersionNumberException": return [3 /*break*/, 12];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "ResourceInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 18];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "ServiceUnavailableException": return [3 /*break*/, 22];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateDistributionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateDistributionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    distributionConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
                    contents.distributionConfigurationArn = data.distributionConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateDistributionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidRequestException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 12];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "ResourceInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 18];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "ServiceUnavailableException": return [3 /*break*/, 22];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateImageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateImageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imageBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
                    contents.imageBuildVersionArn = data.imageBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateImageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 16];
                    case "ServiceUnavailableException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateImagePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateImagePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imagePipelineArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
                    contents.imagePipelineArn = data.imagePipelineArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateImagePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 16];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 18];
                    case "ServiceUnavailableException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1CreateImageRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateImageRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imageRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
                    contents.imageRecipeArn = data.imageRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateImageRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, parsedBody, message;
    var _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _a = [__assign({}, output)];
                _p = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_p.body = _q.sent(), _p)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "InvalidVersionNumberException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidVersionNumberException": return [3 /*break*/, 12];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException": return [3 /*break*/, 14];
                    case "ResourceInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 18];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 20];
                    case "ServiceUnavailableException": return [3 /*break*/, 22];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 22];
                }
                return [3 /*break*/, 24];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 21:
                response = __assign.apply(void 0, [__assign.apply(void 0, _m.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 22:
                _o = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 23:
                response = __assign.apply(void 0, [__assign.apply(void 0, _o.concat([(_q.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 25];
            case 24:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _q.label = 25;
            case 25:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1CreateInfrastructureConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1CreateInfrastructureConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    infrastructureConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
                    contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1CreateInfrastructureConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 16];
                    case "ServiceQuotaExceededException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException": return [3 /*break*/, 18];
                    case "ServiceUnavailableException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 18:
                _l = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)];
            case 19:
                response = __assign.apply(void 0, [__assign.apply(void 0, _l.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 20:
                _m = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteComponentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteComponentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    componentBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
                    contents.componentBuildVersionArn = data.componentBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteComponentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteContainerRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteContainerRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    containerRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
                    contents.containerRecipeArn = data.containerRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteContainerRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteDistributionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteDistributionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    distributionConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
                    contents.distributionConfigurationArn = data.distributionConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteDistributionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteImageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteImageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
                    contents.imageBuildVersionArn = data.imageBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteImageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteImagePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteImagePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imagePipelineArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
                    contents.imagePipelineArn = data.imagePipelineArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteImagePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteImageRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteImageRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
                    contents.imageRecipeArn = data.imageRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteImageRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1DeleteInfrastructureConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    infrastructureConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
                    contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ResourceDependencyException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ResourceDependencyException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetComponentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetComponentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    component: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.component !== undefined && data.component !== null) {
                    contents.component = deserializeAws_restJson1Component(data.component, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetComponentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetComponentPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetComponentPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.policy !== undefined && data.policy !== null) {
                    contents.policy = data.policy;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetComponentPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetContainerRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetContainerRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    containerRecipe: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.containerRecipe !== undefined && data.containerRecipe !== null) {
                    contents.containerRecipe = deserializeAws_restJson1ContainerRecipe(data.containerRecipe, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetContainerRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetContainerRecipePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetContainerRecipePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.policy !== undefined && data.policy !== null) {
                    contents.policy = data.policy;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetContainerRecipePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetDistributionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetDistributionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    distributionConfiguration: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.distributionConfiguration !== undefined && data.distributionConfiguration !== null) {
                    contents.distributionConfiguration = deserializeAws_restJson1DistributionConfiguration(data.distributionConfiguration, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetDistributionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImageCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImageCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    image: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.image !== undefined && data.image !== null) {
                    contents.image = deserializeAws_restJson1Image(data.image, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImageCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImagePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImagePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imagePipeline: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imagePipeline !== undefined && data.imagePipeline !== null) {
                    contents.imagePipeline = deserializeAws_restJson1ImagePipeline(data.imagePipeline, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImagePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImagePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImagePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.policy !== undefined && data.policy !== null) {
                    contents.policy = data.policy;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImagePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImageRecipeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImageRecipeCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageRecipe: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageRecipe !== undefined && data.imageRecipe !== null) {
                    contents.imageRecipe = deserializeAws_restJson1ImageRecipe(data.imageRecipe, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImageRecipeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetImageRecipePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetImageRecipePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    policy: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.policy !== undefined && data.policy !== null) {
                    contents.policy = data.policy;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetImageRecipePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ForbiddenException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 4];
                    case "InvalidRequestException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1GetInfrastructureConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1GetInfrastructureConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    infrastructureConfiguration: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.infrastructureConfiguration !== undefined && data.infrastructureConfiguration !== null) {
                    contents.infrastructureConfiguration = deserializeAws_restJson1InfrastructureConfiguration(data.infrastructureConfiguration, context);
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1GetInfrastructureConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidRequestException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 8];
                    case "ServiceException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 10];
                    case "ServiceUnavailableException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ImportComponentCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ImportComponentCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    componentBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
                    contents.componentBuildVersionArn = data.componentBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ImportComponentCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidRequestException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 12];
                    case "InvalidVersionNumberException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#InvalidVersionNumberException": return [3 /*break*/, 14];
                    case "ResourceInUseException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 16];
                    case "ServiceException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 18];
                    case "ServiceUnavailableException": return [3 /*break*/, 20];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 20];
                }
                return [3 /*break*/, 22];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_p.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 23];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListComponentBuildVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListComponentBuildVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    componentSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.componentSummaryList !== undefined && data.componentSummaryList !== null) {
                    contents.componentSummaryList = deserializeAws_restJson1ComponentSummaryList(data.componentSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListComponentBuildVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListComponentsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListComponentsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    componentVersionList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.componentVersionList !== undefined && data.componentVersionList !== null) {
                    contents.componentVersionList = deserializeAws_restJson1ComponentVersionList(data.componentVersionList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListComponentsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListContainerRecipesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListContainerRecipesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    containerRecipeSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.containerRecipeSummaryList !== undefined && data.containerRecipeSummaryList !== null) {
                    contents.containerRecipeSummaryList = deserializeAws_restJson1ContainerRecipeSummaryList(data.containerRecipeSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListContainerRecipesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListDistributionConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListDistributionConfigurationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    distributionConfigurationSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.distributionConfigurationSummaryList !== undefined && data.distributionConfigurationSummaryList !== null) {
                    contents.distributionConfigurationSummaryList = deserializeAws_restJson1DistributionConfigurationSummaryList(data.distributionConfigurationSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListDistributionConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListImageBuildVersionsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImageBuildVersionsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
                    contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImageBuildVersionsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListImagePackagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImagePackagesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imagePackageList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imagePackageList !== undefined && data.imagePackageList !== null) {
                    contents.imagePackageList = deserializeAws_restJson1ImagePackageList(data.imagePackageList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImagePackagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListImagePipelineImagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImagePipelineImagesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
                    contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImagePipelineImagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1ListImagePipelinesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImagePipelinesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imagePipelineList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imagePipelineList !== undefined && data.imagePipelineList !== null) {
                    contents.imagePipelineList = deserializeAws_restJson1ImagePipelineList(data.imagePipelineList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImagePipelinesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListImageRecipesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImageRecipesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageRecipeSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageRecipeSummaryList !== undefined && data.imageRecipeSummaryList !== null) {
                    contents.imageRecipeSummaryList = deserializeAws_restJson1ImageRecipeSummaryList(data.imageRecipeSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImageRecipesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListImagesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListImagesCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageVersionList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageVersionList !== undefined && data.imageVersionList !== null) {
                    contents.imageVersionList = deserializeAws_restJson1ImageVersionList(data.imageVersionList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListImagesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1ListInfrastructureConfigurationsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1ListInfrastructureConfigurationsCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    infrastructureConfigurationSummaryList: undefined,
                    nextToken: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.infrastructureConfigurationSummaryList !== undefined &&
                    data.infrastructureConfigurationSummaryList !== null) {
                    contents.infrastructureConfigurationSummaryList = deserializeAws_restJson1InfrastructureConfigurationSummaryList(data.infrastructureConfigurationSummaryList, context);
                }
                if (data.nextToken !== undefined && data.nextToken !== null) {
                    contents.nextToken = data.nextToken;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1ListInfrastructureConfigurationsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ServiceException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 12];
                    case "ServiceUnavailableException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
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
                    case "com.amazonaws.imagebuilder#InvalidParameterException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 6];
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
export var deserializeAws_restJson1PutComponentPolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutComponentPolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    componentArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.componentArn !== undefined && data.componentArn !== null) {
                    contents.componentArn = data.componentArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutComponentPolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutContainerRecipePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutContainerRecipePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    containerRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
                    contents.containerRecipeArn = data.containerRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutContainerRecipePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutImagePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutImagePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageArn !== undefined && data.imageArn !== null) {
                    contents.imageArn = data.imageArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutImagePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1PutImageRecipePolicyCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1PutImageRecipePolicyCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    imageRecipeArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
                    contents.imageRecipeArn = data.imageRecipeArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1PutImageRecipePolicyCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "InvalidParameterValueException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#InvalidParameterValueException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1StartImagePipelineExecutionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1StartImagePipelineExecutionCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imageBuildVersionArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
                    contents.imageBuildVersionArn = data.imageBuildVersionArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1StartImagePipelineExecutionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 16];
                    case "ServiceUnavailableException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#InvalidParameterException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 6];
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
                    case "InvalidParameterException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#InvalidParameterException": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ResourceNotFoundException": return [3 /*break*/, 4];
                    case "ServiceException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 6];
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
export var deserializeAws_restJson1UpdateDistributionConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateDistributionConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    distributionConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
                    contents.distributionConfigurationArn = data.distributionConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateDistributionConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
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
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException": return [3 /*break*/, 10];
                    case "InvalidRequestException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 14];
                    case "ServiceException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 16];
                    case "ServiceUnavailableException": return [3 /*break*/, 18];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 18];
                }
                return [3 /*break*/, 20];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_o.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 21];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
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
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
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
export var deserializeAws_restJson1UpdateImagePipelineCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateImagePipelineCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    imagePipelineArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
                    contents.imagePipelineArn = data.imagePipelineArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateImagePipelineCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_restJson1UpdateInfrastructureConfigurationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode !== 200 && output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError(output, context)];
                }
                contents = {
                    $metadata: deserializeMetadata(output),
                    clientToken: undefined,
                    infrastructureConfigurationArn: undefined,
                    requestId: undefined,
                };
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                if (data.clientToken !== undefined && data.clientToken !== null) {
                    contents.clientToken = data.clientToken;
                }
                if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
                    contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
                }
                if (data.requestId !== undefined && data.requestId !== null) {
                    contents.requestId = data.requestId;
                }
                return [2 /*return*/, Promise.resolve(contents)];
        }
    });
}); };
var deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "com.amazonaws.imagebuilder#CallRateLimitExceededException": return [3 /*break*/, 2];
                    case "ClientException": return [3 /*break*/, 4];
                    case "com.amazonaws.imagebuilder#ClientException": return [3 /*break*/, 4];
                    case "ForbiddenException": return [3 /*break*/, 6];
                    case "com.amazonaws.imagebuilder#ForbiddenException": return [3 /*break*/, 6];
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException": return [3 /*break*/, 8];
                    case "InvalidRequestException": return [3 /*break*/, 10];
                    case "com.amazonaws.imagebuilder#InvalidRequestException": return [3 /*break*/, 10];
                    case "ResourceInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.imagebuilder#ResourceInUseException": return [3 /*break*/, 12];
                    case "ServiceException": return [3 /*break*/, 14];
                    case "com.amazonaws.imagebuilder#ServiceException": return [3 /*break*/, 14];
                    case "ServiceUnavailableException": return [3 /*break*/, 16];
                    case "com.amazonaws.imagebuilder#ServiceUnavailableException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_restJson1CallRateLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "CallRateLimitExceededException",
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
            message: undefined,
        };
        data = parsedOutput.body;
        if (data.message !== undefined && data.message !== null) {
            contents.message = data.message;
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
var deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidPaginationTokenException",
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
var deserializeAws_restJson1InvalidParameterCombinationExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterCombinationException",
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
var deserializeAws_restJson1InvalidParameterValueExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidParameterValueException",
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
var deserializeAws_restJson1InvalidRequestExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidRequestException",
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
var deserializeAws_restJson1InvalidVersionNumberExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "InvalidVersionNumberException",
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
var deserializeAws_restJson1ResourceDependencyExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ResourceDependencyException",
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
var deserializeAws_restJson1ServiceExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceException",
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
var deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var contents, data;
    return __generator(this, function (_a) {
        contents = {
            name: "ServiceQuotaExceededException",
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
var serializeAws_restJson1AccountList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1AmiDistributionConfiguration = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.amiTags !== undefined &&
        input.amiTags !== null && { amiTags: serializeAws_restJson1TagMap(input.amiTags, context) })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.launchPermission !== undefined &&
        input.launchPermission !== null && {
        launchPermission: serializeAws_restJson1LaunchPermissionConfiguration(input.launchPermission, context),
    })), (input.name !== undefined && input.name !== null && { name: input.name })), (input.targetAccountIds !== undefined &&
        input.targetAccountIds !== null && {
        targetAccountIds: serializeAws_restJson1AccountList(input.targetAccountIds, context),
    }));
};
var serializeAws_restJson1ComponentConfiguration = function (input, context) {
    return __assign({}, (input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn }));
};
var serializeAws_restJson1ComponentConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ComponentConfiguration(entry, context);
    });
};
var serializeAws_restJson1ContainerDistributionConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.containerTags !== undefined &&
        input.containerTags !== null && {
        containerTags: serializeAws_restJson1StringList(input.containerTags, context),
    })), (input.description !== undefined && input.description !== null && { description: input.description })), (input.targetRepository !== undefined &&
        input.targetRepository !== null && {
        targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
    }));
};
var serializeAws_restJson1Distribution = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.amiDistributionConfiguration !== undefined &&
        input.amiDistributionConfiguration !== null && {
        amiDistributionConfiguration: serializeAws_restJson1AmiDistributionConfiguration(input.amiDistributionConfiguration, context),
    })), (input.containerDistributionConfiguration !== undefined &&
        input.containerDistributionConfiguration !== null && {
        containerDistributionConfiguration: serializeAws_restJson1ContainerDistributionConfiguration(input.containerDistributionConfiguration, context),
    })), (input.launchTemplateConfigurations !== undefined &&
        input.launchTemplateConfigurations !== null && {
        launchTemplateConfigurations: serializeAws_restJson1LaunchTemplateConfigurationList(input.launchTemplateConfigurations, context),
    })), (input.licenseConfigurationArns !== undefined &&
        input.licenseConfigurationArns !== null && {
        licenseConfigurationArns: serializeAws_restJson1LicenseConfigurationArnList(input.licenseConfigurationArns, context),
    })), (input.region !== undefined && input.region !== null && { region: input.region }));
};
var serializeAws_restJson1DistributionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Distribution(entry, context);
    });
};
var serializeAws_restJson1EbsInstanceBlockDeviceSpecification = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.deleteOnTermination !== undefined &&
        input.deleteOnTermination !== null && { deleteOnTermination: input.deleteOnTermination })), (input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted })), (input.iops !== undefined && input.iops !== null && { iops: input.iops })), (input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId })), (input.snapshotId !== undefined && input.snapshotId !== null && { snapshotId: input.snapshotId })), (input.volumeSize !== undefined && input.volumeSize !== null && { volumeSize: input.volumeSize })), (input.volumeType !== undefined && input.volumeType !== null && { volumeType: input.volumeType }));
};
var serializeAws_restJson1Filter = function (input, context) {
    return __assign(__assign({}, (input.name !== undefined && input.name !== null && { name: input.name })), (input.values !== undefined &&
        input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }));
};
var serializeAws_restJson1FilterList = function (input, context) {
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
var serializeAws_restJson1ImageTestsConfiguration = function (input, context) {
    return __assign(__assign({}, (input.imageTestsEnabled !== undefined &&
        input.imageTestsEnabled !== null && { imageTestsEnabled: input.imageTestsEnabled })), (input.timeoutMinutes !== undefined &&
        input.timeoutMinutes !== null && { timeoutMinutes: input.timeoutMinutes }));
};
var serializeAws_restJson1InstanceBlockDeviceMapping = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName })), (input.ebs !== undefined &&
        input.ebs !== null && { ebs: serializeAws_restJson1EbsInstanceBlockDeviceSpecification(input.ebs, context) })), (input.noDevice !== undefined && input.noDevice !== null && { noDevice: input.noDevice })), (input.virtualName !== undefined && input.virtualName !== null && { virtualName: input.virtualName }));
};
var serializeAws_restJson1InstanceBlockDeviceMappings = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
};
var serializeAws_restJson1InstanceConfiguration = function (input, context) {
    return __assign(__assign({}, (input.blockDeviceMappings !== undefined &&
        input.blockDeviceMappings !== null && {
        blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
    })), (input.image !== undefined && input.image !== null && { image: input.image }));
};
var serializeAws_restJson1InstanceTypeList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1LaunchPermissionConfiguration = function (input, context) {
    return __assign(__assign({}, (input.userGroups !== undefined &&
        input.userGroups !== null && { userGroups: serializeAws_restJson1StringList(input.userGroups, context) })), (input.userIds !== undefined &&
        input.userIds !== null && { userIds: serializeAws_restJson1AccountList(input.userIds, context) }));
};
var serializeAws_restJson1LaunchTemplateConfiguration = function (input, context) {
    return __assign(__assign(__assign({}, (input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId })), (input.launchTemplateId !== undefined &&
        input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId })), (input.setDefaultVersion !== undefined &&
        input.setDefaultVersion !== null && { setDefaultVersion: input.setDefaultVersion }));
};
var serializeAws_restJson1LaunchTemplateConfigurationList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
};
var serializeAws_restJson1LicenseConfigurationArnList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1Logging = function (input, context) {
    return __assign({}, (input.s3Logs !== undefined &&
        input.s3Logs !== null && { s3Logs: serializeAws_restJson1S3Logs(input.s3Logs, context) }));
};
var serializeAws_restJson1OsVersionList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_restJson1ResourceTagMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_restJson1S3Logs = function (input, context) {
    return __assign(__assign({}, (input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName })), (input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }));
};
var serializeAws_restJson1Schedule = function (input, context) {
    return __assign(__assign(__assign({}, (input.pipelineExecutionStartCondition !== undefined &&
        input.pipelineExecutionStartCondition !== null && {
        pipelineExecutionStartCondition: input.pipelineExecutionStartCondition,
    })), (input.scheduleExpression !== undefined &&
        input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression })), (input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }));
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
var serializeAws_restJson1TargetContainerRepository = function (input, context) {
    return __assign(__assign({}, (input.repositoryName !== undefined &&
        input.repositoryName !== null && { repositoryName: input.repositoryName })), (input.service !== undefined && input.service !== null && { service: input.service }));
};
var deserializeAws_restJson1AccountList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Ami = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ImageState(output.state, context)
            : undefined,
    };
};
var deserializeAws_restJson1AmiDistributionConfiguration = function (output, context) {
    return {
        amiTags: output.amiTags !== undefined && output.amiTags !== null
            ? deserializeAws_restJson1TagMap(output.amiTags, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        launchPermission: output.launchPermission !== undefined && output.launchPermission !== null
            ? deserializeAws_restJson1LaunchPermissionConfiguration(output.launchPermission, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        targetAccountIds: output.targetAccountIds !== undefined && output.targetAccountIds !== null
            ? deserializeAws_restJson1AccountList(output.targetAccountIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1AmiList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Ami(entry, context);
    });
};
var deserializeAws_restJson1Component = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        changeDescription: output.changeDescription !== undefined && output.changeDescription !== null
            ? output.changeDescription
            : undefined,
        data: output.data !== undefined && output.data !== null ? output.data : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        supportedOsVersions: output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
            ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ComponentConfiguration = function (output, context) {
    return {
        componentArn: output.componentArn !== undefined && output.componentArn !== null ? output.componentArn : undefined,
    };
};
var deserializeAws_restJson1ComponentConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentConfiguration(entry, context);
    });
};
var deserializeAws_restJson1ComponentSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        changeDescription: output.changeDescription !== undefined && output.changeDescription !== null
            ? output.changeDescription
            : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        supportedOsVersions: output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
            ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ComponentSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentSummary(entry, context);
    });
};
var deserializeAws_restJson1ComponentVersion = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        supportedOsVersions: output.supportedOsVersions !== undefined && output.supportedOsVersions !== null
            ? deserializeAws_restJson1OsVersionList(output.supportedOsVersions, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ComponentVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentVersion(entry, context);
    });
};
var deserializeAws_restJson1Container = function (output, context) {
    return {
        imageUris: output.imageUris !== undefined && output.imageUris !== null
            ? deserializeAws_restJson1StringList(output.imageUris, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
var deserializeAws_restJson1ContainerDistributionConfiguration = function (output, context) {
    return {
        containerTags: output.containerTags !== undefined && output.containerTags !== null
            ? deserializeAws_restJson1StringList(output.containerTags, context)
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        targetRepository: output.targetRepository !== undefined && output.targetRepository !== null
            ? deserializeAws_restJson1TargetContainerRepository(output.targetRepository, context)
            : undefined,
    };
};
var deserializeAws_restJson1ContainerList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Container(entry, context);
    });
};
var deserializeAws_restJson1ContainerRecipe = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        components: output.components !== undefined && output.components !== null
            ? deserializeAws_restJson1ComponentConfigurationList(output.components, context)
            : undefined,
        containerType: output.containerType !== undefined && output.containerType !== null ? output.containerType : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        dockerfileTemplateData: output.dockerfileTemplateData !== undefined && output.dockerfileTemplateData !== null
            ? output.dockerfileTemplateData
            : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        instanceConfiguration: output.instanceConfiguration !== undefined && output.instanceConfiguration !== null
            ? deserializeAws_restJson1InstanceConfiguration(output.instanceConfiguration, context)
            : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        parentImage: output.parentImage !== undefined && output.parentImage !== null ? output.parentImage : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        targetRepository: output.targetRepository !== undefined && output.targetRepository !== null
            ? deserializeAws_restJson1TargetContainerRepository(output.targetRepository, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        workingDirectory: output.workingDirectory !== undefined && output.workingDirectory !== null ? output.workingDirectory : undefined,
    };
};
var deserializeAws_restJson1ContainerRecipeSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerType: output.containerType !== undefined && output.containerType !== null ? output.containerType : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        parentImage: output.parentImage !== undefined && output.parentImage !== null ? output.parentImage : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1ContainerRecipeSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContainerRecipeSummary(entry, context);
    });
};
var deserializeAws_restJson1Distribution = function (output, context) {
    return {
        amiDistributionConfiguration: output.amiDistributionConfiguration !== undefined && output.amiDistributionConfiguration !== null
            ? deserializeAws_restJson1AmiDistributionConfiguration(output.amiDistributionConfiguration, context)
            : undefined,
        containerDistributionConfiguration: output.containerDistributionConfiguration !== undefined && output.containerDistributionConfiguration !== null
            ? deserializeAws_restJson1ContainerDistributionConfiguration(output.containerDistributionConfiguration, context)
            : undefined,
        launchTemplateConfigurations: output.launchTemplateConfigurations !== undefined && output.launchTemplateConfigurations !== null
            ? deserializeAws_restJson1LaunchTemplateConfigurationList(output.launchTemplateConfigurations, context)
            : undefined,
        licenseConfigurationArns: output.licenseConfigurationArns !== undefined && output.licenseConfigurationArns !== null
            ? deserializeAws_restJson1LicenseConfigurationArnList(output.licenseConfigurationArns, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
var deserializeAws_restJson1DistributionConfiguration = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        dateUpdated: output.dateUpdated !== undefined && output.dateUpdated !== null ? output.dateUpdated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        distributions: output.distributions !== undefined && output.distributions !== null
            ? deserializeAws_restJson1DistributionList(output.distributions, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        timeoutMinutes: output.timeoutMinutes !== undefined && output.timeoutMinutes !== null ? output.timeoutMinutes : undefined,
    };
};
var deserializeAws_restJson1DistributionConfigurationSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        dateUpdated: output.dateUpdated !== undefined && output.dateUpdated !== null ? output.dateUpdated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        regions: output.regions !== undefined && output.regions !== null
            ? deserializeAws_restJson1RegionList(output.regions, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1DistributionConfigurationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DistributionConfigurationSummary(entry, context);
    });
};
var deserializeAws_restJson1DistributionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Distribution(entry, context);
    });
};
var deserializeAws_restJson1EbsInstanceBlockDeviceSpecification = function (output, context) {
    return {
        deleteOnTermination: output.deleteOnTermination !== undefined && output.deleteOnTermination !== null
            ? output.deleteOnTermination
            : undefined,
        encrypted: output.encrypted !== undefined && output.encrypted !== null ? output.encrypted : undefined,
        iops: output.iops !== undefined && output.iops !== null ? output.iops : undefined,
        kmsKeyId: output.kmsKeyId !== undefined && output.kmsKeyId !== null ? output.kmsKeyId : undefined,
        snapshotId: output.snapshotId !== undefined && output.snapshotId !== null ? output.snapshotId : undefined,
        volumeSize: output.volumeSize !== undefined && output.volumeSize !== null ? output.volumeSize : undefined,
        volumeType: output.volumeType !== undefined && output.volumeType !== null ? output.volumeType : undefined,
    };
};
var deserializeAws_restJson1Image = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerRecipe: output.containerRecipe !== undefined && output.containerRecipe !== null
            ? deserializeAws_restJson1ContainerRecipe(output.containerRecipe, context)
            : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        distributionConfiguration: output.distributionConfiguration !== undefined && output.distributionConfiguration !== null
            ? deserializeAws_restJson1DistributionConfiguration(output.distributionConfiguration, context)
            : undefined,
        enhancedImageMetadataEnabled: output.enhancedImageMetadataEnabled !== undefined && output.enhancedImageMetadataEnabled !== null
            ? output.enhancedImageMetadataEnabled
            : undefined,
        imageRecipe: output.imageRecipe !== undefined && output.imageRecipe !== null
            ? deserializeAws_restJson1ImageRecipe(output.imageRecipe, context)
            : undefined,
        imageTestsConfiguration: output.imageTestsConfiguration !== undefined && output.imageTestsConfiguration !== null
            ? deserializeAws_restJson1ImageTestsConfiguration(output.imageTestsConfiguration, context)
            : undefined,
        infrastructureConfiguration: output.infrastructureConfiguration !== undefined && output.infrastructureConfiguration !== null
            ? deserializeAws_restJson1InfrastructureConfiguration(output.infrastructureConfiguration, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        osVersion: output.osVersion !== undefined && output.osVersion !== null ? output.osVersion : undefined,
        outputResources: output.outputResources !== undefined && output.outputResources !== null
            ? deserializeAws_restJson1OutputResources(output.outputResources, context)
            : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        sourcePipelineArn: output.sourcePipelineArn !== undefined && output.sourcePipelineArn !== null
            ? output.sourcePipelineArn
            : undefined,
        sourcePipelineName: output.sourcePipelineName !== undefined && output.sourcePipelineName !== null
            ? output.sourcePipelineName
            : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ImageState(output.state, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ImagePackage = function (output, context) {
    return {
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        packageVersion: output.packageVersion !== undefined && output.packageVersion !== null ? output.packageVersion : undefined,
    };
};
var deserializeAws_restJson1ImagePackageList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImagePackage(entry, context);
    });
};
var deserializeAws_restJson1ImagePipeline = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        containerRecipeArn: output.containerRecipeArn !== undefined && output.containerRecipeArn !== null
            ? output.containerRecipeArn
            : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        dateLastRun: output.dateLastRun !== undefined && output.dateLastRun !== null ? output.dateLastRun : undefined,
        dateNextRun: output.dateNextRun !== undefined && output.dateNextRun !== null ? output.dateNextRun : undefined,
        dateUpdated: output.dateUpdated !== undefined && output.dateUpdated !== null ? output.dateUpdated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        distributionConfigurationArn: output.distributionConfigurationArn !== undefined && output.distributionConfigurationArn !== null
            ? output.distributionConfigurationArn
            : undefined,
        enhancedImageMetadataEnabled: output.enhancedImageMetadataEnabled !== undefined && output.enhancedImageMetadataEnabled !== null
            ? output.enhancedImageMetadataEnabled
            : undefined,
        imageRecipeArn: output.imageRecipeArn !== undefined && output.imageRecipeArn !== null ? output.imageRecipeArn : undefined,
        imageTestsConfiguration: output.imageTestsConfiguration !== undefined && output.imageTestsConfiguration !== null
            ? deserializeAws_restJson1ImageTestsConfiguration(output.imageTestsConfiguration, context)
            : undefined,
        infrastructureConfigurationArn: output.infrastructureConfigurationArn !== undefined && output.infrastructureConfigurationArn !== null
            ? output.infrastructureConfigurationArn
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        schedule: output.schedule !== undefined && output.schedule !== null
            ? deserializeAws_restJson1Schedule(output.schedule, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1ImagePipelineList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImagePipeline(entry, context);
    });
};
var deserializeAws_restJson1ImageRecipe = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        blockDeviceMappings: output.blockDeviceMappings !== undefined && output.blockDeviceMappings !== null
            ? deserializeAws_restJson1InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
            : undefined,
        components: output.components !== undefined && output.components !== null
            ? deserializeAws_restJson1ComponentConfigurationList(output.components, context)
            : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        parentImage: output.parentImage !== undefined && output.parentImage !== null ? output.parentImage : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
        workingDirectory: output.workingDirectory !== undefined && output.workingDirectory !== null ? output.workingDirectory : undefined,
    };
};
var deserializeAws_restJson1ImageRecipeSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        parentImage: output.parentImage !== undefined && output.parentImage !== null ? output.parentImage : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1ImageRecipeSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageRecipeSummary(entry, context);
    });
};
var deserializeAws_restJson1ImageState = function (output, context) {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
var deserializeAws_restJson1ImageSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        osVersion: output.osVersion !== undefined && output.osVersion !== null ? output.osVersion : undefined,
        outputResources: output.outputResources !== undefined && output.outputResources !== null
            ? deserializeAws_restJson1OutputResources(output.outputResources, context)
            : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        state: output.state !== undefined && output.state !== null
            ? deserializeAws_restJson1ImageState(output.state, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ImageSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageSummary(entry, context);
    });
};
var deserializeAws_restJson1ImageTestsConfiguration = function (output, context) {
    return {
        imageTestsEnabled: output.imageTestsEnabled !== undefined && output.imageTestsEnabled !== null
            ? output.imageTestsEnabled
            : undefined,
        timeoutMinutes: output.timeoutMinutes !== undefined && output.timeoutMinutes !== null ? output.timeoutMinutes : undefined,
    };
};
var deserializeAws_restJson1ImageVersion = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        osVersion: output.osVersion !== undefined && output.osVersion !== null ? output.osVersion : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
var deserializeAws_restJson1ImageVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageVersion(entry, context);
    });
};
var deserializeAws_restJson1InfrastructureConfiguration = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        dateUpdated: output.dateUpdated !== undefined && output.dateUpdated !== null ? output.dateUpdated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        instanceProfileName: output.instanceProfileName !== undefined && output.instanceProfileName !== null
            ? output.instanceProfileName
            : undefined,
        instanceTypes: output.instanceTypes !== undefined && output.instanceTypes !== null
            ? deserializeAws_restJson1InstanceTypeList(output.instanceTypes, context)
            : undefined,
        keyPair: output.keyPair !== undefined && output.keyPair !== null ? output.keyPair : undefined,
        logging: output.logging !== undefined && output.logging !== null
            ? deserializeAws_restJson1Logging(output.logging, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_restJson1ResourceTagMap(output.resourceTags, context)
            : undefined,
        securityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupIds(output.securityGroupIds, context)
            : undefined,
        snsTopicArn: output.snsTopicArn !== undefined && output.snsTopicArn !== null ? output.snsTopicArn : undefined,
        subnetId: output.subnetId !== undefined && output.subnetId !== null ? output.subnetId : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
        terminateInstanceOnFailure: output.terminateInstanceOnFailure !== undefined && output.terminateInstanceOnFailure !== null
            ? output.terminateInstanceOnFailure
            : undefined,
    };
};
var deserializeAws_restJson1InfrastructureConfigurationSummary = function (output, context) {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        dateCreated: output.dateCreated !== undefined && output.dateCreated !== null ? output.dateCreated : undefined,
        dateUpdated: output.dateUpdated !== undefined && output.dateUpdated !== null ? output.dateUpdated : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        instanceProfileName: output.instanceProfileName !== undefined && output.instanceProfileName !== null
            ? output.instanceProfileName
            : undefined,
        instanceTypes: output.instanceTypes !== undefined && output.instanceTypes !== null
            ? deserializeAws_restJson1InstanceTypeList(output.instanceTypes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        resourceTags: output.resourceTags !== undefined && output.resourceTags !== null
            ? deserializeAws_restJson1ResourceTagMap(output.resourceTags, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagMap(output.tags, context)
            : undefined,
    };
};
var deserializeAws_restJson1InfrastructureConfigurationSummaryList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InfrastructureConfigurationSummary(entry, context);
    });
};
var deserializeAws_restJson1InstanceBlockDeviceMapping = function (output, context) {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        ebs: output.ebs !== undefined && output.ebs !== null
            ? deserializeAws_restJson1EbsInstanceBlockDeviceSpecification(output.ebs, context)
            : undefined,
        noDevice: output.noDevice !== undefined && output.noDevice !== null ? output.noDevice : undefined,
        virtualName: output.virtualName !== undefined && output.virtualName !== null ? output.virtualName : undefined,
    };
};
var deserializeAws_restJson1InstanceBlockDeviceMappings = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
};
var deserializeAws_restJson1InstanceConfiguration = function (output, context) {
    return {
        blockDeviceMappings: output.blockDeviceMappings !== undefined && output.blockDeviceMappings !== null
            ? deserializeAws_restJson1InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
            : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
    };
};
var deserializeAws_restJson1InstanceTypeList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1LaunchPermissionConfiguration = function (output, context) {
    return {
        userGroups: output.userGroups !== undefined && output.userGroups !== null
            ? deserializeAws_restJson1StringList(output.userGroups, context)
            : undefined,
        userIds: output.userIds !== undefined && output.userIds !== null
            ? deserializeAws_restJson1AccountList(output.userIds, context)
            : undefined,
    };
};
var deserializeAws_restJson1LaunchTemplateConfiguration = function (output, context) {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        launchTemplateId: output.launchTemplateId !== undefined && output.launchTemplateId !== null ? output.launchTemplateId : undefined,
        setDefaultVersion: output.setDefaultVersion !== undefined && output.setDefaultVersion !== null
            ? output.setDefaultVersion
            : undefined,
    };
};
var deserializeAws_restJson1LaunchTemplateConfigurationList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
};
var deserializeAws_restJson1LicenseConfigurationArnList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1Logging = function (output, context) {
    return {
        s3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1S3Logs(output.s3Logs, context)
            : undefined,
    };
};
var deserializeAws_restJson1OsVersionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1OutputResources = function (output, context) {
    return {
        amis: output.amis !== undefined && output.amis !== null
            ? deserializeAws_restJson1AmiList(output.amis, context)
            : undefined,
        containers: output.containers !== undefined && output.containers !== null
            ? deserializeAws_restJson1ContainerList(output.containers, context)
            : undefined,
    };
};
var deserializeAws_restJson1RegionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_restJson1ResourceTagMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_restJson1S3Logs = function (output, context) {
    return {
        s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
        s3KeyPrefix: output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null ? output.s3KeyPrefix : undefined,
    };
};
var deserializeAws_restJson1Schedule = function (output, context) {
    return {
        pipelineExecutionStartCondition: output.pipelineExecutionStartCondition !== undefined && output.pipelineExecutionStartCondition !== null
            ? output.pipelineExecutionStartCondition
            : undefined,
        scheduleExpression: output.scheduleExpression !== undefined && output.scheduleExpression !== null
            ? output.scheduleExpression
            : undefined,
        timezone: output.timezone !== undefined && output.timezone !== null ? output.timezone : undefined,
    };
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
var deserializeAws_restJson1TargetContainerRepository = function (output, context) {
    return {
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
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