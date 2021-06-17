"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1CreateStreamingSessionStreamCommand = exports.deserializeAws_restJson1CreateStreamingSessionCommand = exports.deserializeAws_restJson1CreateStreamingImageCommand = exports.deserializeAws_restJson1CreateLaunchProfileCommand = exports.deserializeAws_restJson1AcceptEulasCommand = exports.serializeAws_restJson1UpdateStudioComponentCommand = exports.serializeAws_restJson1UpdateStudioCommand = exports.serializeAws_restJson1UpdateStreamingImageCommand = exports.serializeAws_restJson1UpdateLaunchProfileMemberCommand = exports.serializeAws_restJson1UpdateLaunchProfileCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartStudioSSOConfigurationRepairCommand = exports.serializeAws_restJson1PutStudioMembersCommand = exports.serializeAws_restJson1PutLaunchProfileMembersCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListStudiosCommand = exports.serializeAws_restJson1ListStudioMembersCommand = exports.serializeAws_restJson1ListStudioComponentsCommand = exports.serializeAws_restJson1ListStreamingSessionsCommand = exports.serializeAws_restJson1ListStreamingImagesCommand = exports.serializeAws_restJson1ListLaunchProfilesCommand = exports.serializeAws_restJson1ListLaunchProfileMembersCommand = exports.serializeAws_restJson1ListEulasCommand = exports.serializeAws_restJson1ListEulaAcceptancesCommand = exports.serializeAws_restJson1GetStudioMemberCommand = exports.serializeAws_restJson1GetStudioComponentCommand = exports.serializeAws_restJson1GetStudioCommand = exports.serializeAws_restJson1GetStreamingSessionStreamCommand = exports.serializeAws_restJson1GetStreamingSessionCommand = exports.serializeAws_restJson1GetStreamingImageCommand = exports.serializeAws_restJson1GetLaunchProfileMemberCommand = exports.serializeAws_restJson1GetLaunchProfileInitializationCommand = exports.serializeAws_restJson1GetLaunchProfileDetailsCommand = exports.serializeAws_restJson1GetLaunchProfileCommand = exports.serializeAws_restJson1GetEulaCommand = exports.serializeAws_restJson1DeleteStudioMemberCommand = exports.serializeAws_restJson1DeleteStudioComponentCommand = exports.serializeAws_restJson1DeleteStudioCommand = exports.serializeAws_restJson1DeleteStreamingSessionCommand = exports.serializeAws_restJson1DeleteStreamingImageCommand = exports.serializeAws_restJson1DeleteLaunchProfileMemberCommand = exports.serializeAws_restJson1DeleteLaunchProfileCommand = exports.serializeAws_restJson1CreateStudioComponentCommand = exports.serializeAws_restJson1CreateStudioCommand = exports.serializeAws_restJson1CreateStreamingSessionStreamCommand = exports.serializeAws_restJson1CreateStreamingSessionCommand = exports.serializeAws_restJson1CreateStreamingImageCommand = exports.serializeAws_restJson1CreateLaunchProfileCommand = exports.serializeAws_restJson1AcceptEulasCommand = void 0;
exports.deserializeAws_restJson1UpdateStudioComponentCommand = exports.deserializeAws_restJson1UpdateStudioCommand = exports.deserializeAws_restJson1UpdateStreamingImageCommand = exports.deserializeAws_restJson1UpdateLaunchProfileMemberCommand = exports.deserializeAws_restJson1UpdateLaunchProfileCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand = exports.deserializeAws_restJson1PutStudioMembersCommand = exports.deserializeAws_restJson1PutLaunchProfileMembersCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListStudiosCommand = exports.deserializeAws_restJson1ListStudioMembersCommand = exports.deserializeAws_restJson1ListStudioComponentsCommand = exports.deserializeAws_restJson1ListStreamingSessionsCommand = exports.deserializeAws_restJson1ListStreamingImagesCommand = exports.deserializeAws_restJson1ListLaunchProfilesCommand = exports.deserializeAws_restJson1ListLaunchProfileMembersCommand = exports.deserializeAws_restJson1ListEulasCommand = exports.deserializeAws_restJson1ListEulaAcceptancesCommand = exports.deserializeAws_restJson1GetStudioMemberCommand = exports.deserializeAws_restJson1GetStudioComponentCommand = exports.deserializeAws_restJson1GetStudioCommand = exports.deserializeAws_restJson1GetStreamingSessionStreamCommand = exports.deserializeAws_restJson1GetStreamingSessionCommand = exports.deserializeAws_restJson1GetStreamingImageCommand = exports.deserializeAws_restJson1GetLaunchProfileMemberCommand = exports.deserializeAws_restJson1GetLaunchProfileInitializationCommand = exports.deserializeAws_restJson1GetLaunchProfileDetailsCommand = exports.deserializeAws_restJson1GetLaunchProfileCommand = exports.deserializeAws_restJson1GetEulaCommand = exports.deserializeAws_restJson1DeleteStudioMemberCommand = exports.deserializeAws_restJson1DeleteStudioComponentCommand = exports.deserializeAws_restJson1DeleteStudioCommand = exports.deserializeAws_restJson1DeleteStreamingSessionCommand = exports.deserializeAws_restJson1DeleteStreamingImageCommand = exports.deserializeAws_restJson1DeleteLaunchProfileMemberCommand = exports.deserializeAws_restJson1DeleteLaunchProfileCommand = exports.deserializeAws_restJson1CreateStudioComponentCommand = exports.deserializeAws_restJson1CreateStudioCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1AcceptEulasCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/eula-acceptances";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.eulaIds !== undefined &&
            input.eulaIds !== null && { eulaIds: serializeAws_restJson1EulaIdList(input.eulaIds, context) }),
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
exports.serializeAws_restJson1AcceptEulasCommand = serializeAws_restJson1AcceptEulasCommand;
const serializeAws_restJson1CreateLaunchProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.ec2SubnetIds !== undefined &&
            input.ec2SubnetIds !== null && {
            ec2SubnetIds: serializeAws_restJson1EC2SubnetIdList(input.ec2SubnetIds, context),
        }),
        ...(input.launchProfileProtocolVersions !== undefined &&
            input.launchProfileProtocolVersions !== null && {
            launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(input.launchProfileProtocolVersions, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.streamConfiguration !== undefined &&
            input.streamConfiguration !== null && {
            streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
        }),
        ...(input.studioComponentIds !== undefined &&
            input.studioComponentIds !== null && {
            studioComponentIds: serializeAws_restJson1LaunchProfileStudioComponentIdList(input.studioComponentIds, context),
        }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateLaunchProfileCommand = serializeAws_restJson1CreateLaunchProfileCommand;
const serializeAws_restJson1CreateStreamingImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-images";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.ec2ImageId !== undefined && input.ec2ImageId !== null && { ec2ImageId: input.ec2ImageId }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateStreamingImageCommand = serializeAws_restJson1CreateStreamingImageCommand;
const serializeAws_restJson1CreateStreamingSessionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.ec2InstanceType !== undefined &&
            input.ec2InstanceType !== null && { ec2InstanceType: input.ec2InstanceType }),
        ...(input.launchProfileId !== undefined &&
            input.launchProfileId !== null && { launchProfileId: input.launchProfileId }),
        ...(input.streamingImageId !== undefined &&
            input.streamingImageId !== null && { streamingImageId: input.streamingImageId }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
exports.serializeAws_restJson1CreateStreamingSessionCommand = serializeAws_restJson1CreateStreamingSessionCommand;
const serializeAws_restJson1CreateStreamingSessionStreamCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams";
    if (input.sessionId !== undefined) {
        const labelValue = input.sessionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: sessionId.");
        }
        resolvedPath = resolvedPath.replace("{sessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: sessionId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.expirationInSeconds !== undefined &&
            input.expirationInSeconds !== null && { expirationInSeconds: input.expirationInSeconds }),
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
exports.serializeAws_restJson1CreateStreamingSessionStreamCommand = serializeAws_restJson1CreateStreamingSessionStreamCommand;
const serializeAws_restJson1CreateStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios";
    let body;
    body = JSON.stringify({
        ...(input.adminRoleArn !== undefined && input.adminRoleArn !== null && { adminRoleArn: input.adminRoleArn }),
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.studioEncryptionConfiguration !== undefined &&
            input.studioEncryptionConfiguration !== null && {
            studioEncryptionConfiguration: serializeAws_restJson1StudioEncryptionConfiguration(input.studioEncryptionConfiguration, context),
        }),
        ...(input.studioName !== undefined && input.studioName !== null && { studioName: input.studioName }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
        ...(input.userRoleArn !== undefined && input.userRoleArn !== null && { userRoleArn: input.userRoleArn }),
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
exports.serializeAws_restJson1CreateStudioCommand = serializeAws_restJson1CreateStudioCommand;
const serializeAws_restJson1CreateStudioComponentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/studio-components";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.ec2SecurityGroupIds !== undefined &&
            input.ec2SecurityGroupIds !== null && {
            ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(input.ec2SecurityGroupIds, context),
        }),
        ...(input.initializationScripts !== undefined &&
            input.initializationScripts !== null && {
            initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(input.initializationScripts, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.scriptParameters !== undefined &&
            input.scriptParameters !== null && {
            scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(input.scriptParameters, context),
        }),
        ...(input.subtype !== undefined && input.subtype !== null && { subtype: input.subtype }),
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
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
exports.serializeAws_restJson1CreateStudioComponentCommand = serializeAws_restJson1CreateStudioComponentCommand;
const serializeAws_restJson1DeleteLaunchProfileCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteLaunchProfileCommand = serializeAws_restJson1DeleteLaunchProfileCommand;
const serializeAws_restJson1DeleteLaunchProfileMemberCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.principalId !== undefined) {
        const labelValue = input.principalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: principalId.");
        }
        resolvedPath = resolvedPath.replace("{principalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: principalId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteLaunchProfileMemberCommand = serializeAws_restJson1DeleteLaunchProfileMemberCommand;
const serializeAws_restJson1DeleteStreamingImageCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
    if (input.streamingImageId !== undefined) {
        const labelValue = input.streamingImageId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: streamingImageId.");
        }
        resolvedPath = resolvedPath.replace("{streamingImageId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: streamingImageId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteStreamingImageCommand = serializeAws_restJson1DeleteStreamingImageCommand;
const serializeAws_restJson1DeleteStreamingSessionCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
    if (input.sessionId !== undefined) {
        const labelValue = input.sessionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: sessionId.");
        }
        resolvedPath = resolvedPath.replace("{sessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: sessionId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteStreamingSessionCommand = serializeAws_restJson1DeleteStreamingSessionCommand;
const serializeAws_restJson1DeleteStudioCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteStudioCommand = serializeAws_restJson1DeleteStudioCommand;
const serializeAws_restJson1DeleteStudioComponentCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
    if (input.studioComponentId !== undefined) {
        const labelValue = input.studioComponentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioComponentId.");
        }
        resolvedPath = resolvedPath.replace("{studioComponentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioComponentId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteStudioComponentCommand = serializeAws_restJson1DeleteStudioComponentCommand;
const serializeAws_restJson1DeleteStudioMemberCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/membership/{principalId}";
    if (input.principalId !== undefined) {
        const labelValue = input.principalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: principalId.");
        }
        resolvedPath = resolvedPath.replace("{principalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: principalId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1DeleteStudioMemberCommand = serializeAws_restJson1DeleteStudioMemberCommand;
const serializeAws_restJson1GetEulaCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/eulas/{eulaId}";
    if (input.eulaId !== undefined) {
        const labelValue = input.eulaId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: eulaId.");
        }
        resolvedPath = resolvedPath.replace("{eulaId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: eulaId.");
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
exports.serializeAws_restJson1GetEulaCommand = serializeAws_restJson1GetEulaCommand;
const serializeAws_restJson1GetLaunchProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetLaunchProfileCommand = serializeAws_restJson1GetLaunchProfileCommand;
const serializeAws_restJson1GetLaunchProfileDetailsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/details";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetLaunchProfileDetailsCommand = serializeAws_restJson1GetLaunchProfileDetailsCommand;
const serializeAws_restJson1GetLaunchProfileInitializationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/init";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.launchProfileProtocolVersions !== undefined && {
            launchProfileProtocolVersions: (input.launchProfileProtocolVersions || []).map((_entry) => _entry),
        }),
        ...(input.launchPurpose !== undefined && { launchPurpose: input.launchPurpose }),
        ...(input.platform !== undefined && { platform: input.platform }),
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
exports.serializeAws_restJson1GetLaunchProfileInitializationCommand = serializeAws_restJson1GetLaunchProfileInitializationCommand;
const serializeAws_restJson1GetLaunchProfileMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.principalId !== undefined) {
        const labelValue = input.principalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: principalId.");
        }
        resolvedPath = resolvedPath.replace("{principalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: principalId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetLaunchProfileMemberCommand = serializeAws_restJson1GetLaunchProfileMemberCommand;
const serializeAws_restJson1GetStreamingImageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
    if (input.streamingImageId !== undefined) {
        const labelValue = input.streamingImageId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: streamingImageId.");
        }
        resolvedPath = resolvedPath.replace("{streamingImageId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: streamingImageId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStreamingImageCommand = serializeAws_restJson1GetStreamingImageCommand;
const serializeAws_restJson1GetStreamingSessionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}";
    if (input.sessionId !== undefined) {
        const labelValue = input.sessionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: sessionId.");
        }
        resolvedPath = resolvedPath.replace("{sessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: sessionId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStreamingSessionCommand = serializeAws_restJson1GetStreamingSessionCommand;
const serializeAws_restJson1GetStreamingSessionStreamCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions/{sessionId}/streams/{streamId}";
    if (input.sessionId !== undefined) {
        const labelValue = input.sessionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: sessionId.");
        }
        resolvedPath = resolvedPath.replace("{sessionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: sessionId.");
    }
    if (input.streamId !== undefined) {
        const labelValue = input.streamId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: streamId.");
        }
        resolvedPath = resolvedPath.replace("{streamId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: streamId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStreamingSessionStreamCommand = serializeAws_restJson1GetStreamingSessionStreamCommand;
const serializeAws_restJson1GetStudioCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStudioCommand = serializeAws_restJson1GetStudioCommand;
const serializeAws_restJson1GetStudioComponentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
    if (input.studioComponentId !== undefined) {
        const labelValue = input.studioComponentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioComponentId.");
        }
        resolvedPath = resolvedPath.replace("{studioComponentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioComponentId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStudioComponentCommand = serializeAws_restJson1GetStudioComponentCommand;
const serializeAws_restJson1GetStudioMemberCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/membership/{principalId}";
    if (input.principalId !== undefined) {
        const labelValue = input.principalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: principalId.");
        }
        resolvedPath = resolvedPath.replace("{principalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: principalId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1GetStudioMemberCommand = serializeAws_restJson1GetStudioMemberCommand;
const serializeAws_restJson1ListEulaAcceptancesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/eula-acceptances";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.eulaIds !== undefined && { eulaIds: (input.eulaIds || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListEulaAcceptancesCommand = serializeAws_restJson1ListEulaAcceptancesCommand;
const serializeAws_restJson1ListEulasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/eulas";
    const query = {
        ...(input.eulaIds !== undefined && { eulaIds: (input.eulaIds || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListEulasCommand = serializeAws_restJson1ListEulasCommand;
const serializeAws_restJson1ListLaunchProfileMembersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1ListLaunchProfileMembersCommand = serializeAws_restJson1ListLaunchProfileMembersCommand;
const serializeAws_restJson1ListLaunchProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.principalId !== undefined && { principalId: input.principalId }),
        ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListLaunchProfilesCommand = serializeAws_restJson1ListLaunchProfilesCommand;
const serializeAws_restJson1ListStreamingImagesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-images";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.owner !== undefined && { owner: input.owner }),
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
exports.serializeAws_restJson1ListStreamingImagesCommand = serializeAws_restJson1ListStreamingImagesCommand;
const serializeAws_restJson1ListStreamingSessionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-sessions";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.createdBy !== undefined && { createdBy: input.createdBy }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.sessionIds !== undefined && { sessionIds: input.sessionIds }),
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
exports.serializeAws_restJson1ListStreamingSessionsCommand = serializeAws_restJson1ListStreamingSessionsCommand;
const serializeAws_restJson1ListStudioComponentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/studio-components";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    const query = {
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.states !== undefined && { states: (input.states || []).map((_entry) => _entry) }),
        ...(input.types !== undefined && { types: (input.types || []).map((_entry) => _entry) }),
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
exports.serializeAws_restJson1ListStudioComponentsCommand = serializeAws_restJson1ListStudioComponentsCommand;
const serializeAws_restJson1ListStudioMembersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios/{studioId}/membership";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
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
exports.serializeAws_restJson1ListStudioMembersCommand = serializeAws_restJson1ListStudioMembersCommand;
const serializeAws_restJson1ListStudiosCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/studios";
    const query = {
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
exports.serializeAws_restJson1ListStudiosCommand = serializeAws_restJson1ListStudiosCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-08-01/tags/{resourceArn}";
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
const serializeAws_restJson1PutLaunchProfileMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.identityStoreId !== undefined &&
            input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
        ...(input.members !== undefined &&
            input.members !== null && { members: serializeAws_restJson1NewLaunchProfileMemberList(input.members, context) }),
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
exports.serializeAws_restJson1PutLaunchProfileMembersCommand = serializeAws_restJson1PutLaunchProfileMembersCommand;
const serializeAws_restJson1PutStudioMembersCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/membership";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.identityStoreId !== undefined &&
            input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
        ...(input.members !== undefined &&
            input.members !== null && { members: serializeAws_restJson1NewStudioMemberList(input.members, context) }),
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
exports.serializeAws_restJson1PutStudioMembersCommand = serializeAws_restJson1PutStudioMembersCommand;
const serializeAws_restJson1StartStudioSSOConfigurationRepairCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/sso-configuration";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
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
exports.serializeAws_restJson1StartStudioSSOConfigurationRepairCommand = serializeAws_restJson1StartStudioSSOConfigurationRepairCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2020-08-01/tags/{resourceArn}";
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
        ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
    let resolvedPath = "/2020-08-01/tags/{resourceArn}";
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
const serializeAws_restJson1UpdateLaunchProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.launchProfileProtocolVersions !== undefined &&
            input.launchProfileProtocolVersions !== null && {
            launchProfileProtocolVersions: serializeAws_restJson1LaunchProfileProtocolVersionList(input.launchProfileProtocolVersions, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.streamConfiguration !== undefined &&
            input.streamConfiguration !== null && {
            streamConfiguration: serializeAws_restJson1StreamConfigurationCreate(input.streamConfiguration, context),
        }),
        ...(input.studioComponentIds !== undefined &&
            input.studioComponentIds !== null && {
            studioComponentIds: serializeAws_restJson1LaunchProfileStudioComponentIdList(input.studioComponentIds, context),
        }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateLaunchProfileCommand = serializeAws_restJson1UpdateLaunchProfileCommand;
const serializeAws_restJson1UpdateLaunchProfileMemberCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/launch-profiles/{launchProfileId}/membership/{principalId}";
    if (input.launchProfileId !== undefined) {
        const labelValue = input.launchProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: launchProfileId.");
        }
        resolvedPath = resolvedPath.replace("{launchProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: launchProfileId.");
    }
    if (input.principalId !== undefined) {
        const labelValue = input.principalId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: principalId.");
        }
        resolvedPath = resolvedPath.replace("{principalId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: principalId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateLaunchProfileMemberCommand = serializeAws_restJson1UpdateLaunchProfileMemberCommand;
const serializeAws_restJson1UpdateStreamingImageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/streaming-images/{streamingImageId}";
    if (input.streamingImageId !== undefined) {
        const labelValue = input.streamingImageId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: streamingImageId.");
        }
        resolvedPath = resolvedPath.replace("{streamingImageId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: streamingImageId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateStreamingImageCommand = serializeAws_restJson1UpdateStreamingImageCommand;
const serializeAws_restJson1UpdateStudioCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}";
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.adminRoleArn !== undefined && input.adminRoleArn !== null && { adminRoleArn: input.adminRoleArn }),
        ...(input.displayName !== undefined && input.displayName !== null && { displayName: input.displayName }),
        ...(input.userRoleArn !== undefined && input.userRoleArn !== null && { userRoleArn: input.userRoleArn }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateStudioCommand = serializeAws_restJson1UpdateStudioCommand;
const serializeAws_restJson1UpdateStudioComponentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.clientToken) && { "x-amz-client-token": input.clientToken }),
    };
    let resolvedPath = "/2020-08-01/studios/{studioId}/studio-components/{studioComponentId}";
    if (input.studioComponentId !== undefined) {
        const labelValue = input.studioComponentId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioComponentId.");
        }
        resolvedPath = resolvedPath.replace("{studioComponentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioComponentId.");
    }
    if (input.studioId !== undefined) {
        const labelValue = input.studioId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: studioId.");
        }
        resolvedPath = resolvedPath.replace("{studioId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: studioId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.configuration !== undefined &&
            input.configuration !== null && {
            configuration: serializeAws_restJson1StudioComponentConfiguration(input.configuration, context),
        }),
        ...(input.description !== undefined && input.description !== null && { description: input.description }),
        ...(input.ec2SecurityGroupIds !== undefined &&
            input.ec2SecurityGroupIds !== null && {
            ec2SecurityGroupIds: serializeAws_restJson1StudioComponentSecurityGroupIdList(input.ec2SecurityGroupIds, context),
        }),
        ...(input.initializationScripts !== undefined &&
            input.initializationScripts !== null && {
            initializationScripts: serializeAws_restJson1StudioComponentInitializationScriptList(input.initializationScripts, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.scriptParameters !== undefined &&
            input.scriptParameters !== null && {
            scriptParameters: serializeAws_restJson1StudioComponentScriptParameterKeyValueList(input.scriptParameters, context),
        }),
        ...(input.subtype !== undefined && input.subtype !== null && { subtype: input.subtype }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PATCH",
        headers,
        path: resolvedPath,
        body,
    });
};
exports.serializeAws_restJson1UpdateStudioComponentCommand = serializeAws_restJson1UpdateStudioComponentCommand;
const deserializeAws_restJson1AcceptEulasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1AcceptEulasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eulaAcceptances: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eulaAcceptances !== undefined && data.eulaAcceptances !== null) {
        contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1AcceptEulasCommand = deserializeAws_restJson1AcceptEulasCommand;
const deserializeAws_restJson1AcceptEulasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateLaunchProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateLaunchProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfile !== undefined && data.launchProfile !== null) {
        contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateLaunchProfileCommand = deserializeAws_restJson1CreateLaunchProfileCommand;
const deserializeAws_restJson1CreateLaunchProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateStreamingImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStreamingImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        streamingImage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.streamingImage !== undefined && data.streamingImage !== null) {
        contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStreamingImageCommand = deserializeAws_restJson1CreateStreamingImageCommand;
const deserializeAws_restJson1CreateStreamingImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateStreamingSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStreamingSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        session: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.session !== undefined && data.session !== null) {
        contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStreamingSessionCommand = deserializeAws_restJson1CreateStreamingSessionCommand;
const deserializeAws_restJson1CreateStreamingSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateStreamingSessionStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStreamingSessionStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        stream: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.stream !== undefined && data.stream !== null) {
        contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStreamingSessionStreamCommand = deserializeAws_restJson1CreateStreamingSessionStreamCommand;
const deserializeAws_restJson1CreateStreamingSessionStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateStudioCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStudioCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studio: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studio !== undefined && data.studio !== null) {
        contents.studio = deserializeAws_restJson1Studio(data.studio, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStudioCommand = deserializeAws_restJson1CreateStudioCommand;
const deserializeAws_restJson1CreateStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1CreateStudioComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateStudioComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studioComponent: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studioComponent !== undefined && data.studioComponent !== null) {
        contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStudioComponentCommand = deserializeAws_restJson1CreateStudioComponentCommand;
const deserializeAws_restJson1CreateStudioComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteLaunchProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLaunchProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfile !== undefined && data.launchProfile !== null) {
        contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLaunchProfileCommand = deserializeAws_restJson1DeleteLaunchProfileCommand;
const deserializeAws_restJson1DeleteLaunchProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteLaunchProfileMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteLaunchProfileMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteLaunchProfileMemberCommand = deserializeAws_restJson1DeleteLaunchProfileMemberCommand;
const deserializeAws_restJson1DeleteLaunchProfileMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteStreamingImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStreamingImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        streamingImage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.streamingImage !== undefined && data.streamingImage !== null) {
        contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStreamingImageCommand = deserializeAws_restJson1DeleteStreamingImageCommand;
const deserializeAws_restJson1DeleteStreamingImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteStreamingSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStreamingSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        session: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.session !== undefined && data.session !== null) {
        contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStreamingSessionCommand = deserializeAws_restJson1DeleteStreamingSessionCommand;
const deserializeAws_restJson1DeleteStreamingSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteStudioCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStudioCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studio: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studio !== undefined && data.studio !== null) {
        contents.studio = deserializeAws_restJson1Studio(data.studio, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStudioCommand = deserializeAws_restJson1DeleteStudioCommand;
const deserializeAws_restJson1DeleteStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteStudioComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStudioComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studioComponent: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studioComponent !== undefined && data.studioComponent !== null) {
        contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStudioComponentCommand = deserializeAws_restJson1DeleteStudioComponentCommand;
const deserializeAws_restJson1DeleteStudioComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1DeleteStudioMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteStudioMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStudioMemberCommand = deserializeAws_restJson1DeleteStudioMemberCommand;
const deserializeAws_restJson1DeleteStudioMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetEulaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetEulaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eula: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eula !== undefined && data.eula !== null) {
        contents.eula = deserializeAws_restJson1Eula(data.eula, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetEulaCommand = deserializeAws_restJson1GetEulaCommand;
const deserializeAws_restJson1GetEulaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetLaunchProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLaunchProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfile !== undefined && data.launchProfile !== null) {
        contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLaunchProfileCommand = deserializeAws_restJson1GetLaunchProfileCommand;
const deserializeAws_restJson1GetLaunchProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetLaunchProfileDetailsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLaunchProfileDetailsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfile: undefined,
        streamingImages: undefined,
        studioComponentSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfile !== undefined && data.launchProfile !== null) {
        contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
    }
    if (data.streamingImages !== undefined && data.streamingImages !== null) {
        contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
    }
    if (data.studioComponentSummaries !== undefined && data.studioComponentSummaries !== null) {
        contents.studioComponentSummaries = deserializeAws_restJson1StudioComponentSummaryList(data.studioComponentSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLaunchProfileDetailsCommand = deserializeAws_restJson1GetLaunchProfileDetailsCommand;
const deserializeAws_restJson1GetLaunchProfileDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetLaunchProfileInitializationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLaunchProfileInitializationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfileInitialization: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfileInitialization !== undefined && data.launchProfileInitialization !== null) {
        contents.launchProfileInitialization = deserializeAws_restJson1LaunchProfileInitialization(data.launchProfileInitialization, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLaunchProfileInitializationCommand = deserializeAws_restJson1GetLaunchProfileInitializationCommand;
const deserializeAws_restJson1GetLaunchProfileInitializationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetLaunchProfileMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetLaunchProfileMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        member: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.member !== undefined && data.member !== null) {
        contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetLaunchProfileMemberCommand = deserializeAws_restJson1GetLaunchProfileMemberCommand;
const deserializeAws_restJson1GetLaunchProfileMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStreamingImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStreamingImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        streamingImage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.streamingImage !== undefined && data.streamingImage !== null) {
        contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStreamingImageCommand = deserializeAws_restJson1GetStreamingImageCommand;
const deserializeAws_restJson1GetStreamingImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStreamingSessionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStreamingSessionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        session: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.session !== undefined && data.session !== null) {
        contents.session = deserializeAws_restJson1StreamingSession(data.session, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStreamingSessionCommand = deserializeAws_restJson1GetStreamingSessionCommand;
const deserializeAws_restJson1GetStreamingSessionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStreamingSessionStreamCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStreamingSessionStreamCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        stream: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.stream !== undefined && data.stream !== null) {
        contents.stream = deserializeAws_restJson1StreamingSessionStream(data.stream, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStreamingSessionStreamCommand = deserializeAws_restJson1GetStreamingSessionStreamCommand;
const deserializeAws_restJson1GetStreamingSessionStreamCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStudioCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStudioCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studio: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studio !== undefined && data.studio !== null) {
        contents.studio = deserializeAws_restJson1Studio(data.studio, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStudioCommand = deserializeAws_restJson1GetStudioCommand;
const deserializeAws_restJson1GetStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStudioComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStudioComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studioComponent: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studioComponent !== undefined && data.studioComponent !== null) {
        contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStudioComponentCommand = deserializeAws_restJson1GetStudioComponentCommand;
const deserializeAws_restJson1GetStudioComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1GetStudioMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetStudioMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        member: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.member !== undefined && data.member !== null) {
        contents.member = deserializeAws_restJson1StudioMembership(data.member, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStudioMemberCommand = deserializeAws_restJson1GetStudioMemberCommand;
const deserializeAws_restJson1GetStudioMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListEulaAcceptancesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEulaAcceptancesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eulaAcceptances: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eulaAcceptances !== undefined && data.eulaAcceptances !== null) {
        contents.eulaAcceptances = deserializeAws_restJson1EulaAcceptanceList(data.eulaAcceptances, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEulaAcceptancesCommand = deserializeAws_restJson1ListEulaAcceptancesCommand;
const deserializeAws_restJson1ListEulaAcceptancesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListEulasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListEulasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        eulas: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.eulas !== undefined && data.eulas !== null) {
        contents.eulas = deserializeAws_restJson1EulaList(data.eulas, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListEulasCommand = deserializeAws_restJson1ListEulasCommand;
const deserializeAws_restJson1ListEulasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListLaunchProfileMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLaunchProfileMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        members: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.members = deserializeAws_restJson1LaunchProfileMembershipList(data.members, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLaunchProfileMembersCommand = deserializeAws_restJson1ListLaunchProfileMembersCommand;
const deserializeAws_restJson1ListLaunchProfileMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListLaunchProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListLaunchProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfiles: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfiles !== undefined && data.launchProfiles !== null) {
        contents.launchProfiles = deserializeAws_restJson1LaunchProfileList(data.launchProfiles, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListLaunchProfilesCommand = deserializeAws_restJson1ListLaunchProfilesCommand;
const deserializeAws_restJson1ListLaunchProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListStreamingImagesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStreamingImagesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        streamingImages: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.streamingImages !== undefined && data.streamingImages !== null) {
        contents.streamingImages = deserializeAws_restJson1StreamingImageList(data.streamingImages, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStreamingImagesCommand = deserializeAws_restJson1ListStreamingImagesCommand;
const deserializeAws_restJson1ListStreamingImagesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListStreamingSessionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStreamingSessionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        sessions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.sessions !== undefined && data.sessions !== null) {
        contents.sessions = deserializeAws_restJson1StreamingSessionList(data.sessions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStreamingSessionsCommand = deserializeAws_restJson1ListStreamingSessionsCommand;
const deserializeAws_restJson1ListStreamingSessionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListStudioComponentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStudioComponentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        studioComponents: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.studioComponents !== undefined && data.studioComponents !== null) {
        contents.studioComponents = deserializeAws_restJson1StudioComponentList(data.studioComponents, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStudioComponentsCommand = deserializeAws_restJson1ListStudioComponentsCommand;
const deserializeAws_restJson1ListStudioComponentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListStudioMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStudioMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        members: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.members !== undefined && data.members !== null) {
        contents.members = deserializeAws_restJson1StudioMembershipList(data.members, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStudioMembersCommand = deserializeAws_restJson1ListStudioMembersCommand;
const deserializeAws_restJson1ListStudioMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1ListStudiosCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListStudiosCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        studios: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.studios !== undefined && data.studios !== null) {
        contents.studios = deserializeAws_restJson1StudioList(data.studios, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListStudiosCommand = deserializeAws_restJson1ListStudiosCommand;
const deserializeAws_restJson1ListStudiosCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
        contents.tags = deserializeAws_restJson1Tags(data.tags, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1PutLaunchProfileMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutLaunchProfileMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutLaunchProfileMembersCommand = deserializeAws_restJson1PutLaunchProfileMembersCommand;
const deserializeAws_restJson1PutLaunchProfileMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1PutStudioMembersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutStudioMembersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutStudioMembersCommand = deserializeAws_restJson1PutStudioMembersCommand;
const deserializeAws_restJson1PutStudioMembersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studio: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studio !== undefined && data.studio !== null) {
        contents.studio = deserializeAws_restJson1Studio(data.studio, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand = deserializeAws_restJson1StartStudioSSOConfigurationRepairCommand;
const deserializeAws_restJson1StartStudioSSOConfigurationRepairCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1UpdateLaunchProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLaunchProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        launchProfile: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.launchProfile !== undefined && data.launchProfile !== null) {
        contents.launchProfile = deserializeAws_restJson1LaunchProfile(data.launchProfile, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLaunchProfileCommand = deserializeAws_restJson1UpdateLaunchProfileCommand;
const deserializeAws_restJson1UpdateLaunchProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1UpdateLaunchProfileMemberCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateLaunchProfileMemberCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        member: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.member !== undefined && data.member !== null) {
        contents.member = deserializeAws_restJson1LaunchProfileMembership(data.member, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateLaunchProfileMemberCommand = deserializeAws_restJson1UpdateLaunchProfileMemberCommand;
const deserializeAws_restJson1UpdateLaunchProfileMemberCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1UpdateStreamingImageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateStreamingImageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        streamingImage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.streamingImage !== undefined && data.streamingImage !== null) {
        contents.streamingImage = deserializeAws_restJson1StreamingImage(data.streamingImage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateStreamingImageCommand = deserializeAws_restJson1UpdateStreamingImageCommand;
const deserializeAws_restJson1UpdateStreamingImageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1UpdateStudioCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateStudioCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studio: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studio !== undefined && data.studio !== null) {
        contents.studio = deserializeAws_restJson1Studio(data.studio, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateStudioCommand = deserializeAws_restJson1UpdateStudioCommand;
const deserializeAws_restJson1UpdateStudioCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
const deserializeAws_restJson1UpdateStudioComponentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateStudioComponentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        studioComponent: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.studioComponent !== undefined && data.studioComponent !== null) {
        contents.studioComponent = deserializeAws_restJson1StudioComponent(data.studioComponent, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateStudioComponentCommand = deserializeAws_restJson1UpdateStudioComponentCommand;
const deserializeAws_restJson1UpdateStudioComponentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.nimble#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.nimble#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.nimble#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.nimble#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.nimble#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.nimble#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.nimble#ValidationException":
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
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
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
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
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
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
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
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        code: undefined,
        context: undefined,
        message: undefined,
    };
    const data = parsedOutput.body;
    if (data.code !== undefined && data.code !== null) {
        contents.code = data.code;
    }
    if (data.context !== undefined && data.context !== null) {
        contents.context = deserializeAws_restJson1ExceptionContext(data.context, context);
    }
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    return contents;
};
const serializeAws_restJson1ActiveDirectoryComputerAttribute = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1ActiveDirectoryComputerAttributeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
};
const serializeAws_restJson1ActiveDirectoryConfiguration = (input, context) => {
    return {
        ...(input.computerAttributes !== undefined &&
            input.computerAttributes !== null && {
            computerAttributes: serializeAws_restJson1ActiveDirectoryComputerAttributeList(input.computerAttributes, context),
        }),
        ...(input.directoryId !== undefined && input.directoryId !== null && { directoryId: input.directoryId }),
        ...(input.organizationalUnitDistinguishedName !== undefined &&
            input.organizationalUnitDistinguishedName !== null && {
            organizationalUnitDistinguishedName: input.organizationalUnitDistinguishedName,
        }),
    };
};
const serializeAws_restJson1ComputeFarmConfiguration = (input, context) => {
    return {
        ...(input.activeDirectoryUser !== undefined &&
            input.activeDirectoryUser !== null && { activeDirectoryUser: input.activeDirectoryUser }),
        ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
    };
};
const serializeAws_restJson1EC2SubnetIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1EulaIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LaunchProfileProtocolVersionList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LaunchProfileStudioComponentIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1LicenseServiceConfiguration = (input, context) => {
    return {
        ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
    };
};
const serializeAws_restJson1NewLaunchProfileMember = (input, context) => {
    return {
        ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
        ...(input.principalId !== undefined && input.principalId !== null && { principalId: input.principalId }),
    };
};
const serializeAws_restJson1NewLaunchProfileMemberList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NewLaunchProfileMember(entry, context);
    });
};
const serializeAws_restJson1NewStudioMember = (input, context) => {
    return {
        ...(input.persona !== undefined && input.persona !== null && { persona: input.persona }),
        ...(input.principalId !== undefined && input.principalId !== null && { principalId: input.principalId }),
    };
};
const serializeAws_restJson1NewStudioMemberList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1NewStudioMember(entry, context);
    });
};
const serializeAws_restJson1ScriptParameterKeyValue = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1SharedFileSystemConfiguration = (input, context) => {
    return {
        ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
        ...(input.fileSystemId !== undefined && input.fileSystemId !== null && { fileSystemId: input.fileSystemId }),
        ...(input.linuxMountPoint !== undefined &&
            input.linuxMountPoint !== null && { linuxMountPoint: input.linuxMountPoint }),
        ...(input.shareName !== undefined && input.shareName !== null && { shareName: input.shareName }),
        ...(input.windowsMountDrive !== undefined &&
            input.windowsMountDrive !== null && { windowsMountDrive: input.windowsMountDrive }),
    };
};
const serializeAws_restJson1StreamConfigurationCreate = (input, context) => {
    return {
        ...(input.clipboardMode !== undefined && input.clipboardMode !== null && { clipboardMode: input.clipboardMode }),
        ...(input.ec2InstanceTypes !== undefined &&
            input.ec2InstanceTypes !== null && {
            ec2InstanceTypes: serializeAws_restJson1StreamingInstanceTypeList(input.ec2InstanceTypes, context),
        }),
        ...(input.maxSessionLengthInMinutes !== undefined &&
            input.maxSessionLengthInMinutes !== null && { maxSessionLengthInMinutes: input.maxSessionLengthInMinutes }),
        ...(input.streamingImageIds !== undefined &&
            input.streamingImageIds !== null && {
            streamingImageIds: serializeAws_restJson1StreamingImageIdList(input.streamingImageIds, context),
        }),
    };
};
const serializeAws_restJson1StreamingImageIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StreamingInstanceTypeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StudioComponentConfiguration = (input, context) => {
    return {
        ...(input.activeDirectoryConfiguration !== undefined &&
            input.activeDirectoryConfiguration !== null && {
            activeDirectoryConfiguration: serializeAws_restJson1ActiveDirectoryConfiguration(input.activeDirectoryConfiguration, context),
        }),
        ...(input.computeFarmConfiguration !== undefined &&
            input.computeFarmConfiguration !== null && {
            computeFarmConfiguration: serializeAws_restJson1ComputeFarmConfiguration(input.computeFarmConfiguration, context),
        }),
        ...(input.licenseServiceConfiguration !== undefined &&
            input.licenseServiceConfiguration !== null && {
            licenseServiceConfiguration: serializeAws_restJson1LicenseServiceConfiguration(input.licenseServiceConfiguration, context),
        }),
        ...(input.sharedFileSystemConfiguration !== undefined &&
            input.sharedFileSystemConfiguration !== null && {
            sharedFileSystemConfiguration: serializeAws_restJson1SharedFileSystemConfiguration(input.sharedFileSystemConfiguration, context),
        }),
    };
};
const serializeAws_restJson1StudioComponentInitializationScript = (input, context) => {
    return {
        ...(input.launchProfileProtocolVersion !== undefined &&
            input.launchProfileProtocolVersion !== null && {
            launchProfileProtocolVersion: input.launchProfileProtocolVersion,
        }),
        ...(input.platform !== undefined && input.platform !== null && { platform: input.platform }),
        ...(input.runContext !== undefined && input.runContext !== null && { runContext: input.runContext }),
        ...(input.script !== undefined && input.script !== null && { script: input.script }),
    };
};
const serializeAws_restJson1StudioComponentInitializationScriptList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1StudioComponentInitializationScript(entry, context);
    });
};
const serializeAws_restJson1StudioComponentScriptParameterKeyValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
};
const serializeAws_restJson1StudioComponentSecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1StudioEncryptionConfiguration = (input, context) => {
    return {
        ...(input.keyArn !== undefined && input.keyArn !== null && { keyArn: input.keyArn }),
        ...(input.keyType !== undefined && input.keyType !== null && { keyType: input.keyType }),
    };
};
const serializeAws_restJson1Tags = (input, context) => {
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
const deserializeAws_restJson1ActiveDirectoryComputerAttribute = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1ActiveDirectoryComputerAttributeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ActiveDirectoryComputerAttribute(entry, context);
    });
};
const deserializeAws_restJson1ActiveDirectoryConfiguration = (output, context) => {
    return {
        computerAttributes: output.computerAttributes !== undefined && output.computerAttributes !== null
            ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
            : undefined,
        directoryId: output.directoryId !== undefined && output.directoryId !== null ? output.directoryId : undefined,
        organizationalUnitDistinguishedName: output.organizationalUnitDistinguishedName !== undefined && output.organizationalUnitDistinguishedName !== null
            ? output.organizationalUnitDistinguishedName
            : undefined,
    };
};
const deserializeAws_restJson1ActiveDirectoryDnsIpAddressList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1ComputeFarmConfiguration = (output, context) => {
    return {
        activeDirectoryUser: output.activeDirectoryUser !== undefined && output.activeDirectoryUser !== null
            ? output.activeDirectoryUser
            : undefined,
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
    };
};
const deserializeAws_restJson1EC2SubnetIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1Eula = (output, context) => {
    return {
        content: output.content !== undefined && output.content !== null ? output.content : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        eulaId: output.eulaId !== undefined && output.eulaId !== null ? output.eulaId : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
    };
};
const deserializeAws_restJson1EulaAcceptance = (output, context) => {
    return {
        acceptedAt: output.acceptedAt !== undefined && output.acceptedAt !== null ? new Date(output.acceptedAt) : undefined,
        acceptedBy: output.acceptedBy !== undefined && output.acceptedBy !== null ? output.acceptedBy : undefined,
        accepteeId: output.accepteeId !== undefined && output.accepteeId !== null ? output.accepteeId : undefined,
        eulaAcceptanceId: output.eulaAcceptanceId !== undefined && output.eulaAcceptanceId !== null ? output.eulaAcceptanceId : undefined,
        eulaId: output.eulaId !== undefined && output.eulaId !== null ? output.eulaId : undefined,
    };
};
const deserializeAws_restJson1EulaAcceptanceList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EulaAcceptance(entry, context);
    });
};
const deserializeAws_restJson1EulaIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1EulaList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Eula(entry, context);
    });
};
const deserializeAws_restJson1ExceptionContext = (output, context) => {
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
const deserializeAws_restJson1LaunchProfile = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        ec2SubnetIds: output.ec2SubnetIds !== undefined && output.ec2SubnetIds !== null
            ? deserializeAws_restJson1EC2SubnetIdList(output.ec2SubnetIds, context)
            : undefined,
        launchProfileId: output.launchProfileId !== undefined && output.launchProfileId !== null ? output.launchProfileId : undefined,
        launchProfileProtocolVersions: output.launchProfileProtocolVersions !== undefined && output.launchProfileProtocolVersions !== null
            ? deserializeAws_restJson1LaunchProfileProtocolVersionList(output.launchProfileProtocolVersions, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        streamConfiguration: output.streamConfiguration !== undefined && output.streamConfiguration !== null
            ? deserializeAws_restJson1StreamConfiguration(output.streamConfiguration, context)
            : undefined,
        studioComponentIds: output.studioComponentIds !== undefined && output.studioComponentIds !== null
            ? deserializeAws_restJson1LaunchProfileStudioComponentIdList(output.studioComponentIds, context)
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
        updatedBy: output.updatedBy !== undefined && output.updatedBy !== null ? output.updatedBy : undefined,
    };
};
const deserializeAws_restJson1LaunchProfileInitialization = (output, context) => {
    return {
        activeDirectory: output.activeDirectory !== undefined && output.activeDirectory !== null
            ? deserializeAws_restJson1LaunchProfileInitializationActiveDirectory(output.activeDirectory, context)
            : undefined,
        ec2SecurityGroupIds: output.ec2SecurityGroupIds !== undefined && output.ec2SecurityGroupIds !== null
            ? deserializeAws_restJson1LaunchProfileSecurityGroupIdList(output.ec2SecurityGroupIds, context)
            : undefined,
        launchProfileId: output.launchProfileId !== undefined && output.launchProfileId !== null ? output.launchProfileId : undefined,
        launchProfileProtocolVersion: output.launchProfileProtocolVersion !== undefined && output.launchProfileProtocolVersion !== null
            ? output.launchProfileProtocolVersion
            : undefined,
        launchPurpose: output.launchPurpose !== undefined && output.launchPurpose !== null ? output.launchPurpose : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        systemInitializationScripts: output.systemInitializationScripts !== undefined && output.systemInitializationScripts !== null
            ? deserializeAws_restJson1LaunchProfileInitializationScriptList(output.systemInitializationScripts, context)
            : undefined,
        userInitializationScripts: output.userInitializationScripts !== undefined && output.userInitializationScripts !== null
            ? deserializeAws_restJson1LaunchProfileInitializationScriptList(output.userInitializationScripts, context)
            : undefined,
    };
};
const deserializeAws_restJson1LaunchProfileInitializationActiveDirectory = (output, context) => {
    return {
        computerAttributes: output.computerAttributes !== undefined && output.computerAttributes !== null
            ? deserializeAws_restJson1ActiveDirectoryComputerAttributeList(output.computerAttributes, context)
            : undefined,
        directoryId: output.directoryId !== undefined && output.directoryId !== null ? output.directoryId : undefined,
        directoryName: output.directoryName !== undefined && output.directoryName !== null ? output.directoryName : undefined,
        dnsIpAddresses: output.dnsIpAddresses !== undefined && output.dnsIpAddresses !== null
            ? deserializeAws_restJson1ActiveDirectoryDnsIpAddressList(output.dnsIpAddresses, context)
            : undefined,
        organizationalUnitDistinguishedName: output.organizationalUnitDistinguishedName !== undefined && output.organizationalUnitDistinguishedName !== null
            ? output.organizationalUnitDistinguishedName
            : undefined,
        studioComponentId: output.studioComponentId !== undefined && output.studioComponentId !== null
            ? output.studioComponentId
            : undefined,
        studioComponentName: output.studioComponentName !== undefined && output.studioComponentName !== null
            ? output.studioComponentName
            : undefined,
    };
};
const deserializeAws_restJson1LaunchProfileInitializationScript = (output, context) => {
    return {
        script: output.script !== undefined && output.script !== null ? output.script : undefined,
        studioComponentId: output.studioComponentId !== undefined && output.studioComponentId !== null
            ? output.studioComponentId
            : undefined,
        studioComponentName: output.studioComponentName !== undefined && output.studioComponentName !== null
            ? output.studioComponentName
            : undefined,
    };
};
const deserializeAws_restJson1LaunchProfileInitializationScriptList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LaunchProfileInitializationScript(entry, context);
    });
};
const deserializeAws_restJson1LaunchProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LaunchProfile(entry, context);
    });
};
const deserializeAws_restJson1LaunchProfileMembership = (output, context) => {
    return {
        identityStoreId: output.identityStoreId !== undefined && output.identityStoreId !== null ? output.identityStoreId : undefined,
        persona: output.persona !== undefined && output.persona !== null ? output.persona : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
const deserializeAws_restJson1LaunchProfileMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LaunchProfileMembership(entry, context);
    });
};
const deserializeAws_restJson1LaunchProfileProtocolVersionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LaunchProfileSecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LaunchProfileStudioComponentIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1LicenseServiceConfiguration = (output, context) => {
    return {
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
    };
};
const deserializeAws_restJson1ScriptParameterKeyValue = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1SharedFileSystemConfiguration = (output, context) => {
    return {
        endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
        fileSystemId: output.fileSystemId !== undefined && output.fileSystemId !== null ? output.fileSystemId : undefined,
        linuxMountPoint: output.linuxMountPoint !== undefined && output.linuxMountPoint !== null ? output.linuxMountPoint : undefined,
        shareName: output.shareName !== undefined && output.shareName !== null ? output.shareName : undefined,
        windowsMountDrive: output.windowsMountDrive !== undefined && output.windowsMountDrive !== null
            ? output.windowsMountDrive
            : undefined,
    };
};
const deserializeAws_restJson1StreamConfiguration = (output, context) => {
    return {
        clipboardMode: output.clipboardMode !== undefined && output.clipboardMode !== null ? output.clipboardMode : undefined,
        ec2InstanceTypes: output.ec2InstanceTypes !== undefined && output.ec2InstanceTypes !== null
            ? deserializeAws_restJson1StreamingInstanceTypeList(output.ec2InstanceTypes, context)
            : undefined,
        maxSessionLengthInMinutes: output.maxSessionLengthInMinutes !== undefined && output.maxSessionLengthInMinutes !== null
            ? output.maxSessionLengthInMinutes
            : undefined,
        streamingImageIds: output.streamingImageIds !== undefined && output.streamingImageIds !== null
            ? deserializeAws_restJson1StreamingImageIdList(output.streamingImageIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1StreamingImage = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        ec2ImageId: output.ec2ImageId !== undefined && output.ec2ImageId !== null ? output.ec2ImageId : undefined,
        encryptionConfiguration: output.encryptionConfiguration !== undefined && output.encryptionConfiguration !== null
            ? deserializeAws_restJson1StreamingImageEncryptionConfiguration(output.encryptionConfiguration, context)
            : undefined,
        eulaIds: output.eulaIds !== undefined && output.eulaIds !== null
            ? deserializeAws_restJson1EulaIdList(output.eulaIds, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        streamingImageId: output.streamingImageId !== undefined && output.streamingImageId !== null ? output.streamingImageId : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1StreamingImageEncryptionConfiguration = (output, context) => {
    return {
        keyArn: output.keyArn !== undefined && output.keyArn !== null ? output.keyArn : undefined,
        keyType: output.keyType !== undefined && output.keyType !== null ? output.keyType : undefined,
    };
};
const deserializeAws_restJson1StreamingImageIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1StreamingImageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StreamingImage(entry, context);
    });
};
const deserializeAws_restJson1StreamingInstanceTypeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1StreamingSession = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        ec2InstanceType: output.ec2InstanceType !== undefined && output.ec2InstanceType !== null ? output.ec2InstanceType : undefined,
        launchProfileId: output.launchProfileId !== undefined && output.launchProfileId !== null ? output.launchProfileId : undefined,
        sessionId: output.sessionId !== undefined && output.sessionId !== null ? output.sessionId : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        streamingImageId: output.streamingImageId !== undefined && output.streamingImageId !== null ? output.streamingImageId : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        terminateAt: output.terminateAt !== undefined && output.terminateAt !== null ? new Date(output.terminateAt) : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
        updatedBy: output.updatedBy !== undefined && output.updatedBy !== null ? output.updatedBy : undefined,
    };
};
const deserializeAws_restJson1StreamingSessionList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StreamingSession(entry, context);
    });
};
const deserializeAws_restJson1StreamingSessionStream = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        expiresAt: output.expiresAt !== undefined && output.expiresAt !== null ? new Date(output.expiresAt) : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        streamId: output.streamId !== undefined && output.streamId !== null ? output.streamId : undefined,
        url: output.url !== undefined && output.url !== null ? output.url : undefined,
    };
};
const deserializeAws_restJson1Studio = (output, context) => {
    return {
        adminRoleArn: output.adminRoleArn !== undefined && output.adminRoleArn !== null ? output.adminRoleArn : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
        homeRegion: output.homeRegion !== undefined && output.homeRegion !== null ? output.homeRegion : undefined,
        ssoClientId: output.ssoClientId !== undefined && output.ssoClientId !== null ? output.ssoClientId : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        studioEncryptionConfiguration: output.studioEncryptionConfiguration !== undefined && output.studioEncryptionConfiguration !== null
            ? deserializeAws_restJson1StudioEncryptionConfiguration(output.studioEncryptionConfiguration, context)
            : undefined,
        studioId: output.studioId !== undefined && output.studioId !== null ? output.studioId : undefined,
        studioName: output.studioName !== undefined && output.studioName !== null ? output.studioName : undefined,
        studioUrl: output.studioUrl !== undefined && output.studioUrl !== null ? output.studioUrl : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
        userRoleArn: output.userRoleArn !== undefined && output.userRoleArn !== null ? output.userRoleArn : undefined,
    };
};
const deserializeAws_restJson1StudioComponent = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        configuration: output.configuration !== undefined && output.configuration !== null
            ? deserializeAws_restJson1StudioComponentConfiguration(output.configuration, context)
            : undefined,
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        ec2SecurityGroupIds: output.ec2SecurityGroupIds !== undefined && output.ec2SecurityGroupIds !== null
            ? deserializeAws_restJson1StudioComponentSecurityGroupIdList(output.ec2SecurityGroupIds, context)
            : undefined,
        initializationScripts: output.initializationScripts !== undefined && output.initializationScripts !== null
            ? deserializeAws_restJson1StudioComponentInitializationScriptList(output.initializationScripts, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        scriptParameters: output.scriptParameters !== undefined && output.scriptParameters !== null
            ? deserializeAws_restJson1StudioComponentScriptParameterKeyValueList(output.scriptParameters, context)
            : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
        statusCode: output.statusCode !== undefined && output.statusCode !== null ? output.statusCode : undefined,
        statusMessage: output.statusMessage !== undefined && output.statusMessage !== null ? output.statusMessage : undefined,
        studioComponentId: output.studioComponentId !== undefined && output.studioComponentId !== null
            ? output.studioComponentId
            : undefined,
        subtype: output.subtype !== undefined && output.subtype !== null ? output.subtype : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
        updatedBy: output.updatedBy !== undefined && output.updatedBy !== null ? output.updatedBy : undefined,
    };
};
const deserializeAws_restJson1StudioComponentConfiguration = (output, context) => {
    return {
        activeDirectoryConfiguration: output.activeDirectoryConfiguration !== undefined && output.activeDirectoryConfiguration !== null
            ? deserializeAws_restJson1ActiveDirectoryConfiguration(output.activeDirectoryConfiguration, context)
            : undefined,
        computeFarmConfiguration: output.computeFarmConfiguration !== undefined && output.computeFarmConfiguration !== null
            ? deserializeAws_restJson1ComputeFarmConfiguration(output.computeFarmConfiguration, context)
            : undefined,
        licenseServiceConfiguration: output.licenseServiceConfiguration !== undefined && output.licenseServiceConfiguration !== null
            ? deserializeAws_restJson1LicenseServiceConfiguration(output.licenseServiceConfiguration, context)
            : undefined,
        sharedFileSystemConfiguration: output.sharedFileSystemConfiguration !== undefined && output.sharedFileSystemConfiguration !== null
            ? deserializeAws_restJson1SharedFileSystemConfiguration(output.sharedFileSystemConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1StudioComponentInitializationScript = (output, context) => {
    return {
        launchProfileProtocolVersion: output.launchProfileProtocolVersion !== undefined && output.launchProfileProtocolVersion !== null
            ? output.launchProfileProtocolVersion
            : undefined,
        platform: output.platform !== undefined && output.platform !== null ? output.platform : undefined,
        runContext: output.runContext !== undefined && output.runContext !== null ? output.runContext : undefined,
        script: output.script !== undefined && output.script !== null ? output.script : undefined,
    };
};
const deserializeAws_restJson1StudioComponentInitializationScriptList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StudioComponentInitializationScript(entry, context);
    });
};
const deserializeAws_restJson1StudioComponentList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StudioComponent(entry, context);
    });
};
const deserializeAws_restJson1StudioComponentScriptParameterKeyValueList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ScriptParameterKeyValue(entry, context);
    });
};
const deserializeAws_restJson1StudioComponentSecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1StudioComponentSummary = (output, context) => {
    return {
        createdAt: output.createdAt !== undefined && output.createdAt !== null ? new Date(output.createdAt) : undefined,
        createdBy: output.createdBy !== undefined && output.createdBy !== null ? output.createdBy : undefined,
        description: output.description !== undefined && output.description !== null ? output.description : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        studioComponentId: output.studioComponentId !== undefined && output.studioComponentId !== null
            ? output.studioComponentId
            : undefined,
        subtype: output.subtype !== undefined && output.subtype !== null ? output.subtype : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
        updatedAt: output.updatedAt !== undefined && output.updatedAt !== null ? new Date(output.updatedAt) : undefined,
        updatedBy: output.updatedBy !== undefined && output.updatedBy !== null ? output.updatedBy : undefined,
    };
};
const deserializeAws_restJson1StudioComponentSummaryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StudioComponentSummary(entry, context);
    });
};
const deserializeAws_restJson1StudioEncryptionConfiguration = (output, context) => {
    return {
        keyArn: output.keyArn !== undefined && output.keyArn !== null ? output.keyArn : undefined,
        keyType: output.keyType !== undefined && output.keyType !== null ? output.keyType : undefined,
    };
};
const deserializeAws_restJson1StudioList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Studio(entry, context);
    });
};
const deserializeAws_restJson1StudioMembership = (output, context) => {
    return {
        identityStoreId: output.identityStoreId !== undefined && output.identityStoreId !== null ? output.identityStoreId : undefined,
        persona: output.persona !== undefined && output.persona !== null ? output.persona : undefined,
        principalId: output.principalId !== undefined && output.principalId !== null ? output.principalId : undefined,
    };
};
const deserializeAws_restJson1StudioMembershipList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1StudioMembership(entry, context);
    });
};
const deserializeAws_restJson1Tags = (output, context) => {
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