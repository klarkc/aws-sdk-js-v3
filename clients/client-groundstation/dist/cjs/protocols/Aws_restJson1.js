"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateMissionProfileCommand = exports.deserializeAws_restJson1UpdateConfigCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1ReserveContactCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSatellitesCommand = exports.deserializeAws_restJson1ListMissionProfilesCommand = exports.deserializeAws_restJson1ListGroundStationsCommand = exports.deserializeAws_restJson1ListDataflowEndpointGroupsCommand = exports.deserializeAws_restJson1ListContactsCommand = exports.deserializeAws_restJson1ListConfigsCommand = exports.deserializeAws_restJson1GetSatelliteCommand = exports.deserializeAws_restJson1GetMissionProfileCommand = exports.deserializeAws_restJson1GetMinuteUsageCommand = exports.deserializeAws_restJson1GetDataflowEndpointGroupCommand = exports.deserializeAws_restJson1GetConfigCommand = exports.deserializeAws_restJson1DescribeContactCommand = exports.deserializeAws_restJson1DeleteMissionProfileCommand = exports.deserializeAws_restJson1DeleteDataflowEndpointGroupCommand = exports.deserializeAws_restJson1DeleteConfigCommand = exports.deserializeAws_restJson1CreateMissionProfileCommand = exports.deserializeAws_restJson1CreateDataflowEndpointGroupCommand = exports.deserializeAws_restJson1CreateConfigCommand = exports.deserializeAws_restJson1CancelContactCommand = exports.serializeAws_restJson1UpdateMissionProfileCommand = exports.serializeAws_restJson1UpdateConfigCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1ReserveContactCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSatellitesCommand = exports.serializeAws_restJson1ListMissionProfilesCommand = exports.serializeAws_restJson1ListGroundStationsCommand = exports.serializeAws_restJson1ListDataflowEndpointGroupsCommand = exports.serializeAws_restJson1ListContactsCommand = exports.serializeAws_restJson1ListConfigsCommand = exports.serializeAws_restJson1GetSatelliteCommand = exports.serializeAws_restJson1GetMissionProfileCommand = exports.serializeAws_restJson1GetMinuteUsageCommand = exports.serializeAws_restJson1GetDataflowEndpointGroupCommand = exports.serializeAws_restJson1GetConfigCommand = exports.serializeAws_restJson1DescribeContactCommand = exports.serializeAws_restJson1DeleteMissionProfileCommand = exports.serializeAws_restJson1DeleteDataflowEndpointGroupCommand = exports.serializeAws_restJson1DeleteConfigCommand = exports.serializeAws_restJson1CreateMissionProfileCommand = exports.serializeAws_restJson1CreateDataflowEndpointGroupCommand = exports.serializeAws_restJson1CreateConfigCommand = exports.serializeAws_restJson1CancelContactCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelContactCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/contact/{contactId}";
    if (input.contactId !== undefined) {
        const labelValue = input.contactId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: contactId.");
        }
        resolvedPath = resolvedPath.replace("{contactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: contactId.");
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
exports.serializeAws_restJson1CancelContactCommand = serializeAws_restJson1CancelContactCommand;
const serializeAws_restJson1CreateConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/config";
    let body;
    body = JSON.stringify({
        ...(input.configData !== undefined &&
            input.configData !== null && { configData: serializeAws_restJson1ConfigTypeData(input.configData, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateConfigCommand = serializeAws_restJson1CreateConfigCommand;
const serializeAws_restJson1CreateDataflowEndpointGroupCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/dataflowEndpointGroup";
    let body;
    body = JSON.stringify({
        ...(input.endpointDetails !== undefined &&
            input.endpointDetails !== null && {
            endpointDetails: serializeAws_restJson1EndpointDetailsList(input.endpointDetails, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDataflowEndpointGroupCommand = serializeAws_restJson1CreateDataflowEndpointGroupCommand;
const serializeAws_restJson1CreateMissionProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/missionprofile";
    let body;
    body = JSON.stringify({
        ...(input.contactPostPassDurationSeconds !== undefined &&
            input.contactPostPassDurationSeconds !== null && {
            contactPostPassDurationSeconds: input.contactPostPassDurationSeconds,
        }),
        ...(input.contactPrePassDurationSeconds !== undefined &&
            input.contactPrePassDurationSeconds !== null && {
            contactPrePassDurationSeconds: input.contactPrePassDurationSeconds,
        }),
        ...(input.dataflowEdges !== undefined &&
            input.dataflowEdges !== null && {
            dataflowEdges: serializeAws_restJson1DataflowEdgeList(input.dataflowEdges, context),
        }),
        ...(input.minimumViableContactDurationSeconds !== undefined &&
            input.minimumViableContactDurationSeconds !== null && {
            minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
        ...(input.trackingConfigArn !== undefined &&
            input.trackingConfigArn !== null && { trackingConfigArn: input.trackingConfigArn }),
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
exports.serializeAws_restJson1CreateMissionProfileCommand = serializeAws_restJson1CreateMissionProfileCommand;
const serializeAws_restJson1DeleteConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
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
exports.serializeAws_restJson1DeleteConfigCommand = serializeAws_restJson1DeleteConfigCommand;
const serializeAws_restJson1DeleteDataflowEndpointGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
    if (input.dataflowEndpointGroupId !== undefined) {
        const labelValue = input.dataflowEndpointGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dataflowEndpointGroupId.");
        }
        resolvedPath = resolvedPath.replace("{dataflowEndpointGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dataflowEndpointGroupId.");
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
exports.serializeAws_restJson1DeleteDataflowEndpointGroupCommand = serializeAws_restJson1DeleteDataflowEndpointGroupCommand;
const serializeAws_restJson1DeleteMissionProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
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
exports.serializeAws_restJson1DeleteMissionProfileCommand = serializeAws_restJson1DeleteMissionProfileCommand;
const serializeAws_restJson1DescribeContactCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/contact/{contactId}";
    if (input.contactId !== undefined) {
        const labelValue = input.contactId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: contactId.");
        }
        resolvedPath = resolvedPath.replace("{contactId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: contactId.");
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
exports.serializeAws_restJson1DescribeContactCommand = serializeAws_restJson1DescribeContactCommand;
const serializeAws_restJson1GetConfigCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
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
exports.serializeAws_restJson1GetConfigCommand = serializeAws_restJson1GetConfigCommand;
const serializeAws_restJson1GetDataflowEndpointGroupCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
    if (input.dataflowEndpointGroupId !== undefined) {
        const labelValue = input.dataflowEndpointGroupId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: dataflowEndpointGroupId.");
        }
        resolvedPath = resolvedPath.replace("{dataflowEndpointGroupId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: dataflowEndpointGroupId.");
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
exports.serializeAws_restJson1GetDataflowEndpointGroupCommand = serializeAws_restJson1GetDataflowEndpointGroupCommand;
const serializeAws_restJson1GetMinuteUsageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/minute-usage";
    let body;
    body = JSON.stringify({
        ...(input.month !== undefined && input.month !== null && { month: input.month }),
        ...(input.year !== undefined && input.year !== null && { year: input.year }),
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
exports.serializeAws_restJson1GetMinuteUsageCommand = serializeAws_restJson1GetMinuteUsageCommand;
const serializeAws_restJson1GetMissionProfileCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
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
exports.serializeAws_restJson1GetMissionProfileCommand = serializeAws_restJson1GetMissionProfileCommand;
const serializeAws_restJson1GetSatelliteCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/satellite/{satelliteId}";
    if (input.satelliteId !== undefined) {
        const labelValue = input.satelliteId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: satelliteId.");
        }
        resolvedPath = resolvedPath.replace("{satelliteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: satelliteId.");
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
exports.serializeAws_restJson1GetSatelliteCommand = serializeAws_restJson1GetSatelliteCommand;
const serializeAws_restJson1ListConfigsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/config";
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
exports.serializeAws_restJson1ListConfigsCommand = serializeAws_restJson1ListConfigsCommand;
const serializeAws_restJson1ListContactsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contacts";
    let body;
    body = JSON.stringify({
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.groundStation !== undefined && input.groundStation !== null && { groundStation: input.groundStation }),
        ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
        ...(input.missionProfileArn !== undefined &&
            input.missionProfileArn !== null && { missionProfileArn: input.missionProfileArn }),
        ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
        ...(input.satelliteArn !== undefined && input.satelliteArn !== null && { satelliteArn: input.satelliteArn }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.statusList !== undefined &&
            input.statusList !== null && { statusList: serializeAws_restJson1StatusList(input.statusList, context) }),
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
exports.serializeAws_restJson1ListContactsCommand = serializeAws_restJson1ListContactsCommand;
const serializeAws_restJson1ListDataflowEndpointGroupsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/dataflowEndpointGroup";
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
exports.serializeAws_restJson1ListDataflowEndpointGroupsCommand = serializeAws_restJson1ListDataflowEndpointGroupsCommand;
const serializeAws_restJson1ListGroundStationsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/groundstation";
    const query = {
        ...(input.satelliteId !== undefined && { satelliteId: input.satelliteId }),
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
exports.serializeAws_restJson1ListGroundStationsCommand = serializeAws_restJson1ListGroundStationsCommand;
const serializeAws_restJson1ListMissionProfilesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/missionprofile";
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
exports.serializeAws_restJson1ListMissionProfilesCommand = serializeAws_restJson1ListMissionProfilesCommand;
const serializeAws_restJson1ListSatellitesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/satellite";
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
exports.serializeAws_restJson1ListSatellitesCommand = serializeAws_restJson1ListSatellitesCommand;
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
const serializeAws_restJson1ReserveContactCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/contact";
    let body;
    body = JSON.stringify({
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.groundStation !== undefined && input.groundStation !== null && { groundStation: input.groundStation }),
        ...(input.missionProfileArn !== undefined &&
            input.missionProfileArn !== null && { missionProfileArn: input.missionProfileArn }),
        ...(input.satelliteArn !== undefined && input.satelliteArn !== null && { satelliteArn: input.satelliteArn }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
exports.serializeAws_restJson1ReserveContactCommand = serializeAws_restJson1ReserveContactCommand;
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
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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
const serializeAws_restJson1UpdateConfigCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/config/{configType}/{configId}";
    if (input.configId !== undefined) {
        const labelValue = input.configId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configId.");
        }
        resolvedPath = resolvedPath.replace("{configId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configId.");
    }
    if (input.configType !== undefined) {
        const labelValue = input.configType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: configType.");
        }
        resolvedPath = resolvedPath.replace("{configType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: configType.");
    }
    let body;
    body = JSON.stringify({
        ...(input.configData !== undefined &&
            input.configData !== null && { configData: serializeAws_restJson1ConfigTypeData(input.configData, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
exports.serializeAws_restJson1UpdateConfigCommand = serializeAws_restJson1UpdateConfigCommand;
const serializeAws_restJson1UpdateMissionProfileCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/missionprofile/{missionProfileId}";
    if (input.missionProfileId !== undefined) {
        const labelValue = input.missionProfileId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: missionProfileId.");
        }
        resolvedPath = resolvedPath.replace("{missionProfileId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: missionProfileId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.contactPostPassDurationSeconds !== undefined &&
            input.contactPostPassDurationSeconds !== null && {
            contactPostPassDurationSeconds: input.contactPostPassDurationSeconds,
        }),
        ...(input.contactPrePassDurationSeconds !== undefined &&
            input.contactPrePassDurationSeconds !== null && {
            contactPrePassDurationSeconds: input.contactPrePassDurationSeconds,
        }),
        ...(input.dataflowEdges !== undefined &&
            input.dataflowEdges !== null && {
            dataflowEdges: serializeAws_restJson1DataflowEdgeList(input.dataflowEdges, context),
        }),
        ...(input.minimumViableContactDurationSeconds !== undefined &&
            input.minimumViableContactDurationSeconds !== null && {
            minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.trackingConfigArn !== undefined &&
            input.trackingConfigArn !== null && { trackingConfigArn: input.trackingConfigArn }),
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
exports.serializeAws_restJson1UpdateMissionProfileCommand = serializeAws_restJson1UpdateMissionProfileCommand;
const deserializeAws_restJson1CancelContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contactId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelContactCommand = deserializeAws_restJson1CancelContactCommand;
const deserializeAws_restJson1CancelContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configArn: undefined,
        configId: undefined,
        configType: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateConfigCommand = deserializeAws_restJson1CreateConfigCommand;
const deserializeAws_restJson1CreateConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceLimitExceededException":
        case "com.amazonaws.groundstation#ResourceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDataflowEndpointGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dataflowEndpointGroupId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupId !== undefined && data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDataflowEndpointGroupCommand = deserializeAws_restJson1CreateDataflowEndpointGroupCommand;
const deserializeAws_restJson1CreateDataflowEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateMissionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        missionProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateMissionProfileCommand = deserializeAws_restJson1CreateMissionProfileCommand;
const deserializeAws_restJson1CreateMissionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configArn: undefined,
        configId: undefined,
        configType: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteConfigCommand = deserializeAws_restJson1DeleteConfigCommand;
const deserializeAws_restJson1DeleteConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDataflowEndpointGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dataflowEndpointGroupId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupId !== undefined && data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDataflowEndpointGroupCommand = deserializeAws_restJson1DeleteDataflowEndpointGroupCommand;
const deserializeAws_restJson1DeleteDataflowEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteMissionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        missionProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteMissionProfileCommand = deserializeAws_restJson1DeleteMissionProfileCommand;
const deserializeAws_restJson1DeleteMissionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contactId: undefined,
        contactStatus: undefined,
        dataflowList: undefined,
        endTime: undefined,
        errorMessage: undefined,
        groundStation: undefined,
        maximumElevation: undefined,
        missionProfileArn: undefined,
        postPassEndTime: undefined,
        prePassStartTime: undefined,
        region: undefined,
        satelliteArn: undefined,
        startTime: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    if (data.contactStatus !== undefined && data.contactStatus !== null) {
        contents.contactStatus = data.contactStatus;
    }
    if (data.dataflowList !== undefined && data.dataflowList !== null) {
        contents.dataflowList = deserializeAws_restJson1DataflowList(data.dataflowList, context);
    }
    if (data.endTime !== undefined && data.endTime !== null) {
        contents.endTime = new Date(Math.round(data.endTime * 1000));
    }
    if (data.errorMessage !== undefined && data.errorMessage !== null) {
        contents.errorMessage = data.errorMessage;
    }
    if (data.groundStation !== undefined && data.groundStation !== null) {
        contents.groundStation = data.groundStation;
    }
    if (data.maximumElevation !== undefined && data.maximumElevation !== null) {
        contents.maximumElevation = deserializeAws_restJson1Elevation(data.maximumElevation, context);
    }
    if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
        contents.missionProfileArn = data.missionProfileArn;
    }
    if (data.postPassEndTime !== undefined && data.postPassEndTime !== null) {
        contents.postPassEndTime = new Date(Math.round(data.postPassEndTime * 1000));
    }
    if (data.prePassStartTime !== undefined && data.prePassStartTime !== null) {
        contents.prePassStartTime = new Date(Math.round(data.prePassStartTime * 1000));
    }
    if (data.region !== undefined && data.region !== null) {
        contents.region = data.region;
    }
    if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
        contents.satelliteArn = data.satelliteArn;
    }
    if (data.startTime !== undefined && data.startTime !== null) {
        contents.startTime = new Date(Math.round(data.startTime * 1000));
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeContactCommand = deserializeAws_restJson1DescribeContactCommand;
const deserializeAws_restJson1DescribeContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configArn: undefined,
        configData: undefined,
        configId: undefined,
        configType: undefined,
        name: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configData !== undefined && data.configData !== null) {
        contents.configData = deserializeAws_restJson1ConfigTypeData(data.configData, context);
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetConfigCommand = deserializeAws_restJson1GetConfigCommand;
const deserializeAws_restJson1GetConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDataflowEndpointGroupCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDataflowEndpointGroupCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dataflowEndpointGroupArn: undefined,
        dataflowEndpointGroupId: undefined,
        endpointsDetails: undefined,
        tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupArn !== undefined && data.dataflowEndpointGroupArn !== null) {
        contents.dataflowEndpointGroupArn = data.dataflowEndpointGroupArn;
    }
    if (data.dataflowEndpointGroupId !== undefined && data.dataflowEndpointGroupId !== null) {
        contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
    }
    if (data.endpointsDetails !== undefined && data.endpointsDetails !== null) {
        contents.endpointsDetails = deserializeAws_restJson1EndpointDetailsList(data.endpointsDetails, context);
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDataflowEndpointGroupCommand = deserializeAws_restJson1GetDataflowEndpointGroupCommand;
const deserializeAws_restJson1GetDataflowEndpointGroupCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMinuteUsageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMinuteUsageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        estimatedMinutesRemaining: undefined,
        isReservedMinutesCustomer: undefined,
        totalReservedMinuteAllocation: undefined,
        totalScheduledMinutes: undefined,
        upcomingMinutesScheduled: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.estimatedMinutesRemaining !== undefined && data.estimatedMinutesRemaining !== null) {
        contents.estimatedMinutesRemaining = data.estimatedMinutesRemaining;
    }
    if (data.isReservedMinutesCustomer !== undefined && data.isReservedMinutesCustomer !== null) {
        contents.isReservedMinutesCustomer = data.isReservedMinutesCustomer;
    }
    if (data.totalReservedMinuteAllocation !== undefined && data.totalReservedMinuteAllocation !== null) {
        contents.totalReservedMinuteAllocation = data.totalReservedMinuteAllocation;
    }
    if (data.totalScheduledMinutes !== undefined && data.totalScheduledMinutes !== null) {
        contents.totalScheduledMinutes = data.totalScheduledMinutes;
    }
    if (data.upcomingMinutesScheduled !== undefined && data.upcomingMinutesScheduled !== null) {
        contents.upcomingMinutesScheduled = data.upcomingMinutesScheduled;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMinuteUsageCommand = deserializeAws_restJson1GetMinuteUsageCommand;
const deserializeAws_restJson1GetMinuteUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetMissionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contactPostPassDurationSeconds: undefined,
        contactPrePassDurationSeconds: undefined,
        dataflowEdges: undefined,
        minimumViableContactDurationSeconds: undefined,
        missionProfileArn: undefined,
        missionProfileId: undefined,
        name: undefined,
        region: undefined,
        tags: undefined,
        trackingConfigArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.contactPostPassDurationSeconds !== undefined && data.contactPostPassDurationSeconds !== null) {
        contents.contactPostPassDurationSeconds = data.contactPostPassDurationSeconds;
    }
    if (data.contactPrePassDurationSeconds !== undefined && data.contactPrePassDurationSeconds !== null) {
        contents.contactPrePassDurationSeconds = data.contactPrePassDurationSeconds;
    }
    if (data.dataflowEdges !== undefined && data.dataflowEdges !== null) {
        contents.dataflowEdges = deserializeAws_restJson1DataflowEdgeList(data.dataflowEdges, context);
    }
    if (data.minimumViableContactDurationSeconds !== undefined && data.minimumViableContactDurationSeconds !== null) {
        contents.minimumViableContactDurationSeconds = data.minimumViableContactDurationSeconds;
    }
    if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
        contents.missionProfileArn = data.missionProfileArn;
    }
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    if (data.name !== undefined && data.name !== null) {
        contents.name = data.name;
    }
    if (data.region !== undefined && data.region !== null) {
        contents.region = data.region;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
    }
    if (data.trackingConfigArn !== undefined && data.trackingConfigArn !== null) {
        contents.trackingConfigArn = data.trackingConfigArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetMissionProfileCommand = deserializeAws_restJson1GetMissionProfileCommand;
const deserializeAws_restJson1GetMissionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetSatelliteCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetSatelliteCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        groundStations: undefined,
        noradSatelliteID: undefined,
        satelliteArn: undefined,
        satelliteId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.groundStations !== undefined && data.groundStations !== null) {
        contents.groundStations = deserializeAws_restJson1GroundStationIdList(data.groundStations, context);
    }
    if (data.noradSatelliteID !== undefined && data.noradSatelliteID !== null) {
        contents.noradSatelliteID = data.noradSatelliteID;
    }
    if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
        contents.satelliteArn = data.satelliteArn;
    }
    if (data.satelliteId !== undefined && data.satelliteId !== null) {
        contents.satelliteId = data.satelliteId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSatelliteCommand = deserializeAws_restJson1GetSatelliteCommand;
const deserializeAws_restJson1GetSatelliteCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListConfigsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListConfigsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configList: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configList !== undefined && data.configList !== null) {
        contents.configList = deserializeAws_restJson1ConfigList(data.configList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListConfigsCommand = deserializeAws_restJson1ListConfigsCommand;
const deserializeAws_restJson1ListConfigsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListContactsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListContactsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contactList: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.contactList !== undefined && data.contactList !== null) {
        contents.contactList = deserializeAws_restJson1ContactList(data.contactList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListContactsCommand = deserializeAws_restJson1ListContactsCommand;
const deserializeAws_restJson1ListContactsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDataflowEndpointGroupsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDataflowEndpointGroupsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        dataflowEndpointGroupList: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dataflowEndpointGroupList !== undefined && data.dataflowEndpointGroupList !== null) {
        contents.dataflowEndpointGroupList = deserializeAws_restJson1DataflowEndpointGroupList(data.dataflowEndpointGroupList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataflowEndpointGroupsCommand = deserializeAws_restJson1ListDataflowEndpointGroupsCommand;
const deserializeAws_restJson1ListDataflowEndpointGroupsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListGroundStationsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListGroundStationsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        groundStationList: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.groundStationList !== undefined && data.groundStationList !== null) {
        contents.groundStationList = deserializeAws_restJson1GroundStationList(data.groundStationList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGroundStationsCommand = deserializeAws_restJson1ListGroundStationsCommand;
const deserializeAws_restJson1ListGroundStationsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListMissionProfilesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListMissionProfilesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        missionProfileList: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileList !== undefined && data.missionProfileList !== null) {
        contents.missionProfileList = deserializeAws_restJson1MissionProfileList(data.missionProfileList, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListMissionProfilesCommand = deserializeAws_restJson1ListMissionProfilesCommand;
const deserializeAws_restJson1ListMissionProfilesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSatellitesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSatellitesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        satellites: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.satellites !== undefined && data.satellites !== null) {
        contents.satellites = deserializeAws_restJson1SatelliteList(data.satellites, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSatellitesCommand = deserializeAws_restJson1ListSatellitesCommand;
const deserializeAws_restJson1ListSatellitesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ReserveContactCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ReserveContactCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        contactId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.contactId !== undefined && data.contactId !== null) {
        contents.contactId = data.contactId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ReserveContactCommand = deserializeAws_restJson1ReserveContactCommand;
const deserializeAws_restJson1ReserveContactCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateConfigCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateConfigCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        configArn: undefined,
        configId: undefined,
        configType: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.configArn !== undefined && data.configArn !== null) {
        contents.configArn = data.configArn;
    }
    if (data.configId !== undefined && data.configId !== null) {
        contents.configId = data.configId;
    }
    if (data.configType !== undefined && data.configType !== null) {
        contents.configType = data.configType;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateConfigCommand = deserializeAws_restJson1UpdateConfigCommand;
const deserializeAws_restJson1UpdateConfigCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateMissionProfileCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateMissionProfileCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        missionProfileId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
        contents.missionProfileId = data.missionProfileId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateMissionProfileCommand = deserializeAws_restJson1UpdateMissionProfileCommand;
const deserializeAws_restJson1UpdateMissionProfileCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "DependencyException":
        case "com.amazonaws.groundstation#DependencyException":
            response = {
                ...(await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.groundstation#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.groundstation#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DependencyExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DependencyException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        parameterName: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.parameterName !== undefined && data.parameterName !== null) {
        contents.parameterName = data.parameterName;
    }
    return contents;
};
const deserializeAws_restJson1InvalidParameterExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidParameterException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        parameterName: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.parameterName !== undefined && data.parameterName !== null) {
        contents.parameterName = data.parameterName;
    }
    return contents;
};
const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        parameterName: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.parameterName !== undefined && data.parameterName !== null) {
        contents.parameterName = data.parameterName;
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
const serializeAws_restJson1AntennaDownlinkConfig = (input, context) => {
    return {
        ...(input.spectrumConfig !== undefined &&
            input.spectrumConfig !== null && {
            spectrumConfig: serializeAws_restJson1SpectrumConfig(input.spectrumConfig, context),
        }),
    };
};
const serializeAws_restJson1AntennaDownlinkDemodDecodeConfig = (input, context) => {
    return {
        ...(input.decodeConfig !== undefined &&
            input.decodeConfig !== null && { decodeConfig: serializeAws_restJson1DecodeConfig(input.decodeConfig, context) }),
        ...(input.demodulationConfig !== undefined &&
            input.demodulationConfig !== null && {
            demodulationConfig: serializeAws_restJson1DemodulationConfig(input.demodulationConfig, context),
        }),
        ...(input.spectrumConfig !== undefined &&
            input.spectrumConfig !== null && {
            spectrumConfig: serializeAws_restJson1SpectrumConfig(input.spectrumConfig, context),
        }),
    };
};
const serializeAws_restJson1AntennaUplinkConfig = (input, context) => {
    return {
        ...(input.spectrumConfig !== undefined &&
            input.spectrumConfig !== null && {
            spectrumConfig: serializeAws_restJson1UplinkSpectrumConfig(input.spectrumConfig, context),
        }),
        ...(input.targetEirp !== undefined &&
            input.targetEirp !== null && { targetEirp: serializeAws_restJson1Eirp(input.targetEirp, context) }),
        ...(input.transmitDisabled !== undefined &&
            input.transmitDisabled !== null && { transmitDisabled: input.transmitDisabled }),
    };
};
const serializeAws_restJson1ConfigTypeData = (input, context) => {
    return models_0_1.ConfigTypeData.visit(input, {
        antennaDownlinkConfig: (value) => ({
            antennaDownlinkConfig: serializeAws_restJson1AntennaDownlinkConfig(value, context),
        }),
        antennaDownlinkDemodDecodeConfig: (value) => ({
            antennaDownlinkDemodDecodeConfig: serializeAws_restJson1AntennaDownlinkDemodDecodeConfig(value, context),
        }),
        antennaUplinkConfig: (value) => ({
            antennaUplinkConfig: serializeAws_restJson1AntennaUplinkConfig(value, context),
        }),
        dataflowEndpointConfig: (value) => ({
            dataflowEndpointConfig: serializeAws_restJson1DataflowEndpointConfig(value, context),
        }),
        s3RecordingConfig: (value) => ({ s3RecordingConfig: serializeAws_restJson1S3RecordingConfig(value, context) }),
        trackingConfig: (value) => ({ trackingConfig: serializeAws_restJson1TrackingConfig(value, context) }),
        uplinkEchoConfig: (value) => ({ uplinkEchoConfig: serializeAws_restJson1UplinkEchoConfig(value, context) }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1DataflowEdge = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1DataflowEdgeList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DataflowEdge(entry, context);
    });
};
const serializeAws_restJson1DataflowEndpoint = (input, context) => {
    return {
        ...(input.address !== undefined &&
            input.address !== null && { address: serializeAws_restJson1SocketAddress(input.address, context) }),
        ...(input.mtu !== undefined && input.mtu !== null && { mtu: input.mtu }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.status !== undefined && input.status !== null && { status: input.status }),
    };
};
const serializeAws_restJson1DataflowEndpointConfig = (input, context) => {
    return {
        ...(input.dataflowEndpointName !== undefined &&
            input.dataflowEndpointName !== null && { dataflowEndpointName: input.dataflowEndpointName }),
        ...(input.dataflowEndpointRegion !== undefined &&
            input.dataflowEndpointRegion !== null && { dataflowEndpointRegion: input.dataflowEndpointRegion }),
    };
};
const serializeAws_restJson1DecodeConfig = (input, context) => {
    return {
        ...(input.unvalidatedJSON !== undefined &&
            input.unvalidatedJSON !== null && { unvalidatedJSON: input.unvalidatedJSON }),
    };
};
const serializeAws_restJson1DemodulationConfig = (input, context) => {
    return {
        ...(input.unvalidatedJSON !== undefined &&
            input.unvalidatedJSON !== null && { unvalidatedJSON: input.unvalidatedJSON }),
    };
};
const serializeAws_restJson1Eirp = (input, context) => {
    return {
        ...(input.units !== undefined && input.units !== null && { units: input.units }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1EndpointDetails = (input, context) => {
    return {
        ...(input.endpoint !== undefined &&
            input.endpoint !== null && { endpoint: serializeAws_restJson1DataflowEndpoint(input.endpoint, context) }),
        ...(input.securityDetails !== undefined &&
            input.securityDetails !== null && {
            securityDetails: serializeAws_restJson1SecurityDetails(input.securityDetails, context),
        }),
    };
};
const serializeAws_restJson1EndpointDetailsList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1EndpointDetails(entry, context);
    });
};
const serializeAws_restJson1Frequency = (input, context) => {
    return {
        ...(input.units !== undefined && input.units !== null && { units: input.units }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1FrequencyBandwidth = (input, context) => {
    return {
        ...(input.units !== undefined && input.units !== null && { units: input.units }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1S3RecordingConfig = (input, context) => {
    return {
        ...(input.bucketArn !== undefined && input.bucketArn !== null && { bucketArn: input.bucketArn }),
        ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1SecurityDetails = (input, context) => {
    return {
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.securityGroupIds !== undefined &&
            input.securityGroupIds !== null && {
            securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.securityGroupIds, context),
        }),
        ...(input.subnetIds !== undefined &&
            input.subnetIds !== null && { subnetIds: serializeAws_restJson1SubnetList(input.subnetIds, context) }),
    };
};
const serializeAws_restJson1SecurityGroupIdList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SocketAddress = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.port !== undefined && input.port !== null && { port: input.port }),
    };
};
const serializeAws_restJson1SpectrumConfig = (input, context) => {
    return {
        ...(input.bandwidth !== undefined &&
            input.bandwidth !== null && { bandwidth: serializeAws_restJson1FrequencyBandwidth(input.bandwidth, context) }),
        ...(input.centerFrequency !== undefined &&
            input.centerFrequency !== null && {
            centerFrequency: serializeAws_restJson1Frequency(input.centerFrequency, context),
        }),
        ...(input.polarization !== undefined && input.polarization !== null && { polarization: input.polarization }),
    };
};
const serializeAws_restJson1StatusList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1SubnetList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1TagsMap = (input, context) => {
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
const serializeAws_restJson1TrackingConfig = (input, context) => {
    return {
        ...(input.autotrack !== undefined && input.autotrack !== null && { autotrack: input.autotrack }),
    };
};
const serializeAws_restJson1UplinkEchoConfig = (input, context) => {
    return {
        ...(input.antennaUplinkConfigArn !== undefined &&
            input.antennaUplinkConfigArn !== null && { antennaUplinkConfigArn: input.antennaUplinkConfigArn }),
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    };
};
const serializeAws_restJson1UplinkSpectrumConfig = (input, context) => {
    return {
        ...(input.centerFrequency !== undefined &&
            input.centerFrequency !== null && {
            centerFrequency: serializeAws_restJson1Frequency(input.centerFrequency, context),
        }),
        ...(input.polarization !== undefined && input.polarization !== null && { polarization: input.polarization }),
    };
};
const deserializeAws_restJson1AntennaDemodDecodeDetails = (output, context) => {
    return {
        outputNode: output.outputNode !== undefined && output.outputNode !== null ? output.outputNode : undefined,
    };
};
const deserializeAws_restJson1AntennaDownlinkConfig = (output, context) => {
    return {
        spectrumConfig: output.spectrumConfig !== undefined && output.spectrumConfig !== null
            ? deserializeAws_restJson1SpectrumConfig(output.spectrumConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig = (output, context) => {
    return {
        decodeConfig: output.decodeConfig !== undefined && output.decodeConfig !== null
            ? deserializeAws_restJson1DecodeConfig(output.decodeConfig, context)
            : undefined,
        demodulationConfig: output.demodulationConfig !== undefined && output.demodulationConfig !== null
            ? deserializeAws_restJson1DemodulationConfig(output.demodulationConfig, context)
            : undefined,
        spectrumConfig: output.spectrumConfig !== undefined && output.spectrumConfig !== null
            ? deserializeAws_restJson1SpectrumConfig(output.spectrumConfig, context)
            : undefined,
    };
};
const deserializeAws_restJson1AntennaUplinkConfig = (output, context) => {
    return {
        spectrumConfig: output.spectrumConfig !== undefined && output.spectrumConfig !== null
            ? deserializeAws_restJson1UplinkSpectrumConfig(output.spectrumConfig, context)
            : undefined,
        targetEirp: output.targetEirp !== undefined && output.targetEirp !== null
            ? deserializeAws_restJson1Eirp(output.targetEirp, context)
            : undefined,
        transmitDisabled: output.transmitDisabled !== undefined && output.transmitDisabled !== null ? output.transmitDisabled : undefined,
    };
};
const deserializeAws_restJson1ConfigDetails = (output, context) => {
    if (output.antennaDemodDecodeDetails !== undefined && output.antennaDemodDecodeDetails !== null) {
        return {
            antennaDemodDecodeDetails: deserializeAws_restJson1AntennaDemodDecodeDetails(output.antennaDemodDecodeDetails, context),
        };
    }
    if (output.endpointDetails !== undefined && output.endpointDetails !== null) {
        return {
            endpointDetails: deserializeAws_restJson1EndpointDetails(output.endpointDetails, context),
        };
    }
    if (output.s3RecordingDetails !== undefined && output.s3RecordingDetails !== null) {
        return {
            s3RecordingDetails: deserializeAws_restJson1S3RecordingDetails(output.s3RecordingDetails, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ConfigList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ConfigListItem(entry, context);
    });
};
const deserializeAws_restJson1ConfigListItem = (output, context) => {
    return {
        configArn: output.configArn !== undefined && output.configArn !== null ? output.configArn : undefined,
        configId: output.configId !== undefined && output.configId !== null ? output.configId : undefined,
        configType: output.configType !== undefined && output.configType !== null ? output.configType : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1ConfigTypeData = (output, context) => {
    if (output.antennaDownlinkConfig !== undefined && output.antennaDownlinkConfig !== null) {
        return {
            antennaDownlinkConfig: deserializeAws_restJson1AntennaDownlinkConfig(output.antennaDownlinkConfig, context),
        };
    }
    if (output.antennaDownlinkDemodDecodeConfig !== undefined && output.antennaDownlinkDemodDecodeConfig !== null) {
        return {
            antennaDownlinkDemodDecodeConfig: deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig(output.antennaDownlinkDemodDecodeConfig, context),
        };
    }
    if (output.antennaUplinkConfig !== undefined && output.antennaUplinkConfig !== null) {
        return {
            antennaUplinkConfig: deserializeAws_restJson1AntennaUplinkConfig(output.antennaUplinkConfig, context),
        };
    }
    if (output.dataflowEndpointConfig !== undefined && output.dataflowEndpointConfig !== null) {
        return {
            dataflowEndpointConfig: deserializeAws_restJson1DataflowEndpointConfig(output.dataflowEndpointConfig, context),
        };
    }
    if (output.s3RecordingConfig !== undefined && output.s3RecordingConfig !== null) {
        return {
            s3RecordingConfig: deserializeAws_restJson1S3RecordingConfig(output.s3RecordingConfig, context),
        };
    }
    if (output.trackingConfig !== undefined && output.trackingConfig !== null) {
        return {
            trackingConfig: deserializeAws_restJson1TrackingConfig(output.trackingConfig, context),
        };
    }
    if (output.uplinkEchoConfig !== undefined && output.uplinkEchoConfig !== null) {
        return {
            uplinkEchoConfig: deserializeAws_restJson1UplinkEchoConfig(output.uplinkEchoConfig, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1ContactData = (output, context) => {
    return {
        contactId: output.contactId !== undefined && output.contactId !== null ? output.contactId : undefined,
        contactStatus: output.contactStatus !== undefined && output.contactStatus !== null ? output.contactStatus : undefined,
        endTime: output.endTime !== undefined && output.endTime !== null ? new Date(Math.round(output.endTime * 1000)) : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        groundStation: output.groundStation !== undefined && output.groundStation !== null ? output.groundStation : undefined,
        maximumElevation: output.maximumElevation !== undefined && output.maximumElevation !== null
            ? deserializeAws_restJson1Elevation(output.maximumElevation, context)
            : undefined,
        missionProfileArn: output.missionProfileArn !== undefined && output.missionProfileArn !== null
            ? output.missionProfileArn
            : undefined,
        postPassEndTime: output.postPassEndTime !== undefined && output.postPassEndTime !== null
            ? new Date(Math.round(output.postPassEndTime * 1000))
            : undefined,
        prePassStartTime: output.prePassStartTime !== undefined && output.prePassStartTime !== null
            ? new Date(Math.round(output.prePassStartTime * 1000))
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
        satelliteArn: output.satelliteArn !== undefined && output.satelliteArn !== null ? output.satelliteArn : undefined,
        startTime: output.startTime !== undefined && output.startTime !== null
            ? new Date(Math.round(output.startTime * 1000))
            : undefined,
        tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1TagsMap(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1ContactList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ContactData(entry, context);
    });
};
const deserializeAws_restJson1DataflowDetail = (output, context) => {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1Destination(output.destination, context)
            : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        source: output.source !== undefined && output.source !== null
            ? deserializeAws_restJson1Source(output.source, context)
            : undefined,
    };
};
const deserializeAws_restJson1DataflowEdge = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DataflowEdgeList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataflowEdge(entry, context);
    });
};
const deserializeAws_restJson1DataflowEndpoint = (output, context) => {
    return {
        address: output.address !== undefined && output.address !== null
            ? deserializeAws_restJson1SocketAddress(output.address, context)
            : undefined,
        mtu: output.mtu !== undefined && output.mtu !== null ? output.mtu : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DataflowEndpointConfig = (output, context) => {
    return {
        dataflowEndpointName: output.dataflowEndpointName !== undefined && output.dataflowEndpointName !== null
            ? output.dataflowEndpointName
            : undefined,
        dataflowEndpointRegion: output.dataflowEndpointRegion !== undefined && output.dataflowEndpointRegion !== null
            ? output.dataflowEndpointRegion
            : undefined,
    };
};
const deserializeAws_restJson1DataflowEndpointGroupList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataflowEndpointListItem(entry, context);
    });
};
const deserializeAws_restJson1DataflowEndpointListItem = (output, context) => {
    return {
        dataflowEndpointGroupArn: output.dataflowEndpointGroupArn !== undefined && output.dataflowEndpointGroupArn !== null
            ? output.dataflowEndpointGroupArn
            : undefined,
        dataflowEndpointGroupId: output.dataflowEndpointGroupId !== undefined && output.dataflowEndpointGroupId !== null
            ? output.dataflowEndpointGroupId
            : undefined,
    };
};
const deserializeAws_restJson1DataflowList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataflowDetail(entry, context);
    });
};
const deserializeAws_restJson1DecodeConfig = (output, context) => {
    return {
        unvalidatedJSON: output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null ? output.unvalidatedJSON : undefined,
    };
};
const deserializeAws_restJson1DemodulationConfig = (output, context) => {
    return {
        unvalidatedJSON: output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null ? output.unvalidatedJSON : undefined,
    };
};
const deserializeAws_restJson1Destination = (output, context) => {
    return {
        configDetails: output.configDetails !== undefined && output.configDetails !== null
            ? deserializeAws_restJson1ConfigDetails(output.configDetails, context)
            : undefined,
        configId: output.configId !== undefined && output.configId !== null ? output.configId : undefined,
        configType: output.configType !== undefined && output.configType !== null ? output.configType : undefined,
        dataflowDestinationRegion: output.dataflowDestinationRegion !== undefined && output.dataflowDestinationRegion !== null
            ? output.dataflowDestinationRegion
            : undefined,
    };
};
const deserializeAws_restJson1Eirp = (output, context) => {
    return {
        units: output.units !== undefined && output.units !== null ? output.units : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1Elevation = (output, context) => {
    return {
        unit: output.unit !== undefined && output.unit !== null ? output.unit : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1EndpointDetails = (output, context) => {
    return {
        endpoint: output.endpoint !== undefined && output.endpoint !== null
            ? deserializeAws_restJson1DataflowEndpoint(output.endpoint, context)
            : undefined,
        securityDetails: output.securityDetails !== undefined && output.securityDetails !== null
            ? deserializeAws_restJson1SecurityDetails(output.securityDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1EndpointDetailsList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1EndpointDetails(entry, context);
    });
};
const deserializeAws_restJson1Frequency = (output, context) => {
    return {
        units: output.units !== undefined && output.units !== null ? output.units : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1FrequencyBandwidth = (output, context) => {
    return {
        units: output.units !== undefined && output.units !== null ? output.units : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1GroundStationData = (output, context) => {
    return {
        groundStationId: output.groundStationId !== undefined && output.groundStationId !== null ? output.groundStationId : undefined,
        groundStationName: output.groundStationName !== undefined && output.groundStationName !== null
            ? output.groundStationName
            : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
const deserializeAws_restJson1GroundStationIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1GroundStationList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1GroundStationData(entry, context);
    });
};
const deserializeAws_restJson1MissionProfileList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1MissionProfileListItem(entry, context);
    });
};
const deserializeAws_restJson1MissionProfileListItem = (output, context) => {
    return {
        missionProfileArn: output.missionProfileArn !== undefined && output.missionProfileArn !== null
            ? output.missionProfileArn
            : undefined,
        missionProfileId: output.missionProfileId !== undefined && output.missionProfileId !== null ? output.missionProfileId : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        region: output.region !== undefined && output.region !== null ? output.region : undefined,
    };
};
const deserializeAws_restJson1S3RecordingConfig = (output, context) => {
    return {
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        prefix: output.prefix !== undefined && output.prefix !== null ? output.prefix : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1S3RecordingDetails = (output, context) => {
    return {
        bucketArn: output.bucketArn !== undefined && output.bucketArn !== null ? output.bucketArn : undefined,
        keyTemplate: output.keyTemplate !== undefined && output.keyTemplate !== null ? output.keyTemplate : undefined,
    };
};
const deserializeAws_restJson1SatelliteList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SatelliteListItem(entry, context);
    });
};
const deserializeAws_restJson1SatelliteListItem = (output, context) => {
    return {
        groundStations: output.groundStations !== undefined && output.groundStations !== null
            ? deserializeAws_restJson1GroundStationIdList(output.groundStations, context)
            : undefined,
        noradSatelliteID: output.noradSatelliteID !== undefined && output.noradSatelliteID !== null ? output.noradSatelliteID : undefined,
        satelliteArn: output.satelliteArn !== undefined && output.satelliteArn !== null ? output.satelliteArn : undefined,
        satelliteId: output.satelliteId !== undefined && output.satelliteId !== null ? output.satelliteId : undefined,
    };
};
const deserializeAws_restJson1SecurityDetails = (output, context) => {
    return {
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        securityGroupIds: output.securityGroupIds !== undefined && output.securityGroupIds !== null
            ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
            : undefined,
        subnetIds: output.subnetIds !== undefined && output.subnetIds !== null
            ? deserializeAws_restJson1SubnetList(output.subnetIds, context)
            : undefined,
    };
};
const deserializeAws_restJson1SecurityGroupIdList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1SocketAddress = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        port: output.port !== undefined && output.port !== null ? output.port : undefined,
    };
};
const deserializeAws_restJson1Source = (output, context) => {
    return {
        configDetails: output.configDetails !== undefined && output.configDetails !== null
            ? deserializeAws_restJson1ConfigDetails(output.configDetails, context)
            : undefined,
        configId: output.configId !== undefined && output.configId !== null ? output.configId : undefined,
        configType: output.configType !== undefined && output.configType !== null ? output.configType : undefined,
        dataflowSourceRegion: output.dataflowSourceRegion !== undefined && output.dataflowSourceRegion !== null
            ? output.dataflowSourceRegion
            : undefined,
    };
};
const deserializeAws_restJson1SpectrumConfig = (output, context) => {
    return {
        bandwidth: output.bandwidth !== undefined && output.bandwidth !== null
            ? deserializeAws_restJson1FrequencyBandwidth(output.bandwidth, context)
            : undefined,
        centerFrequency: output.centerFrequency !== undefined && output.centerFrequency !== null
            ? deserializeAws_restJson1Frequency(output.centerFrequency, context)
            : undefined,
        polarization: output.polarization !== undefined && output.polarization !== null ? output.polarization : undefined,
    };
};
const deserializeAws_restJson1SubnetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1TagsMap = (output, context) => {
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
const deserializeAws_restJson1TrackingConfig = (output, context) => {
    return {
        autotrack: output.autotrack !== undefined && output.autotrack !== null ? output.autotrack : undefined,
    };
};
const deserializeAws_restJson1UplinkEchoConfig = (output, context) => {
    return {
        antennaUplinkConfigArn: output.antennaUplinkConfigArn !== undefined && output.antennaUplinkConfigArn !== null
            ? output.antennaUplinkConfigArn
            : undefined,
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
    };
};
const deserializeAws_restJson1UplinkSpectrumConfig = (output, context) => {
    return {
        centerFrequency: output.centerFrequency !== undefined && output.centerFrequency !== null
            ? deserializeAws_restJson1Frequency(output.centerFrequency, context)
            : undefined,
        polarization: output.polarization !== undefined && output.polarization !== null ? output.polarization : undefined,
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