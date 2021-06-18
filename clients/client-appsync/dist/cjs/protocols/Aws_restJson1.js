"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializeAws_restJson1DeleteApiKeyCommand =
  exports.deserializeAws_restJson1DeleteApiCacheCommand =
  exports.deserializeAws_restJson1CreateTypeCommand =
  exports.deserializeAws_restJson1CreateResolverCommand =
  exports.deserializeAws_restJson1CreateGraphqlApiCommand =
  exports.deserializeAws_restJson1CreateFunctionCommand =
  exports.deserializeAws_restJson1CreateDataSourceCommand =
  exports.deserializeAws_restJson1CreateApiKeyCommand =
  exports.deserializeAws_restJson1CreateApiCacheCommand =
  exports.serializeAws_restJson1UpdateTypeCommand =
  exports.serializeAws_restJson1UpdateResolverCommand =
  exports.serializeAws_restJson1UpdateGraphqlApiCommand =
  exports.serializeAws_restJson1UpdateFunctionCommand =
  exports.serializeAws_restJson1UpdateDataSourceCommand =
  exports.serializeAws_restJson1UpdateApiKeyCommand =
  exports.serializeAws_restJson1UpdateApiCacheCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1StartSchemaCreationCommand =
  exports.serializeAws_restJson1ListTypesCommand =
  exports.serializeAws_restJson1ListTagsForResourceCommand =
  exports.serializeAws_restJson1ListResolversByFunctionCommand =
  exports.serializeAws_restJson1ListResolversCommand =
  exports.serializeAws_restJson1ListGraphqlApisCommand =
  exports.serializeAws_restJson1ListFunctionsCommand =
  exports.serializeAws_restJson1ListDataSourcesCommand =
  exports.serializeAws_restJson1ListApiKeysCommand =
  exports.serializeAws_restJson1GetTypeCommand =
  exports.serializeAws_restJson1GetSchemaCreationStatusCommand =
  exports.serializeAws_restJson1GetResolverCommand =
  exports.serializeAws_restJson1GetIntrospectionSchemaCommand =
  exports.serializeAws_restJson1GetGraphqlApiCommand =
  exports.serializeAws_restJson1GetFunctionCommand =
  exports.serializeAws_restJson1GetDataSourceCommand =
  exports.serializeAws_restJson1GetApiCacheCommand =
  exports.serializeAws_restJson1FlushApiCacheCommand =
  exports.serializeAws_restJson1DeleteTypeCommand =
  exports.serializeAws_restJson1DeleteResolverCommand =
  exports.serializeAws_restJson1DeleteGraphqlApiCommand =
  exports.serializeAws_restJson1DeleteFunctionCommand =
  exports.serializeAws_restJson1DeleteDataSourceCommand =
  exports.serializeAws_restJson1DeleteApiKeyCommand =
  exports.serializeAws_restJson1DeleteApiCacheCommand =
  exports.serializeAws_restJson1CreateTypeCommand =
  exports.serializeAws_restJson1CreateResolverCommand =
  exports.serializeAws_restJson1CreateGraphqlApiCommand =
  exports.serializeAws_restJson1CreateFunctionCommand =
  exports.serializeAws_restJson1CreateDataSourceCommand =
  exports.serializeAws_restJson1CreateApiKeyCommand =
  exports.serializeAws_restJson1CreateApiCacheCommand =
    void 0;
exports.deserializeAws_restJson1UpdateTypeCommand =
  exports.deserializeAws_restJson1UpdateResolverCommand =
  exports.deserializeAws_restJson1UpdateGraphqlApiCommand =
  exports.deserializeAws_restJson1UpdateFunctionCommand =
  exports.deserializeAws_restJson1UpdateDataSourceCommand =
  exports.deserializeAws_restJson1UpdateApiKeyCommand =
  exports.deserializeAws_restJson1UpdateApiCacheCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1StartSchemaCreationCommand =
  exports.deserializeAws_restJson1ListTypesCommand =
  exports.deserializeAws_restJson1ListTagsForResourceCommand =
  exports.deserializeAws_restJson1ListResolversByFunctionCommand =
  exports.deserializeAws_restJson1ListResolversCommand =
  exports.deserializeAws_restJson1ListGraphqlApisCommand =
  exports.deserializeAws_restJson1ListFunctionsCommand =
  exports.deserializeAws_restJson1ListDataSourcesCommand =
  exports.deserializeAws_restJson1ListApiKeysCommand =
  exports.deserializeAws_restJson1GetTypeCommand =
  exports.deserializeAws_restJson1GetSchemaCreationStatusCommand =
  exports.deserializeAws_restJson1GetResolverCommand =
  exports.deserializeAws_restJson1GetIntrospectionSchemaCommand =
  exports.deserializeAws_restJson1GetGraphqlApiCommand =
  exports.deserializeAws_restJson1GetFunctionCommand =
  exports.deserializeAws_restJson1GetDataSourceCommand =
  exports.deserializeAws_restJson1GetApiCacheCommand =
  exports.deserializeAws_restJson1FlushApiCacheCommand =
  exports.deserializeAws_restJson1DeleteTypeCommand =
  exports.deserializeAws_restJson1DeleteResolverCommand =
  exports.deserializeAws_restJson1DeleteGraphqlApiCommand =
  exports.deserializeAws_restJson1DeleteFunctionCommand =
  exports.deserializeAws_restJson1DeleteDataSourceCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateApiCacheCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.apiCachingBehavior !== undefined &&
      input.apiCachingBehavior !== null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.atRestEncryptionEnabled !== undefined &&
      input.atRestEncryptionEnabled !== null && { atRestEncryptionEnabled: input.atRestEncryptionEnabled }),
    ...(input.transitEncryptionEnabled !== undefined &&
      input.transitEncryptionEnabled !== null && { transitEncryptionEnabled: input.transitEncryptionEnabled }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
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
exports.serializeAws_restJson1CreateApiCacheCommand = serializeAws_restJson1CreateApiCacheCommand;
const serializeAws_restJson1CreateApiKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/apikeys";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.expires !== undefined && input.expires !== null && { expires: input.expires }),
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
exports.serializeAws_restJson1CreateApiKeyCommand = serializeAws_restJson1CreateApiKeyCommand;
const serializeAws_restJson1CreateDataSourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/datasources";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dynamodbConfig !== undefined &&
      input.dynamodbConfig !== null && {
        dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
      }),
    ...(input.elasticsearchConfig !== undefined &&
      input.elasticsearchConfig !== null && {
        elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
      }),
    ...(input.httpConfig !== undefined &&
      input.httpConfig !== null && {
        httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
      }),
    ...(input.lambdaConfig !== undefined &&
      input.lambdaConfig !== null && {
        lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.relationalDatabaseConfig !== undefined &&
      input.relationalDatabaseConfig !== null && {
        relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
          input.relationalDatabaseConfig,
          context
        ),
      }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
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
exports.serializeAws_restJson1CreateDataSourceCommand = serializeAws_restJson1CreateDataSourceCommand;
const serializeAws_restJson1CreateFunctionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/functions";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.functionVersion !== undefined &&
      input.functionVersion !== null && { functionVersion: input.functionVersion }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
exports.serializeAws_restJson1CreateFunctionCommand = serializeAws_restJson1CreateFunctionCommand;
const serializeAws_restJson1CreateGraphqlApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis";
  let body;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders !== undefined &&
      input.additionalAuthenticationProviders !== null && {
        additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
          input.additionalAuthenticationProviders,
          context
        ),
      }),
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.logConfig !== undefined &&
      input.logConfig !== null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
        userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
      }),
    ...(input.xrayEnabled !== undefined && input.xrayEnabled !== null && { xrayEnabled: input.xrayEnabled }),
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
exports.serializeAws_restJson1CreateGraphqlApiCommand = serializeAws_restJson1CreateGraphqlApiCommand;
const serializeAws_restJson1CreateResolverCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.cachingConfig !== undefined &&
      input.cachingConfig !== null && {
        cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
      }),
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.fieldName !== undefined && input.fieldName !== null && { fieldName: input.fieldName }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.pipelineConfig !== undefined &&
      input.pipelineConfig !== null && {
        pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
      }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
