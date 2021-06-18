"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAws_restJson1GetRoutesCommand =
  exports.serializeAws_restJson1GetRouteResponsesCommand =
  exports.serializeAws_restJson1GetRouteResponseCommand =
  exports.serializeAws_restJson1GetRouteCommand =
  exports.serializeAws_restJson1GetModelTemplateCommand =
  exports.serializeAws_restJson1GetModelsCommand =
  exports.serializeAws_restJson1GetModelCommand =
  exports.serializeAws_restJson1GetIntegrationsCommand =
  exports.serializeAws_restJson1GetIntegrationResponsesCommand =
  exports.serializeAws_restJson1GetIntegrationResponseCommand =
  exports.serializeAws_restJson1GetIntegrationCommand =
  exports.serializeAws_restJson1GetDomainNamesCommand =
  exports.serializeAws_restJson1GetDomainNameCommand =
  exports.serializeAws_restJson1GetDeploymentsCommand =
  exports.serializeAws_restJson1GetDeploymentCommand =
  exports.serializeAws_restJson1GetAuthorizersCommand =
  exports.serializeAws_restJson1GetAuthorizerCommand =
  exports.serializeAws_restJson1GetApisCommand =
  exports.serializeAws_restJson1GetApiMappingsCommand =
  exports.serializeAws_restJson1GetApiMappingCommand =
  exports.serializeAws_restJson1GetApiCommand =
  exports.serializeAws_restJson1ExportApiCommand =
  exports.serializeAws_restJson1DeleteVpcLinkCommand =
  exports.serializeAws_restJson1DeleteStageCommand =
  exports.serializeAws_restJson1DeleteRouteSettingsCommand =
  exports.serializeAws_restJson1DeleteRouteResponseCommand =
  exports.serializeAws_restJson1DeleteRouteRequestParameterCommand =
  exports.serializeAws_restJson1DeleteRouteCommand =
  exports.serializeAws_restJson1DeleteModelCommand =
  exports.serializeAws_restJson1DeleteIntegrationResponseCommand =
  exports.serializeAws_restJson1DeleteIntegrationCommand =
  exports.serializeAws_restJson1DeleteDomainNameCommand =
  exports.serializeAws_restJson1DeleteDeploymentCommand =
  exports.serializeAws_restJson1DeleteCorsConfigurationCommand =
  exports.serializeAws_restJson1DeleteAuthorizerCommand =
  exports.serializeAws_restJson1DeleteApiMappingCommand =
  exports.serializeAws_restJson1DeleteApiCommand =
  exports.serializeAws_restJson1DeleteAccessLogSettingsCommand =
  exports.serializeAws_restJson1CreateVpcLinkCommand =
  exports.serializeAws_restJson1CreateStageCommand =
  exports.serializeAws_restJson1CreateRouteResponseCommand =
  exports.serializeAws_restJson1CreateRouteCommand =
  exports.serializeAws_restJson1CreateModelCommand =
  exports.serializeAws_restJson1CreateIntegrationResponseCommand =
  exports.serializeAws_restJson1CreateIntegrationCommand =
  exports.serializeAws_restJson1CreateDomainNameCommand =
  exports.serializeAws_restJson1CreateDeploymentCommand =
  exports.serializeAws_restJson1CreateAuthorizerCommand =
  exports.serializeAws_restJson1CreateApiMappingCommand =
  exports.serializeAws_restJson1CreateApiCommand =
    void 0;
exports.deserializeAws_restJson1DeleteVpcLinkCommand =
  exports.deserializeAws_restJson1DeleteStageCommand =
  exports.deserializeAws_restJson1DeleteRouteSettingsCommand =
  exports.deserializeAws_restJson1DeleteRouteResponseCommand =
  exports.deserializeAws_restJson1DeleteRouteRequestParameterCommand =
  exports.deserializeAws_restJson1DeleteRouteCommand =
  exports.deserializeAws_restJson1DeleteModelCommand =
  exports.deserializeAws_restJson1DeleteIntegrationResponseCommand =
  exports.deserializeAws_restJson1DeleteIntegrationCommand =
  exports.deserializeAws_restJson1DeleteDomainNameCommand =
  exports.deserializeAws_restJson1DeleteDeploymentCommand =
  exports.deserializeAws_restJson1DeleteCorsConfigurationCommand =
  exports.deserializeAws_restJson1DeleteAuthorizerCommand =
  exports.deserializeAws_restJson1DeleteApiMappingCommand =
  exports.deserializeAws_restJson1DeleteApiCommand =
  exports.deserializeAws_restJson1DeleteAccessLogSettingsCommand =
  exports.deserializeAws_restJson1CreateVpcLinkCommand =
  exports.deserializeAws_restJson1CreateStageCommand =
  exports.deserializeAws_restJson1CreateRouteResponseCommand =
  exports.deserializeAws_restJson1CreateRouteCommand =
  exports.deserializeAws_restJson1CreateModelCommand =
  exports.deserializeAws_restJson1CreateIntegrationResponseCommand =
  exports.deserializeAws_restJson1CreateIntegrationCommand =
  exports.deserializeAws_restJson1CreateDomainNameCommand =
  exports.deserializeAws_restJson1CreateDeploymentCommand =
  exports.deserializeAws_restJson1CreateAuthorizerCommand =
  exports.deserializeAws_restJson1CreateApiMappingCommand =
  exports.deserializeAws_restJson1CreateApiCommand =
  exports.serializeAws_restJson1UpdateVpcLinkCommand =
  exports.serializeAws_restJson1UpdateStageCommand =
  exports.serializeAws_restJson1UpdateRouteResponseCommand =
  exports.serializeAws_restJson1UpdateRouteCommand =
  exports.serializeAws_restJson1UpdateModelCommand =
  exports.serializeAws_restJson1UpdateIntegrationResponseCommand =
  exports.serializeAws_restJson1UpdateIntegrationCommand =
  exports.serializeAws_restJson1UpdateDomainNameCommand =
  exports.serializeAws_restJson1UpdateDeploymentCommand =
  exports.serializeAws_restJson1UpdateAuthorizerCommand =
  exports.serializeAws_restJson1UpdateApiMappingCommand =
  exports.serializeAws_restJson1UpdateApiCommand =
  exports.serializeAws_restJson1UntagResourceCommand =
  exports.serializeAws_restJson1TagResourceCommand =
  exports.serializeAws_restJson1ResetAuthorizersCacheCommand =
  exports.serializeAws_restJson1ReimportApiCommand =
  exports.serializeAws_restJson1ImportApiCommand =
  exports.serializeAws_restJson1GetVpcLinksCommand =
  exports.serializeAws_restJson1GetVpcLinkCommand =
  exports.serializeAws_restJson1GetTagsCommand =
  exports.serializeAws_restJson1GetStagesCommand =
  exports.serializeAws_restJson1GetStageCommand =
    void 0;
exports.deserializeAws_restJson1UpdateVpcLinkCommand =
  exports.deserializeAws_restJson1UpdateStageCommand =
  exports.deserializeAws_restJson1UpdateRouteResponseCommand =
  exports.deserializeAws_restJson1UpdateRouteCommand =
  exports.deserializeAws_restJson1UpdateModelCommand =
  exports.deserializeAws_restJson1UpdateIntegrationResponseCommand =
  exports.deserializeAws_restJson1UpdateIntegrationCommand =
  exports.deserializeAws_restJson1UpdateDomainNameCommand =
  exports.deserializeAws_restJson1UpdateDeploymentCommand =
  exports.deserializeAws_restJson1UpdateAuthorizerCommand =
  exports.deserializeAws_restJson1UpdateApiMappingCommand =
  exports.deserializeAws_restJson1UpdateApiCommand =
  exports.deserializeAws_restJson1UntagResourceCommand =
  exports.deserializeAws_restJson1TagResourceCommand =
  exports.deserializeAws_restJson1ResetAuthorizersCacheCommand =
  exports.deserializeAws_restJson1ReimportApiCommand =
  exports.deserializeAws_restJson1ImportApiCommand =
  exports.deserializeAws_restJson1GetVpcLinksCommand =
  exports.deserializeAws_restJson1GetVpcLinkCommand =
  exports.deserializeAws_restJson1GetTagsCommand =
  exports.deserializeAws_restJson1GetStagesCommand =
  exports.deserializeAws_restJson1GetStageCommand =
  exports.deserializeAws_restJson1GetRoutesCommand =
  exports.deserializeAws_restJson1GetRouteResponsesCommand =
  exports.deserializeAws_restJson1GetRouteResponseCommand =
  exports.deserializeAws_restJson1GetRouteCommand =
  exports.deserializeAws_restJson1GetModelTemplateCommand =
  exports.deserializeAws_restJson1GetModelsCommand =
  exports.deserializeAws_restJson1GetModelCommand =
  exports.deserializeAws_restJson1GetIntegrationsCommand =
  exports.deserializeAws_restJson1GetIntegrationResponsesCommand =
  exports.deserializeAws_restJson1GetIntegrationResponseCommand =
  exports.deserializeAws_restJson1GetIntegrationCommand =
  exports.deserializeAws_restJson1GetDomainNamesCommand =
  exports.deserializeAws_restJson1GetDomainNameCommand =
  exports.deserializeAws_restJson1GetDeploymentsCommand =
  exports.deserializeAws_restJson1GetDeploymentCommand =
  exports.deserializeAws_restJson1GetAuthorizersCommand =
  exports.deserializeAws_restJson1GetAuthorizerCommand =
  exports.deserializeAws_restJson1GetApisCommand =
  exports.deserializeAws_restJson1GetApiMappingsCommand =
  exports.deserializeAws_restJson1GetApiMappingCommand =
  exports.deserializeAws_restJson1GetApiCommand =
  exports.deserializeAws_restJson1ExportApiCommand =
    void 0;
