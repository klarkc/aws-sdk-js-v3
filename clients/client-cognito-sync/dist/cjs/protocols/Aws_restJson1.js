"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateRecordsCommand = exports.deserializeAws_restJson1UnsubscribeFromDatasetCommand = exports.deserializeAws_restJson1SubscribeToDatasetCommand = exports.deserializeAws_restJson1SetIdentityPoolConfigurationCommand = exports.deserializeAws_restJson1SetCognitoEventsCommand = exports.deserializeAws_restJson1RegisterDeviceCommand = exports.deserializeAws_restJson1ListRecordsCommand = exports.deserializeAws_restJson1ListIdentityPoolUsageCommand = exports.deserializeAws_restJson1ListDatasetsCommand = exports.deserializeAws_restJson1GetIdentityPoolConfigurationCommand = exports.deserializeAws_restJson1GetCognitoEventsCommand = exports.deserializeAws_restJson1GetBulkPublishDetailsCommand = exports.deserializeAws_restJson1DescribeIdentityUsageCommand = exports.deserializeAws_restJson1DescribeIdentityPoolUsageCommand = exports.deserializeAws_restJson1DescribeDatasetCommand = exports.deserializeAws_restJson1DeleteDatasetCommand = exports.deserializeAws_restJson1BulkPublishCommand = exports.serializeAws_restJson1UpdateRecordsCommand = exports.serializeAws_restJson1UnsubscribeFromDatasetCommand = exports.serializeAws_restJson1SubscribeToDatasetCommand = exports.serializeAws_restJson1SetIdentityPoolConfigurationCommand = exports.serializeAws_restJson1SetCognitoEventsCommand = exports.serializeAws_restJson1RegisterDeviceCommand = exports.serializeAws_restJson1ListRecordsCommand = exports.serializeAws_restJson1ListIdentityPoolUsageCommand = exports.serializeAws_restJson1ListDatasetsCommand = exports.serializeAws_restJson1GetIdentityPoolConfigurationCommand = exports.serializeAws_restJson1GetCognitoEventsCommand = exports.serializeAws_restJson1GetBulkPublishDetailsCommand = exports.serializeAws_restJson1DescribeIdentityUsageCommand = exports.serializeAws_restJson1DescribeIdentityPoolUsageCommand = exports.serializeAws_restJson1DescribeDatasetCommand = exports.serializeAws_restJson1DeleteDatasetCommand = exports.serializeAws_restJson1BulkPublishCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BulkPublishCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/bulkpublish";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
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
exports.serializeAws_restJson1BulkPublishCommand = serializeAws_restJson1BulkPublishCommand;
const serializeAws_restJson1DeleteDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
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
exports.serializeAws_restJson1DeleteDatasetCommand = serializeAws_restJson1DeleteDatasetCommand;
const serializeAws_restJson1DescribeDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
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
exports.serializeAws_restJson1DescribeDatasetCommand = serializeAws_restJson1DescribeDatasetCommand;
const serializeAws_restJson1DescribeIdentityPoolUsageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
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
exports.serializeAws_restJson1DescribeIdentityPoolUsageCommand = serializeAws_restJson1DescribeIdentityPoolUsageCommand;
const serializeAws_restJson1DescribeIdentityUsageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
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
exports.serializeAws_restJson1DescribeIdentityUsageCommand = serializeAws_restJson1DescribeIdentityUsageCommand;
const serializeAws_restJson1GetBulkPublishDetailsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/getBulkPublishDetails";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
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
exports.serializeAws_restJson1GetBulkPublishDetailsCommand = serializeAws_restJson1GetBulkPublishDetailsCommand;
const serializeAws_restJson1GetCognitoEventsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/events";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
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
exports.serializeAws_restJson1GetCognitoEventsCommand = serializeAws_restJson1GetCognitoEventsCommand;
const serializeAws_restJson1GetIdentityPoolConfigurationCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/configuration";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
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
exports.serializeAws_restJson1GetIdentityPoolConfigurationCommand = serializeAws_restJson1GetIdentityPoolConfigurationCommand;
const serializeAws_restJson1ListDatasetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListDatasetsCommand = serializeAws_restJson1ListDatasetsCommand;
const serializeAws_restJson1ListIdentityPoolUsageCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools";
    const query = {
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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
exports.serializeAws_restJson1ListIdentityPoolUsageCommand = serializeAws_restJson1ListIdentityPoolUsageCommand;
const serializeAws_restJson1ListRecordsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
    }
    const query = {
        ...(input.LastSyncCount !== undefined && { lastSyncCount: input.LastSyncCount.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.SyncSessionToken !== undefined && { syncSessionToken: input.SyncSessionToken }),
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
exports.serializeAws_restJson1ListRecordsCommand = serializeAws_restJson1ListRecordsCommand;
const serializeAws_restJson1RegisterDeviceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Platform !== undefined && input.Platform !== null && { Platform: input.Platform }),
        ...(input.Token !== undefined && input.Token !== null && { Token: input.Token }),
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
exports.serializeAws_restJson1RegisterDeviceCommand = serializeAws_restJson1RegisterDeviceCommand;
const serializeAws_restJson1SetCognitoEventsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/identitypools/{IdentityPoolId}/events";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Events !== undefined &&
            input.Events !== null && { Events: serializeAws_restJson1Events(input.Events, context) }),
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
exports.serializeAws_restJson1SetCognitoEventsCommand = serializeAws_restJson1SetCognitoEventsCommand;
const serializeAws_restJson1SetIdentityPoolConfigurationCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/identitypools/{IdentityPoolId}/configuration";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.CognitoStreams !== undefined &&
            input.CognitoStreams !== null && {
            CognitoStreams: serializeAws_restJson1CognitoStreams(input.CognitoStreams, context),
        }),
        ...(input.PushSync !== undefined &&
            input.PushSync !== null && { PushSync: serializeAws_restJson1PushSync(input.PushSync, context) }),
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
exports.serializeAws_restJson1SetIdentityPoolConfigurationCommand = serializeAws_restJson1SetIdentityPoolConfigurationCommand;
const serializeAws_restJson1SubscribeToDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1SubscribeToDatasetCommand = serializeAws_restJson1SubscribeToDatasetCommand;
const serializeAws_restJson1UnsubscribeFromDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
    }
    if (input.DeviceId !== undefined) {
        const labelValue = input.DeviceId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DeviceId.");
        }
        resolvedPath = resolvedPath.replace("{DeviceId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DeviceId.");
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
exports.serializeAws_restJson1UnsubscribeFromDatasetCommand = serializeAws_restJson1UnsubscribeFromDatasetCommand;
const serializeAws_restJson1UpdateRecordsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientContext) && { "x-amz-client-context": input.ClientContext }),
    };
    let resolvedPath = "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}";
    if (input.IdentityPoolId !== undefined) {
        const labelValue = input.IdentityPoolId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityPoolId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityPoolId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityPoolId.");
    }
    if (input.IdentityId !== undefined) {
        const labelValue = input.IdentityId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: IdentityId.");
        }
        resolvedPath = resolvedPath.replace("{IdentityId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: IdentityId.");
    }
    if (input.DatasetName !== undefined) {
        const labelValue = input.DatasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetName.");
        }
        resolvedPath = resolvedPath.replace("{DatasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DeviceId !== undefined && input.DeviceId !== null && { DeviceId: input.DeviceId }),
        ...(input.RecordPatches !== undefined &&
            input.RecordPatches !== null && {
            RecordPatches: serializeAws_restJson1RecordPatchList(input.RecordPatches, context),
        }),
        ...(input.SyncSessionToken !== undefined &&
            input.SyncSessionToken !== null && { SyncSessionToken: input.SyncSessionToken }),
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
exports.serializeAws_restJson1UpdateRecordsCommand = serializeAws_restJson1UpdateRecordsCommand;
const deserializeAws_restJson1BulkPublishCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BulkPublishCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IdentityPoolId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
        contents.IdentityPoolId = data.IdentityPoolId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BulkPublishCommand = deserializeAws_restJson1BulkPublishCommand;
const deserializeAws_restJson1BulkPublishCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AlreadyStreamedException":
        case "com.amazonaws.cognitosync#AlreadyStreamedException":
            response = {
                ...(await deserializeAws_restJson1AlreadyStreamedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "DuplicateRequestException":
        case "com.amazonaws.cognitosync#DuplicateRequestException":
            response = {
                ...(await deserializeAws_restJson1DuplicateRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
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
const deserializeAws_restJson1DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Dataset: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Dataset !== undefined && data.Dataset !== null) {
        contents.Dataset = deserializeAws_restJson1Dataset(data.Dataset, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDatasetCommand = deserializeAws_restJson1DeleteDatasetCommand;
const deserializeAws_restJson1DeleteDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitosync#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Dataset: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Dataset !== undefined && data.Dataset !== null) {
        contents.Dataset = deserializeAws_restJson1Dataset(data.Dataset, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDatasetCommand = deserializeAws_restJson1DescribeDatasetCommand;
const deserializeAws_restJson1DescribeDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeIdentityPoolUsageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIdentityPoolUsageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IdentityPoolUsage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IdentityPoolUsage !== undefined && data.IdentityPoolUsage !== null) {
        contents.IdentityPoolUsage = deserializeAws_restJson1IdentityPoolUsage(data.IdentityPoolUsage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIdentityPoolUsageCommand = deserializeAws_restJson1DescribeIdentityPoolUsageCommand;
const deserializeAws_restJson1DescribeIdentityPoolUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeIdentityUsageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeIdentityUsageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        IdentityUsage: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.IdentityUsage !== undefined && data.IdentityUsage !== null) {
        contents.IdentityUsage = deserializeAws_restJson1IdentityUsage(data.IdentityUsage, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeIdentityUsageCommand = deserializeAws_restJson1DescribeIdentityUsageCommand;
const deserializeAws_restJson1DescribeIdentityUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetBulkPublishDetailsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetBulkPublishDetailsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        BulkPublishCompleteTime: undefined,
        BulkPublishStartTime: undefined,
        BulkPublishStatus: undefined,
        FailureMessage: undefined,
        IdentityPoolId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.BulkPublishCompleteTime !== undefined && data.BulkPublishCompleteTime !== null) {
        contents.BulkPublishCompleteTime = new Date(Math.round(data.BulkPublishCompleteTime * 1000));
    }
    if (data.BulkPublishStartTime !== undefined && data.BulkPublishStartTime !== null) {
        contents.BulkPublishStartTime = new Date(Math.round(data.BulkPublishStartTime * 1000));
    }
    if (data.BulkPublishStatus !== undefined && data.BulkPublishStatus !== null) {
        contents.BulkPublishStatus = data.BulkPublishStatus;
    }
    if (data.FailureMessage !== undefined && data.FailureMessage !== null) {
        contents.FailureMessage = data.FailureMessage;
    }
    if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
        contents.IdentityPoolId = data.IdentityPoolId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetBulkPublishDetailsCommand = deserializeAws_restJson1GetBulkPublishDetailsCommand;
const deserializeAws_restJson1GetBulkPublishDetailsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
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
const deserializeAws_restJson1GetCognitoEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCognitoEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Events: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Events !== undefined && data.Events !== null) {
        contents.Events = deserializeAws_restJson1Events(data.Events, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCognitoEventsCommand = deserializeAws_restJson1GetCognitoEventsCommand;
const deserializeAws_restJson1GetCognitoEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetIdentityPoolConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetIdentityPoolConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CognitoStreams: undefined,
        IdentityPoolId: undefined,
        PushSync: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
        contents.CognitoStreams = deserializeAws_restJson1CognitoStreams(data.CognitoStreams, context);
    }
    if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
        contents.IdentityPoolId = data.IdentityPoolId;
    }
    if (data.PushSync !== undefined && data.PushSync !== null) {
        contents.PushSync = deserializeAws_restJson1PushSync(data.PushSync, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIdentityPoolConfigurationCommand = deserializeAws_restJson1GetIdentityPoolConfigurationCommand;
const deserializeAws_restJson1GetIdentityPoolConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDatasetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDatasetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        Datasets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Count !== undefined && data.Count !== null) {
        contents.Count = data.Count;
    }
    if (data.Datasets !== undefined && data.Datasets !== null) {
        contents.Datasets = deserializeAws_restJson1DatasetList(data.Datasets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDatasetsCommand = deserializeAws_restJson1ListDatasetsCommand;
const deserializeAws_restJson1ListDatasetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListIdentityPoolUsageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListIdentityPoolUsageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        IdentityPoolUsages: undefined,
        MaxResults: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Count !== undefined && data.Count !== null) {
        contents.Count = data.Count;
    }
    if (data.IdentityPoolUsages !== undefined && data.IdentityPoolUsages !== null) {
        contents.IdentityPoolUsages = deserializeAws_restJson1IdentityPoolUsageList(data.IdentityPoolUsages, context);
    }
    if (data.MaxResults !== undefined && data.MaxResults !== null) {
        contents.MaxResults = data.MaxResults;
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListIdentityPoolUsageCommand = deserializeAws_restJson1ListIdentityPoolUsageCommand;
const deserializeAws_restJson1ListIdentityPoolUsageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRecordsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRecordsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Count: undefined,
        DatasetDeletedAfterRequestedSyncCount: undefined,
        DatasetExists: undefined,
        DatasetSyncCount: undefined,
        LastModifiedBy: undefined,
        MergedDatasetNames: undefined,
        NextToken: undefined,
        Records: undefined,
        SyncSessionToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Count !== undefined && data.Count !== null) {
        contents.Count = data.Count;
    }
    if (data.DatasetDeletedAfterRequestedSyncCount !== undefined && data.DatasetDeletedAfterRequestedSyncCount !== null) {
        contents.DatasetDeletedAfterRequestedSyncCount = data.DatasetDeletedAfterRequestedSyncCount;
    }
    if (data.DatasetExists !== undefined && data.DatasetExists !== null) {
        contents.DatasetExists = data.DatasetExists;
    }
    if (data.DatasetSyncCount !== undefined && data.DatasetSyncCount !== null) {
        contents.DatasetSyncCount = data.DatasetSyncCount;
    }
    if (data.LastModifiedBy !== undefined && data.LastModifiedBy !== null) {
        contents.LastModifiedBy = data.LastModifiedBy;
    }
    if (data.MergedDatasetNames !== undefined && data.MergedDatasetNames !== null) {
        contents.MergedDatasetNames = deserializeAws_restJson1MergedDatasetNameList(data.MergedDatasetNames, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Records !== undefined && data.Records !== null) {
        contents.Records = deserializeAws_restJson1RecordList(data.Records, context);
    }
    if (data.SyncSessionToken !== undefined && data.SyncSessionToken !== null) {
        contents.SyncSessionToken = data.SyncSessionToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRecordsCommand = deserializeAws_restJson1ListRecordsCommand;
const deserializeAws_restJson1ListRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RegisterDeviceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RegisterDeviceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DeviceId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DeviceId !== undefined && data.DeviceId !== null) {
        contents.DeviceId = data.DeviceId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RegisterDeviceCommand = deserializeAws_restJson1RegisterDeviceCommand;
const deserializeAws_restJson1RegisterDeviceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationException":
        case "com.amazonaws.cognitosync#InvalidConfigurationException":
            response = {
                ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SetCognitoEventsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetCognitoEventsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetCognitoEventsCommand = deserializeAws_restJson1SetCognitoEventsCommand;
const deserializeAws_restJson1SetCognitoEventsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SetIdentityPoolConfigurationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SetIdentityPoolConfigurationCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CognitoStreams: undefined,
        IdentityPoolId: undefined,
        PushSync: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CognitoStreams !== undefined && data.CognitoStreams !== null) {
        contents.CognitoStreams = deserializeAws_restJson1CognitoStreams(data.CognitoStreams, context);
    }
    if (data.IdentityPoolId !== undefined && data.IdentityPoolId !== null) {
        contents.IdentityPoolId = data.IdentityPoolId;
    }
    if (data.PushSync !== undefined && data.PushSync !== null) {
        contents.PushSync = deserializeAws_restJson1PushSync(data.PushSync, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SetIdentityPoolConfigurationCommand = deserializeAws_restJson1SetIdentityPoolConfigurationCommand;
const deserializeAws_restJson1SetIdentityPoolConfigurationCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConcurrentModificationException":
        case "com.amazonaws.cognitosync#ConcurrentModificationException":
            response = {
                ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SubscribeToDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SubscribeToDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SubscribeToDatasetCommand = deserializeAws_restJson1SubscribeToDatasetCommand;
const deserializeAws_restJson1SubscribeToDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationException":
        case "com.amazonaws.cognitosync#InvalidConfigurationException":
            response = {
                ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UnsubscribeFromDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UnsubscribeFromDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UnsubscribeFromDatasetCommand = deserializeAws_restJson1UnsubscribeFromDatasetCommand;
const deserializeAws_restJson1UnsubscribeFromDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidConfigurationException":
        case "com.amazonaws.cognitosync#InvalidConfigurationException":
            response = {
                ...(await deserializeAws_restJson1InvalidConfigurationExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateRecordsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRecordsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Records: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Records !== undefined && data.Records !== null) {
        contents.Records = deserializeAws_restJson1RecordList(data.Records, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRecordsCommand = deserializeAws_restJson1UpdateRecordsCommand;
const deserializeAws_restJson1UpdateRecordsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalErrorException":
        case "com.amazonaws.cognitosync#InternalErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidLambdaFunctionOutputException":
        case "com.amazonaws.cognitosync#InvalidLambdaFunctionOutputException":
            response = {
                ...(await deserializeAws_restJson1InvalidLambdaFunctionOutputExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidParameterException":
        case "com.amazonaws.cognitosync#InvalidParameterException":
            response = {
                ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LambdaThrottledException":
        case "com.amazonaws.cognitosync#LambdaThrottledException":
            response = {
                ...(await deserializeAws_restJson1LambdaThrottledExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.cognitosync#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotAuthorizedException":
        case "com.amazonaws.cognitosync#NotAuthorizedException":
            response = {
                ...(await deserializeAws_restJson1NotAuthorizedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceConflictException":
        case "com.amazonaws.cognitosync#ResourceConflictException":
            response = {
                ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.cognitosync#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.cognitosync#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1AlreadyStreamedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "AlreadyStreamedException",
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
const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConcurrentModificationException",
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
const deserializeAws_restJson1DuplicateRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "DuplicateRequestException",
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
const deserializeAws_restJson1InternalErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalErrorException",
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
const deserializeAws_restJson1InvalidConfigurationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidConfigurationException",
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
const deserializeAws_restJson1InvalidLambdaFunctionOutputExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InvalidLambdaFunctionOutputException",
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
const deserializeAws_restJson1LambdaThrottledExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LambdaThrottledException",
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
const deserializeAws_restJson1LimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "LimitExceededException",
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
const deserializeAws_restJson1NotAuthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotAuthorizedException",
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
const deserializeAws_restJson1ResourceConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceConflictException",
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
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
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
const serializeAws_restJson1ApplicationArnList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1CognitoStreams = (input, context) => {
    return {
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
        ...(input.StreamName !== undefined && input.StreamName !== null && { StreamName: input.StreamName }),
        ...(input.StreamingStatus !== undefined &&
            input.StreamingStatus !== null && { StreamingStatus: input.StreamingStatus }),
    };
};
const serializeAws_restJson1Events = (input, context) => {
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
const serializeAws_restJson1PushSync = (input, context) => {
    return {
        ...(input.ApplicationArns !== undefined &&
            input.ApplicationArns !== null && {
            ApplicationArns: serializeAws_restJson1ApplicationArnList(input.ApplicationArns, context),
        }),
        ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    };
};
const serializeAws_restJson1RecordPatch = (input, context) => {
    return {
        ...(input.DeviceLastModifiedDate !== undefined &&
            input.DeviceLastModifiedDate !== null && {
            DeviceLastModifiedDate: Math.round(input.DeviceLastModifiedDate.getTime() / 1000),
        }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Op !== undefined && input.Op !== null && { Op: input.Op }),
        ...(input.SyncCount !== undefined && input.SyncCount !== null && { SyncCount: input.SyncCount }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
    };
};
const serializeAws_restJson1RecordPatchList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RecordPatch(entry, context);
    });
};
const deserializeAws_restJson1ApplicationArnList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1CognitoStreams = (output, context) => {
    return {
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
        StreamName: output.StreamName !== undefined && output.StreamName !== null ? output.StreamName : undefined,
        StreamingStatus: output.StreamingStatus !== undefined && output.StreamingStatus !== null ? output.StreamingStatus : undefined,
    };
};
const deserializeAws_restJson1Dataset = (output, context) => {
    return {
        CreationDate: output.CreationDate !== undefined && output.CreationDate !== null
            ? new Date(Math.round(output.CreationDate * 1000))
            : undefined,
        DataStorage: output.DataStorage !== undefined && output.DataStorage !== null ? output.DataStorage : undefined,
        DatasetName: output.DatasetName !== undefined && output.DatasetName !== null ? output.DatasetName : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        NumRecords: output.NumRecords !== undefined && output.NumRecords !== null ? output.NumRecords : undefined,
    };
};
const deserializeAws_restJson1DatasetList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Dataset(entry, context);
    });
};
const deserializeAws_restJson1Events = (output, context) => {
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
const deserializeAws_restJson1IdentityPoolUsage = (output, context) => {
    return {
        DataStorage: output.DataStorage !== undefined && output.DataStorage !== null ? output.DataStorage : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        SyncSessionsCount: output.SyncSessionsCount !== undefined && output.SyncSessionsCount !== null
            ? output.SyncSessionsCount
            : undefined,
    };
};
const deserializeAws_restJson1IdentityPoolUsageList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1IdentityPoolUsage(entry, context);
    });
};
const deserializeAws_restJson1IdentityUsage = (output, context) => {
    return {
        DataStorage: output.DataStorage !== undefined && output.DataStorage !== null ? output.DataStorage : undefined,
        DatasetCount: output.DatasetCount !== undefined && output.DatasetCount !== null ? output.DatasetCount : undefined,
        IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
        IdentityPoolId: output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
    };
};
const deserializeAws_restJson1MergedDatasetNameList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1PushSync = (output, context) => {
    return {
        ApplicationArns: output.ApplicationArns !== undefined && output.ApplicationArns !== null
            ? deserializeAws_restJson1ApplicationArnList(output.ApplicationArns, context)
            : undefined,
        RoleArn: output.RoleArn !== undefined && output.RoleArn !== null ? output.RoleArn : undefined,
    };
};
const deserializeAws_restJson1_Record = (output, context) => {
    return {
        DeviceLastModifiedDate: output.DeviceLastModifiedDate !== undefined && output.DeviceLastModifiedDate !== null
            ? new Date(Math.round(output.DeviceLastModifiedDate * 1000))
            : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        LastModifiedBy: output.LastModifiedBy !== undefined && output.LastModifiedBy !== null ? output.LastModifiedBy : undefined,
        LastModifiedDate: output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
            ? new Date(Math.round(output.LastModifiedDate * 1000))
            : undefined,
        SyncCount: output.SyncCount !== undefined && output.SyncCount !== null ? output.SyncCount : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
const deserializeAws_restJson1RecordList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1_Record(entry, context);
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