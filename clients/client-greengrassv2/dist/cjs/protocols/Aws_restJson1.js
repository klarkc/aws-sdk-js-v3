"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ResolveComponentCandidatesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListInstalledComponentsCommand = exports.deserializeAws_restJson1ListEffectiveDeploymentsCommand = exports.deserializeAws_restJson1ListDeploymentsCommand = exports.deserializeAws_restJson1ListCoreDevicesCommand = exports.deserializeAws_restJson1ListComponentVersionsCommand = exports.deserializeAws_restJson1ListComponentsCommand = exports.deserializeAws_restJson1GetDeploymentCommand = exports.deserializeAws_restJson1GetCoreDeviceCommand = exports.deserializeAws_restJson1GetComponentVersionArtifactCommand = exports.deserializeAws_restJson1GetComponentCommand = exports.deserializeAws_restJson1DescribeComponentCommand = exports.deserializeAws_restJson1DeleteCoreDeviceCommand = exports.deserializeAws_restJson1DeleteComponentCommand = exports.deserializeAws_restJson1CreateDeploymentCommand = exports.deserializeAws_restJson1CreateComponentVersionCommand = exports.deserializeAws_restJson1CancelDeploymentCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ResolveComponentCandidatesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListInstalledComponentsCommand = exports.serializeAws_restJson1ListEffectiveDeploymentsCommand = exports.serializeAws_restJson1ListDeploymentsCommand = exports.serializeAws_restJson1ListCoreDevicesCommand = exports.serializeAws_restJson1ListComponentVersionsCommand = exports.serializeAws_restJson1ListComponentsCommand = exports.serializeAws_restJson1GetDeploymentCommand = exports.serializeAws_restJson1GetCoreDeviceCommand = exports.serializeAws_restJson1GetComponentVersionArtifactCommand = exports.serializeAws_restJson1GetComponentCommand = exports.serializeAws_restJson1DescribeComponentCommand = exports.serializeAws_restJson1DeleteCoreDeviceCommand = exports.serializeAws_restJson1DeleteComponentCommand = exports.serializeAws_restJson1CreateDeploymentCommand = exports.serializeAws_restJson1CreateComponentVersionCommand = exports.serializeAws_restJson1CancelDeploymentCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelDeploymentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/deployments/{deploymentId}/cancel";
    if (input.deploymentId !== undefined) {
        const labelValue = input.deploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: deploymentId.");
        }
        resolvedPath = resolvedPath.replace("{deploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: deploymentId.");
    }
    let body;
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
exports.serializeAws_restJson1CancelDeploymentCommand = serializeAws_restJson1CancelDeploymentCommand;
const serializeAws_restJson1CreateComponentVersionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/v2/createComponentVersion";
    let body;
    body = JSON.stringify({
        ...(input.inlineRecipe !== undefined &&
            input.inlineRecipe !== null && { inlineRecipe: context.base64Encoder(input.inlineRecipe) }),
        ...(input.lambdaFunction !== undefined &&
            input.lambdaFunction !== null && {
            lambdaFunction: serializeAws_restJson1LambdaFunctionRecipeSource(input.lambdaFunction, context),
        }),
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
exports.serializeAws_restJson1CreateComponentVersionCommand = serializeAws_restJson1CreateComponentVersionCommand;
const serializeAws_restJson1CreateDeploymentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/v2/deployments";
    let body;
    body = JSON.stringify({
        ...(input.components !== undefined &&
            input.components !== null && {
            components: serializeAws_restJson1ComponentDeploymentSpecifications(input.components, context),
        }),
        ...(input.deploymentName !== undefined &&
            input.deploymentName !== null && { deploymentName: input.deploymentName }),
        ...(input.deploymentPolicies !== undefined &&
            input.deploymentPolicies !== null && {
            deploymentPolicies: serializeAws_restJson1DeploymentPolicies(input.deploymentPolicies, context),
        }),
        ...(input.iotJobConfiguration !== undefined &&
            input.iotJobConfiguration !== null && {
            iotJobConfiguration: serializeAws_restJson1DeploymentIoTJobConfiguration(input.iotJobConfiguration, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
        ...(input.targetArn !== undefined && input.targetArn !== null && { targetArn: input.targetArn }),
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
exports.serializeAws_restJson1CreateDeploymentCommand = serializeAws_restJson1CreateDeploymentCommand;
const serializeAws_restJson1DeleteComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components/{arn}";
    if (input.arn !== undefined) {
        const labelValue = input.arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: arn.");
        }
        resolvedPath = resolvedPath.replace("{arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: arn.");
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
exports.serializeAws_restJson1DeleteComponentCommand = serializeAws_restJson1DeleteComponentCommand;
const serializeAws_restJson1DeleteCoreDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}";
    if (input.coreDeviceThingName !== undefined) {
        const labelValue = input.coreDeviceThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
        }
        resolvedPath = resolvedPath.replace("{coreDeviceThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
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
exports.serializeAws_restJson1DeleteCoreDeviceCommand = serializeAws_restJson1DeleteCoreDeviceCommand;
const serializeAws_restJson1DescribeComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components/{arn}/metadata";
    if (input.arn !== undefined) {
        const labelValue = input.arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: arn.");
        }
        resolvedPath = resolvedPath.replace("{arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: arn.");
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
exports.serializeAws_restJson1DescribeComponentCommand = serializeAws_restJson1DescribeComponentCommand;
const serializeAws_restJson1GetComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components/{arn}";
    if (input.arn !== undefined) {
        const labelValue = input.arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: arn.");
        }
        resolvedPath = resolvedPath.replace("{arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: arn.");
    }
    const query = {
        ...(input.recipeOutputFormat !== undefined && { recipeOutputFormat: input.recipeOutputFormat }),
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
const serializeAws_restJson1GetComponentVersionArtifactCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components/{arn}/artifacts/{artifactName+}";
    if (input.arn !== undefined) {
        const labelValue = input.arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: arn.");
        }
        resolvedPath = resolvedPath.replace("{arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: arn.");
    }
    if (input.artifactName !== undefined) {
        const labelValue = input.artifactName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: artifactName.");
        }
        resolvedPath = resolvedPath.replace("{artifactName+}", labelValue
            .split("/")
            .map((segment) => smithy_client_1.extendedEncodeURIComponent(segment))
            .join("/"));
    }
    else {
        throw new Error("No value provided for input HTTP label: artifactName.");
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
exports.serializeAws_restJson1GetComponentVersionArtifactCommand = serializeAws_restJson1GetComponentVersionArtifactCommand;
const serializeAws_restJson1GetCoreDeviceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}";
    if (input.coreDeviceThingName !== undefined) {
        const labelValue = input.coreDeviceThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
        }
        resolvedPath = resolvedPath.replace("{coreDeviceThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
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
exports.serializeAws_restJson1GetCoreDeviceCommand = serializeAws_restJson1GetCoreDeviceCommand;
const serializeAws_restJson1GetDeploymentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/deployments/{deploymentId}";
    if (input.deploymentId !== undefined) {
        const labelValue = input.deploymentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: deploymentId.");
        }
        resolvedPath = resolvedPath.replace("{deploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: deploymentId.");
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
exports.serializeAws_restJson1GetDeploymentCommand = serializeAws_restJson1GetDeploymentCommand;
const serializeAws_restJson1ListComponentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components";
    const query = {
        ...(input.scope !== undefined && { scope: input.scope }),
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
exports.serializeAws_restJson1ListComponentsCommand = serializeAws_restJson1ListComponentsCommand;
const serializeAws_restJson1ListComponentVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/components/{arn}/versions";
    if (input.arn !== undefined) {
        const labelValue = input.arn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: arn.");
        }
        resolvedPath = resolvedPath.replace("{arn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: arn.");
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
exports.serializeAws_restJson1ListComponentVersionsCommand = serializeAws_restJson1ListComponentVersionsCommand;
const serializeAws_restJson1ListCoreDevicesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/coreDevices";
    const query = {
        ...(input.thingGroupArn !== undefined && { thingGroupArn: input.thingGroupArn }),
        ...(input.status !== undefined && { status: input.status }),
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
exports.serializeAws_restJson1ListCoreDevicesCommand = serializeAws_restJson1ListCoreDevicesCommand;
const serializeAws_restJson1ListDeploymentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/deployments";
    const query = {
        ...(input.targetArn !== undefined && { targetArn: input.targetArn }),
        ...(input.historyFilter !== undefined && { historyFilter: input.historyFilter }),
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
exports.serializeAws_restJson1ListDeploymentsCommand = serializeAws_restJson1ListDeploymentsCommand;
const serializeAws_restJson1ListEffectiveDeploymentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments";
    if (input.coreDeviceThingName !== undefined) {
        const labelValue = input.coreDeviceThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
        }
        resolvedPath = resolvedPath.replace("{coreDeviceThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
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
exports.serializeAws_restJson1ListEffectiveDeploymentsCommand = serializeAws_restJson1ListEffectiveDeploymentsCommand;
const serializeAws_restJson1ListInstalledComponentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents";
    if (input.coreDeviceThingName !== undefined) {
        const labelValue = input.coreDeviceThingName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
        }
        resolvedPath = resolvedPath.replace("{coreDeviceThingName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
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
exports.serializeAws_restJson1ListInstalledComponentsCommand = serializeAws_restJson1ListInstalledComponentsCommand;
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
const serializeAws_restJson1ResolveComponentCandidatesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/greengrass/v2/resolveComponentCandidates";
    let body;
    body = JSON.stringify({
        ...(input.componentCandidates !== undefined &&
            input.componentCandidates !== null && {
            componentCandidates: serializeAws_restJson1ComponentCandidateList(input.componentCandidates, context),
        }),
        ...(input.platform !== undefined &&
            input.platform !== null && { platform: serializeAws_restJson1ComponentPlatform(input.platform, context) }),
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
exports.serializeAws_restJson1ResolveComponentCandidatesCommand = serializeAws_restJson1ResolveComponentCandidatesCommand;
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
const deserializeAws_restJson1CancelDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        message: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelDeploymentCommand = deserializeAws_restJson1CancelDeploymentCommand;
const deserializeAws_restJson1CancelDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.greengrassv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1CreateComponentVersionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateComponentVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        componentName: undefined,
        componentVersion: undefined,
        creationTimestamp: undefined,
        status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.componentName !== undefined && data.componentName !== null) {
        contents.componentName = data.componentName;
    }
    if (data.componentVersion !== undefined && data.componentVersion !== null) {
        contents.componentVersion = data.componentVersion;
    }
    if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
        contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateComponentVersionCommand = deserializeAws_restJson1CreateComponentVersionCommand;
const deserializeAws_restJson1CreateComponentVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.greengrassv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.greengrassv2#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1CreateDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        deploymentId: undefined,
        iotJobArn: undefined,
        iotJobId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deploymentId !== undefined && data.deploymentId !== null) {
        contents.deploymentId = data.deploymentId;
    }
    if (data.iotJobArn !== undefined && data.iotJobArn !== null) {
        contents.iotJobArn = data.iotJobArn;
    }
    if (data.iotJobId !== undefined && data.iotJobId !== null) {
        contents.iotJobId = data.iotJobId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDeploymentCommand = deserializeAws_restJson1CreateDeploymentCommand;
const deserializeAws_restJson1CreateDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1DeleteComponentCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.greengrassv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1DeleteCoreDeviceCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteCoreDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCoreDeviceCommand = deserializeAws_restJson1DeleteCoreDeviceCommand;
const deserializeAws_restJson1DeleteCoreDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.greengrassv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1DescribeComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        arn: undefined,
        componentName: undefined,
        componentVersion: undefined,
        creationTimestamp: undefined,
        description: undefined,
        platforms: undefined,
        publisher: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.arn !== undefined && data.arn !== null) {
        contents.arn = data.arn;
    }
    if (data.componentName !== undefined && data.componentName !== null) {
        contents.componentName = data.componentName;
    }
    if (data.componentVersion !== undefined && data.componentVersion !== null) {
        contents.componentVersion = data.componentVersion;
    }
    if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
        contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
    }
    if (data.description !== undefined && data.description !== null) {
        contents.description = data.description;
    }
    if (data.platforms !== undefined && data.platforms !== null) {
        contents.platforms = deserializeAws_restJson1ComponentPlatformList(data.platforms, context);
    }
    if (data.publisher !== undefined && data.publisher !== null) {
        contents.publisher = data.publisher;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeComponentCommand = deserializeAws_restJson1DescribeComponentCommand;
const deserializeAws_restJson1DescribeComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1GetComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        recipe: undefined,
        recipeOutputFormat: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.recipe !== undefined && data.recipe !== null) {
        contents.recipe = context.base64Decoder(data.recipe);
    }
    if (data.recipeOutputFormat !== undefined && data.recipeOutputFormat !== null) {
        contents.recipeOutputFormat = data.recipeOutputFormat;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1GetComponentVersionArtifactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetComponentVersionArtifactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        preSignedUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.preSignedUrl !== undefined && data.preSignedUrl !== null) {
        contents.preSignedUrl = data.preSignedUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetComponentVersionArtifactCommand = deserializeAws_restJson1GetComponentVersionArtifactCommand;
const deserializeAws_restJson1GetComponentVersionArtifactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1GetCoreDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCoreDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        architecture: undefined,
        coreDeviceThingName: undefined,
        coreVersion: undefined,
        lastStatusUpdateTimestamp: undefined,
        platform: undefined,
        status: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.architecture !== undefined && data.architecture !== null) {
        contents.architecture = data.architecture;
    }
    if (data.coreDeviceThingName !== undefined && data.coreDeviceThingName !== null) {
        contents.coreDeviceThingName = data.coreDeviceThingName;
    }
    if (data.coreVersion !== undefined && data.coreVersion !== null) {
        contents.coreVersion = data.coreVersion;
    }
    if (data.lastStatusUpdateTimestamp !== undefined && data.lastStatusUpdateTimestamp !== null) {
        contents.lastStatusUpdateTimestamp = new Date(Math.round(data.lastStatusUpdateTimestamp * 1000));
    }
    if (data.platform !== undefined && data.platform !== null) {
        contents.platform = data.platform;
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = data.status;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCoreDeviceCommand = deserializeAws_restJson1GetCoreDeviceCommand;
const deserializeAws_restJson1GetCoreDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1GetDeploymentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDeploymentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        components: undefined,
        creationTimestamp: undefined,
        deploymentId: undefined,
        deploymentName: undefined,
        deploymentPolicies: undefined,
        deploymentStatus: undefined,
        iotJobArn: undefined,
        iotJobConfiguration: undefined,
        iotJobId: undefined,
        isLatestForTarget: undefined,
        revisionId: undefined,
        tags: undefined,
        targetArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.components !== undefined && data.components !== null) {
        contents.components = deserializeAws_restJson1ComponentDeploymentSpecifications(data.components, context);
    }
    if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
        contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
    }
    if (data.deploymentId !== undefined && data.deploymentId !== null) {
        contents.deploymentId = data.deploymentId;
    }
    if (data.deploymentName !== undefined && data.deploymentName !== null) {
        contents.deploymentName = data.deploymentName;
    }
    if (data.deploymentPolicies !== undefined && data.deploymentPolicies !== null) {
        contents.deploymentPolicies = deserializeAws_restJson1DeploymentPolicies(data.deploymentPolicies, context);
    }
    if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
        contents.deploymentStatus = data.deploymentStatus;
    }
    if (data.iotJobArn !== undefined && data.iotJobArn !== null) {
        contents.iotJobArn = data.iotJobArn;
    }
    if (data.iotJobConfiguration !== undefined && data.iotJobConfiguration !== null) {
        contents.iotJobConfiguration = deserializeAws_restJson1DeploymentIoTJobConfiguration(data.iotJobConfiguration, context);
    }
    if (data.iotJobId !== undefined && data.iotJobId !== null) {
        contents.iotJobId = data.iotJobId;
    }
    if (data.isLatestForTarget !== undefined && data.isLatestForTarget !== null) {
        contents.isLatestForTarget = data.isLatestForTarget;
    }
    if (data.revisionId !== undefined && data.revisionId !== null) {
        contents.revisionId = data.revisionId;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
    }
    if (data.targetArn !== undefined && data.targetArn !== null) {
        contents.targetArn = data.targetArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeploymentCommand = deserializeAws_restJson1GetDeploymentCommand;
const deserializeAws_restJson1GetDeploymentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListComponentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListComponentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        components: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.components !== undefined && data.components !== null) {
        contents.components = deserializeAws_restJson1ComponentList(data.components, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
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
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListComponentVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListComponentVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        componentVersions: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.componentVersions !== undefined && data.componentVersions !== null) {
        contents.componentVersions = deserializeAws_restJson1ComponentVersionList(data.componentVersions, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListComponentVersionsCommand = deserializeAws_restJson1ListComponentVersionsCommand;
const deserializeAws_restJson1ListComponentVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListCoreDevicesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListCoreDevicesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        coreDevices: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.coreDevices !== undefined && data.coreDevices !== null) {
        contents.coreDevices = deserializeAws_restJson1CoreDevicesList(data.coreDevices, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListCoreDevicesCommand = deserializeAws_restJson1ListCoreDevicesCommand;
const deserializeAws_restJson1ListCoreDevicesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListDeploymentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        deployments: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.deployments !== undefined && data.deployments !== null) {
        contents.deployments = deserializeAws_restJson1DeploymentList(data.deployments, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDeploymentsCommand = deserializeAws_restJson1ListDeploymentsCommand;
const deserializeAws_restJson1ListDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListEffectiveDeploymentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEffectiveDeploymentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        effectiveDeployments: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.effectiveDeployments !== undefined && data.effectiveDeployments !== null) {
        contents.effectiveDeployments = deserializeAws_restJson1EffectiveDeploymentsList(data.effectiveDeployments, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEffectiveDeploymentsCommand = deserializeAws_restJson1ListEffectiveDeploymentsCommand;
const deserializeAws_restJson1ListEffectiveDeploymentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ListInstalledComponentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListInstalledComponentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        installedComponents: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.installedComponents !== undefined && data.installedComponents !== null) {
        contents.installedComponents = deserializeAws_restJson1InstalledComponentList(data.installedComponents, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListInstalledComponentsCommand = deserializeAws_restJson1ListInstalledComponentsCommand;
const deserializeAws_restJson1ListInstalledComponentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
const deserializeAws_restJson1ResolveComponentCandidatesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ResolveComponentCandidatesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        resolvedComponentVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.resolvedComponentVersions !== undefined && data.resolvedComponentVersions !== null) {
        contents.resolvedComponentVersions = deserializeAws_restJson1ResolvedComponentVersionsList(data.resolvedComponentVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResolveComponentCandidatesCommand = deserializeAws_restJson1ResolveComponentCandidatesCommand;
const deserializeAws_restJson1ResolveComponentCandidatesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.greengrassv2#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.greengrassv2#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.greengrassv2#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
        case "InternalServerException":
        case "com.amazonaws.greengrassv2#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.greengrassv2#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.greengrassv2#ValidationException":
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
        message: undefined,
    };
    const data = parsedOutput.body;
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
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
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
        message: undefined,
        resourceId: undefined,
        resourceType: undefined,
    };
    const data = parsedOutput.body;
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        quotaCode: undefined,
        resourceId: undefined,
        resourceType: undefined,
        serviceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.quotaCode !== undefined && data.quotaCode !== null) {
        contents.quotaCode = data.quotaCode;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
    }
    if (data.resourceType !== undefined && data.resourceType !== null) {
        contents.resourceType = data.resourceType;
    }
    if (data.serviceCode !== undefined && data.serviceCode !== null) {
        contents.serviceCode = data.serviceCode;
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
        contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        fields: undefined,
        message: undefined,
        reason: undefined,
    };
    const data = parsedOutput.body;
    if (data.fields !== undefined && data.fields !== null) {
        contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.reason !== undefined && data.reason !== null) {
        contents.reason = data.reason;
    }
    return contents;
};
const serializeAws_restJson1ComponentCandidate = (input, context) => {
    return {
        ...(input.componentName !== undefined && input.componentName !== null && { componentName: input.componentName }),
        ...(input.componentVersion !== undefined &&
            input.componentVersion !== null && { componentVersion: input.componentVersion }),
        ...(input.versionRequirements !== undefined &&
            input.versionRequirements !== null && {
            versionRequirements: serializeAws_restJson1ComponentVersionRequirementMap(input.versionRequirements, context),
        }),
    };
};
const serializeAws_restJson1ComponentCandidateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ComponentCandidate(entry, context);
    });
};
const serializeAws_restJson1ComponentConfigurationPathList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ComponentConfigurationUpdate = (input, context) => {
    return {
        ...(input.merge !== undefined && input.merge !== null && { merge: input.merge }),
        ...(input.reset !== undefined &&
            input.reset !== null && { reset: serializeAws_restJson1ComponentConfigurationPathList(input.reset, context) }),
    };
};
const serializeAws_restJson1ComponentDependencyMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ComponentDependencyRequirement(value, context),
        };
    }, {});
};
const serializeAws_restJson1ComponentDependencyRequirement = (input, context) => {
    return {
        ...(input.dependencyType !== undefined &&
            input.dependencyType !== null && { dependencyType: input.dependencyType }),
        ...(input.versionRequirement !== undefined &&
            input.versionRequirement !== null && { versionRequirement: input.versionRequirement }),
    };
};
const serializeAws_restJson1ComponentDeploymentSpecification = (input, context) => {
    return {
        ...(input.componentVersion !== undefined &&
            input.componentVersion !== null && { componentVersion: input.componentVersion }),
        ...(input.configurationUpdate !== undefined &&
            input.configurationUpdate !== null && {
            configurationUpdate: serializeAws_restJson1ComponentConfigurationUpdate(input.configurationUpdate, context),
        }),
        ...(input.runWith !== undefined &&
            input.runWith !== null && { runWith: serializeAws_restJson1ComponentRunWith(input.runWith, context) }),
    };
};
const serializeAws_restJson1ComponentDeploymentSpecifications = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1ComponentDeploymentSpecification(value, context),
        };
    }, {});
};
const serializeAws_restJson1ComponentPlatform = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && {
            attributes: serializeAws_restJson1PlatformAttributesMap(input.attributes, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1ComponentPlatformList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ComponentPlatform(entry, context);
    });
};
const serializeAws_restJson1ComponentRunWith = (input, context) => {
    return {
        ...(input.posixUser !== undefined && input.posixUser !== null && { posixUser: input.posixUser }),
    };
};
const serializeAws_restJson1ComponentVersionRequirementMap = (input, context) => {
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
const serializeAws_restJson1DeploymentComponentUpdatePolicy = (input, context) => {
    return {
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        ...(input.timeoutInSeconds !== undefined &&
            input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
    };
};
const serializeAws_restJson1DeploymentConfigurationValidationPolicy = (input, context) => {
    return {
        ...(input.timeoutInSeconds !== undefined &&
            input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
    };
};
const serializeAws_restJson1DeploymentIoTJobConfiguration = (input, context) => {
    return {
        ...(input.abortConfig !== undefined &&
            input.abortConfig !== null && {
            abortConfig: serializeAws_restJson1IoTJobAbortConfig(input.abortConfig, context),
        }),
        ...(input.jobExecutionsRolloutConfig !== undefined &&
            input.jobExecutionsRolloutConfig !== null && {
            jobExecutionsRolloutConfig: serializeAws_restJson1IoTJobExecutionsRolloutConfig(input.jobExecutionsRolloutConfig, context),
        }),
        ...(input.timeoutConfig !== undefined &&
            input.timeoutConfig !== null && {
            timeoutConfig: serializeAws_restJson1IoTJobTimeoutConfig(input.timeoutConfig, context),
        }),
    };
};
const serializeAws_restJson1DeploymentPolicies = (input, context) => {
    return {
        ...(input.componentUpdatePolicy !== undefined &&
            input.componentUpdatePolicy !== null && {
            componentUpdatePolicy: serializeAws_restJson1DeploymentComponentUpdatePolicy(input.componentUpdatePolicy, context),
        }),
        ...(input.configurationValidationPolicy !== undefined &&
            input.configurationValidationPolicy !== null && {
            configurationValidationPolicy: serializeAws_restJson1DeploymentConfigurationValidationPolicy(input.configurationValidationPolicy, context),
        }),
        ...(input.failureHandlingPolicy !== undefined &&
            input.failureHandlingPolicy !== null && { failureHandlingPolicy: input.failureHandlingPolicy }),
    };
};
const serializeAws_restJson1IoTJobAbortConfig = (input, context) => {
    return {
        ...(input.criteriaList !== undefined &&
            input.criteriaList !== null && {
            criteriaList: serializeAws_restJson1IoTJobAbortCriteriaList(input.criteriaList, context),
        }),
    };
};
const serializeAws_restJson1IoTJobAbortCriteria = (input, context) => {
    return {
        ...(input.action !== undefined && input.action !== null && { action: input.action }),
        ...(input.failureType !== undefined && input.failureType !== null && { failureType: input.failureType }),
        ...(input.minNumberOfExecutedThings !== undefined &&
            input.minNumberOfExecutedThings !== null && { minNumberOfExecutedThings: input.minNumberOfExecutedThings }),
        ...(input.thresholdPercentage !== undefined &&
            input.thresholdPercentage !== null && { thresholdPercentage: input.thresholdPercentage }),
    };
};
const serializeAws_restJson1IoTJobAbortCriteriaList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
};
const serializeAws_restJson1IoTJobExecutionsRolloutConfig = (input, context) => {
    return {
        ...(input.exponentialRate !== undefined &&
            input.exponentialRate !== null && {
            exponentialRate: serializeAws_restJson1IoTJobExponentialRolloutRate(input.exponentialRate, context),
        }),
        ...(input.maximumPerMinute !== undefined &&
            input.maximumPerMinute !== null && { maximumPerMinute: input.maximumPerMinute }),
    };
};
const serializeAws_restJson1IoTJobExponentialRolloutRate = (input, context) => {
    return {
        ...(input.baseRatePerMinute !== undefined &&
            input.baseRatePerMinute !== null && { baseRatePerMinute: input.baseRatePerMinute }),
        ...(input.incrementFactor !== undefined &&
            input.incrementFactor !== null && { incrementFactor: input.incrementFactor }),
        ...(input.rateIncreaseCriteria !== undefined &&
            input.rateIncreaseCriteria !== null && {
            rateIncreaseCriteria: serializeAws_restJson1IoTJobRateIncreaseCriteria(input.rateIncreaseCriteria, context),
        }),
    };
};
const serializeAws_restJson1IoTJobRateIncreaseCriteria = (input, context) => {
    return {
        ...(input.numberOfNotifiedThings !== undefined &&
            input.numberOfNotifiedThings !== null && { numberOfNotifiedThings: input.numberOfNotifiedThings }),
        ...(input.numberOfSucceededThings !== undefined &&
            input.numberOfSucceededThings !== null && { numberOfSucceededThings: input.numberOfSucceededThings }),
    };
};
const serializeAws_restJson1IoTJobTimeoutConfig = (input, context) => {
    return {
        ...(input.inProgressTimeoutInMinutes !== undefined &&
            input.inProgressTimeoutInMinutes !== null && { inProgressTimeoutInMinutes: input.inProgressTimeoutInMinutes }),
    };
};
const serializeAws_restJson1LambdaContainerParams = (input, context) => {
    return {
        ...(input.devices !== undefined &&
            input.devices !== null && { devices: serializeAws_restJson1LambdaDeviceList(input.devices, context) }),
        ...(input.memorySizeInKB !== undefined &&
            input.memorySizeInKB !== null && { memorySizeInKB: input.memorySizeInKB }),
        ...(input.mountROSysfs !== undefined && input.mountROSysfs !== null && { mountROSysfs: input.mountROSysfs }),
        ...(input.volumes !== undefined &&
            input.volumes !== null && { volumes: serializeAws_restJson1LambdaVolumeList(input.volumes, context) }),
    };
};
const serializeAws_restJson1LambdaDeviceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LambdaDeviceMount(entry, context);
    });
};
const serializeAws_restJson1LambdaDeviceMount = (input, context) => {
    return {
        ...(input.addGroupOwner !== undefined && input.addGroupOwner !== null && { addGroupOwner: input.addGroupOwner }),
        ...(input.path !== undefined && input.path !== null && { path: input.path }),
        ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
    };
};
const serializeAws_restJson1LambdaEnvironmentVariables = (input, context) => {
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
const serializeAws_restJson1LambdaEventSource = (input, context) => {
    return {
        ...(input.topic !== undefined && input.topic !== null && { topic: input.topic }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1LambdaEventSourceList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LambdaEventSource(entry, context);
    });
};
const serializeAws_restJson1LambdaExecArgsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LambdaExecutionParameters = (input, context) => {
    return {
        ...(input.environmentVariables !== undefined &&
            input.environmentVariables !== null && {
            environmentVariables: serializeAws_restJson1LambdaEnvironmentVariables(input.environmentVariables, context),
        }),
        ...(input.eventSources !== undefined &&
            input.eventSources !== null && {
            eventSources: serializeAws_restJson1LambdaEventSourceList(input.eventSources, context),
        }),
        ...(input.execArgs !== undefined &&
            input.execArgs !== null && { execArgs: serializeAws_restJson1LambdaExecArgsList(input.execArgs, context) }),
        ...(input.inputPayloadEncodingType !== undefined &&
            input.inputPayloadEncodingType !== null && { inputPayloadEncodingType: input.inputPayloadEncodingType }),
        ...(input.linuxProcessParams !== undefined &&
            input.linuxProcessParams !== null && {
            linuxProcessParams: serializeAws_restJson1LambdaLinuxProcessParams(input.linuxProcessParams, context),
        }),
        ...(input.maxIdleTimeInSeconds !== undefined &&
            input.maxIdleTimeInSeconds !== null && { maxIdleTimeInSeconds: input.maxIdleTimeInSeconds }),
        ...(input.maxInstancesCount !== undefined &&
            input.maxInstancesCount !== null && { maxInstancesCount: input.maxInstancesCount }),
        ...(input.maxQueueSize !== undefined && input.maxQueueSize !== null && { maxQueueSize: input.maxQueueSize }),
        ...(input.pinned !== undefined && input.pinned !== null && { pinned: input.pinned }),
        ...(input.statusTimeoutInSeconds !== undefined &&
            input.statusTimeoutInSeconds !== null && { statusTimeoutInSeconds: input.statusTimeoutInSeconds }),
        ...(input.timeoutInSeconds !== undefined &&
            input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
    };
};
const serializeAws_restJson1LambdaFunctionRecipeSource = (input, context) => {
    return {
        ...(input.componentDependencies !== undefined &&
            input.componentDependencies !== null && {
            componentDependencies: serializeAws_restJson1ComponentDependencyMap(input.componentDependencies, context),
        }),
        ...(input.componentLambdaParameters !== undefined &&
            input.componentLambdaParameters !== null && {
            componentLambdaParameters: serializeAws_restJson1LambdaExecutionParameters(input.componentLambdaParameters, context),
        }),
        ...(input.componentName !== undefined && input.componentName !== null && { componentName: input.componentName }),
        ...(input.componentPlatforms !== undefined &&
            input.componentPlatforms !== null && {
            componentPlatforms: serializeAws_restJson1ComponentPlatformList(input.componentPlatforms, context),
        }),
        ...(input.componentVersion !== undefined &&
            input.componentVersion !== null && { componentVersion: input.componentVersion }),
        ...(input.lambdaArn !== undefined && input.lambdaArn !== null && { lambdaArn: input.lambdaArn }),
    };
};
const serializeAws_restJson1LambdaLinuxProcessParams = (input, context) => {
    return {
        ...(input.containerParams !== undefined &&
            input.containerParams !== null && {
            containerParams: serializeAws_restJson1LambdaContainerParams(input.containerParams, context),
        }),
        ...(input.isolationMode !== undefined && input.isolationMode !== null && { isolationMode: input.isolationMode }),
    };
};
const serializeAws_restJson1LambdaVolumeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LambdaVolumeMount(entry, context);
    });
};
const serializeAws_restJson1LambdaVolumeMount = (input, context) => {
    return {
        ...(input.addGroupOwner !== undefined && input.addGroupOwner !== null && { addGroupOwner: input.addGroupOwner }),
        ...(input.destinationPath !== undefined &&
            input.destinationPath !== null && { destinationPath: input.destinationPath }),
        ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
        ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
    };
};
const serializeAws_restJson1PlatformAttributesMap = (input, context) => {
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
const deserializeAws_restJson1CloudComponentStatus = (output, context) => {
    return {
        componentState: output.componentState !== undefined && output.componentState !== null ? output.componentState : undefined,
        errors: output.errors !== undefined && output.errors !== null
            ? deserializeAws_restJson1StringMap(output.errors, context)
            : undefined,
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
const deserializeAws_restJson1Component = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        componentName: output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
        latestVersion: output.latestVersion !== undefined && output.latestVersion !== null
            ? deserializeAws_restJson1ComponentLatestVersion(output.latestVersion, context)
            : undefined,
    };
};
const deserializeAws_restJson1ComponentConfigurationPathList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ComponentConfigurationUpdate = (output, context) => {
    return {
        merge: output.merge !== undefined && output.merge !== null ? output.merge : undefined,
        reset: output.reset !== undefined && output.reset !== null
            ? deserializeAws_restJson1ComponentConfigurationPathList(output.reset, context)
            : undefined,
    };
};
const deserializeAws_restJson1ComponentDeploymentSpecification = (output, context) => {
    return {
        componentVersion: output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
        configurationUpdate: output.configurationUpdate !== undefined && output.configurationUpdate !== null
            ? deserializeAws_restJson1ComponentConfigurationUpdate(output.configurationUpdate, context)
            : undefined,
        runWith: output.runWith !== undefined && output.runWith !== null
            ? deserializeAws_restJson1ComponentRunWith(output.runWith, context)
            : undefined,
    };
};
const deserializeAws_restJson1ComponentDeploymentSpecifications = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1ComponentDeploymentSpecification(value, context),
        };
    }, {});
};
const deserializeAws_restJson1ComponentLatestVersion = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        componentVersion: output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
        creationTimestamp: output.creationTimestamp !== undefined && output.creationTimestamp !== null
            ? new Date(Math.round(output.creationTimestamp * 1000))
            : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        platforms: output.platforms !== undefined && output.platforms !== null
            ? deserializeAws_restJson1ComponentPlatformList(output.platforms, context)
            : undefined,
        publisher: output.publisher !== undefined && output.publisher !== null ? output.publisher : undefined,
    };
};
const deserializeAws_restJson1ComponentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Component(entry, context);
    });
};
const deserializeAws_restJson1ComponentPlatform = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1PlatformAttributesMap(output.attributes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ComponentPlatformList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentPlatform(entry, context);
    });
};
const deserializeAws_restJson1ComponentRunWith = (output, context) => {
    return {
        posixUser: output.posixUser !== undefined && output.posixUser !== null ? output.posixUser : undefined,
    };
};
const deserializeAws_restJson1ComponentVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ComponentVersionListItem(entry, context);
    });
};
const deserializeAws_restJson1ComponentVersionListItem = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        componentName: output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
        componentVersion: output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
    };
};
const deserializeAws_restJson1CoreDevice = (output, context) => {
    return {
        coreDeviceThingName: output.coreDeviceThingName !== undefined && output.coreDeviceThingName !== null
            ? output.coreDeviceThingName
            : undefined,
        lastStatusUpdateTimestamp: output.lastStatusUpdateTimestamp !== undefined && output.lastStatusUpdateTimestamp !== null
            ? new Date(Math.round(output.lastStatusUpdateTimestamp * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1CoreDevicesList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1CoreDevice(entry, context);
    });
};
const deserializeAws_restJson1Deployment = (output, context) => {
    return {
        creationTimestamp: output.creationTimestamp !== undefined && output.creationTimestamp !== null
            ? new Date(Math.round(output.creationTimestamp * 1000))
            : undefined,
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        deploymentName: output.deploymentName !== undefined && output.deploymentName !== null ? output.deploymentName : undefined,
        deploymentStatus: output.deploymentStatus !== undefined && output.deploymentStatus !== null ? output.deploymentStatus : undefined,
        isLatestForTarget: output.isLatestForTarget !== undefined && output.isLatestForTarget !== null
            ? output.isLatestForTarget
            : undefined,
        revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
    };
};
const deserializeAws_restJson1DeploymentComponentUpdatePolicy = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_restJson1DeploymentConfigurationValidationPolicy = (output, context) => {
    return {
        timeoutInSeconds: output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
    };
};
const deserializeAws_restJson1DeploymentIoTJobConfiguration = (output, context) => {
    return {
        abortConfig: output.abortConfig !== undefined && output.abortConfig !== null
            ? deserializeAws_restJson1IoTJobAbortConfig(output.abortConfig, context)
            : undefined,
        jobExecutionsRolloutConfig: output.jobExecutionsRolloutConfig !== undefined && output.jobExecutionsRolloutConfig !== null
            ? deserializeAws_restJson1IoTJobExecutionsRolloutConfig(output.jobExecutionsRolloutConfig, context)
            : undefined,
        timeoutConfig: output.timeoutConfig !== undefined && output.timeoutConfig !== null
            ? deserializeAws_restJson1IoTJobTimeoutConfig(output.timeoutConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1DeploymentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Deployment(entry, context);
    });
};
const deserializeAws_restJson1DeploymentPolicies = (output, context) => {
    return {
        componentUpdatePolicy: output.componentUpdatePolicy !== undefined && output.componentUpdatePolicy !== null
            ? deserializeAws_restJson1DeploymentComponentUpdatePolicy(output.componentUpdatePolicy, context)
            : undefined,
        configurationValidationPolicy: output.configurationValidationPolicy !== undefined && output.configurationValidationPolicy !== null
            ? deserializeAws_restJson1DeploymentConfigurationValidationPolicy(output.configurationValidationPolicy, context)
            : undefined,
        failureHandlingPolicy: output.failureHandlingPolicy !== undefined && output.failureHandlingPolicy !== null
            ? output.failureHandlingPolicy
            : undefined,
    };
};
const deserializeAws_restJson1EffectiveDeployment = (output, context) => {
    return {
        coreDeviceExecutionStatus: output.coreDeviceExecutionStatus !== undefined && output.coreDeviceExecutionStatus !== null
            ? output.coreDeviceExecutionStatus
            : undefined,
        creationTimestamp: output.creationTimestamp !== undefined && output.creationTimestamp !== null
            ? new Date(Math.round(output.creationTimestamp * 1000))
            : undefined,
        deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
        deploymentName: output.deploymentName !== undefined && output.deploymentName !== null ? output.deploymentName : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        iotJobArn: output.iotJobArn !== undefined && output.iotJobArn !== null ? output.iotJobArn : undefined,
        iotJobId: output.iotJobId !== undefined && output.iotJobId !== null ? output.iotJobId : undefined,
        modifiedTimestamp: output.modifiedTimestamp !== undefined && output.modifiedTimestamp !== null
            ? new Date(Math.round(output.modifiedTimestamp * 1000))
            : undefined,
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
    };
};
const deserializeAws_restJson1EffectiveDeploymentsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EffectiveDeployment(entry, context);
    });
};
const deserializeAws_restJson1InstalledComponent = (output, context) => {
    return {
        componentName: output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
        componentVersion: output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
        isRoot: output.isRoot !== undefined && output.isRoot !== null ? output.isRoot : undefined,
        lifecycleState: output.lifecycleState !== undefined && output.lifecycleState !== null ? output.lifecycleState : undefined,
        lifecycleStateDetails: output.lifecycleStateDetails !== undefined && output.lifecycleStateDetails !== null
            ? output.lifecycleStateDetails
            : undefined,
    };
};
const deserializeAws_restJson1InstalledComponentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1InstalledComponent(entry, context);
    });
};
const deserializeAws_restJson1IoTJobAbortConfig = (output, context) => {
    return {
        criteriaList: output.criteriaList !== undefined && output.criteriaList !== null
            ? deserializeAws_restJson1IoTJobAbortCriteriaList(output.criteriaList, context)
            : undefined,
    };
};
const deserializeAws_restJson1IoTJobAbortCriteria = (output, context) => {
    return {
        action: output.action !== undefined && output.action !== null ? output.action : undefined,
        failureType: output.failureType !== undefined && output.failureType !== null ? output.failureType : undefined,
        minNumberOfExecutedThings: output.minNumberOfExecutedThings !== undefined && output.minNumberOfExecutedThings !== null
            ? output.minNumberOfExecutedThings
            : undefined,
        thresholdPercentage: output.thresholdPercentage !== undefined && output.thresholdPercentage !== null
            ? output.thresholdPercentage
            : undefined,
    };
};
const deserializeAws_restJson1IoTJobAbortCriteriaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
};
const deserializeAws_restJson1IoTJobExecutionsRolloutConfig = (output, context) => {
    return {
        exponentialRate: output.exponentialRate !== undefined && output.exponentialRate !== null
            ? deserializeAws_restJson1IoTJobExponentialRolloutRate(output.exponentialRate, context)
            : undefined,
        maximumPerMinute: output.maximumPerMinute !== undefined && output.maximumPerMinute !== null ? output.maximumPerMinute : undefined,
    };
};
const deserializeAws_restJson1IoTJobExponentialRolloutRate = (output, context) => {
    return {
        baseRatePerMinute: output.baseRatePerMinute !== undefined && output.baseRatePerMinute !== null
            ? output.baseRatePerMinute
            : undefined,
        incrementFactor: output.incrementFactor !== undefined && output.incrementFactor !== null ? output.incrementFactor : undefined,
        rateIncreaseCriteria: output.rateIncreaseCriteria !== undefined && output.rateIncreaseCriteria !== null
            ? deserializeAws_restJson1IoTJobRateIncreaseCriteria(output.rateIncreaseCriteria, context)
            : undefined,
    };
};
const deserializeAws_restJson1IoTJobRateIncreaseCriteria = (output, context) => {
    return {
        numberOfNotifiedThings: output.numberOfNotifiedThings !== undefined && output.numberOfNotifiedThings !== null
            ? output.numberOfNotifiedThings
            : undefined,
        numberOfSucceededThings: output.numberOfSucceededThings !== undefined && output.numberOfSucceededThings !== null
            ? output.numberOfSucceededThings
            : undefined,
    };
};
const deserializeAws_restJson1IoTJobTimeoutConfig = (output, context) => {
    return {
        inProgressTimeoutInMinutes: output.inProgressTimeoutInMinutes !== undefined && output.inProgressTimeoutInMinutes !== null
            ? output.inProgressTimeoutInMinutes
            : undefined,
    };
};
const deserializeAws_restJson1PlatformAttributesMap = (output, context) => {
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
const deserializeAws_restJson1ResolvedComponentVersion = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        componentName: output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
        componentVersion: output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
        recipe: output.recipe !== undefined && output.recipe !== null ? context.base64Decoder(output.recipe) : undefined,
    };
};
const deserializeAws_restJson1ResolvedComponentVersionsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResolvedComponentVersion(entry, context);
    });
};
const deserializeAws_restJson1StringMap = (output, context) => {
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