exports.serializeAws_restJson1CreateResolverCommand = serializeAws_restJson1CreateResolverCommand;
const serializeAws_restJson1CreateTypeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/types";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
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
exports.serializeAws_restJson1CreateTypeCommand = serializeAws_restJson1CreateTypeCommand;
const serializeAws_restJson1DeleteApiCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1DeleteApiCacheCommand = serializeAws_restJson1DeleteApiCacheCommand;
const serializeAws_restJson1DeleteApiKeyCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/apikeys/{id}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
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
exports.serializeAws_restJson1DeleteApiKeyCommand = serializeAws_restJson1DeleteApiKeyCommand;
const serializeAws_restJson1DeleteDataSourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
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
exports.serializeAws_restJson1DeleteDataSourceCommand = serializeAws_restJson1DeleteDataSourceCommand;
const serializeAws_restJson1DeleteFunctionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
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
exports.serializeAws_restJson1DeleteFunctionCommand = serializeAws_restJson1DeleteFunctionCommand;
const serializeAws_restJson1DeleteGraphqlApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1DeleteGraphqlApiCommand = serializeAws_restJson1DeleteGraphqlApiCommand;
const serializeAws_restJson1DeleteResolverCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
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
exports.serializeAws_restJson1DeleteResolverCommand = serializeAws_restJson1DeleteResolverCommand;
const serializeAws_restJson1DeleteTypeCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
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
exports.serializeAws_restJson1DeleteTypeCommand = serializeAws_restJson1DeleteTypeCommand;
const serializeAws_restJson1FlushApiCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/FlushCache";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1FlushApiCacheCommand = serializeAws_restJson1FlushApiCacheCommand;
const serializeAws_restJson1GetApiCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/ApiCaches";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1GetApiCacheCommand = serializeAws_restJson1GetApiCacheCommand;
const serializeAws_restJson1GetDataSourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
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
exports.serializeAws_restJson1GetDataSourceCommand = serializeAws_restJson1GetDataSourceCommand;
const serializeAws_restJson1GetFunctionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
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
exports.serializeAws_restJson1GetFunctionCommand = serializeAws_restJson1GetFunctionCommand;
const serializeAws_restJson1GetGraphqlApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1GetGraphqlApiCommand = serializeAws_restJson1GetGraphqlApiCommand;
const serializeAws_restJson1GetIntrospectionSchemaCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/schema";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query = {
    ...(input.format !== undefined && { format: input.format }),
    ...(input.includeDirectives !== undefined && { includeDirectives: input.includeDirectives.toString() }),
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
exports.serializeAws_restJson1GetIntrospectionSchemaCommand = serializeAws_restJson1GetIntrospectionSchemaCommand;
const serializeAws_restJson1GetResolverCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
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
exports.serializeAws_restJson1GetResolverCommand = serializeAws_restJson1GetResolverCommand;
const serializeAws_restJson1GetSchemaCreationStatusCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/schemacreation";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
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
exports.serializeAws_restJson1GetSchemaCreationStatusCommand = serializeAws_restJson1GetSchemaCreationStatusCommand;
const serializeAws_restJson1GetTypeCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  const query = {
    ...(input.format !== undefined && { format: input.format }),
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
exports.serializeAws_restJson1GetTypeCommand = serializeAws_restJson1GetTypeCommand;
const serializeAws_restJson1ListApiKeysCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/apikeys";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
exports.serializeAws_restJson1ListApiKeysCommand = serializeAws_restJson1ListApiKeysCommand;
const serializeAws_restJson1ListDataSourcesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/datasources";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
exports.serializeAws_restJson1ListDataSourcesCommand = serializeAws_restJson1ListDataSourcesCommand;
const serializeAws_restJson1ListFunctionsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/functions";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
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
exports.serializeAws_restJson1ListFunctionsCommand = serializeAws_restJson1ListFunctionsCommand;
const serializeAws_restJson1ListGraphqlApisCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis";
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
exports.serializeAws_restJson1ListGraphqlApisCommand = serializeAws_restJson1ListGraphqlApisCommand;
const serializeAws_restJson1ListResolversCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
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
exports.serializeAws_restJson1ListResolversCommand = serializeAws_restJson1ListResolversCommand;
const serializeAws_restJson1ListResolversByFunctionCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/functions/{functionId}/resolvers";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
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
exports.serializeAws_restJson1ListResolversByFunctionCommand = serializeAws_restJson1ListResolversByFunctionCommand;
const serializeAws_restJson1ListTagsForResourceCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
const serializeAws_restJson1ListTypesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v1/apis/{apiId}/types";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  const query = {
    ...(input.format !== undefined && { format: input.format }),
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
exports.serializeAws_restJson1ListTypesCommand = serializeAws_restJson1ListTypesCommand;
const serializeAws_restJson1StartSchemaCreationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/schemacreation";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.definition !== undefined &&
      input.definition !== null && { definition: context.base64Encoder(input.definition) }),
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
exports.serializeAws_restJson1StartSchemaCreationCommand = serializeAws_restJson1StartSchemaCreationCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
  let resolvedPath = "/v1/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
