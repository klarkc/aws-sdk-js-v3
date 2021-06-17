"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListPlaybackConfigurationsCommand = exports.deserializeAws_restJson1ListChannelsCommand = exports.deserializeAws_restJson1GetPlaybackConfigurationCommand = exports.deserializeAws_restJson1GetChannelScheduleCommand = exports.deserializeAws_restJson1GetChannelPolicyCommand = exports.deserializeAws_restJson1DescribeVodSourceCommand = exports.deserializeAws_restJson1DescribeSourceLocationCommand = exports.deserializeAws_restJson1DescribeProgramCommand = exports.deserializeAws_restJson1DescribeChannelCommand = exports.deserializeAws_restJson1DeleteVodSourceCommand = exports.deserializeAws_restJson1DeleteSourceLocationCommand = exports.deserializeAws_restJson1DeleteProgramCommand = exports.deserializeAws_restJson1DeletePlaybackConfigurationCommand = exports.deserializeAws_restJson1DeleteChannelPolicyCommand = exports.deserializeAws_restJson1DeleteChannelCommand = exports.deserializeAws_restJson1CreateVodSourceCommand = exports.deserializeAws_restJson1CreateSourceLocationCommand = exports.deserializeAws_restJson1CreateProgramCommand = exports.deserializeAws_restJson1CreateChannelCommand = exports.serializeAws_restJson1UpdateVodSourceCommand = exports.serializeAws_restJson1UpdateSourceLocationCommand = exports.serializeAws_restJson1UpdateChannelCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopChannelCommand = exports.serializeAws_restJson1StartChannelCommand = exports.serializeAws_restJson1PutPlaybackConfigurationCommand = exports.serializeAws_restJson1PutChannelPolicyCommand = exports.serializeAws_restJson1ListVodSourcesCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSourceLocationsCommand = exports.serializeAws_restJson1ListPlaybackConfigurationsCommand = exports.serializeAws_restJson1ListChannelsCommand = exports.serializeAws_restJson1GetPlaybackConfigurationCommand = exports.serializeAws_restJson1GetChannelScheduleCommand = exports.serializeAws_restJson1GetChannelPolicyCommand = exports.serializeAws_restJson1DescribeVodSourceCommand = exports.serializeAws_restJson1DescribeSourceLocationCommand = exports.serializeAws_restJson1DescribeProgramCommand = exports.serializeAws_restJson1DescribeChannelCommand = exports.serializeAws_restJson1DeleteVodSourceCommand = exports.serializeAws_restJson1DeleteSourceLocationCommand = exports.serializeAws_restJson1DeleteProgramCommand = exports.serializeAws_restJson1DeletePlaybackConfigurationCommand = exports.serializeAws_restJson1DeleteChannelPolicyCommand = exports.serializeAws_restJson1DeleteChannelCommand = exports.serializeAws_restJson1CreateVodSourceCommand = exports.serializeAws_restJson1CreateSourceLocationCommand = exports.serializeAws_restJson1CreateProgramCommand = exports.serializeAws_restJson1CreateChannelCommand = void 0;
exports.deserializeAws_restJson1UpdateVodSourceCommand = exports.deserializeAws_restJson1UpdateSourceLocationCommand = exports.deserializeAws_restJson1UpdateChannelCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopChannelCommand = exports.deserializeAws_restJson1StartChannelCommand = exports.deserializeAws_restJson1PutPlaybackConfigurationCommand = exports.deserializeAws_restJson1PutChannelPolicyCommand = exports.deserializeAws_restJson1ListVodSourcesCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSourceLocationsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channel/{ChannelName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
        ...(input.PlaybackMode !== undefined && input.PlaybackMode !== null && { PlaybackMode: input.PlaybackMode }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateChannelCommand = serializeAws_restJson1CreateChannelCommand;
const serializeAws_restJson1CreateProgramCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AdBreaks !== undefined &&
            input.AdBreaks !== null && { AdBreaks: serializeAws_restJson1__listOfAdBreak(input.AdBreaks, context) }),
        ...(input.ScheduleConfiguration !== undefined &&
            input.ScheduleConfiguration !== null && {
            ScheduleConfiguration: serializeAws_restJson1ScheduleConfiguration(input.ScheduleConfiguration, context),
        }),
        ...(input.SourceLocationName !== undefined &&
            input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName }),
        ...(input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName }),
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
exports.serializeAws_restJson1CreateProgramCommand = serializeAws_restJson1CreateProgramCommand;
const serializeAws_restJson1CreateSourceLocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/sourceLocation/{SourceLocationName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccessConfiguration !== undefined &&
            input.AccessConfiguration !== null && {
            AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
        }),
        ...(input.DefaultSegmentDeliveryConfiguration !== undefined &&
            input.DefaultSegmentDeliveryConfiguration !== null && {
            DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(input.DefaultSegmentDeliveryConfiguration, context),
        }),
        ...(input.HttpConfiguration !== undefined &&
            input.HttpConfiguration !== null && {
            HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateSourceLocationCommand = serializeAws_restJson1CreateSourceLocationCommand;
const serializeAws_restJson1CreateVodSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    if (input.VodSourceName !== undefined) {
        const labelValue = input.VodSourceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VodSourceName.");
        }
        resolvedPath = resolvedPath.replace("{VodSourceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VodSourceName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HttpPackageConfigurations !== undefined &&
            input.HttpPackageConfigurations !== null && {
            HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(input.HttpPackageConfigurations, context),
        }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateVodSourceCommand = serializeAws_restJson1CreateVodSourceCommand;
const serializeAws_restJson1DeleteChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1DeleteChannelCommand = serializeAws_restJson1DeleteChannelCommand;
const serializeAws_restJson1DeleteChannelPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/policy";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1DeleteChannelPolicyCommand = serializeAws_restJson1DeleteChannelPolicyCommand;
const serializeAws_restJson1DeletePlaybackConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/playbackConfiguration/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1DeletePlaybackConfigurationCommand = serializeAws_restJson1DeletePlaybackConfigurationCommand;
const serializeAws_restJson1DeleteProgramCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
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
exports.serializeAws_restJson1DeleteProgramCommand = serializeAws_restJson1DeleteProgramCommand;
const serializeAws_restJson1DeleteSourceLocationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocation/{SourceLocationName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
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
exports.serializeAws_restJson1DeleteSourceLocationCommand = serializeAws_restJson1DeleteSourceLocationCommand;
const serializeAws_restJson1DeleteVodSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    if (input.VodSourceName !== undefined) {
        const labelValue = input.VodSourceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VodSourceName.");
        }
        resolvedPath = resolvedPath.replace("{VodSourceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VodSourceName.");
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
exports.serializeAws_restJson1DeleteVodSourceCommand = serializeAws_restJson1DeleteVodSourceCommand;
const serializeAws_restJson1DescribeChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1DescribeChannelCommand = serializeAws_restJson1DescribeChannelCommand;
const serializeAws_restJson1DescribeProgramCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/program/{ProgramName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    if (input.ProgramName !== undefined) {
        const labelValue = input.ProgramName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProgramName.");
        }
        resolvedPath = resolvedPath.replace("{ProgramName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProgramName.");
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
exports.serializeAws_restJson1DescribeProgramCommand = serializeAws_restJson1DescribeProgramCommand;
const serializeAws_restJson1DescribeSourceLocationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocation/{SourceLocationName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
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
exports.serializeAws_restJson1DescribeSourceLocationCommand = serializeAws_restJson1DescribeSourceLocationCommand;
const serializeAws_restJson1DescribeVodSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    if (input.VodSourceName !== undefined) {
        const labelValue = input.VodSourceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VodSourceName.");
        }
        resolvedPath = resolvedPath.replace("{VodSourceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VodSourceName.");
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
exports.serializeAws_restJson1DescribeVodSourceCommand = serializeAws_restJson1DescribeVodSourceCommand;
const serializeAws_restJson1GetChannelPolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/policy";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1GetChannelPolicyCommand = serializeAws_restJson1GetChannelPolicyCommand;
const serializeAws_restJson1GetChannelScheduleCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/schedule";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    const query = {
        ...(input.DurationMinutes !== undefined && { durationMinutes: input.DurationMinutes }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1GetChannelScheduleCommand = serializeAws_restJson1GetChannelScheduleCommand;
const serializeAws_restJson1GetPlaybackConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/playbackConfiguration/{Name}";
    if (input.Name !== undefined) {
        const labelValue = input.Name;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Name.");
        }
        resolvedPath = resolvedPath.replace("{Name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Name.");
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
exports.serializeAws_restJson1GetPlaybackConfigurationCommand = serializeAws_restJson1GetPlaybackConfigurationCommand;
const serializeAws_restJson1ListChannelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListChannelsCommand = serializeAws_restJson1ListChannelsCommand;
const serializeAws_restJson1ListPlaybackConfigurationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/playbackConfigurations";
    const query = {
        ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListPlaybackConfigurationsCommand = serializeAws_restJson1ListPlaybackConfigurationsCommand;
const serializeAws_restJson1ListSourceLocationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocations";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListSourceLocationsCommand = serializeAws_restJson1ListSourceLocationsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
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
const serializeAws_restJson1ListVodSourcesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/sourceLocation/{SourceLocationName}/vodSources";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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
exports.serializeAws_restJson1ListVodSourcesCommand = serializeAws_restJson1ListVodSourcesCommand;
const serializeAws_restJson1PutChannelPolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channel/{ChannelName}/policy";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
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
exports.serializeAws_restJson1PutChannelPolicyCommand = serializeAws_restJson1PutChannelPolicyCommand;
const serializeAws_restJson1PutPlaybackConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/playbackConfiguration";
    let body;
    body = JSON.stringify({
        ...(input.AdDecisionServerUrl !== undefined &&
            input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
        ...(input.AvailSuppression !== undefined &&
            input.AvailSuppression !== null && {
            AvailSuppression: serializeAws_restJson1AvailSuppression(input.AvailSuppression, context),
        }),
        ...(input.Bumper !== undefined &&
            input.Bumper !== null && { Bumper: serializeAws_restJson1Bumper(input.Bumper, context) }),
        ...(input.CdnConfiguration !== undefined &&
            input.CdnConfiguration !== null && {
            CdnConfiguration: serializeAws_restJson1CdnConfiguration(input.CdnConfiguration, context),
        }),
        ...(input.ConfigurationAliases !== undefined &&
            input.ConfigurationAliases !== null && {
            ConfigurationAliases: serializeAws_restJson1ConfigurationAliasesRequest(input.ConfigurationAliases, context),
        }),
        ...(input.DashConfiguration !== undefined &&
            input.DashConfiguration !== null && {
            DashConfiguration: serializeAws_restJson1DashConfigurationForPut(input.DashConfiguration, context),
        }),
        ...(input.LivePreRollConfiguration !== undefined &&
            input.LivePreRollConfiguration !== null && {
            LivePreRollConfiguration: serializeAws_restJson1LivePreRollConfiguration(input.LivePreRollConfiguration, context),
        }),
        ...(input.ManifestProcessingRules !== undefined &&
            input.ManifestProcessingRules !== null && {
            ManifestProcessingRules: serializeAws_restJson1ManifestProcessingRules(input.ManifestProcessingRules, context),
        }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.PersonalizationThresholdSeconds !== undefined &&
            input.PersonalizationThresholdSeconds !== null && {
            PersonalizationThresholdSeconds: input.PersonalizationThresholdSeconds,
        }),
        ...(input.SlateAdUrl !== undefined && input.SlateAdUrl !== null && { SlateAdUrl: input.SlateAdUrl }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
        ...(input.TranscodeProfileName !== undefined &&
            input.TranscodeProfileName !== null && { TranscodeProfileName: input.TranscodeProfileName }),
        ...(input.VideoContentSourceUrl !== undefined &&
            input.VideoContentSourceUrl !== null && { VideoContentSourceUrl: input.VideoContentSourceUrl }),
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
exports.serializeAws_restJson1PutPlaybackConfigurationCommand = serializeAws_restJson1PutPlaybackConfigurationCommand;
const serializeAws_restJson1StartChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/start";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1StartChannelCommand = serializeAws_restJson1StartChannelCommand;
const serializeAws_restJson1StopChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channel/{ChannelName}/stop";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
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
exports.serializeAws_restJson1StopChannelCommand = serializeAws_restJson1StopChannelCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Tags !== undefined &&
            input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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
    let resolvedPath = "/tags/{ResourceArn}";
    if (input.ResourceArn !== undefined) {
        const labelValue = input.ResourceArn;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ResourceArn.");
        }
        resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ResourceArn.");
    }
    const query = {
        ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry) }),
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
const serializeAws_restJson1UpdateChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channel/{ChannelName}";
    if (input.ChannelName !== undefined) {
        const labelValue = input.ChannelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ChannelName.");
        }
        resolvedPath = resolvedPath.replace("{ChannelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ChannelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Outputs !== undefined &&
            input.Outputs !== null && { Outputs: serializeAws_restJson1RequestOutputs(input.Outputs, context) }),
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
exports.serializeAws_restJson1UpdateChannelCommand = serializeAws_restJson1UpdateChannelCommand;
const serializeAws_restJson1UpdateSourceLocationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/sourceLocation/{SourceLocationName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.AccessConfiguration !== undefined &&
            input.AccessConfiguration !== null && {
            AccessConfiguration: serializeAws_restJson1AccessConfiguration(input.AccessConfiguration, context),
        }),
        ...(input.DefaultSegmentDeliveryConfiguration !== undefined &&
            input.DefaultSegmentDeliveryConfiguration !== null && {
            DefaultSegmentDeliveryConfiguration: serializeAws_restJson1DefaultSegmentDeliveryConfiguration(input.DefaultSegmentDeliveryConfiguration, context),
        }),
        ...(input.HttpConfiguration !== undefined &&
            input.HttpConfiguration !== null && {
            HttpConfiguration: serializeAws_restJson1HttpConfiguration(input.HttpConfiguration, context),
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
exports.serializeAws_restJson1UpdateSourceLocationCommand = serializeAws_restJson1UpdateSourceLocationCommand;
const serializeAws_restJson1UpdateVodSourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/sourceLocation/{SourceLocationName}/vodSource/{VodSourceName}";
    if (input.SourceLocationName !== undefined) {
        const labelValue = input.SourceLocationName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SourceLocationName.");
        }
        resolvedPath = resolvedPath.replace("{SourceLocationName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SourceLocationName.");
    }
    if (input.VodSourceName !== undefined) {
        const labelValue = input.VodSourceName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: VodSourceName.");
        }
        resolvedPath = resolvedPath.replace("{VodSourceName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: VodSourceName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.HttpPackageConfigurations !== undefined &&
            input.HttpPackageConfigurations !== null && {
            HttpPackageConfigurations: serializeAws_restJson1HttpPackageConfigurations(input.HttpPackageConfigurations, context),
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
exports.serializeAws_restJson1UpdateVodSourceCommand = serializeAws_restJson1UpdateVodSourceCommand;
const deserializeAws_restJson1CreateChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        ChannelName: undefined,
        ChannelState: undefined,
        CreationTime: undefined,
        LastModifiedTime: undefined,
        Outputs: undefined,
        PlaybackMode: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.ChannelName !== undefined && data.ChannelName !== null) {
        contents.ChannelName = data.ChannelName;
    }
    if (data.ChannelState !== undefined && data.ChannelState !== null) {
        contents.ChannelState = data.ChannelState;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.Outputs !== undefined && data.Outputs !== null) {
        contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
    }
    if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
        contents.PlaybackMode = data.PlaybackMode;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateChannelCommand = deserializeAws_restJson1CreateChannelCommand;
const deserializeAws_restJson1CreateChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1CreateProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AdBreaks: undefined,
        Arn: undefined,
        ChannelName: undefined,
        CreationTime: undefined,
        ProgramName: undefined,
        SourceLocationName: undefined,
        VodSourceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
        contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.ChannelName !== undefined && data.ChannelName !== null) {
        contents.ChannelName = data.ChannelName;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.ProgramName !== undefined && data.ProgramName !== null) {
        contents.ProgramName = data.ProgramName;
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
        contents.VodSourceName = data.VodSourceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProgramCommand = deserializeAws_restJson1CreateProgramCommand;
const deserializeAws_restJson1CreateProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1CreateSourceLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSourceLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessConfiguration: undefined,
        Arn: undefined,
        CreationTime: undefined,
        DefaultSegmentDeliveryConfiguration: undefined,
        HttpConfiguration: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
        contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
        contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
    }
    if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
        contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSourceLocationCommand = deserializeAws_restJson1CreateSourceLocationCommand;
const deserializeAws_restJson1CreateSourceLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1CreateVodSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateVodSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTime: undefined,
        HttpPackageConfigurations: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
        VodSourceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
        contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
        contents.VodSourceName = data.VodSourceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVodSourceCommand = deserializeAws_restJson1CreateVodSourceCommand;
const deserializeAws_restJson1CreateVodSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeleteChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteChannelCommand = deserializeAws_restJson1DeleteChannelCommand;
const deserializeAws_restJson1DeleteChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeleteChannelPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteChannelPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteChannelPolicyCommand = deserializeAws_restJson1DeleteChannelPolicyCommand;
const deserializeAws_restJson1DeleteChannelPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeletePlaybackConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePlaybackConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePlaybackConfigurationCommand = deserializeAws_restJson1DeletePlaybackConfigurationCommand;
const deserializeAws_restJson1DeletePlaybackConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeleteProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProgramCommand = deserializeAws_restJson1DeleteProgramCommand;
const deserializeAws_restJson1DeleteProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeleteSourceLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSourceLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSourceLocationCommand = deserializeAws_restJson1DeleteSourceLocationCommand;
const deserializeAws_restJson1DeleteSourceLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DeleteVodSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteVodSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVodSourceCommand = deserializeAws_restJson1DeleteVodSourceCommand;
const deserializeAws_restJson1DeleteVodSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DescribeChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        ChannelName: undefined,
        ChannelState: undefined,
        CreationTime: undefined,
        LastModifiedTime: undefined,
        Outputs: undefined,
        PlaybackMode: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.ChannelName !== undefined && data.ChannelName !== null) {
        contents.ChannelName = data.ChannelName;
    }
    if (data.ChannelState !== undefined && data.ChannelState !== null) {
        contents.ChannelState = data.ChannelState;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.Outputs !== undefined && data.Outputs !== null) {
        contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
    }
    if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
        contents.PlaybackMode = data.PlaybackMode;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeChannelCommand = deserializeAws_restJson1DescribeChannelCommand;
const deserializeAws_restJson1DescribeChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DescribeProgramCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeProgramCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AdBreaks: undefined,
        Arn: undefined,
        ChannelName: undefined,
        CreationTime: undefined,
        ProgramName: undefined,
        SourceLocationName: undefined,
        VodSourceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AdBreaks !== undefined && data.AdBreaks !== null) {
        contents.AdBreaks = deserializeAws_restJson1__listOfAdBreak(data.AdBreaks, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.ChannelName !== undefined && data.ChannelName !== null) {
        contents.ChannelName = data.ChannelName;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.ProgramName !== undefined && data.ProgramName !== null) {
        contents.ProgramName = data.ProgramName;
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
        contents.VodSourceName = data.VodSourceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProgramCommand = deserializeAws_restJson1DescribeProgramCommand;
const deserializeAws_restJson1DescribeProgramCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DescribeSourceLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSourceLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessConfiguration: undefined,
        Arn: undefined,
        CreationTime: undefined,
        DefaultSegmentDeliveryConfiguration: undefined,
        HttpConfiguration: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
        contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
        contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
    }
    if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
        contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSourceLocationCommand = deserializeAws_restJson1DescribeSourceLocationCommand;
const deserializeAws_restJson1DescribeSourceLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1DescribeVodSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeVodSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTime: undefined,
        HttpPackageConfigurations: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
        VodSourceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
        contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
        contents.VodSourceName = data.VodSourceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeVodSourceCommand = deserializeAws_restJson1DescribeVodSourceCommand;
const deserializeAws_restJson1DescribeVodSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1GetChannelPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetChannelPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = data.Policy;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetChannelPolicyCommand = deserializeAws_restJson1GetChannelPolicyCommand;
const deserializeAws_restJson1GetChannelPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1GetChannelScheduleCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetChannelScheduleCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1__listOfScheduleEntry(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetChannelScheduleCommand = deserializeAws_restJson1GetChannelScheduleCommand;
const deserializeAws_restJson1GetChannelScheduleCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1GetPlaybackConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetPlaybackConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AdDecisionServerUrl: undefined,
        AvailSuppression: undefined,
        Bumper: undefined,
        CdnConfiguration: undefined,
        ConfigurationAliases: undefined,
        DashConfiguration: undefined,
        HlsConfiguration: undefined,
        LivePreRollConfiguration: undefined,
        ManifestProcessingRules: undefined,
        Name: undefined,
        PersonalizationThresholdSeconds: undefined,
        PlaybackConfigurationArn: undefined,
        PlaybackEndpointPrefix: undefined,
        SessionInitializationEndpointPrefix: undefined,
        SlateAdUrl: undefined,
        Tags: undefined,
        TranscodeProfileName: undefined,
        VideoContentSourceUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
        contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
    }
    if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
        contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
    }
    if (data.Bumper !== undefined && data.Bumper !== null) {
        contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
    }
    if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
        contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
    }
    if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
        contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(data.ConfigurationAliases, context);
    }
    if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
        contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
    }
    if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
        contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
    }
    if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
        contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
    }
    if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
        contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(data.ManifestProcessingRules, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
        contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
    }
    if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
        contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
    }
    if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
        contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
    }
    if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
        contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
    }
    if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
        contents.SlateAdUrl = data.SlateAdUrl;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
        contents.TranscodeProfileName = data.TranscodeProfileName;
    }
    if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
        contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetPlaybackConfigurationCommand = deserializeAws_restJson1GetPlaybackConfigurationCommand;
