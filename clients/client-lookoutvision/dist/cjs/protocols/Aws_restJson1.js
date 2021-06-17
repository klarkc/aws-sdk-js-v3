"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1UpdateDatasetEntriesCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopModelCommand = exports.deserializeAws_restJson1StartModelCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListProjectsCommand = exports.deserializeAws_restJson1ListModelsCommand = exports.deserializeAws_restJson1ListDatasetEntriesCommand = exports.deserializeAws_restJson1DetectAnomaliesCommand = exports.deserializeAws_restJson1DescribeProjectCommand = exports.deserializeAws_restJson1DescribeModelCommand = exports.deserializeAws_restJson1DescribeDatasetCommand = exports.deserializeAws_restJson1DeleteProjectCommand = exports.deserializeAws_restJson1DeleteModelCommand = exports.deserializeAws_restJson1DeleteDatasetCommand = exports.deserializeAws_restJson1CreateProjectCommand = exports.deserializeAws_restJson1CreateModelCommand = exports.deserializeAws_restJson1CreateDatasetCommand = exports.serializeAws_restJson1UpdateDatasetEntriesCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopModelCommand = exports.serializeAws_restJson1StartModelCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListProjectsCommand = exports.serializeAws_restJson1ListModelsCommand = exports.serializeAws_restJson1ListDatasetEntriesCommand = exports.serializeAws_restJson1DetectAnomaliesCommand = exports.serializeAws_restJson1DescribeProjectCommand = exports.serializeAws_restJson1DescribeModelCommand = exports.serializeAws_restJson1DescribeDatasetCommand = exports.serializeAws_restJson1DeleteProjectCommand = exports.serializeAws_restJson1DeleteModelCommand = exports.serializeAws_restJson1DeleteDatasetCommand = exports.serializeAws_restJson1CreateProjectCommand = exports.serializeAws_restJson1CreateModelCommand = exports.serializeAws_restJson1CreateDatasetCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateDatasetCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/datasets";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.DatasetSource !== undefined &&
            input.DatasetSource !== null && {
            DatasetSource: serializeAws_restJson1DatasetSource(input.DatasetSource, context),
        }),
        ...(input.DatasetType !== undefined && input.DatasetType !== null && { DatasetType: input.DatasetType }),
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
const serializeAws_restJson1CreateModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { KmsKeyId: input.KmsKeyId }),
        ...(input.OutputConfig !== undefined &&
            input.OutputConfig !== null && { OutputConfig: serializeAws_restJson1OutputConfig(input.OutputConfig, context) }),
        ...(input.Tags !== undefined &&
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateModelCommand = serializeAws_restJson1CreateModelCommand;
const serializeAws_restJson1CreateProjectCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects";
    let body;
    body = JSON.stringify({
        ...(input.ProjectName !== undefined && input.ProjectName !== null && { ProjectName: input.ProjectName }),
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
exports.serializeAws_restJson1CreateProjectCommand = serializeAws_restJson1CreateProjectCommand;
const serializeAws_restJson1DeleteDatasetCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.DatasetType !== undefined) {
        const labelValue = input.DatasetType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetType.");
        }
        resolvedPath = resolvedPath.replace("{DatasetType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetType.");
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
const serializeAws_restJson1DeleteModelCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.ModelVersion !== undefined) {
        const labelValue = input.ModelVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ModelVersion.");
        }
        resolvedPath = resolvedPath.replace("{ModelVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ModelVersion.");
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
exports.serializeAws_restJson1DeleteModelCommand = serializeAws_restJson1DeleteModelCommand;
const serializeAws_restJson1DeleteProjectCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
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
exports.serializeAws_restJson1DeleteProjectCommand = serializeAws_restJson1DeleteProjectCommand;
const serializeAws_restJson1DescribeDatasetCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.DatasetType !== undefined) {
        const labelValue = input.DatasetType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetType.");
        }
        resolvedPath = resolvedPath.replace("{DatasetType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetType.");
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
const serializeAws_restJson1DescribeModelCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.ModelVersion !== undefined) {
        const labelValue = input.ModelVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ModelVersion.");
        }
        resolvedPath = resolvedPath.replace("{ModelVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ModelVersion.");
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
exports.serializeAws_restJson1DescribeModelCommand = serializeAws_restJson1DescribeModelCommand;
const serializeAws_restJson1DescribeProjectCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects/{ProjectName}";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
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
exports.serializeAws_restJson1DescribeProjectCommand = serializeAws_restJson1DescribeProjectCommand;
const serializeAws_restJson1DetectAnomaliesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/octet-stream",
        ...(isSerializableHeaderValue(input.ContentType) && { "content-type": input.ContentType }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.ModelVersion !== undefined) {
        const labelValue = input.ModelVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ModelVersion.");
        }
        resolvedPath = resolvedPath.replace("{ModelVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ModelVersion.");
    }
    let body;
    if (input.Body !== undefined) {
        body = input.Body;
    }
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
exports.serializeAws_restJson1DetectAnomaliesCommand = serializeAws_restJson1DetectAnomaliesCommand;
const serializeAws_restJson1ListDatasetEntriesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.DatasetType !== undefined) {
        const labelValue = input.DatasetType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetType.");
        }
        resolvedPath = resolvedPath.replace("{DatasetType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetType.");
    }
    const query = {
        ...(input.Labeled !== undefined && { labeled: input.Labeled.toString() }),
        ...(input.AnomalyClass !== undefined && { anomalyClass: input.AnomalyClass }),
        ...(input.BeforeCreationDate !== undefined && {
            createdBefore: (input.BeforeCreationDate.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.AfterCreationDate !== undefined && {
            createdAfter: (input.AfterCreationDate.toISOString().split(".")[0] + "Z").toString(),
        }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
        ...(input.SourceRefContains !== undefined && { sourceRefContains: input.SourceRefContains }),
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
exports.serializeAws_restJson1ListDatasetEntriesCommand = serializeAws_restJson1ListDatasetEntriesCommand;
const serializeAws_restJson1ListModelsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
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
exports.serializeAws_restJson1ListModelsCommand = serializeAws_restJson1ListModelsCommand;
const serializeAws_restJson1ListProjectsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/projects";
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
exports.serializeAws_restJson1ListProjectsCommand = serializeAws_restJson1ListProjectsCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/2020-11-20/tags/{ResourceArn}";
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
const serializeAws_restJson1StartModelCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.ModelVersion !== undefined) {
        const labelValue = input.ModelVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ModelVersion.");
        }
        resolvedPath = resolvedPath.replace("{ModelVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ModelVersion.");
    }
    let body;
    body = JSON.stringify({
        ...(input.MinInferenceUnits !== undefined &&
            input.MinInferenceUnits !== null && { MinInferenceUnits: input.MinInferenceUnits }),
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
exports.serializeAws_restJson1StartModelCommand = serializeAws_restJson1StartModelCommand;
const serializeAws_restJson1StopModelCommand = async (input, context) => {
    const headers = {
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.ModelVersion !== undefined) {
        const labelValue = input.ModelVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ModelVersion.");
        }
        resolvedPath = resolvedPath.replace("{ModelVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ModelVersion.");
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
exports.serializeAws_restJson1StopModelCommand = serializeAws_restJson1StopModelCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/2020-11-20/tags/{ResourceArn}";
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
            input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
    let resolvedPath = "/2020-11-20/tags/{ResourceArn}";
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
const serializeAws_restJson1UpdateDatasetEntriesCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
        ...(isSerializableHeaderValue(input.ClientToken) && { "x-amzn-client-token": input.ClientToken }),
    };
    let resolvedPath = "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries";
    if (input.ProjectName !== undefined) {
        const labelValue = input.ProjectName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: ProjectName.");
        }
        resolvedPath = resolvedPath.replace("{ProjectName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: ProjectName.");
    }
    if (input.DatasetType !== undefined) {
        const labelValue = input.DatasetType;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DatasetType.");
        }
        resolvedPath = resolvedPath.replace("{DatasetType}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DatasetType.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Changes !== undefined && input.Changes !== null && { Changes: context.base64Encoder(input.Changes) }),
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
exports.serializeAws_restJson1UpdateDatasetEntriesCommand = serializeAws_restJson1UpdateDatasetEntriesCommand;
const deserializeAws_restJson1CreateDatasetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DatasetMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DatasetMetadata !== undefined && data.DatasetMetadata !== null) {
        contents.DatasetMetadata = deserializeAws_restJson1DatasetMetadata(data.DatasetMetadata, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1CreateModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ModelMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ModelMetadata !== undefined && data.ModelMetadata !== null) {
        contents.ModelMetadata = deserializeAws_restJson1ModelMetadata(data.ModelMetadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateModelCommand = deserializeAws_restJson1CreateModelCommand;
const deserializeAws_restJson1CreateModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1CreateProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProjectMetadata: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProjectMetadata !== undefined && data.ProjectMetadata !== null) {
        contents.ProjectMetadata = deserializeAws_restJson1ProjectMetadata(data.ProjectMetadata, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateProjectCommand = deserializeAws_restJson1CreateProjectCommand;
const deserializeAws_restJson1CreateProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DeleteDatasetCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DeleteModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ModelArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ModelArn !== undefined && data.ModelArn !== null) {
        contents.ModelArn = data.ModelArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteModelCommand = deserializeAws_restJson1DeleteModelCommand;
const deserializeAws_restJson1DeleteModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DeleteProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProjectArn: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProjectArn !== undefined && data.ProjectArn !== null) {
        contents.ProjectArn = data.ProjectArn;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteProjectCommand = deserializeAws_restJson1DeleteProjectCommand;
const deserializeAws_restJson1DeleteProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DescribeDatasetCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DatasetDescription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DatasetDescription !== undefined && data.DatasetDescription !== null) {
        contents.DatasetDescription = deserializeAws_restJson1DatasetDescription(data.DatasetDescription, context);
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DescribeModelCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ModelDescription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ModelDescription !== undefined && data.ModelDescription !== null) {
        contents.ModelDescription = deserializeAws_restJson1ModelDescription(data.ModelDescription, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeModelCommand = deserializeAws_restJson1DescribeModelCommand;
const deserializeAws_restJson1DescribeModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DescribeProjectCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeProjectCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        ProjectDescription: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.ProjectDescription !== undefined && data.ProjectDescription !== null) {
        contents.ProjectDescription = deserializeAws_restJson1ProjectDescription(data.ProjectDescription, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeProjectCommand = deserializeAws_restJson1DescribeProjectCommand;
const deserializeAws_restJson1DescribeProjectCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1DetectAnomaliesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DetectAnomaliesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DetectAnomalyResult: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DetectAnomalyResult !== undefined && data.DetectAnomalyResult !== null) {
        contents.DetectAnomalyResult = deserializeAws_restJson1DetectAnomalyResult(data.DetectAnomalyResult, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DetectAnomaliesCommand = deserializeAws_restJson1DetectAnomaliesCommand;
const deserializeAws_restJson1DetectAnomaliesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1ListDatasetEntriesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDatasetEntriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DatasetEntries: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DatasetEntries !== undefined && data.DatasetEntries !== null) {
        contents.DatasetEntries = deserializeAws_restJson1DatasetEntryList(data.DatasetEntries, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDatasetEntriesCommand = deserializeAws_restJson1ListDatasetEntriesCommand;
const deserializeAws_restJson1ListDatasetEntriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1ListModelsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListModelsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Models: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Models !== undefined && data.Models !== null) {
        contents.Models = deserializeAws_restJson1ModelMetadataList(data.Models, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListModelsCommand = deserializeAws_restJson1ListModelsCommand;
const deserializeAws_restJson1ListModelsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1ListProjectsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListProjectsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Projects: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Projects !== undefined && data.Projects !== null) {
        contents.Projects = deserializeAws_restJson1ProjectMetadataList(data.Projects, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListProjectsCommand = deserializeAws_restJson1ListProjectsCommand;
const deserializeAws_restJson1ListProjectsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
    if (data.Tags !== undefined && data.Tags !== null) {
        contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1StartModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartModelCommand = deserializeAws_restJson1StartModelCommand;
const deserializeAws_restJson1StartModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1StopModelCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopModelCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopModelCommand = deserializeAws_restJson1StopModelCommand;
const deserializeAws_restJson1StopModelCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceQuotaExceededException":
        case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
            response = {
                ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
const deserializeAws_restJson1UpdateDatasetEntriesCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDatasetEntriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDatasetEntriesCommand = deserializeAws_restJson1UpdateDatasetEntriesCommand;
const deserializeAws_restJson1UpdateDatasetEntriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.lookoutvision#AccessDeniedException":
            response = {
                ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.lookoutvision#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerException":
        case "com.amazonaws.lookoutvision#InternalServerException":
            response = {
                ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ResourceNotFoundException":
        case "com.amazonaws.lookoutvision#ResourceNotFoundException":
            response = {
                ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ThrottlingException":
        case "com.amazonaws.lookoutvision#ThrottlingException":
            response = {
                ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ValidationException":
        case "com.amazonaws.lookoutvision#ValidationException":
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
        RetryAfterSeconds: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
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
const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceQuotaExceededException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        ResourceId: undefined,
        ResourceType: undefined,
        ServiceCode: undefined,
    };
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ResourceId !== undefined && data.ResourceId !== null) {
        contents.ResourceId = data.ResourceId;
    }
    if (data.ResourceType !== undefined && data.ResourceType !== null) {
        contents.ResourceType = data.ResourceType;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
    }
    return contents;
};
const deserializeAws_restJson1ThrottlingExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ThrottlingException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Message: undefined,
        QuotaCode: undefined,
        RetryAfterSeconds: undefined,
        ServiceCode: undefined,
    };
    if (parsedOutput.headers["retry-after"] !== undefined) {
        contents.RetryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
    }
    const data = parsedOutput.body;
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    if (data.QuotaCode !== undefined && data.QuotaCode !== null) {
        contents.QuotaCode = data.QuotaCode;
    }
    if (data.ServiceCode !== undefined && data.ServiceCode !== null) {
        contents.ServiceCode = data.ServiceCode;
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
const serializeAws_restJson1DatasetGroundTruthManifest = (input, context) => {
    return {
        ...(input.S3Object !== undefined &&
            input.S3Object !== null && { S3Object: serializeAws_restJson1InputS3Object(input.S3Object, context) }),
    };
};
const serializeAws_restJson1DatasetSource = (input, context) => {
    return {
        ...(input.GroundTruthManifest !== undefined &&
            input.GroundTruthManifest !== null && {
            GroundTruthManifest: serializeAws_restJson1DatasetGroundTruthManifest(input.GroundTruthManifest, context),
        }),
    };
};
const serializeAws_restJson1InputS3Object = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.VersionId !== undefined && input.VersionId !== null && { VersionId: input.VersionId }),
    };
};
const serializeAws_restJson1OutputConfig = (input, context) => {
    return {
        ...(input.S3Location !== undefined &&
            input.S3Location !== null && { S3Location: serializeAws_restJson1S3Location(input.S3Location, context) }),
    };
};
const serializeAws_restJson1S3Location = (input, context) => {
    return {
        ...(input.Bucket !== undefined && input.Bucket !== null && { Bucket: input.Bucket }),
        ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    };
};
const serializeAws_restJson1Tag = (input, context) => {
    return {
        ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
        ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
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
const deserializeAws_restJson1DatasetDescription = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        DatasetType: output.DatasetType !== undefined && output.DatasetType !== null ? output.DatasetType : undefined,
        ImageStats: output.ImageStats !== undefined && output.ImageStats !== null
            ? deserializeAws_restJson1DatasetImageStats(output.ImageStats, context)
            : undefined,
        LastUpdatedTimestamp: output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
            ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
            : undefined,
        ProjectName: output.ProjectName !== undefined && output.ProjectName !== null ? output.ProjectName : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_restJson1DatasetEntryList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
const deserializeAws_restJson1DatasetImageStats = (output, context) => {
    return {
        Anomaly: output.Anomaly !== undefined && output.Anomaly !== null ? output.Anomaly : undefined,
        Labeled: output.Labeled !== undefined && output.Labeled !== null ? output.Labeled : undefined,
        Normal: output.Normal !== undefined && output.Normal !== null ? output.Normal : undefined,
        Total: output.Total !== undefined && output.Total !== null ? output.Total : undefined,
    };
};
const deserializeAws_restJson1DatasetMetadata = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        DatasetType: output.DatasetType !== undefined && output.DatasetType !== null ? output.DatasetType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_restJson1DatasetMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DatasetMetadata(entry, context);
    });
};
const deserializeAws_restJson1DetectAnomalyResult = (output, context) => {
    return {
        Confidence: output.Confidence !== undefined && output.Confidence !== null ? output.Confidence : undefined,
        IsAnomalous: output.IsAnomalous !== undefined && output.IsAnomalous !== null ? output.IsAnomalous : undefined,
        Source: output.Source !== undefined && output.Source !== null
            ? deserializeAws_restJson1ImageSource(output.Source, context)
            : undefined,
    };
};
const deserializeAws_restJson1ImageSource = (output, context) => {
    return {
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1ModelDescription = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        EvaluationEndTimestamp: output.EvaluationEndTimestamp !== undefined && output.EvaluationEndTimestamp !== null
            ? new Date(Math.round(output.EvaluationEndTimestamp * 1000))
            : undefined,
        EvaluationManifest: output.EvaluationManifest !== undefined && output.EvaluationManifest !== null
            ? deserializeAws_restJson1OutputS3Object(output.EvaluationManifest, context)
            : undefined,
        EvaluationResult: output.EvaluationResult !== undefined && output.EvaluationResult !== null
            ? deserializeAws_restJson1OutputS3Object(output.EvaluationResult, context)
            : undefined,
        KmsKeyId: output.KmsKeyId !== undefined && output.KmsKeyId !== null ? output.KmsKeyId : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        OutputConfig: output.OutputConfig !== undefined && output.OutputConfig !== null
            ? deserializeAws_restJson1OutputConfig(output.OutputConfig, context)
            : undefined,
        Performance: output.Performance !== undefined && output.Performance !== null
            ? deserializeAws_restJson1ModelPerformance(output.Performance, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_restJson1ModelMetadata = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        Description: output.Description !== undefined && output.Description !== null ? output.Description : undefined,
        ModelArn: output.ModelArn !== undefined && output.ModelArn !== null ? output.ModelArn : undefined,
        ModelVersion: output.ModelVersion !== undefined && output.ModelVersion !== null ? output.ModelVersion : undefined,
        Performance: output.Performance !== undefined && output.Performance !== null
            ? deserializeAws_restJson1ModelPerformance(output.Performance, context)
            : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
        StatusMessage: output.StatusMessage !== undefined && output.StatusMessage !== null ? output.StatusMessage : undefined,
    };
};
const deserializeAws_restJson1ModelMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ModelMetadata(entry, context);
    });
};
const deserializeAws_restJson1ModelPerformance = (output, context) => {
    return {
        F1Score: output.F1Score !== undefined && output.F1Score !== null ? output.F1Score : undefined,
        Precision: output.Precision !== undefined && output.Precision !== null ? output.Precision : undefined,
        Recall: output.Recall !== undefined && output.Recall !== null ? output.Recall : undefined,
    };
};
const deserializeAws_restJson1OutputConfig = (output, context) => {
    return {
        S3Location: output.S3Location !== undefined && output.S3Location !== null
            ? deserializeAws_restJson1S3Location(output.S3Location, context)
            : undefined,
    };
};
const deserializeAws_restJson1OutputS3Object = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    };
};
const deserializeAws_restJson1ProjectDescription = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        Datasets: output.Datasets !== undefined && output.Datasets !== null
            ? deserializeAws_restJson1DatasetMetadataList(output.Datasets, context)
            : undefined,
        ProjectArn: output.ProjectArn !== undefined && output.ProjectArn !== null ? output.ProjectArn : undefined,
        ProjectName: output.ProjectName !== undefined && output.ProjectName !== null ? output.ProjectName : undefined,
    };
};
const deserializeAws_restJson1ProjectMetadata = (output, context) => {
    return {
        CreationTimestamp: output.CreationTimestamp !== undefined && output.CreationTimestamp !== null
            ? new Date(Math.round(output.CreationTimestamp * 1000))
            : undefined,
        ProjectArn: output.ProjectArn !== undefined && output.ProjectArn !== null ? output.ProjectArn : undefined,
        ProjectName: output.ProjectName !== undefined && output.ProjectName !== null ? output.ProjectName : undefined,
    };
};
const deserializeAws_restJson1ProjectMetadataList = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1ProjectMetadata(entry, context);
    });
};
const deserializeAws_restJson1S3Location = (output, context) => {
    return {
        Bucket: output.Bucket !== undefined && output.Bucket !== null ? output.Bucket : undefined,
        Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    };
};
const deserializeAws_restJson1Tag = (output, context) => {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
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