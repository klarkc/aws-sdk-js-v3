"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1ListSchemasCommand = exports.deserializeAws_restJson1ListRegistriesCommand = exports.deserializeAws_restJson1ListDiscoverersCommand = exports.deserializeAws_restJson1GetResourcePolicyCommand = exports.deserializeAws_restJson1GetDiscoveredSchemaCommand = exports.deserializeAws_restJson1GetCodeBindingSourceCommand = exports.deserializeAws_restJson1ExportSchemaCommand = exports.deserializeAws_restJson1DescribeSchemaCommand = exports.deserializeAws_restJson1DescribeRegistryCommand = exports.deserializeAws_restJson1DescribeDiscovererCommand = exports.deserializeAws_restJson1DescribeCodeBindingCommand = exports.deserializeAws_restJson1DeleteSchemaVersionCommand = exports.deserializeAws_restJson1DeleteSchemaCommand = exports.deserializeAws_restJson1DeleteResourcePolicyCommand = exports.deserializeAws_restJson1DeleteRegistryCommand = exports.deserializeAws_restJson1DeleteDiscovererCommand = exports.deserializeAws_restJson1CreateSchemaCommand = exports.deserializeAws_restJson1CreateRegistryCommand = exports.deserializeAws_restJson1CreateDiscovererCommand = exports.serializeAws_restJson1UpdateSchemaCommand = exports.serializeAws_restJson1UpdateRegistryCommand = exports.serializeAws_restJson1UpdateDiscovererCommand = exports.serializeAws_restJson1UntagResourceCommand = exports.serializeAws_restJson1TagResourceCommand = exports.serializeAws_restJson1StopDiscovererCommand = exports.serializeAws_restJson1StartDiscovererCommand = exports.serializeAws_restJson1SearchSchemasCommand = exports.serializeAws_restJson1PutResourcePolicyCommand = exports.serializeAws_restJson1PutCodeBindingCommand = exports.serializeAws_restJson1ListTagsForResourceCommand = exports.serializeAws_restJson1ListSchemaVersionsCommand = exports.serializeAws_restJson1ListSchemasCommand = exports.serializeAws_restJson1ListRegistriesCommand = exports.serializeAws_restJson1ListDiscoverersCommand = exports.serializeAws_restJson1GetResourcePolicyCommand = exports.serializeAws_restJson1GetDiscoveredSchemaCommand = exports.serializeAws_restJson1GetCodeBindingSourceCommand = exports.serializeAws_restJson1ExportSchemaCommand = exports.serializeAws_restJson1DescribeSchemaCommand = exports.serializeAws_restJson1DescribeRegistryCommand = exports.serializeAws_restJson1DescribeDiscovererCommand = exports.serializeAws_restJson1DescribeCodeBindingCommand = exports.serializeAws_restJson1DeleteSchemaVersionCommand = exports.serializeAws_restJson1DeleteSchemaCommand = exports.serializeAws_restJson1DeleteResourcePolicyCommand = exports.serializeAws_restJson1DeleteRegistryCommand = exports.serializeAws_restJson1DeleteDiscovererCommand = exports.serializeAws_restJson1CreateSchemaCommand = exports.serializeAws_restJson1CreateRegistryCommand = exports.serializeAws_restJson1CreateDiscovererCommand = void 0;
exports.deserializeAws_restJson1UpdateSchemaCommand = exports.deserializeAws_restJson1UpdateRegistryCommand = exports.deserializeAws_restJson1UpdateDiscovererCommand = exports.deserializeAws_restJson1UntagResourceCommand = exports.deserializeAws_restJson1TagResourceCommand = exports.deserializeAws_restJson1StopDiscovererCommand = exports.deserializeAws_restJson1StartDiscovererCommand = exports.deserializeAws_restJson1SearchSchemasCommand = exports.deserializeAws_restJson1PutResourcePolicyCommand = exports.deserializeAws_restJson1PutCodeBindingCommand = exports.deserializeAws_restJson1ListTagsForResourceCommand = exports.deserializeAws_restJson1ListSchemaVersionsCommand = void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const uuid_1 = require("uuid");
const serializeAws_restJson1CreateDiscovererCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/discoverers";
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.SourceArn !== undefined && input.SourceArn !== null && { SourceArn: input.SourceArn }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateDiscovererCommand = serializeAws_restJson1CreateDiscovererCommand;
const serializeAws_restJson1CreateRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/registries/name/{RegistryName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateRegistryCommand = serializeAws_restJson1CreateRegistryCommand;
const serializeAws_restJson1CreateSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
exports.serializeAws_restJson1CreateSchemaCommand = serializeAws_restJson1CreateSchemaCommand;
const serializeAws_restJson1DeleteDiscovererCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
    if (input.DiscovererId !== undefined) {
        const labelValue = input.DiscovererId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DiscovererId.");
        }
        resolvedPath = resolvedPath.replace("{DiscovererId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DiscovererId.");
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
exports.serializeAws_restJson1DeleteDiscovererCommand = serializeAws_restJson1DeleteDiscovererCommand;
const serializeAws_restJson1DeleteRegistryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
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
exports.serializeAws_restJson1DeleteRegistryCommand = serializeAws_restJson1DeleteRegistryCommand;
const serializeAws_restJson1DeleteResourcePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/policy";
    const query = {
        ...(input.RegistryName !== undefined && { registryName: input.RegistryName }),
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
exports.serializeAws_restJson1DeleteResourcePolicyCommand = serializeAws_restJson1DeleteResourcePolicyCommand;
const serializeAws_restJson1DeleteSchemaCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
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
exports.serializeAws_restJson1DeleteSchemaCommand = serializeAws_restJson1DeleteSchemaCommand;
const serializeAws_restJson1DeleteSchemaVersionCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    if (input.SchemaVersion !== undefined) {
        const labelValue = input.SchemaVersion;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaVersion.");
        }
        resolvedPath = resolvedPath.replace("{SchemaVersion}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaVersion.");
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
exports.serializeAws_restJson1DeleteSchemaVersionCommand = serializeAws_restJson1DeleteSchemaVersionCommand;
const serializeAws_restJson1DescribeCodeBindingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}";
    if (input.Language !== undefined) {
        const labelValue = input.Language;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Language.");
        }
        resolvedPath = resolvedPath.replace("{Language}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Language.");
    }
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.SchemaVersion !== undefined && { schemaVersion: input.SchemaVersion }),
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
exports.serializeAws_restJson1DescribeCodeBindingCommand = serializeAws_restJson1DescribeCodeBindingCommand;
const serializeAws_restJson1DescribeDiscovererCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
    if (input.DiscovererId !== undefined) {
        const labelValue = input.DiscovererId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DiscovererId.");
        }
        resolvedPath = resolvedPath.replace("{DiscovererId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DiscovererId.");
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
exports.serializeAws_restJson1DescribeDiscovererCommand = serializeAws_restJson1DescribeDiscovererCommand;
const serializeAws_restJson1DescribeRegistryCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
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
exports.serializeAws_restJson1DescribeRegistryCommand = serializeAws_restJson1DescribeRegistryCommand;
const serializeAws_restJson1DescribeSchemaCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.SchemaVersion !== undefined && { schemaVersion: input.SchemaVersion }),
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
exports.serializeAws_restJson1DescribeSchemaCommand = serializeAws_restJson1DescribeSchemaCommand;
const serializeAws_restJson1ExportSchemaCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.SchemaVersion !== undefined && { schemaVersion: input.SchemaVersion }),
        ...(input.Type !== undefined && { type: input.Type }),
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
exports.serializeAws_restJson1ExportSchemaCommand = serializeAws_restJson1ExportSchemaCommand;
const serializeAws_restJson1GetCodeBindingSourceCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source";
    if (input.Language !== undefined) {
        const labelValue = input.Language;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Language.");
        }
        resolvedPath = resolvedPath.replace("{Language}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Language.");
    }
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.SchemaVersion !== undefined && { schemaVersion: input.SchemaVersion }),
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
exports.serializeAws_restJson1GetCodeBindingSourceCommand = serializeAws_restJson1GetCodeBindingSourceCommand;
const serializeAws_restJson1GetDiscoveredSchemaCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/discover";
    let body;
    body = JSON.stringify({
        ...(input.Events !== undefined &&
            input.Events !== null && {
            Events: serializeAws_restJson1__listOfGetDiscoveredSchemaVersionItemInput(input.Events, context),
        }),
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
exports.serializeAws_restJson1GetDiscoveredSchemaCommand = serializeAws_restJson1GetDiscoveredSchemaCommand;
const serializeAws_restJson1GetResourcePolicyCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/policy";
    const query = {
        ...(input.RegistryName !== undefined && { registryName: input.RegistryName }),
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
exports.serializeAws_restJson1GetResourcePolicyCommand = serializeAws_restJson1GetResourcePolicyCommand;
const serializeAws_restJson1ListDiscoverersCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/discoverers";
    const query = {
        ...(input.DiscovererIdPrefix !== undefined && { discovererIdPrefix: input.DiscovererIdPrefix }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.SourceArnPrefix !== undefined && { sourceArnPrefix: input.SourceArnPrefix }),
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
exports.serializeAws_restJson1ListDiscoverersCommand = serializeAws_restJson1ListDiscoverersCommand;
const serializeAws_restJson1ListRegistriesCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries";
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.RegistryNamePrefix !== undefined && { registryNamePrefix: input.RegistryNamePrefix }),
        ...(input.Scope !== undefined && { scope: input.Scope }),
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
exports.serializeAws_restJson1ListRegistriesCommand = serializeAws_restJson1ListRegistriesCommand;
const serializeAws_restJson1ListSchemasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
        ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
        ...(input.SchemaNamePrefix !== undefined && { schemaNamePrefix: input.SchemaNamePrefix }),
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
exports.serializeAws_restJson1ListSchemasCommand = serializeAws_restJson1ListSchemasCommand;
const serializeAws_restJson1ListSchemaVersionsCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
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
exports.serializeAws_restJson1ListSchemaVersionsCommand = serializeAws_restJson1ListSchemaVersionsCommand;
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
const serializeAws_restJson1PutCodeBindingCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}";
    if (input.Language !== undefined) {
        const labelValue = input.Language;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: Language.");
        }
        resolvedPath = resolvedPath.replace("{Language}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: Language.");
    }
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    const query = {
        ...(input.SchemaVersion !== undefined && { schemaVersion: input.SchemaVersion }),
    };
    let body;
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
exports.serializeAws_restJson1PutCodeBindingCommand = serializeAws_restJson1PutCodeBindingCommand;
const serializeAws_restJson1PutResourcePolicyCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/policy";
    const query = {
        ...(input.RegistryName !== undefined && { registryName: input.RegistryName }),
    };
    let body;
    body = JSON.stringify({
        ...(input.Policy !== undefined && input.Policy !== null && { Policy: smithy_client_1.LazyJsonString.fromObject(input.Policy) }),
        ...(input.RevisionId !== undefined && input.RevisionId !== null && { RevisionId: input.RevisionId }),
    });
    const { hostname, protocol = "https", port } = await context.endpoint();
    return new protocol_http_1.HttpRequest({
        protocol,
        hostname,
        port,
        method: "PUT",
        headers,
        path: resolvedPath,
        query,
        body,
    });
};
exports.serializeAws_restJson1PutResourcePolicyCommand = serializeAws_restJson1PutResourcePolicyCommand;
const serializeAws_restJson1SearchSchemasCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/search";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    const query = {
        ...(input.Keywords !== undefined && { keywords: input.Keywords }),
        ...(input.Limit !== undefined && { limit: input.Limit.toString() }),
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
exports.serializeAws_restJson1SearchSchemasCommand = serializeAws_restJson1SearchSchemasCommand;
const serializeAws_restJson1StartDiscovererCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/discoverers/id/{DiscovererId}/start";
    if (input.DiscovererId !== undefined) {
        const labelValue = input.DiscovererId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DiscovererId.");
        }
        resolvedPath = resolvedPath.replace("{DiscovererId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DiscovererId.");
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
exports.serializeAws_restJson1StartDiscovererCommand = serializeAws_restJson1StartDiscovererCommand;
const serializeAws_restJson1StopDiscovererCommand = async (input, context) => {
    const headers = {};
    let resolvedPath = "/v1/discoverers/id/{DiscovererId}/stop";
    if (input.DiscovererId !== undefined) {
        const labelValue = input.DiscovererId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DiscovererId.");
        }
        resolvedPath = resolvedPath.replace("{DiscovererId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DiscovererId.");
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
exports.serializeAws_restJson1StopDiscovererCommand = serializeAws_restJson1StopDiscovererCommand;
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
        ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
const serializeAws_restJson1UpdateDiscovererCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
    if (input.DiscovererId !== undefined) {
        const labelValue = input.DiscovererId;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: DiscovererId.");
        }
        resolvedPath = resolvedPath.replace("{DiscovererId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: DiscovererId.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
exports.serializeAws_restJson1UpdateDiscovererCommand = serializeAws_restJson1UpdateDiscovererCommand;
const serializeAws_restJson1UpdateRegistryCommand = async (input, context) => {
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/registries/name/{RegistryName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    let body;
    body = JSON.stringify({
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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
exports.serializeAws_restJson1UpdateRegistryCommand = serializeAws_restJson1UpdateRegistryCommand;
const serializeAws_restJson1UpdateSchemaCommand = async (input, context) => {
    var _a;
    const headers = {
        "content-type": "application/json",
    };
    let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
    if (input.RegistryName !== undefined) {
        const labelValue = input.RegistryName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: RegistryName.");
        }
        resolvedPath = resolvedPath.replace("{RegistryName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: RegistryName.");
    }
    if (input.SchemaName !== undefined) {
        const labelValue = input.SchemaName;
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: SchemaName.");
        }
        resolvedPath = resolvedPath.replace("{SchemaName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: SchemaName.");
    }
    let body;
    body = JSON.stringify({
        ClientTokenId: (_a = input.ClientTokenId) !== null && _a !== void 0 ? _a : uuid_1.v4(),
        ...(input.Content !== undefined && input.Content !== null && { Content: input.Content }),
        ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
        ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
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
exports.serializeAws_restJson1UpdateSchemaCommand = serializeAws_restJson1UpdateSchemaCommand;
const deserializeAws_restJson1CreateDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        DiscovererArn: undefined,
        DiscovererId: undefined,
        SourceArn: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
        contents.DiscovererArn = data.DiscovererArn;
    }
    if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
        contents.DiscovererId = data.DiscovererId;
    }
    if (data.SourceArn !== undefined && data.SourceArn !== null) {
        contents.SourceArn = data.SourceArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDiscovererCommand = deserializeAws_restJson1CreateDiscovererCommand;
const deserializeAws_restJson1CreateDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.schemas#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateRegistryCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateRegistryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        RegistryArn: undefined,
        RegistryName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
        contents.RegistryArn = data.RegistryArn;
    }
    if (data.RegistryName !== undefined && data.RegistryName !== null) {
        contents.RegistryName = data.RegistryName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRegistryCommand = deserializeAws_restJson1CreateRegistryCommand;
const deserializeAws_restJson1CreateRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ConflictException":
        case "com.amazonaws.schemas#ConflictException":
            response = {
                ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1CreateSchemaCommand = async (output, context) => {
    if (output.statusCode !== 201 && output.statusCode >= 300) {
        return deserializeAws_restJson1CreateSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        LastModified: undefined,
        SchemaArn: undefined,
        SchemaName: undefined,
        SchemaVersion: undefined,
        Tags: undefined,
        Type: undefined,
        VersionCreatedDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(data.LastModified);
    }
    if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
        contents.SchemaArn = data.SchemaArn;
    }
    if (data.SchemaName !== undefined && data.SchemaName !== null) {
        contents.SchemaName = data.SchemaName;
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.VersionCreatedDate !== undefined && data.VersionCreatedDate !== null) {
        contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateSchemaCommand = deserializeAws_restJson1CreateSchemaCommand;
const deserializeAws_restJson1CreateSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
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
const deserializeAws_restJson1DeleteDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDiscovererCommand = deserializeAws_restJson1DeleteDiscovererCommand;
const deserializeAws_restJson1DeleteDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteRegistryCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteRegistryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRegistryCommand = deserializeAws_restJson1DeleteRegistryCommand;
const deserializeAws_restJson1DeleteRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResourcePolicyCommand = deserializeAws_restJson1DeleteResourcePolicyCommand;
const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSchemaCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSchemaCommand = deserializeAws_restJson1DeleteSchemaCommand;
const deserializeAws_restJson1DeleteSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DeleteSchemaVersionCommand = async (output, context) => {
    if (output.statusCode !== 204 && output.statusCode >= 300) {
        return deserializeAws_restJson1DeleteSchemaVersionCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
    };
    await collectBody(output.body, context);
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteSchemaVersionCommand = deserializeAws_restJson1DeleteSchemaVersionCommand;
const deserializeAws_restJson1DeleteSchemaVersionCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeCodeBindingCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeCodeBindingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationDate: undefined,
        LastModified: undefined,
        SchemaVersion: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = new Date(data.CreationDate);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(data.LastModified);
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeCodeBindingCommand = deserializeAws_restJson1DescribeCodeBindingCommand;
const deserializeAws_restJson1DescribeCodeBindingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.schemas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        DiscovererArn: undefined,
        DiscovererId: undefined,
        SourceArn: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
        contents.DiscovererArn = data.DiscovererArn;
    }
    if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
        contents.DiscovererId = data.DiscovererId;
    }
    if (data.SourceArn !== undefined && data.SourceArn !== null) {
        contents.SourceArn = data.SourceArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeDiscovererCommand = deserializeAws_restJson1DescribeDiscovererCommand;
const deserializeAws_restJson1DescribeDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeRegistryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeRegistryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        RegistryArn: undefined,
        RegistryName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
        contents.RegistryArn = data.RegistryArn;
    }
    if (data.RegistryName !== undefined && data.RegistryName !== null) {
        contents.RegistryName = data.RegistryName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeRegistryCommand = deserializeAws_restJson1DescribeRegistryCommand;
const deserializeAws_restJson1DescribeRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1DescribeSchemaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1DescribeSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Content: undefined,
        Description: undefined,
        LastModified: undefined,
        SchemaArn: undefined,
        SchemaName: undefined,
        SchemaVersion: undefined,
        Tags: undefined,
        Type: undefined,
        VersionCreatedDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = data.Content;
    }
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(data.LastModified);
    }
    if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
        contents.SchemaArn = data.SchemaArn;
    }
    if (data.SchemaName !== undefined && data.SchemaName !== null) {
        contents.SchemaName = data.SchemaName;
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.VersionCreatedDate !== undefined && data.VersionCreatedDate !== null) {
        contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DescribeSchemaCommand = deserializeAws_restJson1DescribeSchemaCommand;
const deserializeAws_restJson1DescribeSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ExportSchemaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ExportSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Content: undefined,
        SchemaArn: undefined,
        SchemaName: undefined,
        SchemaVersion: undefined,
        Type: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = data.Content;
    }
    if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
        contents.SchemaArn = data.SchemaArn;
    }
    if (data.SchemaName !== undefined && data.SchemaName !== null) {
        contents.SchemaName = data.SchemaName;
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExportSchemaCommand = deserializeAws_restJson1ExportSchemaCommand;
const deserializeAws_restJson1ExportSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.schemas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetCodeBindingSourceCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetCodeBindingSourceCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Body: undefined,
    };
    const data = await collectBody(output.body, context);
    contents.Body = data;
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetCodeBindingSourceCommand = deserializeAws_restJson1GetCodeBindingSourceCommand;
const deserializeAws_restJson1GetCodeBindingSourceCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.schemas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetDiscoveredSchemaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetDiscoveredSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Content: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Content !== undefined && data.Content !== null) {
        contents.Content = data.Content;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDiscoveredSchemaCommand = deserializeAws_restJson1GetDiscoveredSchemaCommand;
const deserializeAws_restJson1GetDiscoveredSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1GetResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1GetResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
        RevisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = new smithy_client_1.LazyJsonString(data.Policy);
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResourcePolicyCommand = deserializeAws_restJson1GetResourcePolicyCommand;
const deserializeAws_restJson1GetResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListDiscoverersCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListDiscoverersCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Discoverers: undefined,
        NextToken: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Discoverers !== undefined && data.Discoverers !== null) {
        contents.Discoverers = deserializeAws_restJson1__listOfDiscovererSummary(data.Discoverers, context);
    }
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDiscoverersCommand = deserializeAws_restJson1ListDiscoverersCommand;
const deserializeAws_restJson1ListDiscoverersCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListRegistriesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListRegistriesCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Registries: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Registries !== undefined && data.Registries !== null) {
        contents.Registries = deserializeAws_restJson1__listOfRegistrySummary(data.Registries, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListRegistriesCommand = deserializeAws_restJson1ListRegistriesCommand;
const deserializeAws_restJson1ListRegistriesCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSchemasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSchemasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Schemas: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Schemas !== undefined && data.Schemas !== null) {
        contents.Schemas = deserializeAws_restJson1__listOfSchemaSummary(data.Schemas, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSchemasCommand = deserializeAws_restJson1ListSchemasCommand;
const deserializeAws_restJson1ListSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1ListSchemaVersionsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1ListSchemaVersionsCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        SchemaVersions: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.SchemaVersions !== undefined && data.SchemaVersions !== null) {
        contents.SchemaVersions = deserializeAws_restJson1__listOfSchemaVersionSummary(data.SchemaVersions, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListSchemaVersionsCommand = deserializeAws_restJson1ListSchemaVersionsCommand;
const deserializeAws_restJson1ListSchemaVersionsCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
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
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutCodeBindingCommand = async (output, context) => {
    if (output.statusCode !== 202 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutCodeBindingCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        CreationDate: undefined,
        LastModified: undefined,
        SchemaVersion: undefined,
        Status: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.CreationDate !== undefined && data.CreationDate !== null) {
        contents.CreationDate = new Date(data.CreationDate);
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(data.LastModified);
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.Status !== undefined && data.Status !== null) {
        contents.Status = data.Status;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutCodeBindingCommand = deserializeAws_restJson1PutCodeBindingCommand;
const deserializeAws_restJson1PutCodeBindingCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "GoneException":
        case "com.amazonaws.schemas#GoneException":
            response = {
                ...(await deserializeAws_restJson1GoneExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "TooManyRequestsException":
        case "com.amazonaws.schemas#TooManyRequestsException":
            response = {
                ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1PutResourcePolicyCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Policy: undefined,
        RevisionId: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Policy !== undefined && data.Policy !== null) {
        contents.Policy = new smithy_client_1.LazyJsonString(data.Policy);
    }
    if (data.RevisionId !== undefined && data.RevisionId !== null) {
        contents.RevisionId = data.RevisionId;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1PutResourcePolicyCommand = deserializeAws_restJson1PutResourcePolicyCommand;
const deserializeAws_restJson1PutResourcePolicyCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "PreconditionFailedException":
        case "com.amazonaws.schemas#PreconditionFailedException":
            response = {
                ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1SearchSchemasCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1SearchSchemasCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        NextToken: undefined,
        Schemas: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.NextToken !== undefined && data.NextToken !== null) {
        contents.NextToken = data.NextToken;
    }
    if (data.Schemas !== undefined && data.Schemas !== null) {
        contents.Schemas = deserializeAws_restJson1__listOfSearchSchemaSummary(data.Schemas, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1SearchSchemasCommand = deserializeAws_restJson1SearchSchemasCommand;
const deserializeAws_restJson1SearchSchemasCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StartDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StartDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DiscovererId: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
        contents.DiscovererId = data.DiscovererId;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartDiscovererCommand = deserializeAws_restJson1StartDiscovererCommand;
const deserializeAws_restJson1StartDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1StopDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1StopDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        DiscovererId: undefined,
        State: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
        contents.DiscovererId = data.DiscovererId;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StopDiscovererCommand = deserializeAws_restJson1StopDiscovererCommand;
const deserializeAws_restJson1StopDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateDiscovererCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateDiscovererCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        DiscovererArn: undefined,
        DiscovererId: undefined,
        SourceArn: undefined,
        State: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
        contents.DiscovererArn = data.DiscovererArn;
    }
    if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
        contents.DiscovererId = data.DiscovererId;
    }
    if (data.SourceArn !== undefined && data.SourceArn !== null) {
        contents.SourceArn = data.SourceArn;
    }
    if (data.State !== undefined && data.State !== null) {
        contents.State = data.State;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDiscovererCommand = deserializeAws_restJson1UpdateDiscovererCommand;
const deserializeAws_restJson1UpdateDiscovererCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateRegistryCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateRegistryCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        RegistryArn: undefined,
        RegistryName: undefined,
        Tags: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
        contents.RegistryArn = data.RegistryArn;
    }
    if (data.RegistryName !== undefined && data.RegistryName !== null) {
        contents.RegistryName = data.RegistryName;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRegistryCommand = deserializeAws_restJson1UpdateRegistryCommand;
const deserializeAws_restJson1UpdateRegistryCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
            response = {
                ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "UnauthorizedException":
        case "com.amazonaws.schemas#UnauthorizedException":
            response = {
                ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
const deserializeAws_restJson1UpdateSchemaCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return deserializeAws_restJson1UpdateSchemaCommandError(output, context);
    }
    const contents = {
        $metadata: deserializeMetadata(output),
        Description: undefined,
        LastModified: undefined,
        SchemaArn: undefined,
        SchemaName: undefined,
        SchemaVersion: undefined,
        Tags: undefined,
        Type: undefined,
        VersionCreatedDate: undefined,
    };
    const data = await parseBody(output.body, context);
    if (data.Description !== undefined && data.Description !== null) {
        contents.Description = data.Description;
    }
    if (data.LastModified !== undefined && data.LastModified !== null) {
        contents.LastModified = new Date(data.LastModified);
    }
    if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
        contents.SchemaArn = data.SchemaArn;
    }
    if (data.SchemaName !== undefined && data.SchemaName !== null) {
        contents.SchemaName = data.SchemaName;
    }
    if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
        contents.SchemaVersion = data.SchemaVersion;
    }
    if (data.tags !== undefined && data.tags !== null) {
        contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
    }
    if (data.Type !== undefined && data.Type !== null) {
        contents.Type = data.Type;
    }
    if (data.VersionCreatedDate !== undefined && data.VersionCreatedDate !== null) {
        contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
    }
    return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateSchemaCommand = deserializeAws_restJson1UpdateSchemaCommand;
const deserializeAws_restJson1UpdateSchemaCommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await parseBody(output.body, context),
    };
    let response;
    let errorCode = "UnknownError";
    errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "BadRequestException":
        case "com.amazonaws.schemas#BadRequestException":
            response = {
                ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ForbiddenException":
        case "com.amazonaws.schemas#ForbiddenException":
            response = {
                ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "InternalServerErrorException":
        case "com.amazonaws.schemas#InternalServerErrorException":
            response = {
                ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "NotFoundException":
        case "com.amazonaws.schemas#NotFoundException":
            response = {
                ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
                name: errorCode,
                $metadata: deserializeMetadata(output),
            };
            break;
        case "ServiceUnavailableException":
        case "com.amazonaws.schemas#ServiceUnavailableException":
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "BadRequestException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
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
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ForbiddenExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ForbiddenException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1GoneExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "GoneException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "InternalServerErrorException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "NotFoundException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "PreconditionFailedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "ServiceUnavailableException",
        $fault: "server",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "TooManyRequestsException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
    const contents = {
        name: "UnauthorizedException",
        $fault: "client",
        $metadata: deserializeMetadata(parsedOutput),
        Code: undefined,
        Message: undefined,
    };
    const data = parsedOutput.body;
    if (data.Code !== undefined && data.Code !== null) {
        contents.Code = data.Code;
    }
    if (data.Message !== undefined && data.Message !== null) {
        contents.Message = data.Message;
    }
    return contents;
};
const serializeAws_restJson1__listOfGetDiscoveredSchemaVersionItemInput = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return entry;
    });
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
const deserializeAws_restJson1__listOfDiscovererSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1DiscovererSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfRegistrySummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1RegistrySummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfSchemaSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SchemaSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfSchemaVersionSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SchemaVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfSearchSchemaSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchSchemaSummary(entry, context);
    });
};
const deserializeAws_restJson1__listOfSearchSchemaVersionSummary = (output, context) => {
    return (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        if (entry === null) {
            return null;
        }
        return deserializeAws_restJson1SearchSchemaVersionSummary(entry, context);
    });
};
const deserializeAws_restJson1DiscovererSummary = (output, context) => {
    return {
        DiscovererArn: output.DiscovererArn !== undefined && output.DiscovererArn !== null ? output.DiscovererArn : undefined,
        DiscovererId: output.DiscovererId !== undefined && output.DiscovererId !== null ? output.DiscovererId : undefined,
        SourceArn: output.SourceArn !== undefined && output.SourceArn !== null ? output.SourceArn : undefined,
        State: output.State !== undefined && output.State !== null ? output.State : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1RegistrySummary = (output, context) => {
    return {
        RegistryArn: output.RegistryArn !== undefined && output.RegistryArn !== null ? output.RegistryArn : undefined,
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
    };
};
const deserializeAws_restJson1SchemaSummary = (output, context) => {
    return {
        LastModified: output.LastModified !== undefined && output.LastModified !== null ? new Date(output.LastModified) : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        Tags: output.tags !== undefined && output.tags !== null
            ? deserializeAws_restJson1Tags(output.tags, context)
            : undefined,
        VersionCount: output.VersionCount !== undefined && output.VersionCount !== null ? output.VersionCount : undefined,
    };
};
const deserializeAws_restJson1SchemaVersionSummary = (output, context) => {
    return {
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaVersion: output.SchemaVersion !== undefined && output.SchemaVersion !== null ? output.SchemaVersion : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
};
const deserializeAws_restJson1SearchSchemaSummary = (output, context) => {
    return {
        RegistryName: output.RegistryName !== undefined && output.RegistryName !== null ? output.RegistryName : undefined,
        SchemaArn: output.SchemaArn !== undefined && output.SchemaArn !== null ? output.SchemaArn : undefined,
        SchemaName: output.SchemaName !== undefined && output.SchemaName !== null ? output.SchemaName : undefined,
        SchemaVersions: output.SchemaVersions !== undefined && output.SchemaVersions !== null
            ? deserializeAws_restJson1__listOfSearchSchemaVersionSummary(output.SchemaVersions, context)
            : undefined,
    };
};
const deserializeAws_restJson1SearchSchemaVersionSummary = (output, context) => {
    return {
        CreatedDate: output.CreatedDate !== undefined && output.CreatedDate !== null ? new Date(output.CreatedDate) : undefined,
        SchemaVersion: output.SchemaVersion !== undefined && output.SchemaVersion !== null ? output.SchemaVersion : undefined,
        Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    };
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