const deserializeAws_restJson1GetPlaybackConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1__listOfChannel(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListChannelsCommand = deserializeAws_restJson1ListChannelsCommand;
const deserializeAws_restJson1ListChannelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListPlaybackConfigurationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPlaybackConfigurationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1__listOfPlaybackConfiguration(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPlaybackConfigurationsCommand = deserializeAws_restJson1ListPlaybackConfigurationsCommand;
const deserializeAws_restJson1ListPlaybackConfigurationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1ListSourceLocationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSourceLocationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1__listOfSourceLocation(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSourceLocationsCommand = deserializeAws_restJson1ListSourceLocationsCommand;
const deserializeAws_restJson1ListSourceLocationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
        case "BadRequestException":
        case "com.amazonaws.mediatailor#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListVodSourcesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListVodSourcesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Items: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Items !== undefined && data.Items !== null) {
        contents.Items = deserializeAws_restJson1__listOfVodSource(data.Items, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListVodSourcesCommand = deserializeAws_restJson1ListVodSourcesCommand;
const deserializeAws_restJson1ListVodSourcesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1PutChannelPolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutChannelPolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutChannelPolicyCommand = deserializeAws_restJson1PutChannelPolicyCommand;
const deserializeAws_restJson1PutChannelPolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1PutPlaybackConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutPlaybackConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AdDecisionServerUrl: undefined,
        AvailSuppression: undefined,
        Bumper: undefined,
        CdnConfiguration: undefined,
        ConfigurationAliases: undefined,
        DashConfiguration: undefined,
        HlsConfiguration: undefined,
        LivePreRollConfiguration: undefined,
        ManifestProcessingRules: undefined,
        Name: undefined,
        PersonalizationThresholdSeconds: undefined,
        PlaybackConfigurationArn: undefined,
        PlaybackEndpointPrefix: undefined,
        SessionInitializationEndpointPrefix: undefined,
        SlateAdUrl: undefined,
        Tags: undefined,
        TranscodeProfileName: undefined,
        VideoContentSourceUrl: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AdDecisionServerUrl !== undefined && data.AdDecisionServerUrl !== null) {
        contents.AdDecisionServerUrl = data.AdDecisionServerUrl;
    }
    if (data.AvailSuppression !== undefined && data.AvailSuppression !== null) {
        contents.AvailSuppression = deserializeAws_restJson1AvailSuppression(data.AvailSuppression, context);
    }
    if (data.Bumper !== undefined && data.Bumper !== null) {
        contents.Bumper = deserializeAws_restJson1Bumper(data.Bumper, context);
    }
    if (data.CdnConfiguration !== undefined && data.CdnConfiguration !== null) {
        contents.CdnConfiguration = deserializeAws_restJson1CdnConfiguration(data.CdnConfiguration, context);
    }
    if (data.ConfigurationAliases !== undefined && data.ConfigurationAliases !== null) {
        contents.ConfigurationAliases = deserializeAws_restJson1ConfigurationAliasesResponse(data.ConfigurationAliases, context);
    }
    if (data.DashConfiguration !== undefined && data.DashConfiguration !== null) {
        contents.DashConfiguration = deserializeAws_restJson1DashConfiguration(data.DashConfiguration, context);
    }
    if (data.HlsConfiguration !== undefined && data.HlsConfiguration !== null) {
        contents.HlsConfiguration = deserializeAws_restJson1HlsConfiguration(data.HlsConfiguration, context);
    }
    if (data.LivePreRollConfiguration !== undefined && data.LivePreRollConfiguration !== null) {
        contents.LivePreRollConfiguration = deserializeAws_restJson1LivePreRollConfiguration(data.LivePreRollConfiguration, context);
    }
    if (data.ManifestProcessingRules !== undefined && data.ManifestProcessingRules !== null) {
        contents.ManifestProcessingRules = deserializeAws_restJson1ManifestProcessingRules(data.ManifestProcessingRules, context);
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.PersonalizationThresholdSeconds !== undefined && data.PersonalizationThresholdSeconds !== null) {
        contents.PersonalizationThresholdSeconds = data.PersonalizationThresholdSeconds;
    }
    if (data.PlaybackConfigurationArn !== undefined && data.PlaybackConfigurationArn !== null) {
        contents.PlaybackConfigurationArn = data.PlaybackConfigurationArn;
    }
    if (data.PlaybackEndpointPrefix !== undefined && data.PlaybackEndpointPrefix !== null) {
        contents.PlaybackEndpointPrefix = data.PlaybackEndpointPrefix;
    }
    if (data.SessionInitializationEndpointPrefix !== undefined && data.SessionInitializationEndpointPrefix !== null) {
        contents.SessionInitializationEndpointPrefix = data.SessionInitializationEndpointPrefix;
    }
    if (data.SlateAdUrl !== undefined && data.SlateAdUrl !== null) {
        contents.SlateAdUrl = data.SlateAdUrl;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.TranscodeProfileName !== undefined && data.TranscodeProfileName !== null) {
        contents.TranscodeProfileName = data.TranscodeProfileName;
    }
    if (data.VideoContentSourceUrl !== undefined && data.VideoContentSourceUrl !== null) {
        contents.VideoContentSourceUrl = data.VideoContentSourceUrl;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutPlaybackConfigurationCommand = deserializeAws_restJson1PutPlaybackConfigurationCommand;
const deserializeAws_restJson1PutPlaybackConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1StartChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartChannelCommand = deserializeAws_restJson1StartChannelCommand;
const deserializeAws_restJson1StartChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1StopChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopChannelCommand = deserializeAws_restJson1StopChannelCommand;
const deserializeAws_restJson1StopChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
        case "BadRequestException":
        case "com.amazonaws.mediatailor#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.mediatailor#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        ChannelName: undefined,
        ChannelState: undefined,
        CreationTime: undefined,
        LastModifiedTime: undefined,
        Outputs: undefined,
        PlaybackMode: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.ChannelName !== undefined && data.ChannelName !== null) {
        contents.ChannelName = data.ChannelName;
    }
    if (data.ChannelState !== undefined && data.ChannelState !== null) {
        contents.ChannelState = data.ChannelState;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.Outputs !== undefined && data.Outputs !== null) {
        contents.Outputs = deserializeAws_restJson1ResponseOutputs(data.Outputs, context);
    }
    if (data.PlaybackMode !== undefined && data.PlaybackMode !== null) {
        contents.PlaybackMode = data.PlaybackMode;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateChannelCommand = deserializeAws_restJson1UpdateChannelCommand;
const deserializeAws_restJson1UpdateChannelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1UpdateSourceLocationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSourceLocationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        AccessConfiguration: undefined,
        Arn: undefined,
        CreationTime: undefined,
        DefaultSegmentDeliveryConfiguration: undefined,
        HttpConfiguration: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.AccessConfiguration !== undefined && data.AccessConfiguration !== null) {
        contents.AccessConfiguration = deserializeAws_restJson1AccessConfiguration(data.AccessConfiguration, context);
    }
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.DefaultSegmentDeliveryConfiguration !== undefined && data.DefaultSegmentDeliveryConfiguration !== null) {
        contents.DefaultSegmentDeliveryConfiguration = deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(data.DefaultSegmentDeliveryConfiguration, context);
    }
    if (data.HttpConfiguration !== undefined && data.HttpConfiguration !== null) {
        contents.HttpConfiguration = deserializeAws_restJson1HttpConfiguration(data.HttpConfiguration, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSourceLocationCommand = deserializeAws_restJson1UpdateSourceLocationCommand;
const deserializeAws_restJson1UpdateSourceLocationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1UpdateVodSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateVodSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreationTime: undefined,
        HttpPackageConfigurations: undefined,
        LastModifiedTime: undefined,
        SourceLocationName: undefined,
        Tags: undefined,
        VodSourceName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreationTime !== undefined && data.CreationTime !== null) {
        contents.CreationTime = new Date(Math.round(data.CreationTime * 1000));
    }
    if (data.HttpPackageConfigurations !== undefined && data.HttpPackageConfigurations !== null) {
        contents.HttpPackageConfigurations = deserializeAws_restJson1HttpPackageConfigurations(data.HttpPackageConfigurations, context);
    }
    if (data.LastModifiedTime !== undefined && data.LastModifiedTime !== null) {
        contents.LastModifiedTime = new Date(Math.round(data.LastModifiedTime * 1000));
    }
    if (data.SourceLocationName !== undefined && data.SourceLocationName !== null) {
        contents.SourceLocationName = data.SourceLocationName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
    }
    if (data.VodSourceName !== undefined && data.VodSourceName !== null) {
        contents.VodSourceName = data.VodSourceName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVodSourceCommand = deserializeAws_restJson1UpdateVodSourceCommand;
const deserializeAws_restJson1UpdateVodSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1__listOfAdBreak = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AdBreak(entry, context);
    });
};
const serializeAws_restJson1__mapOf__string = (input, context) => {
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
const serializeAws_restJson1AccessConfiguration = (input, context) => {
    return {
        ...(input.AccessType !== undefined && input.AccessType !== null && { AccessType: input.AccessType }),
    };
};
const serializeAws_restJson1AdBreak = (input, context) => {
    return {
        ...(input.MessageType !== undefined && input.MessageType !== null && { MessageType: input.MessageType }),
        ...(input.OffsetMillis !== undefined && input.OffsetMillis !== null && { OffsetMillis: input.OffsetMillis }),
        ...(input.Slate !== undefined &&
            input.Slate !== null && { Slate: serializeAws_restJson1SlateSource(input.Slate, context) }),
        ...(input.SpliceInsertMessage !== undefined &&
            input.SpliceInsertMessage !== null && {
            SpliceInsertMessage: serializeAws_restJson1SpliceInsertMessage(input.SpliceInsertMessage, context),
        }),
    };
};
const serializeAws_restJson1AdMarkerPassthrough = (input, context) => {
    return {
        ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    };
};
const serializeAws_restJson1AvailSuppression = (input, context) => {
    return {
        ...(input.Mode !== undefined && input.Mode !== null && { Mode: input.Mode }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1Bumper = (input, context) => {
    return {
        ...(input.EndUrl !== undefined && input.EndUrl !== null && { EndUrl: input.EndUrl }),
        ...(input.StartUrl !== undefined && input.StartUrl !== null && { StartUrl: input.StartUrl }),
    };
};
const serializeAws_restJson1CdnConfiguration = (input, context) => {
    return {
        ...(input.AdSegmentUrlPrefix !== undefined &&
            input.AdSegmentUrlPrefix !== null && { AdSegmentUrlPrefix: input.AdSegmentUrlPrefix }),
        ...(input.ContentSegmentUrlPrefix !== undefined &&
            input.ContentSegmentUrlPrefix !== null && { ContentSegmentUrlPrefix: input.ContentSegmentUrlPrefix }),
    };
};
const serializeAws_restJson1ConfigurationAliasesRequest = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: serializeAws_restJson1__mapOf__string(value, context),
        };
    }, {});
};
const serializeAws_restJson1DashConfigurationForPut = (input, context) => {
    return {
        ...(input.MpdLocation !== undefined && input.MpdLocation !== null && { MpdLocation: input.MpdLocation }),
        ...(input.OriginManifestType !== undefined &&
            input.OriginManifestType !== null && { OriginManifestType: input.OriginManifestType }),
    };
};
const serializeAws_restJson1DashPlaylistSettings = (input, context) => {
    return {
        ...(input.ManifestWindowSeconds !== undefined &&
            input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
        ...(input.MinBufferTimeSeconds !== undefined &&
            input.MinBufferTimeSeconds !== null && { MinBufferTimeSeconds: input.MinBufferTimeSeconds }),
        ...(input.MinUpdatePeriodSeconds !== undefined &&
            input.MinUpdatePeriodSeconds !== null && { MinUpdatePeriodSeconds: input.MinUpdatePeriodSeconds }),
        ...(input.SuggestedPresentationDelaySeconds !== undefined &&
            input.SuggestedPresentationDelaySeconds !== null && {
            SuggestedPresentationDelaySeconds: input.SuggestedPresentationDelaySeconds,
        }),
    };
};
const serializeAws_restJson1DefaultSegmentDeliveryConfiguration = (input, context) => {
    return {
        ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }),
    };
};
const serializeAws_restJson1HlsPlaylistSettings = (input, context) => {
    return {
        ...(input.ManifestWindowSeconds !== undefined &&
            input.ManifestWindowSeconds !== null && { ManifestWindowSeconds: input.ManifestWindowSeconds }),
    };
};
const serializeAws_restJson1HttpConfiguration = (input, context) => {
    return {
        ...(input.BaseUrl !== undefined && input.BaseUrl !== null && { BaseUrl: input.BaseUrl }),
    };
};
const serializeAws_restJson1HttpPackageConfiguration = (input, context) => {
    return {
        ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
        ...(input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1HttpPackageConfigurations = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};
const serializeAws_restJson1LivePreRollConfiguration = (input, context) => {
    return {
        ...(input.AdDecisionServerUrl !== undefined &&
            input.AdDecisionServerUrl !== null && { AdDecisionServerUrl: input.AdDecisionServerUrl }),
        ...(input.MaxDurationSeconds !== undefined &&
            input.MaxDurationSeconds !== null && { MaxDurationSeconds: input.MaxDurationSeconds }),
    };
};
const serializeAws_restJson1ManifestProcessingRules = (input, context) => {
    return {
        ...(input.AdMarkerPassthrough !== undefined &&
            input.AdMarkerPassthrough !== null && {
            AdMarkerPassthrough: serializeAws_restJson1AdMarkerPassthrough(input.AdMarkerPassthrough, context),
        }),
    };
};
const serializeAws_restJson1RequestOutputItem = (input, context) => {
    return {
        ...(input.DashPlaylistSettings !== undefined &&
            input.DashPlaylistSettings !== null && {
            DashPlaylistSettings: serializeAws_restJson1DashPlaylistSettings(input.DashPlaylistSettings, context),
        }),
        ...(input.HlsPlaylistSettings !== undefined &&
            input.HlsPlaylistSettings !== null && {
            HlsPlaylistSettings: serializeAws_restJson1HlsPlaylistSettings(input.HlsPlaylistSettings, context),
        }),
        ...(input.ManifestName !== undefined && input.ManifestName !== null && { ManifestName: input.ManifestName }),
        ...(input.SourceGroup !== undefined && input.SourceGroup !== null && { SourceGroup: input.SourceGroup }),
    };
};
const serializeAws_restJson1RequestOutputs = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RequestOutputItem(entry, context);
    });
};
const serializeAws_restJson1ScheduleConfiguration = (input, context) => {
    return {
        ...(input.Transition !== undefined &&
            input.Transition !== null && { Transition: serializeAws_restJson1Transition(input.Transition, context) }),
    };
};
const serializeAws_restJson1SlateSource = (input, context) => {
    return {
        ...(input.SourceLocationName !== undefined &&
            input.SourceLocationName !== null && { SourceLocationName: input.SourceLocationName }),
        ...(input.VodSourceName !== undefined && input.VodSourceName !== null && { VodSourceName: input.VodSourceName }),
    };
};
const serializeAws_restJson1SpliceInsertMessage = (input, context) => {
    return {
        ...(input.AvailNum !== undefined && input.AvailNum !== null && { AvailNum: input.AvailNum }),
        ...(input.AvailsExpected !== undefined &&
            input.AvailsExpected !== null && { AvailsExpected: input.AvailsExpected }),
        ...(input.SpliceEventId !== undefined && input.SpliceEventId !== null && { SpliceEventId: input.SpliceEventId }),
        ...(input.UniqueProgramId !== undefined &&
            input.UniqueProgramId !== null && { UniqueProgramId: input.UniqueProgramId }),
    };
};
const serializeAws_restJson1Transition = (input, context) => {
    return {
        ...(input.RelativePosition !== undefined &&
            input.RelativePosition !== null && { RelativePosition: input.RelativePosition }),
        ...(input.RelativeProgram !== undefined &&
            input.RelativeProgram !== null && { RelativeProgram: input.RelativeProgram }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const deserializeAws_restJson1__listOfAdBreak = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AdBreak(entry, context);
    });
};
const deserializeAws_restJson1__listOfChannel = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Channel(entry, context);
    });
};
const deserializeAws_restJson1__listOfPlaybackConfiguration = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PlaybackConfiguration(entry, context);
    });
};
const deserializeAws_restJson1__listOfScheduleEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ScheduleEntry(entry, context);
    });
};
const deserializeAws_restJson1__listOfSourceLocation = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SourceLocation(entry, context);
    });
};
const deserializeAws_restJson1__listOfVodSource = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1VodSource(entry, context);
    });
};
const deserializeAws_restJson1__mapOf__string = (output, context) => {
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
const deserializeAws_restJson1AccessConfiguration = (output, context) => {
    return {
        AccessType: output.AccessType !== undefined && output.AccessType !== null ? output.AccessType : undefined,
    };
};
const deserializeAws_restJson1AdBreak = (output, context) => {
    return {
        MessageType: output.MessageType !== undefined && output.MessageType !== null ? output.MessageType : undefined,
        OffsetMillis: output.OffsetMillis !== undefined && output.OffsetMillis !== null ? output.OffsetMillis : undefined,
        Slate: output.Slate !== undefined && output.Slate !== null
            ? deserializeAws_restJson1SlateSource(output.Slate, context)
            : undefined,
        SpliceInsertMessage: output.SpliceInsertMessage !== undefined && output.SpliceInsertMessage !== null
            ? deserializeAws_restJson1SpliceInsertMessage(output.SpliceInsertMessage, context)
            : undefined,
    };
};
const deserializeAws_restJson1AdMarkerPassthrough = (output, context) => {
    return {
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
const deserializeAws_restJson1AvailSuppression = (output, context) => {
    return {
        Mode: output.Mode !== undefined && output.Mode !== null ? output.Mode : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1Bumper = (output, context) => {
    return {
        EndUrl: output.EndUrl !== undefined && output.EndUrl !== null ? output.EndUrl : undefined,
        StartUrl: output.StartUrl !== undefined && output.StartUrl !== null ? output.StartUrl : undefined,
    };
};
const deserializeAws_restJson1CdnConfiguration = (output, context) => {
    return {
        AdSegmentUrlPrefix: output.AdSegmentUrlPrefix !== undefined && output.AdSegmentUrlPrefix !== null
            ? output.AdSegmentUrlPrefix
            : undefined,
        ContentSegmentUrlPrefix: output.ContentSegmentUrlPrefix !== undefined && output.ContentSegmentUrlPrefix !== null
            ? output.ContentSegmentUrlPrefix
            : undefined,
    };
};
const deserializeAws_restJson1Channel = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ChannelName: output.ChannelName !== undefined && output.ChannelName !== null ? output.ChannelName : undefined,
        ChannelState: output.ChannelState !== undefined && output.ChannelState !== null ? output.ChannelState : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        Outputs: output.Outputs !== undefined && output.Outputs !== null
            ? deserializeAws_restJson1ResponseOutputs(output.Outputs, context)
            : undefined,
        PlaybackMode: output.PlaybackMode !== undefined && output.PlaybackMode !== null ? output.PlaybackMode : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ConfigurationAliasesResponse = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        return {
            ...acc,
            [key]: deserializeAws_restJson1__mapOf__string(value, context),
        };
    }, {});
};
const deserializeAws_restJson1DashConfiguration = (output, context) => {
    return {
        ManifestEndpointPrefix: output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
            ? output.ManifestEndpointPrefix
            : undefined,
        MpdLocation: output.MpdLocation !== undefined && output.MpdLocation !== null ? output.MpdLocation : undefined,
        OriginManifestType: output.OriginManifestType !== undefined && output.OriginManifestType !== null
            ? output.OriginManifestType
            : undefined,
    };
};
const deserializeAws_restJson1DashPlaylistSettings = (output, context) => {
    return {
        ManifestWindowSeconds: output.ManifestWindowSeconds !== undefined && output.ManifestWindowSeconds !== null
            ? output.ManifestWindowSeconds
            : undefined,
        MinBufferTimeSeconds: output.MinBufferTimeSeconds !== undefined && output.MinBufferTimeSeconds !== null
            ? output.MinBufferTimeSeconds
            : undefined,
        MinUpdatePeriodSeconds: output.MinUpdatePeriodSeconds !== undefined && output.MinUpdatePeriodSeconds !== null
            ? output.MinUpdatePeriodSeconds
            : undefined,
        SuggestedPresentationDelaySeconds: output.SuggestedPresentationDelaySeconds !== undefined && output.SuggestedPresentationDelaySeconds !== null
            ? output.SuggestedPresentationDelaySeconds
            : undefined,
    };
};
const deserializeAws_restJson1DefaultSegmentDeliveryConfiguration = (output, context) => {
    return {
        BaseUrl: output.BaseUrl !== undefined && output.BaseUrl !== null ? output.BaseUrl : undefined,
    };
};
const deserializeAws_restJson1HlsConfiguration = (output, context) => {
    return {
        ManifestEndpointPrefix: output.ManifestEndpointPrefix !== undefined && output.ManifestEndpointPrefix !== null
            ? output.ManifestEndpointPrefix
            : undefined,
    };
};
const deserializeAws_restJson1HlsPlaylistSettings = (output, context) => {
    return {
        ManifestWindowSeconds: output.ManifestWindowSeconds !== undefined && output.ManifestWindowSeconds !== null
            ? output.ManifestWindowSeconds
            : undefined,
    };
};
const deserializeAws_restJson1HttpConfiguration = (output, context) => {
    return {
        BaseUrl: output.BaseUrl !== undefined && output.BaseUrl !== null ? output.BaseUrl : undefined,
    };
};
const deserializeAws_restJson1HttpPackageConfiguration = (output, context) => {
    return {
        Path: output.Path !== undefined && output.Path !== null ? output.Path : undefined,
        SourceGroup: output.SourceGroup !== undefined && output.SourceGroup !== null ? output.SourceGroup : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1HttpPackageConfigurations = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1HttpPackageConfiguration(entry, context);
    });
};
const deserializeAws_restJson1LivePreRollConfiguration = (output, context) => {
    return {
        AdDecisionServerUrl: output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
            ? output.AdDecisionServerUrl
            : undefined,
        MaxDurationSeconds: output.MaxDurationSeconds !== undefined && output.MaxDurationSeconds !== null
            ? output.MaxDurationSeconds
            : undefined,
    };
};
const deserializeAws_restJson1ManifestProcessingRules = (output, context) => {
    return {
        AdMarkerPassthrough: output.AdMarkerPassthrough !== undefined && output.AdMarkerPassthrough !== null
            ? deserializeAws_restJson1AdMarkerPassthrough(output.AdMarkerPassthrough, context)
            : undefined,
    };
};
const deserializeAws_restJson1PlaybackConfiguration = (output, context) => {
    return {
        AdDecisionServerUrl: output.AdDecisionServerUrl !== undefined && output.AdDecisionServerUrl !== null
            ? output.AdDecisionServerUrl
            : undefined,
        AvailSuppression: output.AvailSuppression !== undefined && output.AvailSuppression !== null
            ? deserializeAws_restJson1AvailSuppression(output.AvailSuppression, context)
            : undefined,
        Bumper: output.Bumper !== undefined && output.Bumper !== null
            ? deserializeAws_restJson1Bumper(output.Bumper, context)
            : undefined,
        CdnConfiguration: output.CdnConfiguration !== undefined && output.CdnConfiguration !== null
            ? deserializeAws_restJson1CdnConfiguration(output.CdnConfiguration, context)
            : undefined,
        ConfigurationAliases: output.ConfigurationAliases !== undefined && output.ConfigurationAliases !== null
            ? deserializeAws_restJson1ConfigurationAliasesResponse(output.ConfigurationAliases, context)
            : undefined,
        DashConfiguration: output.DashConfiguration !== undefined && output.DashConfiguration !== null
            ? deserializeAws_restJson1DashConfiguration(output.DashConfiguration, context)
            : undefined,
        HlsConfiguration: output.HlsConfiguration !== undefined && output.HlsConfiguration !== null
            ? deserializeAws_restJson1HlsConfiguration(output.HlsConfiguration, context)
            : undefined,
        LivePreRollConfiguration: output.LivePreRollConfiguration !== undefined && output.LivePreRollConfiguration !== null
            ? deserializeAws_restJson1LivePreRollConfiguration(output.LivePreRollConfiguration, context)
            : undefined,
        ManifestProcessingRules: output.ManifestProcessingRules !== undefined && output.ManifestProcessingRules !== null
            ? deserializeAws_restJson1ManifestProcessingRules(output.ManifestProcessingRules, context)
            : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        PersonalizationThresholdSeconds: output.PersonalizationThresholdSeconds !== undefined && output.PersonalizationThresholdSeconds !== null
            ? output.PersonalizationThresholdSeconds
            : undefined,
        PlaybackConfigurationArn: output.PlaybackConfigurationArn !== undefined && output.PlaybackConfigurationArn !== null
            ? output.PlaybackConfigurationArn
            : undefined,
        PlaybackEndpointPrefix: output.PlaybackEndpointPrefix !== undefined && output.PlaybackEndpointPrefix !== null
            ? output.PlaybackEndpointPrefix
            : undefined,
        SessionInitializationEndpointPrefix: output.SessionInitializationEndpointPrefix !== undefined && output.SessionInitializationEndpointPrefix !== null
            ? output.SessionInitializationEndpointPrefix
            : undefined,
        SlateAdUrl: output.SlateAdUrl !== undefined && output.SlateAdUrl !== null ? output.SlateAdUrl : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        TranscodeProfileName: output.TranscodeProfileName !== undefined && output.TranscodeProfileName !== null
            ? output.TranscodeProfileName
            : undefined,
        VideoContentSourceUrl: output.VideoContentSourceUrl !== undefined && output.VideoContentSourceUrl !== null
            ? output.VideoContentSourceUrl
            : undefined,
    };
};
const deserializeAws_restJson1ResponseOutputItem = (output, context) => {
    return {
        DashPlaylistSettings: output.DashPlaylistSettings !== undefined && output.DashPlaylistSettings !== null
            ? deserializeAws_restJson1DashPlaylistSettings(output.DashPlaylistSettings, context)
            : undefined,
        HlsPlaylistSettings: output.HlsPlaylistSettings !== undefined && output.HlsPlaylistSettings !== null
            ? deserializeAws_restJson1HlsPlaylistSettings(output.HlsPlaylistSettings, context)
            : undefined,
        ManifestName: output.ManifestName !== undefined && output.ManifestName !== null ? output.ManifestName : undefined,
        PlaybackUrl: output.PlaybackUrl !== undefined && output.PlaybackUrl !== null ? output.PlaybackUrl : undefined,
        SourceGroup: output.SourceGroup !== undefined && output.SourceGroup !== null ? output.SourceGroup : undefined,
    };
};
const deserializeAws_restJson1ResponseOutputs = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ResponseOutputItem(entry, context);
    });
};
const deserializeAws_restJson1ScheduleEntry = (output, context) => {
    return {
        ApproximateDurationSeconds: output.ApproximateDurationSeconds !== undefined && output.ApproximateDurationSeconds !== null
            ? output.ApproximateDurationSeconds
            : undefined,
        ApproximateStartTime: output.ApproximateStartTime !== undefined && output.ApproximateStartTime !== null
            ? new Date(Math.round(output.ApproximateStartTime * 1000))
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        ChannelName: output.ChannelName !== undefined && output.ChannelName !== null ? output.ChannelName : undefined,
        ProgramName: output.ProgramName !== undefined && output.ProgramName !== null ? output.ProgramName : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
    };
};
const deserializeAws_restJson1SlateSource = (output, context) => {
    return {
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
    };
};
const deserializeAws_restJson1SourceLocation = (output, context) => {
    return {
        AccessConfiguration: output.AccessConfiguration !== undefined && output.AccessConfiguration !== null
            ? deserializeAws_restJson1AccessConfiguration(output.AccessConfiguration, context)
            : undefined,
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        DefaultSegmentDeliveryConfiguration: output.DefaultSegmentDeliveryConfiguration !== undefined && output.DefaultSegmentDeliveryConfiguration !== null
            ? deserializeAws_restJson1DefaultSegmentDeliveryConfiguration(output.DefaultSegmentDeliveryConfiguration, context)
            : undefined,
        HttpConfiguration: output.HttpConfiguration !== undefined && output.HttpConfiguration !== null
            ? deserializeAws_restJson1HttpConfiguration(output.HttpConfiguration, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SpliceInsertMessage = (output, context) => {
    return {
        AvailNum: output.AvailNum !== undefined && output.AvailNum !== null ? output.AvailNum : undefined,
        AvailsExpected: output.AvailsExpected !== undefined && output.AvailsExpected !== null ? output.AvailsExpected : undefined,
        SpliceEventId: output.SpliceEventId !== undefined && output.SpliceEventId !== null ? output.SpliceEventId : undefined,
        UniqueProgramId: output.UniqueProgramId !== undefined && output.UniqueProgramId !== null ? output.UniqueProgramId : undefined,
    };
};
const deserializeAws_restJson1VodSource = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreationTime: output.CreationTime !== undefined && output.CreationTime !== null
            ? new Date(Math.round(output.CreationTime * 1000))
            : undefined,
        HttpPackageConfigurations: output.HttpPackageConfigurations !== undefined && output.HttpPackageConfigurations !== null
            ? deserializeAws_restJson1HttpPackageConfigurations(output.HttpPackageConfigurations, context)
            : undefined,
        LastModifiedTime: output.LastModifiedTime !== undefined && output.LastModifiedTime !== null
            ? new Date(Math.round(output.LastModifiedTime * 1000))
            : undefined,
        SourceLocationName: output.SourceLocationName !== undefined && output.SourceLocationName !== null
            ? output.SourceLocationName
            : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1__mapOf__string(output.tags, context)
            : undefined,
        VodSourceName: output.VodSourceName !== undefined && output.VodSourceName !== null ? output.VodSourceName : undefined,
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