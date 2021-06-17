"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1CancelImageCreationCommand = exports.serializeAws_restJson1UpdateInfrastructureConfigurationCommand = exports.serializeAws_restJson1UpdateImagePipelineCommand = exports.serializeAws_restJson1UpdateDistributionConfigurationCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartImagePipelineExecutionCommand = exports.serializeAws_restJson1PutImageRecipePolicyCommand = exports.serializeAws_restJson1PutImagePolicyCommand = exports.serializeAws_restJson1PutContainerRecipePolicyCommand = exports.serializeAws_restJson1PutComponentPolicyCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListInfrastructureConfigurationsCommand = exports.serializeAws_restJson1ListImagesCommand = exports.serializeAws_restJson1ListImageRecipesCommand = exports.serializeAws_restJson1ListImagePipelinesCommand = exports.serializeAws_restJson1ListImagePipelineImagesCommand = exports.serializeAws_restJson1ListImagePackagesCommand = exports.serializeAws_restJson1ListImageBuildVersionsCommand = exports.serializeAws_restJson1ListDistributionConfigurationsCommand = exports.serializeAws_restJson1ListContainerRecipesCommand = exports.serializeAws_restJson1ListComponentsCommand = exports.serializeAws_restJson1ListComponentBuildVersionsCommand = exports.serializeAws_restJson1ImportComponentCommand = exports.serializeAws_restJson1GetInfrastructureConfigurationCommand = exports.serializeAws_restJson1GetImageRecipePolicyCommand = exports.serializeAws_restJson1GetImageRecipeCommand = exports.serializeAws_restJson1GetImagePolicyCommand = exports.serializeAws_restJson1GetImagePipelineCommand = exports.serializeAws_restJson1GetImageCommand = exports.serializeAws_restJson1GetDistributionConfigurationCommand = exports.serializeAws_restJson1GetContainerRecipePolicyCommand = exports.serializeAws_restJson1GetContainerRecipeCommand = exports.serializeAws_restJson1GetComponentPolicyCommand = exports.serializeAws_restJson1GetComponentCommand = exports.serializeAws_restJson1DeleteInfrastructureConfigurationCommand = exports.serializeAws_restJson1DeleteImageRecipeCommand = exports.serializeAws_restJson1DeleteImagePipelineCommand = exports.serializeAws_restJson1DeleteImageCommand = exports.serializeAws_restJson1DeleteDistributionConfigurationCommand = exports.serializeAws_restJson1DeleteContainerRecipeCommand = exports.serializeAws_restJson1DeleteComponentCommand = exports.serializeAws_restJson1CreateInfrastructureConfigurationCommand = exports.serializeAws_restJson1CreateImageRecipeCommand = exports.serializeAws_restJson1CreateImagePipelineCommand = exports.serializeAws_restJson1CreateImageCommand = exports.serializeAws_restJson1CreateDistributionConfigurationCommand = exports.serializeAws_restJson1CreateContainerRecipeCommand = exports.serializeAws_restJson1CreateComponentCommand = exports.serializeAws_restJson1CancelImageCreationCommand = void 0;
exports.deserializeAws_restJson1UpdateInfrastructureConfigurationCommand = exports.deserializeAws_restJson1UpdateImagePipelineCommand = exports.deserializeAws_restJson1UpdateDistributionConfigurationCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartImagePipelineExecutionCommand = exports.deserializeAws_restJson1PutImageRecipePolicyCommand = exports.deserializeAws_restJson1PutImagePolicyCommand = exports.deserializeAws_restJson1PutContainerRecipePolicyCommand = exports.deserializeAws_restJson1PutComponentPolicyCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListInfrastructureConfigurationsCommand = exports.deserializeAws_restJson1ListImagesCommand = exports.deserializeAws_restJson1ListImageRecipesCommand = exports.deserializeAws_restJson1ListImagePipelinesCommand = exports.deserializeAws_restJson1ListImagePipelineImagesCommand = exports.deserializeAws_restJson1ListImagePackagesCommand = exports.deserializeAws_restJson1ListImageBuildVersionsCommand = exports.deserializeAws_restJson1ListDistributionConfigurationsCommand = exports.deserializeAws_restJson1ListContainerRecipesCommand = exports.deserializeAws_restJson1ListComponentsCommand = exports.deserializeAws_restJson1ListComponentBuildVersionsCommand = exports.deserializeAws_restJson1ImportComponentCommand = exports.deserializeAws_restJson1GetInfrastructureConfigurationCommand = exports.deserializeAws_restJson1GetImageRecipePolicyCommand = exports.deserializeAws_restJson1GetImageRecipeCommand = exports.deserializeAws_restJson1GetImagePolicyCommand = exports.deserializeAws_restJson1GetImagePipelineCommand = exports.deserializeAws_restJson1GetImageCommand = exports.deserializeAws_restJson1GetDistributionConfigurationCommand = exports.deserializeAws_restJson1GetContainerRecipePolicyCommand = exports.deserializeAws_restJson1GetContainerRecipeCommand = exports.deserializeAws_restJson1GetComponentPolicyCommand = exports.deserializeAws_restJson1GetComponentCommand = exports.deserializeAws_restJson1DeleteInfrastructureConfigurationCommand = exports.deserializeAws_restJson1DeleteImageRecipeCommand = exports.deserializeAws_restJson1DeleteImagePipelineCommand = exports.deserializeAws_restJson1DeleteImageCommand = exports.deserializeAws_restJson1DeleteDistributionConfigurationCommand = exports.deserializeAws_restJson1DeleteContainerRecipeCommand = exports.deserializeAws_restJson1DeleteComponentCommand = exports.deserializeAws_restJson1CreateInfrastructureConfigurationCommand = exports.deserializeAws_restJson1CreateImageRecipeCommand = exports.deserializeAws_restJson1CreateImagePipelineCommand = exports.deserializeAws_restJson1CreateImageCommand = exports.deserializeAws_restJson1CreateDistributionConfigurationCommand = exports.deserializeAws_restJson1CreateContainerRecipeCommand = exports.deserializeAws_restJson1CreateComponentCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CancelImageCreationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CancelImageCreation";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.imageBuildVersionArn !== undefined &&
            input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn }),
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
exports.serializeAws_restJson1CancelImageCreationCommand = serializeAws_restJson1CancelImageCreationCommand;
const serializeAws_restJson1CreateComponentCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateComponent";
    let body;
    body = JSON.stringify({
        ...(input.changeDescription !== undefined &&
            input.changeDescription !== null && { changeDescription: input.changeDescription }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.data !== undefined && input.data !== null && { data: input.data }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
        ...(input.semanticVersion !== undefined &&
            input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
        ...(input.supportedOsVersions !== undefined &&
            input.supportedOsVersions !== null && {
            supportedOsVersions: serializeAws_restJson1OsVersionList(input.supportedOsVersions, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
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
exports.serializeAws_restJson1CreateComponentCommand = serializeAws_restJson1CreateComponentCommand;
const serializeAws_restJson1CreateContainerRecipeCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateContainerRecipe";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.components !== undefined &&
            input.components !== null && {
            components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
        }),
        ...(input.containerType !== undefined && input.containerType !== null && { containerType: input.containerType }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.dockerfileTemplateData !== undefined &&
            input.dockerfileTemplateData !== null && { dockerfileTemplateData: input.dockerfileTemplateData }),
        ...(input.dockerfileTemplateUri !== undefined &&
            input.dockerfileTemplateUri !== null && { dockerfileTemplateUri: input.dockerfileTemplateUri }),
        ...(input.imageOsVersionOverride !== undefined &&
            input.imageOsVersionOverride !== null && { imageOsVersionOverride: input.imageOsVersionOverride }),
        ...(input.instanceConfiguration !== undefined &&
            input.instanceConfiguration !== null && {
            instanceConfiguration: serializeAws_restJson1InstanceConfiguration(input.instanceConfiguration, context),
        }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage }),
        ...(input.platformOverride !== undefined &&
            input.platformOverride !== null && { platformOverride: input.platformOverride }),
        ...(input.semanticVersion !== undefined &&
            input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.targetRepository !== undefined &&
            input.targetRepository !== null && {
            targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
        }),
        ...(input.workingDirectory !== undefined &&
            input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
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
exports.serializeAws_restJson1CreateContainerRecipeCommand = serializeAws_restJson1CreateContainerRecipeCommand;
const serializeAws_restJson1CreateDistributionConfigurationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateDistributionConfiguration";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.distributions !== undefined &&
            input.distributions !== null && {
            distributions: serializeAws_restJson1DistributionList(input.distributions, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDistributionConfigurationCommand = serializeAws_restJson1CreateDistributionConfigurationCommand;
const serializeAws_restJson1CreateImageCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateImage";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.containerRecipeArn !== undefined &&
            input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
        ...(input.distributionConfigurationArn !== undefined &&
            input.distributionConfigurationArn !== null && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
        ...(input.enhancedImageMetadataEnabled !== undefined &&
            input.enhancedImageMetadataEnabled !== null && {
            enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
        }),
        ...(input.imageRecipeArn !== undefined &&
            input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
        ...(input.imageTestsConfiguration !== undefined &&
            input.imageTestsConfiguration !== null && {
            imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
        }),
        ...(input.infrastructureConfigurationArn !== undefined &&
            input.infrastructureConfigurationArn !== null && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateImageCommand = serializeAws_restJson1CreateImageCommand;
const serializeAws_restJson1CreateImagePipelineCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateImagePipeline";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.containerRecipeArn !== undefined &&
            input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.distributionConfigurationArn !== undefined &&
            input.distributionConfigurationArn !== null && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
        ...(input.enhancedImageMetadataEnabled !== undefined &&
            input.enhancedImageMetadataEnabled !== null && {
            enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
        }),
        ...(input.imageRecipeArn !== undefined &&
            input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
        ...(input.imageTestsConfiguration !== undefined &&
            input.imageTestsConfiguration !== null && {
            imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
        }),
        ...(input.infrastructureConfigurationArn !== undefined &&
            input.infrastructureConfigurationArn !== null && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.schedule !== undefined &&
            input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateImagePipelineCommand = serializeAws_restJson1CreateImagePipelineCommand;
const serializeAws_restJson1CreateImageRecipeCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateImageRecipe";
    let body;
    body = JSON.stringify({
        ...(input.blockDeviceMappings !== undefined &&
            input.blockDeviceMappings !== null && {
            blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
        }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.components !== undefined &&
            input.components !== null && {
            components: serializeAws_restJson1ComponentConfigurationList(input.components, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.parentImage !== undefined && input.parentImage !== null && { parentImage: input.parentImage }),
        ...(input.semanticVersion !== undefined &&
            input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.workingDirectory !== undefined &&
            input.workingDirectory !== null && { workingDirectory: input.workingDirectory }),
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
exports.serializeAws_restJson1CreateImageRecipeCommand = serializeAws_restJson1CreateImageRecipeCommand;
const serializeAws_restJson1CreateInfrastructureConfigurationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/CreateInfrastructureConfiguration";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.instanceProfileName !== undefined &&
            input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName }),
        ...(input.instanceTypes !== undefined &&
            input.instanceTypes !== null && {
            instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
        }),
        ...(input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair }),
        ...(input.logging !== undefined &&
            input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.resourceTags !== undefined &&
            input.resourceTags !== null && {
            resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
        }),
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
        }),
        ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
        ...(input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.terminateInstanceOnFailure !== undefined &&
            input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
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
exports.serializeAws_restJson1CreateInfrastructureConfigurationCommand = serializeAws_restJson1CreateInfrastructureConfigurationCommand;
const serializeAws_restJson1DeleteComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteComponent";
    const query = {
        ...(input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }),
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
exports.serializeAws_restJson1DeleteComponentCommand = serializeAws_restJson1DeleteComponentCommand;
const serializeAws_restJson1DeleteContainerRecipeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteContainerRecipe";
    const query = {
        ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
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
exports.serializeAws_restJson1DeleteContainerRecipeCommand = serializeAws_restJson1DeleteContainerRecipeCommand;
const serializeAws_restJson1DeleteDistributionConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteDistributionConfiguration";
    const query = {
        ...(input.distributionConfigurationArn !== undefined && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
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
exports.serializeAws_restJson1DeleteDistributionConfigurationCommand = serializeAws_restJson1DeleteDistributionConfigurationCommand;
const serializeAws_restJson1DeleteImageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteImage";
    const query = {
        ...(input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }),
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
exports.serializeAws_restJson1DeleteImageCommand = serializeAws_restJson1DeleteImageCommand;
const serializeAws_restJson1DeleteImagePipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteImagePipeline";
    const query = {
        ...(input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }),
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
exports.serializeAws_restJson1DeleteImagePipelineCommand = serializeAws_restJson1DeleteImagePipelineCommand;
const serializeAws_restJson1DeleteImageRecipeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteImageRecipe";
    const query = {
        ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
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
exports.serializeAws_restJson1DeleteImageRecipeCommand = serializeAws_restJson1DeleteImageRecipeCommand;
const serializeAws_restJson1DeleteInfrastructureConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/DeleteInfrastructureConfiguration";
    const query = {
        ...(input.infrastructureConfigurationArn !== undefined && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
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
exports.serializeAws_restJson1DeleteInfrastructureConfigurationCommand = serializeAws_restJson1DeleteInfrastructureConfigurationCommand;
const serializeAws_restJson1GetComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetComponent";
    const query = {
        ...(input.componentBuildVersionArn !== undefined && { componentBuildVersionArn: input.componentBuildVersionArn }),
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
exports.serializeAws_restJson1GetComponentCommand = serializeAws_restJson1GetComponentCommand;
const serializeAws_restJson1GetComponentPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetComponentPolicy";
    const query = {
        ...(input.componentArn !== undefined && { componentArn: input.componentArn }),
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
exports.serializeAws_restJson1GetComponentPolicyCommand = serializeAws_restJson1GetComponentPolicyCommand;
const serializeAws_restJson1GetContainerRecipeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetContainerRecipe";
    const query = {
        ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
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
exports.serializeAws_restJson1GetContainerRecipeCommand = serializeAws_restJson1GetContainerRecipeCommand;
const serializeAws_restJson1GetContainerRecipePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetContainerRecipePolicy";
    const query = {
        ...(input.containerRecipeArn !== undefined && { containerRecipeArn: input.containerRecipeArn }),
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
exports.serializeAws_restJson1GetContainerRecipePolicyCommand = serializeAws_restJson1GetContainerRecipePolicyCommand;
const serializeAws_restJson1GetDistributionConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetDistributionConfiguration";
    const query = {
        ...(input.distributionConfigurationArn !== undefined && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
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
exports.serializeAws_restJson1GetDistributionConfigurationCommand = serializeAws_restJson1GetDistributionConfigurationCommand;
const serializeAws_restJson1GetImageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetImage";
    const query = {
        ...(input.imageBuildVersionArn !== undefined && { imageBuildVersionArn: input.imageBuildVersionArn }),
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
exports.serializeAws_restJson1GetImageCommand = serializeAws_restJson1GetImageCommand;
const serializeAws_restJson1GetImagePipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetImagePipeline";
    const query = {
        ...(input.imagePipelineArn !== undefined && { imagePipelineArn: input.imagePipelineArn }),
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
exports.serializeAws_restJson1GetImagePipelineCommand = serializeAws_restJson1GetImagePipelineCommand;
const serializeAws_restJson1GetImagePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetImagePolicy";
    const query = {
        ...(input.imageArn !== undefined && { imageArn: input.imageArn }),
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
exports.serializeAws_restJson1GetImagePolicyCommand = serializeAws_restJson1GetImagePolicyCommand;
const serializeAws_restJson1GetImageRecipeCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetImageRecipe";
    const query = {
        ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
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
exports.serializeAws_restJson1GetImageRecipeCommand = serializeAws_restJson1GetImageRecipeCommand;
const serializeAws_restJson1GetImageRecipePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetImageRecipePolicy";
    const query = {
        ...(input.imageRecipeArn !== undefined && { imageRecipeArn: input.imageRecipeArn }),
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
exports.serializeAws_restJson1GetImageRecipePolicyCommand = serializeAws_restJson1GetImageRecipePolicyCommand;
const serializeAws_restJson1GetInfrastructureConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/GetInfrastructureConfiguration";
    const query = {
        ...(input.infrastructureConfigurationArn !== undefined && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
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
exports.serializeAws_restJson1GetInfrastructureConfigurationCommand = serializeAws_restJson1GetInfrastructureConfigurationCommand;
const serializeAws_restJson1ImportComponentCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ImportComponent";
    let body;
    body = JSON.stringify({
        ...(input.changeDescription !== undefined &&
            input.changeDescription !== null && { changeDescription: input.changeDescription }),
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.data !== undefined && input.data !== null && { data: input.data }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.format !== undefined && input.format !== null && { format: input.format }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
        ...(input.semanticVersion !== undefined &&
            input.semanticVersion !== null && { semanticVersion: input.semanticVersion }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
        ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
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
exports.serializeAws_restJson1ImportComponentCommand = serializeAws_restJson1ImportComponentCommand;
const serializeAws_restJson1ListComponentBuildVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListComponentBuildVersions";
    let body;
    body = JSON.stringify({
        ...(input.componentVersionArn !== undefined &&
            input.componentVersionArn !== null && { componentVersionArn: input.componentVersionArn }),
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
exports.serializeAws_restJson1ListComponentBuildVersionsCommand = serializeAws_restJson1ListComponentBuildVersionsCommand;
const serializeAws_restJson1ListComponentsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListComponents";
    let body;
    body = JSON.stringify({
        ...(input.byName !== undefined && input.byName !== null && { byName: input.byName }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
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
exports.serializeAws_restJson1ListComponentsCommand = serializeAws_restJson1ListComponentsCommand;
const serializeAws_restJson1ListContainerRecipesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListContainerRecipes";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
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
exports.serializeAws_restJson1ListContainerRecipesCommand = serializeAws_restJson1ListContainerRecipesCommand;
const serializeAws_restJson1ListDistributionConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListDistributionConfigurations";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
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
exports.serializeAws_restJson1ListDistributionConfigurationsCommand = serializeAws_restJson1ListDistributionConfigurationsCommand;
const serializeAws_restJson1ListImageBuildVersionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImageBuildVersions";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.imageVersionArn !== undefined &&
            input.imageVersionArn !== null && { imageVersionArn: input.imageVersionArn }),
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
exports.serializeAws_restJson1ListImageBuildVersionsCommand = serializeAws_restJson1ListImageBuildVersionsCommand;
const serializeAws_restJson1ListImagePackagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImagePackages";
    let body;
    body = JSON.stringify({
        ...(input.imageBuildVersionArn !== undefined &&
            input.imageBuildVersionArn !== null && { imageBuildVersionArn: input.imageBuildVersionArn }),
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
exports.serializeAws_restJson1ListImagePackagesCommand = serializeAws_restJson1ListImagePackagesCommand;
const serializeAws_restJson1ListImagePipelineImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImagePipelineImages";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.imagePipelineArn !== undefined &&
            input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
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
exports.serializeAws_restJson1ListImagePipelineImagesCommand = serializeAws_restJson1ListImagePipelineImagesCommand;
const serializeAws_restJson1ListImagePipelinesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImagePipelines";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
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
exports.serializeAws_restJson1ListImagePipelinesCommand = serializeAws_restJson1ListImagePipelinesCommand;
const serializeAws_restJson1ListImageRecipesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImageRecipes";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
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
exports.serializeAws_restJson1ListImageRecipesCommand = serializeAws_restJson1ListImageRecipesCommand;
const serializeAws_restJson1ListImagesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListImages";
    let body;
    body = JSON.stringify({
        ...(input.byName !== undefined && input.byName !== null && { byName: input.byName }),
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
        ...(input.includeDeprecated !== undefined &&
            input.includeDeprecated !== null && { includeDeprecated: input.includeDeprecated }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.owner !== undefined && input.owner !== null && { owner: input.owner }),
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
exports.serializeAws_restJson1ListImagesCommand = serializeAws_restJson1ListImagesCommand;
const serializeAws_restJson1ListInfrastructureConfigurationsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/ListInfrastructureConfigurations";
    let body;
    body = JSON.stringify({
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1FilterList(input.filters, context) }),
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
exports.serializeAws_restJson1ListInfrastructureConfigurationsCommand = serializeAws_restJson1ListInfrastructureConfigurationsCommand;
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
const serializeAws_restJson1PutComponentPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutComponentPolicy";
    let body;
    body = JSON.stringify({
        ...(input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn }),
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
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
exports.serializeAws_restJson1PutComponentPolicyCommand = serializeAws_restJson1PutComponentPolicyCommand;
const serializeAws_restJson1PutContainerRecipePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutContainerRecipePolicy";
    let body;
    body = JSON.stringify({
        ...(input.containerRecipeArn !== undefined &&
            input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
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
exports.serializeAws_restJson1PutContainerRecipePolicyCommand = serializeAws_restJson1PutContainerRecipePolicyCommand;
const serializeAws_restJson1PutImagePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutImagePolicy";
    let body;
    body = JSON.stringify({
        ...(input.imageArn !== undefined && input.imageArn !== null && { imageArn: input.imageArn }),
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
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
exports.serializeAws_restJson1PutImagePolicyCommand = serializeAws_restJson1PutImagePolicyCommand;
const serializeAws_restJson1PutImageRecipePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/PutImageRecipePolicy";
    let body;
    body = JSON.stringify({
        ...(input.imageRecipeArn !== undefined &&
            input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
        ...(input.policy !== undefined && input.policy !== null && { policy: input.policy }),
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
exports.serializeAws_restJson1PutImageRecipePolicyCommand = serializeAws_restJson1PutImageRecipePolicyCommand;
const serializeAws_restJson1StartImagePipelineExecutionCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/StartImagePipelineExecution";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.imagePipelineArn !== undefined &&
            input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
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
exports.serializeAws_restJson1StartImagePipelineExecutionCommand = serializeAws_restJson1StartImagePipelineExecutionCommand;
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
const serializeAws_restJson1UpdateDistributionConfigurationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateDistributionConfiguration";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.distributionConfigurationArn !== undefined &&
            input.distributionConfigurationArn !== null && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
        ...(input.distributions !== undefined &&
            input.distributions !== null && {
            distributions: serializeAws_restJson1DistributionList(input.distributions, context),
        }),
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
exports.serializeAws_restJson1UpdateDistributionConfigurationCommand = serializeAws_restJson1UpdateDistributionConfigurationCommand;
const serializeAws_restJson1UpdateImagePipelineCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateImagePipeline";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.containerRecipeArn !== undefined &&
            input.containerRecipeArn !== null && { containerRecipeArn: input.containerRecipeArn }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.distributionConfigurationArn !== undefined &&
            input.distributionConfigurationArn !== null && {
            distributionConfigurationArn: input.distributionConfigurationArn,
        }),
        ...(input.enhancedImageMetadataEnabled !== undefined &&
            input.enhancedImageMetadataEnabled !== null && {
            enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
        }),
        ...(input.imagePipelineArn !== undefined &&
            input.imagePipelineArn !== null && { imagePipelineArn: input.imagePipelineArn }),
        ...(input.imageRecipeArn !== undefined &&
            input.imageRecipeArn !== null && { imageRecipeArn: input.imageRecipeArn }),
        ...(input.imageTestsConfiguration !== undefined &&
            input.imageTestsConfiguration !== null && {
            imageTestsConfiguration: serializeAws_restJson1ImageTestsConfiguration(input.imageTestsConfiguration, context),
        }),
        ...(input.infrastructureConfigurationArn !== undefined &&
            input.infrastructureConfigurationArn !== null && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
        ...(input.schedule !== undefined &&
            input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
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
exports.serializeAws_restJson1UpdateImagePipelineCommand = serializeAws_restJson1UpdateImagePipelineCommand;
const serializeAws_restJson1UpdateInfrastructureConfigurationCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/UpdateInfrastructureConfiguration";
    let body;
    body = JSON.stringify({
        clientToken: (_a = input.clientToken) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.infrastructureConfigurationArn !== undefined &&
            input.infrastructureConfigurationArn !== null && {
            infrastructureConfigurationArn: input.infrastructureConfigurationArn,
        }),
        ...(input.instanceProfileName !== undefined &&
            input.instanceProfileName !== null && { instanceProfileName: input.instanceProfileName }),
        ...(input.instanceTypes !== undefined &&
            input.instanceTypes !== null && {
            instanceTypes: serializeAws_restJson1InstanceTypeList(input.instanceTypes, context),
        }),
        ...(input.keyPair !== undefined && input.keyPair !== null && { keyPair: input.keyPair }),
        ...(input.logging !== undefined &&
            input.logging !== null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
        ...(input.resourceTags !== undefined &&
            input.resourceTags !== null && {
            resourceTags: serializeAws_restJson1ResourceTagMap(input.resourceTags, context),
        }),
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1SecurityGroupIds(input.securityGroupIds, context),
        }),
        ...(input.snsTopicArn !== undefined && input.snsTopicArn !== null && { snsTopicArn: input.snsTopicArn }),
        ...(input.subnetId !== undefined && input.subnetId !== null && { subnetId: input.subnetId }),
        ...(input.terminateInstanceOnFailure !== undefined &&
            input.terminateInstanceOnFailure !== null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
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
exports.serializeAws_restJson1UpdateInfrastructureConfigurationCommand = serializeAws_restJson1UpdateInfrastructureConfigurationCommand;
const deserializeAws_restJson1CancelImageCreationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelImageCreationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imageBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
        contents.imageBuildVersionArn = data.imageBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelImageCreationCommand = deserializeAws_restJson1CancelImageCreationCommand;
const deserializeAws_restJson1CancelImageCreationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        componentBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
        contents.componentBuildVersionArn = data.componentBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateComponentCommand = deserializeAws_restJson1CreateComponentCommand;
const deserializeAws_restJson1CreateComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVersionNumberException":
        case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
            response = {
                ...(await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateContainerRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateContainerRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        containerRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
        contents.containerRecipeArn = data.containerRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateContainerRecipeCommand = deserializeAws_restJson1CreateContainerRecipeCommand;
const deserializeAws_restJson1CreateContainerRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVersionNumberException":
        case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
            response = {
                ...(await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateDistributionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDistributionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        distributionConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
        contents.distributionConfigurationArn = data.distributionConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDistributionConfigurationCommand = deserializeAws_restJson1CreateDistributionConfigurationCommand;
const deserializeAws_restJson1CreateDistributionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imageBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
        contents.imageBuildVersionArn = data.imageBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateImageCommand = deserializeAws_restJson1CreateImageCommand;
const deserializeAws_restJson1CreateImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateImagePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateImagePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imagePipelineArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
        contents.imagePipelineArn = data.imagePipelineArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateImagePipelineCommand = deserializeAws_restJson1CreateImagePipelineCommand;
const deserializeAws_restJson1CreateImagePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateImageRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateImageRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imageRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
        contents.imageRecipeArn = data.imageRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateImageRecipeCommand = deserializeAws_restJson1CreateImageRecipeCommand;
const deserializeAws_restJson1CreateImageRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVersionNumberException":
        case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
            response = {
                ...(await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CreateInfrastructureConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateInfrastructureConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        infrastructureConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
        contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateInfrastructureConfigurationCommand = deserializeAws_restJson1CreateInfrastructureConfigurationCommand;
const deserializeAws_restJson1CreateInfrastructureConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        componentBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
        contents.componentBuildVersionArn = data.componentBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteComponentCommand = deserializeAws_restJson1DeleteComponentCommand;
const deserializeAws_restJson1DeleteComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteContainerRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteContainerRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        containerRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
        contents.containerRecipeArn = data.containerRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteContainerRecipeCommand = deserializeAws_restJson1DeleteContainerRecipeCommand;
const deserializeAws_restJson1DeleteContainerRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteDistributionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDistributionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        distributionConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
        contents.distributionConfigurationArn = data.distributionConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDistributionConfigurationCommand = deserializeAws_restJson1DeleteDistributionConfigurationCommand;
const deserializeAws_restJson1DeleteDistributionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
        contents.imageBuildVersionArn = data.imageBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteImageCommand = deserializeAws_restJson1DeleteImageCommand;
const deserializeAws_restJson1DeleteImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteImagePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteImagePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imagePipelineArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
        contents.imagePipelineArn = data.imagePipelineArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteImagePipelineCommand = deserializeAws_restJson1DeleteImagePipelineCommand;
const deserializeAws_restJson1DeleteImagePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteImageRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteImageRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
        contents.imageRecipeArn = data.imageRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteImageRecipeCommand = deserializeAws_restJson1DeleteImageRecipeCommand;
const deserializeAws_restJson1DeleteImageRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteInfrastructureConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        infrastructureConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
        contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteInfrastructureConfigurationCommand = deserializeAws_restJson1DeleteInfrastructureConfigurationCommand;
const deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceDependencyException":
        case "com.amazonaws.imagebuilder#ResourceDependencyException":
            response = {
                ...(await deserializeAws_restJson1ResourceDependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        component: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.component !== undefined && data.component !== null) {
        contents.component = deserializeAws_restJson1Component(data.component, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetComponentCommand = deserializeAws_restJson1GetComponentCommand;
const deserializeAws_restJson1GetComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetComponentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetComponentPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetComponentPolicyCommand = deserializeAws_restJson1GetComponentPolicyCommand;
const deserializeAws_restJson1GetComponentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetContainerRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetContainerRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        containerRecipe: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.containerRecipe !== undefined && data.containerRecipe !== null) {
        contents.containerRecipe = deserializeAws_restJson1ContainerRecipe(data.containerRecipe, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetContainerRecipeCommand = deserializeAws_restJson1GetContainerRecipeCommand;
const deserializeAws_restJson1GetContainerRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetContainerRecipePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetContainerRecipePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetContainerRecipePolicyCommand = deserializeAws_restJson1GetContainerRecipePolicyCommand;
const deserializeAws_restJson1GetContainerRecipePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetDistributionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDistributionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        distributionConfiguration: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.distributionConfiguration !== undefined && data.distributionConfiguration !== null) {
        contents.distributionConfiguration = deserializeAws_restJson1DistributionConfiguration(data.distributionConfiguration, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDistributionConfigurationCommand = deserializeAws_restJson1GetDistributionConfigurationCommand;
const deserializeAws_restJson1GetDistributionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        image: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.image !== undefined && data.image !== null) {
        contents.image = deserializeAws_restJson1Image(data.image, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImageCommand = deserializeAws_restJson1GetImageCommand;
const deserializeAws_restJson1GetImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetImagePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImagePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imagePipeline: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imagePipeline !== undefined && data.imagePipeline !== null) {
        contents.imagePipeline = deserializeAws_restJson1ImagePipeline(data.imagePipeline, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImagePipelineCommand = deserializeAws_restJson1GetImagePipelineCommand;
const deserializeAws_restJson1GetImagePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetImagePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImagePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImagePolicyCommand = deserializeAws_restJson1GetImagePolicyCommand;
const deserializeAws_restJson1GetImagePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetImageRecipeCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImageRecipeCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageRecipe: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageRecipe !== undefined && data.imageRecipe !== null) {
        contents.imageRecipe = deserializeAws_restJson1ImageRecipe(data.imageRecipe, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImageRecipeCommand = deserializeAws_restJson1GetImageRecipeCommand;
const deserializeAws_restJson1GetImageRecipeCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetImageRecipePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetImageRecipePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        policy: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.policy !== undefined && data.policy !== null) {
        contents.policy = data.policy;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetImageRecipePolicyCommand = deserializeAws_restJson1GetImageRecipePolicyCommand;
const deserializeAws_restJson1GetImageRecipePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1GetInfrastructureConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetInfrastructureConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        infrastructureConfiguration: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.infrastructureConfiguration !== undefined && data.infrastructureConfiguration !== null) {
        contents.infrastructureConfiguration = deserializeAws_restJson1InfrastructureConfiguration(data.infrastructureConfiguration, context);
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetInfrastructureConfigurationCommand = deserializeAws_restJson1GetInfrastructureConfigurationCommand;
const deserializeAws_restJson1GetInfrastructureConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ImportComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ImportComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        componentBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.componentBuildVersionArn !== undefined && data.componentBuildVersionArn !== null) {
        contents.componentBuildVersionArn = data.componentBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportComponentCommand = deserializeAws_restJson1ImportComponentCommand;
const deserializeAws_restJson1ImportComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidVersionNumberException":
        case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
            response = {
                ...(await deserializeAws_restJson1InvalidVersionNumberExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListComponentBuildVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListComponentBuildVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        componentSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.componentSummaryList !== undefined && data.componentSummaryList !== null) {
        contents.componentSummaryList = deserializeAws_restJson1ComponentSummaryList(data.componentSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListComponentBuildVersionsCommand = deserializeAws_restJson1ListComponentBuildVersionsCommand;
const deserializeAws_restJson1ListComponentBuildVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListComponentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListComponentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        componentVersionList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.componentVersionList !== undefined && data.componentVersionList !== null) {
        contents.componentVersionList = deserializeAws_restJson1ComponentVersionList(data.componentVersionList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListComponentsCommand = deserializeAws_restJson1ListComponentsCommand;
const deserializeAws_restJson1ListComponentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListContainerRecipesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListContainerRecipesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        containerRecipeSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.containerRecipeSummaryList !== undefined && data.containerRecipeSummaryList !== null) {
        contents.containerRecipeSummaryList = deserializeAws_restJson1ContainerRecipeSummaryList(data.containerRecipeSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListContainerRecipesCommand = deserializeAws_restJson1ListContainerRecipesCommand;
const deserializeAws_restJson1ListContainerRecipesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListDistributionConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDistributionConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        distributionConfigurationSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.distributionConfigurationSummaryList !== undefined && data.distributionConfigurationSummaryList !== null) {
        contents.distributionConfigurationSummaryList = deserializeAws_restJson1DistributionConfigurationSummaryList(data.distributionConfigurationSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDistributionConfigurationsCommand = deserializeAws_restJson1ListDistributionConfigurationsCommand;
const deserializeAws_restJson1ListDistributionConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImageBuildVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImageBuildVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
        contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImageBuildVersionsCommand = deserializeAws_restJson1ListImageBuildVersionsCommand;
const deserializeAws_restJson1ListImageBuildVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImagePackagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImagePackagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imagePackageList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imagePackageList !== undefined && data.imagePackageList !== null) {
        contents.imagePackageList = deserializeAws_restJson1ImagePackageList(data.imagePackageList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImagePackagesCommand = deserializeAws_restJson1ListImagePackagesCommand;
const deserializeAws_restJson1ListImagePackagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImagePipelineImagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImagePipelineImagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
        contents.imageSummaryList = deserializeAws_restJson1ImageSummaryList(data.imageSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImagePipelineImagesCommand = deserializeAws_restJson1ListImagePipelineImagesCommand;
const deserializeAws_restJson1ListImagePipelineImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImagePipelinesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImagePipelinesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imagePipelineList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imagePipelineList !== undefined && data.imagePipelineList !== null) {
        contents.imagePipelineList = deserializeAws_restJson1ImagePipelineList(data.imagePipelineList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImagePipelinesCommand = deserializeAws_restJson1ListImagePipelinesCommand;
const deserializeAws_restJson1ListImagePipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImageRecipesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImageRecipesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageRecipeSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageRecipeSummaryList !== undefined && data.imageRecipeSummaryList !== null) {
        contents.imageRecipeSummaryList = deserializeAws_restJson1ImageRecipeSummaryList(data.imageRecipeSummaryList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImageRecipesCommand = deserializeAws_restJson1ListImageRecipesCommand;
const deserializeAws_restJson1ListImageRecipesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListImagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListImagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageVersionList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageVersionList !== undefined && data.imageVersionList !== null) {
        contents.imageVersionList = deserializeAws_restJson1ImageVersionList(data.imageVersionList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListImagesCommand = deserializeAws_restJson1ListImagesCommand;
const deserializeAws_restJson1ListImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1ListInfrastructureConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInfrastructureConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        infrastructureConfigurationSummaryList: undefined,
        nextToken: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
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
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInfrastructureConfigurationsCommand = deserializeAws_restJson1ListInfrastructureConfigurationsCommand;
const deserializeAws_restJson1ListInfrastructureConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidPaginationTokenException":
        case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
            response = {
                ...(await deserializeAws_restJson1InvalidPaginationTokenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
        case "InvalidParameterException":
        case "com.amazonaws.imagebuilder#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutComponentPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutComponentPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        componentArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.componentArn !== undefined && data.componentArn !== null) {
        contents.componentArn = data.componentArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutComponentPolicyCommand = deserializeAws_restJson1PutComponentPolicyCommand;
const deserializeAws_restJson1PutComponentPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.imagebuilder#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1PutContainerRecipePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutContainerRecipePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        containerRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.containerRecipeArn !== undefined && data.containerRecipeArn !== null) {
        contents.containerRecipeArn = data.containerRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutContainerRecipePolicyCommand = deserializeAws_restJson1PutContainerRecipePolicyCommand;
const deserializeAws_restJson1PutContainerRecipePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.imagebuilder#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1PutImagePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutImagePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageArn !== undefined && data.imageArn !== null) {
        contents.imageArn = data.imageArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutImagePolicyCommand = deserializeAws_restJson1PutImagePolicyCommand;
const deserializeAws_restJson1PutImagePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.imagebuilder#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1PutImageRecipePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutImageRecipePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        imageRecipeArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
        contents.imageRecipeArn = data.imageRecipeArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutImageRecipePolicyCommand = deserializeAws_restJson1PutImageRecipePolicyCommand;
const deserializeAws_restJson1PutImageRecipePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterValueException":
        case "com.amazonaws.imagebuilder#InvalidParameterValueException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1StartImagePipelineExecutionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartImagePipelineExecutionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imageBuildVersionArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imageBuildVersionArn !== undefined && data.imageBuildVersionArn !== null) {
        contents.imageBuildVersionArn = data.imageBuildVersionArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartImagePipelineExecutionCommand = deserializeAws_restJson1StartImagePipelineExecutionCommand;
const deserializeAws_restJson1StartImagePipelineExecutionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
        case "InvalidParameterException":
        case "com.amazonaws.imagebuilder#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
        case "InvalidParameterException":
        case "com.amazonaws.imagebuilder#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.imagebuilder#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDistributionConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDistributionConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        distributionConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.distributionConfigurationArn !== undefined && data.distributionConfigurationArn !== null) {
        contents.distributionConfigurationArn = data.distributionConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDistributionConfigurationCommand = deserializeAws_restJson1UpdateDistributionConfigurationCommand;
const deserializeAws_restJson1UpdateDistributionConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterCombinationException":
        case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterCombinationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1UpdateImagePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateImagePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        imagePipelineArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
        contents.imagePipelineArn = data.imagePipelineArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateImagePipelineCommand = deserializeAws_restJson1UpdateImagePipelineCommand;
const deserializeAws_restJson1UpdateImagePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1UpdateInfrastructureConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        clientToken: undefined,
        infrastructureConfigurationArn: undefined,
        requestId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.clientToken !== undefined && data.clientToken !== null) {
        contents.clientToken = data.clientToken;
    }
    if (data.infrastructureConfigurationArn !== undefined && data.infrastructureConfigurationArn !== null) {
        contents.infrastructureConfigurationArn = data.infrastructureConfigurationArn;
    }
    if (data.requestId !== undefined && data.requestId !== null) {
        contents.requestId = data.requestId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateInfrastructureConfigurationCommand = deserializeAws_restJson1UpdateInfrastructureConfigurationCommand;
const deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "CallRateLimitExceededException":
        case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1CallRateLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ClientException":
        case "com.amazonaws.imagebuilder#ClientException":
            response = {
                ...(await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.imagebuilder#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
            response = {
                ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.imagebuilder#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceInUseException":
        case "com.amazonaws.imagebuilder#ResourceInUseException":
            response = {
                ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceException":
        case "com.amazonaws.imagebuilder#ServiceException":
            response = {
                ...(await deserializeAws_restJson1ServiceExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.imagebuilder#ServiceUnavailableException":
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
const deserializeAws_restJson1CallRateLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "CallRateLimitExceededException",
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
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
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
const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "IdempotentParameterMismatchException",
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
const deserializeAws_restJson1InvalidPaginationTokenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidPaginationTokenException",
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
const deserializeAws_restJson1InvalidParameterCombinationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterCombinationException",
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
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
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
const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterValueException",
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
const deserializeAws_restJson1InvalidRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidRequestException",
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
const deserializeAws_restJson1InvalidVersionNumberExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidVersionNumberException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
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
const deserializeAws_restJson1ResourceDependencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceDependencyException",
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
        message: undefined,
    };
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
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceException",
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
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
const serializeAws_restJson1AccountList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1AmiDistributionConfiguration = (input, context) => {
    return {
        ...(input.amiTags !== undefined &&
            input.amiTags !== null && { amiTags: serializeAws_restJson1TagMap(input.amiTags, context) }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.launchPermission !== undefined &&
            input.launchPermission !== null && {
            launchPermission: serializeAws_restJson1LaunchPermissionConfiguration(input.launchPermission, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.targetAccountIds !== undefined &&
            input.targetAccountIds !== null && {
            targetAccountIds: serializeAws_restJson1AccountList(input.targetAccountIds, context),
        }),
    };
};
const serializeAws_restJson1ComponentConfiguration = (input, context) => {
    return {
        ...(input.componentArn !== undefined && input.componentArn !== null && { componentArn: input.componentArn }),
    };
};
const serializeAws_restJson1ComponentConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ComponentConfiguration(entry, context);
    });
};
const serializeAws_restJson1ContainerDistributionConfiguration = (input, context) => {
    return {
        ...(input.containerTags !== undefined &&
            input.containerTags !== null && {
            containerTags: serializeAws_restJson1StringList(input.containerTags, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.targetRepository !== undefined &&
            input.targetRepository !== null && {
            targetRepository: serializeAws_restJson1TargetContainerRepository(input.targetRepository, context),
        }),
    };
};
const serializeAws_restJson1Distribution = (input, context) => {
    return {
        ...(input.amiDistributionConfiguration !== undefined &&
            input.amiDistributionConfiguration !== null && {
            amiDistributionConfiguration: serializeAws_restJson1AmiDistributionConfiguration(input.amiDistributionConfiguration, context),
        }),
        ...(input.containerDistributionConfiguration !== undefined &&
            input.containerDistributionConfiguration !== null && {
            containerDistributionConfiguration: serializeAws_restJson1ContainerDistributionConfiguration(input.containerDistributionConfiguration, context),
        }),
        ...(input.launchTemplateConfigurations !== undefined &&
            input.launchTemplateConfigurations !== null && {
            launchTemplateConfigurations: serializeAws_restJson1LaunchTemplateConfigurationList(input.launchTemplateConfigurations, context),
        }),
        ...(input.licenseConfigurationArns !== undefined &&
            input.licenseConfigurationArns !== null && {
            licenseConfigurationArns: serializeAws_restJson1LicenseConfigurationArnList(input.licenseConfigurationArns, context),
        }),
        ...(input.region !== undefined && input.region !== null && { region: input.region }),
    };
};
const serializeAws_restJson1DistributionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Distribution(entry, context);
    });
};
const serializeAws_restJson1EbsInstanceBlockDeviceSpecification = (input, context) => {
    return {
        ...(input.deleteOnTermination !== undefined &&
            input.deleteOnTermination !== null && { deleteOnTermination: input.deleteOnTermination }),
        ...(input.encrypted !== undefined && input.encrypted !== null && { encrypted: input.encrypted }),
        ...(input.iops !== undefined && input.iops !== null && { iops: input.iops }),
        ...(input.kmsKeyId !== undefined && input.kmsKeyId !== null && { kmsKeyId: input.kmsKeyId }),
        ...(input.snapshotId !== undefined && input.snapshotId !== null && { snapshotId: input.snapshotId }),
        ...(input.volumeSize !== undefined && input.volumeSize !== null && { volumeSize: input.volumeSize }),
        ...(input.volumeType !== undefined && input.volumeType !== null && { volumeType: input.volumeType }),
    };
};
const serializeAws_restJson1Filter = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.values !== undefined &&
            input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
    };
};
const serializeAws_restJson1FilterList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Filter(entry, context);
    });
};
const serializeAws_restJson1FilterValues = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ImageTestsConfiguration = (input, context) => {
    return {
        ...(input.imageTestsEnabled !== undefined &&
            input.imageTestsEnabled !== null && { imageTestsEnabled: input.imageTestsEnabled }),
        ...(input.timeoutMinutes !== undefined &&
            input.timeoutMinutes !== null && { timeoutMinutes: input.timeoutMinutes }),
    };
};
const serializeAws_restJson1InstanceBlockDeviceMapping = (input, context) => {
    return {
        ...(input.deviceName !== undefined && input.deviceName !== null && { deviceName: input.deviceName }),
        ...(input.ebs !== undefined &&
            input.ebs !== null && { ebs: serializeAws_restJson1EbsInstanceBlockDeviceSpecification(input.ebs, context) }),
        ...(input.noDevice !== undefined && input.noDevice !== null && { noDevice: input.noDevice }),
        ...(input.virtualName !== undefined && input.virtualName !== null && { virtualName: input.virtualName }),
    };
};
const serializeAws_restJson1InstanceBlockDeviceMappings = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
};
const serializeAws_restJson1InstanceConfiguration = (input, context) => {
    return {
        ...(input.blockDeviceMappings !== undefined &&
            input.blockDeviceMappings !== null && {
            blockDeviceMappings: serializeAws_restJson1InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
        }),
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
    };
};
const serializeAws_restJson1InstanceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LaunchPermissionConfiguration = (input, context) => {
    return {
        ...(input.userGroups !== undefined &&
            input.userGroups !== null && { userGroups: serializeAws_restJson1StringList(input.userGroups, context) }),
        ...(input.userIds !== undefined &&
            input.userIds !== null && { userIds: serializeAws_restJson1AccountList(input.userIds, context) }),
    };
};
const serializeAws_restJson1LaunchTemplateConfiguration = (input, context) => {
    return {
        ...(input.accountId !== undefined && input.accountId !== null && { accountId: input.accountId }),
        ...(input.launchTemplateId !== undefined &&
            input.launchTemplateId !== null && { launchTemplateId: input.launchTemplateId }),
        ...(input.setDefaultVersion !== undefined &&
            input.setDefaultVersion !== null && { setDefaultVersion: input.setDefaultVersion }),
    };
};
const serializeAws_restJson1LaunchTemplateConfigurationList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
};
const serializeAws_restJson1LicenseConfigurationArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Logging = (input, context) => {
    return {
        ...(input.s3Logs !== undefined &&
            input.s3Logs !== null && { s3Logs: serializeAws_restJson1S3Logs(input.s3Logs, context) }),
    };
};
const serializeAws_restJson1OsVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ResourceTagMap = (input, context) => {
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
const serializeAws_restJson1S3Logs = (input, context) => {
    return {
        ...(input.s3BucketName !== undefined && input.s3BucketName !== null && { s3BucketName: input.s3BucketName }),
        ...(input.s3KeyPrefix !== undefined && input.s3KeyPrefix !== null && { s3KeyPrefix: input.s3KeyPrefix }),
    };
};
const serializeAws_restJson1Schedule = (input, context) => {
    return {
        ...(input.pipelineExecutionStartCondition !== undefined &&
            input.pipelineExecutionStartCondition !== null && {
            pipelineExecutionStartCondition: input.pipelineExecutionStartCondition,
        }),
        ...(input.scheduleExpression !== undefined &&
            input.scheduleExpression !== null && { scheduleExpression: input.scheduleExpression }),
        ...(input.timezone !== undefined && input.timezone !== null && { timezone: input.timezone }),
    };
};
const serializeAws_restJson1SecurityGroupIds = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const serializeAws_restJson1TargetContainerRepository = (input, context) => {
    return {
        ...(input.repositoryName !== undefined &&
            input.repositoryName !== null && { repositoryName: input.repositoryName }),
        ...(input.service !== undefined && input.service !== null && { service: input.service }),
    };
};
const deserializeAws_restJson1AccountList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Ami = (output, context) => {
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
const deserializeAws_restJson1AmiDistributionConfiguration = (output, context) => {
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
const deserializeAws_restJson1AmiList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Ami(entry, context);
    });
};
const deserializeAws_restJson1Component = (output, context) => {
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
const deserializeAws_restJson1ComponentConfiguration = (output, context) => {
    return {
        componentArn: output.componentArn !== undefined && output.componentArn !== null ? output.componentArn : undefined,
    };
};
const deserializeAws_restJson1ComponentConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentConfiguration(entry, context);
    });
};
const deserializeAws_restJson1ComponentSummary = (output, context) => {
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
const deserializeAws_restJson1ComponentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentSummary(entry, context);
    });
};
const deserializeAws_restJson1ComponentVersion = (output, context) => {
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
const deserializeAws_restJson1ComponentVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentVersion(entry, context);
    });
};
const deserializeAws_restJson1Container = (output, context) => {
    return {
        imageUris: output.imageUris !== undefined && output.imageUris !== null
            ? deserializeAws_restJson1StringList(output.imageUris, context)
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
const deserializeAws_restJson1ContainerDistributionConfiguration = (output, context) => {
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
const deserializeAws_restJson1ContainerList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Container(entry, context);
    });
};
const deserializeAws_restJson1ContainerRecipe = (output, context) => {
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
const deserializeAws_restJson1ContainerRecipeSummary = (output, context) => {
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
const deserializeAws_restJson1ContainerRecipeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContainerRecipeSummary(entry, context);
    });
};
const deserializeAws_restJson1Distribution = (output, context) => {
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
const deserializeAws_restJson1DistributionConfiguration = (output, context) => {
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
const deserializeAws_restJson1DistributionConfigurationSummary = (output, context) => {
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
const deserializeAws_restJson1DistributionConfigurationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DistributionConfigurationSummary(entry, context);
    });
};
const deserializeAws_restJson1DistributionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Distribution(entry, context);
    });
};
const deserializeAws_restJson1EbsInstanceBlockDeviceSpecification = (output, context) => {
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
const deserializeAws_restJson1Image = (output, context) => {
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
const deserializeAws_restJson1ImagePackage = (output, context) => {
    return {
        packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
        packageVersion: output.packageVersion !== undefined && output.packageVersion !== null ? output.packageVersion : undefined,
    };
};
const deserializeAws_restJson1ImagePackageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImagePackage(entry, context);
    });
};
const deserializeAws_restJson1ImagePipeline = (output, context) => {
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
const deserializeAws_restJson1ImagePipelineList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImagePipeline(entry, context);
    });
};
const deserializeAws_restJson1ImageRecipe = (output, context) => {
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
const deserializeAws_restJson1ImageRecipeSummary = (output, context) => {
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
const deserializeAws_restJson1ImageRecipeSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageRecipeSummary(entry, context);
    });
};
const deserializeAws_restJson1ImageState = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ImageSummary = (output, context) => {
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
const deserializeAws_restJson1ImageSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageSummary(entry, context);
    });
};
const deserializeAws_restJson1ImageTestsConfiguration = (output, context) => {
    return {
        imageTestsEnabled: output.imageTestsEnabled !== undefined && output.imageTestsEnabled !== null
            ? output.imageTestsEnabled
            : undefined,
        timeoutMinutes: output.timeoutMinutes !== undefined && output.timeoutMinutes !== null ? output.timeoutMinutes : undefined,
    };
};
const deserializeAws_restJson1ImageVersion = (output, context) => {
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
const deserializeAws_restJson1ImageVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ImageVersion(entry, context);
    });
};
const deserializeAws_restJson1InfrastructureConfiguration = (output, context) => {
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
const deserializeAws_restJson1InfrastructureConfigurationSummary = (output, context) => {
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
const deserializeAws_restJson1InfrastructureConfigurationSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InfrastructureConfigurationSummary(entry, context);
    });
};
const deserializeAws_restJson1InstanceBlockDeviceMapping = (output, context) => {
    return {
        deviceName: output.deviceName !== undefined && output.deviceName !== null ? output.deviceName : undefined,
        ebs: output.ebs !== undefined && output.ebs !== null
            ? deserializeAws_restJson1EbsInstanceBlockDeviceSpecification(output.ebs, context)
            : undefined,
        noDevice: output.noDevice !== undefined && output.noDevice !== null ? output.noDevice : undefined,
        virtualName: output.virtualName !== undefined && output.virtualName !== null ? output.virtualName : undefined,
    };
};
const deserializeAws_restJson1InstanceBlockDeviceMappings = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstanceBlockDeviceMapping(entry, context);
    });
};
const deserializeAws_restJson1InstanceConfiguration = (output, context) => {
    return {
        blockDeviceMappings: output.blockDeviceMappings !== undefined && output.blockDeviceMappings !== null
            ? deserializeAws_restJson1InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
            : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
    };
};
const deserializeAws_restJson1InstanceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LaunchPermissionConfiguration = (output, context) => {
    return {
        userGroups: output.userGroups !== undefined && output.userGroups !== null
            ? deserializeAws_restJson1StringList(output.userGroups, context)
            : undefined,
        userIds: output.userIds !== undefined && output.userIds !== null
            ? deserializeAws_restJson1AccountList(output.userIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1LaunchTemplateConfiguration = (output, context) => {
    return {
        accountId: output.accountId !== undefined && output.accountId !== null ? output.accountId : undefined,
        launchTemplateId: output.launchTemplateId !== undefined && output.launchTemplateId !== null ? output.launchTemplateId : undefined,
        setDefaultVersion: output.setDefaultVersion !== undefined && output.setDefaultVersion !== null
            ? output.setDefaultVersion
            : undefined,
    };
};
const deserializeAws_restJson1LaunchTemplateConfigurationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LaunchTemplateConfiguration(entry, context);
    });
};
const deserializeAws_restJson1LicenseConfigurationArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Logging = (output, context) => {
    return {
        s3Logs: output.s3Logs !== undefined && output.s3Logs !== null
            ? deserializeAws_restJson1S3Logs(output.s3Logs, context)
            : undefined,
    };
};
const deserializeAws_restJson1OsVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1OutputResources = (output, context) => {
    return {
        amis: output.amis !== undefined && output.amis !== null
            ? deserializeAws_restJson1AmiList(output.amis, context)
            : undefined,
        containers: output.containers !== undefined && output.containers !== null
            ? deserializeAws_restJson1ContainerList(output.containers, context)
            : undefined,
    };
};
const deserializeAws_restJson1RegionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ResourceTagMap = (output, context) => {
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
const deserializeAws_restJson1S3Logs = (output, context) => {
    return {
        s3BucketName: output.s3BucketName !== undefined && output.s3BucketName !== null ? output.s3BucketName : undefined,
        s3KeyPrefix: output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null ? output.s3KeyPrefix : undefined,
    };
};
const deserializeAws_restJson1Schedule = (output, context) => {
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
const deserializeAws_restJson1SecurityGroupIds = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_restJson1TargetContainerRepository = (output, context) => {
    return {
        repositoryName: output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
        service: output.service !== undefined && output.service !== null ? output.service : undefined,
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