const serializeAws_restJson1UpdateApiCacheCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/ApiCaches/update";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.apiCachingBehavior !== undefined &&
      input.apiCachingBehavior !== null && { apiCachingBehavior: input.apiCachingBehavior }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
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
exports.serializeAws_restJson1UpdateApiCacheCommand = serializeAws_restJson1UpdateApiCacheCommand;
const serializeAws_restJson1UpdateApiKeyCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/apikeys/{id}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.id !== undefined) {
    const labelValue = input.id;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: id.");
    }
    resolvedPath = resolvedPath.replace("{id}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: id.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.expires !== undefined && input.expires !== null && { expires: input.expires }),
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
exports.serializeAws_restJson1UpdateApiKeyCommand = serializeAws_restJson1UpdateApiKeyCommand;
const serializeAws_restJson1UpdateDataSourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/datasources/{name}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.name !== undefined) {
    const labelValue = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dynamodbConfig !== undefined &&
      input.dynamodbConfig !== null && {
        dynamodbConfig: serializeAws_restJson1DynamodbDataSourceConfig(input.dynamodbConfig, context),
      }),
    ...(input.elasticsearchConfig !== undefined &&
      input.elasticsearchConfig !== null && {
        elasticsearchConfig: serializeAws_restJson1ElasticsearchDataSourceConfig(input.elasticsearchConfig, context),
      }),
    ...(input.httpConfig !== undefined &&
      input.httpConfig !== null && {
        httpConfig: serializeAws_restJson1HttpDataSourceConfig(input.httpConfig, context),
      }),
    ...(input.lambdaConfig !== undefined &&
      input.lambdaConfig !== null && {
        lambdaConfig: serializeAws_restJson1LambdaDataSourceConfig(input.lambdaConfig, context),
      }),
    ...(input.relationalDatabaseConfig !== undefined &&
      input.relationalDatabaseConfig !== null && {
        relationalDatabaseConfig: serializeAws_restJson1RelationalDatabaseDataSourceConfig(
          input.relationalDatabaseConfig,
          context
        ),
      }),
    ...(input.serviceRoleArn !== undefined &&
      input.serviceRoleArn !== null && { serviceRoleArn: input.serviceRoleArn }),
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
exports.serializeAws_restJson1UpdateDataSourceCommand = serializeAws_restJson1UpdateDataSourceCommand;
const serializeAws_restJson1UpdateFunctionCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/functions/{functionId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.functionId !== undefined) {
    const labelValue = input.functionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: functionId.");
    }
    resolvedPath = resolvedPath.replace("{functionId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: functionId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.functionVersion !== undefined &&
      input.functionVersion !== null && { functionVersion: input.functionVersion }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
exports.serializeAws_restJson1UpdateFunctionCommand = serializeAws_restJson1UpdateFunctionCommand;
const serializeAws_restJson1UpdateGraphqlApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.additionalAuthenticationProviders !== undefined &&
      input.additionalAuthenticationProviders !== null && {
        additionalAuthenticationProviders: serializeAws_restJson1AdditionalAuthenticationProviders(
          input.additionalAuthenticationProviders,
          context
        ),
      }),
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.logConfig !== undefined &&
      input.logConfig !== null && { logConfig: serializeAws_restJson1LogConfig(input.logConfig, context) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
        userPoolConfig: serializeAws_restJson1UserPoolConfig(input.userPoolConfig, context),
      }),
    ...(input.xrayEnabled !== undefined && input.xrayEnabled !== null && { xrayEnabled: input.xrayEnabled }),
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
exports.serializeAws_restJson1UpdateGraphqlApiCommand = serializeAws_restJson1UpdateGraphqlApiCommand;
const serializeAws_restJson1UpdateResolverCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  if (input.fieldName !== undefined) {
    const labelValue = input.fieldName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: fieldName.");
    }
    resolvedPath = resolvedPath.replace("{fieldName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: fieldName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.cachingConfig !== undefined &&
      input.cachingConfig !== null && {
        cachingConfig: serializeAws_restJson1CachingConfig(input.cachingConfig, context),
      }),
    ...(input.dataSourceName !== undefined &&
      input.dataSourceName !== null && { dataSourceName: input.dataSourceName }),
    ...(input.kind !== undefined && input.kind !== null && { kind: input.kind }),
    ...(input.pipelineConfig !== undefined &&
      input.pipelineConfig !== null && {
        pipelineConfig: serializeAws_restJson1PipelineConfig(input.pipelineConfig, context),
      }),
    ...(input.requestMappingTemplate !== undefined &&
      input.requestMappingTemplate !== null && { requestMappingTemplate: input.requestMappingTemplate }),
    ...(input.responseMappingTemplate !== undefined &&
      input.responseMappingTemplate !== null && { responseMappingTemplate: input.responseMappingTemplate }),
    ...(input.syncConfig !== undefined &&
      input.syncConfig !== null && { syncConfig: serializeAws_restJson1SyncConfig(input.syncConfig, context) }),
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
exports.serializeAws_restJson1UpdateResolverCommand = serializeAws_restJson1UpdateResolverCommand;
const serializeAws_restJson1UpdateTypeCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v1/apis/{apiId}/types/{typeName}";
  if (input.apiId !== undefined) {
    const labelValue = input.apiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: apiId.");
    }
    resolvedPath = resolvedPath.replace("{apiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: apiId.");
  }
  if (input.typeName !== undefined) {
    const labelValue = input.typeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: typeName.");
    }
    resolvedPath = resolvedPath.replace("{typeName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: typeName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.definition !== undefined && input.definition !== null && { definition: input.definition }),
    ...(input.format !== undefined && input.format !== null && { format: input.format }),
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
exports.serializeAws_restJson1UpdateTypeCommand = serializeAws_restJson1UpdateTypeCommand;
const deserializeAws_restJson1CreateApiCacheCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApiCacheCommand = deserializeAws_restJson1CreateApiCacheCommand;
const deserializeAws_restJson1CreateApiCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateApiKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKey: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApiKeyCommand = deserializeAws_restJson1CreateApiKeyCommand;
const deserializeAws_restJson1CreateApiKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyLimitExceededException":
    case "com.amazonaws.appsync#ApiKeyLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateDataSourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataSourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDataSourceCommand = deserializeAws_restJson1CreateDataSourceCommand;
const deserializeAws_restJson1CreateDataSourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateFunctionCommand = deserializeAws_restJson1CreateFunctionCommand;
const deserializeAws_restJson1CreateFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateGraphqlApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGraphqlApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateGraphqlApiCommand = deserializeAws_restJson1CreateGraphqlApiCommand;
const deserializeAws_restJson1CreateGraphqlApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiLimitExceededException":
    case "com.amazonaws.appsync#ApiLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ApiLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateResolverCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResolverCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateResolverCommand = deserializeAws_restJson1CreateResolverCommand;
const deserializeAws_restJson1CreateResolverCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1CreateTypeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTypeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateTypeCommand = deserializeAws_restJson1CreateTypeCommand;
const deserializeAws_restJson1CreateTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteApiCacheCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApiCacheCommand = deserializeAws_restJson1DeleteApiCacheCommand;
const deserializeAws_restJson1DeleteApiCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteApiKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApiKeyCommand = deserializeAws_restJson1DeleteApiKeyCommand;
const deserializeAws_restJson1DeleteApiKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteDataSourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataSourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDataSourceCommand = deserializeAws_restJson1DeleteDataSourceCommand;
const deserializeAws_restJson1DeleteDataSourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteFunctionCommand = deserializeAws_restJson1DeleteFunctionCommand;
const deserializeAws_restJson1DeleteFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteGraphqlApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGraphqlApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteGraphqlApiCommand = deserializeAws_restJson1DeleteGraphqlApiCommand;
const deserializeAws_restJson1DeleteGraphqlApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteResolverCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResolverCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteResolverCommand = deserializeAws_restJson1DeleteResolverCommand;
const deserializeAws_restJson1DeleteResolverCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1DeleteTypeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTypeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteTypeCommand = deserializeAws_restJson1DeleteTypeCommand;
const deserializeAws_restJson1DeleteTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1FlushApiCacheCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1FlushApiCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1FlushApiCacheCommand = deserializeAws_restJson1FlushApiCacheCommand;
const deserializeAws_restJson1FlushApiCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetApiCacheCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiCacheCommand = deserializeAws_restJson1GetApiCacheCommand;
const deserializeAws_restJson1GetApiCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetDataSourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataSourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDataSourceCommand = deserializeAws_restJson1GetDataSourceCommand;
const deserializeAws_restJson1GetDataSourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetFunctionCommand = deserializeAws_restJson1GetFunctionCommand;
const deserializeAws_restJson1GetFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetGraphqlApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGraphqlApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetGraphqlApiCommand = deserializeAws_restJson1GetGraphqlApiCommand;
const deserializeAws_restJson1GetGraphqlApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetIntrospectionSchemaCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntrospectionSchemaCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    schema: undefined,
  };
  const data = await collectBody(output.body, context);
  contents.schema = data;
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntrospectionSchemaCommand = deserializeAws_restJson1GetIntrospectionSchemaCommand;
const deserializeAws_restJson1GetIntrospectionSchemaCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "GraphQLSchemaException":
    case "com.amazonaws.appsync#GraphQLSchemaException":
      response = {
        ...(await deserializeAws_restJson1GraphQLSchemaExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetResolverCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResolverCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetResolverCommand = deserializeAws_restJson1GetResolverCommand;
const deserializeAws_restJson1GetResolverCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetSchemaCreationStatusCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSchemaCreationStatusCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    details: undefined,
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.details !== undefined && data.details !== null) {
    contents.details = data.details;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetSchemaCreationStatusCommand = deserializeAws_restJson1GetSchemaCreationStatusCommand;
const deserializeAws_restJson1GetSchemaCreationStatusCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1GetTypeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTypeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetTypeCommand = deserializeAws_restJson1GetTypeCommand;
const deserializeAws_restJson1GetTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListApiKeysCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListApiKeysCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKeys: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKeys !== undefined && data.apiKeys !== null) {
    contents.apiKeys = deserializeAws_restJson1ApiKeys(data.apiKeys, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListApiKeysCommand = deserializeAws_restJson1ListApiKeysCommand;
const deserializeAws_restJson1ListApiKeysCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListDataSourcesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataSourcesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    dataSources: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListDataSourcesCommand = deserializeAws_restJson1ListDataSourcesCommand;
const deserializeAws_restJson1ListDataSourcesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListFunctionsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFunctionsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    functions: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.functions !== undefined && data.functions !== null) {
    contents.functions = deserializeAws_restJson1Functions(data.functions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListFunctionsCommand = deserializeAws_restJson1ListFunctionsCommand;
const deserializeAws_restJson1ListFunctionsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListGraphqlApisCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGraphqlApisCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    graphqlApis: undefined,
    nextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.graphqlApis !== undefined && data.graphqlApis !== null) {
    contents.graphqlApis = deserializeAws_restJson1GraphqlApis(data.graphqlApis, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListGraphqlApisCommand = deserializeAws_restJson1ListGraphqlApisCommand;
const deserializeAws_restJson1ListGraphqlApisCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListResolversCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    resolvers: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResolversCommand = deserializeAws_restJson1ListResolversCommand;
const deserializeAws_restJson1ListResolversCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListResolversByFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResolversByFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    resolvers: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.resolvers !== undefined && data.resolvers !== null) {
    contents.resolvers = deserializeAws_restJson1Resolvers(data.resolvers, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListResolversByFunctionCommand = deserializeAws_restJson1ListResolversByFunctionCommand;
const deserializeAws_restJson1ListResolversByFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ListTypesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTypesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    types: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.types !== undefined && data.types !== null) {
    contents.types = deserializeAws_restJson1TypeList(data.types, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ListTypesCommand = deserializeAws_restJson1ListTypesCommand;
const deserializeAws_restJson1ListTypesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1StartSchemaCreationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSchemaCreationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1StartSchemaCreationCommand = deserializeAws_restJson1StartSchemaCreationCommand;
const deserializeAws_restJson1StartSchemaCreationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateApiCacheCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiCache: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiCache !== undefined && data.apiCache !== null) {
    contents.apiCache = deserializeAws_restJson1ApiCache(data.apiCache, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApiCacheCommand = deserializeAws_restJson1UpdateApiCacheCommand;
const deserializeAws_restJson1UpdateApiCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateApiKeyCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiKeyCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    apiKey: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiKey !== undefined && data.apiKey !== null) {
    contents.apiKey = deserializeAws_restJson1ApiKey(data.apiKey, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApiKeyCommand = deserializeAws_restJson1UpdateApiKeyCommand;
const deserializeAws_restJson1UpdateApiKeyCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ApiKeyValidityOutOfBoundsException":
    case "com.amazonaws.appsync#ApiKeyValidityOutOfBoundsException":
      response = {
        ...(await deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.appsync#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateDataSourceCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDataSourceCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    dataSource: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.dataSource !== undefined && data.dataSource !== null) {
    contents.dataSource = deserializeAws_restJson1DataSource(data.dataSource, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDataSourceCommand = deserializeAws_restJson1UpdateDataSourceCommand;
const deserializeAws_restJson1UpdateDataSourceCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateFunctionCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFunctionCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    functionConfiguration: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.functionConfiguration !== undefined && data.functionConfiguration !== null) {
    contents.functionConfiguration = deserializeAws_restJson1FunctionConfiguration(data.functionConfiguration, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateFunctionCommand = deserializeAws_restJson1UpdateFunctionCommand;
const deserializeAws_restJson1UpdateFunctionCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateGraphqlApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGraphqlApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    graphqlApi: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.graphqlApi !== undefined && data.graphqlApi !== null) {
    contents.graphqlApi = deserializeAws_restJson1GraphqlApi(data.graphqlApi, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateGraphqlApiCommand = deserializeAws_restJson1UpdateGraphqlApiCommand;
const deserializeAws_restJson1UpdateGraphqlApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.appsync#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateResolverCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResolverCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    resolver: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.resolver !== undefined && data.resolver !== null) {
    contents.resolver = deserializeAws_restJson1Resolver(data.resolver, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateResolverCommand = deserializeAws_restJson1UpdateResolverCommand;
const deserializeAws_restJson1UpdateResolverCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1UpdateTypeCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTypeCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    type: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.type !== undefined && data.type !== null) {
    contents.type = deserializeAws_restJson1Type(data.type, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateTypeCommand = deserializeAws_restJson1UpdateTypeCommand;
const deserializeAws_restJson1UpdateTypeCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.appsync#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.appsync#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.appsync#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.appsync#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.appsync#UnauthorizedException":
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
const deserializeAws_restJson1ApiKeyLimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ApiKeyLimitExceededException",
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
const deserializeAws_restJson1ApiKeyValidityOutOfBoundsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ApiKeyValidityOutOfBoundsException",
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
const deserializeAws_restJson1ApiLimitExceededExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ApiLimitExceededException",
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
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "BadRequestException",
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
const deserializeAws_restJson1GraphQLSchemaExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "GraphQLSchemaException",
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
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotFoundException",
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
const deserializeAws_restJson1UnauthorizedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "UnauthorizedException",
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
const serializeAws_restJson1AdditionalAuthenticationProvider = (input, context) => {
  return {
    ...(input.authenticationType !== undefined &&
      input.authenticationType !== null && { authenticationType: input.authenticationType }),
    ...(input.openIDConnectConfig !== undefined &&
      input.openIDConnectConfig !== null && {
        openIDConnectConfig: serializeAws_restJson1OpenIDConnectConfig(input.openIDConnectConfig, context),
      }),
    ...(input.userPoolConfig !== undefined &&
      input.userPoolConfig !== null && {
        userPoolConfig: serializeAws_restJson1CognitoUserPoolConfig(input.userPoolConfig, context),
      }),
  };
};
const serializeAws_restJson1AdditionalAuthenticationProviders = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
};
const serializeAws_restJson1AuthorizationConfig = (input, context) => {
  return {
    ...(input.authorizationType !== undefined &&
      input.authorizationType !== null && { authorizationType: input.authorizationType }),
    ...(input.awsIamConfig !== undefined &&
      input.awsIamConfig !== null && { awsIamConfig: serializeAws_restJson1AwsIamConfig(input.awsIamConfig, context) }),
  };
};
const serializeAws_restJson1AwsIamConfig = (input, context) => {
  return {
    ...(input.signingRegion !== undefined && input.signingRegion !== null && { signingRegion: input.signingRegion }),
    ...(input.signingServiceName !== undefined &&
      input.signingServiceName !== null && { signingServiceName: input.signingServiceName }),
  };
};
const serializeAws_restJson1CachingConfig = (input, context) => {
  return {
    ...(input.cachingKeys !== undefined &&
      input.cachingKeys !== null && { cachingKeys: serializeAws_restJson1CachingKeys(input.cachingKeys, context) }),
    ...(input.ttl !== undefined && input.ttl !== null && { ttl: input.ttl }),
  };
};
const serializeAws_restJson1CachingKeys = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1CognitoUserPoolConfig = (input, context) => {
  return {
    ...(input.appIdClientRegex !== undefined &&
      input.appIdClientRegex !== null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.userPoolId !== undefined && input.userPoolId !== null && { userPoolId: input.userPoolId }),
  };
};
const serializeAws_restJson1DeltaSyncConfig = (input, context) => {
  return {
    ...(input.baseTableTTL !== undefined && input.baseTableTTL !== null && { baseTableTTL: input.baseTableTTL }),
    ...(input.deltaSyncTableName !== undefined &&
      input.deltaSyncTableName !== null && { deltaSyncTableName: input.deltaSyncTableName }),
    ...(input.deltaSyncTableTTL !== undefined &&
      input.deltaSyncTableTTL !== null && { deltaSyncTableTTL: input.deltaSyncTableTTL }),
  };
};
const serializeAws_restJson1DynamodbDataSourceConfig = (input, context) => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.deltaSyncConfig !== undefined &&
      input.deltaSyncConfig !== null && {
        deltaSyncConfig: serializeAws_restJson1DeltaSyncConfig(input.deltaSyncConfig, context),
      }),
    ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
    ...(input.useCallerCredentials !== undefined &&
      input.useCallerCredentials !== null && { useCallerCredentials: input.useCallerCredentials }),
    ...(input.versioned !== undefined && input.versioned !== null && { versioned: input.versioned }),
  };
};
const serializeAws_restJson1ElasticsearchDataSourceConfig = (input, context) => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};
const serializeAws_restJson1FunctionsIds = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1HttpDataSourceConfig = (input, context) => {
  return {
    ...(input.authorizationConfig !== undefined &&
      input.authorizationConfig !== null && {
        authorizationConfig: serializeAws_restJson1AuthorizationConfig(input.authorizationConfig, context),
      }),
    ...(input.endpoint !== undefined && input.endpoint !== null && { endpoint: input.endpoint }),
  };
};
const serializeAws_restJson1LambdaConflictHandlerConfig = (input, context) => {
  return {
    ...(input.lambdaConflictHandlerArn !== undefined &&
      input.lambdaConflictHandlerArn !== null && { lambdaConflictHandlerArn: input.lambdaConflictHandlerArn }),
  };
};
const serializeAws_restJson1LambdaDataSourceConfig = (input, context) => {
  return {
    ...(input.lambdaFunctionArn !== undefined &&
      input.lambdaFunctionArn !== null && { lambdaFunctionArn: input.lambdaFunctionArn }),
  };
};
const serializeAws_restJson1LogConfig = (input, context) => {
  return {
    ...(input.cloudWatchLogsRoleArn !== undefined &&
      input.cloudWatchLogsRoleArn !== null && { cloudWatchLogsRoleArn: input.cloudWatchLogsRoleArn }),
    ...(input.excludeVerboseContent !== undefined &&
      input.excludeVerboseContent !== null && { excludeVerboseContent: input.excludeVerboseContent }),
    ...(input.fieldLogLevel !== undefined && input.fieldLogLevel !== null && { fieldLogLevel: input.fieldLogLevel }),
  };
};
const serializeAws_restJson1OpenIDConnectConfig = (input, context) => {
  return {
    ...(input.authTTL !== undefined && input.authTTL !== null && { authTTL: input.authTTL }),
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.iatTTL !== undefined && input.iatTTL !== null && { iatTTL: input.iatTTL }),
    ...(input.issuer !== undefined && input.issuer !== null && { issuer: input.issuer }),
  };
};
const serializeAws_restJson1PipelineConfig = (input, context) => {
  return {
    ...(input.functions !== undefined &&
      input.functions !== null && { functions: serializeAws_restJson1FunctionsIds(input.functions, context) }),
  };
};
const serializeAws_restJson1RdsHttpEndpointConfig = (input, context) => {
  return {
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.awsSecretStoreArn !== undefined &&
      input.awsSecretStoreArn !== null && { awsSecretStoreArn: input.awsSecretStoreArn }),
    ...(input.databaseName !== undefined && input.databaseName !== null && { databaseName: input.databaseName }),
    ...(input.dbClusterIdentifier !== undefined &&
      input.dbClusterIdentifier !== null && { dbClusterIdentifier: input.dbClusterIdentifier }),
    ...(input.schema !== undefined && input.schema !== null && { schema: input.schema }),
  };
};
const serializeAws_restJson1RelationalDatabaseDataSourceConfig = (input, context) => {
  return {
    ...(input.rdsHttpEndpointConfig !== undefined &&
      input.rdsHttpEndpointConfig !== null && {
        rdsHttpEndpointConfig: serializeAws_restJson1RdsHttpEndpointConfig(input.rdsHttpEndpointConfig, context),
      }),
    ...(input.relationalDatabaseSourceType !== undefined &&
      input.relationalDatabaseSourceType !== null && {
        relationalDatabaseSourceType: input.relationalDatabaseSourceType,
      }),
  };
};
const serializeAws_restJson1SyncConfig = (input, context) => {
  return {
    ...(input.conflictDetection !== undefined &&
      input.conflictDetection !== null && { conflictDetection: input.conflictDetection }),
    ...(input.conflictHandler !== undefined &&
      input.conflictHandler !== null && { conflictHandler: input.conflictHandler }),
    ...(input.lambdaConflictHandlerConfig !== undefined &&
      input.lambdaConflictHandlerConfig !== null && {
        lambdaConflictHandlerConfig: serializeAws_restJson1LambdaConflictHandlerConfig(
          input.lambdaConflictHandlerConfig,
          context
        ),
      }),
  };
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
const serializeAws_restJson1UserPoolConfig = (input, context) => {
  return {
    ...(input.appIdClientRegex !== undefined &&
      input.appIdClientRegex !== null && { appIdClientRegex: input.appIdClientRegex }),
    ...(input.awsRegion !== undefined && input.awsRegion !== null && { awsRegion: input.awsRegion }),
    ...(input.defaultAction !== undefined && input.defaultAction !== null && { defaultAction: input.defaultAction }),
    ...(input.userPoolId !== undefined && input.userPoolId !== null && { userPoolId: input.userPoolId }),
  };
};
const deserializeAws_restJson1AdditionalAuthenticationProvider = (output, context) => {
  return {
    authenticationType:
      output.authenticationType !== undefined && output.authenticationType !== null
        ? output.authenticationType
        : undefined,
    openIDConnectConfig:
      output.openIDConnectConfig !== undefined && output.openIDConnectConfig !== null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    userPoolConfig:
      output.userPoolConfig !== undefined && output.userPoolConfig !== null
        ? deserializeAws_restJson1CognitoUserPoolConfig(output.userPoolConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1AdditionalAuthenticationProviders = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1AdditionalAuthenticationProvider(entry, context);
    });
};
const deserializeAws_restJson1ApiCache = (output, context) => {
  return {
    apiCachingBehavior:
      output.apiCachingBehavior !== undefined && output.apiCachingBehavior !== null
        ? output.apiCachingBehavior
        : undefined,
    atRestEncryptionEnabled:
      output.atRestEncryptionEnabled !== undefined && output.atRestEncryptionEnabled !== null
        ? output.atRestEncryptionEnabled
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    transitEncryptionEnabled:
      output.transitEncryptionEnabled !== undefined && output.transitEncryptionEnabled !== null
        ? output.transitEncryptionEnabled
        : undefined,
    ttl: output.ttl !== undefined && output.ttl !== null ? output.ttl : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1ApiKey = (output, context) => {
  return {
    deletes: output.deletes !== undefined && output.deletes !== null ? output.deletes : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    expires: output.expires !== undefined && output.expires !== null ? output.expires : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
  };
};
const deserializeAws_restJson1ApiKeys = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiKey(entry, context);
    });
};
const deserializeAws_restJson1AuthorizationConfig = (output, context) => {
  return {
    authorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    awsIamConfig:
      output.awsIamConfig !== undefined && output.awsIamConfig !== null
        ? deserializeAws_restJson1AwsIamConfig(output.awsIamConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1AwsIamConfig = (output, context) => {
  return {
    signingRegion:
      output.signingRegion !== undefined && output.signingRegion !== null ? output.signingRegion : undefined,
    signingServiceName:
      output.signingServiceName !== undefined && output.signingServiceName !== null
        ? output.signingServiceName
        : undefined,
  };
};
const deserializeAws_restJson1CachingConfig = (output, context) => {
  return {
    cachingKeys:
      output.cachingKeys !== undefined && output.cachingKeys !== null
        ? deserializeAws_restJson1CachingKeys(output.cachingKeys, context)
        : undefined,
    ttl: output.ttl !== undefined && output.ttl !== null ? output.ttl : undefined,
  };
};
const deserializeAws_restJson1CachingKeys = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1CognitoUserPoolConfig = (output, context) => {
  return {
    appIdClientRegex:
      output.appIdClientRegex !== undefined && output.appIdClientRegex !== null ? output.appIdClientRegex : undefined,
    awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
    userPoolId: output.userPoolId !== undefined && output.userPoolId !== null ? output.userPoolId : undefined,
  };
};
const deserializeAws_restJson1DataSource = (output, context) => {
  return {
    dataSourceArn:
      output.dataSourceArn !== undefined && output.dataSourceArn !== null ? output.dataSourceArn : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    dynamodbConfig:
      output.dynamodbConfig !== undefined && output.dynamodbConfig !== null
        ? deserializeAws_restJson1DynamodbDataSourceConfig(output.dynamodbConfig, context)
        : undefined,
    elasticsearchConfig:
      output.elasticsearchConfig !== undefined && output.elasticsearchConfig !== null
        ? deserializeAws_restJson1ElasticsearchDataSourceConfig(output.elasticsearchConfig, context)
        : undefined,
    httpConfig:
      output.httpConfig !== undefined && output.httpConfig !== null
        ? deserializeAws_restJson1HttpDataSourceConfig(output.httpConfig, context)
        : undefined,
    lambdaConfig:
      output.lambdaConfig !== undefined && output.lambdaConfig !== null
        ? deserializeAws_restJson1LambdaDataSourceConfig(output.lambdaConfig, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    relationalDatabaseConfig:
      output.relationalDatabaseConfig !== undefined && output.relationalDatabaseConfig !== null
        ? deserializeAws_restJson1RelationalDatabaseDataSourceConfig(output.relationalDatabaseConfig, context)
        : undefined,
    serviceRoleArn:
      output.serviceRoleArn !== undefined && output.serviceRoleArn !== null ? output.serviceRoleArn : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  };
};
const deserializeAws_restJson1DataSources = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
};
const deserializeAws_restJson1DeltaSyncConfig = (output, context) => {
  return {
    baseTableTTL: output.baseTableTTL !== undefined && output.baseTableTTL !== null ? output.baseTableTTL : undefined,
    deltaSyncTableName:
      output.deltaSyncTableName !== undefined && output.deltaSyncTableName !== null
        ? output.deltaSyncTableName
        : undefined,
    deltaSyncTableTTL:
      output.deltaSyncTableTTL !== undefined && output.deltaSyncTableTTL !== null
        ? output.deltaSyncTableTTL
        : undefined,
  };
};
const deserializeAws_restJson1DynamodbDataSourceConfig = (output, context) => {
  return {
    awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
    deltaSyncConfig:
      output.deltaSyncConfig !== undefined && output.deltaSyncConfig !== null
        ? deserializeAws_restJson1DeltaSyncConfig(output.deltaSyncConfig, context)
        : undefined,
    tableName: output.tableName !== undefined && output.tableName !== null ? output.tableName : undefined,
    useCallerCredentials:
      output.useCallerCredentials !== undefined && output.useCallerCredentials !== null
        ? output.useCallerCredentials
        : undefined,
    versioned: output.versioned !== undefined && output.versioned !== null ? output.versioned : undefined,
  };
};
const deserializeAws_restJson1ElasticsearchDataSourceConfig = (output, context) => {
  return {
    awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
    endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
  };
};
const deserializeAws_restJson1FunctionConfiguration = (output, context) => {
  return {
    dataSourceName:
      output.dataSourceName !== undefined && output.dataSourceName !== null ? output.dataSourceName : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    functionArn: output.functionArn !== undefined && output.functionArn !== null ? output.functionArn : undefined,
    functionId: output.functionId !== undefined && output.functionId !== null ? output.functionId : undefined,
    functionVersion:
      output.functionVersion !== undefined && output.functionVersion !== null ? output.functionVersion : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    requestMappingTemplate:
      output.requestMappingTemplate !== undefined && output.requestMappingTemplate !== null
        ? output.requestMappingTemplate
        : undefined,
    responseMappingTemplate:
      output.responseMappingTemplate !== undefined && output.responseMappingTemplate !== null
        ? output.responseMappingTemplate
        : undefined,
    syncConfig:
      output.syncConfig !== undefined && output.syncConfig !== null
        ? deserializeAws_restJson1SyncConfig(output.syncConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1Functions = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1FunctionConfiguration(entry, context);
    });
};
const deserializeAws_restJson1FunctionsIds = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1GraphqlApi = (output, context) => {
  return {
    additionalAuthenticationProviders:
      output.additionalAuthenticationProviders !== undefined && output.additionalAuthenticationProviders !== null
        ? deserializeAws_restJson1AdditionalAuthenticationProviders(output.additionalAuthenticationProviders, context)
        : undefined,
    apiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    authenticationType:
      output.authenticationType !== undefined && output.authenticationType !== null
        ? output.authenticationType
        : undefined,
    logConfig:
      output.logConfig !== undefined && output.logConfig !== null
        ? deserializeAws_restJson1LogConfig(output.logConfig, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    openIDConnectConfig:
      output.openIDConnectConfig !== undefined && output.openIDConnectConfig !== null
        ? deserializeAws_restJson1OpenIDConnectConfig(output.openIDConnectConfig, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    uris:
      output.uris !== undefined && output.uris !== null
        ? deserializeAws_restJson1MapOfStringToString(output.uris, context)
        : undefined,
    userPoolConfig:
      output.userPoolConfig !== undefined && output.userPoolConfig !== null
        ? deserializeAws_restJson1UserPoolConfig(output.userPoolConfig, context)
        : undefined,
    wafWebAclArn: output.wafWebAclArn !== undefined && output.wafWebAclArn !== null ? output.wafWebAclArn : undefined,
    xrayEnabled: output.xrayEnabled !== undefined && output.xrayEnabled !== null ? output.xrayEnabled : undefined,
  };
};
const deserializeAws_restJson1GraphqlApis = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1GraphqlApi(entry, context);
    });
};
const deserializeAws_restJson1HttpDataSourceConfig = (output, context) => {
  return {
    authorizationConfig:
      output.authorizationConfig !== undefined && output.authorizationConfig !== null
        ? deserializeAws_restJson1AuthorizationConfig(output.authorizationConfig, context)
        : undefined,
    endpoint: output.endpoint !== undefined && output.endpoint !== null ? output.endpoint : undefined,
  };
};
const deserializeAws_restJson1LambdaConflictHandlerConfig = (output, context) => {
  return {
    lambdaConflictHandlerArn:
      output.lambdaConflictHandlerArn !== undefined && output.lambdaConflictHandlerArn !== null
        ? output.lambdaConflictHandlerArn
        : undefined,
  };
};
const deserializeAws_restJson1LambdaDataSourceConfig = (output, context) => {
  return {
    lambdaFunctionArn:
      output.lambdaFunctionArn !== undefined && output.lambdaFunctionArn !== null
        ? output.lambdaFunctionArn
        : undefined,
  };
};
const deserializeAws_restJson1LogConfig = (output, context) => {
  return {
    cloudWatchLogsRoleArn:
      output.cloudWatchLogsRoleArn !== undefined && output.cloudWatchLogsRoleArn !== null
        ? output.cloudWatchLogsRoleArn
        : undefined,
    excludeVerboseContent:
      output.excludeVerboseContent !== undefined && output.excludeVerboseContent !== null
        ? output.excludeVerboseContent
        : undefined,
    fieldLogLevel:
      output.fieldLogLevel !== undefined && output.fieldLogLevel !== null ? output.fieldLogLevel : undefined,
  };
};
const deserializeAws_restJson1MapOfStringToString = (output, context) => {
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
const deserializeAws_restJson1OpenIDConnectConfig = (output, context) => {
  return {
    authTTL: output.authTTL !== undefined && output.authTTL !== null ? output.authTTL : undefined,
    clientId: output.clientId !== undefined && output.clientId !== null ? output.clientId : undefined,
    iatTTL: output.iatTTL !== undefined && output.iatTTL !== null ? output.iatTTL : undefined,
    issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
  };
};
const deserializeAws_restJson1PipelineConfig = (output, context) => {
  return {
    functions:
      output.functions !== undefined && output.functions !== null
        ? deserializeAws_restJson1FunctionsIds(output.functions, context)
        : undefined,
  };
};
const deserializeAws_restJson1RdsHttpEndpointConfig = (output, context) => {
  return {
    awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
    awsSecretStoreArn:
      output.awsSecretStoreArn !== undefined && output.awsSecretStoreArn !== null
        ? output.awsSecretStoreArn
        : undefined,
    databaseName: output.databaseName !== undefined && output.databaseName !== null ? output.databaseName : undefined,
    dbClusterIdentifier:
      output.dbClusterIdentifier !== undefined && output.dbClusterIdentifier !== null
        ? output.dbClusterIdentifier
        : undefined,
    schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  };
};
const deserializeAws_restJson1RelationalDatabaseDataSourceConfig = (output, context) => {
  return {
    rdsHttpEndpointConfig:
      output.rdsHttpEndpointConfig !== undefined && output.rdsHttpEndpointConfig !== null
        ? deserializeAws_restJson1RdsHttpEndpointConfig(output.rdsHttpEndpointConfig, context)
        : undefined,
    relationalDatabaseSourceType:
      output.relationalDatabaseSourceType !== undefined && output.relationalDatabaseSourceType !== null
        ? output.relationalDatabaseSourceType
        : undefined,
  };
};
const deserializeAws_restJson1Resolver = (output, context) => {
  return {
    cachingConfig:
      output.cachingConfig !== undefined && output.cachingConfig !== null
        ? deserializeAws_restJson1CachingConfig(output.cachingConfig, context)
        : undefined,
    dataSourceName:
      output.dataSourceName !== undefined && output.dataSourceName !== null ? output.dataSourceName : undefined,
    fieldName: output.fieldName !== undefined && output.fieldName !== null ? output.fieldName : undefined,
    kind: output.kind !== undefined && output.kind !== null ? output.kind : undefined,
    pipelineConfig:
      output.pipelineConfig !== undefined && output.pipelineConfig !== null
        ? deserializeAws_restJson1PipelineConfig(output.pipelineConfig, context)
        : undefined,
    requestMappingTemplate:
      output.requestMappingTemplate !== undefined && output.requestMappingTemplate !== null
        ? output.requestMappingTemplate
        : undefined,
    resolverArn: output.resolverArn !== undefined && output.resolverArn !== null ? output.resolverArn : undefined,
    responseMappingTemplate:
      output.responseMappingTemplate !== undefined && output.responseMappingTemplate !== null
        ? output.responseMappingTemplate
        : undefined,
    syncConfig:
      output.syncConfig !== undefined && output.syncConfig !== null
        ? deserializeAws_restJson1SyncConfig(output.syncConfig, context)
        : undefined,
    typeName: output.typeName !== undefined && output.typeName !== null ? output.typeName : undefined,
  };
};
const deserializeAws_restJson1Resolvers = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Resolver(entry, context);
    });
};
const deserializeAws_restJson1SyncConfig = (output, context) => {
  return {
    conflictDetection:
      output.conflictDetection !== undefined && output.conflictDetection !== null
        ? output.conflictDetection
        : undefined,
    conflictHandler:
      output.conflictHandler !== undefined && output.conflictHandler !== null ? output.conflictHandler : undefined,
    lambdaConflictHandlerConfig:
      output.lambdaConflictHandlerConfig !== undefined && output.lambdaConflictHandlerConfig !== null
        ? deserializeAws_restJson1LambdaConflictHandlerConfig(output.lambdaConflictHandlerConfig, context)
        : undefined,
  };
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
const deserializeAws_restJson1Type = (output, context) => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    definition: output.definition !== undefined && output.definition !== null ? output.definition : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1TypeList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Type(entry, context);
    });
};
const deserializeAws_restJson1UserPoolConfig = (output, context) => {
  return {
    appIdClientRegex:
      output.appIdClientRegex !== undefined && output.appIdClientRegex !== null ? output.appIdClientRegex : undefined,
    awsRegion: output.awsRegion !== undefined && output.awsRegion !== null ? output.awsRegion : undefined,
    defaultAction:
      output.defaultAction !== undefined && output.defaultAction !== null ? output.defaultAction : undefined,
    userPoolId: output.userPoolId !== undefined && output.userPoolId !== null ? output.userPoolId : undefined,
  };
};
const deserializeMetadata = (output) => {
  var _a;
  return {
    httpStatusCode: output.statusCode,
    requestId:
      (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
  };
};
// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody = new Uint8Array(), context) => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody, context) =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const parseBody = (streamBody, context) =>
  collectBodyString(streamBody, context).then((encoded) => {
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
