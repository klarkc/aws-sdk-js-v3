"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DescribeLoggingOptionsCommand = exports.deserializeAws_restJson1DescribeDatastoreCommand = exports.deserializeAws_restJson1DescribeDatasetCommand = exports.deserializeAws_restJson1DescribeChannelCommand = exports.deserializeAws_restJson1DeletePipelineCommand = exports.deserializeAws_restJson1DeleteDatastoreCommand = exports.deserializeAws_restJson1DeleteDatasetContentCommand = exports.deserializeAws_restJson1DeleteDatasetCommand = exports.deserializeAws_restJson1DeleteChannelCommand = exports.deserializeAws_restJson1CreatePipelineCommand = exports.deserializeAws_restJson1CreateDatastoreCommand = exports.deserializeAws_restJson1CreateDatasetContentCommand = exports.deserializeAws_restJson1CreateDatasetCommand = exports.deserializeAws_restJson1CreateChannelCommand = exports.deserializeAws_restJson1CancelPipelineReprocessingCommand = exports.deserializeAws_restJson1BatchPutMessageCommand = exports.serializeAws_restJson1UpdatePipelineCommand = exports.serializeAws_restJson1UpdateDatastoreCommand = exports.serializeAws_restJson1UpdateDatasetCommand = exports.serializeAws_restJson1UpdateChannelCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartPipelineReprocessingCommand = exports.serializeAws_restJson1SampleChannelDataCommand = exports.serializeAws_restJson1RunPipelineActivityCommand = exports.serializeAws_restJson1PutLoggingOptionsCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListPipelinesCommand = exports.serializeAws_restJson1ListDatastoresCommand = exports.serializeAws_restJson1ListDatasetsCommand = exports.serializeAws_restJson1ListDatasetContentsCommand = exports.serializeAws_restJson1ListChannelsCommand = exports.serializeAws_restJson1GetDatasetContentCommand = exports.serializeAws_restJson1DescribePipelineCommand = exports.serializeAws_restJson1DescribeLoggingOptionsCommand = exports.serializeAws_restJson1DescribeDatastoreCommand = exports.serializeAws_restJson1DescribeDatasetCommand = exports.serializeAws_restJson1DescribeChannelCommand = exports.serializeAws_restJson1DeletePipelineCommand = exports.serializeAws_restJson1DeleteDatastoreCommand = exports.serializeAws_restJson1DeleteDatasetContentCommand = exports.serializeAws_restJson1DeleteDatasetCommand = exports.serializeAws_restJson1DeleteChannelCommand = exports.serializeAws_restJson1CreatePipelineCommand = exports.serializeAws_restJson1CreateDatastoreCommand = exports.serializeAws_restJson1CreateDatasetContentCommand = exports.serializeAws_restJson1CreateDatasetCommand = exports.serializeAws_restJson1CreateChannelCommand = exports.serializeAws_restJson1CancelPipelineReprocessingCommand = exports.serializeAws_restJson1BatchPutMessageCommand = void 0;
exports.deserializeAws_restJson1UpdatePipelineCommand = exports.deserializeAws_restJson1UpdateDatastoreCommand = exports.deserializeAws_restJson1UpdateDatasetCommand = exports.deserializeAws_restJson1UpdateChannelCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartPipelineReprocessingCommand = exports.deserializeAws_restJson1SampleChannelDataCommand = exports.deserializeAws_restJson1RunPipelineActivityCommand = exports.deserializeAws_restJson1PutLoggingOptionsCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListPipelinesCommand = exports.deserializeAws_restJson1ListDatastoresCommand = exports.deserializeAws_restJson1ListDatasetsCommand = exports.deserializeAws_restJson1ListDatasetContentsCommand = exports.deserializeAws_restJson1ListChannelsCommand = exports.deserializeAws_restJson1GetDatasetContentCommand = exports.deserializeAws_restJson1DescribePipelineCommand = void 0;
const models_0_1 = require("../models/models_0");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1BatchPutMessageCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/messages/batch";
    let body;
    body = JSON.stringify({
        ...(input.channelName !== undefined && input.channelName !== null && { channelName: input.channelName }),
        ...(input.messages !== undefined &&
            input.messages !== null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
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
exports.serializeAws_restJson1BatchPutMessageCommand = serializeAws_restJson1BatchPutMessageCommand;
const serializeAws_restJson1CancelPipelineReprocessingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/pipelines/{pipelineName}/reprocessing/{reprocessingId}";
    if (input.pipelineName !== undefined) {
        const labelValue = input.pipelineName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: pipelineName.");
        }
        resolvedPath = resolvedPath.replace("{pipelineName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: pipelineName.");
    }
    if (input.reprocessingId !== undefined) {
        const labelValue = input.reprocessingId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: reprocessingId.");
        }
        resolvedPath = resolvedPath.replace("{reprocessingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: reprocessingId.");
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
exports.serializeAws_restJson1CancelPipelineReprocessingCommand = serializeAws_restJson1CancelPipelineReprocessingCommand;
const serializeAws_restJson1CreateChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channels";
    let body;
    body = JSON.stringify({
        ...(input.channelName !== undefined && input.channelName !== null && { channelName: input.channelName }),
        ...(input.channelStorage !== undefined &&
            input.channelStorage !== null && {
            channelStorage: serializeAws_restJson1ChannelStorage(input.channelStorage, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
const serializeAws_restJson1CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasets";
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1DatasetActions(input.actions, context) }),
        ...(input.contentDeliveryRules !== undefined &&
            input.contentDeliveryRules !== null && {
            contentDeliveryRules: serializeAws_restJson1DatasetContentDeliveryRules(input.contentDeliveryRules, context),
        }),
        ...(input.datasetName !== undefined && input.datasetName !== null && { datasetName: input.datasetName }),
        ...(input.lateDataRules !== undefined &&
            input.lateDataRules !== null && {
            lateDataRules: serializeAws_restJson1LateDataRules(input.lateDataRules, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
        ...(input.triggers !== undefined &&
            input.triggers !== null && { triggers: serializeAws_restJson1DatasetTriggers(input.triggers, context) }),
        ...(input.versioningConfiguration !== undefined &&
            input.versioningConfiguration !== null && {
            versioningConfiguration: serializeAws_restJson1VersioningConfiguration(input.versioningConfiguration, context),
        }),
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
exports.serializeAws_restJson1CreateDatasetCommand = serializeAws_restJson1CreateDatasetCommand;
const serializeAws_restJson1CreateDatasetContentCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasets/{datasetName}/content";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.versionId !== undefined && input.versionId !== null && { versionId: input.versionId }),
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
exports.serializeAws_restJson1CreateDatasetContentCommand = serializeAws_restJson1CreateDatasetContentCommand;
const serializeAws_restJson1CreateDatastoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datastores";
    let body;
    body = JSON.stringify({
        ...(input.datastoreName !== undefined && input.datastoreName !== null && { datastoreName: input.datastoreName }),
        ...(input.datastoreStorage !== undefined &&
            input.datastoreStorage !== null && {
            datastoreStorage: serializeAws_restJson1DatastoreStorage(input.datastoreStorage, context),
        }),
        ...(input.fileFormatConfiguration !== undefined &&
            input.fileFormatConfiguration !== null && {
            fileFormatConfiguration: serializeAws_restJson1FileFormatConfiguration(input.fileFormatConfiguration, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
        }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
exports.serializeAws_restJson1CreateDatastoreCommand = serializeAws_restJson1CreateDatastoreCommand;
const serializeAws_restJson1CreatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/pipelines";
    let body;
    body = JSON.stringify({
        ...(input.pipelineActivities !== undefined &&
            input.pipelineActivities !== null && {
            pipelineActivities: serializeAws_restJson1PipelineActivities(input.pipelineActivities, context),
        }),
        ...(input.pipelineName !== undefined && input.pipelineName !== null && { pipelineName: input.pipelineName }),
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
exports.serializeAws_restJson1CreatePipelineCommand = serializeAws_restJson1CreatePipelineCommand;
const serializeAws_restJson1DeleteChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels/{channelName}";
    if (input.channelName !== undefined) {
        const labelValue = input.channelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: channelName.");
        }
        resolvedPath = resolvedPath.replace("{channelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: channelName.");
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
const serializeAws_restJson1DeleteDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{datasetName}";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
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
const serializeAws_restJson1DeleteDatasetContentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{datasetName}/content";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
    }
    const query = {
        ...(input.versionId !== undefined && { versionId: input.versionId }),
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
exports.serializeAws_restJson1DeleteDatasetContentCommand = serializeAws_restJson1DeleteDatasetContentCommand;
const serializeAws_restJson1DeleteDatastoreCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datastores/{datastoreName}";
    if (input.datastoreName !== undefined) {
        const labelValue = input.datastoreName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datastoreName.");
        }
        resolvedPath = resolvedPath.replace("{datastoreName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datastoreName.");
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
exports.serializeAws_restJson1DeleteDatastoreCommand = serializeAws_restJson1DeleteDatastoreCommand;
const serializeAws_restJson1DeletePipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/pipelines/{pipelineName}";
    if (input.pipelineName !== undefined) {
        const labelValue = input.pipelineName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: pipelineName.");
        }
        resolvedPath = resolvedPath.replace("{pipelineName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: pipelineName.");
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
exports.serializeAws_restJson1DeletePipelineCommand = serializeAws_restJson1DeletePipelineCommand;
const serializeAws_restJson1DescribeChannelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels/{channelName}";
    if (input.channelName !== undefined) {
        const labelValue = input.channelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: channelName.");
        }
        resolvedPath = resolvedPath.replace("{channelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: channelName.");
    }
    const query = {
        ...(input.includeStatistics !== undefined && { includeStatistics: input.includeStatistics.toString() }),
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
exports.serializeAws_restJson1DescribeChannelCommand = serializeAws_restJson1DescribeChannelCommand;
const serializeAws_restJson1DescribeDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{datasetName}";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
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
const serializeAws_restJson1DescribeDatastoreCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datastores/{datastoreName}";
    if (input.datastoreName !== undefined) {
        const labelValue = input.datastoreName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datastoreName.");
        }
        resolvedPath = resolvedPath.replace("{datastoreName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datastoreName.");
    }
    const query = {
        ...(input.includeStatistics !== undefined && { includeStatistics: input.includeStatistics.toString() }),
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
exports.serializeAws_restJson1DescribeDatastoreCommand = serializeAws_restJson1DescribeDatastoreCommand;
const serializeAws_restJson1DescribeLoggingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/logging";
    let body;
    body = "";
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
exports.serializeAws_restJson1DescribeLoggingOptionsCommand = serializeAws_restJson1DescribeLoggingOptionsCommand;
const serializeAws_restJson1DescribePipelineCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/pipelines/{pipelineName}";
    if (input.pipelineName !== undefined) {
        const labelValue = input.pipelineName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: pipelineName.");
        }
        resolvedPath = resolvedPath.replace("{pipelineName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: pipelineName.");
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
exports.serializeAws_restJson1DescribePipelineCommand = serializeAws_restJson1DescribePipelineCommand;
const serializeAws_restJson1GetDatasetContentCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{datasetName}/content";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
    }
    const query = {
        ...(input.versionId !== undefined && { versionId: input.versionId }),
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
exports.serializeAws_restJson1GetDatasetContentCommand = serializeAws_restJson1GetDatasetContentCommand;
const serializeAws_restJson1ListChannelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
const serializeAws_restJson1ListDatasetContentsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets/{datasetName}/contents";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
    }
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
        ...(input.scheduledOnOrAfter !== undefined && {
            scheduledOnOrAfter: (input.scheduledOnOrAfter.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.scheduledBefore !== undefined && {
            scheduledBefore: (input.scheduledBefore.toISOString().split(".")[0] + "Z").toString(),
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
exports.serializeAws_restJson1ListDatasetContentsCommand = serializeAws_restJson1ListDatasetContentsCommand;
const serializeAws_restJson1ListDatasetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datasets";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
const serializeAws_restJson1ListDatastoresCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/datastores";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListDatastoresCommand = serializeAws_restJson1ListDatastoresCommand;
const serializeAws_restJson1ListPipelinesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/pipelines";
    const query = {
        ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
        ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
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
exports.serializeAws_restJson1ListPipelinesCommand = serializeAws_restJson1ListPipelinesCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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
exports.serializeAws_restJson1ListTagsForResourceCommand = serializeAws_restJson1ListTagsForResourceCommand;
const serializeAws_restJson1PutLoggingOptionsCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/logging";
    let body;
    body = JSON.stringify({
        ...(input.loggingOptions !== undefined &&
            input.loggingOptions !== null && {
            loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
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
exports.serializeAws_restJson1PutLoggingOptionsCommand = serializeAws_restJson1PutLoggingOptionsCommand;
const serializeAws_restJson1RunPipelineActivityCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/pipelineactivities/run";
    let body;
    body = JSON.stringify({
        ...(input.payloads !== undefined &&
            input.payloads !== null && { payloads: serializeAws_restJson1MessagePayloads(input.payloads, context) }),
        ...(input.pipelineActivity !== undefined &&
            input.pipelineActivity !== null && {
            pipelineActivity: serializeAws_restJson1PipelineActivity(input.pipelineActivity, context),
        }),
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
exports.serializeAws_restJson1RunPipelineActivityCommand = serializeAws_restJson1RunPipelineActivityCommand;
const serializeAws_restJson1SampleChannelDataCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/channels/{channelName}/sample";
    if (input.channelName !== undefined) {
        const labelValue = input.channelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: channelName.");
        }
        resolvedPath = resolvedPath.replace("{channelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: channelName.");
    }
    const query = {
        ...(input.maxMessages !== undefined && { maxMessages: input.maxMessages.toString() }),
        ...(input.startTime !== undefined && { startTime: (input.startTime.toISOString().split(".")[0] + "Z").toString() }),
        ...(input.endTime !== undefined && { endTime: (input.endTime.toISOString().split(".")[0] + "Z").toString() }),
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
exports.serializeAws_restJson1SampleChannelDataCommand = serializeAws_restJson1SampleChannelDataCommand;
const serializeAws_restJson1StartPipelineReprocessingCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/pipelines/{pipelineName}/reprocessing";
    if (input.pipelineName !== undefined) {
        const labelValue = input.pipelineName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: pipelineName.");
        }
        resolvedPath = resolvedPath.replace("{pipelineName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: pipelineName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.channelMessages !== undefined &&
            input.channelMessages !== null && {
            channelMessages: serializeAws_restJson1ChannelMessages(input.channelMessages, context),
        }),
        ...(input.endTime !== undefined &&
            input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
        ...(input.startTime !== undefined &&
            input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
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
exports.serializeAws_restJson1StartPipelineReprocessingCommand = serializeAws_restJson1StartPipelineReprocessingCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    };
    let body;
    body = JSON.stringify({
        ...(input.tags !== undefined &&
            input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "POST",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1TagResourceCommand = serializeAws_restJson1TagResourceCommand;
const serializeAws_restJson1UntagResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/tags";
    const query = {
        ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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
const serializeAws_restJson1UpdateChannelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/channels/{channelName}";
    if (input.channelName !== undefined) {
        const labelValue = input.channelName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: channelName.");
        }
        resolvedPath = resolvedPath.replace("{channelName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: channelName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.channelStorage !== undefined &&
            input.channelStorage !== null && {
            channelStorage: serializeAws_restJson1ChannelStorage(input.channelStorage, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
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
exports.serializeAws_restJson1UpdateChannelCommand = serializeAws_restJson1UpdateChannelCommand;
const serializeAws_restJson1UpdateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datasets/{datasetName}";
    if (input.datasetName !== undefined) {
        const labelValue = input.datasetName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datasetName.");
        }
        resolvedPath = resolvedPath.replace("{datasetName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datasetName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.actions !== undefined &&
            input.actions !== null && { actions: serializeAws_restJson1DatasetActions(input.actions, context) }),
        ...(input.contentDeliveryRules !== undefined &&
            input.contentDeliveryRules !== null && {
            contentDeliveryRules: serializeAws_restJson1DatasetContentDeliveryRules(input.contentDeliveryRules, context),
        }),
        ...(input.lateDataRules !== undefined &&
            input.lateDataRules !== null && {
            lateDataRules: serializeAws_restJson1LateDataRules(input.lateDataRules, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
        }),
        ...(input.triggers !== undefined &&
            input.triggers !== null && { triggers: serializeAws_restJson1DatasetTriggers(input.triggers, context) }),
        ...(input.versioningConfiguration !== undefined &&
            input.versioningConfiguration !== null && {
            versioningConfiguration: serializeAws_restJson1VersioningConfiguration(input.versioningConfiguration, context),
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
exports.serializeAws_restJson1UpdateDatasetCommand = serializeAws_restJson1UpdateDatasetCommand;
const serializeAws_restJson1UpdateDatastoreCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/datastores/{datastoreName}";
    if (input.datastoreName !== undefined) {
        const labelValue = input.datastoreName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: datastoreName.");
        }
        resolvedPath = resolvedPath.replace("{datastoreName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: datastoreName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.datastoreStorage !== undefined &&
            input.datastoreStorage !== null && {
            datastoreStorage: serializeAws_restJson1DatastoreStorage(input.datastoreStorage, context),
        }),
        ...(input.fileFormatConfiguration !== undefined &&
            input.fileFormatConfiguration !== null && {
            fileFormatConfiguration: serializeAws_restJson1FileFormatConfiguration(input.fileFormatConfiguration, context),
        }),
        ...(input.retentionPeriod !== undefined &&
            input.retentionPeriod !== null && {
            retentionPeriod: serializeAws_restJson1RetentionPeriod(input.retentionPeriod, context),
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
exports.serializeAws_restJson1UpdateDatastoreCommand = serializeAws_restJson1UpdateDatastoreCommand;
const serializeAws_restJson1UpdatePipelineCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/pipelines/{pipelineName}";
    if (input.pipelineName !== undefined) {
        const labelValue = input.pipelineName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: pipelineName.");
        }
        resolvedPath = resolvedPath.replace("{pipelineName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: pipelineName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.pipelineActivities !== undefined &&
            input.pipelineActivities !== null && {
            pipelineActivities: serializeAws_restJson1PipelineActivities(input.pipelineActivities, context),
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
exports.serializeAws_restJson1UpdatePipelineCommand = serializeAws_restJson1UpdatePipelineCommand;
const deserializeAws_restJson1BatchPutMessageCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1BatchPutMessageCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        batchPutMessageErrorEntries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.batchPutMessageErrorEntries !== undefined && data.batchPutMessageErrorEntries !== null) {
        contents.batchPutMessageErrorEntries = deserializeAws_restJson1BatchPutMessageErrorEntries(data.batchPutMessageErrorEntries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1BatchPutMessageCommand = deserializeAws_restJson1BatchPutMessageCommand;
const deserializeAws_restJson1BatchPutMessageCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CancelPipelineReprocessingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelPipelineReprocessingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelPipelineReprocessingCommand = deserializeAws_restJson1CancelPipelineReprocessingCommand;
const deserializeAws_restJson1CancelPipelineReprocessingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateChannelCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        channelArn: undefined,
        channelName: undefined,
        retentionPeriod: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channelArn !== undefined && data.channelArn !== null) {
        contents.channelArn = data.channelArn;
    }
    if (data.channelName !== undefined && data.channelName !== null) {
        contents.channelName = data.channelName;
    }
    if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
        contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDatasetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        datasetArn: undefined,
        datasetName: undefined,
        retentionPeriod: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datasetArn !== undefined && data.datasetArn !== null) {
        contents.datasetArn = data.datasetArn;
    }
    if (data.datasetName !== undefined && data.datasetName !== null) {
        contents.datasetName = data.datasetName;
    }
    if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
        contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDatasetCommand = deserializeAws_restJson1CreateDatasetCommand;
const deserializeAws_restJson1CreateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDatasetContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDatasetContentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        versionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.versionId !== undefined && data.versionId !== null) {
        contents.versionId = data.versionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDatasetContentCommand = deserializeAws_restJson1CreateDatasetContentCommand;
const deserializeAws_restJson1CreateDatasetContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateDatastoreCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDatastoreCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        datastoreArn: undefined,
        datastoreName: undefined,
        retentionPeriod: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datastoreArn !== undefined && data.datastoreArn !== null) {
        contents.datastoreArn = data.datastoreArn;
    }
    if (data.datastoreName !== undefined && data.datastoreName !== null) {
        contents.datastoreName = data.datastoreName;
    }
    if (data.retentionPeriod !== undefined && data.retentionPeriod !== null) {
        contents.retentionPeriod = deserializeAws_restJson1RetentionPeriod(data.retentionPeriod, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDatastoreCommand = deserializeAws_restJson1CreateDatastoreCommand;
const deserializeAws_restJson1CreateDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreatePipelineCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreatePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        pipelineArn: undefined,
        pipelineName: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.pipelineArn !== undefined && data.pipelineArn !== null) {
        contents.pipelineArn = data.pipelineArn;
    }
    if (data.pipelineName !== undefined && data.pipelineName !== null) {
        contents.pipelineName = data.pipelineName;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreatePipelineCommand = deserializeAws_restJson1CreatePipelineCommand;
const deserializeAws_restJson1CreatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteChannelCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDatasetContentCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDatasetContentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDatasetContentCommand = deserializeAws_restJson1DeleteDatasetContentCommand;
const deserializeAws_restJson1DeleteDatasetContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteDatastoreCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDatastoreCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDatastoreCommand = deserializeAws_restJson1DeleteDatastoreCommand;
const deserializeAws_restJson1DeleteDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeletePipelineCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeletePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeletePipelineCommand = deserializeAws_restJson1DeletePipelineCommand;
const deserializeAws_restJson1DeletePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeChannelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeChannelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        channel: undefined,
        statistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channel !== undefined && data.channel !== null) {
        contents.channel = deserializeAws_restJson1Channel(data.channel, context);
    }
    if (data.statistics !== undefined && data.statistics !== null) {
        contents.statistics = deserializeAws_restJson1ChannelStatistics(data.statistics, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        dataset: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.dataset !== undefined && data.dataset !== null) {
        contents.dataset = deserializeAws_restJson1Dataset(data.dataset, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDatastoreCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDatastoreCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        datastore: undefined,
        statistics: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datastore !== undefined && data.datastore !== null) {
        contents.datastore = deserializeAws_restJson1Datastore(data.datastore, context);
    }
    if (data.statistics !== undefined && data.statistics !== null) {
        contents.statistics = deserializeAws_restJson1DatastoreStatistics(data.statistics, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDatastoreCommand = deserializeAws_restJson1DescribeDatastoreCommand;
const deserializeAws_restJson1DescribeDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        loggingOptions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
        contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeLoggingOptionsCommand = deserializeAws_restJson1DescribeLoggingOptionsCommand;
const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        pipeline: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.pipeline !== undefined && data.pipeline !== null) {
        contents.pipeline = deserializeAws_restJson1Pipeline(data.pipeline, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribePipelineCommand = deserializeAws_restJson1DescribePipelineCommand;
const deserializeAws_restJson1DescribePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDatasetContentCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDatasetContentCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        entries: undefined,
        status: undefined,
        timestamp: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.entries !== undefined && data.entries !== null) {
        contents.entries = deserializeAws_restJson1DatasetEntries(data.entries, context);
    }
    if (data.status !== undefined && data.status !== null) {
        contents.status = deserializeAws_restJson1DatasetContentStatus(data.status, context);
    }
    if (data.timestamp !== undefined && data.timestamp !== null) {
        contents.timestamp = new Date(Math.round(data.timestamp * 1000));
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDatasetContentCommand = deserializeAws_restJson1GetDatasetContentCommand;
const deserializeAws_restJson1GetDatasetContentCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListChannelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListChannelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        channelSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.channelSummaries !== undefined && data.channelSummaries !== null) {
        contents.channelSummaries = deserializeAws_restJson1ChannelSummaries(data.channelSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDatasetContentsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDatasetContentsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        datasetContentSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datasetContentSummaries !== undefined && data.datasetContentSummaries !== null) {
        contents.datasetContentSummaries = deserializeAws_restJson1DatasetContentSummaries(data.datasetContentSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDatasetContentsCommand = deserializeAws_restJson1ListDatasetContentsCommand;
const deserializeAws_restJson1ListDatasetContentsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        datasetSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datasetSummaries !== undefined && data.datasetSummaries !== null) {
        contents.datasetSummaries = deserializeAws_restJson1DatasetSummaries(data.datasetSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDatastoresCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDatastoresCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        datastoreSummaries: undefined,
        nextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.datastoreSummaries !== undefined && data.datastoreSummaries !== null) {
        contents.datastoreSummaries = deserializeAws_restJson1DatastoreSummaries(data.datastoreSummaries, context);
    }
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDatastoresCommand = deserializeAws_restJson1ListDatastoresCommand;
const deserializeAws_restJson1ListDatastoresCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListPipelinesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListPipelinesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        nextToken: undefined,
        pipelineSummaries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.nextToken !== undefined && data.nextToken !== null) {
        contents.nextToken = data.nextToken;
    }
    if (data.pipelineSummaries !== undefined && data.pipelineSummaries !== null) {
        contents.pipelineSummaries = deserializeAws_restJson1PipelineSummaries(data.pipelineSummaries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListPipelinesCommand = deserializeAws_restJson1ListPipelinesCommand;
const deserializeAws_restJson1ListPipelinesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutLoggingOptionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutLoggingOptionsCommand = deserializeAws_restJson1PutLoggingOptionsCommand;
const deserializeAws_restJson1PutLoggingOptionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1RunPipelineActivityCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1RunPipelineActivityCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        logResult: undefined,
        payloads: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.logResult !== undefined && data.logResult !== null) {
        contents.logResult = data.logResult;
    }
    if (data.payloads !== undefined && data.payloads !== null) {
        contents.payloads = deserializeAws_restJson1MessagePayloads(data.payloads, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1RunPipelineActivityCommand = deserializeAws_restJson1RunPipelineActivityCommand;
const deserializeAws_restJson1RunPipelineActivityCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SampleChannelDataCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SampleChannelDataCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        payloads: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.payloads !== undefined && data.payloads !== null) {
        contents.payloads = deserializeAws_restJson1MessagePayloads(data.payloads, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SampleChannelDataCommand = deserializeAws_restJson1SampleChannelDataCommand;
const deserializeAws_restJson1SampleChannelDataCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartPipelineReprocessingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartPipelineReprocessingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        reprocessingId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.reprocessingId !== undefined && data.reprocessingId !== null) {
        contents.reprocessingId = data.reprocessingId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartPipelineReprocessingCommand = deserializeAws_restJson1StartPipelineReprocessingCommand;
const deserializeAws_restJson1StartPipelineReprocessingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceAlreadyExistsException":
        case "com.amazonaws.iotanalytics#ResourceAlreadyExistsException":
            response = {
                ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
    };
    await collectBody(output.body, context);
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
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDatasetCommand = deserializeAws_restJson1UpdateDatasetCommand;
const deserializeAws_restJson1UpdateDatasetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDatastoreCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDatastoreCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDatastoreCommand = deserializeAws_restJson1UpdateDatastoreCommand;
const deserializeAws_restJson1UpdateDatastoreCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdatePipelineCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdatePipelineCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdatePipelineCommand = deserializeAws_restJson1UpdatePipelineCommand;
const deserializeAws_restJson1UpdatePipelineCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalFailureException":
        case "com.amazonaws.iotanalytics#InternalFailureException":
            response = {
                ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InvalidRequestException":
        case "com.amazonaws.iotanalytics#InvalidRequestException":
            response = {
                ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "LimitExceededException":
        case "com.amazonaws.iotanalytics#LimitExceededException":
            response = {
                ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.iotanalytics#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.iotanalytics#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.iotanalytics#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalFailureException",
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
const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceAlreadyExistsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        message: undefined,
        resourceArn: undefined,
        resourceId: undefined,
    };
    const data = parsedOutput.body;
    if (data.message !== undefined && data.message !== null) {
        contents.message = data.message;
    }
    if (data.resourceArn !== undefined && data.resourceArn !== null) {
        contents.resourceArn = data.resourceArn;
    }
    if (data.resourceId !== undefined && data.resourceId !== null) {
        contents.resourceId = data.resourceId;
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
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const serializeAws_restJson1AddAttributesActivity = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && {
            attributes: serializeAws_restJson1AttributeNameMapping(input.attributes, context),
        }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1AttributeNameMapping = (input, context) => {
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
const serializeAws_restJson1AttributeNames = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1ChannelActivity = (input, context) => {
    return {
        ...(input.channelName !== undefined && input.channelName !== null && { channelName: input.channelName }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1ChannelMessages = (input, context) => {
    return {
        ...(input.s3Paths !== undefined &&
            input.s3Paths !== null && { s3Paths: serializeAws_restJson1S3PathChannelMessages(input.s3Paths, context) }),
    };
};
const serializeAws_restJson1ChannelStorage = (input, context) => {
    return {
        ...(input.customerManagedS3 !== undefined &&
            input.customerManagedS3 !== null && {
            customerManagedS3: serializeAws_restJson1CustomerManagedChannelS3Storage(input.customerManagedS3, context),
        }),
        ...(input.serviceManagedS3 !== undefined &&
            input.serviceManagedS3 !== null && {
            serviceManagedS3: serializeAws_restJson1ServiceManagedChannelS3Storage(input.serviceManagedS3, context),
        }),
    };
};
const serializeAws_restJson1Column = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.type !== undefined && input.type !== null && { type: input.type }),
    };
};
const serializeAws_restJson1Columns = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Column(entry, context);
    });
};
const serializeAws_restJson1ContainerDatasetAction = (input, context) => {
    return {
        ...(input.executionRoleArn !== undefined &&
            input.executionRoleArn !== null && { executionRoleArn: input.executionRoleArn }),
        ...(input.image !== undefined && input.image !== null && { image: input.image }),
        ...(input.resourceConfiguration !== undefined &&
            input.resourceConfiguration !== null && {
            resourceConfiguration: serializeAws_restJson1ResourceConfiguration(input.resourceConfiguration, context),
        }),
        ...(input.variables !== undefined &&
            input.variables !== null && { variables: serializeAws_restJson1Variables(input.variables, context) }),
    };
};
const serializeAws_restJson1CustomerManagedChannelS3Storage = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1CustomerManagedDatastoreS3Storage = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.keyPrefix !== undefined && input.keyPrefix !== null && { keyPrefix: input.keyPrefix }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1DatasetAction = (input, context) => {
    return {
        ...(input.actionName !== undefined && input.actionName !== null && { actionName: input.actionName }),
        ...(input.containerAction !== undefined &&
            input.containerAction !== null && {
            containerAction: serializeAws_restJson1ContainerDatasetAction(input.containerAction, context),
        }),
        ...(input.queryAction !== undefined &&
            input.queryAction !== null && {
            queryAction: serializeAws_restJson1SqlQueryDatasetAction(input.queryAction, context),
        }),
    };
};
const serializeAws_restJson1DatasetActions = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DatasetAction(entry, context);
    });
};
const serializeAws_restJson1DatasetContentDeliveryDestination = (input, context) => {
    return {
        ...(input.iotEventsDestinationConfiguration !== undefined &&
            input.iotEventsDestinationConfiguration !== null && {
            iotEventsDestinationConfiguration: serializeAws_restJson1IotEventsDestinationConfiguration(input.iotEventsDestinationConfiguration, context),
        }),
        ...(input.s3DestinationConfiguration !== undefined &&
            input.s3DestinationConfiguration !== null && {
            s3DestinationConfiguration: serializeAws_restJson1S3DestinationConfiguration(input.s3DestinationConfiguration, context),
        }),
    };
};
const serializeAws_restJson1DatasetContentDeliveryRule = (input, context) => {
    return {
        ...(input.destination !== undefined &&
            input.destination !== null && {
            destination: serializeAws_restJson1DatasetContentDeliveryDestination(input.destination, context),
        }),
        ...(input.entryName !== undefined && input.entryName !== null && { entryName: input.entryName }),
    };
};
const serializeAws_restJson1DatasetContentDeliveryRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DatasetContentDeliveryRule(entry, context);
    });
};
const serializeAws_restJson1DatasetContentVersionValue = (input, context) => {
    return {
        ...(input.datasetName !== undefined && input.datasetName !== null && { datasetName: input.datasetName }),
    };
};
const serializeAws_restJson1DatasetTrigger = (input, context) => {
    return {
        ...(input.dataset !== undefined &&
            input.dataset !== null && { dataset: serializeAws_restJson1TriggeringDataset(input.dataset, context) }),
        ...(input.schedule !== undefined &&
            input.schedule !== null && { schedule: serializeAws_restJson1Schedule(input.schedule, context) }),
    };
};
const serializeAws_restJson1DatasetTriggers = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1DatasetTrigger(entry, context);
    });
};
const serializeAws_restJson1DatastoreActivity = (input, context) => {
    return {
        ...(input.datastoreName !== undefined && input.datastoreName !== null && { datastoreName: input.datastoreName }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1DatastoreStorage = (input, context) => {
    return models_0_1.DatastoreStorage.visit(input, {
        customerManagedS3: (value) => ({
            customerManagedS3: serializeAws_restJson1CustomerManagedDatastoreS3Storage(value, context),
        }),
        serviceManagedS3: (value) => ({
            serviceManagedS3: serializeAws_restJson1ServiceManagedDatastoreS3Storage(value, context),
        }),
        _: (name, value) => ({ name: value }),
    });
};
const serializeAws_restJson1DeltaTime = (input, context) => {
    return {
        ...(input.offsetSeconds !== undefined && input.offsetSeconds !== null && { offsetSeconds: input.offsetSeconds }),
        ...(input.timeExpression !== undefined &&
            input.timeExpression !== null && { timeExpression: input.timeExpression }),
    };
};
const serializeAws_restJson1DeltaTimeSessionWindowConfiguration = (input, context) => {
    return {
        ...(input.timeoutInMinutes !== undefined &&
            input.timeoutInMinutes !== null && { timeoutInMinutes: input.timeoutInMinutes }),
    };
};
const serializeAws_restJson1DeviceRegistryEnrichActivity = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
    };
};
const serializeAws_restJson1DeviceShadowEnrichActivity = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
        ...(input.thingName !== undefined && input.thingName !== null && { thingName: input.thingName }),
    };
};
const serializeAws_restJson1FileFormatConfiguration = (input, context) => {
    return {
        ...(input.jsonConfiguration !== undefined &&
            input.jsonConfiguration !== null && {
            jsonConfiguration: serializeAws_restJson1JsonConfiguration(input.jsonConfiguration, context),
        }),
        ...(input.parquetConfiguration !== undefined &&
            input.parquetConfiguration !== null && {
            parquetConfiguration: serializeAws_restJson1ParquetConfiguration(input.parquetConfiguration, context),
        }),
    };
};
const serializeAws_restJson1FilterActivity = (input, context) => {
    return {
        ...(input.filter !== undefined && input.filter !== null && { filter: input.filter }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1GlueConfiguration = (input, context) => {
    return {
        ...(input.databaseName !== undefined && input.databaseName !== null && { databaseName: input.databaseName }),
        ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
    };
};
const serializeAws_restJson1IotEventsDestinationConfiguration = (input, context) => {
    return {
        ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1JsonConfiguration = (input, context) => {
    return {};
};
const serializeAws_restJson1LambdaActivity = (input, context) => {
    return {
        ...(input.batchSize !== undefined && input.batchSize !== null && { batchSize: input.batchSize }),
        ...(input.lambdaName !== undefined && input.lambdaName !== null && { lambdaName: input.lambdaName }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1LateDataRule = (input, context) => {
    return {
        ...(input.ruleConfiguration !== undefined &&
            input.ruleConfiguration !== null && {
            ruleConfiguration: serializeAws_restJson1LateDataRuleConfiguration(input.ruleConfiguration, context),
        }),
        ...(input.ruleName !== undefined && input.ruleName !== null && { ruleName: input.ruleName }),
    };
};
const serializeAws_restJson1LateDataRuleConfiguration = (input, context) => {
    return {
        ...(input.deltaTimeSessionWindowConfiguration !== undefined &&
            input.deltaTimeSessionWindowConfiguration !== null && {
            deltaTimeSessionWindowConfiguration: serializeAws_restJson1DeltaTimeSessionWindowConfiguration(input.deltaTimeSessionWindowConfiguration, context),
        }),
    };
};
const serializeAws_restJson1LateDataRules = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1LateDataRule(entry, context);
    });
};
const serializeAws_restJson1LoggingOptions = (input, context) => {
    return {
        ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
        ...(input.level !== undefined && input.level !== null && { level: input.level }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1MathActivity = (input, context) => {
    return {
        ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
        ...(input.math !== undefined && input.math !== null && { math: input.math }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1Message = (input, context) => {
    return {
        ...(input.messageId !== undefined && input.messageId !== null && { messageId: input.messageId }),
        ...(input.payload !== undefined && input.payload !== null && { payload: context.base64Encoder(input.payload) }),
    };
};
const serializeAws_restJson1MessagePayloads = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return context.base64Encoder(entry);
    });
};
const serializeAws_restJson1Messages = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Message(entry, context);
    });
};
const serializeAws_restJson1OutputFileUriValue = (input, context) => {
    return {
        ...(input.fileName !== undefined && input.fileName !== null && { fileName: input.fileName }),
    };
};
const serializeAws_restJson1ParquetConfiguration = (input, context) => {
    return {
        ...(input.schemaDefinition !== undefined &&
            input.schemaDefinition !== null && {
            schemaDefinition: serializeAws_restJson1SchemaDefinition(input.schemaDefinition, context),
        }),
    };
};
const serializeAws_restJson1PipelineActivities = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1PipelineActivity(entry, context);
    });
};
const serializeAws_restJson1PipelineActivity = (input, context) => {
    return {
        ...(input.addAttributes !== undefined &&
            input.addAttributes !== null && {
            addAttributes: serializeAws_restJson1AddAttributesActivity(input.addAttributes, context),
        }),
        ...(input.channel !== undefined &&
            input.channel !== null && { channel: serializeAws_restJson1ChannelActivity(input.channel, context) }),
        ...(input.datastore !== undefined &&
            input.datastore !== null && { datastore: serializeAws_restJson1DatastoreActivity(input.datastore, context) }),
        ...(input.deviceRegistryEnrich !== undefined &&
            input.deviceRegistryEnrich !== null && {
            deviceRegistryEnrich: serializeAws_restJson1DeviceRegistryEnrichActivity(input.deviceRegistryEnrich, context),
        }),
        ...(input.deviceShadowEnrich !== undefined &&
            input.deviceShadowEnrich !== null && {
            deviceShadowEnrich: serializeAws_restJson1DeviceShadowEnrichActivity(input.deviceShadowEnrich, context),
        }),
        ...(input.filter !== undefined &&
            input.filter !== null && { filter: serializeAws_restJson1FilterActivity(input.filter, context) }),
        ...(input.lambda !== undefined &&
            input.lambda !== null && { lambda: serializeAws_restJson1LambdaActivity(input.lambda, context) }),
        ...(input.math !== undefined &&
            input.math !== null && { math: serializeAws_restJson1MathActivity(input.math, context) }),
        ...(input.removeAttributes !== undefined &&
            input.removeAttributes !== null && {
            removeAttributes: serializeAws_restJson1RemoveAttributesActivity(input.removeAttributes, context),
        }),
        ...(input.selectAttributes !== undefined &&
            input.selectAttributes !== null && {
            selectAttributes: serializeAws_restJson1SelectAttributesActivity(input.selectAttributes, context),
        }),
    };
};
const serializeAws_restJson1QueryFilter = (input, context) => {
    return {
        ...(input.deltaTime !== undefined &&
            input.deltaTime !== null && { deltaTime: serializeAws_restJson1DeltaTime(input.deltaTime, context) }),
    };
};
const serializeAws_restJson1QueryFilters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1QueryFilter(entry, context);
    });
};
const serializeAws_restJson1RemoveAttributesActivity = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_restJson1AttributeNames(input.attributes, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1ResourceConfiguration = (input, context) => {
    return {
        ...(input.computeType !== undefined && input.computeType !== null && { computeType: input.computeType }),
        ...(input.volumeSizeInGB !== undefined &&
            input.volumeSizeInGB !== null && { volumeSizeInGB: input.volumeSizeInGB }),
    };
};
const serializeAws_restJson1RetentionPeriod = (input, context) => {
    return {
        ...(input.numberOfDays !== undefined && input.numberOfDays !== null && { numberOfDays: input.numberOfDays }),
        ...(input.unlimited !== undefined && input.unlimited !== null && { unlimited: input.unlimited }),
    };
};
const serializeAws_restJson1S3DestinationConfiguration = (input, context) => {
    return {
        ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
        ...(input.glueConfiguration !== undefined &&
            input.glueConfiguration !== null && {
            glueConfiguration: serializeAws_restJson1GlueConfiguration(input.glueConfiguration, context),
        }),
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    };
};
const serializeAws_restJson1S3PathChannelMessages = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const serializeAws_restJson1Schedule = (input, context) => {
    return {
        ...(input.expression !== undefined && input.expression !== null && { expression: input.expression }),
    };
};
const serializeAws_restJson1SchemaDefinition = (input, context) => {
    return {
        ...(input.columns !== undefined &&
            input.columns !== null && { columns: serializeAws_restJson1Columns(input.columns, context) }),
    };
};
const serializeAws_restJson1SelectAttributesActivity = (input, context) => {
    return {
        ...(input.attributes !== undefined &&
            input.attributes !== null && { attributes: serializeAws_restJson1AttributeNames(input.attributes, context) }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.next !== undefined && input.next !== null && { next: input.next }),
    };
};
const serializeAws_restJson1ServiceManagedChannelS3Storage = (input, context) => {
    return {};
};
const serializeAws_restJson1ServiceManagedDatastoreS3Storage = (input, context) => {
    return {};
};
const serializeAws_restJson1SqlQueryDatasetAction = (input, context) => {
    return {
        ...(input.filters !== undefined &&
            input.filters !== null && { filters: serializeAws_restJson1QueryFilters(input.filters, context) }),
        ...(input.sqlQuery !== undefined && input.sqlQuery !== null && { sqlQuery: input.sqlQuery }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.key !== undefined && input.key !== null && { key: input.key }),
        ...(input.value !== undefined && input.value !== null && { value: input.value }),
    };
};
const serializeAws_restJson1TagList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Tag(entry, context);
    });
};
const serializeAws_restJson1TriggeringDataset = (input, context) => {
    return {
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
    };
};
const serializeAws_restJson1Variable = (input, context) => {
    return {
        ...(input.datasetContentVersionValue !== undefined &&
            input.datasetContentVersionValue !== null && {
            datasetContentVersionValue: serializeAws_restJson1DatasetContentVersionValue(input.datasetContentVersionValue, context),
        }),
        ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
        ...(input.name !== undefined && input.name !== null && { name: input.name }),
        ...(input.outputFileUriValue !== undefined &&
            input.outputFileUriValue !== null && {
            outputFileUriValue: serializeAws_restJson1OutputFileUriValue(input.outputFileUriValue, context),
        }),
        ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
    };
};
const serializeAws_restJson1Variables = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1Variable(entry, context);
    });
};
const serializeAws_restJson1VersioningConfiguration = (input, context) => {
    return {
        ...(input.maxVersions !== undefined && input.maxVersions !== null && { maxVersions: input.maxVersions }),
        ...(input.unlimited !== undefined && input.unlimited !== null && { unlimited: input.unlimited }),
    };
};
const deserializeAws_restJson1AddAttributesActivity = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1AttributeNameMapping(output.attributes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1AttributeNameMapping = (output, context) => {
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
const deserializeAws_restJson1AttributeNames = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1BatchPutMessageErrorEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1BatchPutMessageErrorEntry(entry, context);
    });
};
const deserializeAws_restJson1BatchPutMessageErrorEntry = (output, context) => {
    return {
        errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
        errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
        messageId: output.messageId !== undefined && output.messageId !== null ? output.messageId : undefined,
    };
};
const deserializeAws_restJson1Channel = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastMessageArrivalTime: output.lastMessageArrivalTime !== undefined && output.lastMessageArrivalTime !== null
            ? new Date(Math.round(output.lastMessageArrivalTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        retentionPeriod: output.retentionPeriod !== undefined && output.retentionPeriod !== null
            ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        storage: output.storage !== undefined && output.storage !== null
            ? deserializeAws_restJson1ChannelStorage(output.storage, context)
            : undefined,
    };
};
const deserializeAws_restJson1ChannelActivity = (output, context) => {
    return {
        channelName: output.channelName !== undefined && output.channelName !== null ? output.channelName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1ChannelStatistics = (output, context) => {
    return {
        size: output.size !== undefined && output.size !== null
            ? deserializeAws_restJson1EstimatedResourceSize(output.size, context)
            : undefined,
    };
};
const deserializeAws_restJson1ChannelStorage = (output, context) => {
    return {
        customerManagedS3: output.customerManagedS3 !== undefined && output.customerManagedS3 !== null
            ? deserializeAws_restJson1CustomerManagedChannelS3Storage(output.customerManagedS3, context)
            : undefined,
        serviceManagedS3: output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
            ? deserializeAws_restJson1ServiceManagedChannelS3Storage(output.serviceManagedS3, context)
            : undefined,
    };
};
const deserializeAws_restJson1ChannelStorageSummary = (output, context) => {
    return {
        customerManagedS3: output.customerManagedS3 !== undefined && output.customerManagedS3 !== null
            ? deserializeAws_restJson1CustomerManagedChannelS3StorageSummary(output.customerManagedS3, context)
            : undefined,
        serviceManagedS3: output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
            ? deserializeAws_restJson1ServiceManagedChannelS3StorageSummary(output.serviceManagedS3, context)
            : undefined,
    };
};
const deserializeAws_restJson1ChannelSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ChannelSummary(entry, context);
    });
};
const deserializeAws_restJson1ChannelSummary = (output, context) => {
    return {
        channelName: output.channelName !== undefined && output.channelName !== null ? output.channelName : undefined,
        channelStorage: output.channelStorage !== undefined && output.channelStorage !== null
            ? deserializeAws_restJson1ChannelStorageSummary(output.channelStorage, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastMessageArrivalTime: output.lastMessageArrivalTime !== undefined && output.lastMessageArrivalTime !== null
            ? new Date(Math.round(output.lastMessageArrivalTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1Column = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        type: output.type !== undefined && output.type !== null ? output.type : undefined,
    };
};
const deserializeAws_restJson1Columns = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Column(entry, context);
    });
};
const deserializeAws_restJson1ContainerDatasetAction = (output, context) => {
    return {
        executionRoleArn: output.executionRoleArn !== undefined && output.executionRoleArn !== null ? output.executionRoleArn : undefined,
        image: output.image !== undefined && output.image !== null ? output.image : undefined,
        resourceConfiguration: output.resourceConfiguration !== undefined && output.resourceConfiguration !== null
            ? deserializeAws_restJson1ResourceConfiguration(output.resourceConfiguration, context)
            : undefined,
        variables: output.variables !== undefined && output.variables !== null
            ? deserializeAws_restJson1Variables(output.variables, context)
            : undefined,
    };
};
const deserializeAws_restJson1CustomerManagedChannelS3Storage = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1CustomerManagedChannelS3StorageSummary = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1CustomerManagedDatastoreS3Storage = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1CustomerManagedDatastoreS3StorageSummary = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        keyPrefix: output.keyPrefix !== undefined && output.keyPrefix !== null ? output.keyPrefix : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1Dataset = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1DatasetActions(output.actions, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        contentDeliveryRules: output.contentDeliveryRules !== undefined && output.contentDeliveryRules !== null
            ? deserializeAws_restJson1DatasetContentDeliveryRules(output.contentDeliveryRules, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        lateDataRules: output.lateDataRules !== undefined && output.lateDataRules !== null
            ? deserializeAws_restJson1LateDataRules(output.lateDataRules, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        retentionPeriod: output.retentionPeriod !== undefined && output.retentionPeriod !== null
            ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        triggers: output.triggers !== undefined && output.triggers !== null
            ? deserializeAws_restJson1DatasetTriggers(output.triggers, context)
            : undefined,
        versioningConfiguration: output.versioningConfiguration !== undefined && output.versioningConfiguration !== null
            ? deserializeAws_restJson1VersioningConfiguration(output.versioningConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetAction = (output, context) => {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        containerAction: output.containerAction !== undefined && output.containerAction !== null
            ? deserializeAws_restJson1ContainerDatasetAction(output.containerAction, context)
            : undefined,
        queryAction: output.queryAction !== undefined && output.queryAction !== null
            ? deserializeAws_restJson1SqlQueryDatasetAction(output.queryAction, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetActions = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetAction(entry, context);
    });
};
const deserializeAws_restJson1DatasetActionSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetActionSummary(entry, context);
    });
};
const deserializeAws_restJson1DatasetActionSummary = (output, context) => {
    return {
        actionName: output.actionName !== undefined && output.actionName !== null ? output.actionName : undefined,
        actionType: output.actionType !== undefined && output.actionType !== null ? output.actionType : undefined,
    };
};
const deserializeAws_restJson1DatasetContentDeliveryDestination = (output, context) => {
    return {
        iotEventsDestinationConfiguration: output.iotEventsDestinationConfiguration !== undefined && output.iotEventsDestinationConfiguration !== null
            ? deserializeAws_restJson1IotEventsDestinationConfiguration(output.iotEventsDestinationConfiguration, context)
            : undefined,
        s3DestinationConfiguration: output.s3DestinationConfiguration !== undefined && output.s3DestinationConfiguration !== null
            ? deserializeAws_restJson1S3DestinationConfiguration(output.s3DestinationConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetContentDeliveryRule = (output, context) => {
    return {
        destination: output.destination !== undefined && output.destination !== null
            ? deserializeAws_restJson1DatasetContentDeliveryDestination(output.destination, context)
            : undefined,
        entryName: output.entryName !== undefined && output.entryName !== null ? output.entryName : undefined,
    };
};
const deserializeAws_restJson1DatasetContentDeliveryRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetContentDeliveryRule(entry, context);
    });
};
const deserializeAws_restJson1DatasetContentStatus = (output, context) => {
    return {
        reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
        state: output.state !== undefined && output.state !== null ? output.state : undefined,
    };
};
const deserializeAws_restJson1DatasetContentSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetContentSummary(entry, context);
    });
};
const deserializeAws_restJson1DatasetContentSummary = (output, context) => {
    return {
        completionTime: output.completionTime !== undefined && output.completionTime !== null
            ? new Date(Math.round(output.completionTime * 1000))
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        scheduleTime: output.scheduleTime !== undefined && output.scheduleTime !== null
            ? new Date(Math.round(output.scheduleTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null
            ? deserializeAws_restJson1DatasetContentStatus(output.status, context)
            : undefined,
        version: output.version !== undefined && output.version !== null ? output.version : undefined,
    };
};
const deserializeAws_restJson1DatasetContentVersionValue = (output, context) => {
    return {
        datasetName: output.datasetName !== undefined && output.datasetName !== null ? output.datasetName : undefined,
    };
};
const deserializeAws_restJson1DatasetEntries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetEntry(entry, context);
    });
};
const deserializeAws_restJson1DatasetEntry = (output, context) => {
    return {
        dataURI: output.dataURI !== undefined && output.dataURI !== null ? output.dataURI : undefined,
        entryName: output.entryName !== undefined && output.entryName !== null ? output.entryName : undefined,
    };
};
const deserializeAws_restJson1DatasetSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetSummary(entry, context);
    });
};
const deserializeAws_restJson1DatasetSummary = (output, context) => {
    return {
        actions: output.actions !== undefined && output.actions !== null
            ? deserializeAws_restJson1DatasetActionSummaries(output.actions, context)
            : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        datasetName: output.datasetName !== undefined && output.datasetName !== null ? output.datasetName : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        triggers: output.triggers !== undefined && output.triggers !== null
            ? deserializeAws_restJson1DatasetTriggers(output.triggers, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetTrigger = (output, context) => {
    return {
        dataset: output.dataset !== undefined && output.dataset !== null
            ? deserializeAws_restJson1TriggeringDataset(output.dataset, context)
            : undefined,
        schedule: output.schedule !== undefined && output.schedule !== null
            ? deserializeAws_restJson1Schedule(output.schedule, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatasetTriggers = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetTrigger(entry, context);
    });
};
const deserializeAws_restJson1Datastore = (output, context) => {
    return {
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        fileFormatConfiguration: output.fileFormatConfiguration !== undefined && output.fileFormatConfiguration !== null
            ? deserializeAws_restJson1FileFormatConfiguration(output.fileFormatConfiguration, context)
            : undefined,
        lastMessageArrivalTime: output.lastMessageArrivalTime !== undefined && output.lastMessageArrivalTime !== null
            ? new Date(Math.round(output.lastMessageArrivalTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        retentionPeriod: output.retentionPeriod !== undefined && output.retentionPeriod !== null
            ? deserializeAws_restJson1RetentionPeriod(output.retentionPeriod, context)
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
        storage: output.storage !== undefined && output.storage !== null
            ? deserializeAws_restJson1DatastoreStorage(output.storage, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatastoreActivity = (output, context) => {
    return {
        datastoreName: output.datastoreName !== undefined && output.datastoreName !== null ? output.datastoreName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1DatastoreStatistics = (output, context) => {
    return {
        size: output.size !== undefined && output.size !== null
            ? deserializeAws_restJson1EstimatedResourceSize(output.size, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatastoreStorage = (output, context) => {
    if (output.customerManagedS3 !== undefined && output.customerManagedS3 !== null) {
        return {
            customerManagedS3: deserializeAws_restJson1CustomerManagedDatastoreS3Storage(output.customerManagedS3, context),
        };
    }
    if (output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null) {
        return {
            serviceManagedS3: deserializeAws_restJson1ServiceManagedDatastoreS3Storage(output.serviceManagedS3, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const deserializeAws_restJson1DatastoreStorageSummary = (output, context) => {
    return {
        customerManagedS3: output.customerManagedS3 !== undefined && output.customerManagedS3 !== null
            ? deserializeAws_restJson1CustomerManagedDatastoreS3StorageSummary(output.customerManagedS3, context)
            : undefined,
        serviceManagedS3: output.serviceManagedS3 !== undefined && output.serviceManagedS3 !== null
            ? deserializeAws_restJson1ServiceManagedDatastoreS3StorageSummary(output.serviceManagedS3, context)
            : undefined,
    };
};
const deserializeAws_restJson1DatastoreSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatastoreSummary(entry, context);
    });
};
const deserializeAws_restJson1DatastoreSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        datastoreName: output.datastoreName !== undefined && output.datastoreName !== null ? output.datastoreName : undefined,
        datastoreStorage: output.datastoreStorage !== undefined && output.datastoreStorage !== null
            ? deserializeAws_restJson1DatastoreStorageSummary(output.datastoreStorage, context)
            : undefined,
        fileFormatType: output.fileFormatType !== undefined && output.fileFormatType !== null ? output.fileFormatType : undefined,
        lastMessageArrivalTime: output.lastMessageArrivalTime !== undefined && output.lastMessageArrivalTime !== null
            ? new Date(Math.round(output.lastMessageArrivalTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1DeltaTime = (output, context) => {
    return {
        offsetSeconds: output.offsetSeconds !== undefined && output.offsetSeconds !== null ? output.offsetSeconds : undefined,
        timeExpression: output.timeExpression !== undefined && output.timeExpression !== null ? output.timeExpression : undefined,
    };
};
const deserializeAws_restJson1DeltaTimeSessionWindowConfiguration = (output, context) => {
    return {
        timeoutInMinutes: output.timeoutInMinutes !== undefined && output.timeoutInMinutes !== null ? output.timeoutInMinutes : undefined,
    };
};
const deserializeAws_restJson1DeviceRegistryEnrichActivity = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null ? output.attribute : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        thingName: output.thingName !== undefined && output.thingName !== null ? output.thingName : undefined,
    };
};
const deserializeAws_restJson1DeviceShadowEnrichActivity = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null ? output.attribute : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
        thingName: output.thingName !== undefined && output.thingName !== null ? output.thingName : undefined,
    };
};
const deserializeAws_restJson1EstimatedResourceSize = (output, context) => {
    return {
        estimatedOn: output.estimatedOn !== undefined && output.estimatedOn !== null
            ? new Date(Math.round(output.estimatedOn * 1000))
            : undefined,
        estimatedSizeInBytes: output.estimatedSizeInBytes !== undefined && output.estimatedSizeInBytes !== null
            ? output.estimatedSizeInBytes
            : undefined,
    };
};
const deserializeAws_restJson1FileFormatConfiguration = (output, context) => {
    return {
        jsonConfiguration: output.jsonConfiguration !== undefined && output.jsonConfiguration !== null
            ? deserializeAws_restJson1JsonConfiguration(output.jsonConfiguration, context)
            : undefined,
        parquetConfiguration: output.parquetConfiguration !== undefined && output.parquetConfiguration !== null
            ? deserializeAws_restJson1ParquetConfiguration(output.parquetConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1FilterActivity = (output, context) => {
    return {
        filter: output.filter !== undefined && output.filter !== null ? output.filter : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1GlueConfiguration = (output, context) => {
    return {
        databaseName: output.databaseName !== undefined && output.databaseName !== null ? output.databaseName : undefined,
        tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    };
};
const deserializeAws_restJson1IotEventsDestinationConfiguration = (output, context) => {
    return {
        inputName: output.inputName !== undefined && output.inputName !== null ? output.inputName : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1JsonConfiguration = (output, context) => {
    return {};
};
const deserializeAws_restJson1LambdaActivity = (output, context) => {
    return {
        batchSize: output.batchSize !== undefined && output.batchSize !== null ? output.batchSize : undefined,
        lambdaName: output.lambdaName !== undefined && output.lambdaName !== null ? output.lambdaName : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1LateDataRule = (output, context) => {
    return {
        ruleConfiguration: output.ruleConfiguration !== undefined && output.ruleConfiguration !== null
            ? deserializeAws_restJson1LateDataRuleConfiguration(output.ruleConfiguration, context)
            : undefined,
        ruleName: output.ruleName !== undefined && output.ruleName !== null ? output.ruleName : undefined,
    };
};
const deserializeAws_restJson1LateDataRuleConfiguration = (output, context) => {
    return {
        deltaTimeSessionWindowConfiguration: output.deltaTimeSessionWindowConfiguration !== undefined && output.deltaTimeSessionWindowConfiguration !== null
            ? deserializeAws_restJson1DeltaTimeSessionWindowConfiguration(output.deltaTimeSessionWindowConfiguration, context)
            : undefined,
    };
};
const deserializeAws_restJson1LateDataRules = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1LateDataRule(entry, context);
    });
};
const deserializeAws_restJson1LoggingOptions = (output, context) => {
    return {
        enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
        level: output.level !== undefined && output.level !== null ? output.level : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1MathActivity = (output, context) => {
    return {
        attribute: output.attribute !== undefined && output.attribute !== null ? output.attribute : undefined,
        math: output.math !== undefined && output.math !== null ? output.math : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1MessagePayloads = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
const deserializeAws_restJson1OutputFileUriValue = (output, context) => {
    return {
        fileName: output.fileName !== undefined && output.fileName !== null ? output.fileName : undefined,
    };
};
const deserializeAws_restJson1ParquetConfiguration = (output, context) => {
    return {
        schemaDefinition: output.schemaDefinition !== undefined && output.schemaDefinition !== null
            ? deserializeAws_restJson1SchemaDefinition(output.schemaDefinition, context)
            : undefined,
    };
};
const deserializeAws_restJson1Pipeline = (output, context) => {
    return {
        activities: output.activities !== undefined && output.activities !== null
            ? deserializeAws_restJson1PipelineActivities(output.activities, context)
            : undefined,
        arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        reprocessingSummaries: output.reprocessingSummaries !== undefined && output.reprocessingSummaries !== null
            ? deserializeAws_restJson1ReprocessingSummaries(output.reprocessingSummaries, context)
            : undefined,
    };
};
const deserializeAws_restJson1PipelineActivities = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PipelineActivity(entry, context);
    });
};
const deserializeAws_restJson1PipelineActivity = (output, context) => {
    return {
        addAttributes: output.addAttributes !== undefined && output.addAttributes !== null
            ? deserializeAws_restJson1AddAttributesActivity(output.addAttributes, context)
            : undefined,
        channel: output.channel !== undefined && output.channel !== null
            ? deserializeAws_restJson1ChannelActivity(output.channel, context)
            : undefined,
        datastore: output.datastore !== undefined && output.datastore !== null
            ? deserializeAws_restJson1DatastoreActivity(output.datastore, context)
            : undefined,
        deviceRegistryEnrich: output.deviceRegistryEnrich !== undefined && output.deviceRegistryEnrich !== null
            ? deserializeAws_restJson1DeviceRegistryEnrichActivity(output.deviceRegistryEnrich, context)
            : undefined,
        deviceShadowEnrich: output.deviceShadowEnrich !== undefined && output.deviceShadowEnrich !== null
            ? deserializeAws_restJson1DeviceShadowEnrichActivity(output.deviceShadowEnrich, context)
            : undefined,
        filter: output.filter !== undefined && output.filter !== null
            ? deserializeAws_restJson1FilterActivity(output.filter, context)
            : undefined,
        lambda: output.lambda !== undefined && output.lambda !== null
            ? deserializeAws_restJson1LambdaActivity(output.lambda, context)
            : undefined,
        math: output.math !== undefined && output.math !== null
            ? deserializeAws_restJson1MathActivity(output.math, context)
            : undefined,
        removeAttributes: output.removeAttributes !== undefined && output.removeAttributes !== null
            ? deserializeAws_restJson1RemoveAttributesActivity(output.removeAttributes, context)
            : undefined,
        selectAttributes: output.selectAttributes !== undefined && output.selectAttributes !== null
            ? deserializeAws_restJson1SelectAttributesActivity(output.selectAttributes, context)
            : undefined,
    };
};
const deserializeAws_restJson1PipelineSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1PipelineSummary(entry, context);
    });
};
const deserializeAws_restJson1PipelineSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        lastUpdateTime: output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
            ? new Date(Math.round(output.lastUpdateTime * 1000))
            : undefined,
        pipelineName: output.pipelineName !== undefined && output.pipelineName !== null ? output.pipelineName : undefined,
        reprocessingSummaries: output.reprocessingSummaries !== undefined && output.reprocessingSummaries !== null
            ? deserializeAws_restJson1ReprocessingSummaries(output.reprocessingSummaries, context)
            : undefined,
    };
};
const deserializeAws_restJson1QueryFilter = (output, context) => {
    return {
        deltaTime: output.deltaTime !== undefined && output.deltaTime !== null
            ? deserializeAws_restJson1DeltaTime(output.deltaTime, context)
            : undefined,
    };
};
const deserializeAws_restJson1QueryFilters = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1QueryFilter(entry, context);
    });
};
const deserializeAws_restJson1RemoveAttributesActivity = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1AttributeNames(output.attributes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1ReprocessingSummaries = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ReprocessingSummary(entry, context);
    });
};
const deserializeAws_restJson1ReprocessingSummary = (output, context) => {
    return {
        creationTime: output.creationTime !== undefined && output.creationTime !== null
            ? new Date(Math.round(output.creationTime * 1000))
            : undefined,
        id: output.id !== undefined && output.id !== null ? output.id : undefined,
        status: output.status !== undefined && output.status !== null ? output.status : undefined,
    };
};
const deserializeAws_restJson1ResourceConfiguration = (output, context) => {
    return {
        computeType: output.computeType !== undefined && output.computeType !== null ? output.computeType : undefined,
        volumeSizeInGB: output.volumeSizeInGB !== undefined && output.volumeSizeInGB !== null ? output.volumeSizeInGB : undefined,
    };
};
const deserializeAws_restJson1RetentionPeriod = (output, context) => {
    return {
        numberOfDays: output.numberOfDays !== undefined && output.numberOfDays !== null ? output.numberOfDays : undefined,
        unlimited: output.unlimited !== undefined && output.unlimited !== null ? output.unlimited : undefined,
    };
};
const deserializeAws_restJson1S3DestinationConfiguration = (output, context) => {
    return {
        bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
        glueConfiguration: output.glueConfiguration !== undefined && output.glueConfiguration !== null
            ? deserializeAws_restJson1GlueConfiguration(output.glueConfiguration, context)
            : undefined,
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        roleArn: output.roleArn !== undefined && output.roleArn !== null ? output.roleArn : undefined,
    };
};
const deserializeAws_restJson1Schedule = (output, context) => {
    return {
        expression: output.expression !== undefined && output.expression !== null ? output.expression : undefined,
    };
};
const deserializeAws_restJson1SchemaDefinition = (output, context) => {
    return {
        columns: output.columns !== undefined && output.columns !== null
            ? deserializeAws_restJson1Columns(output.columns, context)
            : undefined,
    };
};
const deserializeAws_restJson1SelectAttributesActivity = (output, context) => {
    return {
        attributes: output.attributes !== undefined && output.attributes !== null
            ? deserializeAws_restJson1AttributeNames(output.attributes, context)
            : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        next: output.next !== undefined && output.next !== null ? output.next : undefined,
    };
};
const deserializeAws_restJson1ServiceManagedChannelS3Storage = (output, context) => {
    return {};
};
const deserializeAws_restJson1ServiceManagedChannelS3StorageSummary = (output, context) => {
    return {};
};
const deserializeAws_restJson1ServiceManagedDatastoreS3Storage = (output, context) => {
    return {};
};
const deserializeAws_restJson1ServiceManagedDatastoreS3StorageSummary = (output, context) => {
    return {};
};
const deserializeAws_restJson1SqlQueryDatasetAction = (output, context) => {
    return {
        filters: output.filters !== undefined && output.filters !== null
            ? deserializeAws_restJson1QueryFilters(output.filters, context)
            : undefined,
        sqlQuery: output.sqlQuery !== undefined && output.sqlQuery !== null ? output.sqlQuery : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        key: output.key !== undefined && output.key !== null ? output.key : undefined,
        value: output.value !== undefined && output.value !== null ? output.value : undefined,
    };
};
const deserializeAws_restJson1TagList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Tag(entry, context);
    });
};
const deserializeAws_restJson1TriggeringDataset = (output, context) => {
    return {
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
    };
};
const deserializeAws_restJson1Variable = (output, context) => {
    return {
        datasetContentVersionValue: output.datasetContentVersionValue !== undefined && output.datasetContentVersionValue !== null
            ? deserializeAws_restJson1DatasetContentVersionValue(output.datasetContentVersionValue, context)
            : undefined,
        doubleValue: output.doubleValue !== undefined && output.doubleValue !== null ? output.doubleValue : undefined,
        name: output.name !== undefined && output.name !== null ? output.name : undefined,
        outputFileUriValue: output.outputFileUriValue !== undefined && output.outputFileUriValue !== null
            ? deserializeAws_restJson1OutputFileUriValue(output.outputFileUriValue, context)
            : undefined,
        stringValue: output.stringValue !== undefined && output.stringValue !== null ? output.stringValue : undefined,
    };
};
const deserializeAws_restJson1Variables = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1Variable(entry, context);
    });
};
const deserializeAws_restJson1VersioningConfiguration = (output, context) => {
    return {
        maxVersions: output.maxVersions !== undefined && output.maxVersions !== null ? output.maxVersions : undefined,
        unlimited: output.unlimited !== undefined && output.unlimited !== null ? output.unlimited : undefined,
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