const protocol_http_1 = require("@aws-sdk/protocol-http");
const smithy_client_1 = require("@aws-sdk/smithy-client");
const serializeAws_restJson1CreateApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis";
  let body;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression !== undefined &&
      input.ApiKeySelectionExpression !== null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration !== undefined &&
      input.CorsConfiguration !== null && {
        corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
      }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint !== undefined &&
      input.DisableExecuteApiEndpoint !== null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation !== undefined &&
      input.DisableSchemaValidation !== null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.ProtocolType !== undefined && input.ProtocolType !== null && { protocolType: input.ProtocolType }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression !== undefined &&
      input.RouteSelectionExpression !== null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
    ...(input.Version !== undefined && input.Version !== null && { version: input.Version }),
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
exports.serializeAws_restJson1CreateApiCommand = serializeAws_restJson1CreateApiCommand;
const serializeAws_restJson1CreateApiMappingCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey !== undefined && input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }),
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
exports.serializeAws_restJson1CreateApiMappingCommand = serializeAws_restJson1CreateApiMappingCommand;
const serializeAws_restJson1CreateAuthorizerCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn !== undefined &&
      input.AuthorizerCredentialsArn !== null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion !== undefined &&
      input.AuthorizerPayloadFormatVersion !== null && {
        authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
      }),
    ...(input.AuthorizerResultTtlInSeconds !== undefined &&
      input.AuthorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
      }),
    ...(input.AuthorizerType !== undefined &&
      input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri !== undefined && input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses !== undefined &&
      input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource !== undefined &&
      input.IdentitySource !== null && {
        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
      }),
    ...(input.IdentityValidationExpression !== undefined &&
      input.IdentityValidationExpression !== null && {
        identityValidationExpression: input.IdentityValidationExpression,
      }),
    ...(input.JwtConfiguration !== undefined &&
      input.JwtConfiguration !== null && {
        jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
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
exports.serializeAws_restJson1CreateAuthorizerCommand = serializeAws_restJson1CreateAuthorizerCommand;
const serializeAws_restJson1CreateDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }),
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
const serializeAws_restJson1CreateDomainNameCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames";
  let body;
  body = JSON.stringify({
    ...(input.DomainName !== undefined && input.DomainName !== null && { domainName: input.DomainName }),
    ...(input.DomainNameConfigurations !== undefined &&
      input.DomainNameConfigurations !== null && {
        domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
          input.DomainNameConfigurations,
          context
        ),
      }),
    ...(input.MutualTlsAuthentication !== undefined &&
      input.MutualTlsAuthentication !== null && {
        mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
          input.MutualTlsAuthentication,
          context
        ),
      }),
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
exports.serializeAws_restJson1CreateDomainNameCommand = serializeAws_restJson1CreateDomainNameCommand;
const serializeAws_restJson1CreateIntegrationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ConnectionId !== undefined && input.ConnectionId !== null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.IntegrationMethod !== undefined &&
      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype !== undefined &&
      input.IntegrationSubtype !== null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType !== undefined &&
      input.IntegrationType !== null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri !== undefined &&
      input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior !== undefined &&
      input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion !== undefined &&
      input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
      }),
    ...(input.RequestTemplates !== undefined &&
      input.RequestTemplates !== null && {
        requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
    ...(input.TimeoutInMillis !== undefined &&
      input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig !== undefined &&
      input.TlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
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
exports.serializeAws_restJson1CreateIntegrationCommand = serializeAws_restJson1CreateIntegrationCommand;
const serializeAws_restJson1CreateIntegrationResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey !== undefined &&
      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
      }),
    ...(input.ResponseTemplates !== undefined &&
      input.ResponseTemplates !== null && {
        responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
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
exports.serializeAws_restJson1CreateIntegrationResponseCommand = serializeAws_restJson1CreateIntegrationResponseCommand;
const serializeAws_restJson1CreateModelCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }),
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
const serializeAws_restJson1CreateRouteCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ApiKeyRequired !== undefined &&
      input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes !== undefined &&
      input.AuthorizationScopes !== null && {
        authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId !== undefined && input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName !== undefined && input.OperationName !== null && { operationName: input.OperationName }),
    ...(input.RequestModels !== undefined &&
      input.RequestModels !== null && {
        requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
      }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
      }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression !== undefined &&
      input.RouteResponseSelectionExpression !== null && {
        routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
      }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
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
exports.serializeAws_restJson1CreateRouteCommand = serializeAws_restJson1CreateRouteCommand;
const serializeAws_restJson1CreateRouteResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels !== undefined &&
      input.ResponseModels !== null && {
        responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
      }),
    ...(input.RouteResponseKey !== undefined &&
      input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }),
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
exports.serializeAws_restJson1CreateRouteResponseCommand = serializeAws_restJson1CreateRouteResponseCommand;
const serializeAws_restJson1CreateStageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.AutoDeploy !== undefined && input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings !== undefined &&
      input.DefaultRouteSettings !== null && {
        defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
      }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { deploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.RouteSettings !== undefined &&
      input.RouteSettings !== null && {
        routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
      }),
    ...(input.StageName !== undefined && input.StageName !== null && { stageName: input.StageName }),
    ...(input.StageVariables !== undefined &&
      input.StageVariables !== null && {
        stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
      }),
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
exports.serializeAws_restJson1CreateStageCommand = serializeAws_restJson1CreateStageCommand;
const serializeAws_restJson1CreateVpcLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/vpclinks";
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.SecurityGroupIds !== undefined &&
      input.SecurityGroupIds !== null && {
        securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.SecurityGroupIds, context),
      }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { subnetIds: serializeAws_restJson1SubnetIdList(input.SubnetIds, context) }),
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
exports.serializeAws_restJson1CreateVpcLinkCommand = serializeAws_restJson1CreateVpcLinkCommand;
const serializeAws_restJson1DeleteAccessLogSettingsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/accesslogsettings";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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
exports.serializeAws_restJson1DeleteAccessLogSettingsCommand = serializeAws_restJson1DeleteAccessLogSettingsCommand;
const serializeAws_restJson1DeleteApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
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
exports.serializeAws_restJson1DeleteApiCommand = serializeAws_restJson1DeleteApiCommand;
const serializeAws_restJson1DeleteApiMappingCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DeleteApiMappingCommand = serializeAws_restJson1DeleteApiMappingCommand;
const serializeAws_restJson1DeleteAuthorizerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
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
exports.serializeAws_restJson1DeleteAuthorizerCommand = serializeAws_restJson1DeleteAuthorizerCommand;
const serializeAws_restJson1DeleteCorsConfigurationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/cors";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
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
exports.serializeAws_restJson1DeleteCorsConfigurationCommand = serializeAws_restJson1DeleteCorsConfigurationCommand;
const serializeAws_restJson1DeleteDeploymentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
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
exports.serializeAws_restJson1DeleteDeploymentCommand = serializeAws_restJson1DeleteDeploymentCommand;
const serializeAws_restJson1DeleteDomainNameCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1DeleteDomainNameCommand = serializeAws_restJson1DeleteDomainNameCommand;
const serializeAws_restJson1DeleteIntegrationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
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
exports.serializeAws_restJson1DeleteIntegrationCommand = serializeAws_restJson1DeleteIntegrationCommand;
const serializeAws_restJson1DeleteIntegrationResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IntegrationResponseId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
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
exports.serializeAws_restJson1DeleteIntegrationResponseCommand = serializeAws_restJson1DeleteIntegrationResponseCommand;
const serializeAws_restJson1DeleteModelCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
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
const serializeAws_restJson1DeleteRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
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
exports.serializeAws_restJson1DeleteRouteCommand = serializeAws_restJson1DeleteRouteCommand;
const serializeAws_restJson1DeleteRouteRequestParameterCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RequestParameterKey !== undefined) {
    const labelValue = input.RequestParameterKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RequestParameterKey.");
    }
    resolvedPath = resolvedPath.replace(
      "{RequestParameterKey}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RequestParameterKey.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
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
exports.serializeAws_restJson1DeleteRouteRequestParameterCommand =
  serializeAws_restJson1DeleteRouteRequestParameterCommand;
const serializeAws_restJson1DeleteRouteResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
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
exports.serializeAws_restJson1DeleteRouteResponseCommand = serializeAws_restJson1DeleteRouteResponseCommand;
const serializeAws_restJson1DeleteRouteSettingsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteKey !== undefined) {
    const labelValue = input.RouteKey;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteKey.");
    }
    resolvedPath = resolvedPath.replace("{RouteKey}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteKey.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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
exports.serializeAws_restJson1DeleteRouteSettingsCommand = serializeAws_restJson1DeleteRouteSettingsCommand;
const serializeAws_restJson1DeleteStageCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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
exports.serializeAws_restJson1DeleteStageCommand = serializeAws_restJson1DeleteStageCommand;
const serializeAws_restJson1DeleteVpcLinkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
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
exports.serializeAws_restJson1DeleteVpcLinkCommand = serializeAws_restJson1DeleteVpcLinkCommand;
const serializeAws_restJson1ExportApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/exports/{Specification}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.Specification !== undefined) {
    const labelValue = input.Specification;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Specification.");
    }
    resolvedPath = resolvedPath.replace("{Specification}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Specification.");
  }
  const query = {
    ...(input.ExportVersion !== undefined && { exportVersion: input.ExportVersion }),
    ...(input.IncludeExtensions !== undefined && { includeExtensions: input.IncludeExtensions.toString() }),
    ...(input.OutputType !== undefined && { outputType: input.OutputType }),
    ...(input.StageName !== undefined && { stageName: input.StageName }),
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
exports.serializeAws_restJson1ExportApiCommand = serializeAws_restJson1ExportApiCommand;
const serializeAws_restJson1GetApiCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
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
exports.serializeAws_restJson1GetApiCommand = serializeAws_restJson1GetApiCommand;
const serializeAws_restJson1GetApiMappingCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1GetApiMappingCommand = serializeAws_restJson1GetApiMappingCommand;
const serializeAws_restJson1GetApiMappingsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings";
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetApiMappingsCommand = serializeAws_restJson1GetApiMappingsCommand;
const serializeAws_restJson1GetApisCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis";
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetApisCommand = serializeAws_restJson1GetApisCommand;
const serializeAws_restJson1GetAuthorizerCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
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
exports.serializeAws_restJson1GetAuthorizerCommand = serializeAws_restJson1GetAuthorizerCommand;
const serializeAws_restJson1GetAuthorizersCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetAuthorizersCommand = serializeAws_restJson1GetAuthorizersCommand;
const serializeAws_restJson1GetDeploymentCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
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
const serializeAws_restJson1GetDeploymentsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/deployments";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetDeploymentsCommand = serializeAws_restJson1GetDeploymentsCommand;
const serializeAws_restJson1GetDomainNameCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
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
exports.serializeAws_restJson1GetDomainNameCommand = serializeAws_restJson1GetDomainNameCommand;
const serializeAws_restJson1GetDomainNamesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/domainnames";
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetDomainNamesCommand = serializeAws_restJson1GetDomainNamesCommand;
const serializeAws_restJson1GetIntegrationCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
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
exports.serializeAws_restJson1GetIntegrationCommand = serializeAws_restJson1GetIntegrationCommand;
const serializeAws_restJson1GetIntegrationResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IntegrationResponseId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
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
exports.serializeAws_restJson1GetIntegrationResponseCommand = serializeAws_restJson1GetIntegrationResponseCommand;
const serializeAws_restJson1GetIntegrationResponsesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetIntegrationResponsesCommand = serializeAws_restJson1GetIntegrationResponsesCommand;
const serializeAws_restJson1GetIntegrationsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/integrations";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetIntegrationsCommand = serializeAws_restJson1GetIntegrationsCommand;
const serializeAws_restJson1GetModelCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
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
exports.serializeAws_restJson1GetModelCommand = serializeAws_restJson1GetModelCommand;
const serializeAws_restJson1GetModelsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/models";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetModelsCommand = serializeAws_restJson1GetModelsCommand;
const serializeAws_restJson1GetModelTemplateCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}/template";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
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
exports.serializeAws_restJson1GetModelTemplateCommand = serializeAws_restJson1GetModelTemplateCommand;
const serializeAws_restJson1GetRouteCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
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
exports.serializeAws_restJson1GetRouteCommand = serializeAws_restJson1GetRouteCommand;
const serializeAws_restJson1GetRouteResponseCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
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
exports.serializeAws_restJson1GetRouteResponseCommand = serializeAws_restJson1GetRouteResponseCommand;
const serializeAws_restJson1GetRouteResponsesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetRouteResponsesCommand = serializeAws_restJson1GetRouteResponsesCommand;
const serializeAws_restJson1GetRoutesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/routes";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetRoutesCommand = serializeAws_restJson1GetRoutesCommand;
const serializeAws_restJson1GetStageCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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
exports.serializeAws_restJson1GetStageCommand = serializeAws_restJson1GetStageCommand;
const serializeAws_restJson1GetStagesCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetStagesCommand = serializeAws_restJson1GetStagesCommand;
const serializeAws_restJson1GetTagsCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
exports.serializeAws_restJson1GetTagsCommand = serializeAws_restJson1GetTagsCommand;
const serializeAws_restJson1GetVpcLinkCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
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
exports.serializeAws_restJson1GetVpcLinkCommand = serializeAws_restJson1GetVpcLinkCommand;
const serializeAws_restJson1GetVpcLinksCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/vpclinks";
  const query = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults }),
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
exports.serializeAws_restJson1GetVpcLinksCommand = serializeAws_restJson1GetVpcLinksCommand;
const serializeAws_restJson1ImportApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis";
  const query = {
    ...(input.Basepath !== undefined && { basepath: input.Basepath }),
    ...(input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }),
  };
  let body;
  body = JSON.stringify({
    ...(input.Body !== undefined && input.Body !== null && { body: input.Body }),
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
exports.serializeAws_restJson1ImportApiCommand = serializeAws_restJson1ImportApiCommand;
const serializeAws_restJson1ReimportApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  const query = {
    ...(input.Basepath !== undefined && { basepath: input.Basepath }),
    ...(input.FailOnWarnings !== undefined && { failOnWarnings: input.FailOnWarnings.toString() }),
  };
  let body;
  body = JSON.stringify({
    ...(input.Body !== undefined && input.Body !== null && { body: input.Body }),
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
exports.serializeAws_restJson1ReimportApiCommand = serializeAws_restJson1ReimportApiCommand;
const serializeAws_restJson1ResetAuthorizersCacheCommand = async (input, context) => {
  const headers = {};
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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
exports.serializeAws_restJson1ResetAuthorizersCacheCommand = serializeAws_restJson1ResetAuthorizersCacheCommand;
const serializeAws_restJson1TagResourceCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
  let resolvedPath = "/v2/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
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
const serializeAws_restJson1UpdateApiCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ApiKeySelectionExpression !== undefined &&
      input.ApiKeySelectionExpression !== null && { apiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration !== undefined &&
      input.CorsConfiguration !== null && {
        corsConfiguration: serializeAws_restJson1Cors(input.CorsConfiguration, context),
      }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.DisableExecuteApiEndpoint !== undefined &&
      input.DisableExecuteApiEndpoint !== null && { disableExecuteApiEndpoint: input.DisableExecuteApiEndpoint }),
    ...(input.DisableSchemaValidation !== undefined &&
      input.DisableSchemaValidation !== null && { disableSchemaValidation: input.DisableSchemaValidation }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteSelectionExpression !== undefined &&
      input.RouteSelectionExpression !== null && { routeSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
    ...(input.Version !== undefined && input.Version !== null && { version: input.Version }),
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
exports.serializeAws_restJson1UpdateApiCommand = serializeAws_restJson1UpdateApiCommand;
const serializeAws_restJson1UpdateApiMappingCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}/apimappings/{ApiMappingId}";
  if (input.ApiMappingId !== undefined) {
    const labelValue = input.ApiMappingId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiMappingId.");
    }
    resolvedPath = resolvedPath.replace("{ApiMappingId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiMappingId.");
  }
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ApiId !== undefined && input.ApiId !== null && { apiId: input.ApiId }),
    ...(input.ApiMappingKey !== undefined && input.ApiMappingKey !== null && { apiMappingKey: input.ApiMappingKey }),
    ...(input.Stage !== undefined && input.Stage !== null && { stage: input.Stage }),
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
exports.serializeAws_restJson1UpdateApiMappingCommand = serializeAws_restJson1UpdateApiMappingCommand;
const serializeAws_restJson1UpdateAuthorizerCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/authorizers/{AuthorizerId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.AuthorizerId !== undefined) {
    const labelValue = input.AuthorizerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AuthorizerId.");
    }
    resolvedPath = resolvedPath.replace("{AuthorizerId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AuthorizerId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.AuthorizerCredentialsArn !== undefined &&
      input.AuthorizerCredentialsArn !== null && { authorizerCredentialsArn: input.AuthorizerCredentialsArn }),
    ...(input.AuthorizerPayloadFormatVersion !== undefined &&
      input.AuthorizerPayloadFormatVersion !== null && {
        authorizerPayloadFormatVersion: input.AuthorizerPayloadFormatVersion,
      }),
    ...(input.AuthorizerResultTtlInSeconds !== undefined &&
      input.AuthorizerResultTtlInSeconds !== null && {
        authorizerResultTtlInSeconds: input.AuthorizerResultTtlInSeconds,
      }),
    ...(input.AuthorizerType !== undefined &&
      input.AuthorizerType !== null && { authorizerType: input.AuthorizerType }),
    ...(input.AuthorizerUri !== undefined && input.AuthorizerUri !== null && { authorizerUri: input.AuthorizerUri }),
    ...(input.EnableSimpleResponses !== undefined &&
      input.EnableSimpleResponses !== null && { enableSimpleResponses: input.EnableSimpleResponses }),
    ...(input.IdentitySource !== undefined &&
      input.IdentitySource !== null && {
        identitySource: serializeAws_restJson1IdentitySourceList(input.IdentitySource, context),
      }),
    ...(input.IdentityValidationExpression !== undefined &&
      input.IdentityValidationExpression !== null && {
        identityValidationExpression: input.IdentityValidationExpression,
      }),
    ...(input.JwtConfiguration !== undefined &&
      input.JwtConfiguration !== null && {
        jwtConfiguration: serializeAws_restJson1JWTConfiguration(input.JwtConfiguration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
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
exports.serializeAws_restJson1UpdateAuthorizerCommand = serializeAws_restJson1UpdateAuthorizerCommand;
const serializeAws_restJson1UpdateDeploymentCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/deployments/{DeploymentId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.DeploymentId !== undefined) {
    const labelValue = input.DeploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeploymentId.");
    }
    resolvedPath = resolvedPath.replace("{DeploymentId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DeploymentId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
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
exports.serializeAws_restJson1UpdateDeploymentCommand = serializeAws_restJson1UpdateDeploymentCommand;
const serializeAws_restJson1UpdateDomainNameCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/domainnames/{DomainName}";
  if (input.DomainName !== undefined) {
    const labelValue = input.DomainName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DomainName.");
    }
    resolvedPath = resolvedPath.replace("{DomainName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: DomainName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.DomainNameConfigurations !== undefined &&
      input.DomainNameConfigurations !== null && {
        domainNameConfigurations: serializeAws_restJson1DomainNameConfigurations(
          input.DomainNameConfigurations,
          context
        ),
      }),
    ...(input.MutualTlsAuthentication !== undefined &&
      input.MutualTlsAuthentication !== null && {
        mutualTlsAuthentication: serializeAws_restJson1MutualTlsAuthenticationInput(
          input.MutualTlsAuthentication,
          context
        ),
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
exports.serializeAws_restJson1UpdateDomainNameCommand = serializeAws_restJson1UpdateDomainNameCommand;
const serializeAws_restJson1UpdateIntegrationCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ConnectionId !== undefined && input.ConnectionId !== null && { connectionId: input.ConnectionId }),
    ...(input.ConnectionType !== undefined &&
      input.ConnectionType !== null && { connectionType: input.ConnectionType }),
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.CredentialsArn !== undefined &&
      input.CredentialsArn !== null && { credentialsArn: input.CredentialsArn }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.IntegrationMethod !== undefined &&
      input.IntegrationMethod !== null && { integrationMethod: input.IntegrationMethod }),
    ...(input.IntegrationSubtype !== undefined &&
      input.IntegrationSubtype !== null && { integrationSubtype: input.IntegrationSubtype }),
    ...(input.IntegrationType !== undefined &&
      input.IntegrationType !== null && { integrationType: input.IntegrationType }),
    ...(input.IntegrationUri !== undefined &&
      input.IntegrationUri !== null && { integrationUri: input.IntegrationUri }),
    ...(input.PassthroughBehavior !== undefined &&
      input.PassthroughBehavior !== null && { passthroughBehavior: input.PassthroughBehavior }),
    ...(input.PayloadFormatVersion !== undefined &&
      input.PayloadFormatVersion !== null && { payloadFormatVersion: input.PayloadFormatVersion }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1IntegrationParameters(input.RequestParameters, context),
      }),
    ...(input.RequestTemplates !== undefined &&
      input.RequestTemplates !== null && {
        requestTemplates: serializeAws_restJson1TemplateMap(input.RequestTemplates, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1ResponseParameters(input.ResponseParameters, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
    ...(input.TimeoutInMillis !== undefined &&
      input.TimeoutInMillis !== null && { timeoutInMillis: input.TimeoutInMillis }),
    ...(input.TlsConfig !== undefined &&
      input.TlsConfig !== null && { tlsConfig: serializeAws_restJson1TlsConfigInput(input.TlsConfig, context) }),
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
exports.serializeAws_restJson1UpdateIntegrationCommand = serializeAws_restJson1UpdateIntegrationCommand;
const serializeAws_restJson1UpdateIntegrationResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/integrations/{IntegrationId}/integrationresponses/{IntegrationResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.IntegrationId !== undefined) {
    const labelValue = input.IntegrationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationId.");
    }
    resolvedPath = resolvedPath.replace("{IntegrationId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationId.");
  }
  if (input.IntegrationResponseId !== undefined) {
    const labelValue = input.IntegrationResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: IntegrationResponseId.");
    }
    resolvedPath = resolvedPath.replace(
      "{IntegrationResponseId}",
      smithy_client_1.extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: IntegrationResponseId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ContentHandlingStrategy !== undefined &&
      input.ContentHandlingStrategy !== null && { contentHandlingStrategy: input.ContentHandlingStrategy }),
    ...(input.IntegrationResponseKey !== undefined &&
      input.IntegrationResponseKey !== null && { integrationResponseKey: input.IntegrationResponseKey }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1IntegrationParameters(input.ResponseParameters, context),
      }),
    ...(input.ResponseTemplates !== undefined &&
      input.ResponseTemplates !== null && {
        responseTemplates: serializeAws_restJson1TemplateMap(input.ResponseTemplates, context),
      }),
    ...(input.TemplateSelectionExpression !== undefined &&
      input.TemplateSelectionExpression !== null && { templateSelectionExpression: input.TemplateSelectionExpression }),
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
exports.serializeAws_restJson1UpdateIntegrationResponseCommand = serializeAws_restJson1UpdateIntegrationResponseCommand;
const serializeAws_restJson1UpdateModelCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/models/{ModelId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.ModelId !== undefined) {
    const labelValue = input.ModelId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ModelId.");
    }
    resolvedPath = resolvedPath.replace("{ModelId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ModelId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ContentType !== undefined && input.ContentType !== null && { contentType: input.ContentType }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Schema !== undefined && input.Schema !== null && { schema: input.Schema }),
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
exports.serializeAws_restJson1UpdateModelCommand = serializeAws_restJson1UpdateModelCommand;
const serializeAws_restJson1UpdateRouteCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ApiKeyRequired !== undefined &&
      input.ApiKeyRequired !== null && { apiKeyRequired: input.ApiKeyRequired }),
    ...(input.AuthorizationScopes !== undefined &&
      input.AuthorizationScopes !== null && {
        authorizationScopes: serializeAws_restJson1AuthorizationScopes(input.AuthorizationScopes, context),
      }),
    ...(input.AuthorizationType !== undefined &&
      input.AuthorizationType !== null && { authorizationType: input.AuthorizationType }),
    ...(input.AuthorizerId !== undefined && input.AuthorizerId !== null && { authorizerId: input.AuthorizerId }),
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.OperationName !== undefined && input.OperationName !== null && { operationName: input.OperationName }),
    ...(input.RequestModels !== undefined &&
      input.RequestModels !== null && {
        requestModels: serializeAws_restJson1RouteModels(input.RequestModels, context),
      }),
    ...(input.RequestParameters !== undefined &&
      input.RequestParameters !== null && {
        requestParameters: serializeAws_restJson1RouteParameters(input.RequestParameters, context),
      }),
    ...(input.RouteKey !== undefined && input.RouteKey !== null && { routeKey: input.RouteKey }),
    ...(input.RouteResponseSelectionExpression !== undefined &&
      input.RouteResponseSelectionExpression !== null && {
        routeResponseSelectionExpression: input.RouteResponseSelectionExpression,
      }),
    ...(input.Target !== undefined && input.Target !== null && { target: input.Target }),
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
exports.serializeAws_restJson1UpdateRouteCommand = serializeAws_restJson1UpdateRouteCommand;
const serializeAws_restJson1UpdateRouteResponseCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.RouteId !== undefined) {
    const labelValue = input.RouteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteId.");
    }
    resolvedPath = resolvedPath.replace("{RouteId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteId.");
  }
  if (input.RouteResponseId !== undefined) {
    const labelValue = input.RouteResponseId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RouteResponseId.");
    }
    resolvedPath = resolvedPath.replace("{RouteResponseId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RouteResponseId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.ModelSelectionExpression !== undefined &&
      input.ModelSelectionExpression !== null && { modelSelectionExpression: input.ModelSelectionExpression }),
    ...(input.ResponseModels !== undefined &&
      input.ResponseModels !== null && {
        responseModels: serializeAws_restJson1RouteModels(input.ResponseModels, context),
      }),
    ...(input.ResponseParameters !== undefined &&
      input.ResponseParameters !== null && {
        responseParameters: serializeAws_restJson1RouteParameters(input.ResponseParameters, context),
      }),
    ...(input.RouteResponseKey !== undefined &&
      input.RouteResponseKey !== null && { routeResponseKey: input.RouteResponseKey }),
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
exports.serializeAws_restJson1UpdateRouteResponseCommand = serializeAws_restJson1UpdateRouteResponseCommand;
const serializeAws_restJson1UpdateStageCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/apis/{ApiId}/stages/{StageName}";
  if (input.ApiId !== undefined) {
    const labelValue = input.ApiId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ApiId.");
    }
    resolvedPath = resolvedPath.replace("{ApiId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ApiId.");
  }
  if (input.StageName !== undefined) {
    const labelValue = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body;
  body = JSON.stringify({
    ...(input.AccessLogSettings !== undefined &&
      input.AccessLogSettings !== null && {
        accessLogSettings: serializeAws_restJson1AccessLogSettings(input.AccessLogSettings, context),
      }),
    ...(input.AutoDeploy !== undefined && input.AutoDeploy !== null && { autoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId !== undefined &&
      input.ClientCertificateId !== null && { clientCertificateId: input.ClientCertificateId }),
    ...(input.DefaultRouteSettings !== undefined &&
      input.DefaultRouteSettings !== null && {
        defaultRouteSettings: serializeAws_restJson1RouteSettings(input.DefaultRouteSettings, context),
      }),
    ...(input.DeploymentId !== undefined && input.DeploymentId !== null && { deploymentId: input.DeploymentId }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.RouteSettings !== undefined &&
      input.RouteSettings !== null && {
        routeSettings: serializeAws_restJson1RouteSettingsMap(input.RouteSettings, context),
      }),
    ...(input.StageVariables !== undefined &&
      input.StageVariables !== null && {
        stageVariables: serializeAws_restJson1StageVariablesMap(input.StageVariables, context),
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
exports.serializeAws_restJson1UpdateStageCommand = serializeAws_restJson1UpdateStageCommand;
const serializeAws_restJson1UpdateVpcLinkCommand = async (input, context) => {
  const headers = {
    "content-type": "application/json",
  };
  let resolvedPath = "/v2/vpclinks/{VpcLinkId}";
  if (input.VpcLinkId !== undefined) {
    const labelValue = input.VpcLinkId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: VpcLinkId.");
    }
    resolvedPath = resolvedPath.replace("{VpcLinkId}", smithy_client_1.extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: VpcLinkId.");
  }
  let body;
  body = JSON.stringify({
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
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
exports.serializeAws_restJson1UpdateVpcLinkCommand = serializeAws_restJson1UpdateVpcLinkCommand;
const deserializeAws_restJson1CreateApiCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApiCommand = deserializeAws_restJson1CreateApiCommand;
const deserializeAws_restJson1CreateApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateApiMappingCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateApiMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateApiMappingCommand = deserializeAws_restJson1CreateApiMappingCommand;
const deserializeAws_restJson1CreateApiMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateAuthorizerCommand = deserializeAws_restJson1CreateAuthorizerCommand;
const deserializeAws_restJson1CreateAuthorizerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
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
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateDomainNameCommand = deserializeAws_restJson1CreateDomainNameCommand;
const deserializeAws_restJson1CreateDomainNameCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.apigatewayv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    ResponseParameters: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIntegrationCommand = deserializeAws_restJson1CreateIntegrationCommand;
const deserializeAws_restJson1CreateIntegrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateIntegrationResponseCommand =
  deserializeAws_restJson1CreateIntegrationResponseCommand;
const deserializeAws_restJson1CreateIntegrationResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateModelCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
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
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateRouteCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRouteCommand = deserializeAws_restJson1CreateRouteCommand;
const deserializeAws_restJson1CreateRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateRouteResponseCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRouteResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateRouteResponseCommand = deserializeAws_restJson1CreateRouteResponseCommand;
const deserializeAws_restJson1CreateRouteResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateStageCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateStageCommand = deserializeAws_restJson1CreateStageCommand;
const deserializeAws_restJson1CreateStageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1CreateVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1CreateVpcLinkCommand = deserializeAws_restJson1CreateVpcLinkCommand;
const deserializeAws_restJson1CreateVpcLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteAccessLogSettingsCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAccessLogSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAccessLogSettingsCommand = deserializeAws_restJson1DeleteAccessLogSettingsCommand;
const deserializeAws_restJson1DeleteAccessLogSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteApiCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApiCommand = deserializeAws_restJson1DeleteApiCommand;
const deserializeAws_restJson1DeleteApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteApiMappingCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteApiMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteApiMappingCommand = deserializeAws_restJson1DeleteApiMappingCommand;
const deserializeAws_restJson1DeleteApiMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteAuthorizerCommand = deserializeAws_restJson1DeleteAuthorizerCommand;
const deserializeAws_restJson1DeleteAuthorizerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteCorsConfigurationCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCorsConfigurationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteCorsConfigurationCommand = deserializeAws_restJson1DeleteCorsConfigurationCommand;
const deserializeAws_restJson1DeleteCorsConfigurationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDeploymentCommand = deserializeAws_restJson1DeleteDeploymentCommand;
const deserializeAws_restJson1DeleteDeploymentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteDomainNameCommand = deserializeAws_restJson1DeleteDomainNameCommand;
const deserializeAws_restJson1DeleteDomainNameCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIntegrationCommand = deserializeAws_restJson1DeleteIntegrationCommand;
const deserializeAws_restJson1DeleteIntegrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteIntegrationResponseCommand =
  deserializeAws_restJson1DeleteIntegrationResponseCommand;
const deserializeAws_restJson1DeleteIntegrationResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteModelCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteRouteCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteCommand = deserializeAws_restJson1DeleteRouteCommand;
const deserializeAws_restJson1DeleteRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteRouteRequestParameterCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteRequestParameterCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteRequestParameterCommand =
  deserializeAws_restJson1DeleteRouteRequestParameterCommand;
const deserializeAws_restJson1DeleteRouteRequestParameterCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteRouteResponseCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteResponseCommand = deserializeAws_restJson1DeleteRouteResponseCommand;
const deserializeAws_restJson1DeleteRouteResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteRouteSettingsCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRouteSettingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteRouteSettingsCommand = deserializeAws_restJson1DeleteRouteSettingsCommand;
const deserializeAws_restJson1DeleteRouteSettingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteStageCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteStageCommand = deserializeAws_restJson1DeleteStageCommand;
const deserializeAws_restJson1DeleteStageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1DeleteVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1DeleteVpcLinkCommand = deserializeAws_restJson1DeleteVpcLinkCommand;
const deserializeAws_restJson1DeleteVpcLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1ExportApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    body: undefined,
  };
  const data = await collectBody(output.body, context);
  contents.body = data;
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ExportApiCommand = deserializeAws_restJson1ExportApiCommand;
const deserializeAws_restJson1ExportApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiCommand = deserializeAws_restJson1GetApiCommand;
const deserializeAws_restJson1GetApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetApiMappingCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiMappingCommand = deserializeAws_restJson1GetApiMappingCommand;
const deserializeAws_restJson1GetApiMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetApiMappingsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApiMappingsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfApiMapping(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApiMappingsCommand = deserializeAws_restJson1GetApiMappingsCommand;
const deserializeAws_restJson1GetApiMappingsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetApisCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetApisCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfApi(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetApisCommand = deserializeAws_restJson1GetApisCommand;
const deserializeAws_restJson1GetApisCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAuthorizerCommand = deserializeAws_restJson1GetAuthorizerCommand;
const deserializeAws_restJson1GetAuthorizerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetAuthorizersCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAuthorizersCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfAuthorizer(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetAuthorizersCommand = deserializeAws_restJson1GetAuthorizersCommand;
const deserializeAws_restJson1GetAuthorizersCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
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
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetDeploymentsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfDeployment(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDeploymentsCommand = deserializeAws_restJson1GetDeploymentsCommand;
const deserializeAws_restJson1GetDeploymentsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainNameCommand = deserializeAws_restJson1GetDomainNameCommand;
const deserializeAws_restJson1GetDomainNameCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetDomainNamesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainNamesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfDomainName(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetDomainNamesCommand = deserializeAws_restJson1GetDomainNamesCommand;
const deserializeAws_restJson1GetDomainNamesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    ResponseParameters: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntegrationCommand = deserializeAws_restJson1GetIntegrationCommand;
const deserializeAws_restJson1GetIntegrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntegrationResponseCommand = deserializeAws_restJson1GetIntegrationResponseCommand;
const deserializeAws_restJson1GetIntegrationResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetIntegrationResponsesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationResponsesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfIntegrationResponse(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntegrationResponsesCommand = deserializeAws_restJson1GetIntegrationResponsesCommand;
const deserializeAws_restJson1GetIntegrationResponsesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetIntegrationsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntegrationsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfIntegration(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetIntegrationsCommand = deserializeAws_restJson1GetIntegrationsCommand;
const deserializeAws_restJson1GetIntegrationsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetModelCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetModelCommand = deserializeAws_restJson1GetModelCommand;
const deserializeAws_restJson1GetModelCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetModelsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelsCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfModel(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetModelsCommand = deserializeAws_restJson1GetModelsCommand;
const deserializeAws_restJson1GetModelsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetModelTemplateCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetModelTemplateCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Value: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.value !== undefined && data.value !== null) {
    contents.Value = data.value;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetModelTemplateCommand = deserializeAws_restJson1GetModelTemplateCommand;
const deserializeAws_restJson1GetModelTemplateCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRouteCommand = deserializeAws_restJson1GetRouteCommand;
const deserializeAws_restJson1GetRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetRouteResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRouteResponseCommand = deserializeAws_restJson1GetRouteResponseCommand;
const deserializeAws_restJson1GetRouteResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetRouteResponsesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRouteResponsesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfRouteResponse(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRouteResponsesCommand = deserializeAws_restJson1GetRouteResponsesCommand;
const deserializeAws_restJson1GetRouteResponsesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetRoutesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRoutesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfRoute(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetRoutesCommand = deserializeAws_restJson1GetRoutesCommand;
const deserializeAws_restJson1GetRoutesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetStageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStageCommand = deserializeAws_restJson1GetStageCommand;
const deserializeAws_restJson1GetStageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetStagesCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStagesCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfStage(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetStagesCommand = deserializeAws_restJson1GetStagesCommand;
const deserializeAws_restJson1GetStagesCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetTagsCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTagsCommandError(output, context);
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
exports.deserializeAws_restJson1GetTagsCommand = deserializeAws_restJson1GetTagsCommand;
const deserializeAws_restJson1GetTagsCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVpcLinkCommand = deserializeAws_restJson1GetVpcLinkCommand;
const deserializeAws_restJson1GetVpcLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1GetVpcLinksCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVpcLinksCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    Items: undefined,
    NextToken: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.items !== undefined && data.items !== null) {
    contents.Items = deserializeAws_restJson1__listOfVpcLink(data.items, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1GetVpcLinksCommand = deserializeAws_restJson1GetVpcLinksCommand;
const deserializeAws_restJson1GetVpcLinksCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1ImportApiCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ImportApiCommand = deserializeAws_restJson1ImportApiCommand;
const deserializeAws_restJson1ImportApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1ReimportApiCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReimportApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ReimportApiCommand = deserializeAws_restJson1ReimportApiCommand;
const deserializeAws_restJson1ReimportApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1ResetAuthorizersCacheCommand = async (output, context) => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetAuthorizersCacheCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1ResetAuthorizersCacheCommand = deserializeAws_restJson1ResetAuthorizersCacheCommand;
const deserializeAws_restJson1ResetAuthorizersCacheCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1TagResourceCommand = async (output, context) => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateApiCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiEndpoint: undefined,
    ApiGatewayManaged: undefined,
    ApiId: undefined,
    ApiKeySelectionExpression: undefined,
    CorsConfiguration: undefined,
    CreatedDate: undefined,
    Description: undefined,
    DisableExecuteApiEndpoint: undefined,
    DisableSchemaValidation: undefined,
    ImportInfo: undefined,
    Name: undefined,
    ProtocolType: undefined,
    RouteSelectionExpression: undefined,
    Tags: undefined,
    Version: undefined,
    Warnings: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiEndpoint !== undefined && data.apiEndpoint !== null) {
    contents.ApiEndpoint = data.apiEndpoint;
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiKeySelectionExpression !== undefined && data.apiKeySelectionExpression !== null) {
    contents.ApiKeySelectionExpression = data.apiKeySelectionExpression;
  }
  if (data.corsConfiguration !== undefined && data.corsConfiguration !== null) {
    contents.CorsConfiguration = deserializeAws_restJson1Cors(data.corsConfiguration, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.disableExecuteApiEndpoint !== undefined && data.disableExecuteApiEndpoint !== null) {
    contents.DisableExecuteApiEndpoint = data.disableExecuteApiEndpoint;
  }
  if (data.disableSchemaValidation !== undefined && data.disableSchemaValidation !== null) {
    contents.DisableSchemaValidation = data.disableSchemaValidation;
  }
  if (data.importInfo !== undefined && data.importInfo !== null) {
    contents.ImportInfo = deserializeAws_restJson1__listOf__string(data.importInfo, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.protocolType !== undefined && data.protocolType !== null) {
    contents.ProtocolType = data.protocolType;
  }
  if (data.routeSelectionExpression !== undefined && data.routeSelectionExpression !== null) {
    contents.RouteSelectionExpression = data.routeSelectionExpression;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.Version = data.version;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOf__string(data.warnings, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApiCommand = deserializeAws_restJson1UpdateApiCommand;
const deserializeAws_restJson1UpdateApiCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateApiMappingCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateApiMappingCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiId: undefined,
    ApiMappingId: undefined,
    ApiMappingKey: undefined,
    Stage: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiId !== undefined && data.apiId !== null) {
    contents.ApiId = data.apiId;
  }
  if (data.apiMappingId !== undefined && data.apiMappingId !== null) {
    contents.ApiMappingId = data.apiMappingId;
  }
  if (data.apiMappingKey !== undefined && data.apiMappingKey !== null) {
    contents.ApiMappingKey = data.apiMappingKey;
  }
  if (data.stage !== undefined && data.stage !== null) {
    contents.Stage = data.stage;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateApiMappingCommand = deserializeAws_restJson1UpdateApiMappingCommand;
const deserializeAws_restJson1UpdateApiMappingCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateAuthorizerCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAuthorizerCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AuthorizerCredentialsArn: undefined,
    AuthorizerId: undefined,
    AuthorizerPayloadFormatVersion: undefined,
    AuthorizerResultTtlInSeconds: undefined,
    AuthorizerType: undefined,
    AuthorizerUri: undefined,
    EnableSimpleResponses: undefined,
    IdentitySource: undefined,
    IdentityValidationExpression: undefined,
    JwtConfiguration: undefined,
    Name: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.authorizerCredentialsArn !== undefined && data.authorizerCredentialsArn !== null) {
    contents.AuthorizerCredentialsArn = data.authorizerCredentialsArn;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.authorizerPayloadFormatVersion !== undefined && data.authorizerPayloadFormatVersion !== null) {
    contents.AuthorizerPayloadFormatVersion = data.authorizerPayloadFormatVersion;
  }
  if (data.authorizerResultTtlInSeconds !== undefined && data.authorizerResultTtlInSeconds !== null) {
    contents.AuthorizerResultTtlInSeconds = data.authorizerResultTtlInSeconds;
  }
  if (data.authorizerType !== undefined && data.authorizerType !== null) {
    contents.AuthorizerType = data.authorizerType;
  }
  if (data.authorizerUri !== undefined && data.authorizerUri !== null) {
    contents.AuthorizerUri = data.authorizerUri;
  }
  if (data.enableSimpleResponses !== undefined && data.enableSimpleResponses !== null) {
    contents.EnableSimpleResponses = data.enableSimpleResponses;
  }
  if (data.identitySource !== undefined && data.identitySource !== null) {
    contents.IdentitySource = deserializeAws_restJson1IdentitySourceList(data.identitySource, context);
  }
  if (data.identityValidationExpression !== undefined && data.identityValidationExpression !== null) {
    contents.IdentityValidationExpression = data.identityValidationExpression;
  }
  if (data.jwtConfiguration !== undefined && data.jwtConfiguration !== null) {
    contents.JwtConfiguration = deserializeAws_restJson1JWTConfiguration(data.jwtConfiguration, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateAuthorizerCommand = deserializeAws_restJson1UpdateAuthorizerCommand;
const deserializeAws_restJson1UpdateAuthorizerCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateDeploymentCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDeploymentCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AutoDeployed: undefined,
    CreatedDate: undefined,
    DeploymentId: undefined,
    DeploymentStatus: undefined,
    DeploymentStatusMessage: undefined,
    Description: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.autoDeployed !== undefined && data.autoDeployed !== null) {
    contents.AutoDeployed = data.autoDeployed;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.DeploymentStatus = data.deploymentStatus;
  }
  if (data.deploymentStatusMessage !== undefined && data.deploymentStatusMessage !== null) {
    contents.DeploymentStatusMessage = data.deploymentStatusMessage;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDeploymentCommand = deserializeAws_restJson1UpdateDeploymentCommand;
const deserializeAws_restJson1UpdateDeploymentCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateDomainNameCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDomainNameCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiMappingSelectionExpression: undefined,
    DomainName: undefined,
    DomainNameConfigurations: undefined,
    MutualTlsAuthentication: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiMappingSelectionExpression !== undefined && data.apiMappingSelectionExpression !== null) {
    contents.ApiMappingSelectionExpression = data.apiMappingSelectionExpression;
  }
  if (data.domainName !== undefined && data.domainName !== null) {
    contents.DomainName = data.domainName;
  }
  if (data.domainNameConfigurations !== undefined && data.domainNameConfigurations !== null) {
    contents.DomainNameConfigurations = deserializeAws_restJson1DomainNameConfigurations(
      data.domainNameConfigurations,
      context
    );
  }
  if (data.mutualTlsAuthentication !== undefined && data.mutualTlsAuthentication !== null) {
    contents.MutualTlsAuthentication = deserializeAws_restJson1MutualTlsAuthentication(
      data.mutualTlsAuthentication,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateDomainNameCommand = deserializeAws_restJson1UpdateDomainNameCommand;
const deserializeAws_restJson1UpdateDomainNameCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateIntegrationCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ConnectionId: undefined,
    ConnectionType: undefined,
    ContentHandlingStrategy: undefined,
    CredentialsArn: undefined,
    Description: undefined,
    IntegrationId: undefined,
    IntegrationMethod: undefined,
    IntegrationResponseSelectionExpression: undefined,
    IntegrationSubtype: undefined,
    IntegrationType: undefined,
    IntegrationUri: undefined,
    PassthroughBehavior: undefined,
    PayloadFormatVersion: undefined,
    RequestParameters: undefined,
    RequestTemplates: undefined,
    ResponseParameters: undefined,
    TemplateSelectionExpression: undefined,
    TimeoutInMillis: undefined,
    TlsConfig: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.connectionId !== undefined && data.connectionId !== null) {
    contents.ConnectionId = data.connectionId;
  }
  if (data.connectionType !== undefined && data.connectionType !== null) {
    contents.ConnectionType = data.connectionType;
  }
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.credentialsArn !== undefined && data.credentialsArn !== null) {
    contents.CredentialsArn = data.credentialsArn;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.integrationId !== undefined && data.integrationId !== null) {
    contents.IntegrationId = data.integrationId;
  }
  if (data.integrationMethod !== undefined && data.integrationMethod !== null) {
    contents.IntegrationMethod = data.integrationMethod;
  }
  if (
    data.integrationResponseSelectionExpression !== undefined &&
    data.integrationResponseSelectionExpression !== null
  ) {
    contents.IntegrationResponseSelectionExpression = data.integrationResponseSelectionExpression;
  }
  if (data.integrationSubtype !== undefined && data.integrationSubtype !== null) {
    contents.IntegrationSubtype = data.integrationSubtype;
  }
  if (data.integrationType !== undefined && data.integrationType !== null) {
    contents.IntegrationType = data.integrationType;
  }
  if (data.integrationUri !== undefined && data.integrationUri !== null) {
    contents.IntegrationUri = data.integrationUri;
  }
  if (data.passthroughBehavior !== undefined && data.passthroughBehavior !== null) {
    contents.PassthroughBehavior = data.passthroughBehavior;
  }
  if (data.payloadFormatVersion !== undefined && data.payloadFormatVersion !== null) {
    contents.PayloadFormatVersion = data.payloadFormatVersion;
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1IntegrationParameters(data.requestParameters, context);
  }
  if (data.requestTemplates !== undefined && data.requestTemplates !== null) {
    contents.RequestTemplates = deserializeAws_restJson1TemplateMap(data.requestTemplates, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1ResponseParameters(data.responseParameters, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  if (data.timeoutInMillis !== undefined && data.timeoutInMillis !== null) {
    contents.TimeoutInMillis = data.timeoutInMillis;
  }
  if (data.tlsConfig !== undefined && data.tlsConfig !== null) {
    contents.TlsConfig = deserializeAws_restJson1TlsConfig(data.tlsConfig, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIntegrationCommand = deserializeAws_restJson1UpdateIntegrationCommand;
const deserializeAws_restJson1UpdateIntegrationCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateIntegrationResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntegrationResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentHandlingStrategy: undefined,
    IntegrationResponseId: undefined,
    IntegrationResponseKey: undefined,
    ResponseParameters: undefined,
    ResponseTemplates: undefined,
    TemplateSelectionExpression: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentHandlingStrategy !== undefined && data.contentHandlingStrategy !== null) {
    contents.ContentHandlingStrategy = data.contentHandlingStrategy;
  }
  if (data.integrationResponseId !== undefined && data.integrationResponseId !== null) {
    contents.IntegrationResponseId = data.integrationResponseId;
  }
  if (data.integrationResponseKey !== undefined && data.integrationResponseKey !== null) {
    contents.IntegrationResponseKey = data.integrationResponseKey;
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1IntegrationParameters(data.responseParameters, context);
  }
  if (data.responseTemplates !== undefined && data.responseTemplates !== null) {
    contents.ResponseTemplates = deserializeAws_restJson1TemplateMap(data.responseTemplates, context);
  }
  if (data.templateSelectionExpression !== undefined && data.templateSelectionExpression !== null) {
    contents.TemplateSelectionExpression = data.templateSelectionExpression;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateIntegrationResponseCommand =
  deserializeAws_restJson1UpdateIntegrationResponseCommand;
const deserializeAws_restJson1UpdateIntegrationResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateModelCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateModelCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ContentType: undefined,
    Description: undefined,
    ModelId: undefined,
    Name: undefined,
    Schema: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.contentType !== undefined && data.contentType !== null) {
    contents.ContentType = data.contentType;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.modelId !== undefined && data.modelId !== null) {
    contents.ModelId = data.modelId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.schema !== undefined && data.schema !== null) {
    contents.Schema = data.schema;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateModelCommand = deserializeAws_restJson1UpdateModelCommand;
const deserializeAws_restJson1UpdateModelCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateRouteCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ApiGatewayManaged: undefined,
    ApiKeyRequired: undefined,
    AuthorizationScopes: undefined,
    AuthorizationType: undefined,
    AuthorizerId: undefined,
    ModelSelectionExpression: undefined,
    OperationName: undefined,
    RequestModels: undefined,
    RequestParameters: undefined,
    RouteId: undefined,
    RouteKey: undefined,
    RouteResponseSelectionExpression: undefined,
    Target: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.apiKeyRequired !== undefined && data.apiKeyRequired !== null) {
    contents.ApiKeyRequired = data.apiKeyRequired;
  }
  if (data.authorizationScopes !== undefined && data.authorizationScopes !== null) {
    contents.AuthorizationScopes = deserializeAws_restJson1AuthorizationScopes(data.authorizationScopes, context);
  }
  if (data.authorizationType !== undefined && data.authorizationType !== null) {
    contents.AuthorizationType = data.authorizationType;
  }
  if (data.authorizerId !== undefined && data.authorizerId !== null) {
    contents.AuthorizerId = data.authorizerId;
  }
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.operationName !== undefined && data.operationName !== null) {
    contents.OperationName = data.operationName;
  }
  if (data.requestModels !== undefined && data.requestModels !== null) {
    contents.RequestModels = deserializeAws_restJson1RouteModels(data.requestModels, context);
  }
  if (data.requestParameters !== undefined && data.requestParameters !== null) {
    contents.RequestParameters = deserializeAws_restJson1RouteParameters(data.requestParameters, context);
  }
  if (data.routeId !== undefined && data.routeId !== null) {
    contents.RouteId = data.routeId;
  }
  if (data.routeKey !== undefined && data.routeKey !== null) {
    contents.RouteKey = data.routeKey;
  }
  if (data.routeResponseSelectionExpression !== undefined && data.routeResponseSelectionExpression !== null) {
    contents.RouteResponseSelectionExpression = data.routeResponseSelectionExpression;
  }
  if (data.target !== undefined && data.target !== null) {
    contents.Target = data.target;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRouteCommand = deserializeAws_restJson1UpdateRouteCommand;
const deserializeAws_restJson1UpdateRouteCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateRouteResponseCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRouteResponseCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    ModelSelectionExpression: undefined,
    ResponseModels: undefined,
    ResponseParameters: undefined,
    RouteResponseId: undefined,
    RouteResponseKey: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.modelSelectionExpression !== undefined && data.modelSelectionExpression !== null) {
    contents.ModelSelectionExpression = data.modelSelectionExpression;
  }
  if (data.responseModels !== undefined && data.responseModels !== null) {
    contents.ResponseModels = deserializeAws_restJson1RouteModels(data.responseModels, context);
  }
  if (data.responseParameters !== undefined && data.responseParameters !== null) {
    contents.ResponseParameters = deserializeAws_restJson1RouteParameters(data.responseParameters, context);
  }
  if (data.routeResponseId !== undefined && data.routeResponseId !== null) {
    contents.RouteResponseId = data.routeResponseId;
  }
  if (data.routeResponseKey !== undefined && data.routeResponseKey !== null) {
    contents.RouteResponseKey = data.routeResponseKey;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateRouteResponseCommand = deserializeAws_restJson1UpdateRouteResponseCommand;
const deserializeAws_restJson1UpdateRouteResponseCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateStageCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStageCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    AccessLogSettings: undefined,
    ApiGatewayManaged: undefined,
    AutoDeploy: undefined,
    ClientCertificateId: undefined,
    CreatedDate: undefined,
    DefaultRouteSettings: undefined,
    DeploymentId: undefined,
    Description: undefined,
    LastDeploymentStatusMessage: undefined,
    LastUpdatedDate: undefined,
    RouteSettings: undefined,
    StageName: undefined,
    StageVariables: undefined,
    Tags: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.accessLogSettings !== undefined && data.accessLogSettings !== null) {
    contents.AccessLogSettings = deserializeAws_restJson1AccessLogSettings(data.accessLogSettings, context);
  }
  if (data.apiGatewayManaged !== undefined && data.apiGatewayManaged !== null) {
    contents.ApiGatewayManaged = data.apiGatewayManaged;
  }
  if (data.autoDeploy !== undefined && data.autoDeploy !== null) {
    contents.AutoDeploy = data.autoDeploy;
  }
  if (data.clientCertificateId !== undefined && data.clientCertificateId !== null) {
    contents.ClientCertificateId = data.clientCertificateId;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.defaultRouteSettings !== undefined && data.defaultRouteSettings !== null) {
    contents.DefaultRouteSettings = deserializeAws_restJson1RouteSettings(data.defaultRouteSettings, context);
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.DeploymentId = data.deploymentId;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.lastDeploymentStatusMessage !== undefined && data.lastDeploymentStatusMessage !== null) {
    contents.LastDeploymentStatusMessage = data.lastDeploymentStatusMessage;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.LastUpdatedDate = new Date(data.lastUpdatedDate);
  }
  if (data.routeSettings !== undefined && data.routeSettings !== null) {
    contents.RouteSettings = deserializeAws_restJson1RouteSettingsMap(data.routeSettings, context);
  }
  if (data.stageName !== undefined && data.stageName !== null) {
    contents.StageName = data.stageName;
  }
  if (data.stageVariables !== undefined && data.stageVariables !== null) {
    contents.StageVariables = deserializeAws_restJson1StageVariablesMap(data.stageVariables, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateStageCommand = deserializeAws_restJson1UpdateStageCommand;
const deserializeAws_restJson1UpdateStageCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.apigatewayv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1UpdateVpcLinkCommand = async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateVpcLinkCommandError(output, context);
  }
  const contents = {
    $metadata: deserializeMetadata(output),
    CreatedDate: undefined,
    Name: undefined,
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    VpcLinkId: undefined,
    VpcLinkStatus: undefined,
    VpcLinkStatusMessage: undefined,
    VpcLinkVersion: undefined,
  };
  const data = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.CreatedDate = new Date(data.createdDate);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.securityGroupIds !== undefined && data.securityGroupIds !== null) {
    contents.SecurityGroupIds = deserializeAws_restJson1SecurityGroupIdList(data.securityGroupIds, context);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1SubnetIdList(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.vpcLinkId !== undefined && data.vpcLinkId !== null) {
    contents.VpcLinkId = data.vpcLinkId;
  }
  if (data.vpcLinkStatus !== undefined && data.vpcLinkStatus !== null) {
    contents.VpcLinkStatus = data.vpcLinkStatus;
  }
  if (data.vpcLinkStatusMessage !== undefined && data.vpcLinkStatusMessage !== null) {
    contents.VpcLinkStatusMessage = data.vpcLinkStatusMessage;
  }
  if (data.vpcLinkVersion !== undefined && data.vpcLinkVersion !== null) {
    contents.VpcLinkVersion = data.vpcLinkVersion;
  }
  return Promise.resolve(contents);
};
exports.deserializeAws_restJson1UpdateVpcLinkCommand = deserializeAws_restJson1UpdateVpcLinkCommand;
const deserializeAws_restJson1UpdateVpcLinkCommandError = async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.apigatewayv2#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.apigatewayv2#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.apigatewayv2#TooManyRequestsException":
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1BadRequestExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1ConflictExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};
const deserializeAws_restJson1NotFoundExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceType: undefined,
  };
  const data = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.ResourceType = data.resourceType;
  }
  return contents;
};
const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (parsedOutput, context) => {
  const contents = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitType: undefined,
    Message: undefined,
  };
  const data = parsedOutput.body;
  if (data.limitType !== undefined && data.limitType !== null) {
    contents.LimitType = data.limitType;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};
const serializeAws_restJson1__listOf__string = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1AccessLogSettings = (input, context) => {
  return {
    ...(input.DestinationArn !== undefined &&
      input.DestinationArn !== null && { destinationArn: input.DestinationArn }),
    ...(input.Format !== undefined && input.Format !== null && { format: input.Format }),
  };
};
const serializeAws_restJson1AuthorizationScopes = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1Cors = (input, context) => {
  return {
    ...(input.AllowCredentials !== undefined &&
      input.AllowCredentials !== null && { allowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders !== undefined &&
      input.AllowHeaders !== null && {
        allowHeaders: serializeAws_restJson1CorsHeaderList(input.AllowHeaders, context),
      }),
    ...(input.AllowMethods !== undefined &&
      input.AllowMethods !== null && {
        allowMethods: serializeAws_restJson1CorsMethodList(input.AllowMethods, context),
      }),
    ...(input.AllowOrigins !== undefined &&
      input.AllowOrigins !== null && {
        allowOrigins: serializeAws_restJson1CorsOriginList(input.AllowOrigins, context),
      }),
    ...(input.ExposeHeaders !== undefined &&
      input.ExposeHeaders !== null && {
        exposeHeaders: serializeAws_restJson1CorsHeaderList(input.ExposeHeaders, context),
      }),
    ...(input.MaxAge !== undefined && input.MaxAge !== null && { maxAge: input.MaxAge }),
  };
};
const serializeAws_restJson1CorsHeaderList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1CorsMethodList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1CorsOriginList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1DomainNameConfiguration = (input, context) => {
  return {
    ...(input.ApiGatewayDomainName !== undefined &&
      input.ApiGatewayDomainName !== null && { apiGatewayDomainName: input.ApiGatewayDomainName }),
    ...(input.CertificateArn !== undefined &&
      input.CertificateArn !== null && { certificateArn: input.CertificateArn }),
    ...(input.CertificateName !== undefined &&
      input.CertificateName !== null && { certificateName: input.CertificateName }),
    ...(input.CertificateUploadDate !== undefined &&
      input.CertificateUploadDate !== null && {
        certificateUploadDate: input.CertificateUploadDate.toISOString().split(".")[0] + "Z",
      }),
    ...(input.DomainNameStatus !== undefined &&
      input.DomainNameStatus !== null && { domainNameStatus: input.DomainNameStatus }),
    ...(input.DomainNameStatusMessage !== undefined &&
      input.DomainNameStatusMessage !== null && { domainNameStatusMessage: input.DomainNameStatusMessage }),
    ...(input.EndpointType !== undefined && input.EndpointType !== null && { endpointType: input.EndpointType }),
    ...(input.HostedZoneId !== undefined && input.HostedZoneId !== null && { hostedZoneId: input.HostedZoneId }),
    ...(input.SecurityPolicy !== undefined &&
      input.SecurityPolicy !== null && { securityPolicy: input.SecurityPolicy }),
  };
};
const serializeAws_restJson1DomainNameConfigurations = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return serializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};
const serializeAws_restJson1IdentitySourceList = (input, context) => {
  return input
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const serializeAws_restJson1IntegrationParameters = (input, context) => {
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
const serializeAws_restJson1JWTConfiguration = (input, context) => {
  return {
    ...(input.Audience !== undefined &&
      input.Audience !== null && { audience: serializeAws_restJson1__listOf__string(input.Audience, context) }),
    ...(input.Issuer !== undefined && input.Issuer !== null && { issuer: input.Issuer }),
  };
};
const serializeAws_restJson1MutualTlsAuthenticationInput = (input, context) => {
  return {
    ...(input.TruststoreUri !== undefined && input.TruststoreUri !== null && { truststoreUri: input.TruststoreUri }),
    ...(input.TruststoreVersion !== undefined &&
      input.TruststoreVersion !== null && { truststoreVersion: input.TruststoreVersion }),
  };
};
const serializeAws_restJson1ParameterConstraints = (input, context) => {
  return {
    ...(input.Required !== undefined && input.Required !== null && { required: input.Required }),
  };
};
const serializeAws_restJson1ResponseParameters = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1IntegrationParameters(value, context),
    };
  }, {});
};
const serializeAws_restJson1RouteModels = (input, context) => {
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
const serializeAws_restJson1RouteParameters = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1ParameterConstraints(value, context),
    };
  }, {});
};
const serializeAws_restJson1RouteSettings = (input, context) => {
  return {
    ...(input.DataTraceEnabled !== undefined &&
      input.DataTraceEnabled !== null && { dataTraceEnabled: input.DataTraceEnabled }),
    ...(input.DetailedMetricsEnabled !== undefined &&
      input.DetailedMetricsEnabled !== null && { detailedMetricsEnabled: input.DetailedMetricsEnabled }),
    ...(input.LoggingLevel !== undefined && input.LoggingLevel !== null && { loggingLevel: input.LoggingLevel }),
    ...(input.ThrottlingBurstLimit !== undefined &&
      input.ThrottlingBurstLimit !== null && { throttlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit !== undefined &&
      input.ThrottlingRateLimit !== null && { throttlingRateLimit: input.ThrottlingRateLimit }),
  };
};
const serializeAws_restJson1RouteSettingsMap = (input, context) => {
  return Object.entries(input).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1RouteSettings(value, context),
    };
  }, {});
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
const serializeAws_restJson1StageVariablesMap = (input, context) => {
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
const serializeAws_restJson1SubnetIdList = (input, context) => {
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
const serializeAws_restJson1TemplateMap = (input, context) => {
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
const serializeAws_restJson1TlsConfigInput = (input, context) => {
  return {
    ...(input.ServerNameToVerify !== undefined &&
      input.ServerNameToVerify !== null && { serverNameToVerify: input.ServerNameToVerify }),
  };
};
const deserializeAws_restJson1__listOf__string = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1__listOfApi = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Api(entry, context);
    });
};
const deserializeAws_restJson1__listOfApiMapping = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1ApiMapping(entry, context);
    });
};
const deserializeAws_restJson1__listOfAuthorizer = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Authorizer(entry, context);
    });
};
const deserializeAws_restJson1__listOfDeployment = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
};
const deserializeAws_restJson1__listOfDomainName = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainName(entry, context);
    });
};
const deserializeAws_restJson1__listOfIntegration = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Integration(entry, context);
    });
};
const deserializeAws_restJson1__listOfIntegrationResponse = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1IntegrationResponse(entry, context);
    });
};
const deserializeAws_restJson1__listOfModel = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Model(entry, context);
    });
};
const deserializeAws_restJson1__listOfRoute = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Route(entry, context);
    });
};
const deserializeAws_restJson1__listOfRouteResponse = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1RouteResponse(entry, context);
    });
};
const deserializeAws_restJson1__listOfStage = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1Stage(entry, context);
    });
};
const deserializeAws_restJson1__listOfVpcLink = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1VpcLink(entry, context);
    });
};
const deserializeAws_restJson1AccessLogSettings = (output, context) => {
  return {
    DestinationArn:
      output.destinationArn !== undefined && output.destinationArn !== null ? output.destinationArn : undefined,
    Format: output.format !== undefined && output.format !== null ? output.format : undefined,
  };
};
const deserializeAws_restJson1Api = (output, context) => {
  return {
    ApiEndpoint: output.apiEndpoint !== undefined && output.apiEndpoint !== null ? output.apiEndpoint : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiKeySelectionExpression:
      output.apiKeySelectionExpression !== undefined && output.apiKeySelectionExpression !== null
        ? output.apiKeySelectionExpression
        : undefined,
    CorsConfiguration:
      output.corsConfiguration !== undefined && output.corsConfiguration !== null
        ? deserializeAws_restJson1Cors(output.corsConfiguration, context)
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    DisableExecuteApiEndpoint:
      output.disableExecuteApiEndpoint !== undefined && output.disableExecuteApiEndpoint !== null
        ? output.disableExecuteApiEndpoint
        : undefined,
    DisableSchemaValidation:
      output.disableSchemaValidation !== undefined && output.disableSchemaValidation !== null
        ? output.disableSchemaValidation
        : undefined,
    ImportInfo:
      output.importInfo !== undefined && output.importInfo !== null
        ? deserializeAws_restJson1__listOf__string(output.importInfo, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    ProtocolType: output.protocolType !== undefined && output.protocolType !== null ? output.protocolType : undefined,
    RouteSelectionExpression:
      output.routeSelectionExpression !== undefined && output.routeSelectionExpression !== null
        ? output.routeSelectionExpression
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    Version: output.version !== undefined && output.version !== null ? output.version : undefined,
    Warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_restJson1__listOf__string(output.warnings, context)
        : undefined,
  };
};
const deserializeAws_restJson1ApiMapping = (output, context) => {
  return {
    ApiId: output.apiId !== undefined && output.apiId !== null ? output.apiId : undefined,
    ApiMappingId: output.apiMappingId !== undefined && output.apiMappingId !== null ? output.apiMappingId : undefined,
    ApiMappingKey:
      output.apiMappingKey !== undefined && output.apiMappingKey !== null ? output.apiMappingKey : undefined,
    Stage: output.stage !== undefined && output.stage !== null ? output.stage : undefined,
  };
};
const deserializeAws_restJson1AuthorizationScopes = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1Authorizer = (output, context) => {
  return {
    AuthorizerCredentialsArn:
      output.authorizerCredentialsArn !== undefined && output.authorizerCredentialsArn !== null
        ? output.authorizerCredentialsArn
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    AuthorizerPayloadFormatVersion:
      output.authorizerPayloadFormatVersion !== undefined && output.authorizerPayloadFormatVersion !== null
        ? output.authorizerPayloadFormatVersion
        : undefined,
    AuthorizerResultTtlInSeconds:
      output.authorizerResultTtlInSeconds !== undefined && output.authorizerResultTtlInSeconds !== null
        ? output.authorizerResultTtlInSeconds
        : undefined,
    AuthorizerType:
      output.authorizerType !== undefined && output.authorizerType !== null ? output.authorizerType : undefined,
    AuthorizerUri:
      output.authorizerUri !== undefined && output.authorizerUri !== null ? output.authorizerUri : undefined,
    EnableSimpleResponses:
      output.enableSimpleResponses !== undefined && output.enableSimpleResponses !== null
        ? output.enableSimpleResponses
        : undefined,
    IdentitySource:
      output.identitySource !== undefined && output.identitySource !== null
        ? deserializeAws_restJson1IdentitySourceList(output.identitySource, context)
        : undefined,
    IdentityValidationExpression:
      output.identityValidationExpression !== undefined && output.identityValidationExpression !== null
        ? output.identityValidationExpression
        : undefined,
    JwtConfiguration:
      output.jwtConfiguration !== undefined && output.jwtConfiguration !== null
        ? deserializeAws_restJson1JWTConfiguration(output.jwtConfiguration, context)
        : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
  };
};
const deserializeAws_restJson1Cors = (output, context) => {
  return {
    AllowCredentials:
      output.allowCredentials !== undefined && output.allowCredentials !== null ? output.allowCredentials : undefined,
    AllowHeaders:
      output.allowHeaders !== undefined && output.allowHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.allowHeaders, context)
        : undefined,
    AllowMethods:
      output.allowMethods !== undefined && output.allowMethods !== null
        ? deserializeAws_restJson1CorsMethodList(output.allowMethods, context)
        : undefined,
    AllowOrigins:
      output.allowOrigins !== undefined && output.allowOrigins !== null
        ? deserializeAws_restJson1CorsOriginList(output.allowOrigins, context)
        : undefined,
    ExposeHeaders:
      output.exposeHeaders !== undefined && output.exposeHeaders !== null
        ? deserializeAws_restJson1CorsHeaderList(output.exposeHeaders, context)
        : undefined,
    MaxAge: output.maxAge !== undefined && output.maxAge !== null ? output.maxAge : undefined,
  };
};
const deserializeAws_restJson1CorsHeaderList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1CorsMethodList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1CorsOriginList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1Deployment = (output, context) => {
  return {
    AutoDeployed: output.autoDeployed !== undefined && output.autoDeployed !== null ? output.autoDeployed : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    DeploymentStatus:
      output.deploymentStatus !== undefined && output.deploymentStatus !== null ? output.deploymentStatus : undefined,
    DeploymentStatusMessage:
      output.deploymentStatusMessage !== undefined && output.deploymentStatusMessage !== null
        ? output.deploymentStatusMessage
        : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
  };
};
const deserializeAws_restJson1DomainName = (output, context) => {
  return {
    ApiMappingSelectionExpression:
      output.apiMappingSelectionExpression !== undefined && output.apiMappingSelectionExpression !== null
        ? output.apiMappingSelectionExpression
        : undefined,
    DomainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    DomainNameConfigurations:
      output.domainNameConfigurations !== undefined && output.domainNameConfigurations !== null
        ? deserializeAws_restJson1DomainNameConfigurations(output.domainNameConfigurations, context)
        : undefined,
    MutualTlsAuthentication:
      output.mutualTlsAuthentication !== undefined && output.mutualTlsAuthentication !== null
        ? deserializeAws_restJson1MutualTlsAuthentication(output.mutualTlsAuthentication, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1DomainNameConfiguration = (output, context) => {
  return {
    ApiGatewayDomainName:
      output.apiGatewayDomainName !== undefined && output.apiGatewayDomainName !== null
        ? output.apiGatewayDomainName
        : undefined,
    CertificateArn:
      output.certificateArn !== undefined && output.certificateArn !== null ? output.certificateArn : undefined,
    CertificateName:
      output.certificateName !== undefined && output.certificateName !== null ? output.certificateName : undefined,
    CertificateUploadDate:
      output.certificateUploadDate !== undefined && output.certificateUploadDate !== null
        ? new Date(output.certificateUploadDate)
        : undefined,
    DomainNameStatus:
      output.domainNameStatus !== undefined && output.domainNameStatus !== null ? output.domainNameStatus : undefined,
    DomainNameStatusMessage:
      output.domainNameStatusMessage !== undefined && output.domainNameStatusMessage !== null
        ? output.domainNameStatusMessage
        : undefined,
    EndpointType: output.endpointType !== undefined && output.endpointType !== null ? output.endpointType : undefined,
    HostedZoneId: output.hostedZoneId !== undefined && output.hostedZoneId !== null ? output.hostedZoneId : undefined,
    SecurityPolicy:
      output.securityPolicy !== undefined && output.securityPolicy !== null ? output.securityPolicy : undefined,
  };
};
const deserializeAws_restJson1DomainNameConfigurations = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return deserializeAws_restJson1DomainNameConfiguration(entry, context);
    });
};
const deserializeAws_restJson1IdentitySourceList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
    });
};
const deserializeAws_restJson1Integration = (output, context) => {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ConnectionId: output.connectionId !== undefined && output.connectionId !== null ? output.connectionId : undefined,
    ConnectionType:
      output.connectionType !== undefined && output.connectionType !== null ? output.connectionType : undefined,
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    CredentialsArn:
      output.credentialsArn !== undefined && output.credentialsArn !== null ? output.credentialsArn : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    IntegrationId:
      output.integrationId !== undefined && output.integrationId !== null ? output.integrationId : undefined,
    IntegrationMethod:
      output.integrationMethod !== undefined && output.integrationMethod !== null
        ? output.integrationMethod
        : undefined,
    IntegrationResponseSelectionExpression:
      output.integrationResponseSelectionExpression !== undefined &&
      output.integrationResponseSelectionExpression !== null
        ? output.integrationResponseSelectionExpression
        : undefined,
    IntegrationSubtype:
      output.integrationSubtype !== undefined && output.integrationSubtype !== null
        ? output.integrationSubtype
        : undefined,
    IntegrationType:
      output.integrationType !== undefined && output.integrationType !== null ? output.integrationType : undefined,
    IntegrationUri:
      output.integrationUri !== undefined && output.integrationUri !== null ? output.integrationUri : undefined,
    PassthroughBehavior:
      output.passthroughBehavior !== undefined && output.passthroughBehavior !== null
        ? output.passthroughBehavior
        : undefined,
    PayloadFormatVersion:
      output.payloadFormatVersion !== undefined && output.payloadFormatVersion !== null
        ? output.payloadFormatVersion
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.requestParameters, context)
        : undefined,
    RequestTemplates:
      output.requestTemplates !== undefined && output.requestTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.requestTemplates, context)
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1ResponseParameters(output.responseParameters, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
    TimeoutInMillis:
      output.timeoutInMillis !== undefined && output.timeoutInMillis !== null ? output.timeoutInMillis : undefined,
    TlsConfig:
      output.tlsConfig !== undefined && output.tlsConfig !== null
        ? deserializeAws_restJson1TlsConfig(output.tlsConfig, context)
        : undefined,
  };
};
const deserializeAws_restJson1IntegrationParameters = (output, context) => {
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
const deserializeAws_restJson1IntegrationResponse = (output, context) => {
  return {
    ContentHandlingStrategy:
      output.contentHandlingStrategy !== undefined && output.contentHandlingStrategy !== null
        ? output.contentHandlingStrategy
        : undefined,
    IntegrationResponseId:
      output.integrationResponseId !== undefined && output.integrationResponseId !== null
        ? output.integrationResponseId
        : undefined,
    IntegrationResponseKey:
      output.integrationResponseKey !== undefined && output.integrationResponseKey !== null
        ? output.integrationResponseKey
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1IntegrationParameters(output.responseParameters, context)
        : undefined,
    ResponseTemplates:
      output.responseTemplates !== undefined && output.responseTemplates !== null
        ? deserializeAws_restJson1TemplateMap(output.responseTemplates, context)
        : undefined,
    TemplateSelectionExpression:
      output.templateSelectionExpression !== undefined && output.templateSelectionExpression !== null
        ? output.templateSelectionExpression
        : undefined,
  };
};
const deserializeAws_restJson1JWTConfiguration = (output, context) => {
  return {
    Audience:
      output.audience !== undefined && output.audience !== null
        ? deserializeAws_restJson1__listOf__string(output.audience, context)
        : undefined,
    Issuer: output.issuer !== undefined && output.issuer !== null ? output.issuer : undefined,
  };
};
const deserializeAws_restJson1Model = (output, context) => {
  return {
    ContentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    ModelId: output.modelId !== undefined && output.modelId !== null ? output.modelId : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    Schema: output.schema !== undefined && output.schema !== null ? output.schema : undefined,
  };
};
const deserializeAws_restJson1MutualTlsAuthentication = (output, context) => {
  return {
    TruststoreUri:
      output.truststoreUri !== undefined && output.truststoreUri !== null ? output.truststoreUri : undefined,
    TruststoreVersion:
      output.truststoreVersion !== undefined && output.truststoreVersion !== null
        ? output.truststoreVersion
        : undefined,
    TruststoreWarnings:
      output.truststoreWarnings !== undefined && output.truststoreWarnings !== null
        ? deserializeAws_restJson1__listOf__string(output.truststoreWarnings, context)
        : undefined,
  };
};
const deserializeAws_restJson1ParameterConstraints = (output, context) => {
  return {
    Required: output.required !== undefined && output.required !== null ? output.required : undefined,
  };
};
const deserializeAws_restJson1ResponseParameters = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1IntegrationParameters(value, context),
    };
  }, {});
};
const deserializeAws_restJson1Route = (output, context) => {
  return {
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    ApiKeyRequired:
      output.apiKeyRequired !== undefined && output.apiKeyRequired !== null ? output.apiKeyRequired : undefined,
    AuthorizationScopes:
      output.authorizationScopes !== undefined && output.authorizationScopes !== null
        ? deserializeAws_restJson1AuthorizationScopes(output.authorizationScopes, context)
        : undefined,
    AuthorizationType:
      output.authorizationType !== undefined && output.authorizationType !== null
        ? output.authorizationType
        : undefined,
    AuthorizerId: output.authorizerId !== undefined && output.authorizerId !== null ? output.authorizerId : undefined,
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    OperationName:
      output.operationName !== undefined && output.operationName !== null ? output.operationName : undefined,
    RequestModels:
      output.requestModels !== undefined && output.requestModels !== null
        ? deserializeAws_restJson1RouteModels(output.requestModels, context)
        : undefined,
    RequestParameters:
      output.requestParameters !== undefined && output.requestParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.requestParameters, context)
        : undefined,
    RouteId: output.routeId !== undefined && output.routeId !== null ? output.routeId : undefined,
    RouteKey: output.routeKey !== undefined && output.routeKey !== null ? output.routeKey : undefined,
    RouteResponseSelectionExpression:
      output.routeResponseSelectionExpression !== undefined && output.routeResponseSelectionExpression !== null
        ? output.routeResponseSelectionExpression
        : undefined,
    Target: output.target !== undefined && output.target !== null ? output.target : undefined,
  };
};
const deserializeAws_restJson1RouteModels = (output, context) => {
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
const deserializeAws_restJson1RouteParameters = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1ParameterConstraints(value, context),
    };
  }, {});
};
const deserializeAws_restJson1RouteResponse = (output, context) => {
  return {
    ModelSelectionExpression:
      output.modelSelectionExpression !== undefined && output.modelSelectionExpression !== null
        ? output.modelSelectionExpression
        : undefined,
    ResponseModels:
      output.responseModels !== undefined && output.responseModels !== null
        ? deserializeAws_restJson1RouteModels(output.responseModels, context)
        : undefined,
    ResponseParameters:
      output.responseParameters !== undefined && output.responseParameters !== null
        ? deserializeAws_restJson1RouteParameters(output.responseParameters, context)
        : undefined,
    RouteResponseId:
      output.routeResponseId !== undefined && output.routeResponseId !== null ? output.routeResponseId : undefined,
    RouteResponseKey:
      output.routeResponseKey !== undefined && output.routeResponseKey !== null ? output.routeResponseKey : undefined,
  };
};
const deserializeAws_restJson1RouteSettings = (output, context) => {
  return {
    DataTraceEnabled:
      output.dataTraceEnabled !== undefined && output.dataTraceEnabled !== null ? output.dataTraceEnabled : undefined,
    DetailedMetricsEnabled:
      output.detailedMetricsEnabled !== undefined && output.detailedMetricsEnabled !== null
        ? output.detailedMetricsEnabled
        : undefined,
    LoggingLevel: output.loggingLevel !== undefined && output.loggingLevel !== null ? output.loggingLevel : undefined,
    ThrottlingBurstLimit:
      output.throttlingBurstLimit !== undefined && output.throttlingBurstLimit !== null
        ? output.throttlingBurstLimit
        : undefined,
    ThrottlingRateLimit:
      output.throttlingRateLimit !== undefined && output.throttlingRateLimit !== null
        ? output.throttlingRateLimit
        : undefined,
  };
};
const deserializeAws_restJson1RouteSettingsMap = (output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1RouteSettings(value, context),
    };
  }, {});
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
const deserializeAws_restJson1Stage = (output, context) => {
  return {
    AccessLogSettings:
      output.accessLogSettings !== undefined && output.accessLogSettings !== null
        ? deserializeAws_restJson1AccessLogSettings(output.accessLogSettings, context)
        : undefined,
    ApiGatewayManaged:
      output.apiGatewayManaged !== undefined && output.apiGatewayManaged !== null
        ? output.apiGatewayManaged
        : undefined,
    AutoDeploy: output.autoDeploy !== undefined && output.autoDeploy !== null ? output.autoDeploy : undefined,
    ClientCertificateId:
      output.clientCertificateId !== undefined && output.clientCertificateId !== null
        ? output.clientCertificateId
        : undefined,
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    DefaultRouteSettings:
      output.defaultRouteSettings !== undefined && output.defaultRouteSettings !== null
        ? deserializeAws_restJson1RouteSettings(output.defaultRouteSettings, context)
        : undefined,
    DeploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    Description: output.description !== undefined && output.description !== null ? output.description : undefined,
    LastDeploymentStatusMessage:
      output.lastDeploymentStatusMessage !== undefined && output.lastDeploymentStatusMessage !== null
        ? output.lastDeploymentStatusMessage
        : undefined,
    LastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(output.lastUpdatedDate)
        : undefined,
    RouteSettings:
      output.routeSettings !== undefined && output.routeSettings !== null
        ? deserializeAws_restJson1RouteSettingsMap(output.routeSettings, context)
        : undefined,
    StageName: output.stageName !== undefined && output.stageName !== null ? output.stageName : undefined,
    StageVariables:
      output.stageVariables !== undefined && output.stageVariables !== null
        ? deserializeAws_restJson1StageVariablesMap(output.stageVariables, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  };
};
const deserializeAws_restJson1StageVariablesMap = (output, context) => {
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
const deserializeAws_restJson1SubnetIdList = (output, context) => {
  return (output || [])
    .filter((e) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null;
      }
      return entry;
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
const deserializeAws_restJson1TemplateMap = (output, context) => {
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
const deserializeAws_restJson1TlsConfig = (output, context) => {
  return {
    ServerNameToVerify:
      output.serverNameToVerify !== undefined && output.serverNameToVerify !== null
        ? output.serverNameToVerify
        : undefined,
  };
};
const deserializeAws_restJson1VpcLink = (output, context) => {
  return {
    CreatedDate:
      output.createdDate !== undefined && output.createdDate !== null ? new Date(output.createdDate) : undefined,
    Name: output.name !== undefined && output.name !== null ? output.name : undefined,
    SecurityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    SubnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1SubnetIdList(output.subnetIds, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
    VpcLinkId: output.vpcLinkId !== undefined && output.vpcLinkId !== null ? output.vpcLinkId : undefined,
    VpcLinkStatus:
      output.vpcLinkStatus !== undefined && output.vpcLinkStatus !== null ? output.vpcLinkStatus : undefined,
    VpcLinkStatusMessage:
      output.vpcLinkStatusMessage !== undefined && output.vpcLinkStatusMessage !== null
        ? output.vpcLinkStatusMessage
        : undefined,
    VpcLinkVersion:
      output.vpcLinkVersion !== undefined && output.vpcLinkVersion !== null ? output.vpcLinkVersion : undefined,
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
