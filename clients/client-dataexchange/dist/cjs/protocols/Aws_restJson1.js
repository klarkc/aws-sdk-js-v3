"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateRevisionCommand = exports.deserializeAws_restJson1UpdateDataSetCommand = exports.deserializeAws_restJson1UpdateAssetCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StartJobCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListRevisionAssetsCommand = exports.deserializeAws_restJson1ListJobsCommand = exports.deserializeAws_restJson1ListDataSetsCommand = exports.deserializeAws_restJson1ListDataSetRevisionsCommand = exports.deserializeAws_restJson1GetRevisionCommand = exports.deserializeAws_restJson1GetJobCommand = exports.deserializeAws_restJson1GetDataSetCommand = exports.deserializeAws_restJson1GetAssetCommand = exports.deserializeAws_restJson1DeleteRevisionCommand = exports.deserializeAws_restJson1DeleteDataSetCommand = exports.deserializeAws_restJson1DeleteAssetCommand = exports.deserializeAws_restJson1CreateRevisionCommand = exports.deserializeAws_restJson1CreateJobCommand = exports.deserializeAws_restJson1CreateDataSetCommand = exports.deserializeAws_restJson1CancelJobCommand = exports.serializeAws_restJson1UpdateRevisionCommand = exports.serializeAws_restJson1UpdateDataSetCommand = exports.serializeAws_restJson1UpdateAssetCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StartJobCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListRevisionAssetsCommand = exports.serializeAws_restJson1ListJobsCommand = exports.serializeAws_restJson1ListDataSetsCommand = exports.serializeAws_restJson1ListDataSetRevisionsCommand = exports.serializeAws_restJson1GetRevisionCommand = exports.serializeAws_restJson1GetJobCommand = exports.serializeAws_restJson1GetDataSetCommand = exports.serializeAws_restJson1GetAssetCommand = exports.serializeAws_restJson1DeleteRevisionCommand = exports.serializeAws_restJson1DeleteDataSetCommand = exports.serializeAws_restJson1DeleteAssetCommand = exports.serializeAws_restJson1CreateRevisionCommand = exports.serializeAws_restJson1CreateJobCommand = exports.serializeAws_restJson1CreateDataSetCommand = exports.serializeAws_restJson1CancelJobCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CancelJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
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
exports.serializeAws_restJson1CancelJobCommand = serializeAws_restJson1CancelJobCommand;
const serializeAws_restJson1CreateDataSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/data-sets";
    let body;
    body = JSON.stringify({
        ...(input.AssetType !== undefined && input.AssetType !== null && { AssetType: input.AssetType }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDataSetCommand = serializeAws_restJson1CreateDataSetCommand;
const serializeAws_restJson1CreateJobCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/jobs";
    let body;
    body = JSON.stringify({
        ...(input.Details !== undefined &&
            input.Details !== null && { Details: serializeAws_restJson1RequestDetails(input.Details, context) }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1CreateJobCommand = serializeAws_restJson1CreateJobCommand;
const serializeAws_restJson1CreateRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateRevisionCommand = serializeAws_restJson1CreateRevisionCommand;
const serializeAws_restJson1DeleteAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
    if (input.AssetId !== undefined) {
        const labelValue = input.AssetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssetId.");
        }
        resolvedPath = resolvedPath.replace("{AssetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssetId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
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
exports.serializeAws_restJson1DeleteAssetCommand = serializeAws_restJson1DeleteAssetCommand;
const serializeAws_restJson1DeleteDataSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
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
exports.serializeAws_restJson1DeleteDataSetCommand = serializeAws_restJson1DeleteDataSetCommand;
const serializeAws_restJson1DeleteRevisionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
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
exports.serializeAws_restJson1DeleteRevisionCommand = serializeAws_restJson1DeleteRevisionCommand;
const serializeAws_restJson1GetAssetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
    if (input.AssetId !== undefined) {
        const labelValue = input.AssetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssetId.");
        }
        resolvedPath = resolvedPath.replace("{AssetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssetId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
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
exports.serializeAws_restJson1GetAssetCommand = serializeAws_restJson1GetAssetCommand;
const serializeAws_restJson1GetDataSetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
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
exports.serializeAws_restJson1GetDataSetCommand = serializeAws_restJson1GetDataSetCommand;
const serializeAws_restJson1GetJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
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
exports.serializeAws_restJson1GetJobCommand = serializeAws_restJson1GetJobCommand;
const serializeAws_restJson1GetRevisionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
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
exports.serializeAws_restJson1GetRevisionCommand = serializeAws_restJson1GetRevisionCommand;
const serializeAws_restJson1ListDataSetRevisionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
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
exports.serializeAws_restJson1ListDataSetRevisionsCommand = serializeAws_restJson1ListDataSetRevisionsCommand;
const serializeAws_restJson1ListDataSetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets";
    const query = {
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.Origin !== undefined && { origin: input.Origin }),
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
exports.serializeAws_restJson1ListDataSetsCommand = serializeAws_restJson1ListDataSetsCommand;
const serializeAws_restJson1ListJobsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/jobs";
    const query = {
        ...(input.DataSetId !== undefined && { dataSetId: input.DataSetId }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.RevisionId !== undefined && { revisionId: input.RevisionId }),
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
exports.serializeAws_restJson1ListJobsCommand = serializeAws_restJson1ListJobsCommand;
const serializeAws_restJson1ListRevisionAssetsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
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
exports.serializeAws_restJson1ListRevisionAssetsCommand = serializeAws_restJson1ListRevisionAssetsCommand;
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
const serializeAws_restJson1StartJobCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/jobs/{JobId}";
    if (input.JobId !== undefined) {
        const labelValue = input.JobId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: JobId.");
        }
        resolvedPath = resolvedPath.replace("{JobId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: JobId.");
    }
    let body;
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
exports.serializeAws_restJson1StartJobCommand = serializeAws_restJson1StartJobCommand;
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
            input.Tags !== null && { tags: serializeAws_restJson1MapOf__string(input.Tags, context) }),
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
const serializeAws_restJson1UpdateAssetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}";
    if (input.AssetId !== undefined) {
        const labelValue = input.AssetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: AssetId.");
        }
        resolvedPath = resolvedPath.replace("{AssetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: AssetId.");
    }
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateAssetCommand = serializeAws_restJson1UpdateAssetCommand;
const serializeAws_restJson1UpdateDataSetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/data-sets/{DataSetId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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
exports.serializeAws_restJson1UpdateDataSetCommand = serializeAws_restJson1UpdateDataSetCommand;
const serializeAws_restJson1UpdateRevisionCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/data-sets/{DataSetId}/revisions/{RevisionId}";
    if (input.DataSetId !== undefined) {
        const labelValue = input.DataSetId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DataSetId.");
        }
        resolvedPath = resolvedPath.replace("{DataSetId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DataSetId.");
    }
    if (input.RevisionId !== undefined) {
        const labelValue = input.RevisionId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RevisionId.");
        }
        resolvedPath = resolvedPath.replace("{RevisionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RevisionId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Comment !== undefined && input.Comment !== null && { Comment: input.Comment }),
        ...(input.Finalized !== undefined && input.Finalized !== null && { Finalized: input.Finalized }),
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
exports.serializeAws_restJson1UpdateRevisionCommand = serializeAws_restJson1UpdateRevisionCommand;
const deserializeAws_restJson1CancelJobCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1CancelJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CancelJobCommand = deserializeAws_restJson1CancelJobCommand;
const deserializeAws_restJson1CancelJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1CreateDataSetCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AssetType: undefined,
        CreatedAt: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Origin: undefined,
        OriginDetails: undefined,
        SourceId: undefined,
        Tags: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AssetType !== undefined && data.AssetType !== null) {
        contents.AssetType = data.AssetType;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Origin !== undefined && data.Origin !== null) {
        contents.Origin = data.Origin;
    }
    if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
        contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDataSetCommand = deserializeAws_restJson1CreateDataSetCommand;
const deserializeAws_restJson1CreateDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceLimitExceededException":
        case "com.amazonaws.dataexchange#ServiceLimitExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceLimitExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1CreateJobCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreatedAt: undefined,
        Details: undefined,
        Errors: undefined,
        Id: undefined,
        State: undefined,
        Type: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.Details !== undefined && data.Details !== null) {
        contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
    }
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateJobCommand = deserializeAws_restJson1CreateJobCommand;
const deserializeAws_restJson1CreateJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1CreateRevisionCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Comment: undefined,
        CreatedAt: undefined,
        DataSetId: undefined,
        Finalized: undefined,
        Id: undefined,
        SourceId: undefined,
        Tags: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Comment !== undefined && data.Comment !== null) {
        contents.Comment = data.Comment;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Finalized !== undefined && data.Finalized !== null) {
        contents.Finalized = data.Finalized;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRevisionCommand = deserializeAws_restJson1CreateRevisionCommand;
const deserializeAws_restJson1CreateRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1DeleteAssetCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAssetCommand = deserializeAws_restJson1DeleteAssetCommand;
const deserializeAws_restJson1DeleteAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1DeleteDataSetCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDataSetCommand = deserializeAws_restJson1DeleteDataSetCommand;
const deserializeAws_restJson1DeleteDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1DeleteRevisionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRevisionCommand = deserializeAws_restJson1DeleteRevisionCommand;
const deserializeAws_restJson1DeleteRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1GetAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AssetDetails: undefined,
        AssetType: undefined,
        CreatedAt: undefined,
        DataSetId: undefined,
        Id: undefined,
        Name: undefined,
        RevisionId: undefined,
        SourceId: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
        contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
    }
    if (data.AssetType !== undefined && data.AssetType !== null) {
        contents.AssetType = data.AssetType;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAssetCommand = deserializeAws_restJson1GetAssetCommand;
const deserializeAws_restJson1GetAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1GetDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AssetType: undefined,
        CreatedAt: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Origin: undefined,
        OriginDetails: undefined,
        SourceId: undefined,
        Tags: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AssetType !== undefined && data.AssetType !== null) {
        contents.AssetType = data.AssetType;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Origin !== undefined && data.Origin !== null) {
        contents.Origin = data.Origin;
    }
    if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
        contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDataSetCommand = deserializeAws_restJson1GetDataSetCommand;
const deserializeAws_restJson1GetDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1GetJobCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        CreatedAt: undefined,
        Details: undefined,
        Errors: undefined,
        Id: undefined,
        State: undefined,
        Type: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.Details !== undefined && data.Details !== null) {
        contents.Details = deserializeAws_restJson1ResponseDetails(data.Details, context);
    }
    if (data.Errors !== undefined && data.Errors !== null) {
        contents.Errors = deserializeAws_restJson1ListOfJobError(data.Errors, context);
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetJobCommand = deserializeAws_restJson1GetJobCommand;
const deserializeAws_restJson1GetJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1GetRevisionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Comment: undefined,
        CreatedAt: undefined,
        DataSetId: undefined,
        Finalized: undefined,
        Id: undefined,
        SourceId: undefined,
        Tags: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Comment !== undefined && data.Comment !== null) {
        contents.Comment = data.Comment;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Finalized !== undefined && data.Finalized !== null) {
        contents.Finalized = data.Finalized;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1MapOf__string(data.Tags, context);
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRevisionCommand = deserializeAws_restJson1GetRevisionCommand;
const deserializeAws_restJson1GetRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1ListDataSetRevisionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDataSetRevisionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Revisions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Revisions !== undefined && data.Revisions !== null) {
        contents.Revisions = deserializeAws_restJson1ListOfRevisionEntry(data.Revisions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataSetRevisionsCommand = deserializeAws_restJson1ListDataSetRevisionsCommand;
const deserializeAws_restJson1ListDataSetRevisionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1ListDataSetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDataSetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DataSets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DataSets !== undefined && data.DataSets !== null) {
        contents.DataSets = deserializeAws_restJson1ListOfDataSetEntry(data.DataSets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataSetsCommand = deserializeAws_restJson1ListDataSetsCommand;
const deserializeAws_restJson1ListDataSetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1ListJobsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListJobsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Jobs: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Jobs !== undefined && data.Jobs !== null) {
        contents.Jobs = deserializeAws_restJson1ListOfJobEntry(data.Jobs, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListJobsCommand = deserializeAws_restJson1ListJobsCommand;
const deserializeAws_restJson1ListJobsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1ListRevisionAssetsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRevisionAssetsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Assets: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Assets !== undefined && data.Assets !== null) {
        contents.Assets = deserializeAws_restJson1ListOfAssetEntry(data.Assets, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRevisionAssetsCommand = deserializeAws_restJson1ListRevisionAssetsCommand;
const deserializeAws_restJson1ListRevisionAssetsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1MapOf__string(data.tags, context);
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
const deserializeAws_restJson1StartJobCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartJobCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartJobCommand = deserializeAws_restJson1StartJobCommand;
const deserializeAws_restJson1StartJobCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1UpdateAssetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateAssetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AssetDetails: undefined,
        AssetType: undefined,
        CreatedAt: undefined,
        DataSetId: undefined,
        Id: undefined,
        Name: undefined,
        RevisionId: undefined,
        SourceId: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AssetDetails !== undefined && data.AssetDetails !== null) {
        contents.AssetDetails = deserializeAws_restJson1AssetDetails(data.AssetDetails, context);
    }
    if (data.AssetType !== undefined && data.AssetType !== null) {
        contents.AssetType = data.AssetType;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAssetCommand = deserializeAws_restJson1UpdateAssetCommand;
const deserializeAws_restJson1UpdateAssetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1UpdateDataSetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDataSetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        AssetType: undefined,
        CreatedAt: undefined,
        Description: undefined,
        Id: undefined,
        Name: undefined,
        Origin: undefined,
        OriginDetails: undefined,
        SourceId: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.AssetType !== undefined && data.AssetType !== null) {
        contents.AssetType = data.AssetType;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.Name !== undefined && data.Name !== null) {
        contents.Name = data.Name;
    }
    if (data.Origin !== undefined && data.Origin !== null) {
        contents.Origin = data.Origin;
    }
    if (data.OriginDetails !== undefined && data.OriginDetails !== null) {
        contents.OriginDetails = deserializeAws_restJson1OriginDetails(data.OriginDetails, context);
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSetCommand = deserializeAws_restJson1UpdateDataSetCommand;
const deserializeAws_restJson1UpdateDataSetCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
const deserializeAws_restJson1UpdateRevisionCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRevisionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Arn: undefined,
        Comment: undefined,
        CreatedAt: undefined,
        DataSetId: undefined,
        Finalized: undefined,
        Id: undefined,
        SourceId: undefined,
        UpdatedAt: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Arn !== undefined && data.Arn !== null) {
        contents.Arn = data.Arn;
    }
    if (data.Comment !== undefined && data.Comment !== null) {
        contents.Comment = data.Comment;
    }
    if (data.CreatedAt !== undefined && data.CreatedAt !== null) {
        contents.CreatedAt = new Date(data.CreatedAt);
    }
    if (data.DataSetId !== undefined && data.DataSetId !== null) {
        contents.DataSetId = data.DataSetId;
    }
    if (data.Finalized !== undefined && data.Finalized !== null) {
        contents.Finalized = data.Finalized;
    }
    if (data.Id !== undefined && data.Id !== null) {
        contents.Id = data.Id;
    }
    if (data.SourceId !== undefined && data.SourceId !== null) {
        contents.SourceId = data.SourceId;
    }
    if (data.UpdatedAt !== undefined && data.UpdatedAt !== null) {
        contents.UpdatedAt = new Date(data.UpdatedAt);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRevisionCommand = deserializeAws_restJson1UpdateRevisionCommand;
const deserializeAws_restJson1UpdateRevisionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.dataexchange#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.dataexchange#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.dataexchange#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.dataexchange#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.dataexchange#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.dataexchange#ValidationException":
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
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ConflictException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ResourceNotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    return contents;
};
const deserializeAws_restJson1ServiceLimitExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceLimitExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        LimitName: undefined,
        LimitValue: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.LimitName !== undefined && data.LimitName !== null) {
        contents.LimitName = data.LimitName;
    }
    if (data.LimitValue !== undefined && data.LimitValue !== null) {
        contents.LimitValue = data.LimitValue;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
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
const deserializeAws_restJson1ValidationExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ValidationException",
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
const serializeAws_restJson1AssetDestinationEntry = (input, context) => {
    return {
        ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    };
};
const serializeAws_restJson1AssetSourceEntry = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    };
};
const serializeAws_restJson1ExportAssetsToS3RequestDetails = (input, context) => {
    return {
        ...(input.AssetDestinations !== undefined &&
            input.AssetDestinations !== null && {
            AssetDestinations: serializeAws_restJson1ListOfAssetDestinationEntry(input.AssetDestinations, context),
        }),
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && {
            Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
        }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    };
};
const serializeAws_restJson1ExportAssetToSignedUrlRequestDetails = (input, context) => {
    return {
        ...(input.AssetId !== undefined && input.AssetId !== null && { AssetId: input.AssetId }),
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    };
};
const serializeAws_restJson1ExportRevisionsToS3RequestDetails = (input, context) => {
    return {
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.Encryption !== undefined &&
            input.Encryption !== null && {
            Encryption: serializeAws_restJson1ExportServerSideEncryption(input.Encryption, context),
        }),
        ...(input.RevisionDestinations !== undefined &&
            input.RevisionDestinations !== null && {
            RevisionDestinations: serializeAws_restJson1ListOfRevisionDestinationEntry(input.RevisionDestinations, context),
        }),
    };
};
const serializeAws_restJson1ExportServerSideEncryption = (input, context) => {
    return {
        ...(input.KmsKeyArn !== undefined && input.KmsKeyArn !== null && { KmsKeyArn: input.KmsKeyArn }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    };
};
const serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails = (input, context) => {
    return {
        ...(input.AssetName !== undefined && input.AssetName !== null && { AssetName: input.AssetName }),
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.Md5Hash !== undefined && input.Md5Hash !== null && { Md5Hash: input.Md5Hash }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    };
};
const serializeAws_restJson1ImportAssetsFromS3RequestDetails = (input, context) => {
    return {
        ...(input.AssetSources !== undefined &&
            input.AssetSources !== null && {
            AssetSources: serializeAws_restJson1ListOfAssetSourceEntry(input.AssetSources, context),
        }),
        ...(input.DataSetId !== undefined && input.DataSetId !== null && { DataSetId: input.DataSetId }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    };
};
const serializeAws_restJson1ListOfAssetDestinationEntry = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};
const serializeAws_restJson1ListOfAssetSourceEntry = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1AssetSourceEntry(entry, context);
    });
};
const serializeAws_restJson1ListOfRevisionDestinationEntry = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return serializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};
const serializeAws_restJson1MapOf__string = (input, context) => {
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
const serializeAws_restJson1RequestDetails = (input, context) => {
    return {
        ...(input.ExportAssetToSignedUrl !== undefined &&
            input.ExportAssetToSignedUrl !== null && {
            ExportAssetToSignedUrl: serializeAws_restJson1ExportAssetToSignedUrlRequestDetails(input.ExportAssetToSignedUrl, context),
        }),
        ...(input.ExportAssetsToS3 !== undefined &&
            input.ExportAssetsToS3 !== null && {
            ExportAssetsToS3: serializeAws_restJson1ExportAssetsToS3RequestDetails(input.ExportAssetsToS3, context),
        }),
        ...(input.ExportRevisionsToS3 !== undefined &&
            input.ExportRevisionsToS3 !== null && {
            ExportRevisionsToS3: serializeAws_restJson1ExportRevisionsToS3RequestDetails(input.ExportRevisionsToS3, context),
        }),
        ...(input.ImportAssetFromSignedUrl !== undefined &&
            input.ImportAssetFromSignedUrl !== null && {
            ImportAssetFromSignedUrl: serializeAws_restJson1ImportAssetFromSignedUrlRequestDetails(input.ImportAssetFromSignedUrl, context),
        }),
        ...(input.ImportAssetsFromS3 !== undefined &&
            input.ImportAssetsFromS3 !== null && {
            ImportAssetsFromS3: serializeAws_restJson1ImportAssetsFromS3RequestDetails(input.ImportAssetsFromS3, context),
        }),
    };
};
const serializeAws_restJson1RevisionDestinationEntry = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.KeyPattern !== undefined && input.KeyPattern !== null && { KeyPattern: input.KeyPattern }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    };
};
const deserializeAws_restJson1AssetDestinationEntry = (output, context) => {
    return {
        AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1AssetDetails = (output, context) => {
    return {
        S3SnapshotAsset: output.S3SnapshotAsset !== undefined && output.S3SnapshotAsset !== null
            ? deserializeAws_restJson1S3SnapshotAsset(output.S3SnapshotAsset, context)
            : undefined,
    };
};
const deserializeAws_restJson1AssetEntry = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssetDetails: output.AssetDetails !== undefined && output.AssetDetails !== null
            ? deserializeAws_restJson1AssetDetails(output.AssetDetails, context)
            : undefined,
        AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
const deserializeAws_restJson1AssetSourceEntry = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1DataSetEntry = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        AssetType: output.AssetType !== undefined && output.AssetType !== null ? output.AssetType : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        Name: output.Name !== undefined && output.Name !== null ? output.Name : undefined,
        Origin: output.Origin !== undefined && output.Origin !== null ? output.Origin : undefined,
        OriginDetails: output.OriginDetails !== undefined && output.OriginDetails !== null
            ? deserializeAws_restJson1OriginDetails(output.OriginDetails, context)
            : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
const deserializeAws_restJson1Details = (output, context) => {
    return {
        ImportAssetFromSignedUrlJobErrorDetails: output.ImportAssetFromSignedUrlJobErrorDetails !== undefined &&
            output.ImportAssetFromSignedUrlJobErrorDetails !== null
            ? deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails(output.ImportAssetFromSignedUrlJobErrorDetails, context)
            : undefined,
        ImportAssetsFromS3JobErrorDetails: output.ImportAssetsFromS3JobErrorDetails !== undefined && output.ImportAssetsFromS3JobErrorDetails !== null
            ? deserializeAws_restJson1ListOfAssetSourceEntry(output.ImportAssetsFromS3JobErrorDetails, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExportAssetsToS3ResponseDetails = (output, context) => {
    return {
        AssetDestinations: output.AssetDestinations !== undefined && output.AssetDestinations !== null
            ? deserializeAws_restJson1ListOfAssetDestinationEntry(output.AssetDestinations, context)
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
            : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
const deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails = (output, context) => {
    return {
        AssetId: output.AssetId !== undefined && output.AssetId !== null ? output.AssetId : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
        SignedUrlExpiresAt: output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
            ? new Date(output.SignedUrlExpiresAt)
            : undefined,
    };
};
const deserializeAws_restJson1ExportRevisionsToS3ResponseDetails = (output, context) => {
    return {
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Encryption: output.Encryption !== undefined && output.Encryption !== null
            ? deserializeAws_restJson1ExportServerSideEncryption(output.Encryption, context)
            : undefined,
        RevisionDestinations: output.RevisionDestinations !== undefined && output.RevisionDestinations !== null
            ? deserializeAws_restJson1ListOfRevisionDestinationEntry(output.RevisionDestinations, context)
            : undefined,
    };
};
const deserializeAws_restJson1ExportServerSideEncryption = (output, context) => {
    return {
        KmsKeyArn: output.KmsKeyArn !== undefined && output.KmsKeyArn !== null ? output.KmsKeyArn : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ImportAssetFromSignedUrlJobErrorDetails = (output, context) => {
    return {
        AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
    };
};
const deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails = (output, context) => {
    return {
        AssetName: output.AssetName !== undefined && output.AssetName !== null ? output.AssetName : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Md5Hash: output.Md5Hash !== undefined && output.Md5Hash !== null ? output.Md5Hash : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
        SignedUrl: output.SignedUrl !== undefined && output.SignedUrl !== null ? output.SignedUrl : undefined,
        SignedUrlExpiresAt: output.SignedUrlExpiresAt !== undefined && output.SignedUrlExpiresAt !== null
            ? new Date(output.SignedUrlExpiresAt)
            : undefined,
    };
};
const deserializeAws_restJson1ImportAssetsFromS3ResponseDetails = (output, context) => {
    return {
        AssetSources: output.AssetSources !== undefined && output.AssetSources !== null
            ? deserializeAws_restJson1ListOfAssetSourceEntry(output.AssetSources, context)
            : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
const deserializeAws_restJson1JobEntry = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_restJson1ResponseDetails(output.Details, context)
            : undefined,
        Errors: output.Errors !== undefined && output.Errors !== null
            ? deserializeAws_restJson1ListOfJobError(output.Errors, context)
            : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
const deserializeAws_restJson1JobError = (output, context) => {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Details: output.Details !== undefined && output.Details !== null
            ? deserializeAws_restJson1Details(output.Details, context)
            : undefined,
        LimitName: output.LimitName !== undefined && output.LimitName !== null ? output.LimitName : undefined,
        LimitValue: output.LimitValue !== undefined && output.LimitValue !== null ? output.LimitValue : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
        ResourceId: output.ResourceId !== undefined && output.ResourceId !== null ? output.ResourceId : undefined,
        ResourceType: output.ResourceType !== undefined && output.ResourceType !== null ? output.ResourceType : undefined,
    };
};
const deserializeAws_restJson1ListOfAssetDestinationEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetDestinationEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfAssetEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfAssetSourceEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1AssetSourceEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfDataSetEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DataSetEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfJobEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfJobError = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1JobError(entry, context);
    });
};
const deserializeAws_restJson1ListOfRevisionDestinationEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RevisionDestinationEntry(entry, context);
    });
};
const deserializeAws_restJson1ListOfRevisionEntry = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RevisionEntry(entry, context);
    });
};
const deserializeAws_restJson1MapOf__string = (output, context) => {
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
const deserializeAws_restJson1OriginDetails = (output, context) => {
    return {
        ProductId: output.ProductId !== undefined && output.ProductId !== null ? output.ProductId : undefined,
    };
};
const deserializeAws_restJson1ResponseDetails = (output, context) => {
    return {
        ExportAssetToSignedUrl: output.ExportAssetToSignedUrl !== undefined && output.ExportAssetToSignedUrl !== null
            ? deserializeAws_restJson1ExportAssetToSignedUrlResponseDetails(output.ExportAssetToSignedUrl, context)
            : undefined,
        ExportAssetsToS3: output.ExportAssetsToS3 !== undefined && output.ExportAssetsToS3 !== null
            ? deserializeAws_restJson1ExportAssetsToS3ResponseDetails(output.ExportAssetsToS3, context)
            : undefined,
        ExportRevisionsToS3: output.ExportRevisionsToS3 !== undefined && output.ExportRevisionsToS3 !== null
            ? deserializeAws_restJson1ExportRevisionsToS3ResponseDetails(output.ExportRevisionsToS3, context)
            : undefined,
        ImportAssetFromSignedUrl: output.ImportAssetFromSignedUrl !== undefined && output.ImportAssetFromSignedUrl !== null
            ? deserializeAws_restJson1ImportAssetFromSignedUrlResponseDetails(output.ImportAssetFromSignedUrl, context)
            : undefined,
        ImportAssetsFromS3: output.ImportAssetsFromS3 !== undefined && output.ImportAssetsFromS3 !== null
            ? deserializeAws_restJson1ImportAssetsFromS3ResponseDetails(output.ImportAssetsFromS3, context)
            : undefined,
    };
};
const deserializeAws_restJson1RevisionDestinationEntry = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        KeyPattern: output.KeyPattern !== undefined && output.KeyPattern !== null ? output.KeyPattern : undefined,
        RevisionId: output.RevisionId !== undefined && output.RevisionId !== null ? output.RevisionId : undefined,
    };
};
const deserializeAws_restJson1RevisionEntry = (output, context) => {
    return {
        Arn: output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
        Comment: output.Comment !== undefined && output.Comment !== null ? output.Comment : undefined,
        CreatedAt: output.CreatedAt !== undefined && output.CreatedAt !== null ? new Date(output.CreatedAt) : undefined,
        DataSetId: output.DataSetId !== undefined && output.DataSetId !== null ? output.DataSetId : undefined,
        Finalized: output.Finalized !== undefined && output.Finalized !== null ? output.Finalized : undefined,
        Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
        SourceId: output.SourceId !== undefined && output.SourceId !== null ? output.SourceId : undefined,
        UpdatedAt: output.UpdatedAt !== undefined && output.UpdatedAt !== null ? new Date(output.UpdatedAt) : undefined,
    };
};
const deserializeAws_restJson1S3SnapshotAsset = (output, context) => {
    return {
        Size: output.Size !== undefined && output.Size !== null ? output.Size : undefined,
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